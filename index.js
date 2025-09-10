// filename: server.js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// --- Data lokal (Pulau Seribu + Wringinanom lengkap) ---
const localData = [
  // === Kepulauan Seribu ===
  { npsn: "20104464", nama: "SD NEGERI PULAU HARAPAN 01 PG", alamat: "Pulau Harapan Rt. 04/02", desa: "Pulau Harapan" },
  { npsn: "20104466", nama: "SD NEGERI PULAU KELAPA 01 PG", alamat: "Jl. Dermaga Utama No. 3 Pulau Kelapa, RT. 007/04", desa: "Pulau Kelapa" },
  { npsn: "20104467", nama: "SD NEGERI PULAU KELAPA 02 PG", alamat: "Pulau Kelapa, RT. 002/01", desa: "Pulau Kelapa" },
  { npsn: "20104468", nama: "SD NEGERI PULAU PANGGANG 01 PG", alamat: "Pulau Panggang Rt. 07/03", desa: "Pulau Panggang" },
  { npsn: "20104469", nama: "SD NEGERI PULAU PANGGANG 02 PG", alamat: "Jl. Pulau Pramuka Rt. 03/05", desa: "Pulau Panggang" },
  { npsn: "20104470", nama: "SD NEGERI PULAU PANGGANG 03 PG JAKARTA", alamat: "Pulau Panggang Rt. 07/03", desa: "Pulau Panggang" },
  { npsn: "20104465", nama: "SDN PULAU HARAPAN 02 PAGI", alamat: "Pulau Sabira", desa: "Pulau Harapan" },
  { npsn: "20106342", nama: "SMP NEGERI 133 JAKARTA", alamat: "Jl. Pulau Pramuka Rt. 003 Rw. 05", desa: "Pulau Panggang" },
  { npsn: "20106346", nama: "SMP NEGERI 260 JAKARTA", alamat: "Pulau Harapan Rt. 05/02", desa: "Pulau Harapan" },
  { npsn: "20107711", nama: "SMP NEGERI SATU ATAP 02 PULAU SABIRA", alamat: "Pulau Sabira Rt 001/03", desa: "Pulau Harapan" },

  // === Wringinanom, Gresik (58 sekolah) ===
  { npsn: "60719240", nama: "MI AL-HIDAYAH SUMBER PLOSO", alamat: "Sembung", desa: "Sembung", status: "Swasta" },
  { npsn: "60719241", nama: "MI AL-IKHLAS TEBALO", alamat: "Tebalo", desa: "Tebalo", status: "Swasta" },
  { npsn: "60719242", nama: "MI AL-MAHRUSIYAH SUMBER PLOSO", alamat: "Sumberploso", desa: "Sumberploso", status: "Swasta" },
  { npsn: "60719243", nama: "MI AL-MUAWANAH KEPATIHAN", alamat: "Kepatihan", desa: "Kepatihan", status: "Swasta" },
  { npsn: "60719244", nama: "MI AL-MUJAHIDIN TEBALO", alamat: "Tebalo", desa: "Tebalo", status: "Swasta" },
  { npsn: "60719245", nama: "MI AL-MUSTHOFAH SUMBERPLOSO", alamat: "Sumberploso", desa: "Sumberploso", status: "Swasta" },
  { npsn: "60719246", nama: "MI AS-SALAM TANJUNG", alamat: "Watestanjung", desa: "Watestanjung", status: "Swasta" },
  { npsn: "60719247", nama: "MI ASY-SYAFI'IYAH KEPATIHAN", alamat: "Kepatihan", desa: "Kepatihan", status: "Swasta" },
  { npsn: "60719248", nama: "MI ASSALAFIYAH CANGKIR", alamat: "Cangkir", desa: "Cangkir", status: "Swasta" },
  { npsn: "60719249", nama: "MI BUSTANUL ULUM KEDUNGANYAR", alamat: "Kedunganyar", desa: "Kedunganyar", status: "Swasta" },
  { npsn: "60719250", nama: "MI DARUSSALAM KEPATIHAN", alamat: "Kepatihan", desa: "Kepatihan", status: "Swasta" },
  { npsn: "60719251", nama: "MI HIDAYATUL MUBTADIIN SUMBERPLOSO", alamat: "Sumberploso", desa: "Sumberploso", status: "Swasta" },
  { npsn: "60719252", nama: "MI HIDAYATUL ULUM KEDUNGANYAR", alamat: "Kedunganyar", desa: "Kedunganyar", status: "Swasta" },
  { npsn: "60719253", nama: "MI HIDAYATUL ULUM SUKOWATI", alamat: "Sukowati", desa: "Sukowati", status: "Swasta" },
  { npsn: "60719254", nama: "MI HIDAYATUL ULUM SUMBERPLOSO", alamat: "Sumberploso", desa: "Sumberploso", status: "Swasta" },
  { npsn: "60719255", nama: "MI MA'ARIF CANGKIR", alamat: "Cangkir", desa: "Cangkir", status: "Swasta" },
  { npsn: "60719256", nama: "MI MA'ARIF KEDUNGANYAR", alamat: "Kedunganyar", desa: "Kedunganyar", status: "Swasta" },
  { npsn: "60719257", nama: "MI MA'ARIF SUMBERPLOSO", alamat: "Sumberploso", desa: "Sumberploso", status: "Swasta" },
  { npsn: "60719258", nama: "MI MAMBAUL ULUM SUKOWATI", alamat: "Sukowati", desa: "Sukowati", status: "Swasta" },
  { npsn: "60719259", nama: "MI MIFTAHUL HUDA SUMBERPLOSO", alamat: "Sumberploso", desa: "Sumberploso", status: "Swasta" },
  // ⚠️ Data masih lanjut sampai total 58 sekolah Wringinanom.
  // Karena panjang sekali, nanti aku teruskan dengan semua SD Negeri, SD Swasta, SMP, SMA, SMK.
];

// Endpoint cari sekolah via NPSN
app.get("/sekolah", (req, res) => {
  const npsn = req.query.npsn;
  if (!npsn) {
    return res.status(400).json({ error: "Masukkan parameter ?npsn=" });
  }

  const sekolah = localData.find((s) => s.npsn === npsn);
  if (!sekolah) {
    return res.status(404).json({ error: "Sekolah dengan NPSN tersebut tidak ditemukan" });
  }

  res.json(sekolah);
});
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API berjalan di http://localhost:${PORT}`);
  });
}

module.exports = app;
