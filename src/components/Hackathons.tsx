import "./styles/Hackathons.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hackathons = () => {
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      function getTranslateX() {
        const box = document.getElementsByClassName("hackathons-box");
        if (box.length === 0) return 0;
        const rectLeft = document
          .querySelector(".hackathons-container")!
          .getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        let padding: number =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        return rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hackathons-section",
          start: "top top",
          end: () => `+=${getTranslateX() * 0.6}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          id: "hackathons",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".hackathons-flex", {
        x: () => -getTranslateX(),
        ease: "none",
      });

      ScrollTrigger.refresh();
    });

    return () => {
      mm.revert();
      ScrollTrigger.getById("hackathons")?.kill();
    };
  }, []);

  return (
    <div className="hackathons-section" id="Hackathons">
      <div className="hackathons-container section-container">
        <h2>
          My <span>Hackathons</span>
        </h2>
        <div className="hackathons-flex">
          {config.hackathons.slice(0, 5).map((hackathon, index) => (
            <Link 
              to={`/hackathons/${hackathon.id}`}
              className="hackathons-box" 
              key={hackathon.id}
              style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
            >
              <div className="hackathons-info">
                <div className="hackathons-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{hackathon.title}</h4>
                    <p>{hackathon.category}</p>
                  </div>
                </div>
                <h4>Technologies used</h4>
                <p>{hackathon.technologies}</p>
              </div>
              <WorkImage image={hackathon.image} alt={hackathon.title} />
            </Link>
          ))}
          <div className="hackathons-box hackathons-box-cta">
            <div className="see-all-Hackathonss">
              <h3>More hackathons?</h3>
              <p>I am always looking forward to participating in more!</p>
              <Link to="/#" className="see-all-btn" data-cursor="disable">
                Stay Tuned →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
