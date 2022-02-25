var header = document.querySelector('header');
var mainMenuList = document.querySelectorAll('.mainmenu > li');
var subMenu = document.querySelectorAll('.submenu');
var subMenuHeight = 0;
var headerHeight = header.offsetHeight;


// for (let i = 0; i < subMenu.length; i++) {

//     if (subMenu[i].offsetHeight > subMenuHeight)
//         subMenuHeight=subMenu[i].offsetHeight;
// }


for (let i = 0; i < mainMenuList.length; i++) {
    mainMenuList[i].addEventListener('mouseover', function() {
        // header.style.height = `${headerHeight + subMenu[i].offsetHeight}px`;
        subMenuHeight = this.querySelector('ul').offsetHeight;
        header.style.height = `${headerHeight + subMenuHeight}px`;
    });

    mainMenuList[i].addEventListener('mouseout', () => {
        header.style.height = `${headerHeight}px`;
    });
}
