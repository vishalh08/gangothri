// src/components/Products.jsx
const products = [
  {
    grade: "NPK 19‑19‑19",
    label: "Balanced foliar & soil application",
    description:
      "Water‑soluble blend ideal for vegetative growth, horticulture, and high‑value crops.",
  },
  {
    grade: "NPK 20‑20‑20",
    label: "Universal all‑purpose formula",
    description:
      "General purpose grade for broad acreage crops and nurseries seeking consistent performance.",
  },
  {
    grade: "NPK 10‑26‑26",
    label: "Rooting & flowering support",
    description:
      "High phosphorus and potassium for stronger root systems and improved flowering and fruiting.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="section-shell"
    >
      <div className="section-header">
        <p className="eyebrow">PRODUCT PORTFOLIO</p>
        <h2>NPK blends, simplified.</h2>
        <p className="section-intro">
          A focused range of NPK fertilizers designed to cover key growth stages
          while maintaining soil balance.
        </p>
      </div>

      <div className="product-grid-modern">
        {products.map((p) => (
          <article
            key={p.grade}
            className="product-card-modern"
          >
            <p className="product-grade">{p.grade}</p>
            <p className="product-label">{p.label}</p>
            <p className="product-desc">{p.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
