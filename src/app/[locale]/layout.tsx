import type { Metadata } from "next";
import "@/styles/index.scss";
import { Header } from "@/shared/ui/Header";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Locale, routing } from "@/lib/i18n/routing";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of a web developer",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }, { locale: "kg" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const dictionary = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={dictionary}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
