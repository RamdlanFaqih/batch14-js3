const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
})
}
// Menggunakan Then Catch
cekHariKerja("minggu")
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error.message);
  });

// then digunakan untuk menangani hasil jika promise berhasil diselesaikan (resolve). 
// catch digunakan untuk menangani error yang muncul jika promise gagal diselesaikan (reject).


// Menggunakan try catch
// async function cekHariKerjaAsync(day) {
//   try {
//       const result = await cekHariKerja(day);
//       console.log(result);
//   } catch (error) {
//       console.log(error.message);
//   }
// }

// cekHariKerjaAsync(1);

// Try digunakan untuk mengeksekusi yang mungkin terjadi error
// Catch, pada blok inilah yang akan menangkap error yang terjadi pada blok Try jika blok try memunculkan error



