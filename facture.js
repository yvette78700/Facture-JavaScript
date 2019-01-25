

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


for(var i=100 ; i>0; i--){

     
      anneeReferenceInf=datePardefaut.getFullYear()-i;
     
        document.getElementById("annee").innerHTML += "<option>"+ anneeReferenceInf+ "</option>";

 }


 for(var i=0 ; i<100; i++){

      anneeReferenceSup= datePardefaut.getFullYear()+i ;
      
 document.getElementById("annee").innerHTML += "<option>"+ anneeReferenceSup+ "</option>";

     }

//partie sur les coordonnées des clients figurant dans la liste deroukant

function Client(nomS,nom,rue,adresse,telephone){
      this.nomS=nomS;
      this.nom= nom;
      this.rue=rue;
      this.adresse=adresse;
      this.telephone=telephone;
     
}

var client1 = new Client("Savon","alain","1 rue des bois"," 75500,Paris ","03 02 06 08 07");

var client2 = new Client("Purée","yvette","8 rue des ferrites","95400, cergy","03 02 06 08 10");

var client3 = new Client("Patate","alfred","8 rue des cormeille","78700, Poissy ","03 02 06 08 10");

var tab = [client1,client2,client3];

document.getElementById("nomClientD").innerHTML="<Option> Nouveau client </Option>";
document.getElementById("nomClientE").innerHTML="<Option>Nouveau client </Option>";

// remplissage de la liste deroulante  des clients sur la partie destinataire et expediteur

for(var i = 0; i< tab.length; i++){

      document.getElementById("nomClientD").innerHTML+="<Option>"+tab[i].nomS+ "</Option>";
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
            }
      }

}

// reinitialise les champs au clic sur nouveau client



document.querySelectorAll("#nomClientD option")[0].addEventListener("click",
function ()

     {
    
            
     
                  document.getElementById("nsociete").value ="";
                  document.getElementById("client").value="";
                  document.getElementById("rue").value="";
                   document.getElementById("ville").value="";
                    document.getElementById("telephone").value="";
           
      });



