

 //date

  var date=[["01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26 , 27, 28, 29, 30, 31],["01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12]];


//remplissage du select jour avec l'objet Date
 var datePardefaut = new Date();


// jour par defaut
 document.querySelector("select").innerHTML = "<option>"+  datePardefaut.getDate() + "</option>";


for( var i = 0; i < date[0].length ; i++){
        document.querySelector("select").innerHTML += "<option>"+ date[0][i] + "</option>";
      
  }


  //remplissage du select mois  

//   mois par defaut
var mois=datePardefaut.getMonth() +1;
 document.getElementById("mois").innerHTML = "<option>"+ mois + "</option>";


  for( var i = 0; i < date[1].length ; i++){
       document.getElementById("mois").innerHTML += "<option>"+ date[1][i] + "</option>";

}

//remplissage du select année
 var anneeReferenceSup ;
 var anneeReferenceInf;

//  année par defaut
 document.getElementById("annee").innerHTML = "<option>"+ datePardefaut.getFullYear() +"</option>";


for(var i=100 ; i>0; i--)
{
      anneeReferenceInf=datePardefaut.getFullYear()-i;
     
        document.getElementById("annee").innerHTML += "<option>"+ anneeReferenceInf+ "</option>";

 }


 for(var i=0 ; i<100; i++)
 {
       anneeReferenceSup= datePardefaut.getFullYear()+i ;
      
      document.getElementById("annee").innerHTML += "<option>"+ anneeReferenceSup+ "</option>";

     }

//partie sur les coordonnées des clients figurant dans la liste deroulant
 var  Client = function(nomS,nom,rue,adresse,telephone){
            this.nomS=nomS;
            this.nom= nom;
            this.rue=rue;
            this.adresse=adresse;
            this.telephone=telephone;
      }


var client1 = new Client("Savon","alain","1 rue des bois"," 75500,Paris ","03 02 06 08 07");

var client2 = new Client("Purée","yvette","8 rue des ferrites","95400, cergy","03 02 06 08 10");

var client3 = new Client("Patate","alfred","8 rue des cormeille","78700, Poissy ","03 02 06 08 10");
var clientN = new Client("Nouveau client","","","","");

var tab = [clientN,client1,client2,client3];

// remplissage de la liste deroulante  des clients sur la partie destinataire et expediteur

for(var i = 0; i< tab.length; i++)
{
      document.getElementById("nomClientD").innerHTML+='<Option value="'+tab[i].nomS+'">'+tab[i].nomS+ "</Option>";
      document.getElementById("nomClientE").innerHTML+="<Option>"+tab[i].nomS+ "</Option>";

}

// remplit les champs au clic sur l'option à gauche
function   remplissage (x){

      for(var i=0;i<tab.length;i++){

            if(x==tab[i].nomS){
                  document.getElementById("nsociete").setAttribute("value",tab[i].nomS);
                  document.getElementById("client").setAttribute("value",tab[i].nom);
                  document.getElementById("rue").setAttribute("value",tab[i].rue);
                   document.getElementById("ville").setAttribute("value",tab[i].adresse);
                    document.getElementById("telephone").setAttribute("value",tab[i].telephone);
                    break;
            }
      }

}

// remplit les champs au clic sur l'option à droite
function   remplissage1 (x){
      for(var i=0;i<tab.length;i++){

            if(x==tab[i].nomS){
                  document.getElementById("nsocieteE").setAttribute("value",tab[i].nomS);
                  document.getElementById("clientE").setAttribute("value",tab[i].nom);
                  document.getElementById("rueE").setAttribute("value",tab[i].rue);
                   document.getElementById("villeE").setAttribute("value",tab[i].adresse);
                    document.getElementById("telephoneE").setAttribute("value",tab[i].telephone);
                    break;
            }
      }

}

// reinitialise les champs au clic sur nouveau client

   document.getElementById("nomClientD").addEventListener("change",function(){
               
           
      var j =document.getElementById("nomClientD").value;

      remplissage(j);
            
  } );
    
    
