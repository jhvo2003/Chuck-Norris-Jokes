window.addEventListener("load", setup);

function setup(){
    getJoke();
    document.getElementById("joke-btn").addEventListener("click", getJoke);
}

function getJoke(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random");

    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200){
            const data = JSON.parse(this.responseText);
            
            const joke = document.getElementById("joke");
            joke.innerHTML = data.value;
            }else{
                joke.innerHTML = "Something went wrong";
            }
        }
    }

    xhr.send();
}
