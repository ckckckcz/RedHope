document.getElementById("link_lokasi").addEventListener("input", function () {
    const url = this.value; // Ambil nilai input
    const mapEmbedContainer = document.getElementById("map_embed");

    // Regex untuk validasi URL Google Maps Embed
    const googleMapsEmbedRegex = /^(https?:\/\/)?(www\.)?(google\.com\/maps\/embed\?pb=.+)$/;

    if (googleMapsEmbedRegex.test(url)) {
        // Jika URL adalah format embed Google Maps, gunakan URL langsung
        mapEmbedContainer.innerHTML = `
            <iframe
                src="${url}"
                width="100%"
                height="400"
                class="rounded-2xl"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `;
    } else {
        // Kosongkan kontainer jika URL tidak valid
        mapEmbedContainer.innerHTML = "URL tidak valid atau tidak dapat digunakan untuk embed.";
    }
});
