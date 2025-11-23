export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
}