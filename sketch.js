var Engine = Matter.Engine, 
     Bodies = Matter.Bodies,
     World = Matter.World,
     Constraint = Matter.Constraint,
     Composites = Matter.Composites,
     MouseConstraint = Matter.MouseConstraint,
     Mouse = Matter.Mouse,
     Composite = Matter.Composite;


var engine;
var pool_table;

function setup()
{
    createCanvas(600, 400);

    engine = Engine.create();

    pool_table_setup();
}

function draw()
{
    background();
    Engine.update(engine);

    // rendering pool table on screen
    drawVertices(pool_table.vertices);
}

function pool_table_setup()
{
    pool_table = Bodies.rectangle(50, 50, 500, 250, {isStatic: true});
    World.add(engine.world, [pool_table]);
}

function draw_pool_table()
{
    // rendering pool table on screen
    fill(0,255,0);
    stroke(5);
    drawVertices(pool_table.vertices);

}

function drawVertices(vertices)
{
    beginShape();
    for(var i = 0; i < vertices.length; i++)
    {
        vertex(vertices[i].x, vertices[i].y)
    }
    endShape();
}