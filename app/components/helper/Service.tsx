import { StaticImageData } from 'next/image';

export interface Service {
  title: string;
  image: StaticImageData;
  description: string;
}
