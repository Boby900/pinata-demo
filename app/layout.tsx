import "./globals.css";
import Nav from "./components/navbar";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
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
          <Toaster />   
        </Providers>
      </body>
    </html>
  );
}
