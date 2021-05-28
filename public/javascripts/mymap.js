var mymap = L.map('mapid').setView([-11.839440, -77.154827], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2ViYXN0aWFuMTRnZyIsImEiOiJja3A1bnVhOG8wbTkwMm9vd3ZiaXB0ZnNvIn0.-12aA_BChskD82EqfzkeYw'
}).addTo(mymap);
