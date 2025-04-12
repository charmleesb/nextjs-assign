import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Not Found',
}

function NotFound() {
  return (
    <div>
      <h1>Not Found!</h1>
    </div>
  );
}

export default NotFound;