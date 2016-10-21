const request = require("tinyreq");
const cheerio =require("cheerio");



//http://www.cricbuzz.com/live-cricket-scores/16386/rsaw-vs-nzw-5th-odi-new-zealand-women-tour-of-south-africa-2016
request("http://www.cricbuzz.com/live-cricket-scores/16617/wiw-vs-engw-5th-odi-england-women-tour-of-west-indies-2016", function (err, body) {
    //console.log(err || body); // Print out the HTML
   var $ = cheerio.load(body);
 var title, release, rating;
   


$('.cb-scrs-wrp').filter(function(){

      

                var data = $(this);

             // console.log(data['0'].children[0].next.children[0].data);
              title=data['0'].children[0].next.children[0].data;
               //  console.log(title);          
            })







 $('.cb-min-bat-rw').filter(function(){

          

                var data = $(this);

              //console.log(data['0'].children[0].next.children[0].data);
          title+=data['0'].children[0].next.children[0].data
                //console.log(title);

            })



 $('.cb-text-inprogress').filter(function(){

           // Let's store the data we filter into a variable so we can easily see what's going on.

                var data = $(this);

              //console.log(data['0'].children[0].data);
               title+=data['0'].children[0].data;
//console.log(data['0'].children[0].children[0].data);
            // In examining the DOM we notice that the title rests within the first child element of the header tag. 
           // Utilizing jQuery we can easily navigate and get the text by writing the following code:
                  
             //   title = data['0'].children[0].children[0].data;
                // console.log(title); 
           // Once we have our title, we'll store it to the our json object.

           console.log(title);


            })

var accountSid = 'URACCOUNDTSID';
var authToken = 'URAUTHTOKEN';
var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);
client.messages.create({
    body: title,
    to: '+919035845336',
    from: '+18565284613 '

}, function(err, message) {
    console.log(message.sid);}
    );

});





