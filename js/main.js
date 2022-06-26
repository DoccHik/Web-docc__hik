window.addEventListener('load', () => {

    let headerMenuLinks = document.querySelectorAll('.header-menu__link');
    console.log(headerMenuLinks);

    let header = document.querySelector('.header');
    let headerHight = header.offsetHeight;
    console.log(headerHight)

    if (window.location.hash != '') {
        scrollToId(window.location.hash);
    }

    headerMenuLinks.forEach((item) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            let link = e.target;
            scrollToId(link.hash)
        });
    });

    let btnUP = document.querySelector('.btn-up');
    btnUP.addEventListener('click', function(e) {
        scrollToPosition(0)
    });

    window.addEventListener('scroll', function(e) {
        let pos = window.pageYOffset;

        if (pos > window.innerHeight) {
            btnUP.classList.add('active')
        } else {
            btnUP.classList.remove('active')
        }
    });

    function scrollToPosition(pos) {
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    }

    function scrollToId(id) {
        let target = document.querySelector(id);
        console.log(target)

        if (target != null) {
            let pos = target.offsetTop - headerHight;
            scrollToPosition(pos)
        }
    }
});