
    if (class == "arts" ) {
   console.log("English", "Mathematics","Government", "Economics", "Literature", "History" );
    }
else {
  console.log("English", "Mathematics");
}


  {
	let pwr = 0;
    let num = 20
	for (let index = num; index >= 1; index--)
		{
		// If index is a power of 2
		if ((index & (index - 1)) == 0)
			{
				pwr = index;
				break;
			}
		}
	console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");
}
