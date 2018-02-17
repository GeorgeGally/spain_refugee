var stats = new Stats();
var stats_container = document.getElementById('stats_holder');
stats_container.appendChild( stats.domElement );
stats.domElement.style.position = 'absolute';
stats.domElement.style.zIndex = 999;
stats.domElement.style.top = '0px';
if (showStats == false) $(stats_container).toggleClass('none');
