import {SampleOne} from  "./sampleOne.module";


class SampleOneController {

    static $inject = ["$scope"];

    constructor(private scope: ng.IScope) {
        var vm = this;
    }
}

SampleOne.controller("sampleOneController", SampleOneController);

export {SampleOneController}