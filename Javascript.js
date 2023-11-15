require([
  "esri/views/MapView",
  "esri/WebMap"
], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "d4a2e2c8ea9f496187b7311f973421a6"
    },
    basemap: "gray" // Change the basemap to "Gray"
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
