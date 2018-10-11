import React, { Component } from "react";
import L from "leaflet";
import "./App.css";

const NFL =
  "https://gist.githubusercontent.com/brianhatchl/59d99872a9cfc0e126211192673991b8/raw/bf706c06ef41f05a35b1bd730639eed54cc7af27/stadiums.json";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nfc: [],
      afc: [],
      theNfl: []
    };
  }

  componentDidMount() {
    var getThis = () => this;
    var teamsData = () =>
      fetch(NFL)
        .then(res => res.json())
        .then(res =>
          this.setState({
            theNfl: res.features,
            nfc: res.features,
            afc: res.features
          })
        );
    teamsData();
    function buildPopUpConfig(properties) {
      let popUpConfig = {};

      popUpConfig.HTML = `<h1>${properties.Team}</h1>\n
              <p class="popText">Stadium:</p>\n
              <p class="info">${properties.Stadium}</p>\n
              <p class="popText">Conference:</p>\n
              <p class="info">${properties.Conference} </p>
              `;
      popUpConfig.icon = myIcon;

      return popUpConfig;
    }

    teamsData().then(function(data) {
      var nfl_data = getThis().state.theNfl;
      nfl_data = L.geoJson(null, {
        pointToLayer: function(feature, latlng) {
          var markerConfig = buildPopUpConfig(feature.properties);
          return L.marker(latlng, { icon: myIcon })
            .bindPopup(markerConfig.HTML)
            .openPopup();
        }
      });
      nfl_data.on("click", function(event) {
        getThis().map.setView(event.latlng, 15);
      });

      teamsData().then(res => {
        nfl_data.addData(getThis().state.theNfl);
      });

      var myData = L.layerGroup([]);
      myData.addLayer(nfl_data);
      myData.addTo(getThis().map);

      var radioOne = document.getElementById("radioOne");
      var radioTwo = document.getElementById("radioTwo");
      var radioThree = document.getElementById("radioThree");

      radioOne.addEventListener("click", addNFC);
      radioTwo.addEventListener("click", addNFC);
      radioThree.addEventListener("click", addNFC);

      function addNFC(event) {
        myData.clearLayers();
        getThis().map.removeLayer(myData);

        nfl_data = L.geoJson(null, {
          pointToLayer: function(feature, latlng) {
            var markerConfig = buildPopUpConfig(feature.properties);
            return L.marker(latlng, { icon: myIcon })
              .bindPopup(markerConfig.HTML)
              .openPopup();
          },

          filter: function(feature, layer) {
            if (event.target.value === "NFC") {
              let nfcState = Object.assign({}, this.state);
              nfcState = getThis().state.theNfl.filter(
                conf => conf.properties.Conference === "NFC"
              );
              getThis().setState({ theNfl: nfcState });
              return feature.properties.Conference === "NFC";
            } else if (event.target.value === "AFC") {
              let afcState = Object.assign({}, this.state);
              afcState = getThis().state.theNfl.filter(
                conf => conf.properties.Conference === "AFC"
              );
              getThis().setState({ theNfl: afcState });
              return feature.properties.Conference === "AFC";
            } else {
              return (
                feature.properties.Conference === "AFC" ||
                feature.properties.Conference === "NFC"
              );
            }
          }
        });
        nfl_data.on("click", function(event) {
          getThis().map.setView(event.latlng, 15);
        });

        teamsData().then(res => {
          nfl_data.addData(getThis().state.theNfl);
        });

        myData.addLayer(nfl_data);
        myData.addTo(getThis().map);
      }
    });
    var myIcon = L.divIcon({
      html: `<i style="color:#624a2e" class="fas fa-football-ball fa-10 aria-hidden="true""></i>`,
      className: "my-div-icon"
    });

    var osmUrl = "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      osmAttrib =
        '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        minZoom: 1,
        attribution: osmAttrib
      });

    this.map = L.map("map", {
      layers: [osm]
    }).fitBounds([[18.9, -78], [46.0, -117.3]]);
    this.map.on("click", function(event) {
      getThis().map.fitBounds([[18.9, -78], [46.0, -117.3]]);
    });
  }

  render() {
    console.log(this.state.theNfl);
    return (
      <div>
        <div className="container">
          <div id="map" />
          <table className="table table-hover" id="teams">
            <th className="teamColumn">Team Name</th>

            {this.state.theNfl.map(function(team) {
              {
                {
                  if (team.properties.Conference === "AFC") {
                    return (
                      <tr className="teamColumn" key={team.properties}>
                        <td className="border">{team.properties.Team}</td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr className="teamColumn" key={team.properties}>
                        <td className="border">{team.properties.Team}</td>
                      </tr>
                    );
                  }
                }
              }
            })}
          </table>
          <table className="table table-hover" id="teams">
            <th className="conferenceColumn">Conference</th>
            {this.state.theNfl.map(function(team) {
              {
                {
                  if (team.properties.Conference === "AFC") {
                    return (
                      <tr className="teamColumn" key={team.properties}>
                        <td className="border">{team.properties.Conference}</td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr className="conferenceColumn" key={team.properties}>
                        <td className="border">{team.properties.Conference}</td>
                      </tr>
                    );
                  }
                }
              }
            })}
          </table>
        </div>
        <div id="panel">
          <form>
            <label>
              <input
                type="radio"
                id="radioOne"
                name="AFC"
                value="AFC"
                checked
              />{" "}
              Select AFC Teams
              <img src="https://mbtskoudsalg.com/images/nfc-nfl-logo-png-8.png" />
            </label>
            <br />
            <label>
              <input
                type="radio"
                id="radioThree"
                name="NFC"
                value="NFC"
                checked
              />{" "}
              Select NFC Teams
              <img src="https://mbtskoudsalg.com/images/nfc-nfl-logo-png-2.png" />
            </label>
            <br />
            <label className="NFL" for="radioTwo">
              <input
                type="radio"
                id="radioTwo"
                name="ALLNFL"
                value="NFL"
                checked
              />
              Select All Teams
              <img src="https://mbtskoudsalg.com/images/nfl-icons-png-1.png" />
            </label>{" "}
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default MapView;
