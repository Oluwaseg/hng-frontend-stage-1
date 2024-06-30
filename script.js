function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().slice(-12, -4);
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("currentTimeUTC").textContent = utcTime;
    document.getElementById("currentDay").textContent = dayOfWeek;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 60000); // Update every minute
