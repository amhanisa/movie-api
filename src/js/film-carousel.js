class FilmCarousel extends HTMLElement {
    connectedCallback() {
        // Kayaknya lebih baik begini

        // if (this._films) {
        //     this.render()
        // } else {
        //     this.renderError()
        // }
    }

    // ga enak banget nulis html di file js :(
    render() {
        this.className = "vh-100 overflow-hidden align-content-center"
        this.innerHTML = `
        <div id="filmCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">

        </ol>
        <div class="carousel-inner vh-100">
           
        </div>
        <a class="carousel-control-prev" href="#filmCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#filmCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
        `;

        const carouselIndicatorsElement = document.querySelector('.carousel-indicators');
        const carouselInnerElement = document.querySelector('.carousel-inner');
        this._films.forEach((film, index) => {
            const indicator = document.createElement('li');
            indicator.setAttribute('data-target', '#filmCarousel');
            indicator.setAttribute('data-slide-to', index);

            const carouselItemElement = document.createElement('div')
            carouselItemElement.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${film.backdrop_path})`
            carouselItemElement.innerHTML = `
            <div class="carousel-caption">
            <a href="./detail.html?id=${film.id}&type=${film.media_type}" class="carousel-title">
                <h1 class="font-weight-bold">${film.title || film.original_name}</h1>
            </a>
            <p class="d-none d-md-block">${film.overview}</p>
            </div>
            `
            //untuk slide pertama tambah class active biar jalan
            if (index == 0) {
                indicator.className = "active"
                carouselItemElement.className = "carousel-item active"
            } else {
                indicator.className = ""
                carouselItemElement.className = "carousel-item"
            }

            carouselIndicatorsElement.appendChild(indicator);
            carouselInnerElement.appendChild(carouselItemElement)
        })
    }

    renderError() {
        this.className = "vh-100 overflow-hidden align-content-center"
        this.innerHTML = `
        <div id="filmCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#filmCarousel" data-slide-to=0 class="active"></li>
        </ol>
        <div class="carousel-inner vh-100">
           <div class="carousel-item d-flex justify-content-center align-items-center active">
           <h2 class="text-white">Cannot retrieve data</h2>
           </div>
        </div>
        <a class="carousel-control-prev" href="#filmCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#filmCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
        `
    }

    set films(films) {
        this._films = films;
        this.render()
    }

}

customElements.define('film-carousel', FilmCarousel);