document.querySelectorAll("#nomClientE option")[0].addEventListener("click",

     function (){
    

     
                  document.getElementById("nsocieteE").value ="";
                  document.getElementById("clientE").value="";
                  document.getElementById("rueE").value="";
                   document.getElementById("villeE").value="";
                    document.getElementById("telephoneE").value="";
           
      });




     document.querySelectorAll("#nomClientD option")[1].addEventListener("click",change);

    function change(){

      var j =document.querySelectorAll("#nomClientD option")[1].innerHTML;

     remplissage(j);
    
     }  ;


     document.querySelectorAll("#nomClientD option")[2].addEventListener("click",change1)

     function change1(){
      var j =document.querySelectorAll("#nomClientD option")[2].innerHTML;
 
      
          remplissage(j);  
     };  


       document.querySelectorAll("#nomClientD option")[3].addEventListener("click",change2)

      function change2(){
        var j =document.querySelectorAll("#nomClientD option")[3].innerHTML;
 
    remplissage(j);
 
            
           
      } ; 
       


     
       
     document.querySelectorAll("#nomClientE option")[1].addEventListener("click",change3)

    function change3(){
      var j =document.querySelectorAll("#nomClientE option")[1].innerHTML;
 
     remplissage1(j);
     
    } ;  

     document.querySelectorAll("#nomClientE option")[2].addEventListener("click",change4)

     function change4(){
       var j =document.querySelectorAll("#nomClientE option")[2].innerHTML;
 
      remplissage1(j);
            
           
    }  ;

     document.querySelectorAll("#nomClientE option")[3].addEventListener("click",change5)

     function change5(){
       var j =document.querySelectorAll("#nomClientE option")[3].innerHTML;
 
      remplissage1(j);
      } ;

      

       //partie sur les produits
             
      function Produit(codepdt,libelle,prixU){

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

        code1.innerHTML+= "<option></option>";
          code2.innerHTML+= "<option></option>";
           code3.innerHTML+= "<option></option>";
            code4.innerHTML+= "<option></option>";
        


       for(var i=0;i<tabpdt.length;i++){

          code1.innerHTML+= "<option>"+tabpdt[i].codepdt+"</option>";
          code2.innerHTML+= "<option>"+tabpdt[i].codepdt+"</option>";
           code3.innerHTML+= "<option>"+tabpdt[i].codepdt+"</option>";
            code4.innerHTML+= "<option>"+tabpdt[i].codepdt+"</option>";
          }

         

        

      
      // remplissage automatique libelle et prix unitaire
          function remplir(x){
            for(var i=0; i<tabpdt.length;i++){
                  if(x==tabpdt[i].codepdt){
                       document.getElementById("lib1").innerHTML=tabpdt[i].libelle;
                       document.getElementById("prix1").innerHTML=tabpdt[i].prixU; 
                  }
          }
      }

      function remplir1(x){
            for(var i=0; i<tabpdt.length;i++){
                  if(x==tabpdt[i].codepdt){
                       document.getElementById("lib2").innerHTML=tabpdt[i].libelle;
                       document.getElementById("prix2").innerHTML=tabpdt[i].prixU; 
                  }
          }
      }

      function remplir2(x){
            for(var i=0; i<tabpdt.length;i++){
                  if(x==tabpdt[i].codepdt){
                       document.getElementById("lib3").innerHTML=tabpdt[i].libelle;
                       document.getElementById("prix3").innerHTML=tabpdt[i].prixU; 
                  }
          }
      }

      function remplir3(x){
            for(var i=0; i<tabpdt.length;i++){
                  if(x==tabpdt[i].codepdt){
                       document.getElementById("lib4").innerHTML=tabpdt[i].libelle;
                       document.getElementById("prix4").innerHTML=tabpdt[i].prixU; 
                  }
          }
      }


        
        
      //   produits de premiere ligne
   document.querySelectorAll("#codepdt1 option")[1].addEventListener("click",change6)

  function change6(){
          var j = document.querySelectorAll("#codepdt1 option")[1].innerHTML;
            
           remplir(j);
              
     };

     document.querySelectorAll("#codepdt1 option")[2].addEventListener("click",change7)

     function change7(){
             var j = document.querySelectorAll("#codepdt1 option")[2].innerHTML;
               
              remplir(j) ;  
        
        };
        document.querySelectorAll("#codepdt1 option")[3].addEventListener("click",change8)
        function change8(){
            var j = document.querySelectorAll("#codepdt1 option")[3].innerHTML;
              
             remplir(j) ;  
       
       };
      
      //  produits de la ligne 2

      document.querySelectorAll("#codepdt2 option")[1].addEventListener("click",

  function (){
          var j = document.querySelectorAll("#codepdt2 option")[1].innerHTML;
            
           remplir1(j);
              
     });

     document.querySelectorAll("#codepdt2 option")[2].addEventListener("click",

     function (){
             var j = document.querySelectorAll("#codepdt2 option")[2].innerHTML;
               
              remplir1(j) ;  
        
        });
        document.querySelectorAll("#codepdt2 option")[3].addEventListener("click",
        function (){
            var j = document.querySelectorAll("#codepdt2 option")[3].innerHTML;
              
             remplir1(j) ;  
       
       });

      //  produits ligne 3

      document.querySelectorAll("#codepdt3 option")[1].addEventListener("click",

  function (){
          var j = document.querySelectorAll("#codepdt3 option")[1].innerHTML;
            
           remplir2(j);
              
     });

     document.querySelectorAll("#codepdt3 option")[2].addEventListener("click",

     function (){
             var j = document.querySelectorAll("#codepdt3 option")[2].innerHTML;
               
              remplir2(j) ;  
        
        });
        document.querySelectorAll("#codepdt3 option")[3].addEventListener("click",
        function (){
            var j = document.querySelectorAll("#codepdt3 option")[3].innerHTML;
              
             remplir2(j) ;  
       
       });


      //  produits ligne 4

      document.querySelectorAll("#codepdt4 option")[1].addEventListener("click",

  function (){
          var j = document.querySelectorAll("#codepdt4 option")[1].innerHTML;
            
           remplir3(j);
              
     });

     document.querySelectorAll("#codepdt4 option")[2].addEventListener("click",

     function (){
             var j = document.querySelectorAll("#codepdt4 option")[2].innerHTML;
               
              remplir3(j) ;  
        
        });
        document.querySelectorAll("#codepdt4 option")[3].addEventListener("click",
        function (){
            var j = document.querySelectorAll("#codepdt4 option")[3].innerHTML;
              
             remplir3(j) ;  
       
       });


      //  mettre les champs à zero si rien n'est selectionner

      document.querySelectorAll("#codepdt1 option")[0].addEventListener("click",

      function (){
      document.getElementById("lib1").innerHTML="";
      document.getElementById("prix1").innerHTML=""; 
              
     });

     document.querySelectorAll("#codepdt2 option")[0].addEventListener("click",

     function (){
      document.getElementById("lib2").innerHTML="";
      document.getElementById("prix2").innerHTML=""; 
        });

        document.querySelectorAll("#codepdt3 option")[0].addEventListener("click",
        function (){
            document.getElementById("lib3").innerHTML="";
            document.getElementById("prix3").innerHTML="";  
       
       });

       document.querySelectorAll("#codepdt4 option")[0].addEventListener("click",
        function (){
            document.getElementById("lib4").innerHTML="";
            document.getElementById("prix4").innerHTML="";  
       
       });

      
// affichage montant ,tva,frais de port et montant ttc

// fonction qui calcule la tva
//    les frais de ports et manutention est 5% du montant d'achat ttc

function calcultva(x){
      return x*0.2;
}

document.getElementById("quantite").addEventListener("keyup",qteproduit);

function qteproduit(){
     var i=document.getElementById("quantite").value;
     var j=document.getElementById("prix1").innerHTML;
  

          var  k=i*j;
            
            document.getElementById("prixht").innerHTML=k;
          
           
}



 document.getElementById("quantite1").addEventListener("keyup",qteproduit1);

function qteproduit1(){
       var i=document.getElementById("quantite1").value;
      var j=document.getElementById("prix2").innerHTML;
      
            var k=i*j;
           
            document.getElementById("prixht1").innerHTML=k;
     
       
      
 }


   document.getElementById("quantite2").addEventListener("keyup",qteproduit2);

   function qteproduit2(){
         var i=document.getElementById("quantite2").value;
        var j=document.getElementById("prix3").innerHTML;


       
             var k=i*j;
           
          document.getElementById("prixht2").innerHTML=k;
     
      
       
 }

// lorsqu'on remplit la derniere case on a tout le tableau 2 qui s'affiche et le message alternatif
 document.getElementById("quantite3").addEventListener("keyup",qteproduit3);

 function qteproduit3(){
       var i=document.getElementById("quantite3").value;
      var j=document.getElementById("prix4").innerHTML;
       
            var k=i*j;
           
           document.getElementById("prixht3").innerHTML=k;

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
               
               
               document.querySelector("#remise span").innerHTML= bonus*5/100;
         }


         document.querySelector("#cheque span").innerHTML=document.querySelectorAll(".identite input")[0].value;

       document.querySelectorAll("#contact span")[0].innerHTML=document.querySelectorAll(".identite input")[2].value;

       document.querySelectorAll("#contact span")[1].innerHTML=document.querySelectorAll(".identite input")[3].value;
 
         
       
   }







   






  

 











        


             
                 

                 
          

      
            
          
           
    

     





