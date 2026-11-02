const container = document.getElementById('analytics-consent');

if (container instanceof HTMLElement && location.origin === container.dataset.siteOrigin) {
  const measurementId = container.dataset.measurementId!;
  const banner = container.querySelector<HTMLElement>('[data-analytics-banner]')!;
  const preferences = container.querySelector<HTMLButtonElement>('[data-analytics-preferences]')!;
  const accept = container.querySelector<HTMLButtonElement>('[data-analytics-accept]')!;
  const reject = container.querySelector<HTMLButtonElement>('[data-analytics-reject]')!;
  const storageKey = 'hguerra-analytics-consent-v1';
  const lifetime = 180 * 24 * 60 * 60 * 1000;
  const gaWindow = window as unknown as Record<string, unknown>;
  const disableKey = `ga-disable-${measurementId}`;
  let granted = false;
  let loaded = false;

  // Queue only safe commands. No Google request is made until explicit consent.
  const dataLayer = (gaWindow.dataLayer ??= []) as unknown[];
  function gtag(..._args: unknown[]) { dataLayer.push(arguments); }
  gaWindow.gtag = gtag;
  gaWindow[disableKey] = true;
  gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });

  function readConsent(): string | null {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey) ?? 'null');
      if (value && ['granted', 'denied'].includes(value.choice)
        && Number.isFinite(value.at) && value.at <= Date.now()
        && Date.now() - value.at < lifetime) return value.choice;
    } catch { /* Storage unavailable or invalid: do not assume consent. */ }
    return null;
  }

  function clearAnalyticsCookies() {
    const names = document.cookie.split(';').map((cookie) => cookie.trim().split('=')[0])
      .filter((name) => name === '_ga' || name === `_ga_${measurementId.slice(2)}`);
    for (const name of names) {
      const base = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure`;
      document.cookie = base;
      const parts = location.hostname.split('.');
      for (let i = 0; i < parts.length - 1; i++) {
        document.cookie = `${base}; Domain=${parts.slice(i).join('.')}`;
      }
    }
  }

  function setConsent(choice: string, persist = true) {
    const wasGranted = granted;
    granted = choice === 'granted';
    if (persist) {
      try { localStorage.setItem(storageKey, JSON.stringify({ choice, at: Date.now() })); }
      catch { /* Choice still applies to this page when storage is unavailable. */ }
    }
    gaWindow[disableKey] = !granted;
    if (granted) {
      gtag('consent', 'update', { analytics_storage: 'granted' });
      if (!loaded) {
        loaded = true;
        // Exclude query/hash and referrer paths, which may contain personal data.
        let referrer = '';
        try { referrer = new URL(document.referrer).origin; } catch { /* No referrer. */ }
        gtag('set', {
          page_location: `${location.origin}${location.pathname}`,
          page_referrer: referrer
        });
        gtag('js', new Date());
        gtag('config', measurementId, {
          send_page_view: false,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          cookie_domain: 'none', cookie_flags: 'SameSite=Lax;Secure'
        });
        const script = document.createElement('script');
        script.async = true;
        script.referrerPolicy = 'no-referrer';
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.append(script);
      }
      if (!wasGranted) gtag('event', 'page_view');
    } else {
      // Disable collection before updating consent; no page reload or form loss.
      gtag('consent', 'update', { analytics_storage: 'denied' });
      clearAnalyticsCookies();
    }
    banner.hidden = true;
    reject.textContent = granted ? 'Retirar consentimiento' : 'Rechazar';
  }

  preferences.hidden = false;
  preferences.addEventListener('click', () => {
    banner.hidden = false;
    reject.focus();
  });
  accept.addEventListener('click', () => { setConsent('granted'); preferences.focus(); });
  reject.addEventListener('click', () => { setConsent('denied'); preferences.focus(); });
  // A choice in another tab must apply here too; invalid/expired storage denies.
  window.addEventListener('storage', (event) => {
    if (event.key === storageKey || event.key === null) setConsent(readConsent() ?? 'denied', false);
  });
  document.addEventListener('hg:lead-generated', () => {
    if (granted) gtag('event', 'generate_lead', { form_name: 'contact' });
  });

  const saved = readConsent();
  if (saved) setConsent(saved, false);
  else { clearAnalyticsCookies(); banner.hidden = false; }
}
