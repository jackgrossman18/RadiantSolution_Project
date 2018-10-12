# Radiant Solutions Project

## NFL Stadiums Map

![Teams Map](https://user-images.githubusercontent.com/25868208/46871910-a5b19280-ce00-11e8-8514-f49f39a0c704.png)
![Conference Buttons](https://user-images.githubusercontent.com/25868208/46871910-a5b19280-ce00-11e8-8514-f49f39a0c704.png)


### About 

This webmap by default, loads a GeoJSON with a point for each of the 32 teams in the NFL. It also contains a table on the right hand side that is filtered to only show teams that are in the AFC (American Football Conference) one of the two conferences in the National Football League.

This GeoJSON was built using features made available by Leaflet.

### Filter

The three buttons that reside beneath the map allow the user to filter the GeoJSON. Upon clicking a button, the user is capable of filtering for just AFC team, just NFC, or all NFL teams. 

Immediately below, you will see a map that is filtered to only show AFC teams.


![AFC Map](https://user-images.githubusercontent.com/25868208/46432246-c3ee0300-c71b-11e8-8ad9-1f4167e07f99.png)

### Features Table

On the right hand side of the map there is a table that shows only teams in the AFC, as was required for this coding challenge.

The items are filtered by iterating of the GeoJSON. The conditional is used to check the teams conference, if that team is in the AFC, they are placed into the table. 

![AFC Table](https://user-images.githubusercontent.com/25868208/46432695-dcaae880-c71c-11e8-8109-1dadedd14b0b.png)


### GeoJSON Feature Details

The map is also capable of producing a popup when the user clicks on one of the feature icons (the football).

Once the user has clicked a feature, the map will display the relevant information for the NFL team that resides at the feature point location.

Immediately below you will see the popup for the Philadelphia Eagles.

![Philadelphia Eagles](https://user-images.githubusercontent.com/25868208/46432494-6b6b3580-c71c-11e8-8b21-e2c2936d91a2.png)
