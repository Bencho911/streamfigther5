export interface Testimonial {
  name: string;
  handle: string;
  platform: string;    // 'kick' | 'twitter' | 'instagram' | 'tiktok'
  edition: string;     // e.g. "SF4 — 2025"
  quote: string;
  avatar: string;      // emoji fallback
  rating: number;      // 1-5
}

export const testimonials: Testimonial[] = [
  {
    name: 'Daniela Gómez',
    handle: '@daniela_gm99',
    platform: 'twitter',
    edition: 'SF4 — 2025',
    quote: 'Fui con mis amigos sin saber qué esperar y terminé llorando de emoción. La entrada de WestCol al ring con pirotecnia me dejó sin palabras. El Coliseo vibró como nunca.',
    avatar: '👩🏽',
    rating: 5,
  },
  {
    name: 'Andrés Castaño',
    handle: '@andres_c_med',
    platform: 'instagram',
    edition: 'SF3 — 2024',
    quote: 'Yo estaba esperando un show de creadores de contenido y me encontré con boxeo de verdad, con todo el profesionalismo. Los artistas entre peleas son un plus que no ves en ningún otro evento.',
    avatar: '👨🏻',
    rating: 5,
  },
  {
    name: 'Valentina Ríos',
    handle: 'valentina_rios',
    platform: 'tiktok',
    edition: 'SF4 — 2025',
    quote: '¡Compré VIP Ring Side y valió cada peso! Estaba literalmente a 3 metros del ring. Se siente el impacto de cada golpe. La producción es de nivel mundial, sin exagerar.',
    avatar: '👩🏻',
    rating: 5,
  },
  {
    name: 'Sebastián Mora',
    handle: 'Sebs_Mora21',
    platform: 'twitter',
    edition: 'SF2 — 2023',
    quote: 'Lo vi desde casa por Kick en el SF2 y no aguanté, para el SF4 compré boleta en primera fila. La diferencia es abismal. El ambiente en el Coliseo es indescriptible, hay que vivirlo.',
    avatar: '👨🏽',
    rating: 5,
  },
  {
    name: 'Camila Pedraza',
    handle: '@cami.ped',
    platform: 'instagram',
    edition: 'SF4 — 2025',
    quote: 'Vine desde Cali con mis primas y fue el mejor viaje de nuestras vidas. La organización impecable, seguridad excelente y el nivel de los shows sorprendió a todo el mundo. Ya compramos para el 5.',
    avatar: '👩🏾',
    rating: 5,
  },
  {
    name: 'Mateo Herrera',
    handle: 'mateoherrera_k',
    platform: 'kick',
    edition: 'SF3 — 2024',
    quote: 'Soy streamer pequeño y este evento me hizo ver todo diferente. WestCol construyó algo que nos representa a todos. La escena del boxeo con creadores de contenido es el futuro y Colombia lo está liderando.',
    avatar: '👨🏼',
    rating: 5,
  },
];
