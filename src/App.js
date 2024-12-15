import './App.css';
import './index.css'
import "flyonui/flyonui"
import { Navbar } from './components/navbar/Navbar'
import { Section } from './components/section/Section';
import { ContentProyect } from './components/content/ContentProject';
import { ContentAboutMe } from './components/content/ContentAboutMe';
import { ContentContact } from './components/content/ContentContact';
import { Footer } from './components/footer/Footer';
import { Divisor } from './components/divisor/Divisor';

function App() {
  const divisores = [
    { src: '/assets/java.png', alt: 'Logo Java' },
    { src: '/assets/java.png', alt: 'Logo Java' },
    { src: '/assets/java.png', alt: 'Logo Java' }
  ];
  return (
    <>
      <div className="bg-normal min-h-screen flex flex-col">
        <Navbar />
        <Section />
      </div>
      <Divisor logo={divisores[0]} />
      <div className="bg-normal min-h-screen flex flex-col">
        <ContentProyect />
      </div>
      <Divisor logo={divisores[0]} />
      <div className="bg-normal min-h-screen flex flex-col">
        <ContentAboutMe />
      </div>
      <Divisor logo={divisores[0]} />
      <div className="bg-normal min-h-screen ">
        <ContentContact />
      </div>
      <Footer />
    </>
  );
}

export default App;
