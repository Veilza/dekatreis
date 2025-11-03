import { simpleTimekeepingData } from "./simpletimekeeping-data.js"

Hooks.on('ready', () => {
  if (isSimpleTimekeepingEnabled() && game.users.current.isActiveGM) {
    // Set the configuration of Simple Timekeeping on world ready
    const existingData = game.settings.get("simple-timekeeping", "configuration")
    game.settings.set("simple-timekeeping", "configuration", foundry.utils.mergeObject(existingData, simpleTimekeepingData))
  }
})

Hooks.on('updateWorldTime', (worldTime, dt, options, userId) => {
  if (isSimpleTimekeepingEnabled() && game.users.current.isActiveGM) {
    // List of things to update whenever the world time is updated
    updateMoonData()
  }
})

/**
 * Handle updating the moon label and colour
 */
async function updateMoonData () {
  // Get the current in-game hour
  const hour = game.time.components.hour

  // Decide label and color
  let label = ""
  let color = ""

  if (hour >= 0 && hour < 12) {
    if (hour >= 0 && hour < 4) {
      label = "Dawn"
      color = "#CCCCCC"
    } else if (hour >= 4 && hour < 8) {
      label = "Afterdawn"
      color = "#CCCCCC"
    } else {
      label = "Dusk"
      color = "#CCCCCC"
    }
  } else {
    if (hour >= 12 && hour < 16) {
      label = "Silver Moon 🌕"
      color = "#c0c0c0"; // Silver color
    } else if (hour >= 16 && hour < 20) {
      label = "Blue Moon 🔵"
      color = "#0080ff"; // Blue color
    } else {
      label = "Red Moon 🔴"
      color = "#c91d21"; // Red color
    }
  }

  // Set the moon badge in Simple Timekeeping
  if (ui.simpleTimekeeping?.setMoonBadge) {
    ui.simpleTimekeeping.setMoonBadge(label, color)
  } else {
    ui.notifications.error("Simple Timekeeping module not found or no setMoonBadge method.")
  }
}

function isSimpleTimekeepingEnabled () {
  return (game.modules.filter(module => module.id === 'simple-timekeeping').length > 0)
}
