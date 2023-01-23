// /* eslint-disable operator-linebreak */
// /* eslint-disable react/no-access-state-in-setstate */
// /* eslint-disable react/button-has-type */
// /* eslint-disable prefer-destructuring */
// /* eslint-disable react/destructuring-assignment */
// /* eslint-disable react/sort-comp */
// /* eslint-disable react/no-unused-state */
// /* eslint-disable import/no-extraneous-dependencies */
// /* eslint-disable global-require */
// import React, { Component } from 'react';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import * as ELG from 'esri-leaflet-geocoder';
// import L from 'leaflet';
// import 'leaflet.locatecontrol';
// import Control from 'react-leaflet-control';
// import './Map.css';

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// const data = [
//   {
//     _id: '5cde584f402224bf77d1ee37',
//     isOpen: false,
//     name: 'Cardenas}',
//     phone: '+1 (833) 577-3186',
//     address: '142 Huron Street, Williamson, Alabama, 1484',
//     latitude: 54.6050223,
//     longitude: 83.095054,
//   },
//   {
//     _id: '5cde584f42a13f1390a35101',
//     isOpen: false,
//     name: 'Dotson}',
//     phone: '+1 (983) 407-2570',
//     address: '456 Pioneer Street, Shelby, Tennessee, 8195',
//     latitude: 54.5250949,
//     longitude: 83.1591945,
//   },
//   {
//     _id: '5cde584f96e0582c44749bae',
//     isOpen: true,
//     name: 'Chapman}',
//     phone: '+1 (876) 442-2065',
//     address: '720 Vandervoort Avenue, Bodega, Mississippi, 9761',
//     latitude: 54.803402,
//     longitude: 83.0843785,
//   },
//   {
//     _id: '5cde584fdc394104b6d60f66',
//     isOpen: true,
//     name: 'Perkins}',
//     phone: '+1 (815) 555-3016',
//     address: '392 Lake Place, Whitmer, Michigan, 5212',
//     latitude: 54.8972986,
//     longitude: 83.185541,
//   },
//   {
//     _id: '5cde584ff5d8c1dce1921ccd',
//     isOpen: false,
//     name: 'Pennington}',
//     phone: '+1 (800) 502-2689',
//     address: '435 Bridge Street, Itmann, Indiana, 401',
//     latitude: 54.9987024,
//     longitude: 83.0994983,
//   },
// ];

// export default class MyMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentLocation: {
//         lat: 51.505,
//         lng: -0.09,
//       },
//       bounds: false,
//       zoom: 13,
//       showList: false,
//     };
//   }

//   componentDidMount() {
//     const map = this.leafletMap.leafletElement;
//     const searchControl = new ELG.Geosearch({
//       expanded: false,
//       searchBounds: false,
//       allowMultipleResults: true,
//       zoomToResult: false,
//     }).addTo(map);
//     this.location = new L.LayerGroup().addTo(map);

//     searchControl.on('results', (data) => {
//       this.location.clearLayers();
//       const location = data.results[0];

//       // this.location.addLayer(L.marker(data.results[0].latlng));

//       this.updateLocation(location.latlng.lat, location.latlng.lng);
//     });
//     this.locate();
//   }

//   locate() {
//     const map = this.leafletMap.leafletElement;
//     map.locate().on('locationfound', (e) => {
//       console.log('found');
//       this.updateLocation(e.latitude, e.longitude);
//     });
//     map.locate().on('locationerror', (e) => {
//       console.log(e.message);
//       // const locationMessage = _.once((message) => {alert(message)})
//       // locationMessage(e.message)
//     });
//   }

//   updateLocation(lat, lng) {
//     const map = this.leafletMap.leafletElement;

//     this.location.clearLayers();
//     const bounds = L.latLng(lat, lng).toBounds(5000);
//     this.setState({
//       currentLocation: {
//         lat: lat + Math.random() / 10100,
//         lng,
//       },
//       bounds,
//       zoom: 13,
//     });
//     const maxBounds = L.latLng(lat, lng).toBounds(15000);
//     map.setMaxBounds(maxBounds);
//     if (this.state.showList) return;
//     this.location.addLayer(L.circle([lat, lng], { radius: 4000 }));
//   }

//   componentDidUpdate(oldProps, oldState) {
//     const map = this.leafletMap.leafletElement;
//     if (oldState.showList !== this.state.showList) {
//       if (this.state.showList) {
//         map.dragging.disable();
//         this.location.clearLayers();
//       } else {
//         map.dragging.enable();
//         this.updateLocation(
//           this.state.currentLocation.lat,
//           this.state.currentLocation.lng,
//         );
//       }
//     }
//   }

//   render() {
//     const { lat, lng } = this.state.currentLocation;
//     const position = [lat, lng];
//     // const bounds = L.latLng(lat, lng).toBounds(15000);
//     // const bounds = this.state.bounds || false;
//     const showList = this.state.showList;
//     return (
//       <Map
//         ref={(m) => {
//           this.leafletMap = m;
//         }}
//         maxBoundsViscosity={1.0}
//         attributionControl={false}
//         zoomControl={false}
//         center={position}
//         maxZoom={18}
//         minZoom={13}
//         zoom={this.state.zoom}
//         style={{
//           height: '95vh',
//           width: '100vw',
//           zIndex: '7',
//         }}
//       >
//         {showList && (
//           <div
//             style={{
//               // zIndex: '100000',
//               cursor: 'default',
//               width: '100vw',
//               height: '100vh',
//               backgroundColor: 'white',
//               overflow: 'hidden',
//             }}
//           />
//         )}
//         {!showList && (
//           <TileLayer
//             attribution='Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png"
//           />
//         )}
//         {!showList && (
//           <Control>
//             <button
//               onClick={() => {
//                 this.locate();
//               }}
//               style={{ position: 'fixed', left: '90vw', top: '85%' }}
//             >
//               Locate me!
//             </button>
//           </Control>
//         )}
//         <Control>
//           <button
//             onClick={() => {
//               this.setState({ showList: !this.state.showList });
//             }}
//             style={{ position: 'fixed', top: '10%', left: '50%' }}
//           >
//             List
//           </button>
//         </Control>
//         {!showList &&
//           data.map((item) => {
//             return (
//               <Marker position={[item.latitude, item.longitude]}>
//                 <Popup>
//                   <div style={{ backgroundColor: 'white' }}>
//                     <h3>{item.name}</h3>
//                   </div>
//                 </Popup>
//               </Marker>
//             );
//           })}
//       </Map>
//     );
//   }
// }