document.getElementById("nomClientE").addEventListener("change",function(){
               
           
      var j =document.getElementById("nomClientE").value;

      remplissage1(j);
            
} ); 
   
       
       //partie sur les produits

      
             
     var Produit = function(codepdt,libelle,prixU)
     {
      
          this.codepdt=codepdt;

         this.libelle=libelle;

             this.prixU=prixU;
        }

      // creation de mes produits

      var produit1 = new Produit("0000","batavia",19.5);
    var produit2= new Produit ("1111","mac",85);

      var produit3 = new Produit("2222","romaine",122);
     
       var tabpdt=[produit1,produit2,produit3];

       // remplissage de mes select 

         var code1=document.getElementById("codepdt1");

         var code2=document.getElementById("codepdt2");

         var code3=document.getElementById("codepdt3");

        var code4=document.getElementById("codepdt4");

        code1.innerHTML+= '<option value=""></option>';
          code2.innerHTML+= '<option value=""></option>';
           code3.innerHTML+= '<option value=""></option>';
            code4.innerHTML+= '<option value=""></option>';
        


       for(var i=0;i<tabpdt.length;i++){
                        
          code1.innerHTML+= '<option value="'+ tabpdt[i].codepdt+'">'+tabpdt[i].codepdt+"</option>";
          code2.innerHTML+= '<option value="'+tabpdt[i].codepdt+ '">'+tabpdt[i].codepdt+"</option>";
           code3.innerHTML+= '<option value="'+tabpdt[i].codepdt+'">'+tabpdt[i].codepdt+"</option>";
            code4.innerHTML+= '<option value="'+tabpdt[i].codepdt+'">'+tabpdt[i].codepdt+"</option>";
          }

    
      // remplissage automatique libelle et prix unitaire
          function remplir(x)
          {

                  if(x=="")
                        {
                              document.getElementById("lib1").innerHTML="";
                              document.getElementById("prix1").innerHTML="";
                        }
                        else
                        {
                              for(var i=0; i<tabpdt.length;i++){
                                    if(x==tabpdt[i].codepdt){
                                    document.getElementById("lib1").innerHTML=tabpdt[i].libelle;
                                    document.getElementById("prix1").innerHTML=tabpdt[i].prixU; 
                                    break;
                                    }
                                    
                  
                        }

                        }
          
            }

      function remplir1(x)
      {

           if(x=="")
            {
                  document.getElementById("lib2").innerHTML="";
                  document.getElementById("prix2").innerHTML="";
            }
            else
            {

                  for(var i=0; i<tabpdt.length;i++){
                        if(x==tabpdt[i].codepdt){
                             document.getElementById("lib2").innerHTML=tabpdt[i].libelle;
                             document.getElementById("prix2").innerHTML=tabpdt[i].prixU; 
                        }
                       
                }
            }
           
      }

      function remplir2(x)
      {
            for(var i=0; i<tabpdt.length;i++){
                  if(x==tabpdt[i].codepdt){
                       document.getElementById("lib3").innerHTML=tabpdt[i].libelle;
                       document.getElementById("prix3").innerHTML=tabpdt[i].prixU; 
                  }
                  else if(x=="")
                  {
                        document.getElementById("lib3").innerHTML="";
                        document.getElementById("prix3").innerHTML="";
                  }
          }
      }

      function remplir3(x)
      {
          if(x=="")
            {
                  document.getElementById("lib4").innerHTML="";
                  document.getElementById("prix4").innerHTML="";
            }
            else
            {

                  for(var i=0; i<tabpdt.length;i++){
                        if(x==tabpdt[i].codepdt){
                             document.getElementById("lib4").innerHTML=tabpdt[i].libelle;
                             document.getElementById("prix4").innerHTML=tabpdt[i].prixU; 
                        }
                       
                }
            }
           
      }


      //   produits de premiere ligne
   
      document.getElementById("codepdt1").addEventListener("change",function(){

              var j =  document.getElementById("codepdt1").value;
                
               remplir(j);
                  
      });
    
   

      //  produits de la ligne 2

      document.getElementById("codepdt2").addEventListener("change",function(){

            var j =  document.getElementById("codepdt2").value;
              
             remplir1(j);
                
       });
  
     

      //  produits ligne 3

      document.getElementById("codepdt3").addEventListener("change",function(){

            var j =  document.getElementById("codepdt3").value;
              
             remplir2(j);
                
       });
  

      //  produits ligne 4

      
      document.getElementById("codepdt4").addEventListener("change",function(){

            var j =  document.getElementById("codepdt4").value;
              
             remplir3(j);
                
       });
      
   
      
