import { Icon } from 'leaflet'

export const openStreetMapCopyright = {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}
// Custom pin marker
export const customIcon = new Icon({
  iconUrl: 'https://img.icons8.com/color/48/dog-paw-print.png',
  iconSize: [40, 40],
  popupAnchor: [0, -9]
})
