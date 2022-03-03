if (typeof window.matchMedia === 'function') {
    var pickTheme = Quizlet.pickColorTheme;
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var hasListener = false;

    function pickAuto() {
        pickTheme(mql.matches ? 'night' : 'default');
    }

    function setupAuto() {
        if (!Quizlet.colorThemeFromSystem) return;
        if (!hasListener) {
            mql.addListener(pickAuto);
            hasListener = true;
        }
        pickAuto();
    }

    function teardownAuto() {
        if (hasListener) mql.removeListener(pickAuto);
        hasListener = false;
    }
    setupAuto();
    Quizlet.pickColorTheme = function (t) {
        if (t === 'auto') {
            Quizlet.colorThemeFromSystem = true;
            setupAuto();
        } else {
            Quizlet.colorThemeFromSystem = false;
            teardownAuto();
            pickTheme(t);
        }
    };
} else {
    Quizlet.colorThemeFromSystem = false;
    Quizlet.pickColorTheme('default');
}