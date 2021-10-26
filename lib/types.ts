export type Post = {
  author: Author;
  coverImage: Image;
  date: string;
  excerpt?: string;
  slug: string;
  title: string;
  content?: string;
  ogImage?: Image;
};

export type Author = {
  name: string;
  picture: Image;
};

export type Image = {
  url: string;
};
