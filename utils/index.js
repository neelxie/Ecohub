// if I made this and export we would have a build error
const blueMarker = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

// Iterate the entire array and add icons attribute
export default function addIconAttribute(organisations) {
  let markers = organisations;
  markers.forEach((mark) => {
    mark.icon = blueMarker;
  });
  return markers;
}
