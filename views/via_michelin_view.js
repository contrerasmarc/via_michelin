// ==========================================================================
// Project:   ViaMichelin.ViaMichelinView
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals ViaMichelin */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
ViaMichelin.ViaMichelinView = SC.View.extend(
/** @scope ViaMichelin.ViaMichelinView.prototype */
{
  
  // -- (rendered in 1.91s)
  didAppendToDocument: function() {
    var layer = this.get('layer');
    console.log('layer:', layer, layer.id);

    VMLaunch("ViaMichelin.Api.Map", { //Service parameters
      //Map container (DOM element)
      container: $_id(layer.id),
      //Initial geographical coordinates of the map center
      center: {
        coords: {
          lon: 8.53,
          lat: 47.38
        }
      },
      //Initial zoom level
      zoom: 11
    },
    { //Callbacks
      onInitError: function() {
        alert('Whoops!La carte ne peut pas être chargée!');
      }
    });
  }
  
  
  // -- (rendered in 2s)
  // didCreateLayer: function() {
  //   this.invokeLast('_createMap');
  // },
  //
  // didAppendToDocument: function() {
  //   this.invokeLast('_createMap');
  // },
  //
  // _createMap: function() {
  //   var layer = this.get('layer');
  //   console.log(layer);
  //
  //
  //   VMLaunch("ViaMichelin.Api.Map", { //Service parameters
  //     //Map container (DOM element)
  //     container: $_id(layer.id),
  //     //Initial geographical coordinates of the map center
  //     center: {
  //       coords: {
  //         lon: 8.53,
  //         lat: 47.38
  //       }
  //     },
  //     //Initial zoom level
  //     zoom: 11
  //   },
  //   { //Callbacks
  //     onInitError: function() {
  //       alert('Whoops!La carte ne peut pas être chargée!');
  //     }
  //   });
  // }

});
