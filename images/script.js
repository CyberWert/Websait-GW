if(document.images)
{
bbutton01=new Image(); 
bbutton01.src="images/favorits-icon-1.gif"; 
hbutton01=new Image(); 
hbutton01.src="images/favorits-icon-2.gif";

bbutton02=new Image(); 
bbutton02.src="images/start-icon-1.gif"; 
hbutton02=new Image(); 
hbutton02.src="images/start-icon-2.gif";

bbutton03=new Image(); 
bbutton03.src="images/mail-icon-1.gif"; 
hbutton03=new Image(); 
hbutton03.src="images/mail-icon-2.gif";

var page_activated='';
};

function RollOver(in_Object, in_Image)
{
	if (document.images)	{
	if (page_activated!=in_Object) document.images[in_Object].src = eval(in_Image + in_Object + ".src");
				};
}

function RollOver1(in_Object, in_Image)
{
	if (document.images)	{
	if (page_activated!=in_Object) document.images[in_Object].src = eval(in_Image + in_Object + ".src");
				};
}

function clickHandler() {
  var targetId, srcElement, targetElement;
  srcElement = window.event.srcElement;
  if (srcElement.className == "Outline") {
     targetId = srcElement.id + "details";
     targetElement = document.all(targetId);
     if (targetElement.style.display == "none") {
        targetElement.style.display = "";
     } else {
        targetElement.style.display = "none";
     }
  }
}

document.onclick = clickHandler;

function Show(name)
{
	
	var i;
	var current_div;

	for(i=1;i<=4;i++)
	{
		current_div="div"+i;
		if(document.all[current_div].style.display=="block" )
		{
			document.all[current_div].style.display="none";
		}
	}
	
	document.all[name].style.display="block";
}

function Hide(name)
{
	
	document.all[name].style.display="none";
}




function OpenChat()
{
new Object(                                                                                         );	
}