// affichage montant ,tva,frais de port et montant ttc

// fonction qui calcule la tva
//    les frais de ports et manutention est 5% du montant d'achat ttc

function calcultva(x){
      return x*0.2;
}

// initialisation des champs montant 0
document.getElementById("prixht").innerHTML=0.00;
document.getElementById("prixht1").innerHTML=0.00;
document.getElementById("prixht2").innerHTML=0.00;
document.getElementById("prixht3").innerHTML=0.00;
document.getElementById("stotal").innerHTML=0.00;
document.getElementById("tva").innerHTML=0.00;
document.getElementById("port").innerHTML=0.00;
document.getElementById("prixttc").innerHTML=0.00;




document.getElementById("quantite").addEventListener("keyup",function(){
     var i=document.getElementById("quantite").value;
     var j=document.getElementById("prix1").innerHTML;

            document.getElementById("prixht").innerHTML= i*j;
           
         document.getElementById("stotal").innerHTML=parseFloat(document.getElementById("prixht").innerHTML)+
         parseFloat(document.getElementById("prixht1").innerHTML)+
        parseFloat(document.getElementById("prixht2").innerHTML)+parseFloat(document.getElementById("prixht3").innerHTML);
        

         document.getElementById("tva").innerHTML=calcultva( document.getElementById("stotal").innerHTML).toFixed(2);
        

         document.getElementById("port").innerHTML=  document.getElementById("stotal").innerHTML*5/100;

         document.getElementById("prixttc").innerHTML=
         parseFloat(document.getElementById("stotal").innerHTML)+parseFloat( document.getElementById("tva").innerHTML)+parseFloat(document.getElementById("port").innerHTML);
     
         var bonus= parseFloat( document.getElementById("prixttc").innerHTML);

         if(bonus<=1000){
               document.getElementById("remise").style.display="none";
         
         }else{
               
            document.getElementById("remise").style.display="block";
               document.querySelector("#remise span").innerHTML= (bonus*5/100).toFixed(2);
         }


         document.querySelector("#cheque span").innerHTML=document.querySelectorAll(".identite input")[0].value;

       document.querySelectorAll("#contact span")[0].innerHTML=document.querySelectorAll(".identite input")[2].value;

       document.querySelectorAll("#contact span")[1].innerHTML=document.querySelectorAll(".identite input")[3].value;
 
          
           
});



 document.getElementById("quantite1").addEventListener("keyup",function (){
       var i=document.getElementById("quantite1").value;
      var j=document.getElementById("prix2").innerHTML;
      
            document.getElementById("prixht1").innerHTML=  i*j;
     
            
         document.getElementById("stotal").innerHTML=parseFloat(document.getElementById("prixht").innerHTML)+
         parseFloat(document.getElementById("prixht1").innerHTML)+
        parseFloat(document.getElementById("prixht2").innerHTML)+parseFloat(document.getElementById("prixht3").innerHTML);
        

            document.getElementById("tva").innerHTML=calcultva( document.getElementById("stotal").innerHTML).toFixed(2);
           
   
            document.getElementById("port").innerHTML=  document.getElementById("stotal").innerHTML*5/100;
   
            document.getElementById("prixttc").innerHTML=
            parseFloat(document.getElementById("stotal").innerHTML)+parseFloat( document.getElementById("tva").innerHTML)+parseFloat(document.getElementById("port").innerHTML);
        
            var bonus= parseFloat( document.getElementById("prixttc").innerHTML);
   
            if(bonus<=1000){
                  document.getElementById("remise").style.display="none";
            
            }else{
                  
                  document.getElementById("remise").style.display="block";
                  document.querySelector("#remise span").innerHTML= (bonus*5/100).toFixed(2);
            }
   
   
            document.querySelector("#cheque span").innerHTML=document.querySelectorAll(".identite input")[0].value;
   
          document.querySelectorAll("#contact span")[0].innerHTML=document.querySelectorAll(".identite input")[2].value;
   
          document.querySelectorAll("#contact span")[1].innerHTML=document.querySelectorAll(".identite input")[3].value;
       
      
 });


   document.getElementById("quantite2").addEventListener("keyup",function (){
         var i=document.getElementById("quantite2").value;
        var j=document.getElementById("prix3").innerHTML;

          document.getElementById("prixht2").innerHTML=i*j;
     
         document.getElementById("stotal").innerHTML=parseFloat(document.getElementById("prixht").innerHTML)+
         parseFloat(document.getElementById("prixht1").innerHTML)+
        parseFloat(document.getElementById("prixht2").innerHTML)+parseFloat(document.getElementById("prixht3").innerHTML);
        

            document.getElementById("tva").innerHTML=calcultva( document.getElementById("stotal").innerHTML).toFixed(2);
           
   
            document.getElementById("port").innerHTML=  document.getElementById("stotal").innerHTML*5/100;
   
            document.getElementById("prixttc").innerHTML=
            parseFloat(document.getElementById("stotal").innerHTML)+parseFloat( document.getElementById("tva").innerHTML)+parseFloat(document.getElementById("port").innerHTML);
        
            var bonus= parseFloat( document.getElementById("prixttc").innerHTML);
   
            if(bonus<=1000){
                  document.getElementById("remise").style.display="none";
            
            }else{
                  
                  document.getElementById("remise").style.display="block";
                  document.querySelector("#remise span").innerHTML= (bonus*5/100).toFixed(2);
            }
   
   
            document.querySelector("#cheque span").innerHTML=document.querySelectorAll(".identite input")[0].value;
   
          document.querySelectorAll("#contact span")[0].innerHTML=document.querySelectorAll(".identite input")[2].value;
   
          document.querySelectorAll("#contact span")[1].innerHTML=document.querySelectorAll(".identite input")[3].value;
     
      
       
 });

