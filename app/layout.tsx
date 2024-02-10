import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container max-w-7xl mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
