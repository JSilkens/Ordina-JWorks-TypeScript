class Book extends Item {
    _author:string

    constructor(public title:string , public genre:string, public description:string,public author:string){
        super(title,genre,description);
        this._author = author;
    }

    render(): void {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this._title + "</h3>" +
            "<p>" + this._genre + "</p>" +
            "<p>" + this._author + "</p>" +
            "<span>" + this._description + "</span>";
            document.getElementById("items").appendChild(article);
    }
}