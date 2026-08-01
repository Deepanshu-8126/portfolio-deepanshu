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
    // Disable pinning on mobile to allow scrolling
    if (window.innerWidth <= 768) return;

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
        end: () => `+=${getTranslateX()}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "Hackathons",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".hackathons-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    // Refresh ScrollTrigger after layout settles
    ScrollTrigger.refresh();

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("Hackathons")?.kill();
    };
  }, []);
  return (
    <div className="hackathons-section" id="Hackathons">
      <div className="hackathons-container section-container">
        <h2>
          My <span>Hackathons</span>
        </h2>
        <div className="hackathons-flex">
          {config.hackathons.slice(0, 5).map((project, index) => (
            <div className="hackathons-box" key={project.id}>
              <div className="hackathons-info">
                <div className="hackathons-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.company}</h4>
                    <p>{project.position}</p>
                  </div>
                </div>
                <h4>Skills used</h4>
                <p>{project.technologies}</p>
              </div>
              <WorkImage image={project.image} alt={project.company} />
            </div>
          ))}
          {/* See All Hackathonss Button */}
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
