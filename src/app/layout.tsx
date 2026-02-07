import type { Metadata } from "next";
import "@/styles/globals.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

 export const metadata: Metadata = {
  title: 'Origin',
  description: 'Dark/Light theme with font change',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full" suppressHydrationWarning>
      
      <head>
        {/* ✅ 添加这个 meta 标签来禁用缩放 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="flex min-h-screen flex-col w-full">
              <Header />
      
                {children}
                
              <Footer />

      </body>
    </html>
  );
}
