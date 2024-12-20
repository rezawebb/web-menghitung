document.getElementById("calculate").addEventListener("click", function () {
    const quiz = parseFloat(document.getElementById("quiz").value) || 0;
    const tugas = parseFloat(document.getElementById("tugas").value) || 0;
    const uts = parseFloat(document.getElementById("uts").value) || 0;
    const uas = parseFloat(document.getElementById("uas").value) || 0;
  
    const total = (quiz * 0.1) + (tugas * 0.2) + (uts * 0.3) + (uas * 0.4);
  
    let indeks = "";
    let keterangan = "";
  
    if (total >= 80) {
      indeks = "A";
      keterangan = "Lulus dengan Sangat Baik";
    } else if (total >= 68) {
      indeks = "B";
      keterangan = "Lulus dengan Baik";
    } else if (total >= 55) {
      indeks = "C";
      keterangan = "Lulus dengan Cukup";
    } else if (total >= 38) {
      indeks = "D";
      keterangan = "Lulus dengan Kurang";
    } else {
      indeks = "E";
      keterangan = "Tidak Lulus";
    }
  
    document.getElementById("indeks").textContent = indeks;
    document.getElementById("keterangan").textContent = keterangan;
  });