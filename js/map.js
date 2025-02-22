var map = null;
function LoadMap() {
  if (map != null) {
    map.remove();
  }

  map = L.map("map").setView([-34.894515, -56.15282], 5);
  // [LAT, LONG]
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    minZoom: 1,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  /*var marker = L.marker([-33, -56])
    .addTo(map)
    .bindPopup("<b>Estadio Centenario</b><br>Capacidad: 50000");
  
  */  /*var circle = L.circle([-34.894515, -56.15282], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.3,
    radius: 100,
  }).addTo(map);*/
}
