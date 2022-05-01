window.addEventListener("load", function () {
    // Load data
    fetch("universidades.json")
        .then((response) => {
            // initialize script with universities
            response.json().then((universidades) => { init_map(universidades); });
        });

    function init_map(universidades) {

        /*     function hideTooltip(evt) {
                const tooltip = document.getElementById('tooltip'); //element tooltip
                tooltip.setAttribute("visibility", "hidden");
            } */

        function showTooltip(evt) {
            const tooltip = document.getElementById('tooltip'); //element tooltip
            // remover tooltip anterior
            while (tooltip.firstChild){
                tooltip.removeChild(tooltip.firstChild);
            }
            // se agregan tablas
            const table = document.createElement('table');
            table.classList.add('lista');
            table.id = 'tooltip-universidades';
            // se crea el header de la tabla
            const trHeader = document.createElement('tr');
            table.appendChild(trHeader);

            const headerTitles = ['Universidad', 'Ciudad', 'Canton', 'Idioma', 'Url'];
            headerTitles.forEach((headerTitle) => {
                const th = document.createElement('th');
                const nombreUniversidad = document.createTextNode(headerTitle);
                th.appendChild(nombreUniversidad);
                trHeader.appendChild(th);
            });

            // Add data of the universities of the canton
            const cantonIdentifier = evt.target.dataset.identifier; // 2 letter canton abreviation, ie zh for Zürich
            // tooltip.textContent = JSON.stringify(universidades[cantonIdentifier]);
            const universidadesPorCanton = universidades[cantonIdentifier];
            universidadesPorCanton.forEach((universidad) => {
                const trUniversidad = document.createElement('tr');
                table.appendChild(trUniversidad);

                const tdNombre = document.createElement('td');
                const nombreUniversidad = document.createTextNode(universidad.nombre);
                tdNombre.appendChild(nombreUniversidad);
                trUniversidad.appendChild(tdNombre);

                const tdCiudad = document.createElement('td');
                const nombreCiudad = document.createTextNode(universidad.ciudad);
                tdCiudad.appendChild(nombreCiudad);
                trUniversidad.appendChild(tdCiudad);

                const tdCanton = document.createElement('td');
                const nombreCanton = document.createTextNode(universidad.canton);
                tdCanton.appendChild(nombreCanton);
                trUniversidad.appendChild(tdCanton);

                const tdIdioma = document.createElement('td');
                const nombreIdioma = document.createTextNode(universidad.idioma);
                tdIdioma.appendChild(nombreIdioma);
                trUniversidad.appendChild(tdIdioma);

                const tdUrl = document.createElement('td');
                const nombreUrl = document.createTextNode(universidad.url);
                tdUrl.appendChild(nombreUrl);
                trUniversidad.appendChild(tdUrl);
            });

            // Add table to the tooltip div (Display on the page)
            tooltip.appendChild(table);
            //
            /*
            <tr>
                <td id="col-nombre-universidad">ETH</td>
                <td id="col-ciudad">Zurich</td>
                <td id="col-canton">Zurich</td>
                <td id="col-idioma">Aleman</td>
                <td id="col-url">wwww</td>
            </tr>
            </table>
            */

        }


        var svgObject = document.getElementById('svg-map').contentDocument; //id del archivo html
        var mapSvg = svgObject.getElementById('svg-swiss'); // id del archivo svg
        // var parentDOM = svgObject.getElementById('layer1');

        const parentDOM = svgObject.getElementById('layer1');
        const elementCantones = svgObject.getElementById('Cantones');

        for (let i = 0; i < elementCantones.children.length; i++) {
            const canton = elementCantones.children[i];
            console.log(canton.id); // mostrando Id
            canton.addEventListener("mousedown", showTooltip);


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
    }
});




// #a1c518 frances
//#dc5f39 aleman
// #1488c9 italiano