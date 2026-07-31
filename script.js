/* ==================================================
   RESET
================================================== */

*,
*::before,
*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:root{

    --bg:#F8F6F2;
    --card:#ffffff;

    --blue:#355C7D;
    --blue-light:#5E81A2;

    --gold:#D9B96B;

    --text:#6B7280;

    --shadow:0 20px 45px rgba(0,0,0,.08);

    --radius:32px;

}

html{

    scroll-behavior:smooth;

}

body{

    font-family:"Inter",sans-serif;
    background:var(--bg);

    color:var(--text);

    overflow-x:hidden;

    min-height:100vh;

}

/* ==================================================
   BACKGROUND
================================================== */

.background{

    position:fixed;

    inset:0;

    overflow:hidden;

    pointer-events:none;

    z-index:1;

}

.background::before{

    content:"";

    position:absolute;

    inset:0;

    background:

    radial-gradient(circle at 10% 15%, rgba(217,185,107,.25) 2px, transparent 3px),
    radial-gradient(circle at 28% 12%, rgba(217,185,107,.18) 1.5px, transparent 2px),
    radial-gradient(circle at 52% 22%, rgba(217,185,107,.20) 2px, transparent 3px),
    radial-gradient(circle at 75% 16%, rgba(217,185,107,.22) 2px, transparent 3px),
    radial-gradient(circle at 90% 26%, rgba(217,185,107,.18) 1.5px, transparent 2px),
    radial-gradient(circle at 20% 80%, rgba(217,185,107,.18) 2px, transparent 3px),
    radial-gradient(circle at 80% 82%, rgba(217,185,107,.22) 2px, transparent 3px);

}

/* ==================================================
   CLOUDS
================================================== */

.cloud{

    position:absolute;

    width:220px;

    opacity:.70;

    animation:cloudFloat 14s ease-in-out infinite;

}

.cloud-left{

    left:-40px;

    top:70px;

}

.cloud-right{

    right:-40px;

    top:120px;

    animation-delay:3s;

}

/* ==================================================
   BALLOONS
================================================== */

.balloon{

    position:absolute;

    width:105px;

    animation:balloon 5s ease-in-out infinite;

}

.balloon-left{

    left:90px;

    top:45px;

}

.balloon-right{

    right:90px;

    top:45px;

    animation-delay:2.5s;

}

/* ==================================================
   WRAPPER
================================================== */

.wrapper{

    position:relative;

    z-index:2;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    min-height:100vh;

    padding:70px 20px;

}

/* ==================================================
   CARD
================================================== */

.card{

    width:min(680px,92vw);

    background:var(--card);

    border-radius:var(--radius);

    padding:70px 60px;

    text-align:center;

    box-shadow:var(--shadow);

}

/* ==================================================
   GOOSE
================================================== */

.goose{

    width:170px;

    margin-bottom:30px;

}

/* ==================================================
   TITLES
================================================== */

h1{

    font-family:"Cormorant Garamond",serif;

    font-size:4rem;

    color:var(--blue);

    line-height:1;

}

.subtitle{

    margin-top:12px;

    letter-spacing:5px;

    color:var(--gold);

    font-size:.95rem;

    font-weight:600;

}

.heart{

    margin:25px auto 35px;

    color:#D9A8B4;

    font-size:20px;

}

/* ==================================================
   TEXT
================================================== */

.intro,
.message,
.gallery p{

    max-width:520px;

    margin:auto;

    line-height:1.9;

    font-size:1.05rem;

}

.message{

    margin-top:18px;

}

.divider{

    width:90px;

    height:2px;

    background:#EEF1F4;

    margin:45px auto;

}

.gallery h2{

    font-family:"Cormorant Garamond",serif;

    color:var(--blue);

    font-size:2rem;

    margin-bottom:20px;

}
/* ==================================================
   BUTTON
================================================== */

#openGallery{

    margin-top:38px;

    border:none;

    background:var(--blue);

    color:#fff;

    padding:18px 38px;

    border-radius:999px;

    font-size:1rem;

    font-weight:600;

    cursor:pointer;

    display:inline-flex;

    align-items:center;

    gap:12px;

    transition:
        transform .25s ease,
        background .25s ease,
        box-shadow .25s ease;

    box-shadow:
        0 12px 25px rgba(53,92,125,.25);

}

#openGallery:hover{

    background:var(--blue-light);

    transform:translateY(-3px);

    box-shadow:
        0 18px 35px rgba(53,92,125,.28);

}

#openGallery:active{

    transform:scale(.96);

}

.camera{

    font-size:1.2rem;

}

/* ==================================================
   FOOTER
================================================== */

footer{

    text-align:center;

    margin-top:45px;

}

.footer-divider{

    width:70px;

    height:2px;

    background:#E9ECEF;

    margin:0 auto 28px;

}

.signature{

    font-style:italic;

    color:#8C939A;

    margin-bottom:10px;

}

footer h3{

    font-family:"Cormorant Garamond",serif;

    color:var(--blue);

    font-size:2rem;

    font-weight:600;

    margin-bottom:18px;

}

.quote{

    color:#9AA0A6;

    font-style:italic;

    font-size:.95rem;

}

/* ==================================================
   CONFETTI
================================================== */

#confetti{

    position:fixed;

    inset:0;

    width:100%;

    height:100%;

    pointer-events:none;

    z-index:9999;

}

/* ==================================================
   ANIMATIONS
================================================== */

@keyframes balloon{

    0%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(-18px);

    }

    100%{

        transform:translateY(0);

    }

}

@keyframes cloudFloat{

    0%{

        transform:translateX(0);

    }

    50%{

        transform:translateX(18px);

    }

    100%{

        transform:translateX(0);

    }

}

@keyframes fadeUp{

    from{

        opacity:0;

        transform:translateY(30px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

.card{

    animation:fadeUp .8s ease;

}

/* ==================================================
   MOBILE
================================================== */

@media (max-width:768px){

    .card{

        padding:45px 28px;

        border-radius:24px;

    }

    .goose{

        width:125px;

    }

    h1{

        font-size:3rem;

    }

    .gallery h2{

        font-size:1.7rem;

    }

    .intro,
    .message,
    .gallery p{

        font-size:1rem;

    }

    #openGallery{

        width:100%;

        justify-content:center;

        padding:17px 22px;

    }

    .balloon{

        width:70px;

    }

    .balloon-left{

        left:18px;

    }

    .balloon-right{

        right:18px;

    }

    .cloud{

        width:150px;

    }

}

@media (max-width:480px){

    h1{

        font-size:2.5rem;

    }

    .subtitle{

        font-size:.8rem;

        letter-spacing:3px;

    }

    footer h3{

        font-size:1.6rem;

    }

    .quote{

        font-size:.85rem;

    }

}
