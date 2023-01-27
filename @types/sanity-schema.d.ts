type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  topics: Topic[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Recipe extends Base {
  author: Author;
  body: Block[];
  cuisine: Cuisine[];
  ingredients: Ingredient[];
  mainImage?: Image;
  slug: Slug;
  title: string;
  description?: string;
  tags?: Tag[];
  calories?: number;
  servings?: number;
  cookTime?: string;
}

interface Ingredient extends Base {
  name: string;
  icon: Image;
  description: string;
  filterable: boolean;
  wholeNumber?: number;
  fraction?: string;
  unit?: string;
  reference?: string;
  instruction?: string;
}

interface Cuisine extends Base {
  cuisine: string;
  icon: Image;
  description: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Tag extends Base {
  name: string;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Topic extends Base {
  title: string;
  description: string;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Title {
  _type: 'string';
  current: string;
}
