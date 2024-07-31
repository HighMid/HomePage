
window.onload = function() {
    let major = prompt("What is your major?");
    if (major) {
        document.write("Great, we love " + major + " majors in this club!");
    } else {
        document.write("Great, we love all majors in this club!");
    }
};
