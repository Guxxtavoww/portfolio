import { IWork } from 'types';

export const tags = [
  'React JS',
  'Typescript',
  'Firebase',
  'Node JS',
  'Banco de Dados',
  'Todos',
];

const projectsData: IWork[] = [
  {
    _id: '628807f01fe8a5497f7af1b0',
    title: 'Galeria de Fotos',
    desc: 'Um projeto de galeria de fotos c/ upload, utilizando Typescript com React JS, Firebase e styled-components',
    link: 'https://typescript-galeria.netlify.app/',
    tags: ['Firebase', 'React JS', 'Todos', 'Banco de Dados'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653082092783galeria-de-fotos.png?alt=media&token=ef09b3bc-5155-46f3-8874-c34b411af2d0',
    codeLink: '',
  },
  {
    _id: Date.now().toString(),
    title: 'Aplicativo de controle de finanças',
    link: 'https://finantial-control.netlify.app/',
    desc: 'Feito com typescript e custom hooks, esse app persiste dados até quando a página é recarregada',
    image: 'img/finantial-control-pic.PNG',
    codeLink: 'https://github.com/Guxxtavoww/financial-control',
    tags: ['React JS', 'Todos'],
  },
  {
    _id: '628808221fe8a5497f7af1b3',
    title: 'Memórias MERN',
    desc: 'Uma aplicação destinada á guardar memórias, e usando material UI.',
    link: 'https://memorias-projeto-mern.netlify.app/',
    tags: ['Node JS', 'Banco de Dados', 'Todos', 'React JS'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653082144682proj1.png?alt=media&token=bddfa7a5-b062-4912-a94a-a213cc395f3c',
    codeLink: '',
  },
  {
    _id: '628808821fe8a5497f7af1b6',
    title: 'Aplicativo de Busca de Emojis',
    desc: 'Um App usando um JSON com os emojis mais populares!',
    link: 'https://busca-de-emojis.netlify.app/',
    tags: ['React JS', 'Todos'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653082239542proj2.png?alt=media&token=89b09ffc-6275-4d86-bceb-f7a4aa311f6b',
    codeLink: '',
  },
  {
    _id: '628808c51fe8a5497f7af1b9',
    title: 'Website Responsivo',
    desc: 'Landing Page Desenvolvida com Styled Components.',
    link: 'https://react-test-website-ga.netlify.app/',
    tags: ['React JS', 'Todos'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653082306849proj3.png?alt=media&token=fa9d889c-4f30-4201-b1a5-7cc01c686bb6',
    codeLink: '',
  },
  {
    _id: '628809021fe8a5497f7af1bc',
    title: 'Lista de Tarefas (Typescript)',
    desc: 'Um projeto que desenvolvi enquanto estudo Typescript com React JS. Uma simples lista de tarefas',
    link: 'https://lista-typescript.netlify.app/',
    tags: ['Typescript', 'React JS', 'Todos'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653082367985proj4.png?alt=media&token=98fc1481-b91e-4aff-be9e-952ad6ff47c7',
    codeLink: '',
  },
  {
    _id: '6288093f1fe8a5497f7af1bf',
    title: 'Front End Website',
    desc: 'O primeiro projeto com React-Router-Dom & Styled Components. (Apenas o Front End).',
    link: 'https://primeiro-site.netlify.app/',
    tags: ['React JS', 'Todos'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653082424282proj5.png?alt=media&token=fa35a2cf-10e3-4fda-8010-84199280b94f',
    codeLink: '',
  },
  {
    _id: '6288098a1fe8a5497f7af1c2',
    title: 'Blog App',
    desc: 'Um blog criado com Context Api & styled-components!',
    link: 'https://blog-mern.netlify.app/',
    tags: ['Node JS', 'React JS', 'Todos', 'Banco de Dados'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653082503421proj6.png?alt=media&token=41a7ede8-52db-4faf-b933-dec0656c1748',
    codeLink: 'https://github.com/Guxxtavoww/blog-mern',
  },
  {
    _id: '629533df8341028bbbb668f6',
    title: 'Formulário multi-passos c/Typescript',
    desc: 'Esse é um projeto feito com Typescript, Context API & Styled-Components.',
    link: 'https://formulario-com-passos.netlify.app/',
    tags: ['Typescript', 'React JS', 'Todos'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653945303457Captura%20de%20Tela%20(4).png?alt=media&token=8b8af89d-0cdd-4e59-ad30-c6d64b1d8f92',
    codeLink: 'https://github.com/Guxxtavoww/form-passos',
  },
];

export default projectsData;
