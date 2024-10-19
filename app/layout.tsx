import "./globals.css";
import Nav from "@/components/navbar"
import { Providers } from "./providers";
import { SessionProvider } from "next-auth/react"
import { Toaster } from "@/components/ui/toaster";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark text-foreground bg-background">

      <body>
      <SessionProvider>
        <Providers>
          <Nav />
          {children}    
          <Toaster />   
        </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
