
/**********************************************************     GLOBALE VARIABLEN   **********************************************/

var resultTime, resultPoints;                                   // Ergebnistexte
var time, score;                                                // Daten aus dem Spiel
var btn_home;                                                   // Button um zum Menü zu kommen
var  t1, t2, t3;                                                    //Texte
var coins;
var coinImage, stopWatchImage;
var explosion;

class End_Life extends Phaser.Scene {

    constructor() {
        super({key: "End_Life"});
    }

    /**
     ***************************************     DATEN AUS DEM SPIEL   ***************************************
    */
    init(data) {
        score = data[0];
        time = data[1];
    }

    /**
     ***************************************    BENÖTIGTE BILDER   ***************************************
    */
    preload() {
        this.load.image('Home', 'assets/home.png');
        this.load.image('Explosion', 'assets/explosion.png');
    }

    create() {

        //this.cameras.main.setBackgroundColor('#FFFFFF');

        explosion = this.add.image(0, 0, 'Explosion');
        explosion.setScale(2);
        explosion.y = game.config.height/2 + 100;
        explosion.x = game.config.width * 0.35;

        t1 = this.add.text(0, 0, "OH NEIN!", {fontFamily: 'AhkioW05-Light', fontSize: '120px', fill: "#000000"});
        t1.y = (game.config.height * 0.15);
        t1.x = (game.config.width * 0.45);
        
        t2 = this.add.text(0, 0, "Dein Sparschwein ist", {fontFamily: 'AhkioW05-Light', fontSize: '70px', fill: "#000000"});
        t2.y = (game.config.height * 0.3);
        t2.x = (game.config.width * 0.35); 

        t3 = this.add.text(0, 0, "kaputt gegangen.", {fontFamily: 'AhkioW05-Light', fontSize: '70px', fill: "#000000"});
        t3.y = (game.config.height * 0.4);
        t3.x = (game.config.width * 0.4);

        /**
         ***********************************    HOMEBUTTON     ***********************************************
         Klickt man auf den Button, kommt man zu Hauptmenü
        **/
        btn_home = this.add.image(0, 0, 'Home');
        btn_home.y = (game.config.height * 0.55); 
        btn_home.x = (game.config.width * 0.65);
        btn_home.setScale(0.2);
        btn_home.setInteractive();
        btn_home.on('pointerup', () => {
            this.scene.stop('Game_Easy');
            this.scene.stop('Game_Medium');
            this.scene.stop('Game_Hard');
            this.scene.stop('Game_Expert');
            this.scene.start('Start');
        });
        btn_home.on('pointerover', () => {
            //btn_home.setShadow(3, 3, 'rgba(0,0,0,0.78)', 5);
        })
        btn_home.on('pointerout', () => {
            //btn_home.setShadow(0, 0, 'rgba(0,0,0,0.78)', 0);
        })

    }
}