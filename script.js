// ==========================================
// FRANCISCO | 1.º ANIVERSÁRIO
// ==========================================

const button = document.getElementById("openGallery");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

const GOOGLE_PHOTOS =
    "https://photos.app.goo.gl/XdGHdCbULwbjDe5Y7";

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let confetti = [];

function createConfetti() {

    confetti = [];

    const colors = [
        "#355C7D",
        "#D9B96B",
        "#F7D9E3",
        "#9CC2E5",
        "#FFFFFF"
    ];

    for (let i = 0; i < 180; i++) {

        confetti.push({

            x: Math.random() * canvas.width,
            y: -20 - Math.random() * canvas.height,

            size: 5 + Math.random() * 8,

            speed: 2 + Math.random() * 4,

            drift: (Math.random() - 0.5) * 2,

            rotation: Math.random() * 360,

            rotationSpeed: (Math.random() - 0.5) * 10,

            color: colors[Math.floor(Math.random() * colors.length)]

        });

    }

}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(piece => {

        ctx.save();

        ctx.translate(piece.x, piece.y);

        ctx.rotate(piece.rotation * Math.PI / 180);

        ctx.fillStyle = piece.color;

        ctx.fillRect(
            -piece.size / 2,
            -piece.size / 2,
            piece.size,
            piece.size
        );

        ctx.restore();

        piece.y += piece.speed;

        piece.x += piece.drift;

        piece.rotation += piece.rotationSpeed;

    });

    confetti = confetti.filter(piece => piece.y < canvas.height + 40);

    if (confetti.length > 0) {

        requestAnimationFrame(draw);

    }

}

button.addEventListener("click", () => {

    button.disabled = true;

    button.style.transform = "scale(.96)";

    createConfetti();

    draw();

    setTimeout(() => {

        window.location.href = GOOGLE_PHOTOS;

    }, 1000);

});
