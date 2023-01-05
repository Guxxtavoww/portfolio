import { ISkill, IXp } from 'types';

export const skillsData: ISkill[] = [
  {
    _id: '6287c0ea1974558dcf031798',
    title: 'HTML',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653063912199html.png?alt=media&token=fcd5e110-d37b-43f1-86ae-a02ae07215e6',
  },
  {
    _id: '628818a9b2acca8c9d664162',
    title: 'SASS',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653086374789sass.png?alt=media&token=9b55ad12-d480-460a-9e54-8e165d487867',
  },
  {
    _id: '628818c8b2acca8c9d664165',
    title: 'JAVASCRIPT',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653086406522js.png?alt=media&token=facf4f64-0c0c-4ea6-8db6-f06c83a19f4d',
  },
  {
    _id: '628818f7b2acca8c9d66416c',
    title: 'Typescript',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653086453075typescript.png?alt=media&token=16d0f94a-17ab-4289-8247-c72cbc3906cc',
  },
  {
    _id: '6288191eb2acca8c9d664172',
    title: 'Banco de Dados',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1653086492322mongo.png?alt=media&token=8c3732eb-7408-486f-bf0b-ab37e20274cb',
  },
  {
    _id: '62968aef2c65e2852104e1f6',
    title: 'React Native',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1654033131407React%20Native.png?alt=media&token=083b9bec-eb2e-4f6a-bbaa-978b67fe8cbb',
  },
  {
    _id: '630df1e5799a24b9dbce8074',
    title: 'Git',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1661858275457git-logo.png?alt=media&token=cfce9891-eea6-4106-a0b5-391fac726f4f',
  },
  {
    _id: '630f446f3ea498b68d2ec9df',
    title: 'Docker (Iniciante)',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-ccd8c.appspot.com/o/1661944942619docker.png?alt=media&token=f3885c1d-bb0a-4fe3-9eeb-4f618305e851',
  },
];

export const xpData: IXp[] = [
  {
    _id: '630e01ce930b308549535e7d',
    year: 2021,
    works: [
      {
        name: 'Primeiro Freelancer',
        empresa: '4Decision',
        desc: 'Desenvolvi o website dessa empresa',
        _id: '630e01ce930b308549535e7e',
      },
    ],
  },
  {
    _id: '630e024f930b308549535e85',
    year: 2022,
    works: [
      {
        name: 'Freelancer',
        empresa: 'Happiness Contabilidade',
        desc: 'Desenvolvi o front & back-end para essa empresa.',
        _id: '630e024f930b308549535e86',
      },
      {
        name: 'Dev Júnior',
        empresa: 'PDA Soluções',
        desc: 'Trabalho como Dev React.',
        _id: '630e024f930b308549535e87',
      },
    ],
  },
];
