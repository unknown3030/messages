// Tampilkan halaman pertama saat pertama kali load
document.getElementById("page1").style.display = "block"; // Menampilkan halaman pertama

let audio = new Audio('Assets/music1.mp3');
audio.loop = true;

function checkPassword1() {
    const inputPassword = document.getElementById("password1").value;
    const correctPassword = "11/08/2004"; // Ganti dengan password pertama

    if (inputPassword === correctPassword) {
        // Tampilkan halaman kedua
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
    } else {
        document.getElementById("error1").innerHTML = "Masak Salah sih, Masukin yang bener wkwk";
    }
}

let errorStep = 0; // Variabel untuk melacak pesan error yang ditampilkan

function checkPassword2() {
    const inputPassword = document.getElementById("password2").value;
    const correctPassword = "Saynz."; // Ganti dengan password kedua

    if (inputPassword === correctPassword) {
        // Reset langkah error jika password benar
        errorStep = 0;

        // Tampilkan halaman pesan
        document.getElementById("page2").style.display = "none";
        document.getElementById("messagePage").style.display = "block";

        // Putar musik
        audio.play().catch(error => {
            console.log('Autoplay gagal:', error);
        });
    } else {
        // Tentukan pesan error berdasarkan langkah saat ini
        const errorMessages = [
            "Bukan nama aslinya, IGN nya ini",
            "Di Game ya Kak",
            "Perhatine Besar Kecil Simbol Maybee",
            "Harus Sama Percis Pokoknya"
        ];
        document.getElementById("error2").innerHTML = errorMessages[errorStep];

        // Tingkatkan langkah error, dan reset ke 0 jika sudah mencapai 3
        errorStep = (errorStep + 1) % errorMessages.length;
    }
}
