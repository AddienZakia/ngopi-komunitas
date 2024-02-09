import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Ngopi Komunitas",
  description: "Mini Event of Nogogeni Intern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.jpg" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
