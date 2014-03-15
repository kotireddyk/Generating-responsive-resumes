function reverseString(str)
{
	var rows = [];
	for(var i = 0; i < arguments.length; i++) 
	{
		if(typeof arguments[i] !== 'string') 
			{
				console.log("not string");
			}
			else
			{
                rows.push(arguments[i]);
				console.log(rows[i].split("").reverse().join(" "));
			}
    }
}