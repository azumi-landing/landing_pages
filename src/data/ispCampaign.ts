interface IspImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface IspSituation {
  id: string;
  title: string;
  description: string;
  image: IspImage;
}

export const ispCtaLabel = 'Conversemos sobre tu ISP';

export const ispProblems: IspSituation[] = [
  {
    id: 'comercial',
    title: 'Seguimiento a clientes',
    description: 'Consultas, activaciones, facturas y pagos repartidos entre sistemas y conversaciones.',
    image: {
      src: '/images/isp/01-seguimiento-clientes.svg',
      alt: 'Cliente esperando atención frente al mostrador de un ISP.',
      width: 988, height: 984
    }
  },
  {
    id: 'operativa',
    title: 'Coordinación de instalaciones',
    description: 'Órdenes de servicio, agenda y antecedentes difíciles de consultar para coordinar al equipo.',
    image: {
      src: '/images/isp/02-coordinacion-instalaciones.svg',
      alt: 'Personal con un router y una orden para una instalación domiciliaria.',
      width: 997, height: 861
    }
  },
  {
    id: 'tecnica',
    title: 'Priorización de fallas',
    description: 'Alertas y reclamos sin suficiente relación con los servicios y clientes afectados.',
    image: {
      src: '/images/isp/03-priorizacion-fallas.svg',
      alt: 'Técnico revisando equipos de red con alertas pendientes.',
      width: 988, height: 804
    }
  }
];

export const ispConsequences: IspSituation[] = [
  {
    id: 'cancelaciones',
    title: 'Cancelaciones',
    description: 'Cuesta reconstruir qué ocurrió y entender los motivos de la salida del cliente.',
    image: {
      src: '/images/isp/04-cancelacion-devolucion-router.svg',
      alt: 'Cliente devolviendo su router en el mostrador del ISP.',
      width: 988, height: 843
    }
  },
  {
    id: 'cobros',
    title: 'Cobros pendientes',
    description: 'Diferencias entre servicios, facturas y pagos pueden quedar sin revisar.',
    image: {
      src: '/images/isp/05-cobros-pendientes.svg',
      alt: 'Cliente con una factura pendiente frente al personal del ISP.',
      width: 988, height: 984
    }
  },
  {
    id: 'reclamos',
    title: 'Reclamos acumulados',
    description: 'Sin historial conectado, cuesta identificar recurrencias y coordinar la atención.',
    image: {
      src: '/images/isp/06-reclamos-acumulados.svg',
      alt: 'Varias personas esperando ser atendidas por el ISP.',
      width: 994, height: 686
    }
  }
];

export const ispSolutions: { title: string; details: string[]; image: IspImage }[] = [
  {
    title: 'Integración y automatización',
    details: [
      'Conecto gestión de clientes, facturación, órdenes de servicio y monitoreo mediante las interfaces disponibles.',
      'Relaciono registros y automatizo avisos, actualizaciones y tareas de seguimiento.'
    ],
    image: {
      src: '/images/isp/07-integracion-automatizacion.svg',
      alt: 'Equipos de red y una aplicación conectados para trabajar con información relacionada.',
      width: 1176, height: 774
    }
  },
  {
    title: 'Soluciones a medida',
    details: [
      'Desarrollo aplicaciones o módulos con historial, pendientes, responsables y alertas.',
      'Construyo vistas e indicadores para revisar cobros, instalaciones y calidad del servicio. Acordamos objetivo, fórmula, fuentes y responsables de cada KPI.'
    ],
    image: {
      src: '/images/isp/08-desarrollo-a-medida.svg',
      alt: 'Dos profesionales desarrollando una solución conectada con sistemas de un ISP.',
      width: 1176, height: 774
    }
  }
];

export const ispMeeting: IspImage = {
  src: '/images/isp/09-reunion-consultoria.svg',
  alt: 'Dos personas conversando sobre una necesidad de negocio y una posible solución.',
  width: 988, height: 704
};
