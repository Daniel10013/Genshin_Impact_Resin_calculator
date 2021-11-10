/*
 * That Javascript part is the responsible to change the theme of the site
 */

function theme()
{
    var select = document.getElementById("selection");
    var char = select.options[select.selectedIndex].value;

    if(char == "sayu")
    {
        document.getElementById("css").href="css/sayu.css";
        console.log(char);

        //chages the images on the site
        var char_nav = document.getElementById("char_nav");
        char_nav.setAttribute('src', 'css/img/sayu/sayuicon.png')
        
        var char_pic1 = document.getElementById("char_pic1");
        char_pic1.setAttribute('src', 'css/img/sayu/sayuimg1.png')
        
        var char_pic2 = document.getElementById("char_pic2");
        char_pic2.setAttribute('src', 'css/img/sayu/sayuimg2.png')
    }
    else if(char == "klee")
    {
        //changes the css
        document.getElementById("css").href="css/klee.css";

        //chages the images on the site
        var char_nav = document.getElementById("char_nav");
        char_nav.setAttribute('src', 'css/img/klee/kleeicon.png')

        var char_pic1 = document.getElementById("char_pic1");
        char_pic1.setAttribute('src', 'css/img/klee/kleeimg1.png')

        var char_pic2 = document.getElementById("char_pic2");
        char_pic2.setAttribute('src', 'css/img/klee/kleeimg2.png')
    }
    else if(char == "fischl")
    {
        //changes the css
        document.getElementById("css").href="css/fischl.css";

        //chages the images on the site
        var char_nav = document.getElementById("char_nav");
        char_nav.setAttribute('src', 'css/img/fischl/fischlicon.png')
        
        var char_pic1 = document.getElementById("char_pic1");
        char_pic1.setAttribute('src', 'css/img/fischl/fischlimg1.png')
        
        var char_pic2 = document.getElementById("char_pic2");
        char_pic2.setAttribute('src', 'css/img/fischl/fischlimg2.png')

    }
    else if(char == "keqing")
    {
        //changes the css
        document.getElementById("css").href="css/keqing.css";

        //chages the images on the site
        var char_nav = document.getElementById("char_nav");
        char_nav.setAttribute('src', 'css/img/keqing/keqingicon.png')
                
        var char_pic1 = document.getElementById("char_pic1");
        char_pic1.setAttribute('src', 'css/img/keqing/keqingimg1.png')
                
        var char_pic2 = document.getElementById("char_pic2");
        char_pic2.setAttribute('src', 'css/img/keqing/keqingimg2.png')
    }
    else if(char == "kokomi")
    {
        //changes the css
        document.getElementById("css").href="css/kokomi.css";

        //chages the images on the site
        var char_nav = document.getElementById("char_nav");
        char_nav.setAttribute('src', 'css/img/kokomi/kokomiicon.png')
                        
        var char_pic1 = document.getElementById("char_pic1");
        char_pic1.setAttribute('src', 'css/img/kokomi/kokomiimg1.png')
                        
        var char_pic2 = document.getElementById("char_pic2");
        char_pic2.setAttribute('src', 'css/img/kokomi/kokomiimg2.png')
    }
    else if(char == "yoimiya")
    {
        //changes the css
        document.getElementById("css").href="css/yoimiya.css";

        //chages the images on the site
        var char_nav = document.getElementById("char_nav");
        char_nav.setAttribute('src', 'css/img/yoimiya/yoimiyaicon.png')
                                
        var char_pic1 = document.getElementById("char_pic1");
        char_pic1.setAttribute('src', 'css/img/yoimiya/yoimiyaimg1.png')
                                
        var char_pic2 = document.getElementById("char_pic2");
        char_pic2.setAttribute('src', 'css/img/yoimiya/yoimiyaimg2.png')
    }

}