WorldgenEvents.remove((e) => {
  e.removeOres((props) => {
    props.worldgenLayer = "underground_ores";

    props.blocks = ["oreganized:silver_ore", "oreganized:deepslate_silver_ore"];
  });
});
