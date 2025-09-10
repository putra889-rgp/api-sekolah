const express = require("express");
const app = express();

// Data sekolah
const sekolah = [
  { npsn: "20104464", nama: "SD NEGERI PULAU HARAPAN 01 PG", alamat: "Pulau Harapan Rt. 04/02", desa: "Pulau Harapan", status: "Negeri" },
  { npsn: "20104466", nama: "SD NEGERI PULAU KELAPA 01 PG", alamat: "Jl. Dermaga Utama No. 3 Pulau Kelapa, RT. 007/04", desa: "Pulau Kelapa", status: "Negeri" },
  { npsn: "20104467", nama: "SD NEGERI PULAU KELAPA 02 PG", alamat: "Pulau Kelapa, RT. 002/01", desa: "Pulau Kelapa", status: "Negeri" },
  { npsn: "20104468", nama: "SD NEGERI PULAU PANGGANG 01 PG", alamat: "Pulau Panggang Rt. 07/03", desa: "Pulau Panggang", status: "Negeri" },
  { npsn: "20104469", nama: "SD NEGERI PULAU PANGGANG 02 PG", alamat: "Jl. Pulau Pramuka Rt. 03/05", desa: "Pulau Panggang", status: "Negeri" },
  { npsn: "20104470", nama: "SD NEGERI PULAU PANGGANG 03 PG JAKARTA", alamat: "Pulau Panggang Rt. 07/03", desa: "Pulau Panggang", status: "Negeri" },
  { npsn: "20104465", nama: "SDN PULAU HARAPAN 02 PAGI", alamat: "Pulau Sabira", desa: "Pulau Harapan", status: "Negeri" },
  { npsn: "20106342", nama: "SMP NEGERI 133 JAKARTA", alamat: "Jl. Pulau Pramuka Rt. 003 Rw. 05", desa: "Pulau Panggang", status: "Negeri" },
  { npsn: "20106346", nama: "SMP NEGERI 260 JAKARTA", alamat: "Pulau Harapan Rt. 05/02", desa: "Pulau Harapan", status: "Negeri" },
  { npsn: "20107711", nama: "SMP NEGERI SATU ATAP 02 PULAU SABIRA", alamat: "Pulau Sabira Rt 001/03", desa: "Pulau Harapan", status: "Negeri" },

  // === Wringinanom, Gresik ===
  { npsn: "60719240", nama: "MADRASAH IBTIDAIYAH AL-HIDAYAH SUMBER PLOSO", alamat: "", desa: "Sembung", status: "Swasta" },
  { npsn: "60719246", nama: "MADRASAH IBTIDAIYAH AS SALAM TANJUNG", alamat: "", desa: "Watestanjung", status: "Swasta" },
  { npsn: "60719243", nama: "MADRASAH IBTIDAIYAH DARUL ULUM PASINAN", alamat: "", desa: "Pasinan Lemahputih", status: "Swasta" },
  { npsn: "60719238", nama: "MADRASAH IBTIDAIYAH DARUNNAJAH LEBANISUKO", alamat: "", desa: "Lebanisuko", status: "Swasta" },
  { npsn: "60719241", nama: "MADRASAH IBTIDAIYAH DARUS SALAM", alamat: "", desa: "Sembung", status: "Swasta" },
  { npsn: "60719247", nama: "MADRASAH IBTIDAIYAH MA ARIF AT-TAQWA", alamat: "", desa: "Kesambenkulon", status: "Swasta" },
  { npsn: "60719235", nama: "MADRASAH IBTIDAIYAH MATHLABUN NAJIHIN", alamat: "", desa: "Sumberwaru", status: "Swasta" },
  { npsn: "60719239", nama: "MADRASAH IBTIDAIYAH MIFTAHUL HUDA", alamat: "", desa: "Sumberwaru", status: "Swasta" },
  { npsn: "60719242", nama: "MADRASAH IBTIDAIYAH MIFTAHUL ULUM", alamat: "", desa: "Wringinanom", status: "Swasta" },
  { npsn: "60719236", nama: "MADRASAH IBTIDAIYAH MIFTAHUL ULUM", alamat: "", desa: "Pedagangan", status: "Swasta" },
  { npsn: "60719245", nama: "MADRASAH IBTIDAIYAH NURUL HUDA", alamat: "", desa: "Kesambenkulon", status: "Swasta" },
  { npsn: "60719244", nama: "MADRASAH IBTIDAIYAH SUNAN GIRI REJOSARI", alamat: "", desa: "Kedunganyar", status: "Swasta" },
  { npsn: "20583036", nama: "MADRASAH TSANAWIYAH MAULANA MALIK IBRAHIM", alamat: "", desa: "Soko", status: "Swasta" },
  { npsn: "20583035", nama: "MADRASAH TSANAWIYAH MODERN AL HUDA", alamat: "", desa: "Lebaniwaras", status: "Swasta" },
  { npsn: "20583033", nama: "MADRASAH TSANAWIYAH RADEN PAKU", alamat: "", desa: "Wringinanom", status: "Swasta" },
  { npsn: "20583032", nama: "MADRASAH TSANAWIYAH ROUDLOTUL HIKMAH", alamat: "", desa: "Watestanjung", status: "Swasta" },
  { npsn: "70013326", nama: "MADRASAH TSANAWIYAH SUNAN GIRI", alamat: "", desa: "Sumengko", status: "Swasta" },
  { npsn: "20583034", nama: "MADRASAH TSANAWIYAH WALISONGO", alamat: "", desa: "Pedagangan", status: "Swasta" },
  { npsn: "60719237", nama: "MIS MIFTAHUL ULUM", alamat: "", desa: "Watestanjung", status: "Swasta" },
  { npsn: "70043070", nama: "MIS TAHFIDZ USMANIYAH", alamat: "", desa: "Wringinanom", status: "Swasta" },
  { npsn: "70043665", nama: "MTSS UNGGULAN HAMDALAH 01", alamat: "", desa: "Pasinan Lemahputih", status: "Swasta" },
  { npsn: "69955391", nama: "SD ISLAM AL IRSYAD", alamat: "", desa: "Wringinanom", status: "Swasta" },
  { npsn: "20536988", nama: "SD ISLAM AL MUHAJIRIN", alamat: "", desa: "Sumengko", status: "Swasta" },
  { npsn: "70043983", nama: "SD ISLAM AL-ILLIYIN", alamat: "", desa: "Sumberwaru", status: "Swasta" },
  { npsn: "69963184", nama: "SD ISLAM ROUDLOTUL HIKMAH", alamat: "", desa: "Watestanjung", status: "Swasta" },
  { npsn: "70043669", nama: "SD ISLAM SUBULUSSALAM", alamat: "", desa: "Kepuhklagen", status: "Swasta" },
  { npsn: "20536991", nama: "SD MUHAMMADIYAH 1 WRINGINANOM", alamat: "", desa: "Wringinanom", status: "Swasta" },
  { npsn: "20536990", nama: "SDIT YAA BUNAYYA", alamat: "", desa: "Lebaniwaras", status: "Swasta" },
  { npsn: "20537003", nama: "SMP AL MUHAJIRIN", alamat: "", desa: "Sumengko", status: "Swasta" },
  { npsn: "70043968", nama: "SMP AL-ILLIYIN", alamat: "", desa: "Sumberwaru", status: "Swasta" },
  { npsn: "70050936", nama: "SMP FAVORIT", alamat: "", desa: "Soko", status: "Swasta" },
  { npsn: "20500438", nama: "SMP ISLAM WATESTANJUNG", alamat: "", desa: "Watestanjung", status: "Swasta" },
  { npsn: "20500550", nama: "SMP PGRI WRINGINANOM", alamat: "", desa: "Wringinanom", status: "Swasta" },
  { npsn: "20500341", nama: "UPT SD NEGERI 170 GRESIK", alamat: "", desa: "Kedunganyar", status: "Negeri" },
  { npsn: "20500340", nama: "UPT SD NEGERI 171 GRESIK", alamat: "", desa: "Kedunganyar", status: "Negeri" },
  { npsn: "20500368", nama: "UPT SD NEGERI 172 GRESIK", alamat: "", desa: "Kepuhklagen", status: "Negeri" },
  { npsn: "20500360", nama: "UPT SD NEGERI 173 GRESIK", alamat: "", desa: "Kesambenkulon", status: "Negeri" },
  { npsn: "20500359", nama: "UPT SD NEGERI 174 GRESIK", alamat: "", desa: "Kesambenkulon", status: "Negeri" },
  { npsn: "20500181", nama: "UPT SD NEGERI 175 GRESIK", alamat: "", desa: "Lebanisuko", status: "Negeri" },
  { npsn: "20500179", nama: "UPT SD NEGERI 176 GRESIK", alamat: "", desa: "Lebaniwaras", status: "Negeri" },
  { npsn: "20500102", nama: "UPT SD NEGERI 177 GRESIK", alamat: "", desa: "Mondoluku", status: "Negeri" },
  { npsn: "20500233", nama: "UPT SD NEGERI 178 GRESIK", alamat: "", desa: "Pasinan Lemahputih", status: "Negeri" },
  { npsn: "20500232", nama: "UPT SD NEGERI 179 GRESIK", alamat: "", desa: "Pasinan Lemahputih", status: "Negeri" },
  { npsn: "20500229", nama: "UPT SD NEGERI 180 GRESIK", alamat: "", desa: "Pedagangan", status: "Negeri" },
  { npsn: "20500204", nama: "UPT SD NEGERI 181 GRESIK", alamat: "", desa: "Sembung", status: "Negeri" },
  { npsn: "20500186", nama: "UPT SD NEGERI 182 GRESIK", alamat: "", desa: "Soko", status: "Negeri" },
  { npsn: "20500563", nama: "UPT SD NEGERI 183 GRESIK", alamat: "", desa: "Sumberame", status: "Negeri" },
  { npsn: "20500561", nama: "UPT SD NEGERI 184 GRESIK", alamat: "", desa: "Sumbergede", status: "Negeri" },
  { npsn: "20500560", nama: "UPT SD NEGERI 185 GRESIK", alamat: "", desa: "Sumberwaru", status: "Negeri" },
  { npsn: "20500577", nama: "UPT SD NEGERI 186 GRESIK", alamat: "", desa: "Sumberwaru", status: "Negeri" },
  { npsn: "20500593", nama: "UPT SD NEGERI 187 GRESIK", alamat: "", desa: "Sumengko", status: "Negeri" },
  { npsn: "20500578", nama: "UPT SD NEGERI 188 GRESIK", alamat: "", desa: "Sumengko", status: "Negeri" },
  { npsn: "20500645", nama: "UPT SD NEGERI 189 GRESIK", alamat: "", desa: "Watestanjung", status: "Negeri" },
  { npsn: "20500644", nama: "UPT SD NEGERI 190 GRESIK", alamat: "", desa: "Watestanjung", status: "Negeri" },
  { npsn: "20500637", nama: "UPT SD NEGERI 191 GRESIK", alamat: "", desa: "Wringinanom", status: "Negeri" },
  { npsn: "20500636", nama: "UPT SD NEGERI 192 GRESIK", alamat: "", desa: "Wringinanom", status: "Negeri" },
  { npsn: "20500518", nama: "UPT SMP NEGERI 12 GRESIK", alamat: "", desa: "Wringinanom", status: "Negeri" },
  { npsn: "20500509", nama: "UPT SMP NEGERI 26 GRESIK", alamat: "", desa: "Kedunganyar", status: "Negeri" }
];

// Root
app.get("/", (req, res) => {
  res.send("🚀 API Sekolah Aktif");
});

// Semua sekolah
app.get("/api", (req, res) => {
  res.json(sekolah);
});

// Cari sekolah by NPSN
app.get("/api/:npsn", (req, res) => {
  const { npsn } = req.params;
  const result = sekolah.find(s => s.npsn === npsn);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ error: "Sekolah tidak ditemukan" });
  }
});

// Export untuk Vercel
module.exports = app;
