import {Component, OnInit} from 'angular2/core'
import {BossyTooltip, BossyTooltipConfig} from 'app/components/bossy.tooltip'
import {Test} from 'app/components/test'
import {BossyTreeview, BossyTreeviewConfig} from 'app/components/bossy.treeview'


@Component({
	selector: 'my-app',
	template: `
		<div>Not here</div>
		<bossy-tooltip [config]="myConfig"><span>Testing!</span></bossy-tooltip>
		<bossy-treeview [config]="myConfig"><span>Testing!</span></bossy-treeview>
		<test></test>
	`,
	directives: [BossyTooltip, Test, BossyTreeView]
})

export class App implements OnInit{
	myConfig: BossyTreeView;

	ngOnInit() {
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
	}
}