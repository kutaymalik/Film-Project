const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// UI Objesini Başlatma
const ui = new UI();

// Storage Objesini oluşturmak
const storage = new Storage();

// Tüm Eventleri Yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", loadFilms)

    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllfilms);
}

function clearAllfilms(){
    if(confirm("Filmlerin hepsi silinsin mi?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllfilmsFromStorage();
    }
}


// Storegedan filmleri arayüze yükleme
function loadFilms(){
    let films = storage.getFilmsFromStorage();
    ui.loadFilmsToUI(films);
}

// Filmleri Silme İşlemi
function deleteFilm(e){
    
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme İşlemi Başarılı...", "success");
    }
}

function addFilm(e){
    
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    try {
        if(title === "" || director === "" || url === ""){
            // Hata
            ui.displayMessages("Tüm alanlari doldurun...","danger");
        }
        else{
            // Yeni Film
            const newFilm = new Film(title, director, url);

            // Arayüze Filmi Ekleme
            ui.addFilmToUI(newFilm);

            // Storage'a Filmi Ekleme
            storage.addFilmToStorage(newFilm);

            ui.displayMessages("Film Başarıyla Eklendi", "success");
        }
        
        // Inputları Sıfırlama
        ui.clearInputs(titleElement, urlElement, directorElement);
    
        
        e.preventDefault();
    }
    catch(error){
        console.log("Hata: ",error);
    }
}