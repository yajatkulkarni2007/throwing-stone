class Mango{
    constructor(x,y,radius){
var options={
    isStatic:true,
    restitution:0,
    friction:1
}
this.body=Body.circle(x,y,radius,options);
this.body=Constraint.create();
World.add(world,this.body);
}

}