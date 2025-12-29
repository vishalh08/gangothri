// src/components/Contact.jsx
export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell contact-block"
    >
      <div>
        <p className="eyebrow">CONTACT</p>
        <h2>Let’s talk formulations, volumes, and timelines.</h2>
        <p className="section-intro">
          Share your requirements, and we’ll respond with technical details,
          supply capabilities, and next steps.
        </p>
      </div>

      <div className="contact-details">
        <p>
          <span className="contact-label">Email</span>
          info@terraformfertilizers.com
        </p>
        <p>
          <span className="contact-label">Phone</span>
          +91‑XXXXXXXXXX
        </p>
        <p>
          <span className="contact-label">Location</span>
          Industrial Zone, [Your City], [State], India
        </p>
      </div>
    </section>
  );
}
