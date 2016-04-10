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
    var BossyTreeview;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BossyTreeview = (function () {
                function BossyTreeview() {
                    /*if (config && config.data) {
                
                        data = this.config.data;
                    }
                
                    this.contents = {
                        showingChildren: [],
                        nodes: this.data.nodes
                    };*/
                    this.changeSelection = function (node) {
                        console.log(node);
                        //expand and unexpand
                        /* if (this.curSelectedTV != undefined && this.curSelectedTV == null ) {
                            this.curSelectedTV.toggleClass('bossy-treeview-selected');
                        }
                        this.curSelectedTV = angular.element($event.target);
                        this.curSelectedTV.toggleClass('bossy-treeview-selected');*/
                    };
                    this.nodeClicked = function ($event, $index, node) {
                        var indexInArr = this.contents.showingChildren.indexOf($index);
                        (indexInArr > -1) ?
                            this.contents.showingChildren.splice(indexInArr, 1) :
                            this.contents.showingChildren.push($index);
                        this.changeSelection(node);
                    };
                    this.itemClicked = function ($event, $index, node) {
                        this.changeSelection(node);
                    };
                    this.showChildren = function ($index) {
                        if (this.contents.showingChildren.indexOf($index) > -1) {
                            return true;
                        }
                        return false;
                    };
                }
                BossyTreeview.prototype.ngOnInit = function () {
                    // Fail safe in case config are not given
                    if (!this.config) {
                        this.config = {
                            showingChildren: [],
                            nodes: ''
                        };
                    }
                    if (this.config.data) {
                        this.data = this.config.data;
                    }
                    // Throw an error if text is not given
                    if (!this.config.text) {
                        console.error('You must include content for tree view.');
                    }
                };
                BossyTreeview = __decorate([
                    core_1.Component({
                        selector: 'bossy-treeview',
                        templateUrl: 'bossy-treeview.html',
                        inputs: ['config'],
                        styleUrls: ['_bossy-treeview.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BossyTreeview);
                return BossyTreeview;
            }());
            exports_1("BossyTreeview", BossyTreeview);
        }
    }
});
//# sourceMappingURL=bossy.treeview.js.map