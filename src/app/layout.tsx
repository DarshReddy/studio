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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233DDC84'><path d='M19.42,8.34A9.13,9.13,0,0,0,4.58,8.34a9.13,9.13,0,0,0,0,7.32H19.42A9.13,9.13,0,0,0,19.42,8.34ZM7.5,12.5a1,1,0,1,1,1-1A1,1,0,0,1,7.5,12.5Zm9,0a1,1,0,1,1,1-1A1,1,0,0,1,16.5,12.5Z' /><path d='M15.5,5.5h-2a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z' /><path d='M10.5,5.5h-2a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z' /></svg>" />
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
