import { FC } from "react";
import MyProjects from "./MyProjects";

const Work: FC = () => {
  return (
    <div className="work">
      <div className="work__header">
        <img src="/img/mypicture.jpeg" alt="" />
        <span>Hi, I’m Abdelouadoud 🤙</span>
        <p>
          I’m a UI/UX designer & front-end developer focused on building brands
          and digital experiences - Currently 4th year computer science student
        </p>
      </div>
      <MyProjects />
      <div className="work__clients">
        <h1>Clients</h1>
        <div className="work__clients-logos">
          <img id="logo1" src="/img/logos/NxtNow.png" alt="" />
          <img id="logo2" src="/img/logos/momyz.svg" alt="" />
          <img id="logo3" src="/img/logos/objectifDeck.png" alt="" />
          <img id="logo4" src="/img/logos/hoskadev.svg" alt="" />
        </div>
      </div>

      <div id="testimonials" className="work__testimonials">
        <h1>Trusted by brands all over the world</h1>
        <div className="work__testimonials-content">
          <img src="/img/testimonial.png" alt="" />
          <div className="work__testimonials-body">
            <span>
              Abdelouadoud helped our business deliver incredible results
            </span>
            <p>
              Vulputate neque, blandit faucibus vulputate sociis nisl. Leo felis
              dignissim velit, vitae massa quam lorem. Sapien velit hendrerit
              turpis a faucibus turpis. Purus tincidunt pulvinar tincidunt
              gravida eu. Posuere nulla a dolor, proin. Velit vel semper augue
              nulla integer lacus, consectetur. Amet pellentesque erat facilisi
              proin luctus eget adipiscing.
            </p>
            <div className="work__testimonials-body--person">
              <span className="work__testimonials-body--person-name">
                Cristian Erikson
              </span>
              <span className="work__testimonials-body--person-position">
                CEO @APPLE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
