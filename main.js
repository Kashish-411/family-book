var images=["https://i.pinimg.com/originals/f1/81/c0/f181c0fc8387146d3ab00411378b767b.jpg",
"http://3.bp.blogspot.com/_3fxFsPYarZg/TTwdPqAMo8I/AAAAAAAAAEI/BUzd0LR1YwE/s1600/Crayon_Shinchan-0+-+Copy+%25283%2529.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ghXULmt8au8qlCdasrzQeolCQ_Wpgwye6U8O6ZWOYGiDmimH5-244DEaK_RvGY-jKVY&usqp=CAU"];
var names=["Himawari","Harry","Mixie"];
var i=0;
function update(){
    i++;
    var number_of_family_members_in_array=3;
    if (i>number_of_family_members_in_array){
        i=0;

    }
    var updatedImage=images[i];
    var updatedName=names[i];
    document.getElementById("family_member_image").src=updatedImage;
    document.getElementById("family_member_name").innerHTML=updatedName;
}