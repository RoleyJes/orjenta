import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { TanStackProvider } from "@/lib/providers/tanstack-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orjenta",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="font-inter text-text-secondary bg-background flex min-h-full">
        <TanStackProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#1a1a1a",
                color: "white",
                border: "1px solid #333",
              },
              success: {
                iconTheme: {
                  primary: "#059669",
                  secondary: "white",
                },
              },
              error: {
                iconTheme: {
                  primary: "#dc2626",
                  secondary: "white",
                },
              },
            }}
          />
        </TanStackProvider>
      </body>
    </html>
  );
}
