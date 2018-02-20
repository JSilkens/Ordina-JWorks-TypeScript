abstract class Item {
    _title:string;
    _genre:string;
    _description:string;
    

    constructor(public title:string , public genre:string, public description:string) {
     this._title = title;
     this._genre = genre;
     this._description = description;   
    }

    abstract render(): void;
}