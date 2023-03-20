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
    }

    displayMessages = function(message, type){

        this.createElement("div", `alert alert-${type}`, message, ".card-body");

        // const cardBody = document.querySelector(".card-body");

        // // Alert Divini Oluşturma
        // const div = document.createElement("div");
        // div.className = `alert alert-${type}`;
        // div.textContent = message;

        // // Divi eklemek
        // cardBody.appendChild(div);

        // setTimeout(function(){
        //     div.remove();
        // },1000);


    }

}

