// Main reference: AI Adoption Maturity Model v1.0, sections 2.2, 4.2 and 5.2.
export const methodologyStages = [
  { number: '01', title: 'Comprender y evaluar', description: 'Acordamos qué desafío resolver y evaluamos las capacidades actuales con evidencia, no con suposiciones.', items: ['Objetivos, personas y restricciones', 'Punto de partida y brechas relevantes'] },
  { number: '02', title: 'Priorizar y diseñar', description: 'Definimos hacia dónde avanzar y una hoja de ruta que considere valor, esfuerzo, riesgos y dependencias.', items: ['Estado objetivo acorde al negocio', 'Iniciativas y criterios de éxito'] },
  { number: '03', title: 'Implementar y mejorar', description: 'Construyo lo acordado y acompaño su uso. Medimos, aprendemos y ajustamos antes de ampliar el alcance.', items: ['Integración, controles y transferencia', 'Adopción y evolución continua'] }
] as const;
export const maturityDimensions = [
  { title: 'Capacidades organizacionales', description: 'La tecnología necesita dirección y un equipo preparado para incorporarla.', items: ['Estrategia y objetivos', 'Personas y cultura', 'Procesos de trabajo', 'Riesgos y gobierno'] },
  { title: 'Capacidades de ingeniería', description: 'El cambio necesita información confiable y soluciones que puedan sostenerse.', items: ['Datos y calidad', 'Ingeniería y evaluación', 'Operación y seguimiento', 'Ecosistema tecnológico'] }
] as const;
export const methodologyActivities = [
  { title: 'Comprender el desafío', output: 'Objetivos, alcance, restricciones y responsables definidos.' },
  { title: 'Evaluar capacidades y madurez', output: 'Situación actual, evidencia y brechas relevantes para el alcance.' },
  { title: 'Definir la hoja de ruta', output: 'Iniciativas priorizadas, dependencias y criterios de éxito.' },
  { title: 'Diseñar e implementar', output: 'Solución integrada, controles, documentación y transferencia.' },
  { title: 'Acompañar y ajustar', output: 'Seguimiento del uso, resultados y decisiones de evolución.' }
] as const;
export const businessFaqs = [
  { question: '¿Necesito tener claro qué solución quiero?', answer: 'No. Podemos empezar por el desafío. La evaluación ayuda a distinguir qué conviene ordenar, qué capacidades faltan y dónde una solución técnica puede aportar valor.' },
  { question: '¿La evaluación termina en un informe?', answer: 'El objetivo es una hoja de ruta accionable. Puedo acompañarte a ejecutarla e implementar las soluciones acordadas; el alcance de cada etapa se define con vos.' },
  { question: '¿Todo lo que proponés utiliza IA?', answer: 'No. Algunas mejoras requieren datos confiables, una integración o un cambio de proceso. Propongo IA cuando su utilidad y sus riesgos justifican incorporarla.' },
  { question: '¿Tenemos que reemplazar nuestros sistemas?', answer: 'No necesariamente. Reviso lo que ya funciona y diseño las integraciones según tus restricciones. La elección técnica depende del problema, no de un proveedor preferido.' },
  { question: '¿Qué pasa con las decisiones sensibles?', answer: 'Definimos responsabilidades, permisos, revisión humana y qué hacer ante excepciones. El grado de autonomía depende del riesgo y de la evaluación de la solución.' },
  { question: '¿Cuánto cuesta y cuánto tiempo toma?', answer: 'Depende del alcance, el punto de partida y las dependencias. Después de entender el contexto, acordamos entregables, condiciones y una ruta realista antes de iniciar el trabajo.' }
];
