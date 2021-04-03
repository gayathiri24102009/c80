studentarray=[];
function submit()
{
    var displayarray=[];
    for(var j=1;j<=4;j++)
    {
        var studentname=document.getElementById("name_of_the_student_"+j).value;
        studentarray.push(studentname) ;
       }
       var lengthofarray=studentarray.length;
       for(var k=0;k<lengthofarray;k++)
       {
           displayarray.push("<h4>name-"+studentarray[k]+"</h4>");
       }
       document.getElementById("display_name_with_commas").innerHTML = displayarray;
var removecomma=displayarray.join(" ");document.getElementById("display_name_without_commas").innerHTML = removecomma;
document.getElementById("submit_button").style.display = "none"; document.getElementById("sort_button").style.display = "inline-block";

}
function sorting()
{
    studentarray.sort();
    var displaysort=[];
    var lengthofarray1=studentarray.length;
    for (var k = 0; k < lengthofarray1; k++)
     {displaysort.push("<h4>NAME - " + studentarray[k] + "</h4>"); }
       var remove_commas = displaysort.join(" ");
         document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}
