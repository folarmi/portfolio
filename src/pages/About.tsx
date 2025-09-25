import aboutBg from "../assets/aboutBg.svg";
import scroll from "../assets/scroll.svg";
import skills from "../assets/skills.svg";

const About = () => {
  return (
    // <div className="">
    //   <img src={aboutBg} />
    // </div>
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <section className="flex flex-col items-center justify-center mx-auto">
        <img src={scroll} alt="scroll" />
        <p className="h1-u pt-16">Skills</p>
        <p className="para-m  text-white pt-8">
          I am striving to never stop learning and improving
        </p>
        <div className="mt-20 mb-32">
          <img src={skills} />
        </div>
      </section>
    </div>
  );
};

export default About;
