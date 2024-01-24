document.getElementById('Tembisa').addEventListener('click', function () {
    localStorage.setItem('selectedLocation', 'Tembisa ');
    window.location.href = 'form.html'; // Redirect to the form page
});

document.getElementById('Braam').addEventListener('click', function () {
    localStorage.setItem('selectedLocation', 'Braam');
    window.location.href = 'form.html'; // Redirect to the form page
});

document.getElementById('Twatwa').addEventListener('click', function () {
    localStorage.setItem('selectedLocation', 'Twatwa');
    window.location.href = 'form.html'; // Redirect to the form page
});

document.getElementById('Soweto').addEventListener('click', function () {
    localStorage.setItem('selectedLocation', 'Soweto');
    window.location.href = 'form.html'; // Redirect to the form page
});
