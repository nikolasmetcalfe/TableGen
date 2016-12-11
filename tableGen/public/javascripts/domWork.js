document.addEventListener("DOMContentLoaded", function(event)
{
  var button = document.getElementById("informationButton");
  button.addEventListener('click', toggleInfo);
  var clicked = document.getElementsByTagName("input");
});

function toggleInfo()
{
	var div = document.getElementById("hidden");
	if (div == undefined)
	{
		div = document.getElementById("visible");
	}
	
	if (div.id == 'hidden')
	{
		div.id = "visible";
	}
	else
		div.id = "hidden";
}
