const EventEmitter = require("events");

class Button extends EventEmitter {
    click() {
        this.emit("click");
    }
}

const button = new Button();

button.on("click", () => {
    console.log("Button Clicked");
});

button.click();