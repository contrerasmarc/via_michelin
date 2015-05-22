# ==========================================================================
# Project:   ViaMichelin
# Copyright: @2015 My Company, Inc.
# ==========================================================================

# This is your Buildfile for your app, ViaMichelin. This tells SproutCore
# how to build your app. These settings override those in your project
# Buildfile, which contains default settings for all apps in your project.
#
# To learn more about configuring the Buildfile, please visit
# http://guides.sproutcore.com/build_tools.html.

# It is better to add :required targets here than in the global Buildfile.
config :via_michelin, :required => :sproutcore
config :via_michelin, :javascript_libs => ['http://apijsv2.viamichelin.com/apijsv2/api/js?key=KEY&LANG=eng']