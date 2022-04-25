window.addEventListener("load",function() {

/*     function hideTooltip(evt) {
        const tooltip = document.getElementById('tooltip'); //element tooltip
        tooltip.setAttribute("visibility", "hidden");
    } */

    function showTooltip(evt) {
        const tooltip = document.getElementById('tooltip'); //element tooltip
        tooltip.textContent = evt.target.dataset.displayname;

    }


    var svgObject = document.getElementById('svg-map').contentDocument; //id del archivo html
    var mapSvg = svgObject.getElementById('svg-swiss'); // id del archivo svg
   // var parentDOM = svgObject.getElementById('layer1');

    const parentDOM = svgObject.getElementById('layer1');
    const elementCantones = svgObject.getElementById('Cantones');

    for (let i = 0; i < elementCantones.children.length; i++) {
        const canton = elementCantones.children[i];
        console.log(canton.id); // mostrando Id
        canton.addEventListener("mousemove", showTooltip);
        

      }








/* const svg = document.getElementById('svg-swiss'); // tal vez no es  necesario volver a cargarlo

function showTooltip(evt) {
    var CTM = svg.getScreenCTM();
    var mouseX = (evt.clientX - CTM.e) / CTM.a;
    var mouseY = (evt.clientY - CTM.f) / CTM.d;
    tooltip.setAttribute("x", mouseX + 6 / CTM.a);
    tooltip.setAttribute("y", mouseY + 20 / CTM.d);
    tooltip.setAttribute("visibility", "visible");
    tooltip.firstChild.data = evt.target.getAttribute("data-tooltip-text");
}
function hideTooltip(evt) {
    tooltip.setAttribute("visibility", "hidden");
}
var triggers = document.getElementsByClassName('tooltip-trigger');
for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('mousemove', showTooltip);
    triggers[i].addEventListener('mouseout', hideTooltip);
} */
    
});



// #a1c518 frances
//#dc5f39 aleman
// #1488c9 italiano