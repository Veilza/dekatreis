/* World Alterations */
import './world/world.js'

/* Custom UI Alterations */
import './ui/pause.js'

/* Module Integrations */
import './simple-timekeeping/simpletimekeeping-integration.js'
import './tidbits/tidbits-integration.js'

Hooks.on('ready', () => {
  console.log('Dekatreis | The Queen is waiting.')
})
