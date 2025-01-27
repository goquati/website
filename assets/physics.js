function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('canvas-container');
    const wall = document.getElementById('physics-wall').getBoundingClientRect();
    const pos = container.getBoundingClientRect();

    const Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Events = Matter.Events,
        World = Matter.World;

    const engine = Engine.create();
    const world = engine.world;

    const runner = Runner.create();
    Runner.run(runner, engine);


    const bodies = document.getElementsByClassName('physics-body');
    const boxes = []
    const boxToEl = []
    Array.from(bodies).forEach(el => {
        const rect = el.getBoundingClientRect();
        const randomX = getRandomInt(0, 800);
        const box = Bodies.rectangle(randomX, rect.top + rect.height / 2, rect.width, rect.height, {
            restitution: 0.8, // makes it bouncy
            friction: 0.3
        });
        boxes.push(box);
        boxToEl.push({element: el, box: box});
    })
    Composite.add(world, boxes);


    const leftWall = Bodies.rectangle(0, (pos.height / 2), 10, pos.height, {isStatic: true});
    const ceiling = Bodies.rectangle((pos.width / 2), 0, pos.width, 10, {isStatic: true});
    const floor = Bodies.rectangle((pos.width / 2), pos.height, pos.width, 20, {isStatic: true});
    const rightWall = Bodies.rectangle(pos.width, (pos.height / 2), 10, pos.height, {isStatic: true});
    const textBox = Bodies.rectangle(((wall.width / 2) + (wall.x / 2)), (wall.height / 2) + (wall.y - 80), wall.width, wall.height + 80, {isStatic: true});
    World.add(world, [floor, ceiling, leftWall, rightWall, textBox]);

    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            render: {visible: true}
        }
    });
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
    World.add(world, mouseConstraint);

    Events.on(engine, 'afterUpdate', () => {
        boxToEl.forEach(item => {
            const itemPos = item.element.getBoundingClientRect()
            item.element.style.left = (item.box.position.x - itemPos.width / 2) + 'px';
            item.element.style.top = (item.box.position.y - itemPos.height / 2) + 'px';
            item.element.style.transform = `rotate(${item.box.angle}rad)`
        })
    });


    /*
    const render = Render.create({
        element: container,
        engine: engine,
        options: {
            width: pos.width,
            height: pos.height,
            wireframes: true // Disable wireframes to see colors
        }
    });
    Render.run(render);
     */
});

