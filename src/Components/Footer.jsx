const react = require("react");

const currYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyrights @{currYear}</p>
    </footer>
  );
}

export default Footer;
