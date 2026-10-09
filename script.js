const tombolJadwal = document.getElementById("tombolJadwal");
const tabelJadwal = document.getElementById("tabelJadwal");

tombolJadwal.addEventListener("click", function () {
  if (tabelJadwal.style.display === "none") {
    tabelJadwal.style.display = "block";

    tombolJadwal.textContent = "Sembunyikan Jadwal";
  } else {
    tabelJadwal.style.display = "none";

    tombolJadwal.textContent = "Tampilkan Jadwal";
  }
});
