import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/ModeToggle";



export const metadata: Metadata = {
  title: "Gestión de alumnos",
  description: "Proyecto para el curso de Ingeniería de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="static">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="absolute bottom-0 right-0 p-3">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
