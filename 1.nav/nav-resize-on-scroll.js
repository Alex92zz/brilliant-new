        var w = window.innerWidth;
        if (w > 800) {
            window.onscroll = function () {
                scrollFunction()
            }


            function scrollFunction() {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    document.getElementById("brand").classList.remove("brand-normal");
                    document.getElementById("brand").classList.add("brand-small");
                    document.getElementByClassName("wrap").classList.add("wrap-small");
                    document.getElementByClassName("wrap").classList.add("wrap-small");

                    var effects = document.getElementsByClassName("effect-normal");
                    for (var i = 0; i < effects.length; i++) {
                        document.getElementsByClassName("effect-normal")[i].style.fontSize = "1px";
                    }

                } else {
                    document.getElementById("brand").classList.remove("brand-small");
                    document.getElementById("brand").classList.add("brand-normal");
                    document.getElementByClassName("wrap").classList.remove("wrap-small");

                    document.getElementByClassName("effect-small-on-scroll").classList.add("effect-normal");
                    document.getElementByClassName("effect-normal").classList.remove("effect-small-on-scroll");

                }
            }
        };
