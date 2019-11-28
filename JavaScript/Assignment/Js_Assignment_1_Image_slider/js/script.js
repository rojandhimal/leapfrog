var container = document.getElementById('container');
var wrapper = document.getElementById('wrapper');
var images = Array.from(wrapper.getElementsByTagName('img'));
var img_pos = document.getElementById('image_position');




var x;
images.forEach(function (image, index) {
    // console.log("image", image, "index", index)
    image.style.left = index * image.width + 'px';
    x=index;

    var list= document.createElement('li');
    console.log("list created",list);

    list.setAttribute('value',index);
    list.setAttribute('id',"img-li");
    list.setAttribute('onClick','');
    img_pos.appendChild(list);

    
});



// console.log("images number",x)

function nxt(images){
    var count = 0;
    setInterval(function(){
        images.forEach(function (image, index) {
        // console.log("image", image, "index", index)
        image.style.left = (index-count) * image.width + 'px';    
        image.style.transition = 'all 2s ease';    
        })
            // console.log("count before: ",count);
            count++;
            // console.log("count after: ",count);

            if(count>x){
                count=0;
            }
        
    },3000)

    }

nxt(images);
