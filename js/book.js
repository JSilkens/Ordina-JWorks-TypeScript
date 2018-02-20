var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(title, genre, description, author) {
        var _this = _super.call(this, title, genre, description) || this;
        _this.title = title;
        _this.genre = genre;
        _this.description = description;
        _this.author = author;
        _this._author = author;
        return _this;
    }
    Book.prototype.render = function () {
        var article = document.createElement("article");
        article.innerHTML =
            "<h3>" + this._title + "</h3>" +
                "<p>" + this._genre + "</p>" +
                "<p>" + this._author + "</p>" +
                "<span>" + this._description + "</span>";
        document.getElementById("items").appendChild(article);
    };
    return Book;
}(Item));
//# sourceMappingURL=book.js.map