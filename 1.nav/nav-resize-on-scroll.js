        var w = window.innerWidth;
        if (w > 800) {
            window.onscroll = function () {
                scrollFunction()
            }


            function scrollFunction() {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

                    //brand settings
                    document.getElementById("brand").style.height = "80px";
                    document.getElementById("brand").style.paddingTop = "0vh";

                    document.getElementById("brand-text").style.fontSize = "45px";

                    //social icons settings
                    var x = document.getElementsByClassName("social-icons");
                    for (i = 0; i < x.length; i++) {
                        x[i].style.height = "35px";
                        x[i].style.width = "35px";
                        x[i].style.fontSize = "19px";

                    }

                    //diamond settings
                    var x = document.getElementsByClassName("wrap");
                    for (i = 0; i < x.length; i++) {
                        x[i].style.transform = "scale3d(0.6,0.6,0.6)";
                    }
                } else {

                    //brand settings
                    document.getElementById("brand").style.height = "110px";
                    document.getElementById("brand").style.paddingTop = "2vh";
                    document.getElementById("brand-text").style.fontSize = "55px";

                    //social icons settings
                    var x = document.getElementsByClassName("social-icons");
                    for (i = 0; i < x.length; i++) {
                        x[i].style.height = "40px";
                        x[i].style.width = "40px";
                        x[i].style.fontSize = "23px";
                    }

                    //diamond settings
                    var x = document.getElementsByClassName("wrap");
                    for (i = 0; i < x.length; i++) {
                        x[i].style.transform = "scale3d(0.7,0.7,0.7)";
                    }



                }
            }
        };
