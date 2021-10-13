const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")
const points = document.querySelector("input")
let num_points_in_circle = 0;
let num_points_total = 0;
class main {
    constructor() {
        this.cell_size = 1;
        this.canvas_width = Math.floor(canvas.width / this.cell_size);
        this.canvas_height = Math.floor(canvas.height / this.cell_size);
        this.points_position = [];


        this.getPointsPosition = () => {
            num_points_in_circle = 0;
            num_points_total = 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < parseInt(points.value, 10); i++) {
                var x = Math.random();
                var y = Math.random();
                var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2), 2)
                if (distance <= 1) {
                    num_points_in_circle++;
                    this.drawPoint(x * 299, y * 149, '#000000');
                } else {
                    this.drawPoint(x * 299, y * 149, '#836FFF');
                }
                num_points_total++;
            }
            var pi = 4 * num_points_in_circle / num_points_total
            document.getElementById('result').innerHTML = pi;
            console.log("O número de PI é: ", pi);
        };
        this.drawPoint = (x, y, color) => {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, this.cell_size, this.cell_size);
        }
    }

}