class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    update(x, y) {
        this.x = x;
        this.y = y;
    }

    increment(ix, iy) {
        this.x += ix;
        this.y += iy;
    }

}