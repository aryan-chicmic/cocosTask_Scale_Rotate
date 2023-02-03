import { _decorator, Component, Node, Enum, Input, UITransform, Vec3, Vec2, view } from 'cc';
const { ccclass, property } = _decorator;
enum TRANS{
    NONE=0,
    SCALE=1,
    ROTATE=2
}

@ccclass('transform')
export class transform extends Component {
   @property({type: Enum(TRANS)})
   buttonType=TRANS.NONE


   @property(Node)
   myImage:Node=null

    start() {
      
    }
    onLoad(){
        this.node.on(Input.EventType.TOUCH_START,this.moveobj,this)
        this.node.on(Input.EventType.TOUCH_END,()=>{
            this.unschedule(this.move)
        })
    }

    moveobj(){
        this.schedule(this.move,0.1)
    }
    move(){
        switch(this.buttonType){
            case TRANS.SCALE:
                this.scale()
                break;
            case TRANS.ROTATE:
                this.rotate()
                break
            
        }
    }

    scale(){
    //     console.log("scale");
    //     this.myImage.setScale(2,2,0);
    //     var parent_height= this.myImage.parent.getComponent(UITransform).height
    //     var parent_width=this.myImage.parent.getComponent(UITransform).width
    //     var image_height=this.myImage.getComponent(UITransform).height
    //     var image_width=this.myImage.getComponent(UITransform).width
    //     this.myImage.setScale(0.5,0.5,0)
    //     console.log(this.myImage.getScale())
    //     if((this.myImage.position.y+image_height/2<parent_height) && (this.myImage.position.x+image_width/2<parent_width)){
      
    //         this.myImage.setScale(1.10,1.10,0);
            
    //     }
    //     else if(this.myImage.position.x+image_width/2<parent_width){
    //        this.myImage.setScale(new Vec3(1.10,1,0))
    //     }
    //     else if(this.myImage.position.y+image_height/2<parent_height){
    //         this.myImage.setScale(new Vec3(1,1.10,0))
    //     }
    //   else{
    //     console.log("Stop")
    //   }
    var parent_height= this.myImage.parent.getComponent(UITransform).height
    var parent_width=this.myImage.parent.getComponent(UITransform).width
    console.log(parent_height,parent_width)
    var h=this.myImage.getComponent(UITransform).getBoundingBox().height
var w=this.myImage.getComponent(UITransform).getBoundingBox().width
    // parent_height=100
    // view.setDesignResolutionSize(500,500,0)
    // console.log(parent_height,parent_width)
        var obj =new Vec3()
        if((parent_height>h)&&(parent_width>w)){

            obj=this.myImage.getScale()
            this.myImage.setScale(obj.x+0.25,obj.y+0.25)
        }
        

console.log(h,w)


    }
    rotate(){
     
            this.myImage.angle=this.myImage.angle+45
            console.log(this.myImage.angle)
  
        }
    
    update(deltaTime: number) {
        
    }
}

