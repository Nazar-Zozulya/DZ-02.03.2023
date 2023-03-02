function updateTime() {
    // Здесь должен быть элемент hours 
    var elemHours = document.querySelector(".hours")
    // Здесь должен быть элемент minutes 
    let minutes = document.querySelector(".minutes");
    // Здесь должен быть элемент seconds
    let seconds = document.querySelector(".seconds");

    const clock = new Date();

    // getHours()
    getHours() 
    elemHours.textContent = clock.getHours();
    
    // getMinutes()
    // getSeconds()

}
// Здесь должен быть задан интервал
setInterval(updateTime, 1000);