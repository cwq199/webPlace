class Mypromise{
    pengding = 'pending'
    resolved= 'resolve'
    rejected = 'rejected'
    constructor(exclutor){
        this.state = pengding
        this.value = undefined
        this.callbacks =new Array()

        function resolve(val){
            if(this.state = pengding){
                this.state = resolved
                while(this.callbacks.length>0){
                    const item = this.callbacks.shift()
                    exclutor(item)
                }
            }
       
        }

        function reject(err){
            if(this.state = pengding){
                this.state = rejected

            }
        }

    }
    then(){

    }
}