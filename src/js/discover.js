import './film-list'

import $ from 'jquery'

import {
    BASE_URL,
    API_KEY
} from './api';

const discover = () => {
    const filmListElement = document.querySelector("film-list");

    $.ajax({
        type: "GET",
        url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`,
        success: function (res) {
            console.log(res)
            filmListElement.films = res.results;
        },
        error: function (error) {
            console.log(error)
        }
    })
}

export default discover;