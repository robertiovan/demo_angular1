import * as angular from 'angular';

import {StateControllersModule} from  "./stateControllers.module";

class State2Controller {

    static $inject = ["$scope"];

    constructor(private scope: ng.IScope) {

    }
}

StateControllersModule.controller("state2Controller", State2Controller);