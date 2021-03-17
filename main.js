canvas = document.getElementById("car-racer");
ctx = canvas.getContext("2d");

car_1_width = 120;
car_1_height = 70;
car_1_image = "car1.png";
car_1_x = 10;
car_1_y = 10;

car_2_width = 120;
car_2_height = 70;
car_2_image = "car2.png";
car_2_x = 10;
car_2_y = 100;

background_image = "racing.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = "car1.png";

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = "car2.png";
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        car_1_up();
        console.log("up arrow key");
    }

    if (keyPressed == "40") {
        car_1_down();
        console.log("down arrow key");
    }

    if (keyPressed == "37") {
        car_1_left();
        console.log("left arrow key");
    }

    if (keyPressed == "39") {
        car_1_right();
        console.log("right arrow key");
    }

    if (keyPressed == "87") {
        car_2_up();
        console.log("w key");
    }

    if (keyPressed == "83") {
        car_2_down();
        console.log("s key");
    }

    if (keyPressed == "65") {
        car_2_left();
        console.log("a key");
    }

    if (keyPressed == "68") {
        car_2_right();
        console.log("d key");
    }

    if (car_1_x == 700) {
        console.log("Car 1 Won!!!")
        document.getElementById("game_status").innerHTML = "Car 1 Won!!!"
    }

    if (car_2_x == 700) {
        console.log("Car 2 Won!!!")
        document.getElementById("game_status").innerHTML = "Car 2 Won!!!"
    }
}

function car_1_up() {
    if (car_1_y >= 0) {
        car_1_y = car_1_y - 10;
        console.log("When up arrow is pressed, x = " + car_1_x + " | y = " + car_1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car_1_down() {
    if (car_1_y <= 500) {
        car_1_y = car_1_y + 10;
        console.log("When down arrow is pressed, x = " + car_1_x + " | y = " + car_1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car_1_left() {
    if (car_1_x >= 0) {
        car_1_x = car_1_x - 10;
        console.log("When left arrow is pressed, x = " + car_1_x + " | y = " + car_1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car_1_right() {
    if (car_1_x <= 700) {
        car_1_x = car_1_x + 10;
        console.log("When right arrow is pressed, x = " + car_1_x + " | y = " + car_1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car_2_up() {
    if (car_2_y >= 0) {
        car_2_y = car_2_y - 10;
        console.log("When up arrow is pressed, x = " + car_1_x + " | y = " + car_1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car_2_down() {
    if (car_2_y <= 700) {
        car_2_y = car_2_y + 10;
        console.log("When down arrow is pressed, x = " + car_1_x + " | y = " + car_1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car_2_left() {
    if (car_2_x >= 0) {
        car_2_x = car_2_x - 10;
        console.log("When left arrow is pressed, x = " + car_1_x + " | y = " + car_1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car_2_right() {
    if (car_2_x <= 700) {
        car_2_x = car_2_x + 10;
        console.log("When right arrow is pressed, x = " + car_1_x + " | y = " + car_1_y)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}