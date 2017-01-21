


var myArray=["ram" ,"sham","mohan","shivam","sahil"];

var copyArray=[];
var c=0;
var calls=0;

             

                   for(var i=0;i<myArray.length;i++)
                       {
                       	var calls=calls+1;
                    (function(i)
                    {
                    	

                    setTimeout( function copy()
                     {

                            
                             
                      //var funExecuting=funExecuting+1;
	                 
                             //console.log(myArray[i]);
	                       copyArray[i]=myArray[i];
	                       //console.log(copyArray[i]);
                            c=c+1;
                            //console.log(c);

                      },0);
                         
                })(i);
            }


            console.log("#### Copy in progress. Please wait... ");
            console.log(calls);
            console.log(c);


   for(j=0;j<myArray.length;j++)
   {
   (function(j)
   {
	setTimeout(function cp(){
		console.log(copyArray[j]);
	} ,5000);
})(j);
}
