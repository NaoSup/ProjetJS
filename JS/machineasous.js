$('#boutonJouer').prop('disabled', false);

$('#boutonJouer').click(
    function random() {
        var credits = $('#credits').val();
        var score = $('#score').val();
        
        //On retire 1 crédit par tour joué
        credits -= 1;
        $('#credits').attr('value', credits);
        console.log("ok");

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

        //si les 4 symboles sont identiques on rajoute 5 crédits
        if (a == b && b == c & c == d) {
            credits += 5;
            $('#credits').attr('value', credits);
        }
        
         //On récupère le meilleur score
        if (credits > score) {
            score = credits;
            $("#score").attr('value', score);
        }
        
        if (credits == 0) {
            $('#boutonJouer').prop('disabled', true);
            $('#message').text("Dommage ! C'est perdu. Vous n'avez plus de crédits...");
        }
    }
);
