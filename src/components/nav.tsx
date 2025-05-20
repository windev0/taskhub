
import "../styles/nav.css";

const NavComponent = () => {
  return (
    <nav
      style={{
        padding: "1rem",
        background: "#000",
        justifyItems: "end",
        gap: "1rem",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-between",
        }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/taks">Taks</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
