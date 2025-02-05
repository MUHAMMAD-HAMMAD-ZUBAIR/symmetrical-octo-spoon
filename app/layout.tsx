import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ToastProvider } from "@/components/ui/toast"
import { Header } from "./component/header"
import { Footer } from "./component/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Comforty - Furniture Store",
  description: "Best Furniture Collection For Your Interior",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  )
}

