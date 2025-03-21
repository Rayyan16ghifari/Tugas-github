// Kendaraan.js
class Kendaraan {
    constructor(merk, tahun, warna) {
        this.merk = merk;
        this.tahun = tahun;
        this.warna = warna;
    }

    infoKendaraan() {
        return `${this.merk} (${this.tahun}), Warna: ${this.warna}`;
    }
}

module.exports = Kendaraan;