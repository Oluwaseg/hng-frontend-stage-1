function updateTimeAndDay() {
  const now = new Date();
  const isoString = now.toISOString();
  const utcTime = isoString.slice(11, 19);
  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

  document.getElementById("currentTimeUTC").textContent = utcTime;
  document.getElementById("currentDay").textContent = dayOfWeek;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 60000);
