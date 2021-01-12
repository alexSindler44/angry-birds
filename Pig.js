class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
  }
display(){
  console.log(this.body.speed);
  if (this.body.speed < 3) {
    super.display();
  }
    else{
       World.remove(world,this.body);
       push();
       this.visibility = this.visibility - 20;
       tint(255,this.visibility);
       image(this.image,this.body.position.x,this.body.position.y,50,50);
       pop(); 

    }
   
    
}
};
//1 byte = 8 bit
//0 -> 1 fully OFF byte (00000000)
//255 -> 1 fully ON byte (11111111)
