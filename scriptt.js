document.addEventListener("DOMContentLoaded", function () {
    // Cakto një kohë fillestare
    const startTime = new Date().getTime();
  
    // Përdor setTimeout për të azhurnuar kohën çdo sekondë
    setTimeout(function updateDuration() {
      const currentTime = new Date().getTime();
      const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
  
      // Shfaq kohën e qëndrimit
      const timeElapsedElement = document.getElementById("timeElapsed");
      timeElapsedElement.textContent = `${elapsedSeconds} seconds`;
  
      // Rifresko kohën çdo sekondë
      setTimeout(updateDuration, 1000);
    }, 1000);
  });
  