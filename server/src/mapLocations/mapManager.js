
import maplibregl from 'maplibre-gl'; 

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-74.5, 40], 
    zoom: 9 
});

export default map 