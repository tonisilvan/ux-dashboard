import "./../styles/globals.css";
import type { Metadata } from "next";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "UX Dashboard",
  description: "Interactive data visualization dashboard demo"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="h-full">
      <body className={clsx("min-h-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100")}>
        <div className="max-w-7xl mx-auto px-4 py-6">{children}</div>
      </body>
    </html>
  );
}
