class FilmItem extends HTMLElement {
    set film(film) {
        this._film = film;
        this.render();
    }

    render() {
        this.className = "col-md-3 col-sm-4 col-6 mb-3";
        this.innerHTML = `
        <div class="card film-card-holder">
        <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${this._film.poster_path}" alt="Card image cap">
        <div class="card-body text-center">
        <span class="film-card-title font-weight-bolder">
        <a href="detail.html?id=${this._film.id}&type=${this._film.media_type || "movie"}">
        ${this._film.title || this._film.original_name}
        </a>
        </span>
        </div>
        </div>
        `;
    }
}

customElements.define('film-item', FilmItem);