$(function () {

    let position = 0;
    const lstSlide = ['#1', '#2', '#3', '#4', '#5'];

    let change = function (arg) {

        for (id of lstSlide) {
            id == arg ? $(arg).fadeIn("slow", "linear") : $(id).hide();
        }
    };

    let carroussel = function () {
        if (position >= lstSlide.length) {
            position = 0;
        }
        change(lstSlide[position]);
        position++;
    };

    let auto = function () {
        setInterval(carroussel, 5000);
    };

    $('#l1').click(function () {
        change(lstSlide[0]);
        position = 0;
    });

    $('#l2').click(function () {
        change(lstSlide[1]);
        position = 1;
    });

    $('#l3').click(function () {
        change(lstSlide[2]);
        position = 2;
    });

    $('#l4').click(function () {
        change(lstSlide[3]);
        position = 3;
    });

    $('#l5').click(function () {
        change(lstSlide[4]);
        position = 4;
    });

    $('#goRight').click(function () {
        position++
        if (position > 4) position = 0;
        change(lstSlide[position]);
    });

    $('#goLeft').click(function () {
        position--
        if (position < 0) position = 4;
        change(lstSlide[position]);
    });
    window.onload = auto;
});