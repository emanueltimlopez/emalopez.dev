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
    title: 'RocketCode',
    description: 'Pre-recorded programming courses platform.',
    link: 'https://pasaporterocketcode.com/',
    stack: 'NextJS, Vercel, Sendgrid, ReactJS, Firebase, Typescript, Amplitud',
    users: '4000+ students' 
  },
  {
    title: 'Superb',
    description: 'Token economy boards to reinforce behaviors in therapy for children.',
    link: 'https://play.google.com/store/apps/details?id=com.wombat.superb&hl=es&gl=US',
    stack: 'Vercel, React Native, Typescript, Expo, Play Store',
    code: 'https://github.com/emanueltimlopez/superb',
    users: '50+ users'
  }
]
