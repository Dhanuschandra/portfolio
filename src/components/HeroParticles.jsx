// src/components/HeroParticles.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // ✅ Do NOT import from tsparticles-engine directly

const HeroParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // ✅ This will properly load `checkVersion`
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "#00000000",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
        },
        particles: {
          color: { value: "#915EFF" },
          links: {
            color: "#915EFF",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            directions: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 1.2,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 45,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default HeroParticles;
