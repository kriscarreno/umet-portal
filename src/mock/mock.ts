import { Program } from "../types/programs";

export const programs: Program[] = [
  {
    name: "Física",
    description:
      "El programa de Física está diseñado para proporcionar a los estudiantes…",
    avg_stars: 4.6,
    image: "/images/program1.png",
    id: 1,
    categories: [],
    duration_years: 5,
    program_type: {
      id: 1,
      name: "Licenciatura",
    },
    total_enrollments: 100,
  },
];

// export const categories = [
//   {
//     label: "Ciencias",
//     icon: <Science sx={{ width: "24px", height: "24px" }} />,
//   },
//   {
//     label: "Tecnología",
//     icon: <Build sx={{ width: "24px", height: "24px" }} />,
//   },
//   {
//     label: "Ingeniería",
//     icon: <Science sx={{ width: "24px", height: "24px" }} />,
//   },
//   {
//     label: "Letras",
//     icon: <MenuBook sx={{ width: "24px", height: "24px" }} />,
//   },
//   { label: "Arte", icon: <Brush sx={{ width: "24px", height: "24px" }} /> },
//   {
//     label: "Negocios",
//     icon: <Business sx={{ width: "24px", height: "24px" }} />,
//   },
//   {
//     label: "Derecho",
//     icon: <Balance sx={{ width: "24px", height: "24px" }} />,
//   },
//   {
//     label: "Salud",
//     icon: <Favorite sx={{ width: "24px", height: "24px" }} />,
//   },
// ];

export const professors = [
  {
    name: "Carlos Mendoza",
    title: "Profesor Titular de Ingeniería de Software",
    description:
      "Doctor en Ciencias de la Computación con 15 años de experiencia en desarrollo de software y metodologías ágiles.",
    image: "/images/img2.jpg",
  },
  {
    name: "María Jiménez",
    title: "Profesora Asociada de Estructuras",
    description:
      "Ingeniera Civil con maestría en Estructuras. Especialista en análisis estructural y diseño sísmico.",
    image: "/images/img2.jpg",
  },
  {
    name: "Roberto Vega",
    title: "Profesor Principal de Química",
    description:
      "PhD en Química Orgánica. Investigador en síntesis de nuevos materiales y procesos industriales.",
    image: "/images/img2.jpg",
  },
];

export const slides = [
  {
    name: "Descuento de Verano",
    description:
      "Aprovecha nuestro descuento especial de verano y obtén hasta un 50% de descuento en productos seleccionados.",
    imageLeft: "/images/laptop.png",
    imageRight: "/images/accessory.png",
  },
  {
    name: "Oferta Especial",
    description:
      "Consigue productos electrónicos con hasta un 40% de descuento por tiempo limitado.",
    imageLeft: "/images/laptop.png",
    imageRight: "/images/accessory.png",
  },
];
