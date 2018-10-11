1.  The radio button click handlers are duplicated code and logic; could the actions be broken out into separate functions and re-used?


2.  When the filter changes, it re-downloads the GeoJSON every time instead of storing it in memory //stored


3.  While the instructions says the table should show only AFC teams, it would be nice if it updates with the selection made


4.  The football icons seem to be anchored to the geocoordinates in the upper left, so the further you zoom out there is an offset (lower and to the right) from the true stadium location // done


5.  Commented code is better left out when committing to master // done


6.  A filter function should be used as opposed to a forEach loop // done


7.  What does the App.test.js actually do? // done


8.  Consider changing the code from interacting with the DOM directly // almost