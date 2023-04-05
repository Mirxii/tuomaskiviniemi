import Bio from '../components/Bio';
import Experience from '../components/Experience';
import Education from '../components/Education';

const About = () => {
  return (
    <div className="scroll-r mx-auto h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth px-4">
      <Bio />
      <Education />
      <Experience />
    </div>
  );
};

export default About;
