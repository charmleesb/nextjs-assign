import styles from "../styles/books.module.css";

export const API_URL = `https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction`;

export async function getBooks(name: string) {
  const response = await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${name}`, {
    cache: "no-store",
  });
  const json = await response.json();
  return {
    categoryTitle: json.results.display_name,
    books: json.results.books,
  };
}

export default async function Books({ id }: { id: string }) {
  const { books, categoryTitle } = await getBooks(id);

  return (
    <div>
      <h1 className={styles.categoryTitle}>{categoryTitle}</h1>
      <div className={styles.bookList}>
        {books.map((book) => (
          <div className={styles.book} key={book.primary_isbn13}>
            <img src={book.book_image} alt={book.title} />
            <div className={styles.bookInfo}>
              <h2 className={styles.title}>{book.title}</h2>
              <span className={styles.author}>{book.author}</span>
              <div className={styles.buyLinkWrap}>
                <a href={book.amazon_product_url}><span>Buy now</span></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}