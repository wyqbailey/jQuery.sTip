jQuery.sTip
===========

a jQuery tip plugin,simple to use,very small(just 1Kb),Custom styles
一个小巧，简单的jquery提示插件

**$.sTip(msg,[classNmae,x,y,delay]);**  
    msg:message,string  
    className:set class on tip box,string,default succ  
    x:offset x,can be "left","right","center" or pixels,like "200px",default "center"  
    y:offset y,can be "top","bottom","center" or pixels,like "200px",default "top"  
    delay:tip show time,in second,number,default 3

**usage:**  
$.sTip("hello");  
$.sTip("world","error","right","bottom");  
$.sTip("warning","warn","center","center",10);  