export interface IProject {
  title: string;
  link?: string;
  code?: string;
  description: string;
  stack: string;
  users?: string;
}

export const projects: IProject[] = [
  {
    title: "RocketCode",
    description: "Plataforma de cursos pregrabados sobre programación en español.",
    link: "https://pasaporterocketcode.com/",
    stack: "NextJS, Vercel, Sendgrid, ReactJS, Firebase, Typescript, Amplitud",
    users: "4000+ estudiantes",
  },
  {
    title: "Superb",
    description:
      "Aplicacion con tableros de economía de fichas para reforzar conducta en terapia infantojuvenil",
    link: "https://play.google.com/store/apps/details?id=com.wombat.superb&hl=es&gl=US",
    stack: "Vercel, React Native, Typescript, Expo, Play Store",
    code: "https://github.com/emanueltimlopez/superb",
    users: "100+ usuarios",
  },
];
