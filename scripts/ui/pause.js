Hooks.on('renderGamePause', renderGamePause)

function renderGamePause (app, context, options) {
  const img = app.element.querySelector('img')
  img.src = 'modules/dekatreis/assets/images/pause.webp'

  const div = document.createElement('div')
  div.id = 'pause-logo'
  app.element.prepend(div)
  div.append(img)
}
