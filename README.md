# Radiant Solutions Project

## NFL Stadiums Map

![Teams Map](https://user-images.githubusercontent.com/25868208/46871910-a5b19280-ce00-11e8-8514-f49f39a0c704.png)
![Conference Buttons](https://user-images.githubusercontent.com/25868208/46871998-ea3d2e00-ce00-11e8-9070-daa26a6aa850.png)


### About 

This webmap by default, loads a GeoJSON with a point for each of the 32 teams in the NFL. It also contains a table on the right hand side that by default loads all NFL teams. If the user clicks on any of the buttons at the bottom of the page, the table will be filtered based upon the button that is clicked.(AFC, NFC or all of the NFL teams)

This GeoJSON was built using features made available by Leaflet.

### Filter

The three buttons that reside beneath the map allow the user to filter the GeoJSON. Upon clicking a button, the user is capable of filtering for just AFC team, just NFC, or all NFL teams. 

Immediately below, you will see a map that is filtered to only show AFC teams.


![AFC Map](https://user-images.githubusercontent.com/25868208/46872035-10fb6480-ce01-11e8-9b1a-d7cb02255c63.png)

Here you will see the map with just NFC teams.

![NFC Map](https://user-images.githubusercontent.com/25868208/46872110-47d17a80-ce01-11e8-98cb-a132c322c447.png)


### Features Table

On the right hand side of the map there is a table that uses the current state to render whichever tems are part of the active state.

The items are filtered by iterating of the GeoJSON. A conditional is used to check the teams conference key value. The app is constructed to use the value assigned to the button clicked, AFC, NFC or NFL to guide the conditional to set the state.

![AFC Table](https://user-images.githubusercontent.com/25868208/46432695-dcaae880-c71c-11e8-8109-1dadedd14b0b.png)


### GeoJSON Feature Details

The map is also capable of producing a popup when the user clicks on one of the feature icons (the football).

Once the user has clicked a feature, the map will display the relevant information for the NFL team that resides at the feature point location.

Once the map has zoomed to the location of that team's stadium, if the user clicks anywhere on the map other than on the icon, the map will return to the original bounds.

Immediately below you will see the popup for the Philadelphia Eagles.

![Philadelphia Eagles](https://user-images.githubusercontent.com/25868208/46872568-7c920180-ce02-11e8-8aa8-a8db8d881810.png)
