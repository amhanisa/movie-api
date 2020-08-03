import './js/styling'
import './js/navbar'
import './js/footer'


import main from './js/main.js'
import discover from './js/discover'
import tvseries from './js/tvseries'
import search from './js/search.js'
import detail from './js/detail.js'

import $ from 'jquery'

const url = $(location).attr('pathname');

// Fix Buat NPM Run Build. Klo ga ntar pathname yang muncul malah absolute path di harddisk
// Regex Susah Bener
const fix_url = url.match(/\/([^\/]+)\/?$/)[1];

console.log(fix_url)
switch (fix_url) {
    case 'discover.html':
        discover();
        break;
    case 'tvseries.html':
        tvseries();
        break;
    case 'search.html':
        search()
        break;
    case 'detail.html':
        detail()
        break;
    default:
        main()
        break;
}