StartupEvents.registry('fluid', (e) => {
    e.create('manure')
        .thinTexture(0x47311A)
        .thickTexture(0x47311A)
        .bucketColor(0x47311A)
        .noBlock()
        .displayName('Manure');

    e.create('molten_andesite_alloy')
        .thinTexture(0x6C7C72)
        .thickTexture(0x6C7C72)
        .bucketColor(0x6C7C72)
        .noBlock()
        .displayName('Molten Andesite Alloy');
});