// src/components/Process.jsx
const steps = [
  "Raw material selection & validation",
  "Precision dosing & blending",
  "Granulation and drying",
  "Quality testing (NPK, moisture, size)",
  "Packaging & dispatch",
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-shell"
    >
      <div className="section-header">
        <p className="eyebrow">MANUFACTURING PROCESS</p>
        <h2>One controlled line. Multiple NPK grades.</h2>
      </div>

      <ol className="process-line">
        {steps.map((step, index) => (
          <li
            key={step}
            className="process-step-modern"
          >
            <span className="process-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="process-text">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
