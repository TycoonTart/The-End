class Tree{
constructor(x,y,width,height){
var options={
    isStatic:true,
    restitution:0,
    friction:1,
    density:1.5
}
this.x=x
this.y=y
this.width=width
this.height=height
this.image=loadImage("tree.png")
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
World.add(world,this.body)
}
display(){
var pos=this.body.position
push()
translate(pos.x,pos.y)
imageMode(CENTER)
image(this.image,0,0,500,700);
pop()
}
}