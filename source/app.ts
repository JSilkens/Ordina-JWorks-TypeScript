function greeter(person: string){
    return "Hello, " + person;
}

let user = "Johan Silkens";

document.getElementById("welcome-text").textContent = greeter(user) + "!"