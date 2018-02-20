class Movie extends Item implements Rating {
    age: number;
    name: string;

    render(): void {
        let article: HTMLElement = document.createElement("article")
        article.innerHTML =
            "<h3>" + this._title + "</h3>" +
            // "<p>" + this.age + "</p>" +
            // "<p>" + this.name + "</p>" +
            "<p>" + this._genre + "</p>" +
            "<span>" + this._description + "</span>";
            document.getElementById("items").appendChild(article);
    }
    
}