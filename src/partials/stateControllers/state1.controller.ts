import * as angular from 'angular';

import {StateControllersModule} from  "./stateControllers.module";

class State1Controller {

    static $inject = ["$scope"];

    private testData: string;

    constructor(private scope: ng.IScope) {
        var vm = this;
        vm.testData = (Math.random()*100).toString();
    }
}

StateControllersModule.controller("state1Controller", State1Controller);