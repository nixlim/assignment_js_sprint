function Roulette(clientCash) {
    this.clientCash = clientCash;//keep this. to keep the changing value in memory
    this.bankroll = function(){
      console.log("Your bankroll is",this.clientCash);
    };
    this.spin = function(betAmount,bet) { //take betAmount on number
        const WHEEL_MIN = 0; //beginning of the wheel
        const WHEEL_MAX = 36;//end of the wheel
        const betTypes = {
          "number": {odds: 35, winCondition: (bet) => result == bet},
          "even": {odds: 1, winCondition: () => result % 2 === 0},
          "odd": {odds: 1, winCondition: () => result % 2 !== 0},
          "1 to 18": {odds: 1, winCondition: () => result >= 1 && result <= 18},//TODO "1_to_18" use a token, process user input into token
          "19 to 36": {odds: 1, winCondition: () => result >= 19},
          "1st 12": {odds: 2, winCondition: () => result >= 1 && result <= 12},
          "2nd 12": {odds: 2, winCondition: () => result > 12 && result <= 24},
          "3rd 12": {odds: 2, winCondition: () => result > 24}
        };
        let winnings = null; //initialise the winnings variable
        let betType = null;

        const result = Math.floor(Math.random() * (WHEEL_MAX - WHEEL_MIN + 1) + WHEEL_MIN);//get a random integer inclusive of both min and max

        const doSpin = (bet, betAmount) => {
            this.clientCash = this.clientCash - betAmount; //deduct betAmount from client balance
            if (betTypes[betType].winCondition(bet)) {
                winnings = betAmount * betTypes[betType].odds;
                console.log("The spin was",result + ". You betAmount on", bet,"You win",winnings);
            } else {
                console.log("The spin was", result + ". You loose.");
            };
        };



        console.log("You want to bet " + betAmount + " on '"+ bet + "'. Your bankroll is " + this.clientCash);
        
        if (betAmount > this.clientCash) { //check that betAmount is not larger than bankroll
            console.log("You do not have enough cash for this betAmount.");
            console.log("Your bankroll is " + this.clientCash +" and you want to betAmount "+ betAmount);
            return;
        }
        
        if (typeof bet == "number") {//determine whether the bet is a number or not (string)
            if (bet > WHEEL_MIN || bet > WHEEL_MAX){//if number, determine if it is within range
                console.log("Bet number outside range.")
                return;
            };
            betType = "number"; //valid number, set type to number
            doSpin(bet, betAmount);

        } else {
            if (!(bet.toLowerCase() in betTypes)){//input is string, check if its a valid string
                console.log("Unexpected input in the spin command.")
                return;
            };
            betType = bet.toLowerCase();//valid string, set betType to string
            doSpin(bet, betAmount);
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
r.spin(100,00);//expecting to betAmount 100 on 00, which is same as 0, deduct 100 from balance, and then process depending on win/loose
r.bankroll();
r.spin(44,"Even");//check for even betAmount
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
r.spin(22,"4rd 12");
r.bankroll();
r.spin(100, 55); //expecting "unexpected input"
r.spin(8000, 2);//expecting not enough cash
