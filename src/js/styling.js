import '../style/style.scss';

import $ from 'jquery';

//add background when scrolled
$(window).scroll(() => {
    if ($(window).scrollTop() > 10) {
        $("nav-bar").addClass('bg-dark');
    } else {
        $("nav-bar").removeClass('bg-dark');
    }
})

//add background if navbar click on top
$("nav-bar").on("click", ".navbar-toggler", () => {
    // console.log('aye')
    if ($(window).scrollTop() < 10) {
        $("nav-bar").toggleClass("bg-dark");
    }
});