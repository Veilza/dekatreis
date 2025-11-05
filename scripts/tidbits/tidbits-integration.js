Hooks.on('ready', () => {
  if (isTidbitsEnabled() && game.users.current.isActiveGM) {
    /**
     * Register custom Tidbits settings
     */
    game.settings.set('tidbits', 'showChatMessage', false)
    game.settings.set('tidbits', 'showLoadingScreen', false)
    game.settings.set('tidbits', 'useDefaultSources', false)
    game.settings.set('tidbits', 'customSource', 'modules/dekatreis/assets/dekatreis-tidbits.json')
  }
})

function isTidbitsEnabled () {
  return (game.modules.filter(module => module.id === 'tidbits').length > 0)
}
