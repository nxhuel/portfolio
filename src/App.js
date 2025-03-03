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
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
  return (
    <>
      <div id="section" className="estandar-responsive min-h-screen flex flex-col  dark:bg-neutral-900 dark:text-white ">
        <Navbar />
        <ScrollAnimation animateIn="fadeIn">
          <Section />
        </ScrollAnimation>
      </div>
      <div id="proyectos" className='estandar-divisor dark:bg-neutral-900 dark:text-white'>
        <Divisor Icon={TerminalIcon} alt="Icono Badge" />
      </div>
      <div className=" estandar-responsive min-h-screen flex flex-col dark:bg-neutral-900 dark:text-white">
        <ScrollAnimation animateIn="fadeIn">
          <ContentProyect />
        </ScrollAnimation>
      </div>
      <div id='sobre-mi' className='estandar-divisor dark:bg-neutral-900 dark:text-white'>
        <Divisor Icon={BadgeIcon} alt="Icono Badge" />
      </div>
      <div className="estandar-responsive min-h-screen flex flex-col dark:bg-neutral-900 dark:text-white">
        <ScrollAnimation animateIn="fadeIn">
          <ContentAboutMe />
        </ScrollAnimation>
      </div>
      <div id='contacto' className='estandar-divisor dark:bg-neutral-900 dark:text-white'>
        <Divisor Icon={Groups2Icon} alt="Icono Badge" />
      </div>
      <div className="estandar-responsive min-h-screen flex flex-col dark:bg-neutral-900 dark:text-white">
        <ContentContact />
      </div>
      <Footer />
    </>
  );
}

export default App;
