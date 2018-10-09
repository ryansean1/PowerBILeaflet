/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual.leafletCustomVisualB1FE9BC80DD14510A09DB3B7D9E5289D  {
    "use strict";
    export class Visual implements IVisual {
        private target: HTMLElement;
        private updateCount: number;
        private settings: VisualSettings;
        private textNode: Text;

        private map: L.Map;

        constructor(options: VisualConstructorOptions) {
            console.log('Visual constructor', options);
            this.target = options.element;
            // Fill the target element with the Leaflet map
            this.target.style.width = "100%";
            this.target.style.height = "100%";

            if (typeof document !== "undefined") {
                //Change the Initial Zoom Location and Zoom Level here
                this.map = L.map(this.target).setView([0, 0], 2);
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map);
                //L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}").addTo(this.map);
                //L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}").addTo(this.map);
                //var latlng = L.latLng(50.5, 30.5);

                //


                //var latlngs: [number, number][] = [[45.51, -122.68],
                //[37.77, -122.43],
                //[34.04, -118.2]];
                //var polygonlatlongs: [number, number][] = [[37, -109.05], [41, -115.03], [41, -102.05], [37, -102.04]];
                //var polyline = L.polygon(polygonlatlongs, { color: 'blue' }).addTo(this.map);
                //this.map.fitBounds(polyline.getBounds());

                //var marker = L.marker([37, -109.05], { opacity: 0.01 }); //opacity may be set to zero
                //marker.bindTooltip("My Label", { permanent: true, className: "my-label", offset: [0, 0] });
                //marker.addTo(this.map);

                //var popup = L.popup()
                //  .setLatLng([37, -109.05])
                //.setContent('<p>Custom Boundary<br />This is a nice popup.</p>')
                //.openOn(this.map);
                // var latlngs = [-33.865143, 151.209900]
                //var ll =  L.latLng(-33.865143, 151.209900);
                //budu: LatLngExpression = [[39.838128, 15.480699]];
                //var circle = L.circle(latlng, { radius: 200 }).addTo(this.map);
                // var polyline = L.polyline([-33.865143, 151.209900], {color: 'red'}).addTo(this.map);



            }
        }

        public update(options: VisualUpdateOptions) {
            this.settings = Visual.parseSettings(options && options.dataViews && options.dataViews[0]);
            console.log('Visual update', options);
            if (typeof this.textNode !== "undefined") {
                this.textNode.textContent = (this.updateCount++).toString();
            }
        }

        private static parseSettings(dataView: DataView): VisualSettings {
            return VisualSettings.parse(dataView) as VisualSettings;
        }

        /**
         * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
         * objects and properties you want to expose to the users in the property pane.
         *
         */
        public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
            return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
        }
    }
}