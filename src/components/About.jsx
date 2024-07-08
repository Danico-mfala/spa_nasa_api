import React from "react";
import aboutImg from "../assets/image/about.jpg";

const About = () => {
  return (
    // About text
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ">
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-2/5">
          <img src={aboutImg} alt="About" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, libero eget tincidunt aliquam, nunc nunc ultricies nunc,
            euismod lacinia nunc nunc eget nunc. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Sed euismod, libero eget tincidunt aliquam, nunc nunc ultricies
            nunc, euismod lacinia nunc nunc eget nunc. Pellentesque habitant
            morbi.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </div>
      {/* Company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
              Helping a local
              <br />
              <span className="text-brandPrimary">
                Business reinvent itself
              </span>
            </h2>
            <p className="text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              harum molestiae doloremque doloribus ullam, veniam tempora cum
              quibusdam quam, quis tenetur, eligendi fugit perferendis. Iste
              necessitatibus cupiditate nam praesentium quae!
            </p>
          </div>

          {/* Stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/image/icons/people.png"
                  alt="Members"
                  width={100}
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,300
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/image/icons/people.png"
                  alt="Members"
                  width={100}
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,300
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/image/icons/people.png"
                  alt="Members"
                  width={100}
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,300
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/image/icons/people.png"
                  alt="Members"
                  width={100}
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,300
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
