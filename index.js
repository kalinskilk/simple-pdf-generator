const fs = require("fs");
const pdf = require("html-pdf");
const { join } = require("path");
const crypto = require("crypto");

const generatePDF = () => {
  const html = fs.readFileSync("index.html").toString();

  const options = {
    type: "pdf",
    format: "A4",
    orientation: "portrait",
  };

  pdf.create(html, options).toBuffer((err, buffer) => {
    const randomName = crypto.randomBytes(16).toString("hex");

    const path = join(__dirname) + `\\${randomName}.pdf`;
    if (err) throw err;
    fs.writeFileSync(path, buffer);
    console.log("PDF has been generated on: " + path);
  });
};
generatePDF();
