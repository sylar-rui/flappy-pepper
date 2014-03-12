//id,标题框子元素[如"dd","dd/li"]，内容框子元素[如""dd","dt/li"]，事件（onmouseover/onclick）,默认显示第几条[-1表示在鼠标移出全部隐藏,仅在事件为onmouseover有效]
//注：标题框dd和内容框的dt是作为定位用的，必须不同。可以用<span>标记解决。
YK.SwitchShow=function(id,he,box,s,pr)
{
	var the=he.split('/');
	var tbox=box.split('/');
	var hes =$(id,the[0]);
	var boxs=$(id,tbox[0]);
	var ss  =(!s)?"onmouseover":s;
	var prs =(!pr)?0:pr;
	if(the.length>1)
	{
		hes =$(hes[0],the[1]);
		boxs=$(boxs[0],tbox[1]);
	}
	for(var i=0;i<hes.length;i++){hes[i].temp=i;}
	for(var i=0;i<hes.length;i++)
	{
		hes[i][ss]=function(){YK.ShowHide(hes,this.temp,boxs);}
		if(prs==-1 && ss=="onmouseover"){hes[i]["onmouseout"]=function(){YK.ShowHide(hes,-1,boxs);}}
	}
	YK.ShowHide(hes,prs,boxs);
}