function tampilkanAlert() {
    var nilai = prompt("Masukkan nilai:");
    var peringkat;

    if (nilai >= 86 && nilai <= 100) {
        grade = "A";
    } else if (nilai >= 76 && nilai <= 85) {
        grade = "B";
    } else if (nilai >= 56 && nilai <= 75) {
        grade = "C";
    } else if (nilai >= 45 && nilai <= 55) {
        grade = "D";
    } else if (nilai >= 0 && nilai <= 44) {
        grade = "E";
    } else {
        alert("Nilai diluar range");
        return;
    }

    alert("Nilai Anda: " + nilai + " Hasilnya adalah " + peringkat);
}
