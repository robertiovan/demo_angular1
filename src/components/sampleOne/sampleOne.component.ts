
import {SampleOne} from  "./sampleOne.module";

SampleOne.component("sampleOneComponent", {
    templateUrl: "src/components/sampleOne/sampleOne.tmpl.html",
    controller: "sampleOneController",
    controllerAs: "vm",
    bindings: {
        data: "<"
    }
});