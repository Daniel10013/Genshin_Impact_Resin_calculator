//gets a random number
function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function load_theme()
{
    var qnt = 0;
    
    theme();
}
/*
 * That Javascript part is the responsible to change the theme of the site
 */

var qnt = 0;

function theme()
{
    //generates a random theme on the site load
    var number;
    if(qnt == 0)
    {
        var number = getRandomInt(0,6);
    }
    else
    {
        number = -1;
    }

    var select = document.getElementById("selection");
    
    var char = select.options[select.selectedIndex].value;

    if(char == "sayu" || number == 1)
    {
        document.getElementById("css").href="css/sayu.css";

        //chages the images on the site
        var char_nav = document.getElementById("char_nav");
        char_nav.setAttribute('src', 'css/img/sayu/sayuicon.png')
        
        var char_pic1 = document.getElementById("char_pic1");
        char_pic1.setAttribute('src', 'css/img/sayu/sayuimg1.png')
        
        var char_pic2 = document.getElementById("char_pic2");
        char_pic2.setAttribute('src', 'css/img/sayu/sayuimg2.png')
        
        qnt++;
    }
    else if(char == "klee" || number == 2)
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
        
        qnt++;
    }
    else if(char == "fischl"|| number == 3)
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
        
        qnt++;

    }
    else if(char == "keqing"|| number == 4)
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
        
        qnt++;
    }
    else if(char == "kokomi"|| number == 5)
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
        
        qnt++;
    }
    else if(char == "yoimiya"|| number == 6)
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
        
        qnt++;
    }

}