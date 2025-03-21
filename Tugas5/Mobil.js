// Mobil.js
const Kendaraan = require('./Kendaraan');

class Mobil extends Kendaraan {
    constructor(merk, tahun, warna, jumlahPintu) {
        super(merk, tahun, warna);
        this.jumlahPintu = jumlahPintu;
    }

    infoKendaraan() {
        return `${super.infoKendaraan()}, Jumlah Pintu: ${this.jumlahPintu}`;
    }
}

module.exports = Mobil;