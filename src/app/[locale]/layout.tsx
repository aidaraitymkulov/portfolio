import type { Metadata } from "next";
import "@/styles/index.scss";
import { Header } from "@/shared/ui/Header";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of a web developer",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "ru" }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
