function opentab(evt, Nametab) {
    var i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName('tabcontent');
  
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none' ;
    }
  
    tablinks = document.getElementsByClassName('tablinks');
  
    for(i = 0; i <tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace('active', '');
    }
  
    document.getElementById(Nametab).style.display = 'block'
    evt.currenttarget.className += 'Active';
  }
  
  function Luaspersegi() {
    // Mengambil nilai panjang sisi dari input
    var sideLength = parseFloat(document.getElementById('squareside').value);
  
    // Memastikan nilai yang dimasukkan adalah angka positif
    if (sideLength > 0) {
      // Menghitung luas persegi
      var area = sideLength * sideLength;
  
      //menampilkan rumus
      var rumus = "Luas = S x S";
      var hasil = "luas = " + sideLength + " x " + sideLength ;
  
      // Menampilkan hasil
     document.getElementById('rumus').innerHTML = rumus;
     document.getElementById('hasil').innerHTML = hasil;
     document.getElementById('result').innerHTML = "Luas Persegi= " + area ;
     
  
    } else {
      // Menampilkan pesan jika nilai yang dimasukkan tidak valid
      document.getElementById('result').innerHTML = "Masukkan panjang sisi yang valid";
    }
  
  }
  
  function Kelilingpersegi() {
    var sideLength = parseFloat(document.getElementById('squaresperimeter').value);
  
    // Memastikan nilai yang dimasukkan adalah angka positif
    if (sideLength > 0) {
      var area = 4 * sideLength;
  
      //menampilkan rumus
      var rumuskeliling = "Keterangan = 4 x S";
      var hasilkeliling = "Keterangan = " + sideLength + " x " + sideLength ;
  
      // Menampilkan hasil
      document.getElementById('rumuskeliling').innerHTML = rumuskeliling
      document.getElementById('hasilkeliling').innerHTML = hasilkeliling
      document.getElementById('Hasil').innerHTML = "Keliling Persegi= " + area ;
  
    } else {
      // Menampilkan pesan jika nilai yang dimasukkan tidak valid
      document.getElementById('Hasil').innerHTML = "Masukkan panjang sisi yang valid";
    }
  
  }
  function resetForm() {
    document.getElementById('squareside').value = "";
    document.getElementById('rumus').innerHTML = "";
    document.getElementById('hasil').innerHTML = "";
    document.getElementById('rumuskeliling').innerHTML = ""
    document.getElementById('hasilkeliling').innerHTML = ""
    
    document.getElementById('result').innerHTML = "";
    document.getElementById('Hasil').innerHTML = "";
    
  }
