import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav style={{ display: "flex", gap: "12px", padding: "12px" }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/course">Course</Link>
          <Link href="/user">User</Link>
          <Link href="/product">Product</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
