function Phone(brand, price, color) {

    this.brand = brand;

    this.price = price;

    this.color = color;

}

Phone.prototype.printInfo = function () {

    console.log("the phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("apple", 2250, "silver");
iPhone6S.printInfo();

var galaxyS6 = new Phone("samsung", 1999, "black");
galaxyS6.printInfo();

var onePlusOne = new Phone("One", 250, "pink");
onePlusOne.printInfo();