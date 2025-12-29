// src/components/Header.jsx
export default function Header() {
  return (
    <header className="site-header">
      <div className="brand-mark">
        <span className="brand-symbol">NPK</span>
        <span className="brand-name"> GANGOTHRI ORGANIC INDUSTRY</span>
      </div>
      <nav className="nav-links">
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
