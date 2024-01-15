import Container from "./components/Container";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Nav />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
