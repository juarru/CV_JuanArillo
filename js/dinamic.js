/**
 * Created by juan_arillo on 9/7/17.
 */

/* Smooth Scroll */

var navItems = document.getElementsByClassName('nav-li')

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

/* Navigation */

function deleteActiveClass() {
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }
}

var acumulativeOffset = function (element) {
    var top = 0;

    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while (element);

    return top;
}

var offsetWhoIam = acumulativeOffset(document.getElementById('whoiam')) - 50;
var offsetBacground = acumulativeOffset(document.getElementById('background')) - 50;
var offsetExperience = acumulativeOffset(document.getElementById('experience')) - 50;
var offsetAbout = acumulativeOffset(document.getElementById('about')) - 50;
var offsetContact = acumulativeOffset(document.getElementById('contact')) - 50;
var offsetComments = acumulativeOffset(document.getElementById('comments')) - 50;
var nav = document.getElementsByClassName('nav')[0];

window.addEventListener('scroll', changeMenuStyle);

var previous;
function changeMenuStyle(event) {
    var pageOffset = window.pageYOffset;

    if (pageOffset >= 0 && pageOffset < offsetWhoIam) {
        if (!previous || previous !== 1) {
            previous = 1;
        } else if (previous === 1){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href='#']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetWhoIam && pageOffset < offsetBacground) {
        if (!previous || previous !== 2) {
            previous = 2;
        } else if (previous === 2){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='whoiam']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetBacground &&  offsetWhoIam < offsetExperience) {
        if (!previous || previous !== 3) {
            previous = 3;
        } else if (previous === 3){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='background']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetExperience &&  offsetBacground < offsetAbout) {
        if (!previous || previous !== 4) {
            previous = 4;
        } else if (previous === 4){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='experience']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetAbout &&  offsetExperience < offsetContact) {
        if (!previous || previous !== 5) {
            previous = 5;
        } else if (previous === 5){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='about']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetContact &&  offsetAbout < offsetComments) {
        if (!previous || previous !== 6) {
            previous = 6;
        } else if (previous === 6){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='contact']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetComments &&  offsetContact < pageOffset.length) {
        if (!previous || previous !== 7) {
            previous = 7;
        } else if (previous === 7){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='comments']").parentNode.classList.add("active");
    }
}

/* Función para mostrar el campo text */

var optItems = document.getElementsByName('contact')

for(var i=0; i < optItems.length; i++ ){
    optItems[i].addEventListener('click', function(event){
        if (document.getElementById('option_3').checked == true) {
            document.getElementById('contact-text-div').style.display='block';
        } else {
            document.getElementById('contact-text-div').style.display='none';
        }
    })
}

