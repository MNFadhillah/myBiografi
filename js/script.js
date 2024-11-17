document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman saat form dikirim

    // Mengambil nilai dari input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseElement = document.getElementById("response");

    // Validasi format email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name && email && message) {
        if (!emailPattern.test(email)) {
            responseElement.textContent = "Format email tidak valid.";
            responseElement.style.color = "red";
            responseElement.style.animation = "shake 0.3s ease-in-out"; // Efek animasi
            setTimeout(() => responseElement.style.animation = "", 300); // Reset animasi
            return;
        }

        // Tampilkan pesan sukses
        responseElement.textContent = `Terima kasih, ${name}. Pesan Anda telah terkirim!`;
        responseElement.style.color = "green";
        responseElement.style.animation = "fadeIn 0.5s ease-in-out";

        // Reset form
        document.getElementById("contactForm").reset();
    } else {
        // Tampilkan pesan error jika ada field kosong
        responseElement.textContent = "Harap isi semua bidang.";
        responseElement.style.color = "red";
        responseElement.style.animation = "shake 0.3s ease-in-out";
        setTimeout(() => responseElement.style.animation = "", 300);
    }
});