// // lorsqu'on remplit la derniere case on a tout le tableau 2 qui s'affiche et le message alternatif
 document.getElementById("quantite3").addEventListener("keyup",function (){
       var i=document.getElementById("quantite3").value;
      var j=document.getElementById("prix4").innerHTML;
       
           document.getElementById("prixht3").innerHTML=i*j;

         document.getElementById("stotal").innerHTML=parseFloat(document.getElementById("prixht").innerHTML)+
         parseFloat(document.getElementById("prixht1").innerHTML)+
        parseFloat(document.getElementById("prixht2").innerHTML)+parseFloat(document.getElementById("prixht3").innerHTML);

         document.getElementById("tva").innerHTML=calcultva( document.getElementById("stotal").innerHTML).toFixed(2);
        

         document.getElementById("port").innerHTML=  document.getElementById("stotal").innerHTML*5/100;

         document.getElementById("prixttc").innerHTML=
         parseFloat(document.getElementById("stotal").innerHTML)+parseFloat( document.getElementById("tva").innerHTML)+parseFloat(document.getElementById("port").innerHTML);
     
         var bonus= parseFloat( document.getElementById("prixttc").innerHTML);

         if(bonus<=1000){
               document.getElementById("remise").style.display="none";
         
         }else{
               
            document.getElementById("remise").style.display="block";
               document.querySelector("#remise span").innerHTML= (bonus*5/100).toFixed(2);
         }


         document.querySelector("#cheque span").innerHTML=document.querySelectorAll(".identite input")[0].value;

       document.querySelectorAll("#contact span")[0].innerHTML=document.querySelectorAll(".identite input")[2].value;

       document.querySelectorAll("#contact span")[1].innerHTML=document.querySelectorAll(".identite input")[3].value;
 
         
       
   });