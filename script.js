function downloadVideo() {

    const url = document.getElementById("youtubeUrl").value;
    const format = document.getElementById("format").value;
    const status = document.getElementById("status");

    if (!url) {
        status.innerHTML = "Please enter a YouTube link.";
        return;
    }

    status.innerHTML = "Preparing download...";

    // Şimdilik test sistemi
    // Backend bağlayınca gerçek download olacak

    setTimeout(() => {

        if(format === "mp3"){

            window.open(
                "https://y2mate.nu/en-qdM/",
                "_blank"
            );

        } else {

            window.open(
                "https://ssyoutube.com/",
                "_blank"
            );

        }

        status.innerHTML = "Download page opened.";

    }, 1000);

}
