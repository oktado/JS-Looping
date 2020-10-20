// Exersise 1
for (let i=1; i<=100; i++) {
    console.log("user ke "+ i)
}
// Exersise 2
for(let i=1;i<=20; i+=2) {
    console.log(i);
}
// Exersise 3
for(angka=0,angka<=20;angka++)
if(angka%2==0){
    console.log("Angka " + angka+" adalah bilangan Genap.")
}else{
    console.log("Angka " + angka+" adalah bilangan Ganjil.")
}

// Exersise 4
alert('Selamat Datang !')
var jumlahUlang = -1
var ulangLagi = true

while (ulangLagi){
   var ulangLagi=confirm("Anda ingin mengulang?")
    jumlahUlang++
   
    
}

 alert('Anda telah mengulang sebanyak ' +jumlahUlang+ ' kali.')

// Exersise 5
var jawabanBenar = "Impact Byte"
var inputJawaban = prompt("Sebutkan kepanjangan dari nama IB?" );

do {
  prompt("Sebutkan kepanjangan dari nama IB?" );
}
while(inputJawaban == jawabanBenar);
alert('Selamat jawaban kamu benar !')

 