// ==========================================================================
// Project:   ViaMichelin - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals ViaMichelin */

// This page describes the main user interface for your application.
ViaMichelin.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['labelView', 'viaMichelinView'],

    labelView: SC.LabelView.design({
      classNames: ['welcome-label'],
      layout: {
        centerX: 0,
        top: 8,
        width: 300,
        height: 24
      },
      tagName: "h1",
      value: "SproutCore - ViaMichelin Example"
    }),
    
    viaMichelinView: ViaMichelin.ViaMichelinView.extend({
      layout: { top: 40 }
    })
  })

});
