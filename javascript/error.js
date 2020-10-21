function num(val){
	if(isNaN(val)){
		throw  new Error('抛出错误')
	}
}


var e = new Error('aaa');
console.dir(e);


function check(value)
{
    if(["apple", "banana", "carrot"].includes(value) === false)
    {
    	console.info(new RangeError('The argument must be an "apple", "banana", or "carrot".'))
        throw new RangeError('The argument must be an "apple", "banana", or "carrot".')
    }
}

try
{
		check("cabbage")
}
catch(error)
{
    if(error instanceof RangeError)
    {
        // Handle the error
    }
}

// 