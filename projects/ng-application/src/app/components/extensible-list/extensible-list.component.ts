import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-extensible-list',
  templateUrl: './extensible-list.component.html',
  styleUrls: ['./extensible-list.component.scss'],
})
export class ExtensibleListComponent implements OnInit {
  @Input()
  items: any[] = [];

  @Input()
  itemTemplate!: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
