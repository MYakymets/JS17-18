document.addEventListener('DOMContentLoaded', (function () {

    var centralLine = document.getElementById('central_line');
    c_find_h = centralLine.querySelector('h4');
    c_find_p = centralLine.querySelector('p');

       centralLine.addEventListener('mouseover', function () {
        centralLine.style.backgroundColor="yellow";
    });
})
);
