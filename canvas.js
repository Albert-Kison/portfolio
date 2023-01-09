console.log("hello");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("load", function() {
    canvas.height = this.window.innerHeight;
    canvas.width = this.window.innerWidth;

    // let paint = false;

    // const draw = function(e) {
    //     if (!paint) return;

    //     ctx.lineWidth = 10;
    //     ctx.lineCap = 'butt'

    //     ctx.lineTo(e.clientX, e.clientY)
    //     ctx.stroke()
    //     ctx.beginPath()
    //     ctx.moveTo(e.clientX, e.clientY)
    // }

    // canvas.addEventListener('mouseup', function() {
    //     paint = false;
    //     ctx.beginPath();
    // });

    // canvas.addEventListener('mousedown', function(e) {
    //     paint = true;
    //     draw(e);
    // });

    // canvas.addEventListener('mousemove', draw);


    // rectWidth = 50;
    // rectHeight = 50;
    // let offsetY = -1
    // for (let i = 0; i < 400; i++) {
    //     const x = i % (Math.floor(canvas.width / rectWidth)) * rectWidth + rectWidth > canvas.width ? 0 : i % (Math.floor(canvas.width / rectWidth)) * rectWidth;
    //     const y = x === 0 ? ++offsetY * rectHeight : offsetY * rectHeight;
    //     // console.log(x, y);
    //     const r = Math.random() * 255;
    //     const g = Math.random() * 255;
    //     const b = Math.random() * 255;
    //     ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    //     ctx.fillRect(x, y, rectWidth, rectHeight);
    // }

    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.strokeStyle = 'blue';
            // ctx.fillStyle = 'green';
            ctx.fill();
            ctx.stroke(); 
        }

        this.update = function() {
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
    
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
    
            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }

    let circles = []
    for (let i = 0; i < 10; i++) {
        const radius = 30
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;;
        const dx = Math.random() -  0.5;
        const dy = Math.random() -  0.5;

        circles.push(new Circle(x, y, dx, dy, radius));
    }

    function animate() {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < circles.length; i++) {
            circles[i].update();
        }

        
    }

    animate();
});

window.addEventListener("resize", function() {
    canvas.height = this.window.innerHeight;
    canvas.width = this.window.innerWidth;
});