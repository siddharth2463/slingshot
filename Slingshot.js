class Slingshot{
    constructor(body1,point2){
        var options = {
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.05
        }
        this.pointB=point2;
        this.chain=Constraint.create(options);
        World.add(world,this.chain)

    }
    fly(){
        this.chain.bodyA=null;
    }
    display(){
        if(this.chain.bodyA){
            stroke("gold")
            strokeWeight(4)
            var pointA=this.chain.bodyA.position 
            var pointB=this.pointB
            line(pointA.x,pointA.y,pointB.x,pointB.y)  
        }
        
    }
    
}