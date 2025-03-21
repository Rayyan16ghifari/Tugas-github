// SistemManajemenTransportasi.js
const Pelanggan = require('./Pelanggan');
const Mobil = require('./Mobil');
const Motor = require('./Motor');

class SistemManajemenTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    tampilkanDaftarPelanggan() {
        console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:");
        this.daftarPelanggan.forEach((pelanggan, index) => {
            console.log(`${index + 1}. ${pelanggan.infoPelanggan()}`);
        });
    }
}

// Contoh penggunaan
const sistem = new SistemManajemenTransportasi();

const pelanggan1 = new Pelanggan("John Doe", "08123456789");
const mobil1 = new Mobil("Toyota", 2020, "Hitam", 4);
pelanggan1.sewaKendaraan(mobil1);
sistem.tambahPelanggan(pelanggan1);

const pelanggan2 = new Pelanggan("Jane Doe", "08987654321");
const motor1 = new Motor("Honda", 2019, "Merah", "Sport");
pelanggan2.sewaKendaraan(motor1);
sistem.tambahPelanggan(pelanggan2);

sistem.tampilkanDaftarPelanggan();

module.exports = SistemManajemenTransportasi;