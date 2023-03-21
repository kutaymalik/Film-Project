class UI {
    constructor(){
        
    }

    addFilmToUI = function(newFilm){

        const filmList = document.getElementById("films");
        filmList.innerHTML += `
        <tr>
                <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`
        console.log(filmList);
    }

    clearInputs = function(deleteUrlUI, deleteTitleUI, deleteDirectorUI){
        deleteUrlUI.value = "";
        deleteTitleUI.value = "";
        deleteDirectorUI.value = "";
    }

    createElement = function(element, class_name, content, doc){

        console.log("Girdi");
        const el = document.createElement(element);
        el.className = class_name;
        el.textContent = content; 
        const container = document.querySelector(doc); 
        container.appendChild(el);
        return el;
    }

    displayMessages = function(message, type){

        // Elementi oluşturma
        const element = this.createElement("div", `alert alert-${type}`, message, ".card-body");
        

        // Elementi 1 sn sonra silme
        setTimeout(function(){
            element.remove();
        },1000);

    }

    loadFilmsToUI = (films) => {
        const filmList = document.getElementById("films");

        films.forEach(function(film){
            filmList.innerHTML += `
            <tr>
                    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                    <td>${film.title}</td>
                    <td>${film.director}</td>
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>`
        })
    }

    deleteFilmFromUI = (element) => {

        element.parentElement.parentElement.remove();
    }

    clearAllFilmsFromUI = () => {
        const filmList = document.getElementById("films");
        // filmList.innerHTML = "";

        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    }

}

