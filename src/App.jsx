// components
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

// css
import "./styles/components/App.scss";

export default function App() {
  return (
    <div id="portfolio">
      <h1>Vitor Mendes</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}
