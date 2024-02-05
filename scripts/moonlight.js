import { Helpers } from './helpers.js'

const coreDarknessColour = 2368584;

const redMoonColour = "#c91d21";
const silverMoonColour = "#b8b8b8";
const blueMoonColour = "#0080ff";

Hooks.on('init', () => {
    Hooks.on('simple-calendar-date-time-change', (CurrentTimeData) => {
        setMoonlight()
    })

    Hooks.on(SimpleCalendar.Hooks.Ready, () => {
        setMoonlight()
    })
})

function setMoonlight() {
    const currentCalendar = SimpleCalendar.api.getCurrentCalendar()

    if(SimpleCalendar.api.isPrimaryGM() && currentCalendar.id === "dekatreis"){
        const currentHour = Math.floor((currentCalendar.currentDate.seconds / 60)/60)

        // Set the global Darkness color to the color of the current moon, depending on the time.
        if (currentHour >= 20) {
            // Shift to red moon
            const darknessColorFromRedMoon = Helpers.pSBC(-0.9, redMoonColour)

            // We don't need to update anything if these are the same
            if (CONFIG.Canvas.darknessColor === darknessColorFromRedMoon) return

            CONFIG.Canvas.darknessColor = darknessColorFromRedMoon
            canvas.colorManager.initialize()
        } else if (currentHour >= 16) {
            // Shift to silver moon
            const darknessColorFromSilverMoon = Helpers.pSBC(-0.9, silverMoonColour)

            // We don't need to update anything if these are the same
            if (CONFIG.Canvas.darknessColor === darknessColorFromSilverMoon) return

            CONFIG.Canvas.darknessColor = darknessColorFromSilverMoon
            canvas.colorManager.initialize()
        } else if (currentHour >= 12) {
            // Shift to blue moon
            const darknessColorFromBlueMoon = Helpers.pSBC(-0.9, blueMoonColour)

            // We don't need to update anything if these are the same
            if (CONFIG.Canvas.darknessColor === darknessColorFromBlueMoon) return

            CONFIG.Canvas.darknessColor = darknessColorFromBlueMoon
            canvas.colorManager.initialize()
        } else {
            if (CONFIG.Canvas.darknessColor === coreDarknessColour) return

            // We don't need to update anything if these are the same
            CONFIG.Canvas.darknessColor = coreDarknessColour
            canvas.colorManager.initialize()
        }
    }
}