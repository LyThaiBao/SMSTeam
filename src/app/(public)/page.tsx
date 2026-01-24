import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Main from "./_components/Main";

export default function LandingPage() {
  return (
    <div className="bg-white px-1 pb-2 max-w-[1280px] my-0 mx-auto md:px-4">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
