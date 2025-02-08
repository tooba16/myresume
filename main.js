var buttonToggle = document.getElementById('toggle');
var get = document.getElementById('get');
buttonToggle.addEventListener('click', function () {
    // Check the current display style of the 'get' element
    if (get.style.display === 'none' || get.style.display === '') {
        get.style.display = 'block';
    }
    else {
        get.style.display = 'none';
    }
});
