require([
  "esri/views/MapView",
  "esri/WebMap"
], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "ce2d788da76e4ffdb68063a8c24aed0b"
    },
    basemap: "gray" // Change the basemap to "Gray"
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
