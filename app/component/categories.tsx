import { client } from "@/sanity/lib/sanity";
import { CategoryCard } from "./category-card";

// Category interface تعریف کریں
interface Category {
  title: string;
  image: string;
  products: number;
  slug: string;
}

async function getCategories(): Promise<Category[]> {
  const query = `*[_type == "categories"] {
    title,
    "image": image.asset->url,
    products,
    "slug": slug.current
  }`;

  const data: Category[] = await client.fetch(query);
  return data;
}

export async function Categories() {
  const categories = await getCategories();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { (categories || []).map((category) => (
            <CategoryCard 
              key={category.title} 
              title={category.title}
              productCount={category.products}
              image={category.image}
              href={`/category/${category.slug}`}
            />
          )) }
        </div>
      </div>
    </section>
  );
}
