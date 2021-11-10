/*
 * -----------------------------THIS CODE IS FREE TO BE MODIFIED IN ANY WAY THE AUTHOR WISHES-------------------------------------
 * Genshin resin calculator by: Daniel Filipe
 * 
 * That code works as a resin calculator using an algorithm based in the actual time 
 * and in the actual resin quantity of the user
 * 
 * The codes get the resin quantity of the user and do one account to know the time 
 * that will be required for that resin to stack and based on that account result
 * the code does another account to know when that resin will be stacked and shows 
 * to the user the time of the day that the resin will stacks
 */


/***********************************************************/
//function that rounds the hours number to 2 decimals
function round(num) 
{
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
/***********************************************************/

/*********************************************************************************************************************************/
                            /* function that prints the information on the screen*/
/*********************************************************************************************************************************/
function print_info()
{
    
    var resin = document.getElementById("resin").value;
    var gtime = get_time(resin);

    //gets the Date class
    var date = new Date()

    //get the atual time
    var at_hour = date.getHours(); 
    var at_min = date.getMinutes(); 
    
    //verify if the resin value is valid
    if(resin % 1 != 0)
    {        
        document.getElementById("message").innerHTML = "Enter a valid resin value!";
        document.getElementById("time_stack").innerHTML = "";
        document.getElementById("actual_time").innerHTML = "";
        document.getElementById("time_when_stack").innerHTML = "";
    }
    else
    {   
        //another value verification   
        if(resin > 160 || resin < 0 || !resin)
        {
            document.getElementById("message").innerHTML = "Enter a valid resin value!";
            document.getElementById("time_stack").innerHTML = "";
            document.getElementById("actual_time").innerHTML = "";
            document.getElementById("time_when_stack").innerHTML = "";
        }
        //let the code runs
        else
        {   
            var t_stack = time_pass();

            document.getElementById("message").innerHTML = "";

            if(resin == 160)
            {
                document.getElementById("message").innerHTML = "";
                document.getElementById("time_stack").innerHTML = "Your resin is alrady stacked, run and do one condensed!";            
                document.getElementById("actual_time").innerHTML = "";
                document.getElementById("time_when_stack").innerHTML = "";
            }
            else
            {
                //prints the time to stack the resin
                document.getElementById("time_stack").innerHTML = "The resin will stack in " + gtime.hours +" hours and "
                + gtime.minutes+ " minutes";
                //print the actual time
                document.getElementById("actual_time").innerHTML = "Now are " + at_hour + " hours and " + at_min + " minutes";

                //defines how the time will be impressed on the screen
                if(t_stack.hours < 10 && t_stack.minutes < 10)
                {
                    document.getElementById("time_when_stack").innerHTML = "When your resin stacks will be 0"+ 
                    t_stack.hours +":0"+ t_stack.minutes;
                }
                else if(t_stack.hours < 10)
                {
                    document.getElementById("time_when_stack").innerHTML = "When your resin stacks will be 0"+ 
                    t_stack.hours +":"+ t_stack.minutes;
                }
                else if(t_stack.minutes < 10)
                {
                    document.getElementById("time_when_stack").innerHTML = "When your resin stacks will be "+ 
                    t_stack.hours +":0"+ t_stack.minutes;
                }
                else
                {
                    document.getElementById("time_when_stack").innerHTML = "When your resin stacks will be "+ 
                    t_stack.hours +":"+ t_stack.minutes;
                }
            }
        }
    }

    /*********************************************************************************************************************************/


    /*********************************************************************************************************************************/
                                    /* essential functions for the algorithm works */
    /*********************************************************************************************************************************/

                                                /* RESIN COUNT FUNCTION */

    /***********************************************************/
    //function that defines the missing time to stack the resin\\
    function get_time(resin)
    {
        //finds value to be used for calculate the minutes
        var miss_resin = 160 - resin;
        var hinm = miss_resin * 8;
        var h = hinm / 60;
        var hFormat = Math.trunc(h);
        /*************************************************/

        //calculate the minutes
        var mc = h - hFormat;
        var mins = mc * 60;
        /*************************************************/

        return {hours: hFormat, minutes: round(mins)};
        
    }
    /***********************************************************/

    /*********************************************************************************************************************************/

                                                /* TIME COUNT FUNCTION */
    

    //function to count the hours and minutes when the resin will be stacked
    function time_pass()
    {    
        //variables to be used in the function
        var tm_count = date.getHours() + gtime.hours;
        var tm_pass = 0;
        var tm_stack = 0;

        /* 
         * That part here, verify if the time that will pass plus the actual time
         * have a value bigger than 24, this verify is required because without this
         * the calculations may end in negative number
         * 
         * 1 - The first verification
         * - The first verification see if the sum of of numbers is less than 24
         * - If true the hour number is defined by -> actual time + hours to pass
         * 
         * 2 - The second verification
         * - The second one see if the sum of of numbers is equal to 24
         * - If true replace the 24 to 0, so in the print parte the time looks like 00:00
         * 
         * 3 - The third verification
         * - The third verification just let the code run if none of the two verification above are true
         */
        /*-1-*/
        if(tm_count < 24)
        {
            
            tm_stack = tm_count;

        }
        /*-2-*/
        else if(tm_count == 24)
        {
            tm_stack = 0;
        }
        /*-3-*/
        else
        {
            tm_pass = 24 - date.getHours();            
            tm_stack = gtime.hours - tm_pass;
        }

        /* 
         * The minutes part is more simpple
         * The code just sum the actual minutes value with the minutes that are going pass
         * If that sum was equal or bigger than 60, are subtracted 60 from the minutes number -
         * - and one is added to the hours variable
         */
        var min = date.getMinutes() + gtime.minutes;
        //adjusts the minutes and hours
        if(min >= 60)
        {
            min = min - 60;
            tm_stack = tm_stack + 1;
        }

        //returns an object with the hours and minutes
        return {hours: tm_stack, minutes: min};
    }
}

