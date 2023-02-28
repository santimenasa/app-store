import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";


function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
      </header>
    <main>
      <Banner />

    </main>
    </div>
  );
}

export default App;
