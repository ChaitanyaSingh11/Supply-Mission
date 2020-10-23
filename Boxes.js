class Boxes {
    constructor(x, y, w, h) {
        var options = {
            restitution: 1,
            friction: 1
        };
        this.body = Bodies.rectangle(x, y, w, h);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
}