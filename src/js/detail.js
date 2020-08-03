import $ from 'jquery'

import {
    BASE_URL,
    API_KEY
} from './api';

const detail = () => {
    console.log('detail')
    const data = getUrlVars();

    $.ajax({
        type: "GET",
        url: `${BASE_URL}/${data.type}/${data.id}?api_key=${API_KEY}`,
        success: function (film) {
            console.log(film)

            $('.film-background').css('background-image', `url(https://image.tmdb.org/t/p/original${film.backdrop_path})`);
            $('.film-title').text(film.title || film.name)
            if (data.type == "movie") {
                $('.film-date').text(`(${film.release_date.substring(0,4)})`)
                $('.film-runtime').text(`Movie ${film.runtime} min`)
            } else {
                $('.film-date').text(`(${film.first_air_date.substring(0,4)} - ${film.last_air_date.substring(0,4)})`)
                $('.film-runtime').text(`TV Series`)
            }
            $('.film-tagline').text(film.tagline)
            $('.film-poster').attr("src", `https://image.tmdb.org/t/p/w500${film.poster_path}`);
            $('.film-desc').text(film.overview)
        },
        error: function (error) {
            const notFound = `
                <div class="row">
                    <center>
                        <h1 class="text-white">Not Found</h1>
                    </center>
                </div>
            `
            $('.film-detail').html(notFound)
            console.log(error)
        }
    })
}

const getUrlVars = () => {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        // vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

export default detail;