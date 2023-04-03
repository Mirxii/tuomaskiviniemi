import Bio from '../components/Bio';
import Experience from '../components/Experience';
import Education from '../components/Education';

const About = () => {
  return (
    <div className="mx-auto max-w-xl px-4 pt-28 md:max-w-6xl">
      <Bio />
      <Experience />
      <Education />
    </div>
  );
};

export default About;
