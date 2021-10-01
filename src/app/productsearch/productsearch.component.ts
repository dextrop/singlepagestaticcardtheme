import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductsearchComponent implements OnInit {
  @Input() placeholder = "Start Searching...."
  @Output() keyupevents = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  returnevent(event) {
    this.keyupevents.emit(event)
  }
}
