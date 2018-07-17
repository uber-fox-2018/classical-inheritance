"use strict"

class Hewan {
  constructor(tempat_tinggal, cara_berkembang_biak, alat_gerak, cara_pembuahan, jenis_makanan, alat_pernafasan, penutup_tubuh, jumlah_kaki) {
    this.tempat_tinggal = tempat_tinggal || 'darat';
    this.cara_berkembang_biak = cara_berkembang_biak || 'beranak';
    this.alat_gerak = alat_gerak || 'kaki';
    this.cara_pembuahan = cara_pembuahan || 'internal';
    this.jenis_makanan = jenis_makanan || 'herbivora';
    this.alat_pernafasan = alat_pernafasan || 'paru-paru';
    this.penutup_tubuh = penutup_tubuh || 'rambut';
    this.jumlah_kaki = jumlah_kaki || 4;
  }
}

class Pisces {
  constructor(tempat_tinggal, cara_berkembang_biak, alat_gerak, cara_pembuahan, jenis_makanan, alat_pernafasan, penutup_tubuh, jumlah_kaki) {
    // super();
    this.tempat_tinggal = tempat_tinggal || 'air';
    this.cara_berkembang_biak = cara_berkembang_biak || 'bertelur';
    this.alat_gerak = alat_gerak || 'sirip';
    this.cara_pembuahan = cara_pembuahan || 'internal';
    this.jenis_makanan = jenis_makanan || 'omnivora';
    this.alat_pernafasan = alat_pernafasan || 'insang';
    this.penutup_tubuh = penutup_tubuh || 'sisik';
    this.jumlah_kaki = jumlah_kaki || 0;
  }
}

class Amphibi extends Hewan {
  constructor(jenis_makanan) {
    super();
    this.tempat_tinggal = 'air dan darat';
    this.cara_berkembang_biak = 'bertelur';
    this.jenis_makanan = jenis_makanan || 'omnivora';
  }
}

class Reptil extends Hewan {
  constructor(cara_berkembang_biak, alat_gerak, jumlah_kaki) {
    super();
    this.cara_berkembang_biak = cara_berkembang_biak || 'bertelur';
    this.alat_gerak = alat_gerak || 'perut';
    this.penutup_tubuh = 'sisik';
    this.jumlah_kaki = jumlah_kaki || 0;
  }
}

class Aves extends Hewan {
  constructor(tempat_tinggal, alat_gerak, jenis_makanan) {
    super();
    this.tempat_tinggal = tempat_tinggal || 'darat';
    this.cara_berkembang_biak = 'bertelur';
    this.alat_gerak = alat_gerak || 'kaki';
    this.penutup_tubuh = 'bulu';
    this.jumlah_kaki = 2;
    this.jenis_makanan = jenis_makanan || 'herbivora';
  }
}

class Mamalia extends Hewan {
  constructor() {
    super();
  }
}

let singa = new Mamalia();
console.log('Singa merupakan hewan dengan kategori:', singa);
console.log();

let ikan = new Pisces()
console.log('Ikan merupakan hewan dengan kategori:', ikan);
console.log();

let katak = new Amphibi()
console.log('Katak merupakan hewan dengan kategori:', katak);
console.log();

let ular = new Reptil()
console.log('Ular merupakan hewan dengan kategori:', ular);
console.log();

let buaya = new Reptil('darat dan air', 'kaki dan ekor', 4)
console.log('Buaya merupakan hewan dengan kategori:', buaya);
console.log();

let elang = new Aves('darat dan udara', 'sayap', 'karnivora')
console.log('Elang merupakan hewan dengan kategori:', elang);
console.log();

