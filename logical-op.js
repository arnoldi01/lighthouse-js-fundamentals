var isCitizen =false;
var age =15 ;

if (isCitizen && age<18) {
    console.log("You are not eligible to vote.");
}
else if (isCitizen && age >=18) {
    console.log("You are eligible to vote.");
}

else if (!isCitizen  || age <18) {
    console.log("You are not a citizen of the country or you are a minoren ");

}