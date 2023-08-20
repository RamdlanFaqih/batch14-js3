function presensiKehadiran(jumlah) {
    return new Promise ((resolve, reject) => {
        if (typeof jumlah !== 'number') {
            reject(new Error('Jumlah harus berupa angka'))
        }else {
            const kehadiran = jumlah > 9 ? 'baik' : 
            jumlah > 5? 'cukup' : 'buruk';
            resolve(kehadiran)
        }
    });
}

presensiKehadiran(9)
.then (jumlah => console.log(`kehadiran : ${jumlah}`))
.catch (error => console.log(error.message))