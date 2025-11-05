/* Module Integrations */
import './simple-timekeeping/simpletimekeeping-integration.js'
import './tidbits/tidbits-integration.js'

/* Custom UI Alterations */
import './ui/pause.js'

Hooks.on('ready', () => {
  console.log('Dekatreis | The Queen is waiting.')
})
