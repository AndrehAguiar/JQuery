window.addEventListener('load', function () {

    let next = function (arg) {

        for (id of lstSlide) {

            id == arg ? $(arg)
                .fadeIn("slow", "linear")
                : $(id)
                    .hide();
        }
    }

    const lstSlide = ['#1', '#2', '#3', '#4', '#5'];

    const l1 = document.getElementById('l1');
    const l2 = document.getElementById('l2');
    const l3 = document.getElementById('l3');
    const l4 = document.getElementById('l4');
    const l5 = document.getElementById('l5');

    l1.addEventListener('click', function () {
        next(lstSlide[0])
    });

    l2.addEventListener('click', function () {
        next(lstSlide[1])
    });

    l3.addEventListener('click', function () {
        next(lstSlide[2])
    });

    l4.addEventListener('click', function () {
        next(lstSlide[3])
    });

    l5.addEventListener('click', function () {
        next(lstSlide[4])
    });

});