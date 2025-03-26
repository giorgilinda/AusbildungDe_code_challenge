import type { Metadata } from "next";
import "./globals.css";
import BaseLayout from "./templates/BaseTemplate";
import { CustomerProvider } from "@/contexts/customerContext";

export const metadata: Metadata = {
  title: "Ausbildung.de code challenge",
  description: "Frontend Developer Challenge Submission",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BaseLayout>
          <CustomerProvider>{children}</CustomerProvider>
        </BaseLayout>
      </body>
    </html>
  );
}
