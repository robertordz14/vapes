// to get current year
// function getYear() {
//     var currentDate = new Date();
//     var currentYear = currentDate.getFullYear();
//     document.querySelector("#displayYear").innerHTML = currentYear;
// }

// getYear();


// isotope js
$(document).ready(function () {
    // Inicialmente carga todos los productos
    cargarDatosWonder();
    cargarDatosDragbar();
    cargarDatosWonderNeo();

    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).attr('data-filter');
        filterItems(filter);
    });

    function filterItems(filter) {
        const tarjetasContainer = document.getElementById('tarjetas-container');
        tarjetasContainer.innerHTML = ''; // Vaciar el contenedor antes de cargar las nuevas tarjetas

        if (filter === 'all') {
            cargarDatosWonder();
            cargarDatosDragbar();
            cargarDatosWonderNeo();
        } else if (filter === 'wonder') {
            cargarDatosWonder();
        } else if (filter === 'dragbar') {
            cargarDatosDragbar();
        } else if (filter === 'wonderneo') {
            cargarDatosWonderNeo();
        }
    }
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});