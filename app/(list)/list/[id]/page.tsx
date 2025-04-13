import { Suspense } from "react";
import Books from "../../../../components/books";

export default async function BookList({ params: { id } }: { params: { id: string } }) {
    return (
        <div>
            <Suspense fallback={<h1>Loading book list</h1>}>
                <Books id={id} />
            </Suspense>
        </div>
    )
}