function tampilkanAlert() {
    var nilai = prompt("Masukkan nilai:");
    var peringkat;

    if (nilai >= 86 && nilai <= 100) {
        peringkat = "A";
    } else if (nilai >= 76 && nilai <= 85) {
        peringkat = "B";
    } else if (nilai >= 56 && nilai <= 75) {
        peringkat = "C";
    } else if (nilai >= 45 && nilai <= 55) {
        peringkat = "D";
    } else if (nilai >= 0 && nilai <= 44) {
        peringkat = "E";
    } else {
        alert("Nilai diluar range");
        return;
    }

    alert("Nilai Anda: " + nilai + " Hasilnya adalah " + peringkat);
}
