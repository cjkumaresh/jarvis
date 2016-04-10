'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'views/AppView',
    'views/FileSystemView',
    'controller/navigation'
], function ($, _, Backbone, AppView, FileSystemView, Navigation) {
    return Backbone.Router.extend({
        routes: {
            '': 'defaultRoute',
            'home': 'homeRoute',
            'home/': 'homeRoute',
            'home/*path': 'navigateRoute'
        },

        defaultRoute: function () {
            location.href = location.href + '#/home';
        },

        homeRoute: function () {
            var data = {
                model: {
                    'path': ''
                }
            };
            new FileSystemView(data);
        },

        navigateRoute: function (path) {
            Navigation.handle(path);
        }
    });
});
