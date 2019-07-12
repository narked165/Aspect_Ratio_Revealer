const AspectRatio = function() {
  let { width, height } = window.screen
  this.w = width
  this.h = height
  this.GCF = this.w * this.h
  return this
  }
  
AspectRatio.prototype.aspectY = function() {
    for(i=1; i<this.GCF; i++) {
        if (((this.w / this.h) * i) %1 === 0) { 
            return i 
        }
    } 
}

AspectRatio.prototype.aspectX = function(y) {
    return this.w / this.h * y
}


const getARY = function(){
    const _aspectRatio = new AspectRatio()
    let aspectY = _aspectRatio.aspectY()
    let aspectX = _aspectRatio.aspectX(aspectY) 
    document.getElementById('app-label').innerHTML=`Aspect Ratio   ${aspectX.toString()} : ${aspectY.toString()}` 
}

