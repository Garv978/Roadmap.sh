import "./App.css";
import image from "../src/assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// LeetCode doesn’t have an official FA icon, we can use a code icon as fallback
import { faCode } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#d1c5b5]">
        <div className="border border-amber-950 rounded-2xl h-[600px] w-[1000px] p-[15px] bg-[#57463f]">
          <div className="grid grid-cols-7 grid-rows-8 gap-2 h-full w-full">
            <div className="col-span-7 flex items-center justify-center bg-[#292524]  rounded-xl text-[#767469] font-lora font-bold">
              Mira Chen
            </div>
            <div className="flex flex-col justify-end col-span-3 row-span-4 row-start-2  bg-[#292524]  rounded-xl text-[#8f8779] text-5xl font-greatvibes p-[4px]">
              Creative direction
              <br /> grounded in clarity <br />
              and emotion.
            </div>
            <div className="col-span-3 row-span-3 col-start-3 row-start-6 bg-[#b4a087] text-[#675640] rounded-xl flex flex-col justify-between p-4">
              <p className="font-oswald">have some questions?</p>
              <p className="text-4xl font-dancing">Contact Me</p>
            </div>

            <div className=" flex flex-col justify-end p-[15px] font-lora col-span-2 row-span-3 col-start-1 row-start-6  bg-[#292524]  rounded-xl text-[11px] text-[#8f8779] ">
              <p>
                Mira chen is a creative web designer specializing in brand
                storytelling and visual identity for fashion, beauty and
                identity for fashion,beauty,and lifestyle.Her work merges
                minimalism with emotional depth to create thoughtful,design
                systems.
              </p>
            </div>
            <div className="col-span-2 row-span-4 col-start-4 row-start-2 bg-[#292524]  rounded-xl">
              8
            </div>
            <div className="col-span-2 row-span-6 col-start-6 row-start-2  bg-[#292524]  rounded-xl">
              <h1 className="text-[#8f8779] text-5xl font-greatvibes m-[20px]">
                Experience{" "}
              </h1>
              <hr class="border-t-2 border-[#8f8779] w-3/4 mx-auto" />
            </div>
            <div className="flex flex-row col-span-2 col-start-6 row-start-8 bg-[#292524] rounded-xl p-4 space-x-4 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/garv-tayal-b34740322/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-[#8f8779] text-2xl hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://github.com/Garv978"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-[#8f8779] text-2xl hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://leetcode.com/u/GarvxT/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-[#8f8779] text-2xl hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* <div class="image-container">
  <img src={image} alt="Description"/>
</div> */}
      </div>
    </>
  );
}

export default App;
