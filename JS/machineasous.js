var credits = $('#credits').val();
    
$('button').click(
    function random (e) {
        //On retire 1 crédit
        credits -= 1;
        $('#credits').attr('value', credits);
        
        //On génère l'indice des images aléatoires
        var a = Math.floor(Math.random() * 4);
        var b = Math.floor(Math.random() * 4);
        var c = Math.floor(Math.random() * 4);
        var d = Math.floor(Math.random() * 4);
        
        //On modifie les sources des images en fonction de l'indice précédent
        $('#img1').attr('src', '../img/img' + a + '.png');
        $('#img2').attr('src', '../img/img' + b + '.png');
        $('#img3').attr('src', '../img/img' + c + '.png');
        $('#img4').attr('src', '../img/img' + d + '.png');
        
        //si les 4 symboles sont identiques on rajoute 5 crédits
        if (a == b && b == c & c == d) {
            credits += 5;
            $('#credits').attr('value', credits);
        }
        
        if (credits == 0) {
            e.preventDefault();
            $('#perdu').text("Vous n'avez plus de crédits");
        }
    }
);