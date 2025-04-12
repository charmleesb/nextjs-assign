import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Bestsellers",
    default: "Bestsellers"
  },
  description: '',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>Navigation</div>
        {children}
      </body>
    </html>
  )
}
