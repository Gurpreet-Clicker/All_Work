



var x=0
var y=0;

for(var i=1;i<=5;i++)
{
	x=x+1;
	setTimeout(function ab()
	{
           y=y+1;
           console.log(y);
           //delay(2000);
	},4000);
}
console.log(x);
console.log(y);


