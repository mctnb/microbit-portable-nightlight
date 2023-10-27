function nightlight () {
    basic.showLeds(`
        #####
        #####
        #####
        #####
        #####
        `);
}

function clearScreen() {
    basic.clearScreen();
}

input.onButtonPressed(Button.A, nightlight);
input.onButtonPressed(Button.B, clearScreen);