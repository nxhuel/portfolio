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
      <div className="estandar-responsive min-h-screen flex flex-col  dark:bg-neutral-900 dark:text-white ">
        <Navbar />
        <Section />
      </div>
      <div className='estandar-divisor dark:bg-neutral-900 dark:text-white'>
        <Divisor Icon={TerminalIcon} alt="Icono Badge" />
      </div>
      <div className=" estandar-responsive min-h-screen flex flex-col dark:bg-neutral-900 dark:text-white">
        <ContentProyect />
      </div>
      <div className='estandar-divisor dark:bg-neutral-900 dark:text-white'>
        <Divisor Icon={BadgeIcon} alt="Icono Badge" />
      </div>
      <div className="estandar-responsive min-h-screen flex flex-col dark:bg-neutral-900 dark:text-white">
        <ContentAboutMe />
      </div>
      <div className='estandar-divisor dark:bg-neutral-900 dark:text-white'>
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
