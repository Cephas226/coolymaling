// app.js

const http = require('http');

const nodemailer = require('nodemailer');
const csv = require('csvtojson/v1');
const schedule = require('node-schedule');
const template = require('./template.js');


let app = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hello World!\n');
});

const account = {
    user: 'tremplindelapriere@plenitudesvie.com',
    pass: '#ToiET%Hv@ToiS+$.'
}
var transporter = nodemailer.createTransport({
    pool: true, 
    host: 'smtp.gmail.com', 
    port: 465,
    secure: true, 
    auth: {
         user: account.user,
         pass: account.pass
    }
});
var testfile = './TDXP.csv'; 
var prodfile = './TDXP-prod.csv'; 
var sendlist = []; 
var message_increment = 0; 

function trigger_sending(v){ 
        //  var emailbody = template.generate(v.first).toString();
         transporter.sendMail({
              from: 'Tremplin de la Prière TPV <tremplindelapriere@plenitudesvie.com>',
              to: v.Email,
              subject: 'Ton bilan des 3 premières semaines au tremplin de la prière',
              html: "Shalom "+ "<B>"+v.Prénoms_Nom+"</B>"+
              "<br>"+
              "Grâces soient rendues à DIEU qui nous fait toujours triompher en toutes choses et qui répand par nous l'odeur de sa"+
              "<br>"+ 
              "<br>Nous rendons grâces à DIEU pour votre participation au tremplin de la prière. "+ 
              "<br>Cela est pour vous même afin que vous puissiez avoir le bilan de votre participation. Ce bilan est quantitatif,"+
              "<br>pas qualitatif. "+
              "<br>La qualité de votre coeur devant DIEU, ne peut être mesurer que par DIEU à qui nous voulons plaire. Que devant Sa"+
              "<br>face, votre coeur soit tout entier au Seigneur. "+
              "<br>"+ 
               "<br>Voici le bilan des trois premières semaines, sauf erreur de notre part. Veuillez nous en le pardonner."+
               "<br>"+ 
               "<br>Semaine 1 : Origine de la prière "+
               "<br><B style='color:red'>Présence : "+v.Semaine1+" jour(s) /5</B>"+

               "<br>Semaine 2: Entrer dans Sa Présence"+
               "<br><B style='color:red'>Présence : "+v.Semaine2+" jour(s) /5</B>"+

               "<br>Semaine 3: La plus belle des prière"+
               "<br><B style='color:red'>Présence : "+v.Semaine3+" jour(s) /5</B>"+
               "<br>"+
               "<br><B>                    Ne vous relâchez pas, Persévérez!!! "+"</B>"+
               "<br><p>En cette quatrième semaine, nous prions afin que vous soyez fortifiés en la prière,"+ 
               "que vous soyez remplis de la révélation de la connaissance de Christ afin de vaquer à la prière.</p>"+
               "<br>Que le DIEU de paix soit avec vous. !"+
               "<br><B style='color:red'>Pour une communication plus rapide, nous vous demandons de nous donner votre numéro Whatsapp svp à l'adresse"+ 
               "<br>tremplindelapriere@plenitudesvie.com. </B>"+
               "<br>Demeurez sous sa bénédiction. "+
               "<br><B>Courage ! "+"</B>"+
               "<br>SHALOM"+
               "<br>"+
               "<br><B>Pasteur Arlette LUNGU"+"</B>",
         }, (error, info) => {
              if (error) {
                   return console.log(error);
              }
              console.log('Message sent: %s', info.messageId);
         });
    }
    function set_message_delays(){
        var message_job = schedule.scheduleJob('*/10 * * * * *', function(){
             trigger_sending(sendlist[message_increment]);
             if(message_increment < sendlist.length){
                  message_increment++;
             }
             if(message_increment >= sendlist.length){
                  message_job.cancel();
             }
       });
   }
   function get_list(){
    csv().fromFile(testfile)
    .on('json', (jsonObj) => {
         sendlist.push(jsonObj);
         console.log(jsonObj)
    })
    .on('done', () => {
        set_message_delays();
    })
}
transporter.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
         get_list();
    }
});
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');