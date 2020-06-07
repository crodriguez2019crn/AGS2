var vellMusica = document.getElementById("contingut-vell-musica")
var nouMusica = document.getElementById("contingut-nou-musica")
var horariDilluns = document.getElementById("dilluns")
var horariDimarts = document.getElementById("dimarts")
var horariDimecres = document.getElementById("dimecres")
var horariDijous = document.getElementById("dijous")
var horariDivendres = document.getElementById("divendres")
var menuses = document.getElementById("menuses")
var hamburguer = document.getElementById("hamburguer")
var mostrar = document.getElementById("mostrar")
var humo = document.getElementById("humo")
var pantalla = document.getElementById("pantalla")
var missatge = document.getElementById("ajudaTemari")



function amagar(holder) {
    if (holder.style.display === "none") {
        holder.style.display = "block";
        desplego.play()
    }
    else {
        holder.style.display = "none";
        desplego.play()
    }
}
function menu(holder) {
    if (holder.style.left === "0px") {
        holder.style.left = "5000px";
        holder.style.background = "rgba(0, 0, 0, 0.25);";
        guardar.play()
    }
    else {
        holder.style.left = "0px";
        holder.style.background = "rgba(0, 0, 0, 1);";
        guardar.play()
    }
}


var normal = new Audio()
normal.src = "normal.mp3"
var guardar = new Audio()
guardar.src = "guardar.mp3"
var completed = new Audio()
completed.src = "completed.mp3"
var desplego = new Audio()
desplego.src = "desplego.mp3"


$(function () {
    evt.preventDefault();
    $("a").click(function (evt) {
        var link = $(this).attr("href");
        setTimeout(function () {
            window.location.href = link;
        }, 5000);
    });
});


function ajudaPrimera() {
    mostrar.style.display = "block";
    pantalla.style.display = "block";
    humo.style.display = "block";
    missatge.style.display = "flex";
    missatge.onclick = ajudaSegona;
    pantalla.onclick = ajudaSegona;
}
function ajudaSegona() {
    document.getElementById("temari").style.zIndex = 7;
    document.getElementById("missatgePrincipal").innerHTML = "Aquest és el botó on trobaràs el temari. Aquí trobaràs les lliçons que et donaran en cada matèria."
    pantalla.style.display = "block";
    humo.style.display = "block";
    missatge.onclick = ajudaTercera;
    pantalla.onclick = ajudaTercera;

}
function ajudaTercera() {
    document.getElementById("temari").style.zIndex = 1;
    document.getElementById("horari").style.zIndex = 7;
    document.getElementById("missatgePrincipal").innerHTML = "Aquest és el botó on trobaràs l'horari. T'ajudarà a seguir una rutina i saber que fer cada dia."
    pantalla.style.display = "block";
    humo.style.display = "block";
    missatge.onclick = ajudaQuarta;
    pantalla.onclick = ajudaQuarta;

}
function ajudaQuarta() {
    document.getElementById("horari").style.zIndex = 1;
    document.getElementById("missatges").style.zIndex = 7;
    document.getElementById("missatgePrincipal").innerHTML = "Aquesta és la safata d'entrada. Si el professorat ha de comunicar una cosa important, ho rebràs aquí. "
    pantalla.style.display = "block";
    humo.style.display = "block";
    missatge.onclick = ajudaCinquena;
    pantalla.onclick = ajudaCinquena;

} 
function ajudaCinquena() {
    document.getElementById("missatges").style.zIndex = 1;
    document.getElementById("opcions").style.zIndex = 7;
    document.getElementById("missatgePrincipal").innerHTML = "Aquest és el botó on trobaràs les opcions. Aquí pots habilitar i deshabilitar certes característiques de l'aplicació. "
    pantalla.style.display = "block";
    humo.style.display = "block";
    missatge.onclick = ajudaSisena;
    pantalla.onclick = ajudaSisena;
}
function ajudaSisena() {
    document.getElementById("opcions").style.zIndex = 1;
    document.getElementById("deures").style.zIndex = 7;
    document.getElementById("missatgePrincipal").innerHTML = "Aquest és el botó on trobaràs els deures. Així podràs saber que has de fer per cada matèria. S'actualitza sol així que no et preocupis."
    pantalla.style.display = "block";
    humo.style.display = "block";
    missatge.onclick = ajudaSetena;
    pantalla.onclick = ajudaSetena;
}
function ajudaSetena() {
    document.getElementById("deures").style.zIndex = 1;
    document.getElementById("missatgePrincipal").innerHTML = "Això és tota la informació! Gaudeix de la nostra aplicació i aprèn molt."
    pantalla.style.display = "block";
    humo.style.display = "block";
    missatge.onclick = ajudaFinal;
    pantalla.onclick = ajudaFinal;
}
function ajudaFinal() {
    mostrar.style.display = "none";
    pantalla.style.display = "none";
    humo.style.display = "none";
    missatge.style.display = "none";
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (reg) {
            console.log('Registered Service Worker for Alloy');
        });
    });
}

self.addEventListener("install", function(e) {
    console.log("Alloy service worker installation");
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("Alloy service worker caching dependencies");
            initialCache.map(function(url) {
                return cache.add(url).catch(function(reason) {
                    return console.log(
                        "Alloy: " + String(reason) + " " + url
                    );
                });
            });
        })
    );
});


self.addEventListener("activate", function(e) {
    console.log("Alloy service worker activation");
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(
                keyList.map(function(key) {
                    if (key !== cacheName) {
                        console.log("Alloy old cache removed", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

self.addEventListener("fetch", function(e) {
    if (new URL(e.request.url).origin !== location.origin) return;

    if (e.request.mode === "navigate" && navigator.onLine) {
        e.respondWith(
            fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
                    cache.put(e.request, response.clone());
                    return response;
                });
            })
        );
        return;
    }

    e.respondWith(
        caches
            .match(e.request)
            .then(function(response) {
                return (
                    response ||
                    fetch(e.request).then(function(response) {
                        return caches.open(cacheName).then(function(cache) {
                            cache.put(e.request, response.clone());
                            return response;
                        });
                    })
                );
            })
            .catch(function() {
                return caches.match(offlinePage);
            })
    );
});