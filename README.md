# SproutCore - ViaMichelin

A very basic [Sproutcore](http://www.github.com/sproutcore/sproutcore) app that implements the ViaMichelin Javascript API.

On Buildfile you must include:

    config :via_michelin, :javascript_libs => ['http://apijsv2.viamichelin.com/apijsv2/api/js?key=KEY&LANG=eng']

The Personal API 'KEY' provided by ViaMichelin is made by a JSKEY and a PRODUCT_ID and should be have the following form : JSKEY$PRODUCT_ID

On the main view:

    viaMichelinView: ViaMichelin.ViaMichelinView.extend({
      layout: { top: 40 }
    })
    
For more possibilities visit the site for [developers viamichelin] (http://dev.viamichelin.com/api-loading)