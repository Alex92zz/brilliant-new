function hideSquare() {
    var x, i, speed, animationSettings;
    x = document.querySelectorAll(".square");
    i = 1;
    speed = 5.5;
    animationSettings = "animate linear infinite ";


    function myLoop() {
        setTimeout(function(){
            console.log("alex");
        },50000)
        setTimeout(function () {

            var randomXNumber = Math.floor(Math.random() * 100 + 10);
            var randomYNumber = Math.floor(Math.random() * 100);
            var randomX = randomXNumber + "%";
            var randomY = randomYNumber + "%";

            x[i].style.top = randomX;
            x[i].style.left = randomY;
            x[i].classList.add("square-animation");
            console.log(animationSettings);


            animationSettings += speed + "s";
            x[i].style.animation = animationSettings;


            x[i].style.display = "block";
            i++;
            animationSettings = "animate linear infinite ";




            if (speed == 7) {
                speedDown();
            } else if (speed == 5.5) {
                speedUp();
            }

            console.log(" speed is " + speed);

            function speedUp() {
                speed += 0.5;
            }

            function speedDown() {
                speed -= 0.5;
            }



            if (i < x.length) {
                myLoop();
                console.log(i);
            } else {
                console.log(i);
                myDownLoop();
            }

        }, 300)


    }

    function myDownLoop() {
        setTimeout(function () {
            i--;
            x[i].style.display = "none";
            x[i].classList.remove("square-animation");

            var randomXNumber = Math.floor(Math.random() * 100 +10);
            var randomYNumber = Math.floor(Math.random() * 100);
            var randomX = randomXNumber + "%";
            var randomY = randomYNumber + "%";

            x[i].style.top = randomX;
            x[i].style.left = randomY;

            x[i].classList.add("square-animation");
            x[i].style.display = "block";

            if (i == 1) {
                myRepeatLoop();
            } else {
                myDownLoop();
            }

        }, 300)
    }
    
        function myRepeatLoop() {
        setTimeout(function () {
            i++;
            x[i].style.display = "none";
            x[i].classList.remove("square-animation");

            var randomXNumber = Math.floor(Math.random() * 100 +10);
            var randomYNumber = Math.floor(Math.random() * 100);
            var randomX = randomXNumber + "%";
            var randomY = randomYNumber + "%";

            x[i].style.top = randomX;
            x[i].style.left = randomY;

            x[i].classList.add("square-animation");
            x[i].style.display = "block";

            if (i == 1) {
                myRepeatLoop();
            } else {
                myDownLoop();
            }

        }, 300)
    }

    myLoop();

}
