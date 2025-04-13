import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home"
}
import { API_URL } from "@/lib/constants";

async function getCategories() {
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json);
  return json.results;
};

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <div>
      <h1 className={styles.title}>The New York Times Best Seller Explorer</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div key={category.list_name} className={styles.category}>
            <Link
              href={`/list/${encodeURIComponent(category.list_name_encoded)}`}
              className={styles.categoryLink}
            >
              {category.display_name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}