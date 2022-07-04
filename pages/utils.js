export const redMarker = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
export const blueMarker =
  "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

// Iterate the entire array and add icons attribute
export function addIconAttribute(organisations) {
  let markers = organisations;
  markers.forEach((mark) => {
    mark.icon = blueMarker;
  });
  return markers;
}
