
/**********************************************************     GLOBALE VARIABLEN   **********************************************/

var resultTime, resultPoints;                                   // Ergebnistexte
var time, score;                                                // Daten aus dem Spiel
var btn_home;                                                   // Button um zum Menü zu kommen
var congrats, t1, t2;                                           //Texte
var mike, blase;
var coins;
var coinImage, stopWatchImage;

class End_Time extends Phaser.Scene {

    constructor() {
        super({key: "End_Time"});
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
        this.load.image('Mike', 'assets/mike.png');
        this.load.image('Home', 'assets/home.png');
        this.load.image('Coin', 'assets/coin.png');
        this.load.image('Stop_Watch', 'assets/stop_watch.png');
    }

    create() {

        //this.cameras.main.setBackgroundColor('#FFFFFF');

        mike = this.add.image(0, 0, 'Mike');
        mike.y = game.config.height - 200;
        mike.x = game.config.width * 0.2;
        mike.setScale(0.3);

        congrats = this.add.text(0, 0, "GLÜCKWUNSCH!", {fontFamily: 'AhkioW05-Light', fontSize: '100px', fill: "#000000"});
        congrats.y = (game.config.height / 2) - (game.config.height * 0.35);
        congrats.x = (game.config.width / 2) - (congrats.width/2);

        stopWatchImage = this.add.image(0, 0, 'Stop_Watch');
        stopWatchImage.setScale(0.2);
        stopWatchImage.y = (game.config.height / 2) - (game.config.height * 0.15) + (stopWatchImage.displayHeight/2);
        stopWatchImage.x = (game.config.width / 2) - 100;

        resultTime = this.add.text(0, 0, time + " s", {fontFamily: 'AhkioW05-Light', fontSize: '80px', fill: "#000000"});
        resultTime.y = stopWatchImage.y - (resultTime.height/2);
        resultTime.x = stopWatchImage.x + 100;

        coinImage = this.add.image(0, 0, 'Coin');
        coinImage.setScale(0.2);
        coinImage.y = (game.config.height / 2) + (coinImage.displayHeight/2);
        coinImage.x = (game.config.width / 2) - 100;
        
        resultPoints = this.add.text(0, 0, score + "", {fontFamily: 'AhkioW05-Light', fontSize: '80px', fill: "#000000"});
        resultPoints.y = coinImage.y - (resultPoints.height/2);
        resultPoints.x = coinImage.x + 100;

        /**
         ***********************************    HOMEBUTTON     ***********************************************
         Klickt man auf den Button, kommt man zu Hauptmenü
        **/
        btn_home = this.add.image(0, 0, 'Home');
        btn_home.y = (game.config.height * 0.8); 
        btn_home.x = (game.config.width / 2);
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