class Tree{
    constructor(x,y,width,height){
var options={
    isStatic:true,
    restitution:0,
    friction:1
}
this.body=Body.rectangle(x,y,width,height,options);

World.add(world,this.body);
}

}