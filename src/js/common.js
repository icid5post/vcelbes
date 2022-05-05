(function () {
    setTimeout(() => {
        document.documentElement.classList.add('is-ready');
    },300)

    var dots = [],
        mouse = {
            x: 0,
            y: 0
        };


    var Dot = function(i) {
        this.x = 0;
        this.y = 0;
        this.node = (function(){
            var n = document.createElement("div");
            n.className = "trail";
            document.getElementById("bg").appendChild(n);
            n.style.animationDelay = i*.1 +"s";
            n.style.height =100+60* Math.pow(.9,i) +"px";
            n.style.width =100+ 60* Math.pow(.9,i) +"px";
            n.style.borderRadius =220+ 60* Math.pow(.9,i)/2 +"px";
            n.style.margin =-100 -60* Math.pow(.9,i)/2 + "px";

            return n;
        }());
    };

    Dot.prototype.draw = function() {
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
    };


    for (var i = 0; i < 64; i++) {
        var d = new Dot(i);
        dots.push(d);
    }

    function draw() {
        var x = mouse.x,
            y = mouse.y;
        dots.forEach(function(dot, index, dots) {
            var nextDot = dots[index + 1] || dots[0];

            dot.x = x;
            dot.y = y;
            dot.draw();
            x += (nextDot.x - dot.x) * .65;
            y += (nextDot.y - dot.y) * .65;

        });
    }

    addEventListener("mousemove", function(event) {
        mouse.x = event.pageX;
        mouse.y = event.pageY;
    });

    function animate() {
        draw();
        requestAnimationFrame(animate);
    }

    animate();
})();

(function () {

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

})();

(function (){
    const swiper = new Swiper('.swiper', {

        loop: true,
        //direction: "vertical",
        grabCursor: true,
        speed: 1000,
        // paginationClickable: true,
        parallax: true,
        autoplay: false,
        effect: "slide",
        mousewheel: true,
        mousewheelControl: 1
    });
})();
