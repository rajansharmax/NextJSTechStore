import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Head from "@/app/components/Layout/Partials/Head";
import Layout from "./components/Layout";
import { inter } from '@/config/Fonts'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'bootstrap/dist/css/bootstrap.css';

export const metadata: Metadata = {
  title: "TechStoreNectJS",
  description: "TechStoreNectJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <Head />
        <body className={inter.className}>
          <AntdRegistry>
            <Layout>
              {children}
            </Layout>
          </AntdRegistry>
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </StoreProvider>
  );
}
