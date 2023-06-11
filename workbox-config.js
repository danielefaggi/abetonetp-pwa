module.exports = {
    // Il percorso del tuo service worker
    swSrc: "frontend/sw.js",
    // Il percorso della destinazione del service worker generato
    swDest: "build/sw.js",
    // La directory da cui leggere le risorse statiche
    globDirectory: "build",
    // I pattern da usare per selezionare le risorse statiche
    globPatterns: ["**/*.{html,js,css,png,jpg,gif,ico,json}"],
    // Le opzioni da usare per modificare le URL delle risorse statiche
    modifyURLPrefix: {
      // Rimuovi il prefisso /build/ dalle URL
      "/build/": "/",
    },
    // Cache file di 20M
    maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
};
