const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;

if(popupLinks.length>0){
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-modal');
if (popupCloseIcon.length>0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
        if (!e.target.closest('.modal-window')) {
            popupClose(e.target.closest('.modal'));
        }
    });
}

function popupClose(popupActive) {
    if (unlock) {
        popupActive.classList.remove('open');
    }
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.modal.open');
        popupClose(popupActive);
    }
});

(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
    };
}
})();
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.mathesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchSelector ||
        Element.prototype.msMatchSelector;
    }
})();