'use strict';

import * as angular from "angular";
import "angular-ui-router";
import "angular-material";


import "app/components/sampleOne/index";
import "app/partials/stateControllers/index";
import "app/components/sampleOne/index";

var AppTest = angular.module("appTest", ["ui.router", "stateControllers", "sampleOneComponenet"]);

AppTest.config(($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

    $urlRouterProvider.otherwise("/state1");

    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "src/partials/state1.html",
            controller: 'state1Controller as vm'
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "src/partials/state2.html",
            controller: 'state2Controller as vm'
        });
});

export {AppTest}