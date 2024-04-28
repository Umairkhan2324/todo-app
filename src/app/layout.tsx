import "./globals.css";

export const metadata = {
  title: "Simple TodoApp",
  description: "simple todo app by Umair Khan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
