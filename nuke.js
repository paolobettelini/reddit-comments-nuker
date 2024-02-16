let flag = false;
setTimeout(() => flag = true, 1000);

setInterval(() => {
    setTimeout(() => document.getElementsByClassName("togglebutton")[0].click(), 0)
    setTimeout(() => document.getElementsByClassName("yes")[0].click(), 75)
    setTimeout(() => document.getElementsByClassName("yes")[0].click(), 150)
    console.log("Deleting comment");

    if (document.getElementsByClassName("togglebutton").length == 0 && flag) {
        flag = false;
        location.reload()
    }
}, 500);