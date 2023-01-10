
c'est maaroufwork
/
bls_spain_visa_appointment_scripts
Public
Code
Problèmes
2
Demandes d'extraction
Actions
Projets
Sécurité
Connaissances
bls_spain_visa_appointment_scripts/ scripts_de_rendez- vous_individuels.js
@itsmaaroufwork
itsmaaroufwork Mettre à jour individual_Appointment_scripts.js
 1 contributeur
112 lignes (106 sloc)  4,93 Ko
// ==UserScript==
// @nom          test individuel
// @espace de noms     http://tampermonkey.net/
// @version       0.1
// @description   essaie de conquérir le monde !
// @auteur        @Itsmaarouf
// @match         *://*.blsspainmorocco.com/*
// @match         *://*.blsspainvisa.com/*
// @accorder         aucun
// ==/UserScript==
//------------------------------------------------------------- -------------------------------------------------- -------------------------
//////////////////////////////////////////////// //////////////////////////////////////////////// //
( fonction  direSalut ( )  {
    'utiliser strictement' ;
     laisser  code  =  "" ;
    const  Jours  =  [ ] ;
    for ( var  je  =  0 ;  je <= document . scripts . longueur ;  je ++ ) {
        if  ( document . scripts [ i ] . text . indexOf ( "available_dates" )  !=  - 1 )  {
        code  =  document . scripts [ je ] . texte ;
            doMagie ( ) ;
        }
    }
    fonction  doMagique ( )  {
    var  bgn  =  code . indexOf ( "dates_disponibles" ) ;
    var  fin  =  code . indexOf ( "fullCapicity_dates" ) ;
    var  table  =  code . tranche ( bgn + 20 ,  fin - 9 ) ;
    si  ( tableau  !==  "" ) {
        var  date  =  table . tranche ( 0 , 10 ) ;
        var  jj  =  datee . tranche ( 0 , 2 ) ;
        var  mm  =  date . tranche ( 3 , 5 ) ;
        var  aaaa  =  date . tranche ( 6 , 10 ) ;
        var  dateeFin  =  [ aaaa ,  mm ,  jj ] ;
        var  finDate =  dateeFin . joindre ( "-" ) ;
        if ( document . getElementById ( "app_date" ) . value . length  ===  0  &&  finDate  !==  "" )
        {
            $ ( '#app_date' ) . datepicker ( "mise à jour"  , finDate ) ;

        } sinon
        {
            //############################################### ########################
            //############### C'EST LA PIÈCE QUE VOUS DEVEZ CHANGER #######################
            //############################################### ########################
            var  lastNames  = "elkabouss" ;
            var  firstNames  = "rachid" ;
            var  naissances  = "1985-08-27" ; //Date de naissance
            var  passNumbers  = "DH6507049" ; //Numéro de passeport
            var  issueDates  = "2018-09-27" ; //Date de délivrance du passeport
            var  dateexpiration  = "2023-08-27" ; //Date d'expiration du passeport
            var  pptissuePalaces  = "CASABLANCA" ; // Lieu de délivrance du passeport
            var  franN  = "TG700******" ;
            //############################################### ########################
            //############################################### ########################

            documenter . getElementById ( 'first_name' ) . valeur = prénoms ;
            documenter . getElementById ( 'nom_de_famille' ) . valeur = nom_de_famille ;
            $ ( '#dateDeBirth' ) . datepicker ( "mise à jour"  , naissances ) ;
            documenter . getElementById ( 'passport_no' ) . valeur = passNumbers ;
            $ ( '#pptIssueDate' ) . datepicker ( "mise à jour"  , issueDates ) ;
            $ ( '#pptDateExpiry' ) . datepicker ( "mise à jour"  , dateexpiration ) ;
            documenter . getElementById ( 'pptIssuePalace' ) . valeur = pptissuePalaces ;
            var  audio  =  new  Audio ( 'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-the-sound-pack-tree/tspt_german_ambulance_sirens_wailing_loop_041.mp3' ) ;
            audio . jouer ( ) ;
            documenter . getElementById ( "app_time" ) . index_sélectionné  =  document . getElementById ( 'app_time' ) . longueur - 1 ;
            documenter . getElementById ( "VisaTypeId" ) . IndexSélectionné  =  "1" ;
            if  ( document . getElementById ( 'fran' )  !==  null ) {
                documenter . getElementById ( 'fran' ) . valeur = franN ;
            }
            if  ( document . getElementById ( "passportType" )  !==  null ) {
                documenter . getElementById ( "passportType" ) . IndexSélectionné  =  "7" ;
            }
            if  ( document . getElementById ( "vasId12" )  !==  null ) {
              $ ( "#vasId12" ) . prop ( "vérifié" ,  vrai ) ;
              }
        }
    }
    if ( document . getElementById ( "app_date" ) . value . length  ===  0 )
        {
            setTimeout ( fonction ( ) { fenêtre . emplacement . recharge ( 1 ) ; } ,  30 *  1000 ) ; ;
        }
 // ------------------------------------------------ -------------------------------------------------- --
 // PARTI SOUMETTRE AUTOMATIQUEMENT

 fonction  clicksubmit ( )  {
    si  (
        documenter . getElementById ( "app_date" ) . valeur  !==  ""  &&
        documenter . getElementById ( "app_time" ) . valeur  !==  ""  &&
        documenter . getElementById ( "VisaTypeId" ) . valeur  !==  ""  &&
        documenter . getElementById ( "prénom" ) . valeur  !==  ""  &&
        documenter . getElementById ( 'nom_de_famille' ) . valeur  !==  ""  &&
        documenter . getElementById ( "dateOfBirth" ) . valeur  !==  ""  &&
        documenter . getElementById ( "passportType" ) . valeur  !==  ""  &&
        documenter . getElementById ( 'passport_no' ) . valeur  !==  ""  &&
        documenter . getElementById ( "pptIssueDate" ) . valeur  !==  ""  &&
        documenter . getElementById ( 'pptExpiryDate' ) . valeur  !==  ""  &&
        documenter . getElementById ( "pptIssuePalace" ) . valeur  !==  ""

        )  {
            consoler . log ( 'cliquez sur SOUMETTRE' ) ;
            documenter . getElementsByClassName ( "btn primaire-btn" ) [ 0 ] . cliquez ( ) ;
            }
    }
    var  stopconsubmit  =  setInterval ( clicksubmit ,  10 * 1000 ) ;

    documenter . getElementsByClassName ( "btn primaire-btn" ) [ 0 ] . onclick  =  fonction  ( )  {
        'utiliser strictement'
        consoler . log ( 'ARRÊTER DE CLIQUER SUR SOUMETTRE' ) ;
        clearTimeout ( stopconsubmit ) ;
    }

    consoler . log ( "Fin d'exécution du code" ) ;
        }
} ) ( ) ;
