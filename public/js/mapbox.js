export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2xsYWt5eiIsImEiOiJja2JyeHF4eDUzMHVmMnJsOTd1NDJreDY1In0.f1cV5HXmjkWBFupab5TOkA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/cllakyz/ckbrxvyi71jon1imzee231l1d',
        scrollZoom: false
        /*center: [-118.113491, 34.111745],
        zoom: 10,
        interactive: false*/
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';

        // Create Popup
        const popup = new mapboxgl
            .Popup({
                offset: 30
            })
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`);

        // Add marker
        new mapboxgl
            .Marker({
                element: el,
                anchor: 'bottom'
            })
            .setLngLat(loc.coordinates)
            .setPopup(popup)
            .addTo(map);
        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};