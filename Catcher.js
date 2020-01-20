


/**********************************************************     GLOBALE VARIABLEN   **********************************************/
// empfohlene minimale Größe: w = 1000; h = 750; für PC
var w = window.innerWidth - 20;
var h = window.innerHeight - 20;

/**********************************************************     SCHRIFTART      ***************************************************/

var new_font = new FontFace('AhkioW05-Light', 'url(Fonts/AhkioW05-Light.ttf)');
new_font.load().then(function(loaded_face) {
    document.fonts.add(loaded_face);
}).catch(function(error) {
});

/**********************************************************    SETUP FÜR PHASER    ***********************************************/

var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 1200,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Start, Game_Easy, Game_Medium, Game_Hard, Game_Expert, End_Time, End_Life]
    //scene: [End_Time]
    //scene: [End_Life]
    //scene: [Start]
};

var game = new Phaser.Game(config);
