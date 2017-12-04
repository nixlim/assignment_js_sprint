function Roulette (num) {
    this.clientCash = num;
    this.bankroll = function (){
      console.log("Your bankroll is " + this.clientCash);
    };
    this.spin = function (bet,num) { //take bet on number
        this.bet = bet;
        this.betOnNumber = num;
        console.log("You want to bet " + this.bet + " on '"+ this.betOnNumber + "'. Your bankroll is " + this.clientCash);

        if (this.bet <= this.clientCash) { //check that bet is not larger than bankroll
            var wheelMin = 0; //beginning of the wheel
            var wheelMax = 36;//end of the wheel
            var result; //initialise the result variable
            var winnings; //initialise the winnings variable
            result=Math.floor(Math.random()*(wheelMax-wheelMin+1)+wheelMin);//get a random integer inclusive of both min and max
            switch (true) {
                case   typeof this.betOnNumber == "number" && this.betOnNumber > wheelMin - 1 && this.betOnNumber < wheelMax + 1:
                    this.clientCash = this.clientCash - this.bet; //deduct bet from client balance
                    if (result !== this.betOnNumber) {
                        console.log("The spin was " + result + ". You loose.");
                    } else {
                        winnings = this.bet*35;//35 times the bet
                        this.clientCash = this.clientCash+this.bet+winnings;//new balance = winnings plus original bet plus client balance
                        console.log("The spin was " + result + ". You win " + winnings);
                    };
                    break;
                case this.betOnNumber == "Even" || this.betOnNumber == "even":
                    this.clientCash = this.clientCash - this.bet; //deduct bet from client balance
                    if (result % 2 !== 0) {
                        console.log("The spin was " + result + ", which is odd. You loose.");
                    } else {
                        winnings = this.bet;//odds 1:1
                        this.clientCash = this.clientCash+this.bet+winnings;//new balance = winnings plus original bet plus client balance
                        console.log("The spin was " + result + ", which is even. You win " + winnings);
                    };
                    break;
                case this.betOnNumber == "Odd" || this.betOnNumber == "odd":
                    this.clientCash = this.clientCash - this.bet; //deduct bet from client balance
                    if (result % 2 == 0) {
                        console.log("The spin was " + result + ", which is even. You loose.");
                    } else {
                        winnings = this.bet;//odds 1:1
                        this.clientCash = this.clientCash+this.bet+winnings;//new balance = winnings plus original bet plus client balance
                        console.log("The spin was " + result + ", which is odd. You win " + winnings);
                    };
                    break;
                case this.betOnNumber == "1 to 18":
                    this.clientCash = this.clientCash - this.bet; //deduct bet from client balance
                    if (result > 18 || result < 1) {
                        console.log("The spin was " + result + ", which is not between 1 and 18. You loose.");
                    } else {
                        winnings = this.bet;//odds 1:1
                        this.clientCash = this.clientCash+this.bet+winnings;//new balance = winnings plus original bet plus client balance
                        console.log("The spin was " + result + " (1 to 18). You win " + winnings);
                    };
                    break;
                case this.betOnNumber == "19 to 36":
                    this.clientCash = this.clientCash - this.bet; //deduct bet from client balance
                    if (result < 19) {
                        console.log("The spin was " + result + ", which is not between 19 and 36. You loose.");
                    } else {
                        winnings = this.bet;//odds 1:1
                        this.clientCash = this.clientCash+this.bet+winnings;//new balance = winnings plus original bet plus client balance
                        console.log("The spin was " + result + " (19 to 36). You win " + winnings);
                    };
                    break;
                case this.betOnNumber == "1st 12":
                    this.clientCash = this.clientCash - this.bet; //deduct bet from client balance
                    //if result between 1 and 12 win, otherwise loose, odds 2:1
                    if (result > 12 || result < 1) {
                        console.log("The spin was " + result + ", which is not between 1 and 12. You loose.");
                    } else {
                        winnings = this.bet*2;//odds 2:1
                        this.clientCash = this.clientCash+this.bet+winnings;//new balance = winnings plus original bet plus client balance
                        console.log("The spin was " + result + " (1st 12). You win " + winnings);
                    };
                    break;
                case this.betOnNumber == "2nd 12":
                    this.clientCash = this.clientCash - this.bet; //deduct bet from client balance
                    if (result > 24 || result < 13) {
                        console.log("The spin was " + result + ", which is not between 13 and 24. You loose.");
                    } else {
                        winnings = this.bet*2;//odds 2:1
                        this.clientCash = this.clientCash+this.bet+winnings;//new balance = winnings plus original bet plus client balance
                        console.log("The spin was " + result + " (2nd 12). You win " + winnings);
                    };
                    break;
                case this.betOnNumber == "3rd 12":
                    this.clientCash = this.clientCash - this.bet; //deduct bet from client balance
                    if (result > 24) {
                        console.log("The spin was " + result + ", which is not between 25 and 36. You loose.");
                    } else {
                        winnings = this.bet*2;//odds 2:1
                        this.clientCash = this.clientCash+this.bet+winnings;//new balance = winnings plus original bet plus client balance
                        console.log("The spin was " + result + " (3rd 12). You win " + winnings);
                    };
                    break;
                default:
                    console.log("Unexpected input in the spin command.");
            }
            //1st iteration:
            // if (result !== this.betOnNumber) {
            //     console.log("The spin was " + result + ". You loose.");
            // } else {
            //     winnings = this.bet*35;//35 times the bet
            //     this.clientCash = this.clientCash+this.bet+winnings;//new balance = winnings plus original bet plus client balance
            //     console.log("The spin was " + result + ". You win " + winnings);
            // };
        } else { //bet exceeds client balance
            console.log("You do not have enough cash for this bet.");
            console.log("Your bankroll is " + this.clientCash +" and you want to bet "+ this.bet);
        }

    };
    this.buyIn = function (num) {
        console.log("You buy in for " + num);
        this.clientCash = this.clientCash + num;
        return this.clientCash;
    };
}
//test suit
r = new Roulette(100); //new object
r.bankroll();//test the bankroll = expecting 100
r.buyIn(1000);//add 1000
r.bankroll();//expecting bankroll of 200
r.spin(100,00);//expecting to bet 100 on 00, which is same as 0, deduct 100 from balance, and then process depending on win/loose
r.bankroll();
r.spin(44,"Even");//check for even bet
r.bankroll();
r.spin(22,"odd");
r.bankroll();
r.spin(11,"1 to 18");
r.bankroll();
r.spin(22,"19 to 36");
r.bankroll();
r.spin(22,"1st 12");
r.bankroll();
r.spin(22,"2nd 12");
r.bankroll();
r.spin(22,"3rd 12");
r.bankroll();
r.spin(100, 55); //expecting "unexpected input"
r.spin(8000, 2);//expecting not enough cash
