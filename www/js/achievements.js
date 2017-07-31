function createImage(id) {
     var x = document.createElement("img");
     x.setAttribute("src", "../img/1.jpg");
     x.setAttribute("height", "354");
     x.setAttribute("id","achievement"+id);
     if(achievement.indexOf(id) >= 0){
         x.setAttribute("src","../img/"+id+".jpg");
     }
     x.setAttribute("width", "230");
     x.setAttribute("alt", "unlock");
    
   var getImage=document.getElementById('achievements');
        getImage.addEventListener('click',function (e) {
           
          
            e.target.setAttribute("src","../img/2.jpg");
           var getImageId=e.target.id;
            console.log(e.target);
    
        });

    
    document.getElementById("achievements").appendChild(x);
}
var allachievement=[];
allachievement['king'] = 'king text';
allachievement['first poo'] = 'first poo text';
allachievement['king'] = 'king text';
allachievement['king'] = 'king text';
allachievement['king'] = 'king text';
allachievement['king'] = 'king text';
allachievement['king'] = 'king text';
allachievement['king'] = 'king text';
allachievement['king'] = 'king text';
allachievement['king'] = 'king text';
allachievement['king'] = 'king text';
var achievement=['king','first poo','night','feels like home','5',,'6','7','8','9','10','11','12','13','14','15'];

console.log("achievement array lengte: "+achievement.length);
for(var i=0;i<achievement.length;i++){
    createImage(i);
      
};
