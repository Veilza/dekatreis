Hooks.once('init', registerWorldSettings)

function registerWorldSettings () {
  const cfg = foundry.applications.apps.DocumentSheetConfig

  // Adventure
  cfg.registerSheet(Adventure, 'dekatreis', DekatreisAdventureImporter, {
    makeDefault: false,
    label: 'Dekatreis Adventure Importer'
  })
}

/**
 * Subclassing the AdventureImporter to be able to do the fancy things other adventure modules do
 * Main thing right now is setting the world background and description on import
 */
class DekatreisAdventureImporter extends foundry.applications.sheets.AdventureImporter {
  async _onImport (importResult, importOptions) {
    if (importOptions.worldDetails) {
      await updateWorldDetails()
    }

    async function updateWorldDetails () {
      const worldData = {
        action: 'editWorld',
        id: game.world.id,
        description: 'A techno-fantasy campaign setting, created by Veilza Kinsemi.',
        background: 'modules/dekatreis/assets/images/Banner.jpg'
      }

      await foundry.utils.fetchJsonWithTimeout(foundry.utils.getRoute('setup'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(worldData)
      })

      game.world.updateSource(worldData)
    }
  }

  _prepareImportOptionsSchema () {
    const fields = foundry.data.fields
    const alreadyImported = !!game.settings.get('core', 'adventureImports')?.[this.document.uuid]
    const schema = {
      worldDetails: new fields.BooleanField({
        label: 'Customize World Details',
        hint: 'Add basic adventure information and stylized Ember background artwork to the World join screen.',
        initial: !alreadyImported
      })
    }

    return new fields.SchemaField(schema)
  }
}
