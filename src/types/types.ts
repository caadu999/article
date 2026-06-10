export type Author = {
  name: string;
};

export type Article = {
  id: number;
  title: string;
  authors: Author[];
  image_url: string;
  summary: string;
  published_at: string;
  url: string;
};

export type Data = {
  results: Article[];
};
