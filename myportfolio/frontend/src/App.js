import Header from './components/Header';
import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Projects from './components/projects';
import Skills from './components/skills';
import Model from './components/models';
import Footer from './components/footer';
import WelcomeMessage from './components/WelcomeMessage';
import Sidenavbar from './components/sidenavbar';
import './App.css';

const App=()=> {
  return (
<div className="App">
      <Header />
      <div style={{ height: '25vh' }}></div>
      <WelcomeMessage/>
      <div style={{ height: '50vh' }}></div>
      <AboutMe />
    </div>
  );
}

export default App;
