class GetAPI {
    constructor(urlAPI){
        this.urlAPI = this.urlAPI;
    }

    apiFetech (){
        fetch(urlAPI)
        .then((response) => response)
        .then(this.actionToDo())
        .catch((error) => error);
    }
}