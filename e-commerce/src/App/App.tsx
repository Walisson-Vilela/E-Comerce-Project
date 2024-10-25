import { Header } from "./Header/Navbar";
import ItemListContainer from "./Section/ItemListContainer";

function App() {
  return (
    <div className="w-screen">
      <Header name={"Walisson"} />
      <ItemListContainer/>
    </div>
  );
}

export default App;