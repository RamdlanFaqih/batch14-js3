function cekKelulusan(rataRata) {
  return new Promise((resolve, reject) => {
    if (typeof rataRata !== 'number') {
      reject(new Error('Rata-rata harus berupa angka'));
    } else {
      const nilai = rataRata >= 75? 'Lulus' : 'Tidak Lulus';
      resolve(nilai);
    }
  });
}

cekKelulusan(80)
 .then(nilai => console.log(`Kelulusan: ${nilai}`))
 .catch(error => console.log(error.message));
 