//id,�������Ԫ��[��"dd","dd/li"]�����ݿ���Ԫ��[��""dd","dt/li"]���¼���onmouseover/onclick��,Ĭ����ʾ�ڼ���[-1��ʾ������Ƴ�ȫ������,�����¼�Ϊonmouseover��Ч]
//ע�������dd�����ݿ��dt����Ϊ��λ�õģ����벻ͬ��������<span>��ǽ����
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