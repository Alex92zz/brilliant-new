        var w = window.innerWidth;
        if (w > 800) {
            window.onscroll = function () {
                scrollFunction()
            }


            function scrollFunction() {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    document.getElementById("brand").style.height = "80px";
                    document.getElementById("brand-text").style.fontSize = "20px";
                } else {
                    document.getElementById("brand").style.height = "110px";
                    document.getElementById("brand-text").style.fontSize = "10px";
                }
            }
        };
