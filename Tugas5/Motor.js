// Motor.js
const Kendaraan = require('./Kendaraan');

class Motor extends Kendaraan {
    constructor(merk, tahun, warna, jenis) {
        super(merk, tahun, warna);
        this.jenis = jenis;
    }

    infoKendaraan() {
        return `${super.infoKendaraan()}, Jenis: ${this.jenis}`;
    }
}

module.exports = Motor;