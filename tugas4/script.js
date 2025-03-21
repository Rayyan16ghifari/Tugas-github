const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Data produk awal
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi menampilkan produk
function tampilkanProduk() {
    console.clear();
    console.log("=== Daftar Produk ===");
    console.log("ID | Nama       | Harga       | Stok");
    console.log("-----------------------------------");
    produkToko.forEach((produk) => {
        console.log(
            `${produk.id}  | ${produk.nama.padEnd(10)} | Rp${produk.harga.toLocaleString()} | ${produk.stok}`
        );
    });
    console.log("\n");
}

// Fungsi tambah produk
function tambahProduk() {
    rl.question("Masukkan nama produk: ", (nama) => {
        rl.question("Masukkan harga produk: ", (harga) => {
            rl.question("Masukkan stok produk: ", (stok) => {
                let idBaru = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;
                produkToko.push({ id: idBaru, nama, harga: parseInt(harga), stok: parseInt(stok) });

                console.log(`✅ Produk "${nama}" berhasil ditambahkan!\n`);
                tampilkanProduk();
                mainMenu();
            });
        });
    });
}

// Fungsi hapus produk
function hapusProduk() {
    rl.question("Masukkan ID produk yang akan dihapus: ", (id) => {
        id = parseInt(id);
        let awal = produkToko.length;
        produkToko = produkToko.filter(produk => produk.id !== id);

        if (produkToko.length < awal) {
            console.log(`🗑️  Produk dengan ID ${id} berhasil dihapus!\n`);
        } else {
            console.log(`❌ Produk dengan ID ${id} tidak ditemukan!\n`);
        }
        tampilkanProduk();
        mainMenu();
    });
}

// Menu utama
function mainMenu() {
    console.log("Pilih aksi:");
    console.log("1. Tambah Produk");
    console.log("2. Hapus Produk");
    console.log("3. Keluar");
    rl.question("Masukkan pilihan: ", (pilihan) => {
        switch (pilihan) {
            case "1":
                tambahProduk();
                break;
            case "2":
                hapusProduk();
                break;
            case "3":
                console.log("👋 Keluar dari program.");
                rl.close();
                break;
            default:
                console.log("❌ Pilihan tidak valid.");
                mainMenu();
                break;
        }
    });
}

// Jalankan program
tampilkanProduk();
mainMenu();
