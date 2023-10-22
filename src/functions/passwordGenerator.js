 
function Generator(config){

    //todos los caracteres necesarios para hacer una contraseña
    const characters = {
        numbers: '0 1 2 3 4 5 6 7 8 9',
        symbols: '! @ $ # % & * _ ( - ) + { [ } ] ; : < > . ? ¡ ¿ /',
        capital_letters: 'A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z',
        lowercase:'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z',
    }

    let selected_characters = characters.lowercase + ' ';
    let password = '';

    // guardamos todos los tipos de caracteres que el usuario selecciono
    for(let prop in config) {
        if(config[prop] === true){
            selected_characters += characters[prop] + ' ';
        }
    }
    // eliminamos los espacios iniciales y finales
    selected_characters = selected_characters.trim();
    // convertimos cada caracter en un elemento dentro de un array
    selected_characters = selected_characters.split(' ');
    //selected_characters = selected_characters.sort(() => Math.random() - 0.5);

    
    //  introduciomos caracteres aleatorio a la contraseña
    for(let i =0; i <= config.characters; i++){
        password += selected_characters[Math.floor(Math.random() * selected_characters.length)]
    }
    
    return password
}

export default Generator;