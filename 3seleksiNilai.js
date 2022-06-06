function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        var nilai = dataArray.filter(x => x > nilaiAwal && x < nilaiAkhir)
        nilai.sort((a, b) => a-b)
        if (nilai.length === 0) {
            return "Hasil tidak ditemukan"
        } else {
            return nilai
        }
    } else if (nilaiAkhir < nilaiAwal) {
        return "Nilai Akhir harus lebih besar dari Nilai Awal"
    } else if (dataArray.length < 6) {
        return "Jumlah Angka dalam dataArray harus lebih dari 5"
    }
}
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(4, 17, [2, 25, 4]))
console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]))
