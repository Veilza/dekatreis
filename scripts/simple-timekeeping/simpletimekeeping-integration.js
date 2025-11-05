import { simpleTimekeepingData } from './simpletimekeeping-data.js'
import { pSBCHelper } from './psbc-helper.js'

const coreDarknessColour = 2368584
const redMoonColour = '#c91d21'
const silverMoonColour = '#b8b8b8'
const blueMoonColour = '#0080ff'

/**
 * Set up listener hooks
 */
Hooks.on('ready', () => {
  if (isSimpleTimekeepingEnabled() && game.users.current.isActiveGM) {
    // Set the configuration of Simple Timekeeping on world ready
    const existingData = game.settings.get('simple-timekeeping', 'configuration')
    game.settings.set('simple-timekeeping', 'configuration', foundry.utils.mergeObject(existingData, simpleTimekeepingData))
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
  let label = ''
  let color = ''
  let tooltip = ''

  if (hour >= 0 && hour < 12) {
    // Day hours
    if (hour >= 0 && hour < 4) {
      label = 'Dawn'
      color = '#CCCCCC'
    } else if (hour >= 4 && hour < 8) {
      label = 'Afterdawn'
      color = '#CCCCCC'
    } else {
      label = 'Dusk'
      color = '#CCCCCC'
    }
  } else {
    // Night hours
    if (hour >= 12 && hour < 16) {
      // Blue Moon
      const { moonPhaseIcon, moonPhaseTooltip } = getMoonPhaseDetails(0)

      label = `Blue Moon ${moonPhaseIcon}`
      color = blueMoonColour
      tooltip = moonPhaseTooltip
    } else if (hour >= 16 && hour < 20) {
      // Silver Moon
      const { moonPhaseIcon, moonPhaseTooltip } = getMoonPhaseDetails(1)

      label = `Silver Moon ${moonPhaseIcon}`
      color = silverMoonColour
      tooltip = moonPhaseTooltip
    } else {
      // Red Moon
      const { moonPhaseIcon, moonPhaseTooltip } = getMoonPhaseDetails(2)

      label = `Red Moon ${moonPhaseIcon}`
      color = redMoonColour
      tooltip = moonPhaseTooltip
    }
  }

  // Update the moonlight
  setMoonlight(hour)

  // Set the moon badge in Simple Timekeeping
  if (ui.simpleTimekeeping?.setMoonBadge) {
    ui.simpleTimekeeping.setMoonBadge(label, color, tooltip)
  } else {
    ui.notifications.error('Simple Timekeeping module not found or no setMoonBadge method.')
  }
}

function isSimpleTimekeepingEnabled () {
  return (game.modules.filter(module => module.id === 'simple-timekeeping').length > 0)
}

function setMoonlight (currentHour) {
  if (!game.scenes.current) return

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

function getMoonPhaseDetails (moonIndex) {
  const phaseNames = [
      'simple-timekeeping.moonPhase.new',
      'simple-timekeeping.moonPhase.waxingCrescent',
      'simple-timekeeping.moonPhase.firstQuarter',
      'simple-timekeeping.moonPhase.waxingGibbous',
      'simple-timekeeping.moonPhase.full',
      'simple-timekeeping.moonPhase.waningGibbous',
      'simple-timekeeping.moonPhase.lastQuarter',
      'simple-timekeeping.moonPhase.waningCrescent'
  ]

  const MOON_PRESETS = [
    { 'label': 'simple-timekeeping.moonPhase.new', 'color': '#E0E0E0', 'icon': '🌑' },
    { 'label': 'simple-timekeeping.moonPhase.waxingCrescent', 'color': '#F0F0F0', 'icon': '🌒' },
    { 'label': 'simple-timekeeping.moonPhase.firstQuarter', 'color': '#FAFAFA', 'icon': '🌓' },
    { 'label': 'simple-timekeeping.moonPhase.waxingGibbous', 'color': '#FFFFF0', 'icon': '🌔' },
    { 'label': 'simple-timekeeping.moonPhase.full', 'color': '#FFFFCC', 'icon': '🌕' },
    { 'label': 'simple-timekeeping.moonPhase.waningGibbous', 'color': '#FFF8DC', 'icon': '🌖' },
    { 'label': 'simple-timekeeping.moonPhase.lastQuarter', 'color': '#F5F5F5', 'icon': '🌗' },
    { 'label': 'simple-timekeeping.moonPhase.waningCrescent', 'color': '#ECECEC', 'icon': '🌘' },
  ]

  const moon = ui.simpleTimekeeping.moons[moonIndex]

  const daysSinceEpoch = ui.simpleTimekeeping.worldTime / ui.simpleTimekeeping.secondsInDay
  const phaseIndex = Math.floor(((daysSinceEpoch + (moon.offset ?? 0)) % (moon.cycleLength || 30)) / ((moon.cycleLength || 30) / phaseNames.length))

  const moonPhaseIcon = MOON_PRESETS.find(phase => phase.label === phaseNames[phaseIndex])?.icon
  const moonPhaseTooltip = MOON_PRESETS.find(phase => phase.label === phaseNames[phaseIndex])?.label

  return { moonPhaseIcon, moonPhaseTooltip }
}
