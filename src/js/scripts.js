//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    var terminatorStart = Math.floor(Math.random() * 30000) + 10000;
    console.log(terminatorStart)
    setTimeout(startNinjaCounter, terminatorStart);

    function startNinjaCounter() {
        console.log('Maja triggered')
        var timing = 10;
        var elem = document.getElementById("MajaNinja");
        var pos = -100;

        var id = setInterval(popup, timing);
        function popup() {
            // STOP EVENT
            if (pos == -13) {
                clearInterval(id);

                setTimeout(function () {
                    id = setInterval(popdown, timing * 4);
                }, 2000);
            } else {
                pos++;
                elem.style.right = pos + 'px';
            }
        }
        function popdown() {
            // STOP EVENT
            if (pos == -100) {
                clearInterval(id);
            } else {
                pos--;
                elem.style.right = pos + 'px';
            }
        }

        //setTimeout(babyPopdown, 2000);
    }

    function babyPopdown() {
        // POP DOWN
    }
});
