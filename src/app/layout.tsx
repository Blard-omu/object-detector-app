import "./globals.css";
import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metadata = {
  title: "ObjectDetectorApp – Real-Time AI Object Detection",
  description:
    "ObjectDetectorApp uses TensorFlow.js and COCO-SSD to perform real-time object detection directly in your browser via webcam.",
  keywords:
    "object detection, TensorFlow.js, COCO-SSD, AI, computer vision, browser ML, webcam detection",
  authors: [{ name: "ObjectDetectorApp Team" }],
  metadataBase: new URL("https://object-detection-app.vercel.app"),
  openGraph: {
    title: "ObjectDetectorApp – Real-Time AI Object Detection",
    description:
      "Run AI-powered object detection in your browser using TensorFlow.js and COCO-SSD. Detect people, books, bottles, and more with your webcam.",
    url: "https://object-detection-app.vercel.app",
    siteName: "ObjectDetectorApp",
    images: [
      {
        url: "/Images/webcam.jpg", 
        width: 1200,
        height: 630,
        alt: "ObjectDetectorApp Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ObjectDetectorApp – Real-Time AI Object Detection",
    description:
      "Detect objects live with your webcam using TensorFlow.js and COCO-SSD — directly in the browser.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#c4b5fd" />
      </head>
      <body>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>

        {/* Toast Notifications */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            success: {
              style: {
                background: "#bbf7d0",
                color: "#000",
              },
            },
            error: {
              duration: 5000,
              style: {
                background: "#fca5a5",
                color: "#fff",
              },
            },
            loading: {
              duration: Infinity,
              style: {
                background: "#ede9fe",
                color: "#6d28d9",
              },
            },
          }}
        />

        {/* JSON-LD Structured Data for SEO */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ObjectDetectorApp",
            url: "https://object-detection-app.vercel.app",
            applicationCategory: "AI/Computer Vision",
            operatingSystem: "Any (Web-based)",
            image: "/preview.png",
          })}
        </Script>
      </body>
    </html>
  );
}

