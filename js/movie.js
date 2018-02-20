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
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Movie.prototype.render = function () {
        var article = document.createElement("article");
        article.innerHTML =
            "<h3>" + this._title + "</h3>" +
                // "<p>" + this.age + "</p>" +
                // "<p>" + this.name + "</p>" +
                "<p>" + this._genre + "</p>" +
                "<span>" + this._description + "</span>";
        document.getElementById("items").appendChild(article);
    };
    return Movie;
}(Item));
//# sourceMappingURL=movie.js.map