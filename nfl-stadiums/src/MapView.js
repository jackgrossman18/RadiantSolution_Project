import React, { Component } from "react";
import L from "leaflet";

// GeoJson object array of NFL Football teams
const NFL =
  "https://gist.githubusercontent.com/brianhatchl/59d99872a9cfc0e126211192673991b8/raw/bf706c06ef41f05a35b1bd730639eed54cc7af27/stadiums.json";

class MapView extends Component {
  componentDidMount() {
    // iterate over geojson, pull important values to populate table
    window.onload = function() {
      document.getElementById("teams").innerHTML =
        "<tr><th>Team Name</th><th>Conference</th>";
      fetch(NFL)
        .then(res => res.json())
        .then(table =>
          table.features.forEach(function(entry) {
            // filter table to only show AFC teams
            {
              {
                if (entry.properties.Conference === "AFC") {
                  document.getElementById("teams").innerHTML +=
                    '<tr className="border"><td className="border">' +
                    entry.properties.Team +
                    "</td><td>" +
                    entry.properties.Conference +
                    "</td></tr>";
                }
              }
            }
          })
        );
    };

    // custom stying for Leaflet popup items
    function buildPopUpConfig(properties) {
      let popUpConfig = {};

      popUpConfig.HTML = `<h1>${properties.Team}</h1>\n
              <p class="popText">Stadium:</p>\n
              <p class="info">${properties.Stadium}</p>\n
              <p class="popText">Conference:</p>\n
              <p class="info">${properties.Conference} </p>
              <div>`;
      popUpConfig.icon = myIcon;

      return popUpConfig;
    }

    // gather external geojson, prepare it to be used on map
    var nflData = fetch(NFL)
      .then(res => res.json())
      .then(function(data) {
        var nfl_data;
        nfl_data = L.geoJson(null, {
          pointToLayer: function(feature, latlng) {
            // use custom stying prepared starting at line 36
            var markerConfig = buildPopUpConfig(feature.properties);
            return L.marker(latlng, { icon: myIcon })
              .bindPopup(markerConfig.HTML)
              .openPopup();
          },
          filter: function(feature, layer) {
            // assure layer will show both NFC and AFC teams, this is the defaul layer
            return (
              feature.properties.Conference === "NFC" ||
              feature.properties.Conference === "AFC"
            );
          }
        });
        var nflData = fetch(NFL)
          .then(res => res.json())
          .then(function(data) {
            nfl_data.addData(data.features);
          });

        var myData = L.layerGroup([]);
        myData.addLayer(nfl_data);
        myData.addTo(map);

        // Set up event listener triggering event to show only AFC Teams
        document
          .getElementById("radioOne")
          .addEventListener("click", function(event) {
            console.log("some afc stuff");

            myData.clearLayers();
            map.removeLayer(myData);

            nfl_data = L.geoJson(null, {
              pointToLayer: function(feature, latlng) {
                var markerConfig = buildPopUpConfig(feature.properties);
                return L.marker(latlng, { icon: myIcon })
                  .bindPopup(markerConfig.HTML)
                  .openPopup();
              },
              filter: function(feature, layer) {
                // assure layer will ONLY show AFC teams
                return feature.properties.Conference === "AFC";
              }
            });

            var afcData = fetch(NFL)
              .then(res => res.json())
              .then(function(data) {
                nfl_data.addData(data.features);
              });

            myData.addLayer(nfl_data);
            myData.addTo(map);
          });

        // Set up event listener to add all teams back to map

        document
          .getElementById("radioTwo")
          .addEventListener("click", function(event) {
            console.log("all the teams again");

            myData.clearLayers();
            map.removeLayer(myData);

            nfl_data = L.geoJson(null, {
              pointToLayer: function(feature, latlng) {
                var markerConfig = buildPopUpConfig(feature.properties);
                return L.marker(latlng, { icon: myIcon })
                  .bindPopup(markerConfig.HTML)
                  .openPopup();
              },
              filter: function(feature, layer) {
                // assure layer will show BOTH AFC and NFC teams
                return (
                  feature.properties.Conference === "AFC" ||
                  feature.properties.Conference === "NFC"
                );
              }
            });

            var nflData = fetch(NFL)
              .then(res => res.json())
              .then(function(data) {
                nfl_data.addData(data.features);
              });

            myData.addLayer(nfl_data);
            myData.addTo(map);
          });

        document
          .getElementById("radioThree")
          .addEventListener("click", function(event) {
            console.log("all the teams again");

            myData.clearLayers();
            map.removeLayer(myData);

            nfl_data = L.geoJson(null, {
              pointToLayer: function(feature, latlng) {
                var markerConfig = buildPopUpConfig(feature.properties);
                return L.marker(latlng, { icon: myIcon })
                  .bindPopup(markerConfig.HTML)
                  .openPopup();
              },

              filter: function(feature, layer) {
                // assure layer will ONLY show NFC teams
                return feature.properties.Conference === "NFC";
              }
            });

            var nfcData = fetch(NFL)
              .then(res => res.json())
              .then(function(data) {
                nfl_data.addData(data.features);
                // nfl_data.addData(data.features);
              });

            myData.addLayer(nfl_data);
            myData.addTo(map);
          });
      });
    // style custom football map icon
    var myIcon = L.divIcon({
      html: `<i style="color:#624a2e" class="fas fa-football-ball fa-10 aria-hidden="true""></i>`,
      className: "my-div-icon",
      iconAnchor: [0, 0]
    });

    var osmUrl = "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      osmAttrib =
        '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        minZoom: 1,
        attribution: osmAttrib
      });

    // initialize the map on the "map" div with a given center and zoom
    var map = L.map("map", {
      zoomControl: false
    })
      // fit bounds of contiguous USA
      .fitBounds([[18.9, -69], [47.0, -117.3]])
      .addLayer(osm);
  }
  render() {
    return (
      <div>
        <div className="container">
          <div id="map" />
          <table className="table table-hover" id="teams">
            <tr>
              <th className="border">Team Name</th>
              <th className="border">Conference</th>
            </tr>
          </table>
        </div>
        <div id="panel">
          <form>
            <label>
              <input type="radio" id="radioOne" name="AFC" value="N" checked />{" "}
              Select AFC Teams
              <img src="https://mbtskoudsalg.com/images/nfc-nfl-logo-png-8.png" />
            </label>
            <br />
            <label>
              <input
                type="radio"
                id="radioThree"
                name="NFC"
                value="N"
                checked
              />{" "}
              Select NFC Teams
              <img src="https://mbtskoudsalg.com/images/nfc-nfl-logo-png-2.png" />
            </label>
            <br />
            <label className="NFL" for="radioTwo">
              <input type="radio" id="radioTwo" name="ALLNFL" value="Y" />
              Select All Teams
              <img src="https://mbtskoudsalg.com/images/nfl-icons-png-1.png" />
            </label>{" "}
            <div class="box green" />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default MapView;
