import Navbar from "./components/Navbar";
import Herobanner from "./components/Herobanner";

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
          <Herobanner
            heading="fgn"
            subheading="sfgn"
            image="sfgn"
            buttontxt="sfgn"
            url="sfgn"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
