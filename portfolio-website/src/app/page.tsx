// src/app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero name="Your Name" title="Full Stack Developer" />

      {/* Placeholder untuk komponen tambahan */}
      <section className="px-4 py-8">
        <p className="text-center text-gray-600">Content coming soon...</p>
      </section>
    </main>
  );
}
