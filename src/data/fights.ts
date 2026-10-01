import type { ImageMetadata } from 'astro';

// Import images
import imgWestcol from '../assets/peleadores/westcolpelea.jpeg';
import imgBlessd from '../assets/peleadores/blesdpelea.jpeg';
import posterWestcolBlessd from '../assets/peleadores/westcol-vs-blesd.jpeg';

import imgAgropecuario from '../assets/peleadores/elagropecuario.jpeg';
import imgDaren from '../assets/peleadores/daren.jpeg';
import posterAgroDaren from '../assets/peleadores/elagropecuario-vs-daren.jpeg';

import imgValentino from '../assets/peleadores/valentino.jpeg';
import imgEmiro from '../assets/peleadores/emiro.jpeg';
import posterValentinoEmiro from '../assets/peleadores/valentino-vs-emiro.jpeg';

import imgHerrera from '../assets/peleadores/herrera.jpeg';
import imgJh from '../assets/peleadores/jh.jpeg';
import posterHerreraJh from '../assets/peleadores/herrera-vs-jh.jpeg';

import imgSebastucho from '../assets/peleadores/sebastucho.jpeg';
import imgLeandro from '../assets/peleadores/leandro.jpeg';
import posterSebastuchoLeandro from '../assets/peleadores/sebastucho-vs-leandro.jpeg';

import imgRey from '../assets/peleadores/reydelacity.png';
import imgWegot from '../assets/peleadores/wegotkicks.png';
import posterReyWegot from '../assets/peleadores/rey-vs-wegot.png';

export interface Fighter {
  name: string;
  nickname: string;
  color: string;
  image?: ImageMetadata;
  stats?: {
    age: number;
    height: string;
    weight: string;
    reach: string;
  };
  socials?: {
    instagram?: string;
    kick?: string;
    twitter?: string;
  };
}

export interface Fight {
  id: number;
  label: string;
  labelColor: string;
  weight: string;
  fighter1: Fighter;
  fighter2: Fighter;
  fighter3?: Fighter;
  description: string;
  gradient: string;
  isMainEvent?: boolean;
  posterImage?: ImageMetadata;
}

const defaultStats = { age: 24, height: "1.75m", weight: "70kg", reach: "1.78m" };
const defaultSocials = { instagram: "https://instagram.com", kick: "https://kick.com" };

export const fights: Fight[] = [
  {
    id: 1,
    isMainEvent: true,
    label: 'Main Event',
    labelColor: 'red',
    weight: 'Peso Libre',
    fighter1: { 
      name: 'WestCol', nickname: 'El Organizador', color: 'text-sf-primary',
      image: imgWestcol,
      stats: { age: 23, height: '1.74m', weight: '76kg', reach: '1.76m' },
      socials: { instagram: 'https://instagram.com/westcol', kick: 'https://kick.com/westcol' }
    },
    fighter2: { 
      name: 'Blessd', nickname: 'El Bendito', color: 'text-sf-secondary',
      image: imgBlessd,
      stats: { age: 24, height: '1.78m', weight: '74kg', reach: '1.80m' },
      socials: { instagram: 'https://instagram.com/blessd', twitter: 'https://x.com/blessd' }
    },
    description: 'El combate más esperado. Dos gigantes del internet y la música urbana colombiana frente a frente.',
    gradient: 'rgba(127,0,0,0.35), rgba(88,0,127,0.25)',
    posterImage: posterWestcolBlessd
  },
  {
    id: 2,
    label: 'Co-Main Event',
    labelColor: 'purple',
    weight: 'Categoría Libre',
    fighter1: { name: 'Rey de la City', nickname: 'El Monarca', color: 'text-purple-400', stats: defaultStats, socials: defaultSocials, image: imgRey },
    fighter2: { name: 'Wegotkicks', nickname: 'El Sneakerhead', color: 'text-pink-400', stats: defaultStats, socials: defaultSocials, image: imgWegot },
    description: 'Estilo y flow en el ring. Una pelea donde el honor de la calle está en juego.',
    gradient: 'rgba(88,28,135,0.35), rgba(131,24,67,0.30)',
    posterImage: posterReyWegot
  },
  {
    id: 3,
    label: 'Pelea de Renombre',
    labelColor: 'default',
    weight: 'Peso Medio',
    fighter1: { name: 'Sebastucho', nickname: 'La Locura', color: 'text-blue-400', stats: defaultStats, socials: defaultSocials, image: imgSebastucho },
    fighter2: { name: 'Leandro', nickname: 'El Estratega', color: 'text-cyan-400', stats: defaultStats, socials: defaultSocials, image: imgLeandro },
    description: 'Rivalidad al máximo nivel. La técnica de Leandro contra la explosividad de Sebastucho.',
    gradient: 'rgba(29,78,216,0.35), rgba(21,94,117,0.30)',
    posterImage: posterSebastuchoLeandro
  },
  {
    id: 4,
    label: 'Choque de Titanes',
    labelColor: 'red',
    weight: 'Peso Pesado',
    fighter1: { name: 'Herrera', nickname: 'El Fuerte', color: 'text-green-400', stats: defaultStats, socials: defaultSocials, image: imgHerrera },
    fighter2: { name: 'JH', nickname: 'El Imparable', color: 'text-yellow-400', stats: defaultStats, socials: defaultSocials, image: imgJh },
    description: 'Un verdadero choque de trenes. El Coliseo MedPlus temblará con cada golpe.',
    gradient: 'rgba(20,83,45,0.35), rgba(113,63,18,0.30)',
    posterImage: posterHerreraJh
  },
  {
    id: 5,
    label: 'El Clásico',
    labelColor: 'default',
    weight: 'Peso Welter',
    fighter1: { name: 'Valentino', nickname: 'El Galán', color: 'text-rose-400', stats: defaultStats, socials: defaultSocials, image: imgValentino },
    fighter2: { name: 'Emiro', nickname: 'El Fuego', color: 'text-orange-400', stats: defaultStats, socials: defaultSocials, image: imgEmiro },
    description: 'Duelo de personalidades. Valentino busca mantener su buena racha ante un Emiro hambriento de victoria.',
    gradient: 'rgba(136,19,55,0.35), rgba(51,65,85,0.30)',
    posterImage: posterValentinoEmiro
  },
  {
    id: 6,
    label: 'Apertura',
    labelColor: 'default',
    weight: 'Peso Pluma',
    fighter1: { name: 'El Agropecuario', nickname: 'El de la Finca', color: 'text-lime-400', stats: defaultStats, socials: defaultSocials, image: imgAgropecuario },
    fighter2: { name: 'Daren', nickname: 'El Urbano', color: 'text-indigo-400', stats: defaultStats, socials: defaultSocials, image: imgDaren },
    description: 'El campo contra la ciudad. Una pelea que calentará los motores para toda la velada.',
    gradient: 'rgba(112,26,117,0.35), rgba(76,29,149,0.30)',
    posterImage: posterAgroDaren
  }
];
