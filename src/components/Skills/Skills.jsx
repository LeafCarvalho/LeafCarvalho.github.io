import JavascriptImage from "/languages/javascript.webp";
import ReactImage from "/languages/react.webp";
import TypeScriptImage from "/languages/typescript.webp";
import SassImage from "/languages/sass.webp";
import WordpressImage from "/languages/wordpress.webp";
import NodeImage from "/languages/node.webp";
import PhpImage from "/languages/php.webp";
import Traço from "/languages/pequeno-traço.svg";
import { Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal';


export const Skills = () => {
  const skillsIcons = {
    Sass: {
      name: "Sass",
      image: SassImage,
    },
    Node: {
      name: "Node",
      image: NodeImage,
    },
    Javascript: {
      name: "JavaScript",
      image: JavascriptImage,
    },
    React: {
      name: "ReactJS",
      image: ReactImage,
    },
    PHP: {
      name: "PHP",
      image: PhpImage,
    },
    Wordpress: {
      name: "Wordpress",
      image: WordpressImage,
    },
    TypeScript: {
      name: "TypeScript",
      image: TypeScriptImage,
    },
  };
  return (
    <>
      <div className="container mx-auto flex flex-col items-center space-y-10">
        <h2 className="text-white font-poppins text-32 font-normal mb-10 tracking-wider">
          Minhas Skills
        </h2>
      </div>
      <div className="hidden lg:flex justify-center space-x-12 mx-12">
        <img src={Traço} alt="Traço" />
        <div className="container mx-auto flex flex-col items-center space-y-10">
          <div className="col-span-12 flex justify-center space-x-12">
            {Object.entries(skillsIcons).map(([name, skill], index) => {
              return (
                <Fade key={index} direction="left" damping={0.1} duration={1000 + index * 200}>
                  <Link to={skill.name} target="_blank">
                    <img src={skill.image} alt={name} className="" />
                  </Link>
                </Fade>
              );
            })}
          </div>
        </div>
        <img src={Traço} alt="Traço" />
      </div>
      <div className="lg:hidden mx-12">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {Object.entries(skillsIcons).map(([name, skill], index) => {
            const colWidth = "w-full sm:w-1/2 md:w-1/2 lg:w-1/3";
            return (
              <Fade key={index} direction="left" damping={0.1} duration={1000 + index * 200}>
                <div className={`${colWidth} flex justify-center`}>
                  <Link to={skill.name} target="_blank">
                    <img src={skill.image} alt={name} className="w-full max-w-xs" />
                  </Link>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </>
  );
};