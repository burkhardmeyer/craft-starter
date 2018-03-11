/* -- A listener to ensure the fonts we need to use have been loaded */

(function () {

    // Optimization for Repeat Views
    if (sessionStorage.FontsLoaded) {
        document.documentElement.className += " fonts-loaded";
        return;
    }

    var fontA = new FontFaceObserver('Proxima-Nova-Regular');
    var fontB = new FontFaceObserver('Proxima-Nova-Bold');
    var fontC = new FontFaceObserver('Proxima-Nova-Black');
    var fontD = new FontFaceObserver('fontello');


    Promise.all([
        fontA.load(null, 3000),
        fontB.load(null, 3000),
        fontC.load(null, 3000),
        fontD.load(''),
    ]).then(function () {
        document.documentElement.className += " fonts-loaded";

        // Optimization for Repeat Views
        sessionStorage.FontsLoaded = true;
    });
})();