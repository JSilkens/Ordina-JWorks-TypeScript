var Library = /** @class */ (function () {
    function Library() {
        this.theMatrix = new Movie("The Matrix", "Thriller", "Did you know, Neo is the one?");
        this.mobyDick = new Movie("Moby Dick", "Drama", "Is this fish for real?");
        this.itemList = new Array;
        this.itemList[0] = this.theMatrix;
        this.itemList[1] = this.mobyDick;
    }
    Library.prototype.renderAll = function () {
        this.itemList.forEach(function (element) {
            element.render();
        });
    };
    return Library;
}());
//# sourceMappingURL=library.js.map