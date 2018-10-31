// citeste module pattern
var Login = (function() {
    // citeste cum  faci sa ai metode private si publice based on module pattern
    const module = {};

    module.isUserLoggedIn = function () {}

    return module;
})();