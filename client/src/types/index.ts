export interface IAbouts {
  _id: string;
  title: string;
  desc: string;
  image: string;
}

export interface ISkill {
  _id: string;
  title: string;
  image: string;
  bgColor?: string;
}

export interface IXp {
  _id: string;
  year: number;
  works: IExpirience[];
}

export interface IExpirience {
  _id: string;
  name: string;
  empresa: string;
  desc: string;
}

export interface ITestemonial {
  _id: string;
  autor: string;
  image: string;
  msg: string;
  company: string;
}

export interface IWork {
  _id: string;
  title: string;
  desc: string;
  link: string;
  tags: string[];
  image: string;
  codeLink: string;
}
