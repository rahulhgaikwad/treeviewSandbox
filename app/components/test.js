System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Test;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Test = (function () {
                function Test() {
                    this.dataSet = [
                        { name: 'one', isHighlighted: false },
                        { name: 'two', isHighlighted: false },
                        { name: 'three', isHighlighted: false }];
                }
                Test.prototype.highlight = function (data) {
                    data.isHighlighted = !data.isHighlighted;
                };
                Test = __decorate([
                    core_1.Component({
                        selector: 'test',
                        template: "\n    <div>\n        <ul>\n            <li *ngFor=\"#data of dataSet\" (click)=\"highlight(data)\" [ngClass]=\"{highlight: data.isHighlighted}\">{{data.name}}</li>\n        </ul>\n    </div>\n    ",
                        styles: ["\n        .highlight {\n            background-color: yellow;\n        }\n        "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Test);
                return Test;
            }());
            exports_1("Test", Test);
        }
    }
});
//# sourceMappingURL=test.js.map