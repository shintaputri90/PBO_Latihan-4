class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infokapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang}m x ${this.lebar}m.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitaspenumpang, hargaTiket) {
        super(nama, jenis, panjang, lebar);
        this.kapasitaspenumpang = kapasitaspenumpang;
        this.hargaTiket = hargaTiket;
        this.jumlahTiket = kapasitaspenumpang; 
    }

    infokapal() {
        return `${super.infokapal()} Kapal ini memiliki kapasitas ${this.kapasitaspenumpang} orang dan harga tiket Rp${this.hargaTiket}.`;
    }

    kurangiTiket(jumlah) {
        if (jumlah > this.jumlahTiket) {
            return `Tiket tidak cukup. Hanya tersedia ${this.jumlahTiket} tiket.`;
        } else {
            this.jumlahTiket -= jumlah;
            return `${jumlah} tiket berhasil dibeli. Sisa tiket: ${this.jumlahTiket}.`;
        }
    }
}

class PembelianTiketKapal {
    constructor() {
        this.tujuan = null;
        this.hariKeberangkatan = null;
        this.jamKeberangkatan = null;
        this.kapalDipilih = null;
    }

    pilihTujuan(tujuan) {
        const tujuanTersedia = ["Paris", "Italia"];
        if (tujuanTersedia.includes(tujuan)) {
            this.tujuan = tujuan;
            return `Anda telah memilih tujuan ke ${tujuan}.`;
        } else {
            return `Tujuan tidak tersedia. Pilih tujuan yang tersedia.`;
        }
    }

    aturHariKeberangkatan(hari) {
        const hariTersedia = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
        if (hariTersedia.includes(hari)) {
            this.hariKeberangkatan = hari;
            return `Keberangkatan dijadwalkan pada hari ${hari}.`;
        } else {
            return `Hari tidak valid. Pilih hari antara Senin hingga Minggu.`;
        }
    }

    aturJamKeberangkatan(jam) {
        const regexJam = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (regexJam.test(jam)) {
            this.jamKeberangkatan = jam;
            return `Keberangkatan dijadwalkan pada jam ${jam}.`;
        } else {
            return `Format jam tidak valid. Gunakan format 24-jam (contoh: 14:30).`;
        }
    }

    pilihKapal(kapalList, namaKapal) {
        const kapalDipilih = kapalList.find(kapal => kapal.nama === namaKapal);
        if (kapalDipilih) {
            this.kapalDipilih = kapalDipilih;
            return `Anda telah memilih kapal ${kapalDipilih.nama} (${kapalDipilih.jenis}).`;
        } else {
            return `Kapal dengan nama ${namaKapal} tidak ditemukan.`;
        }
    }

    pembelianTiket(jumlahBeli) {
        if (!this.tujuan || !this.hariKeberangkatan || !this.jamKeberangkatan || !this.kapalDipilih) {
            return `Anda belum melengkapi tujuan, hari, jam keberangkatan, atau memilih kapal. Silakan lengkapi semua informasi terlebih dahulu.`;
        }

        let totalHarga = jumlahBeli * this.kapalDipilih.hargaTiket;
        let hasilPembelian = this.kapalDipilih.kurangiTiket(jumlahBeli);
        return `${hasilPembelian} Tujuan: ${this.tujuan}. Keberangkatan pada hari ${this.hariKeberangkatan}, jam ${this.jamKeberangkatan}. Total harga: Rp${totalHarga}.`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, panjang, lebar, kapasitasKargo) {
        super(nama, "kargo", panjang, lebar);
        this.kapasitasKargo = kapasitasKargo;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal kargo yang berukuran ${this.panjang}m x ${this.lebar}m dan mampu membawa ${this.kapasitasKargo} ton barang.`;
    }
}

class KapalCepat extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitaspenumpang, hargaTiket, kecepatanMax) {
        super(nama, "kapal cepat", panjang, lebar, kapasitaspenumpang, hargaTiket);
        this.kecepatanMax = kecepatanMax;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal cepat dengan kapasitas ${this.kapasitaspenumpang} penumpang. Kecepatan maksimum kapal ini adalah ${this.kecepatanMax} knot. Harga tiket: Rp${this.hargaTiket}.`;
    }
}

class KapalLayananVIP extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitaspenumpang, hargaTiket, fasilitasVIP) {
        super(nama, "kapal layanan VIP", panjang, lebar, kapasitaspenumpang, hargaTiket);
        this.fasilitasVIP = fasilitasVIP;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal VIP dengan kapasitas ${this.kapasitaspenumpang} penumpang. Fasilitas yang tersedia: ${this.fasilitasVIP.join(", ")}. Harga tiket: Rp${this.hargaTiket}.`;
    }
}

class KapalPesiar extends KapalPenumpang {
    constructor(nama, panjang, lebar, kapasitaspenumpang, hargaTiket, fasilitasHiburan) {
        super(nama, "kapal pesiar", panjang, lebar, kapasitaspenumpang, hargaTiket);
        this.fasilitasHiburan = fasilitasHiburan;
    }

    infokapal() {
        return `Kapal ${this.nama} adalah kapal pesiar mewah dengan kapasitas ${this.kapasitaspenumpang} penumpang. Fasilitas hiburan: ${this.fasilitasHiburan.join(", ")}. Harga tiket: Rp${this.hargaTiket}.`;
    }
}

// Penggunaan Polymorphism
const pembelianTiket = new PembelianTiketKapal();
const kapalCepat = new KapalCepat("Speedy", 100, 20, 50, 500000, 35);
const kapalVIP = new KapalLayananVIP("VIP Cruiser", 150, 40, 100, 750000, ["Restoran mewah", "Kolam renang"]);
const kapalPesiar = new KapalPesiar("Luxury Sea", 400, 80, 2000, 1500000, ["Casino", "Teater", "Spa"]);

// Polymorphism dengan array kapal
const kapalList = [kapalCepat, kapalVIP, kapalPesiar];

// Demonstrasi polymorphism
kapalList.forEach(kapal => {
    console.log(kapal.infokapal()); // Polymorphism: memanggil metode infokapal yang sesuai dengan kelas turunan
});

// Proses pemilihan tujuan, hari, jam, dan kapal, serta pembelian tiket
console.log(pembelianTiket.pilihTujuan("Paris"));
console.log(pembelianTiket.aturHariKeberangkatan("Senin"));
console.log(pembelianTiket.aturJamKeberangkatan("14:30"));
console.log(pembelianTiket.pilihKapal(kapalList, "VIP Cruiser"));  // Pilih kapal VIP Cruiser
console.log(pembelianTiket.pembelianTiket(3)); // Membeli 3 tiket