import "./globals.css";
import Nav from "./components/navbar";
import { Providers } from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark text-foreground bg-background">

      <body>
        <Providers>
          <Nav />
          {children}       
        </Providers>
      </body>
    </html>
  );
}
