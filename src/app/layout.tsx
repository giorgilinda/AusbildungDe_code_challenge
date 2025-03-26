import type { Metadata } from "next";
import "./globals.css";
import BaseLayout from "./templates/BaseTemplate";

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
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
