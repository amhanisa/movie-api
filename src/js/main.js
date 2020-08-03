import './film-carousel'
import './film-list'

import $ from 'jquery'

import {
    BASE_URL,
    API_KEY
} from './api';

const main = () => {

    const filmCarouselElement = document.querySelector("film-carousel");
    const filmListElement = document.querySelector("film-list");

    $.ajax({
        type: "GET",
        url: `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
        success: function (res) {
            console.log(res)
            filmCarouselElement.films = res.results;
            filmListElement.films = res.results;
        },
        error: function (error) {
            console.log(error)
        }
    })
}

export default main;