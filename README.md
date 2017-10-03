# AnimeCons
The purpose of this site is to show the different conventions in Denmark

A quick guide if you need to use the map page locally.

According to this page:
https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key
it says that you have to include the api directly into the script call.
But it is not necessary if you are running it locally.

Then that means you can just write it like this:
<script async defer src="https://maps.googleapis.com/maps/api/js?callback=initMap"></script>

Do this only locally.
If it is online you will get the noapikey error:
https://developers.google.com/maps/documentation/javascript/error-messages#missing-key-map-error

But since the api key is restricted by the HTTP referrers that google has, the api key has been restricted to only be usable on
https://commentatorboy.github.io/AnimeCons/map.html
