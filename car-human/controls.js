class Controls{
    constructor(type){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        switch(type){
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward=true;
                break;
        }
    }

    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
            }
        }
        document.ontouchstart=(event)=>{
            switch(event.target.id){
                case "left":
                    this.forward=true;
                    this.left=true;
                    break;
                case "right":
                    this.forward=true;
                    this.right=true;
                    break;
                case "forward":
                    this.forward=true;
                    break;
                case "reverse":
                    this.reverse=true;
                    break;  
            }
        }
        document.ontouchend=(event)=>{
            switch(event.target.id){
                case "left":
                    this.forward=false;
                    this.left=false;
                    break;
                case "right":
                    this.forward=false;
                    this.right=false;
                    break;
                case "forward":
                    this.reverse=false;
                    this.forward=true;
                    break;
                case "reverse":
                    this.forward=false;
                    this.reverse=true;
                    break;  
            }
        }
    }
}