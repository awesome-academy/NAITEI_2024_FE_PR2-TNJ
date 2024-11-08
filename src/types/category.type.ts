import { SubCategory } from './subCategory.type';

interface Category {
  id: string;
  title: string;
  subCategories: SubCategory[];
}

export type { Category };
