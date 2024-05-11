import aboutGif from "../assets/aboutMe.gif";
import aboutImg from "../assets/aboutImg.jpg";

function About() {
  return (
    <section className="py-16" id="about">
      <div className="container flex gap-8 animate-transformUp -lg:flex-col">
        <div className="relative w-1/2 h-1/2 -lg:w-full -lg:text-center">
          <img
            src={aboutImg}
            alt="About Image"
            className="h-96 block rounded-3xl -lg:block -lg:h-full"
          />
          <img
            src={aboutGif}
            alt="About Me"
            className="absolute -bottom-10 right-0 bg-white rounded-full h-56 -lg:-right-10 -lg:h-64 -sm:h-48"
          />
        </div>
        <div className="w-1/2 h-1/2 -lg:w-full">
          <p className="text-primary text-3xl font-bold	-sm:text-2xl">
            About Me
          </p>
          <p className="text-lg py-4 -sm:text-base">
            Hello there! I'm Karishma, a passionate and aspiring full stack web
            developer eager to embark on an exciting journey in the world of web
            development. With a blend of creativity, curiosity, and a penchant
            for problem-solving, I am determined to carve my path in crafting
            immersive and user-centric digital experiences.
          </p>
          <p className="text-lg -sm:text-base">
            My journey into the realm of web development began with a spark of
            curiosity and a desire to bring ideas to life on the digital canvas.
            Armed with foundational knowledge in HTML, CSS, and
            JavaScript,Reactjs,Nodejs,MongoDB,Expressjs, I set out to explore
            the ever-evolving landscape of front-end technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
