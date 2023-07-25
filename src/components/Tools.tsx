import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faAngular,
  faAws,
  faDocker,
  faFigma,
  faGithub,
  faJava,
  faNode,
  faPhp,
  faPython,
  faReact,
  faSass,
  faSwift,
  faUnity,
  faWordpressSimple,
} from "@fortawesome/free-brands-svg-icons";

export default function Tools() {
  return (
    <div className="tool-scroll" id="tools">
      <img className="w-full" src="/assets/layered-steps-haikei.svg" alt="" />
      <div className="bg-cyan-500 ">
        <h1 className="text-white font-semibold text-center text-4xl sm:text-5xl py-4">
          Our Tools
        </h1>
        <br />
        <div className="grid gap-4 grid-cols-3 items-center container text-center mx-auto px-4 text-blue-950 text-5xl">
          <div>
            <FontAwesomeIcon
              className="px-1 mb-8 hover:text-blue-800 transition ease-in duration-100"
              icon={faPython}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="px-1 mb-8 hover:text-blue-800 transition ease-in duration-100"
              icon={faJava}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="px-1 mb-8 hover:text-blue-800 transition ease-in duration-100"
              icon={faNode}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="px-1 mb-8 hover:text-blue-800 transition ease-in duration-100"
              icon={faFigma}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="px-1 mb-8 hover:text-blue-800 transition ease-in duration-100"
              icon={faGithub}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="px-1 mb-8 hover:text-blue-800 transition ease-in duration-100"
              icon={faAngular}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="px-1 mb-8 hover:text-blue-800 transition ease-in duration-100"
              icon={faReact}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="px-1 mb-8 hover:text-blue-800 transition ease-in duration-100"
              icon={faAndroid}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="px-1 mb-8 hover:text-blue-800 transition ease-in duration-100"
              icon={faDocker}
            />
          </div>
          <div>
            <FontAwesomeIcon className="px-1 mb-4" icon={faWordpressSimple} />
          </div>
          <div>
            <FontAwesomeIcon className="px-1 mb-4" icon={faUnity} />
          </div>
          <div>
            <FontAwesomeIcon className="px-1 mb-4" icon={faPhp} />
          </div>
          <div>
            <FontAwesomeIcon className="px-1 mb-4" icon={faSass} />
          </div>
          <div>
            <FontAwesomeIcon className="px-1 mb-4" icon={faAws} />
          </div>
          <div>
            <FontAwesomeIcon className="px-1 mb-4" icon={faSwift} />
          </div>
        </div>
        <br />
      </div>
      <img
        className="w-full"
        src="/assets/layered-waves-haikei-bottom.svg"
        alt=""
      />
    </div>
  );
}
