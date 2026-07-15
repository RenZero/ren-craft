// 攝影作品資料 (Photography Gallery Data)
export interface PhotoExif {
  camera: string;
  lens: string;
  aperture: string;
  film: string;
  location?: string;
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  exif: PhotoExif;
}

export const photos: Photo[] = [
  {
    id: "photo-01",
    src: "/photos/leica-m6-kyoto-01.jpg",
    alt: "Leica M6 Film Photography by Ren Chen — Kyoto street scene at golden hour",
    title: "Kyoto — Golden Hour",
    exif: {
      camera: "Leica M6",
      lens: "Summicron 35mm f/2",
      aperture: "f/2.8",
      film: "Kodak Portra 400",
      location: "Kyoto, Japan",
    },
  },
  {
    id: "photo-02",
    src: "/photos/leica-m6-taipei-02.jpg",
    alt: "Leica M6 Film Photography by Ren Chen — Taipei night market street",
    title: "Taipei — Night Market",
    exif: {
      camera: "Leica M6",
      lens: "Summicron 50mm f/2",
      aperture: "f/2",
      film: "Fujifilm Superia 400",
      location: "Taipei, Taiwan",
    },
  },
  {
    id: "photo-03",
    src: "/photos/fm2-mountain-03.jpg",
    alt: "Nikon FM2 Film Photography by Ren Chen — Mountain landscape with clouds",
    title: "Mountains — Silence",
    exif: {
      camera: "Nikon FM2",
      lens: "Nikkor 28mm f/2.8",
      aperture: "f/8",
      film: "Ilford HP5 Plus 400",
      location: "Taiwan Alps",
    },
  },
  {
    id: "photo-04",
    src: "/photos/leica-m6-hongkong-04.jpg",
    alt: "Leica M6 Film Photography by Ren Chen — Hong Kong tram and neon signs",
    title: "Hong Kong — Neon Tram",
    exif: {
      camera: "Leica M6",
      lens: "Summilux 35mm f/1.4",
      aperture: "f/1.4",
      film: "Kodak ColorPlus 200",
      location: "Hong Kong",
    },
  },
];
