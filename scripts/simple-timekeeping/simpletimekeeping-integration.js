import { simpleTimekeepingData } from "./simpletimekeeping-data.js"
import { pSBCHelper } from "./psbc-helper.js"

const coreDarknessColour = 2368584;
const redMoonColour = "#c91d21";
const silverMoonColour = "#b8b8b8";
const blueMoonColour = "#0080ff";

/**
 * Set up listener hooks
 */
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
    // Day hours
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
    // Night hours
    if (hour >= 12 && hour < 16) {
      label = "Blue Moon 🔵"
      color = blueMoonColour // Blue color
    } else if (hour >= 16 && hour < 20) {
      label = "Silver Moon 🌕"
      color = silverMoonColour // Silver color
    } else {
      label = "Red Moon 🔴"
      color = redMoonColour // Red color
    }
  }

  // Update the moonlight
  setMoonlight(hour)

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

function setMoonlight (currentHour) {
  // Set the global Darkness color to the color of the current moon, depending on the time.
  if (currentHour >= 20) {
    // Shift to red moon
    const darknessColorFromRedMoon = pSBCHelper.RGBtoPSBC(-0.9, redMoonColour)

    // We don't need to update anything if these are the same
    if (CONFIG.Canvas.darknessColor === darknessColorFromRedMoon) return

    CONFIG.Canvas.darknessColor = darknessColorFromRedMoon
    canvas.environment.initialize()
  } else if (currentHour >= 16) {
    // Shift to silver moon
    const darknessColorFromSilverMoon = pSBCHelper.RGBtoPSBC(-0.9, silverMoonColour)

    // We don't need to update anything if these are the same
    if (CONFIG.Canvas.darknessColor === darknessColorFromSilverMoon) return

    CONFIG.Canvas.darknessColor = darknessColorFromSilverMoon
    canvas.environment.initialize()
  } else if (currentHour >= 12) {
    // Shift to blue moon
    const darknessColorFromBlueMoon = pSBCHelper.RGBtoPSBC(-0.9, blueMoonColour)

    // We don't need to update anything if these are the same
    if (CONFIG.Canvas.darknessColor === darknessColorFromBlueMoon) return

    CONFIG.Canvas.darknessColor = darknessColorFromBlueMoon
    canvas.environment.initialize()
  } else {
    if (CONFIG.Canvas.darknessColor === coreDarknessColour) return

    // We don't need to update anything if these are the same
    CONFIG.Canvas.darknessColor = coreDarknessColour
    canvas.environment.initialize()
  }
}
