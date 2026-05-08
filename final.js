// Select Elements
const startBtn = document.querySelector(".start");

const downloadValue = document.getElementById("download");
const uploadValue = document.getElementById("upload");
const pingValue = document.getElementById("ping");

// Start Button Click
startBtn.addEventListener("click", startTest);

function startTest() {

    // Reset Values
    downloadValue.innerText = "0 Mbps";
    uploadValue.innerText = "0 Mbps";
    pingValue.innerText = "0 ms";

    // Disable Button While Testing
    startBtn.disabled = true;
    startBtn.innerText = "Testing...";

    // Random Ping
    let ping = Math.floor(Math.random() * 40) + 10;

    setTimeout(() => {
        pingValue.innerText = ping + " ms";

        // Download Speed Animation
        let downloadSpeed = 0;

        let downloadInterval = setInterval(() => {

            downloadSpeed += Math.floor(Math.random() * 10);

            downloadValue.innerText = downloadSpeed + " Mbps";

            if (downloadSpeed >= 100) {
                clearInterval(downloadInterval);

                // Upload Speed Animation
                let uploadSpeed = 0;

                let uploadInterval = setInterval(() => {

                    uploadSpeed += Math.floor(Math.random() * 5);

                    uploadValue.innerText = uploadSpeed + " Mbps";

                    if (uploadSpeed >= 50) {
                        clearInterval(uploadInterval);

                        // Enable Button Again
                        startBtn.disabled = false;
                        startBtn.innerText = "Start Test";
                    }

                }, 120);

            }

        }, 100);

    }, 1000);
}
