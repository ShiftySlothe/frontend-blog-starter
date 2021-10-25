export type Post = {
  author: Author;
  coverImage: Image;
  date: string;
  excerpt: string;
  slug: string;
  title: string;
};

export type Author = {
  name: string;
  picture: Image;
};

export type Image = {
  url: string;
};
