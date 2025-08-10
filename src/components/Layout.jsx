import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-sand-50">
      <Header />
      <main id="main" className="flex-1">
        <div className="container-page py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
