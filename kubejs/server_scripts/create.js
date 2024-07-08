ServerEvents.recipes((e) => {
  e.custom({
    "type": "create:mixing",
    "heatRequirement": "none",
    "ingredients": [
      {
        "amount": 2700,
        "fluid": "tconstruct:molten_iron",
        "nbt": {}
      },
      {
        "amount": 2700,
        "fluid": "kubejs:manure"
      }
    ],
    "results": [
      {
        "amount": 5400,
        "fluid": "kubejs:molten_andesite_alloy"
      }
    ]
  });
});
