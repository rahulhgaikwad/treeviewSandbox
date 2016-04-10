System.register(['angular2/core', 'app/components/bossy.tooltip', 'app/components/test'], function(exports_1, context_1) {
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
    var core_1, bossy_tooltip_1, test_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bossy_tooltip_1_1) {
                bossy_tooltip_1 = bossy_tooltip_1_1;
            },
            function (test_1_1) {
                test_1 = test_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.ngOnInit = function () {
                    this.myConfig = {
                        'align': '',
                        'color': '',
                        'icon': '',
                        'iconFloat': '',
                        'persists': false,
                        'position': '',
                        'progress': 0,
                        'text': 'This is a test again',
                        'type': ''
                    };
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<div>Not here</div>\n\t\t<bossy-tooltip [config]=\"myConfig\"><span>Testing!</span></bossy-tooltip>\n\t\t<bossy-treeview [config]=\"myConfig\"><span>Testing!</span></bossy-treeview>\n\t\t<test></test>\n\t",
                        directives: [bossy_tooltip_1.BossyTooltip, test_1.Test, BossyTreeView]
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map