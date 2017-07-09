/**
 * Created by juan_arillo on 9/7/17.
 */

var navItems = document.getElementsByClassName(nav-li)

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function (event){
        var goTo = this.getElementsByTagName('a')[0].href.split("#")

        if (goTo.length === 2) {
                event.preventDefault();
                var target = goTo[goTo.length - 1];
                getElementByIdandScroll(target);
        }
    });
}

function getElementByIdandScroll(id) {
    var elem;
    if (id === '') {
        elem = document.getElementsByClassName('headerimg')[0];
    } else {
        elem = document.getElementById(id);
    }

    scrollToElement(elem);
}

function scrollToElement (element) {
    var jump = parseInt(element.getBoundingClientRect().top * 0.3);

    document.body.scrollTop += jump;

    if (!element.lastJump || element.lastJump > Math.abs(jump)) {
        element.lastJump = Math.abs(jump);

        setTimeout(function() {
            scrollToElement(element);
        }, 40);
    }
}