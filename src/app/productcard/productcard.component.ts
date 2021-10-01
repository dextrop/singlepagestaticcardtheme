import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
declare var rotate_card;
@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductcardComponent implements OnInit {
  @Input() product_image = "http://placehold.jp/300x200.png";
  @Input() product_name = "Product Name Here";
  @Input() product_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  @Input() rating = 4.5;
  @Input() rated_by = 100;
  @Input() link;
  @Input() address = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  @Input() category_1 = "";
  @Input() category_2 = "";
  constructor() {  }

  ngOnInit(): void {
    // transitioncard();
  }

  RotateCard(id) {
    rotate_card(id)
  }

}
