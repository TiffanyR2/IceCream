document.addEventListener("DOMContentLoaded", ()=>{

    submitButton.addEventListener("click", () => {
        const scoops = Number(scoopsElement);
        const cone = coneElement;
        const cup = cupElement;

        const sprinkles = sprinkleElement
        const whipped = whippedElement
        const fudge = hotElement
        const cherry = cherryElement

        let basePrice = 0;
        let tax = 0;
        let total = 0; 

baseElement = 2.25;
if(scoops > 1){
    baseElement += 1.25 (scoops - 1);
}
if(cup){
    baseElement += 0.50
}
if(whipped){
    baseElement += 0.50
}
if(fudge){
    baseElement += 0.50
    if(cherry)
    baseElement += 0.50
}
