// citeste module pattern
var OrderManagement = (function() {
    // citeste cum  faci sa ai metode private si publice based on module pattern
    const module = {};

    module.addProductToCart() = function () {
        if (!Login.isUserLoggedIn()) {
            alert('You must be logged in to add a product in your personal cart');
            // redirectezi la pagina de login
        }
    }
})();