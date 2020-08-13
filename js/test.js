var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

function getFireballSpeed(left) {
    return left ? 5 : 2;
}
function getWizardHeight(){
    return 1.37 * wizardWidth;
}
function getWizardX(width) {
    return  width/2 - 35;
}
function getWizardY(height) {
    return height/3;
}
