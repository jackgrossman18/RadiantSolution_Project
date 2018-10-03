# Radiant Solutions Project

## NFL Stadiums Map

![Teams Map](https://user-images.githubusercontent.com/25868208/46430371-c26e0c00-c716-11e8-95a4-0649e180c344.png)


### About 

This webmap by default, loads a GeoJSON with a point for each of the 32 teams in the NFL. It also contains a table on the right hand side that is filtered to only show teams that are in the AFC (American Football Conference) one of the two conferences in the National Football League.

This GeoJSON was build using features made available by Leaflet.

### Filter

The three buttons that reside beneath the map allow the user to filter the GeoJSON. Upon clicking a button, the user is capable of filter for just AFC team, just NFC, or all of the teams, respectively. 

Immediately below, you will see a map that is filter to only show AFC teams.


![AFC Map](https://user-images.githubusercontent.com/25868208/46432246-c3ee0300-c71b-11e8-8ad9-1f4167e07f99.png)

### Features Table

On the right hand side of the map there is a table that shows only teams in the AFC, as was required for this coding challenge.

The items are filtered by iterating of the GeoJSON and only placing teams within the table using a conditional that checks whether the team's conference is equal to AFC.

![AFC Table](https://user-images.githubusercontent.com/25868208/46432695-dcaae880-c71c-11e8-8109-1dadedd14b0b.png)


### GeoJSON Feature Details

The map is also capable of producing a popup when the user clicks on one of the feature icons (the football).

Once the user has clicked a feature, the map will display the relevant information for the NFL team that resides at the feature point location.

Immediately below you will see the popup for the Philadelphia Eagles.

![Philadelphia Eagles](https://user-images.githubusercontent.com/25868208/46432494-6b6b3580-c71c-11e8-8b21-e2c2936d91a2.png)
