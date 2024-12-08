import './App.css';
import "flyonui/flyonui"
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Section } from './components/section/Section';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App bg-fondo bg-cover bg-[position:right] min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Navbar />
      <main className="flex-grow">
        <Header />
        <Section />
      </main>
      <Footer />
    </div>
  );
}

export default App;
