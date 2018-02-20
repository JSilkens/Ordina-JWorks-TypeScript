class Library{
    
    theMatrix = new Movie("The Matrix","Thriller","Did you know, Neo is the one?");
    mobyDick = new Movie("Moby Dick", "Drama" , "Is this fish for real?" );
    itemList: Item[];

    constructor(){
        this.itemList = new Array;
        this.itemList[0] = this.theMatrix;
        this.itemList[1] = this.mobyDick;
    }

    renderAll() : void {
        this.itemList.forEach(element => {
            element.render();
        });
    }
    
}