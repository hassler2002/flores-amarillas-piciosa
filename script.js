document.getElementById("abrir").addEventListener("click", () => {
    // Música de fondo 🎵
    const musica = new Audio("FOTOS/dedica.mp3");
    musica.loop = true; // se repite
    musica.volume = 0.6; // volumen medio
    musica.play();
    document.body.innerHTML = `
        <h1>Para mi vidita ♡</h1>
        <p>No podía dejar pasar este día sin darte tus flores amarillas 🌻</p>
        <p>Feliz día de las flores amarillas, mi Piciosa 💛</p>

        <div class="gallery" id="galeria"></div>

        <div class="carta" id="carta"></div>
    `;

    // Flores 🌻
    for (let i = 0; i < 20; i++) {
        let flower = document.createElement("div");
        flower.classList.add("flower");
        flower.innerHTML = "🌻";
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(flower);
    }

    // Corazones ❤️
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(heart);
    }

    // Mostrar fotos una por una cada 2 segundos
    const fotos = ["FOTOS/foto1.jpeg", "FOTOS/foto2.jpeg", "FOTOS/foto3.jpeg" , "FOTOS/foto4.jpeg"];
    const galeria = document.getElementById("galeria");

    fotos.forEach((src, index) => {
        setTimeout(() => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = `Foto ${index + 1}`;
            galeria.appendChild(img);
        }, index * 2000); // cada 2 segundos
    });

    // Carta romántica animada 💌
    const mensaje = `Te elegiría otra vez, y otra vez, y otra vez... ♡

Gracias por estar conmigo, por todos nuestros momentos y por seguir siendo esa personita tan especial para mí.

Te quiero muchísimo, vidita. 🌻💛`;

    let i = 0;
    function escribir() {
        if (i < mensaje.length) {
            document.getElementById("carta").innerHTML += mensaje.charAt(i);
            i++;
            setTimeout(escribir, 50);
        }
    }
    setTimeout(escribir, fotos.length * 2000); // empieza después de mostrar las fotos
});

