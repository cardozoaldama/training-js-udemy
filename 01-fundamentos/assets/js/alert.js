// You could use an alert:

let myAlert = 'Some amazing alert';
alert(myAlert);

let myPrompt = 'Do you have an entry or input?';
prompt(myPrompt);

let myChoice = false;
let myConfirm = 'Are you sure to leave this place?';
myChoice = confirm(myConfirm);
if (myChoice){
    window.close();
} else {
    console.log('We cannot leave!');
}