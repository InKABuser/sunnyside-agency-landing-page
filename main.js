const NAV_ICON = document.getElementsByClassName('burger')[0];
const NAV_LIST = document.getElementsByClassName('nav-list')[0];
const HEADER_BG = document.querySelector('header');
const mediaQuery = window.matchMedia('(min-width:750px)')
const EGG_BG = document.getElementsByClassName('egg')[0];
const CUP_BG = document.getElementsByClassName('cup')[0];
const CHERRY_BG = document.getElementsByClassName('cherry')[0];
const ORANGE_BG = document.getElementsByClassName('orange')[0];
const MILK_IMG = document.getElementById('milk');
const ORANGE_IMG = document.getElementById('gallange');
const CONE_IMG = document.getElementById('cone');
const SUGAR_IMG = document.getElementById('sugar');



NAV_ICON.addEventListener('click', function() {
    NAV_ICON.classList.toggle('clicked');
    NAV_LIST.classList.toggle('active');
});


function changeImage(e) {
    if (e.matches) {
        HEADER_BG.style.backgroundImage  ="url('images/desktop/image-header.jpg')";
        EGG_BG.style.backgroundImage ="url('images/desktop/image-transform.jpg')";
        CUP_BG.style.backgroundImage = "url('images/desktop/image-stand-out.jpg')";
        CHERRY_BG.style.backgroundImage ="url('images/desktop/image-graphic-design.jpg')"
        ORANGE_BG.style.backgroundImage = "url('images/desktop/image-photography.jpg')"
        MILK_IMG.src = 'images/desktop/image-gallery-milkbottles.jpg'
        ORANGE_IMG.src = 'images/desktop/image-gallery-orange.jpg'
        CONE_IMG.src = 'images/desktop/image-gallery-cone.jpg'
        SUGAR_IMG.src = 'images/desktop/image-gallery-sugarcubes.jpg'
    } else {
        HEADER_BG.style.backgroundImage  ="url('images/mobile/image-header.jpg')";
        EGG_BG.style.backgroundImage ="url('images/mobile/image-transform.jpg')";
        CUP_BG.style.backgroundImage = "url('images/mobile/image-stand-out.jpg')";
        CHERRY_BG.style.backgroundImage ="url('images/mobile/image-graphic-design.jpg')"
        ORANGE_BG.style.backgroundImage = "url('images/mobile/image-photography.jpg')"
        MILK_IMG.src = 'images/mobile/image-gallery-milkbottles.jpg'
        ORANGE_IMG.src = 'images/mobile/image-gallery-orange.jpg'
        CONE_IMG.src = 'images/mobile/image-gallery-cone.jpg'
        SUGAR_IMG.src = 'images/mobile/image-gallery-sugar-cubes.jpg'
    };
}

function removeActive(e) {
    if (e.matches || NAV_LIST.classList.contains('active')) {
        NAV_LIST.classList.remove('active');
        NAV_ICON.style.display = 'none';
        NAV_ICON.classList.remove('clicked');
        console.log('if')
    } else {
        NAV_ICON.style.display = "block";
        console.log('else')
    }
}


changeImage(mediaQuery);
removeActive(mediaQuery)
mediaQuery.addEventListener('change', changeImage,);

mediaQuery.addEventListener('change', removeActive)

