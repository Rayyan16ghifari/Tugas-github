// Data produk awal
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Menampilkan produk di tabel
function tampilkanProduk() {
    let daftar = document.getElementById("daftarProduk");
    daftar.innerHTML = "";

    produkToko.forEach((produk, index) => {
        daftar.innerHTML += `
            <tr>
                <td>${produk.id}</td>
                <td>${produk.nama}</td>
                <td>Rp${produk.harga.toLocaleString()}</td>
                <td>${produk.stok}</td>
                <td>
                    <button class="btn-delete" onclick="hapusProduk(${produk.id})">Hapus</button>
                </td>
            </tr>
        `;
    });
}

// Fungsi tambah produk
function tambahProduk() {
    let nama = document.getElementById("nama").value;
    let harga = parseInt(document.getElementById("harga").value);
    let stok = parseInt(document.getElementById("stok").value);

    if (nama === "" || isNaN(harga) || isNaN(stok)) {
        alert("Harap isi semua kolom dengan benar!");
        return;
    }

    let idBaru = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;

    produkToko.push({ id: idBaru, nama, harga, stok });

    document.getElementById("nama").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("stok").value = "";

    tampilkanProduk();
}

// Fungsi hapus produk berdasarkan ID
function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);
    tampilkanProduk();
}

// Tampilkan data awal
tampilkanProduk();
