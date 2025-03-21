// Pelanggan.js
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }

    infoPelanggan() {
        if (this.kendaraanDisewa) {
            return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, Kendaraan Disewa: ${this.kendaraanDisewa.infoKendaraan()}`;
        } else {
            return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, Tidak sedang menyewa kendaraan`;
        }
    }
}

module.exports = Pelanggan;