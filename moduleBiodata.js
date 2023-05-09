// Mengimpor modul http
const http = require("http");

// Mengimpor modul biodata.js dari file lokal
const biodata = require("./biodata");

// Membuat server HTTP menggunakan fungsi createServer
const server = http.createServer((req, res) => {
  // Mengatur status kode dan tipe konten pada respons HTTP
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Biodata</h1>");
  res.write(`<p>Nama: ${biodata.getNama()}</p>`);
  res.write(`<p>Tempat Lahir: ${biodata.getTempatLahir()}</p>`);
  res.write(`<p>Tanggal Lahir: ${biodata.getTanggalLahir()}</p>`);
  res.write(`<p>Alamat: ${biodata.getAlamat()}</p>`);
  res.end();
});

// Port yang diguanakan
const port = 8080;

// Mencetak ke console
server.listen(port, () => {
  console.log(`Nama: ${biodata.getNama()}`);
  console.log(`Tempat Lahir: ${biodata.getTempatLahir()}`);
  console.log(`Tanggal Lahir: ${biodata.getTanggalLahir()}`);
  console.log(`Alamat: ${biodata.getAlamat()}`);
});
