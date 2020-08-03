class Navbar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.className = "navbar navbar-expand-lg navbar-dark fixed-top"
        this.innerHTML = `
        <div class="container">
        <a class="navbar-brand" href="./index.html">
            <h1 class="text-primary font-weight-bold m-0">TANI FILM</h1>
        </a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mr-auto">
                <a class="nav-item nav-link font-weight-bold" href="./index.html">Home</a>
                <a class="nav-item nav-link font-weight-bold" href="./discover.html">Discover Film</a>
                <a class="nav-item nav-link font-weight-bold" href="./tvseries.html">TV Series</a>
            </div>
            <form class="nav-link searchbar" action="search.html" method="get">
                <input type="text" class="search-input" name="title" id="searh-movie" placeholder="Movie Title">
                <button type="submit" href="#" class="search-icon"><i class="fas fa-search"></i></button>
            </form>
        </div>
        </div>
        `
    }
}

customElements.define('nav-bar', Navbar)