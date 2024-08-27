var woodTypes = [
  "minecraft:oak",
  "minecraft:spruce",
  "minecraft:birch",
  "minecraft:jungle",
  "minecraft:acacia",
  "minecraft:dark_oak",
  "minecraft:mangrove",
  "upgrade_aquatic:driftwood",
  "upgrade_aquatic:river",
  "environmental:willow",
  "environmental:pine",
  "environmental:cherry",
  "environmental:wisteria",
  "caverns_and_chasms:azalea",
  "atmospheric:rosewood",
  "atmospheric:morado",
  "atmospheric:yucca",
  "atmospheric:aspen",
  "atmospheric:laurel",
  "atmospheric:kousa",
  "atmospheric:grimwood",
  "autumnity:maple",
];
var chestTypes = [
  "woodworks:oak",
  "woodworks:spruce",
  "woodworks:birch",
  "woodworks:jungle",
  "woodworks:acacia",
  "woodworks:dark_oak",
  "woodworks:mangrove",
  "upgrade_aquatic:driftwood",
  "upgrade_aquatic:river",
  "environmental:willow",
  "environmental:pine",
  "environmental:cherry",
  "environmental:wisteria",
  "caverns_and_chasms:azalea",
  "atmospheric:rosewood",
  "atmospheric:morado",
  "atmospheric:yucca",
  "atmospheric:aspen",
  "atmospheric:laurel",
  "atmospheric:kousa",
  "atmospheric:grimwood",
  "autumnity:maple",
];

