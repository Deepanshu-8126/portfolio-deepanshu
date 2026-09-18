import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const introElements = Array.from(document.querySelectorAll(".landing-greeting, .landing-name, .landing-tagline"));
  if (introElements.length > 0) {
    gsap.fromTo(
      introElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.15,
        delay: 0.2,
      }
    );
  }

  const infoElements = Array.from(document.querySelectorAll(".landing-info-row, .landing-cta-row"));
  if (infoElements.length > 0) {
    gsap.fromTo(
      infoElements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        y: 0,
        stagger: 0.08,
        delay: 0.4,
      }
    );
  }

  gsap.fromTo(
    [".header", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
