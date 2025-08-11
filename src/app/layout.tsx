import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pavanta M - Data Engineer Portfolio",
  description: "Professional portfolio of Pavanta M, a Data Engineer specializing in Azure, Databricks, and ETL/ELT pipelines. Experienced in cloud data integration, performance optimization, and scalable data solutions.",
  keywords: "Data Engineer, Azure, Databricks, ETL, ELT, PySpark, SQL, Data Pipeline, Cloud Computing",
  authors: [{ name: "Pavanta M" }],
  openGraph: {
    title: "Pavanta M - Data Engineer Portfolio",
    description: "Professional portfolio showcasing data engineering expertise in Azure, Databricks, and scalable data solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