ServerEvents.recipes((event) => {
  //Removes Quark Calcite Blocks
  event.remove({ output: "quark:polished_calcite" });
  event.remove({ output: "quark:calcite_slab" });
  event.remove({ output: "quark:calcite_stairs" });
  event.remove({ output: "quark:calcite_wall" });
  event.remove({ output: "quark:polished_calcite_slab" });
  event.remove({ output: "quark:polished_calcite_stairs" });
  event.remove({ output: "quark:calcite_vertical_slab" });
  event.remove({ output: "quark:polished_calcite_vertical_slab" });
  event.custom({
    type: "sullysmod:grindstone_polishing",
    experience: 0,
    ingredients: [
      {
        item: "minecraft:calcite",
      },
    ],
    result: {
      item: "caverns_and_chasms:polished_calcite",
    },
  });
  event.replaceInput(
    { id: "quark:building/crafting/stonevariants/calcite_bricks" },
    "quark:polished_calcite",
    "caverns_and_chasms:polished_calcite"
  );

  event.replaceInput(
    { id: "quark:building/crafting/stonevariants/calcite_pillar" },
    "quark:polished_calcite_slab",
    "caverns_and_chasms:polished_calcite_slab"
  );

  //Removes Quark Tuff Blocks
  event.remove({ output: "quark:polished_tuff" });
  event.remove({ output: "quark:tuff_slab" });
  event.remove({ output: "quark:tuff_stairs" });
  event.remove({ output: "quark:tuff_wall" });
  event.remove({ output: "quark:polished_tuff_slab" });
  event.remove({ output: "quark:polished_tuff_stairs" });
  event.remove({ output: "quark:tuff_vertical_slab" });
  event.remove({ output: "quark:polished_tuff_vertical_slab" });
  event.custom({
    type: "sullysmod:grindstone_polishing",
    experience: 0,
    ingredients: [
      {
        item: "minecraft:tuff",
      },
    ],
    result: {
      item: "caverns_and_chasms:polished_tuff",
    },
  });
  event.replaceInput(
    { id: "quark:building/crafting/stonevariants/tuff_bricks" },
    "quark:polished_tuff",
    "caverns_and_chasms:polished_tuff"
  );

  event.replaceInput(
    { id: "quark:building/crafting/stonevariants/tuff_pillar" },
    "quark:polished_tuff_slab",
    "caverns_and_chasms:polished_tuff_slab"
  );

  //Changes C&C Dripstone Shingles Recipe
  event.remove({ id: "caverns_and_chasms:dripstone_shingles" });
  event.shaped(
    "9x caverns_and_chasms:dripstone_shingles",
    ["DDD", "DDD", "DDD"],
    {
      D: "minecraft:dripstone_block",
    }
  );

  //Changes C&C Cobblestone Bricks Recipe
  event.remove({ id: "caverns_and_chasms:cobblestone_bricks" });
  event.shaped("2x caverns_and_chasms:cobblestone_bricks", ["C", "C"], {
    C: "minecraft:cobblestone",
  });

  event.remove({ id: "caverns_and_chasms:mossy_cobblestone_bricks" });
  event.shaped("2x caverns_and_chasms:mossy_cobblestone_bricks", ["C", "C"], {
    C: "minecraft:mossy_cobblestone",
  });

  //Removes C&C Lapis Bricks
  event.remove({ output: "supplementaries:lapis_bricks" });
  event.remove({ output: "supplementaries:lapis_bricks_stairs" });
  event.remove({ output: "supplementaries:lapis_bricks_slab" });
  event.remove({ output: "supplementaries:lapis_bricks_vertical_slab" });
  event.remove({ output: "supplementaries:lapis_bricks_wall" });

  //Remove Autumnity Pancakes
  event.remove({ output: "autumnity:pancake" });

  //Remove FD Fried Egg
  event.remove({ output: "farmersdelight:fried_egg" });

  //Remove FD Milk Bottle
  event.remove({ output: "farmersdelight:milk_bottle" });

  //Azalea Recipe Fixes
  event.remove({ output: "everycomp:fd/caverns_and_chasms/azalea_cabinet" });
  event.remove({ output: "quark:azalea_hedge" });
  event.remove({ output: "quark:flowering_azalea_hedge" });

  //Supp Altimeter
  event.remove({ output: "supplementaries:altimeter" });

  //Rope
  event.shaped("3x supplementaries:rope", ["S", "S", "S"], {
    S: "farmersdelight:straw",
  });

  event.shaped("3x supplementaries:rope", ["Y", "Y", "Y"], {
    Y: "environmental:yak_hair",
  });

  event.shaped("minecraft:lead", ["RR ", "RR ", "  R"], {
    R: "supplementaries:rope",
  });

  event.shaped("farmersdelight:safety_net", ["RR", "RR"], {
    R: "supplementaries:rope",
  });

  event.remove({ output: "farmersdelight:rope" });

  event.remove({ id: "farmersdelight:safety_net" });
  event.remove({ id: "farmersdelight:lead_from_rope" });

  //Oreganized netherite nugget
  event.remove({ id: "oreganized:netherite_ingot_from_nuggets" });
  event.remove({ output: "oreganized:netherite_nugget" });

  //Buzzier bees apple
  event.remove({ output: "buzzier_bees:honey_apple" });

  //C&C copper nugget
  event.remove({ output: "caverns_and_chasms:copper_nugget" });

  //C&C copper bars
  event.remove({ output: "caverns_and_chasms:copper_bars" });

  //Sullys mod copper button
  event.remove({ output: "sullysmod:copper_button" });

  //C&C tool boxes
  event.remove({ output: "caverns_and_chasms:toolbox" });

  //Quark chest recipe compat
  event.remove({ output: "minecraft:chest" });

  chestTypes.forEach((chest, i) => {
    event.shaped("4x " + chest + "_chest", ["LLL", "L L", "LLL"], {
      L: "#" + woodTypes[i] + "_logs",
    });
  });

  event.shaped("4x woodworks:crimson_chest", ["LLL", "L L", "LLL"], {
    L: "#minecraft:crimson_stems",
  });

  event.shaped("4x woodworks:warped_chest", ["LLL", "L L", "LLL"], {
    L: "#minecraft:warped_stems",
  });

  event.shaped("4x endergetic:poise_chest", ["LLL", "L L", "LLL"], {
    L: "#endergetic:poise_stems",
  });

  //Truffle pie
  event.remove({ output: "environmental:truffle_pie" });

  event.remove({ output: "create_central_kitchen:truffle_pie_slice" });
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("farmersdelight:rope", "supplementaries:rope", true)
    .replaceLoot("farmersdelight:fried_egg", "incubation:fried_egg", true)
    .replaceLoot("autumnity:pancake", "supplementaries:pancake", true)
    .replaceLoot("buzzier_bees:honey_apple", "create:honeyed_apple", true);
});

ServerEvents.tags("item", (event) => {
  event.remove("forge:milk", ["farmersdelight:milk_bottle"]);
  event.remove("forge:ingots/silver", ["oreganized:silver_ingot"]);
  event.remove("forge:nuggets/netherite", ["oreganized:netherite_nugget"]);
  event.remove("minecraft:small_flowers", ["windswept:bluebells"]);
});
