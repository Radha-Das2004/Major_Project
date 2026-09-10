document.addEventListener("DOMContentLoaded", function () {
    const latLng = [coordinates[1], coordinates[0]];

    // Zoom level 12 city + local area view ke liye best balance deta hai
    const map = L.map('map', { attributionControl: false }).setView(latLng, 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    // 1. Surrounding Booking Zone (Semi-transparent circle)
    L.circle(latLng, {
        color: '#ff385c',
        fillColor: '#ff385c',
        fillOpacity: 0.12,
        weight: 1.5,
        radius: 1200
    }).addTo(map);


    const custom3DIcon = L.divIcon({
        html: '<div class="my-pin"><i class="fa-solid fa-house-chimney"></i></div>',
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
    });

    // 3. Clean Styled Popup
    L.marker(latLng, { icon: custom3DIcon })
        .addTo(map)
        .bindPopup(`
            <div style="font-family: inherit; padding: 2px;">
                <h6 style="margin: 0 0 4px 0; font-weight: 700; color: #222222; font-size: 14px;">${listingTitle}</h6>
                <p style="margin: 0; color: #717171; font-size: 12px;">Exact location provided after booking!</p>
            </div>
        `, { offset: [0, -4] })
        .openPopup();
});