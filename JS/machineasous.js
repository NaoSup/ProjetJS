//On active le bouton Jouer
$('#boutonJouer').prop('disabled', false);
$('#boutonJouer').prop('hidden', false);

//On déclanche la fonction machineASous lorsqu'on clique sur le bouton Jouer
$('#boutonJouer').click(
    function machineASous() {
        var credits = $('#credits').val();
        var score = $('#score').val();

        //On retire 1 crédit par tour joué
        credits -= 1;
        $('#credits').attr('value', credits);

        //On génère l'indice des images aléatoires
        var a = Math.floor(Math.random() * 4);
        var b = Math.floor(Math.random() * 4);
        var c = Math.floor(Math.random() * 4);
        var d = Math.floor(Math.random() * 4);

        //On modifie les sources des images en fonction de l'indice précédent
        $('#img1').attr('src', '../img/img' + a + '.png').fadeToggle(0).fadeToggle(200);
        $('#img2').attr('src', '../img/img' + b + '.png').fadeToggle(0).fadeToggle(200);
        $('#img3').attr('src', '../img/img' + c + '.png').fadeToggle(0).fadeToggle(200);
        $('#img4').attr('src', '../img/img' + d + '.png').fadeToggle(0).fadeToggle(200);

        //Si les 4 symboles sont identiques on rajoute 5 crédits
        if (a == b && b == c & c == d) {
            credits += 5;
            $('#credits').attr('value', credits);
            $('#message').text("Bravo ! Vous avez 4 symboles identiques ! Vous gagnez 5 crédits.");
        }
        else if ((a == b && b == c) ^ (a == b && b == d) ^ (b ==c && c == d) ^ (a == c && c == d)) {
            credits += 3;
            $('#credits').attr('value', credits);
            $('#message').text("Presque ! Vous avez 3 symboles identiques. Vous gagnez 3 crédits.");
        }
        else {
            $('#message').text("Essayez à nouveau.");
        }
        
        //On récupère le meilleur score
        if (credits > score) {
            score = credits;
            $("#score").attr('value', score);
        }

        //Si il n'y a plus de crédits, la partie est finie
        if (credits == 0) {
            //On désactive et cache le bouton Jouer
            $('#boutonJouer').prop('disabled', true).prop('hidden', true);

            //On affiche un message de fin de partie
            $('#message').text("Dommage ! C'est perdu. Vous n'avez plus de crédits... Veuillez recommencer une partie.");

            //On fait apparaître un bouton Recommencer pour rejouer une nouvelle partie
            $('#boutonRecommencer').prop('hidden', false);
        }
    }
);


//On déclanche la fonction recommencer lorsqu'on clique sur le bouton Recommencer
$('#boutonRecommencer').click(
    function recommencer() {
        //On redonne 20 crédits au joueur
        $('#credits').attr('value', 20);

        //On réinitialise les images
        $('#img1').attr('src', '../img/img0.png').fadeToggle(0).fadeToggle(200);
        $('#img2').attr('src', '../img/img1.png').fadeToggle(0).fadeToggle(200);
        $('#img3').attr('src', '../img/img2.png').fadeToggle(0).fadeToggle(200);
        $('#img4').attr('src', '../img/img3.png').fadeToggle(0).fadeToggle(200);

        //On réactive le bouton Jouer
        $('#boutonJouer').prop('disabled', false).prop('hidden', false);

        //On cache le bouton Recommencer
        $('#boutonRecommencer').prop('hidden', true);

        //On supprime le message de fin de partie
        $('#message').remove();
    }
)
