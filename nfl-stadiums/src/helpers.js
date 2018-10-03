import L from "leaflet";

const football = L.divIcon({
  className: "newHelmet",
  html: `<i style="color:#624a2e" class="fas fa-football-ball aria-hidden="true""></i>`,
  iconAnchor: [0, -5]
});

export function buildPopUpConfig(properties) {
  let popUpConfig = {};
  popUpConfig.HTML = `<h1>${properties.name}</h1>\n
          <p class="popText">Team:</p>\n
          <p class="info">${properties.Team}</p>\n
          <p class="popText">Stadium:</p>\n
          <p class="info">${properties.Stadium}</p>\n
          <p class="popText">Conference:</p>\n
          <p class="info">${properties.Conference}</p>
          <div>`;

  popUpConfig.icon = football;

  return popUpConfig;
}
