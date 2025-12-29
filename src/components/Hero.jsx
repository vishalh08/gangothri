// src/components/Hero.jsx
import heroImg from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      className="hero-brand"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-layer" />
      <div className="hero-inner">
        <p className="eyebrow">NPK FERTILIZERS · MANUFACTURING · INDIA</p>
        <h1>
          Precision‑engineered NPK blends
          <br />
          for modern agriculture.
        </h1>
        <p className="hero-sub">
          We design and manufacture high‑performance NPK fertilizers that
          balance crop yield, soil health, and long‑term sustainability.
        </p>
        <div className="hero-actions">
          <a
            href="#products"
            className="btn-solid"
          >
            View NPK portfolio
          </a>
          <a
            href="#contact"
            className="btn-ghost"
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}
