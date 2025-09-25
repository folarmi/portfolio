import left from "../assets/Left.svg";
import message from "../assets/icons/message.svg";
import { languageStack } from "../data";

const HeroSection = () => {
  return (
    <div className="mt-16">
      <p className="bg-text-u text-center">Developer</p>
      {/* gap-x-32 */}
      <main className="">
        <div className="flex justify-between my-16 ">
          <img src={left} />
          <div className="flex flex-col gap-y-12">
            <p className="code-m">{"<h1/>"}</p>
            <p className="h1-u text-white">Hey</p>
            <p className="h1-u text-white">
              I'm <span className="text-brand-one">Folasayo,</span>{" "}
            </p>
            <p className="h1-u text-white">
              Frontend Engineer{" "}
              <span className="code-m text-brand-one">{"<h1/>"}</span>{" "}
            </p>
            <p className="code-m">{"<p/>"}</p>
            <p className="para-m w-[697px] text-white">
              I help business grow by crafting amazing web experiences. If
              you’re looking for a developer that likes to get stuff done,
            </p>
            <p className="code">{"</p>"}</p>
            <div className="flex items-center">
              <p className="h2-m pr-4">Let’s talk</p>
              <img src={message} alt="message" />
            </div>
          </div>
          {/* bg-bg-one */}
          <div className="bg-dark-bg px-8 py-12 rounded-[80px] h-[378px] w-[215px]">
            {languageStack?.map((item) => (
              <div key={item.id} className="flex items-center my-10">
                <p className="number-m w-[106px]">{item.number}</p>
                <p className="para-m text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export { HeroSection };
