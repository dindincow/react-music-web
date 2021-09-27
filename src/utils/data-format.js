export function getCount(count){
    if(count > 10000){
        return Math.floor(count/10000) + "萬"
    }else{
        return count;
    }
}

export function getSizeImage(imgUrl, size) {
    return `${imgUrl}?param=${size}x${size}`;
  }
  