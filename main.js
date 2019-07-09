function isRangeValid (start, end) {
    if(start<1||end<1||start>1000||end>1000){
        return false;
    }else{
        return true;
    }
}
function isStartLessThanEnd(start, end){
    return start<end;
}

function createMultiplicationTable(start,end,isStartLessThanEndCheck,isRangeValidCheck){
    if(!isStartLessThanEndCheck){
        return null;
    }
    if(!isRangeValidCheck){
        return 'input out of range';
    }
    var result='';
    for(var j=start;j<=end;j++){
        for(var i=start;i<=end;i++){
            if(i>j){
                result=result+'\n'
                break;
            }
            result=result+i+'*'+j+'='+i*j+" ";
        }
    }
    return result;
}
module.exports = {
    isRangeValid,
    isStartLessThanEnd,
    createMultiplicationTable
};
