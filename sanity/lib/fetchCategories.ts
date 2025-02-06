// lib/fetchCategories.ts
import { client } from "./client"; 
import { Category } from "@/.next/types/category";

export async function fetchCategories(): Promise<Category[]> {
  const query = `*[_type == "categories"]{
    title,
    "productCount": products,
    "image": image.asset->url,
    "href": "/category/" + title->current
  }`;

  return await client.fetch(query);
}