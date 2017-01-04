export default class Main {
    run() {
        return 'started';
    }
}

window.onload = function () {
    var main = new Main();
    console.log(main.run());
}