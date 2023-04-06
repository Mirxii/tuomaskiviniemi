import Bio from '../components/Bio';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

const About = () => {
  return (
    <div className="scroll-r mx-auto h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth px-4">
      <Bio />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
};

export default About;
