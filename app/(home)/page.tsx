import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home"
}

export const CATEGORIES_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getCategories() {
  const response = await fetch(CATEGORIES_URL);
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
        {categories.map(category => (
          <div className={styles.category}>
            <span key={category.list_name}>{category.list_name}</span>
          </div>
          // <Category name={category.list_name} />
        ))}
      </div>
    </div>
  );
}