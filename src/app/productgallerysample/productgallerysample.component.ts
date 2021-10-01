import { Component, OnInit } from '@angular/core';
import {schools} from './schools'
@Component({
  selector: 'app-productgallerysample',
  templateUrl: './productgallerysample.component.html',
  styleUrls: ['./productgallerysample.component.css']
})
export class ProductgallerysampleComponent implements OnInit {

  all_data = schools
  total = this.all_data.length;
  shown_data = []
  dummy_images = [
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/uttar_pradesh_schools_reopen_1200x768.jpeg?SIEfDPANry6938mf8qYNssu3CHTWeHY3&size=770:433',
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/Uttar_Pradesh_School_colleges__1200x768.jpeg?WBkjBQ7j6HgqJ4ehgl4zA25PLuN1qN6Q&size=770:433',
    'https://timesofindia.indiatimes.com/thumb/msid-82082598,imgsize-84054,width-400,resizemode-4/82082598.jpg',
    'https://images.livemint.com/img/2021/08/27/1600x900/20210719_MOH-KS-LI-School_Re_Open_in_Chd_01_1627043618258_1630061338529.jpg'
  ]
  constructor() { }

  ngOnInit(): void {
    this.get_data(1);
    console.log(this.shown_data);
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    let filterValueLower = filterValue.toLowerCase();
    this.shown_data = this.all_data.filter(
        (school) => {
          if (school.school_name.toLowerCase().includes(filterValueLower)) {
            return true;
          }
          return false;
      }
    )
  }

  get_data(page) {
    for (let i=0; i<this.total; i++) {
      let current = this.all_data[i];
      current["image"] = this.dummy_images[i % 4];
      current["otherinfo"] = "";
      this.shown_data.push(current);
    }
    return true;
  }

}
