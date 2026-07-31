/* ==========================================================
   FRANCISCO | 1.º ANIVERSÁRIO
   script.js
========================================================== */

const GALLERY_URL = "https://photos.app.goo.gl/XdGHdCbULwbjDe5Y7";

const button = document.getElementById("openGallery");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let particles = [];
let animationId = null;

/* ==========================================================
   CANVAS
========================================================== */

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* ==========================================================
   CONFETTI
========================================================== */

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createConfetti() {

    particles = [];

    const colours = [
        "#4E7AA8",
        "#E8C96B",
        "#F4B6C2",
        "#A8D5BA",
        "#FFFFFF"
    ];

    for (let i = 0; i < 180; i++) {

        particles.push({

            x: canvas.width / 2,
            y: canvas.height / 2,

            vx: random(-8, 8),
            vy: random(-12, -3),

            size: random(4, 9),

            colour: colours[Math.floor(Math.random() * colours.length)],

            gravity: 0.18,

            alpha: 1,

            rotation: random(0, 360),

            rotationSpeed: random(-8, 8)

        });

    }

}

function drawConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        p.vy += p.gravity;

        p.x += p.vx;

        p.y += p.vy;

        p.rotation += p.rotationSpeed;

        p.alpha -= 0.008;

        ctx.save();

        ctx.globalAlpha = Math.max(p.alpha, 0);

        ctx.translate(p.x, p.y);

        ctx.rotate(p.rotation * Math.PI / 180);

        ctx.fillStyle = p.colour;

        ctx.fillRect(
            -p.size / 2,
            -p.size / 2,
            p.size,
            p.size
        );

        ctx.restore();

    });

    particles = particles.filter(p => p.alpha > 0);

    if (particles.length > 0) {

        animationId = requestAnimationFrame(drawConfetti);

    } else {

        cancelAnimationFrame(animationId);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }

}

/* ==========================================================
   BUTTON
========================================================== */

button.addEventListener("click", () => {

    button.disabled = true;

    button.style.transform = "scale(.96)";

    createConfetti();

    drawConfetti();

    setTimeout(() => {

        window.location.href = GALLERY_URL;

    }, 1000);

});
