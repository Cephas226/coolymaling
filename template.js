module.exports = {
    generate: function(name){
        return `
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
        
            "Shalom "+ "<B>"+v.Prénoms_Nom+"</B>"+
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
             "<br><B>Pasteur Arlette LUNGU"+"</B>"
    
            </html>
        `
    },
    generatePlainText: function(name){
      return `
          Hi ${name}!
          Here we have the plaintext version that will be sent along the HTML version for a fallback.
      `
    }
}