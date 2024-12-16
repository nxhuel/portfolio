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
import BadgeIcon from '@mui/icons-material/Badge';
import TerminalIcon from '@mui/icons-material/Terminal';
import Groups2Icon from '@mui/icons-material/Groups2';



function App() {

  return (
    <>
      <div className="estandar bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <Section />
      </div>
      <div className='estandar-divisor'>
        <Divisor Icon={TerminalIcon} alt="Icono Badge" />
      </div>
      <div className="estandar min-h-screen flex flex-col">
        <ContentProyect />
      </div>
      <div className='estandar-divisor'>
        <Divisor Icon={BadgeIcon} alt="Icono Badge" />
      </div>
      <div className="estandar min-h-screen flex flex-col">
        <ContentAboutMe />
      </div>
      <div className='estandar-divisor'>
        <Divisor Icon={Groups2Icon} alt="Icono Badge" />
      </div>
      <div className="estandar min-h-screen  flex flex-col">
        <ContentContact />
      </div>
      <Footer />
    </>
  );
}

export default App;
