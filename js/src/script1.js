document.addEventListener('DOMContentLoaded', (function () {

    var firstLine = document.getElementById('first_line');
    f_find_h = firstLine.querySelector('h1');
    f_find_p = firstLine.querySelector('p');

    f_find_h.addEventListener('mouseover', function () {
        f_find_p.style.fontSize = "20px";
        firstLine.style.backgroundColor="red";
    });

})
);
