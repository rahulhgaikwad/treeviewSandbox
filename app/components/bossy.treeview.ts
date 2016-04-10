import {Component, OnInit} from 'angular2/core';

export interface BossyTreeviewConfig {
    contents: number;
    showingChildren: string[];
    nodes: number;
    text: string;
    data: string;

}

@Component({
    selector: 'bossy-treeview',
    templateUrl: 'bossy-treeview.html',
    inputs: ['config'],
    styleUrls: ['_bossy-treeview.css']
})

export  class BossyTreeview implements OnInit {
    public config: BossyTreeviewConfig;
    public contents: number;
    public nodes: number;

    /*if (config && config.data) {

        data = this.config.data;
    }

    this.contents = {
        showingChildren: [],
        nodes: this.data.nodes
    };*/

    changeSelection = function (node) {
       console.log(node);
        //expand and unexpand
        /* if (this.curSelectedTV != undefined && this.curSelectedTV == null ) {
            this.curSelectedTV.toggleClass('bossy-treeview-selected');
        }
        this.curSelectedTV = angular.element($event.target);
        this.curSelectedTV.toggleClass('bossy-treeview-selected');*/
    };

    nodeClicked = function ($event, $index, node) {
        var indexInArr = this.contents.showingChildren.indexOf($index);
        (indexInArr > -1) ?
        this.contents.showingChildren.splice(indexInArr, 1) :
        this.contents.showingChildren.push($index);
        this.changeSelection(node);
    };

    itemClicked = function ($event, $index, node) {
        this.changeSelection(node);
    };

    showChildren = function ($index) {
        if (this.contents.showingChildren.indexOf($index) > -1) {
            return true;
        }
        return false;
    };



    ngOnInit(){
        // Fail safe in case config are not given
        if (!this.config) {
            this.config = <BossyTreeviewConfig>{
                showingChildren: [],
                nodes: ''

            }
        }

        if(this.config.data) {
            this.data = this.config.data;
        }

        // Throw an error if text is not given
        if (!this.config.text) {
            console.error('You must include content for tree view.');
        }
    }
}