import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Darsh Reddy',
  description: 'A modern, sleek online portfolio website to showcase professional skills and projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23008080' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M15 8.82a2.2 2.2 0 0 0-2.35-2.35l-1.07.27a2.2 2.2 0 0 1-2.16-2.16l.27-1.07A2.2 2.2 0 0 0 8.35 3H7.7a2.5 2.5 0 0 0-2.5 2.5v.53a2.2 2.2 0 0 0 2.35 2.35l1.07-.27a2.2 2.2 0 0 1 2.16 2.16l-.27 1.07A2.2 2.2 0 0 0 8 12.65v.7a2.5 2.5 0 0 0 2.5 2.5h.53a2.2 2.2 0 0 0 2.35-2.35l-.27-1.07a2.2 2.2 0 0 1 2.16-2.16l1.07.27A2.2 2.2 0 0 0 16.65 10h.7a2.5 2.5 0 0 0 2.5-2.5v-.53a2.2 2.2 0 0 0-2.35-2.35l-1.07.27a2.2 2.2 0 0 1-2.16-2.16l.27-1.07A2.2 2.2 0 0 0 15.7 4H15a2 2 0 0 0-2 2v2.82'/><path d='M7.7 21a2.5 2.5 0 0 1-2.5-2.5v-.53a2.2 2.2 0 0 1 2.35-2.35l1.07.27a2.2 2.2 0 0 0 2.16-2.16l-.27-1.07A2.2 2.2 0 0 1 8 11.35v-.7a2.5 2.5 0 0 1 2.5-2.5h.53a2.2 2.2 0 0 1 2.35 2.35l-.27 1.07a2.2 2.2 0 0 0 2.16 2.16l1.07-.27A2.2 2.2 0 0 1 16.65 14h.7a2.5 2.5 0 0 1 2.5 2.5v.53a2.2 2.2 0 0 1-2.35 2.35l-1.07-.27a2.2 2.2 0 0 0-2.16 2.16l.27 1.07A2.2 2.2 0 0 1 15.7 21H15a2 2 0 0 1-2-2v-2.82'/></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
