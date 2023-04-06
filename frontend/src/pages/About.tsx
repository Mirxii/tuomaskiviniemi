import Bio from '../components/Bio';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

const About = () => {
  return (
    <div className="mx-auto h-screen w-screen snap-y snap-mandatory snap-always overflow-y-scroll scroll-smooth px-4">
      <Bio />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default About;
