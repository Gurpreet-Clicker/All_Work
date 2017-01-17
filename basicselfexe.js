
/*for(i=1;i<3;i++)
{
	function ab(i)
	{
		console.log(i);
	}
}


ab(6);*/


/*var myFun=function ()
{
	console.log("hii");
	return;
}


var abc=function(cb)
{
	cb();
	cb=null;
	return;
}*/

/*var c=0;

function myFun()
{

	c=c+1;
	console.log("hii" ,c);
	return;
}


var abc=function(cb)
{
	cb();
	&cb=null;
	//console.log(c);
	return;
}


abc(myFun);

myFun();*/



var f=2;
{
var f=function()
{
	console.log("hui");
}
}


console.log(typeof(f));

f();

