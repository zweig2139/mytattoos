const { getFile } = require("../server/utils");
const Footer = require("./footer");
const Head = require("./head");
const Main = require("./main");
const Navigation = require("./navigation");

const Layout = async (config) => {
  let injectBody = await getFile("inject_body.txt");
  return `<!DOCTYPE html>
<html>
<head>
<meta name="p:domain_verify" content="560c40e385312d97ada2c0407f6f4218"/>
<meta name="google-site-verification" content="AUqEzIvJy1dNUOlFjW7-AHDip2fQzEjdX3g0P0ssSpc" />
${await Head(config)}
</head>
<body>
${Navigation(config)}
${await Main(config)}
${Footer(config)}
${injectBody}
</body>
</html>`;
};

module.exports = Layout;
