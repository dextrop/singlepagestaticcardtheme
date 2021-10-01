(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/saurabhpandey/Documents/JennieWork/jennie/jennie/uigallery/productgallery/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _schools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schools */ "QfTE");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _productsearch_productsearch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productsearch/productsearch.component */ "cx7j");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _productcard_productcard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../productcard/productcard.component */ "pTP8");







function HomeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-productcard", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const school_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product_name", school_r1.school_name)("product_description", school_r1.about)("product_image", school_r1.image)("address", school_r1.full_address)("category_1", school_r1.established)("category_2", school_r1.classes);
} }
class HomeComponent {
    constructor() {
        this.all_data = _schools__WEBPACK_IMPORTED_MODULE_1__["schools"];
        this.total = this.all_data.length;
        this.shown_data = [];
        this.dummy_images = [
            'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/uttar_pradesh_schools_reopen_1200x768.jpeg?SIEfDPANry6938mf8qYNssu3CHTWeHY3&size=770:433',
            'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/Uttar_Pradesh_School_colleges__1200x768.jpeg?WBkjBQ7j6HgqJ4ehgl4zA25PLuN1qN6Q&size=770:433',
            'https://timesofindia.indiatimes.com/thumb/msid-82082598,imgsize-84054,width-400,resizemode-4/82082598.jpg',
            'https://images.livemint.com/img/2021/08/27/1600x900/20210719_MOH-KS-LI-School_Re_Open_in_Chd_01_1627043618258_1630061338529.jpg'
        ];
    }
    ngOnInit() {
        this.get_data(1);
        console.log(this.shown_data);
    }
    applyFilter(filterValue) {
        console.log(filterValue);
        let filterValueLower = filterValue.toLowerCase();
        this.shown_data = this.all_data.filter((school) => {
            if (school.school_name.toLowerCase().includes(filterValueLower)) {
                return true;
            }
            return false;
        });
    }
    get_data(page) {
        for (let i = 0; i < this.total; i++) {
            let current = this.all_data[i];
            current["image"] = this.dummy_images[i % 4];
            current["otherinfo"] = "";
            this.shown_data.push(current);
        }
        return true;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 2, consts: [[1, "cus-container", 2, "width", "80%", "margin-left", "10%"], [1, "row"], [3, "keyupevents"], [2, "text-align", "center", "font-size", "14px", "color", "rgba(0,0,0,0.6)"], ["class", "col-md-3", "style", "padding: 10px;", 4, "ngFor", "ngForOf"], [1, "col-md-3", 2, "padding", "10px"], [3, "product_name", "product_description", "product_image", "address", "category_1", "category_2"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-productsearch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyupevents", function HomeComponent_Template_app_productsearch_keyupevents_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 2, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Showing ", ctx.shown_data.length, " items ....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shown_data);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _productsearch_productsearch_component__WEBPACK_IMPORTED_MODULE_3__["ProductsearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _productcard_productcard_component__WEBPACK_IMPORTED_MODULE_5__["ProductcardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "QfTE":
/*!*********************************!*\
  !*** ./src/app/home/schools.ts ***!
  \*********************************/
/*! exports provided: schools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schools", function() { return schools; });
var schools = [
    {
        "affiliation_id": "2730024",
        "school_name": "Sardar Patel Vidyalaya (SPV), Lodhi Estate",
        "about": "Sardar Patel Vidyalaya is alternatively also known as SPV. The school was established in 1958.",
        "contact_email": "spvdelhi@gmail.com, spv@spvdelhi.org",
        "latitude": "28.5930975",
        "longitude": "77.22352599999999",
        "rating": "4.3",
        "rated_by": "324",
        "classes": "Nursery - 12th",
        "established": "1958",
        "school_medium": "Hindi",
        "campus_area": "18964 Sq. Metres",
        "full_address": "Lodhi Estate, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730021",
        "school_name": "The Mother's International School, New Delhi",
        "about": "The Mother's International School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "themis.office@themis.in",
        "latitude": "28.5411313",
        "longitude": "77.1995913",
        "rating": "4.6",
        "rated_by": "493",
        "classes": "Nursery - 12th",
        "established": "1956",
        "school_medium": "Hindi",
        "campus_area": "137593.11 Sq. Metres",
        "full_address": "Sri Aurobindo Marg, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730233",
        "school_name": "Vasant Valley School, Vasant Kunj",
        "about": "Vasant Valley School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "vasantvalley@vasantvalley.org",
        "latitude": "28.5378671",
        "longitude": "77.1454007",
        "rating": "3",
        "rated_by": "322",
        "classes": "Nursery - 12th",
        "established": "1990",
        "school_medium": "English",
        "campus_area": "8 Acres",
        "full_address": "Sector C, Vasant Kunj, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730454",
        "school_name": "Ahlcon International School, New Delhi",
        "about": "Ahlcon International School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "contact@ahlconinternational.in",
        "latitude": "28.6083697",
        "longitude": "77.293112",
        "rating": "3.7",
        "rated_by": "495",
        "classes": "Pre-nursery - 12th",
        "established": "2001",
        "school_medium": "English",
        "campus_area": "8093 Sq. Metres",
        "full_address": "Mayur Vihar, New Delhi, Delhi 110091, India"
    },
    {
        "affiliation_id": "2730257",
        "school_name": "Amity International School (AIS), Saket",
        "about": "Amity International School is alternatively also known as AIS. The school was established in 1991.",
        "contact_email": "principal@aiss.amity.edu",
        "latitude": "28.5283565",
        "longitude": "77.21508250000001",
        "rating": "3.5",
        "rated_by": "439",
        "classes": "Nursery - 12th",
        "established": "1991",
        "school_medium": "English",
        "campus_area": "8544 Sq. Metres",
        "full_address": "M-Block Saket, Saket, New Delhi, Delhi 110017, India"
    },
    {
        "affiliation_id": "2730259",
        "school_name": "Apeejay School, Pitampura",
        "about": "Apeejay School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "skool.pp.del@apj.edu",
        "latitude": "28.6895946",
        "longitude": "77.123348",
        "rating": "3.3",
        "rated_by": "308",
        "classes": "Nursery - 12th",
        "established": "1990",
        "school_medium": "English",
        "campus_area": "16187 Sq. Metres",
        "full_address": "Sainik Vihar, Pitam Pura, New Delhi, Delhi 110034, India"
    },
    {
        "affiliation_id": "2730162",
        "school_name": "Bal Bharati Public School (BBPS-PP), Pitampura",
        "about": "Bal Bharati Public School is alternatively also known as BBPS-PP. The school was established in 1944.",
        "contact_email": "balbharati@pp.balbharati.org",
        "latitude": "28.6928509",
        "longitude": "77.12000119999999",
        "rating": "3.4",
        "rated_by": "359",
        "classes": "LKG - 12th",
        "established": "1944",
        "school_medium": "English",
        "campus_area": "8 Acres",
        "full_address": "Parwana Rd, Pitam Pura, Delhi, 110034, India"
    },
    {
        "affiliation_id": "2730115",
        "school_name": "Birla Vidya Niketan, Pushp Vihar",
        "about": "Birla Vidya Niketan is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@birla.ac.in",
        "latitude": "28.5253869",
        "longitude": "77.2275823",
        "rating": "4.2",
        "rated_by": "419",
        "classes": "LKG - 12th",
        "established": "1983",
        "school_medium": "English",
        "campus_area": "25519 Sq. Metres",
        "full_address": "Sector 4, Pushp Vihar, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730027",
        "school_name": "Blue Bells School International, Greater Kailash",
        "about": "Blue Bells School International is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "contactus@bluebellsinternational.com",
        "latitude": "28.5598383",
        "longitude": "77.2373789",
        "rating": "4.7",
        "rated_by": "463",
        "classes": "Nursery - 12th",
        "established": "1957",
        "school_medium": "English",
        "campus_area": "3 Acres",
        "full_address": "Lajpat Nagar IV, Lajpat Nagar 4, New Delhi, Delhi 110024, India"
    },
    {
        "affiliation_id": "2730012",
        "school_name": "Convent of Jesus and Mary School (CJM), Bangla Sahib Marg",
        "about": "Convent of Jesus and Mary School is alternatively also known as CJM. The school was established in 1919.",
        "contact_email": "contact@cjmdelhi.com, cjm.delhi@yahoo.com",
        "latitude": "28.6326086",
        "longitude": "77.20829789999999",
        "rating": "4.4",
        "rated_by": "448",
        "classes": "LKG - 12th",
        "established": "1919",
        "school_medium": "English",
        "campus_area": "12346 Sq. Metres",
        "full_address": "1, Bangla Sahib Rd, Sector 4, Gole Market, New Delhi, Delhi 110001, India"
    },
    {
        "affiliation_id": "2730303",
        "school_name": "Delhi Public School (DPS), Sector 24, Rohini",
        "about": "Delhi Public School is alternatively also known as DPS. The school was established in 1995.",
        "contact_email": "mail@dpsrohini.com, vp@dpsrohini.com",
        "latitude": "28.7299536",
        "longitude": "77.0859102",
        "rating": "3.2",
        "rated_by": "304",
        "classes": "Nursery - 12th",
        "established": "1995",
        "school_medium": "English",
        "campus_area": "16187 Sq. Metres",
        "full_address": "SG Marg, Phase 3, Sector-24, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730094",
        "school_name": "Gyan Bharati School, Saket",
        "about": "Gyan Bharati School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "gyanbharati@gmail.com",
        "latitude": "28.5220971",
        "longitude": "77.2101534",
        "rating": "4",
        "rated_by": "442",
        "classes": "Nursery - 12th",
        "established": "1980",
        "school_medium": "English",
        "campus_area": "7.29 Acres",
        "full_address": "Saket, New Delhi, Delhi 110017, India"
    },
    {
        "affiliation_id": "2730244",
        "school_name": "N.K. Bagrodia Public School (NKBPS), New Delhi",
        "about": "N.K. Bagrodia Public School is alternatively also known as NKBPS. The school was established in 1991.",
        "contact_email": "nkbpsrohini@yahoo.co.in",
        "latitude": "28.712415",
        "longitude": "77.123711",
        "rating": "3.6",
        "rated_by": "418",
        "classes": "Nursery - 12th",
        "established": "1991",
        "school_medium": "English",
        "campus_area": "3.82 Acres",
        "full_address": "Ahinsa Vihar Rd, Rajapur, Sector 9, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730295",
        "school_name": "Sanskriti School, Chanakyapuri",
        "about": "Sanskriti School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "school@sanskritischool.edu.in, junior@sanskritischool.edu.in",
        "latitude": "28.590948",
        "longitude": "77.1804609",
        "rating": "4.5",
        "rated_by": "359",
        "classes": "Nursery - 12th",
        "established": "1996",
        "school_medium": "English",
        "campus_area": "31250 Sq. Metres",
        "full_address": "EP-32, Dr S Radhakrishnan Marg, Chanakyapuri, New Delhi, Delhi 110021, India"
    },
    {
        "affiliation_id": "2730506",
        "school_name": "The Heritage School, Rohini Sector 23",
        "about": "The Heritage School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "contact@rohini.theheritageschool.in, admission@rohini.theheritageschool.in",
        "latitude": "28.7082564",
        "longitude": "77.120189",
        "rating": "3",
        "rated_by": "427",
        "classes": "Nursery - 12th",
        "established": "2003",
        "school_medium": "English",
        "campus_area": "16188 Sq. Metres",
        "full_address": "Plot No 40, Pocket 11, Sec 24, Pocket 7, Sector 7, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730326",
        "school_name": "The Indian School",
        "about": "The Indian School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "contactus@theindianschool.in",
        "latitude": "28.5518172",
        "longitude": "77.22829089999999",
        "rating": "3.6",
        "rated_by": "311",
        "classes": "Nursery - 12th",
        "established": "1996",
        "school_medium": "English",
        "campus_area": "9469 Sq. Metres",
        "full_address": "Josip Broz Tito Marg, New Delhi, Delhi 110049, India"
    },
    {
        "affiliation_id": "2730494",
        "school_name": "Aadharshila Vidyapeeth, Pitampura",
        "about": "Aadharshila Vidyapeeth is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "aadharshila_v@hotmail.com, info@aadharshilavidyapeeth.org",
        "latitude": "28.705305",
        "longitude": "77.1377306",
        "rating": "3.4",
        "rated_by": "312",
        "classes": "Nursery - 12th",
        "established": "1997",
        "school_medium": "English",
        "campus_area": "8903 Sq. Metres",
        "full_address": "Block CD, Dakshini Pitampura, Pitam Pura, Delhi, 110034, India"
    },
    {
        "affiliation_id": "2730168",
        "school_name": "Ahlcon Public School (APS), New Delhi",
        "about": "Ahlcon Public School is alternatively also known as APS. The school was established in 1988.",
        "contact_email": "mail@ahlconpublicschool.com",
        "latitude": "28.6083697",
        "longitude": "77.293112",
        "rating": "3.9",
        "rated_by": "334",
        "classes": "Nursery - 12th",
        "established": "1988",
        "school_medium": "English",
        "campus_area": "14326 Sq. Metres",
        "full_address": "Mayur Vihar, New Delhi, Delhi 110091, India"
    },
    {
        "affiliation_id": "2730007",
        "school_name": "Air Force Golden Jubilee Institute (AFGJI), New Delhi",
        "about": "Air Force Golden Jubilee Institute is alternatively also known as AFGJI. The school was established in 1986.",
        "contact_email": "principal.afgji@gmail.com",
        "latitude": "28.5758045",
        "longitude": "77.1479068",
        "rating": "3.3",
        "rated_by": "353",
        "classes": "UKG - 12th",
        "established": "1986",
        "school_medium": "English",
        "campus_area": "8 Acres",
        "full_address": "Airmen Mess Rd, Subroto Park, New Delhi, Delhi 110057, India"
    },
    {
        "affiliation_id": "2730586",
        "school_name": "Amity International School (AIS), Mayur Vihar",
        "about": "Amity International School is alternatively also known as AIS. The school was established in 1999.",
        "contact_email": "principal@aismv.amity.edu",
        "latitude": "28.6083697",
        "longitude": "77.293112",
        "rating": "4",
        "rated_by": "444",
        "classes": "1st - 12th",
        "established": "1999",
        "school_medium": "English",
        "campus_area": "5670 Sq. Metres",
        "full_address": "Mayur Vihar, New Delhi, Delhi 110091, India"
    },
    {
        "affiliation_id": "2730612",
        "school_name": "Amity International School (AIS), New Delhi",
        "about": "Amity International School is alternatively also known as AIS. The school was established in 2004.",
        "contact_email": "principal@aispv.amity.edu",
        "latitude": "28.5306126",
        "longitude": "77.2297379",
        "rating": "4",
        "rated_by": "474",
        "classes": "LKG - 12th",
        "established": "2004",
        "school_medium": "English",
        "campus_area": "3 Acres",
        "full_address": "Sector 7, Pushp Vihar, New Delhi, Delhi 110017, India"
    },
    {
        "affiliation_id": "2730496",
        "school_name": "Amrita Vidyalayam, Pushp Vihar",
        "about": "Amrita Vidyalayam is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "amrita.vidyalayam@gmail.com",
        "latitude": "28.5306126",
        "longitude": "77.2297379",
        "rating": "4.3",
        "rated_by": "334",
        "classes": "Nursery - 12th",
        "established": "1984",
        "school_medium": "English",
        "campus_area": "9627 Sq. Metres",
        "full_address": "Sector 7, Pushp Vihar, New Delhi, Delhi 110017, India"
    },
    {
        "affiliation_id": "2730029",
        "school_name": "Apeejay School, Sheikh Sarai",
        "about": "Apeejay School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "skool.ss.del@apj.edu",
        "latitude": "28.5381962",
        "longitude": "77.2244157",
        "rating": "3.8",
        "rated_by": "349",
        "classes": "Pre-nursery - 12th",
        "established": "1975",
        "school_medium": "English",
        "campus_area": "6.50 Acres",
        "full_address": "Sheikh Sarai Road, Panchsheel Park, New Delhi, Delhi 110017, India"
    },
    {
        "affiliation_id": "2730637",
        "school_name": "Arwachin International School (AIS), Dilshad Garden",
        "about": "Arwachin International School is alternatively also known as AIS. The school was established in 2003.",
        "contact_email": "admin@arwachininternationalschool.com",
        "latitude": "28.6787589",
        "longitude": "77.3157098",
        "rating": "4.8",
        "rated_by": "302",
        "classes": "Nursery - 12th",
        "established": "2003",
        "school_medium": "English",
        "campus_area": "2 Acres",
        "full_address": "Pocket-B, Facility Center, near DTC Terminal, Block B, Block F, Dilshad Garden, Delhi, 110095, India"
    },
    {
        "affiliation_id": "2730203",
        "school_name": "ASN Senior Secondary School, Mayur Vihar-I",
        "about": "ASN Senior Secondary School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "asnschool@asnschool.org",
        "latitude": "28.6146243",
        "longitude": "77.3121575",
        "rating": "4",
        "rated_by": "493",
        "classes": "Nursery - 12th",
        "established": "1983",
        "school_medium": "English",
        "campus_area": "3.40 Acres",
        "full_address": "Mayur Vihar, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730282",
        "school_name": "Bal Bharti Public School (BBPS-Rohini), Rohini",
        "about": "Bal Bharti Public School is alternatively also known as BBPS-Rohini. The school was established in 1989.",
        "contact_email": "bbpsrh@balbharati.org",
        "latitude": "28.7112672",
        "longitude": "77.1326969",
        "rating": "3.5",
        "rated_by": "407",
        "classes": "Nursery - 12th",
        "established": "1989",
        "school_medium": "English",
        "campus_area": "13678 Sq. Metres",
        "full_address": "Sector 14, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730045",
        "school_name": "Bal Bharati Public School (BBPS-GRH), Ganga Ram Hospital Marg",
        "about": "Bal Bharati Public School is alternatively also known as BBPS-GRH. The school was established in 1944.",
        "contact_email": "lvsehgal@balbharati.org",
        "latitude": "28.6402321",
        "longitude": "77.1889135",
        "rating": "5",
        "rated_by": "434",
        "classes": "Nursery - 12th",
        "established": "1944",
        "school_medium": "English",
        "campus_area": "6 Acres",
        "full_address": "Sir Ganga Ram Hospital Marg, New Delhi, Delhi 110060, India"
    },
    {
        "affiliation_id": "2730460",
        "school_name": "BGS International Public School (BGSIPS), Dwarka",
        "about": "BGS International Public School is alternatively also known as BGSIPS. The school was established in 2003.",
        "contact_email": "bgsips2003@yahoo.com",
        "latitude": "28.5980218",
        "longitude": "77.0578855",
        "rating": "3.5",
        "rated_by": "369",
        "classes": "Pre-nursery - 12th",
        "established": "2003",
        "school_medium": "English",
        "campus_area": "3.96 Acres",
        "full_address": "Sector 5, Dwarka, Delhi, 110075, India"
    },
    {
        "affiliation_id": "2730174",
        "school_name": "Bosco Public School, Paschim Vihar",
        "about": "Bosco Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "school@boscopublicschool.com",
        "latitude": "28.6641293",
        "longitude": "77.0895421",
        "rating": "4.9",
        "rated_by": "319",
        "classes": "Nursery - 12th",
        "established": "1985",
        "school_medium": "English",
        "campus_area": "7295 Sq. Metres",
        "full_address": "Sunder Vihar, Paschim Vihar, Delhi, India"
    },
    {
        "affiliation_id": "2730565",
        "school_name": "Brilliant's Convent Senior Secondary School, Pitampura",
        "about": "Brilliant's Convent Senior Secondary School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "bcs34@rediffmail.com",
        "latitude": "28.6910277",
        "longitude": "77.10105159999999",
        "rating": "3.9",
        "rated_by": "487",
        "classes": "Nursery - 12th",
        "established": "2005",
        "school_medium": "English",
        "campus_area": "4046 Sq. Metres",
        "full_address": "West Enclave, Pitam Pura, Delhi, 110034, India"
    },
    {
        "affiliation_id": "2730028",
        "school_name": "Carmel Convent School, Chanakyapuri",
        "about": "Carmel Convent School is a Girls only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "carmeldelhi@gmail.com, carmel.carmeldelhi@gmail.com",
        "latitude": "28.6015047",
        "longitude": "77.18597799999999",
        "rating": "5",
        "rated_by": "385",
        "classes": "Nursery - 12th",
        "established": "1957",
        "school_medium": "English",
        "campus_area": "9348 Sq. Metres",
        "full_address": "Malcha Marg, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110021, India"
    },
    {
        "affiliation_id": "2730035",
        "school_name": "Chinmaya Vidyalaya Senior Secondary School, Vasant Vihar",
        "about": "Chinmaya Vidyalaya Senior Secondary School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "admin@chinmayavvdelhi.ac.in",
        "latitude": "28.5616397",
        "longitude": "77.15588389999999",
        "rating": "4.8",
        "rated_by": "387",
        "classes": "Nursery - 12th",
        "established": "1979",
        "school_medium": "English",
        "campus_area": "15175.71 Sq. Metres",
        "full_address": "New Delhi, Delhi 110057, India"
    },
    {
        "affiliation_id": "2730116",
        "school_name": "Darbari Lal DAV Model Senior Secondary School, Pitampura",
        "about": "Darbari Lal DAV Model Senior Secondary School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "dldavpp@yahoo.co.in",
        "latitude": "28.695853",
        "longitude": "77.145838",
        "rating": "3.2",
        "rated_by": "339",
        "classes": "Nursery - 12th",
        "established": "1981",
        "school_medium": "English",
        "campus_area": "3.98 Acres",
        "full_address": "ND Block Pitampura, Block SD, Dakshini Pitampura, Pitam Pura, Delhi, 110034, India"
    },
    {
        "affiliation_id": "2730364",
        "school_name": "Darshan Academy, New Delhi",
        "about": "Darshan Academy is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "infodelhi@darshanacademy.org",
        "latitude": "28.6952308",
        "longitude": "77.1947407",
        "rating": "3.7",
        "rated_by": "385",
        "classes": "Nursery - 12th",
        "established": "1997",
        "school_medium": "English",
        "campus_area": "12546 Sq. Metres",
        "full_address": "Sant Kirpal Singh Marg & Bhama Shah Marg, Ishwar Colony, Kalyan Vihar, Delhi, 110009, India"
    },
    {
        "affiliation_id": "2730254",
        "school_name": "D.A.V Public School, Sreshtha Vihar",
        "about": "D.A.V Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "davsvd@hotmail.com",
        "latitude": "28.6579588",
        "longitude": "77.3173656",
        "rating": "4.1",
        "rated_by": "392",
        "classes": "Pre-nursery - 12th",
        "established": "1989",
        "school_medium": "English",
        "campus_area": "6450 Sq. Metres",
        "full_address": "Shreshtha Vihar, Anand Vihar, Delhi, Uttar Pradesh, India"
    },
    {
        "affiliation_id": "2730390",
        "school_name": "Gyan Devi Salwan Public School (GDSPS), Rajendra Nagar",
        "about": "Gyan Devi Salwan Public School is alternatively also known as GDSPS. The school was established in 1990.",
        "contact_email": "gdsps@salwanschools.com",
        "latitude": "28.6354261",
        "longitude": "77.1856762",
        "rating": "3.5",
        "rated_by": "328",
        "classes": "Nursery - 12th",
        "established": "1990",
        "school_medium": "English",
        "campus_area": "4690 Sq. Metres",
        "full_address": "New Delhi, Delhi 110060, India"
    },
    {
        "affiliation_id": "2730459",
        "school_name": "Indraprastha International School, Dwarka",
        "about": "Indraprastha International School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "ipdwarka@indraprasthaschool.com",
        "latitude": "28.5811243",
        "longitude": "77.0575085",
        "rating": "3.2",
        "rated_by": "329",
        "classes": "Nursery - 12th",
        "established": "2003",
        "school_medium": "English",
        "campus_area": "8094 Sq. Metres",
        "full_address": "PNB Dwarka Sector- 10, Dwarka Shree Ramlila Society ,Ramlila Ground New 110075, Sector 10 Dwarka, Dwarka, Sector 10 Dwarka, Dwarka, Delhi, 110075, India"
    },
    {
        "affiliation_id": "2730531",
        "school_name": "Indraprastha World School, Paschim Vihar",
        "about": "Indraprastha World School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "indraprasthaschool@gmail.com",
        "latitude": "28.6730501",
        "longitude": "77.10033229999999",
        "rating": "4.6",
        "rated_by": "308",
        "classes": "Pre-nursery - 12th",
        "established": "1995",
        "school_medium": "English",
        "campus_area": "14840 Sq. Metres",
        "full_address": "A 2 Block, Paschim Vihar, New Delhi, Delhi 110063, India"
    },
    {
        "affiliation_id": "2730412",
        "school_name": "ITL Public School, Dwarka",
        "about": "ITL Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "itlschool@yahoo.in",
        "latitude": "28.5787888",
        "longitude": "77.06652",
        "rating": "4.9",
        "rated_by": "380",
        "classes": "Pre-nursery - 12th",
        "established": "2001",
        "school_medium": "English",
        "campus_area": "4 Acres",
        "full_address": "Dwarka Sector 9, Dwarka, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730110",
        "school_name": "KIIT World School, Pitampura",
        "about": "KIIT World School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@kiitworld.in",
        "latitude": "28.71643379999999",
        "longitude": "77.142427",
        "rating": "3.4",
        "rated_by": "500",
        "classes": "6th - 12th",
        "established": "1968",
        "school_medium": "English",
        "campus_area": "6070.28 Sq. Metres",
        "full_address": "Zone H-4/5, Block CU, Uttari Pitampura, Pitam Pura, Delhi, 110083, India"
    },
    {
        "affiliation_id": "2730480",
        "school_name": "K R Mangalam World School, Greater Kailash – Li",
        "about": "K R Mangalam World School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "admission@krmangalam.com, principal.gk@krmangalam.com",
        "latitude": "28.5306805",
        "longitude": "77.2455444",
        "rating": "3.3",
        "rated_by": "381",
        "classes": "Nursery - 12th",
        "established": "1980",
        "school_medium": "English",
        "campus_area": "18225 Sq. Metres",
        "full_address": "Block S, Greater Kailash II, Greater Kailash, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730160",
        "school_name": "Lancer's Convent Senior Secondary School, Prashant Vihar",
        "about": "Lancer's Convent Senior Secondary School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "lancer_convent@hotmail.Com",
        "latitude": "28.7032008",
        "longitude": "77.13043549999999",
        "rating": "3.7",
        "rated_by": "343",
        "classes": "Nursery - 12th",
        "established": "1988",
        "school_medium": "English",
        "campus_area": "4 Acres",
        "full_address": "Outer Ring Rd, Delhi, India"
    },
    {
        "affiliation_id": "2730135",
        "school_name": "Loreto Convent School, Delhi Cantt",
        "about": "Loreto Convent School is a Girls only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "loretodelhi@gmail.com",
        "latitude": "28.5839961",
        "longitude": "77.1363902",
        "rating": "4.2",
        "rated_by": "378",
        "classes": "Nursery - 12th",
        "established": "1964",
        "school_medium": "English",
        "campus_area": "40468 Sq. Metres",
        "full_address": "Parade Rd, Delhi Cantonment, New Delhi, Delhi 110010, India"
    },
    {
        "affiliation_id": "2730149",
        "school_name": "Maharaja Agrasen Model School (MAMS), Pitampura",
        "about": "Maharaja Agrasen Model School is alternatively also known as MAMS. The school was established in 1985.",
        "contact_email": "agrasenschool1985@gmail.com",
        "latitude": "28.705305",
        "longitude": "77.1377306",
        "rating": "3.4",
        "rated_by": "312",
        "classes": "1st - 12th",
        "established": "1985",
        "school_medium": "English",
        "campus_area": "12610 Sq. Metres",
        "full_address": "Block CD, Dakshini Pitampura, Pitam Pura, Delhi, 110034, India"
    },
    {
        "affiliation_id": "2730066",
        "school_name": "Modern Public School (MPS), Shalimar Bagh",
        "about": "Modern Public School is alternatively also known as MPS. The school was established in 1971.",
        "contact_email": "mpsshbagh@gmail.com, info@mpsshalimarbagh.com",
        "latitude": "28.7181465",
        "longitude": "77.15768349999999",
        "rating": "3.9",
        "rated_by": "383",
        "classes": "Nursery - 12th",
        "established": "1971",
        "school_medium": "English",
        "campus_area": "8097 Sq. Metres",
        "full_address": "Block B, Police Colony, Shalimar Bagh, Delhi, 110088, India"
    },
    {
        "affiliation_id": "2730041",
        "school_name": "Modern School, Vasant Vihar",
        "about": "Modern School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "msvvdel@gmail.com, po.msvv@gmail.com",
        "latitude": "28.5603647",
        "longitude": "77.1611317",
        "rating": "5",
        "rated_by": "489",
        "classes": "Nursery - 12th",
        "established": "1975",
        "school_medium": "English",
        "campus_area": "9 Acres",
        "full_address": "Vasant Vihar Poorvi Marg, Vasant Vihar, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730065",
        "school_name": "Montfort School, Ashok Vihar",
        "about": "Montfort School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "montfortschooldelhi@live.com",
        "latitude": "28.689477",
        "longitude": "77.1754088",
        "rating": "5",
        "rated_by": "448",
        "classes": "Pre-nursery - 12th",
        "established": "1970",
        "school_medium": "English",
        "campus_area": "25940 Sq. Metres",
        "full_address": "New Delhi, Delhi 110052, India"
    },
    {
        "affiliation_id": "2730183",
        "school_name": "Mother's Global School (MGS), New Delhi",
        "about": "Mother's Global School is alternatively also known as MGS. The school was established in 1984.",
        "contact_email": "info@mothersglobal.in",
        "latitude": "28.6384399",
        "longitude": "77.2929513",
        "rating": "4.1",
        "rated_by": "441",
        "classes": "Nursery - 12th",
        "established": "1984",
        "school_medium": "English",
        "campus_area": "8094 Sq. Metres",
        "full_address": "C Block, Preet Vihar, Delhi, 110092, India"
    },
    {
        "affiliation_id": "2730573",
        "school_name": "Mother Mary's School, New Delhi",
        "about": "Mother Mary's School is a Girls only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "contact@mothermarysschoolmayurvihar.com",
        "latitude": "28.5985411",
        "longitude": "77.29937939999999",
        "rating": "3.9",
        "rated_by": "327",
        "classes": "Nursery - 12th",
        "established": "2006",
        "school_medium": "English",
        "campus_area": "8093.71 Sq. Metres",
        "full_address": "Site No. 1, Sahakarita Marg, Chilla Sarda Bangar, Chilla Sarda Bangar Village, Mayur Vihar, New Delhi, Delhi 110091, India"
    },
    {
        "affiliation_id": "2730032",
        "school_name": "Mount Carmel School, Anand Niketan",
        "about": "Mount Carmel School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info.an@mountcarmeldelhi.com",
        "latitude": "28.5870432",
        "longitude": "77.1694507",
        "rating": "4.5",
        "rated_by": "487",
        "classes": "Nursery - 12th",
        "established": "1972",
        "school_medium": "English",
        "full_address": "21, Street A, Moti Bagh II, Satya Niketan, South Moti Bagh, New Delhi, Delhi 110021, India"
    },
    {
        "affiliation_id": "2730477",
        "school_name": "Mount Carmel School, Dwarka",
        "about": "Mount Carmel School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info.dw@mountcarmeldelhi.com",
        "latitude": "28.5607215",
        "longitude": "77.05971749999999",
        "rating": "4",
        "rated_by": "489",
        "classes": "Nursery - 12th",
        "established": "1997",
        "school_medium": "English",
        "full_address": "Sector 22 Dwarka, Dwarka, Delhi, 110077, India"
    },
    {
        "affiliation_id": "2730047",
        "school_name": "New Era Public School (NEPS), New Delhi",
        "about": "New Era Public School is alternatively also known as NEPS. The school was established in 1960.",
        "contact_email": "uchpneps@gmail.com, admin@newerapublicschool.in",
        "latitude": "28.6251048",
        "longitude": "77.1178664",
        "rating": "4",
        "rated_by": "489",
        "classes": "1st - 12th",
        "established": "1960",
        "school_medium": "English",
        "campus_area": "10929 Sq. Metres",
        "full_address": "H-17, Mayapuri Rd, Mayapuri, New Delhi, Delhi 110064, India"
    },
    {
        "affiliation_id": "2730495",
        "school_name": "Queen’s Convent school, Rohini",
        "about": "Queen’s Convent school is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@queensconvent.com, qms_rohini@yahoo.co.in",
        "latitude": "28.735214",
        "longitude": "77.0957486",
        "rating": "3.5",
        "rated_by": "461",
        "classes": "Nursery - 12th",
        "established": "1997",
        "school_medium": "English",
        "campus_area": "4046 Sq. Metres",
        "full_address": "Sector 25, Rohini, Delhi, India"
    },
    {
        "affiliation_id": "2730165",
        "school_name": "Rukmini Devi Public School (RDPS), Pitampura",
        "about": "Rukmini Devi Public School is alternatively also known as RDPS. The school was established in 1986.",
        "contact_email": "contact@rdpschool.edu.in",
        "latitude": "28.705305",
        "longitude": "77.1377306",
        "rating": "3",
        "rated_by": "379",
        "classes": "Pre-nursery - 12th",
        "established": "1986",
        "school_medium": "English",
        "campus_area": "8000 Sq. Metres",
        "full_address": "Block CD, Dakshini Pitampura, Pitam Pura, Delhi, 110034, India"
    },
    {
        "affiliation_id": "2730310",
        "school_name": "Ryan International School, Rohini",
        "about": "Ryan International School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "ris.s25rohini@ryangroup.org",
        "latitude": "28.7370227",
        "longitude": "77.089722",
        "rating": "4.4",
        "rated_by": "452",
        "classes": "1st - 12th",
        "established": "1992",
        "school_medium": "English",
        "campus_area": "16187 Sq. Metres",
        "full_address": "Pocket 9, Sector 25, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730124",
        "school_name": "Sachdeva Public School (SPS), Pitampura",
        "about": "Sachdeva Public School is alternatively also known as SPS. The school was established in 1985.",
        "contact_email": "info@sachdevapublicschool.org",
        "latitude": "28.7030535",
        "longitude": "77.1466459",
        "rating": "3",
        "rated_by": "486",
        "classes": "Pre-nursery - 12th",
        "established": "1985",
        "school_medium": "English",
        "campus_area": "2.21 Acres",
        "full_address": "Maurya Enclave, Hotel City Park Rd, FP Block, Block JP, Poorvi Pitampura, Pitam Pura, Delhi, 110088, India"
    },
    {
        "affiliation_id": "2730241",
        "school_name": "Sachdeva Public School (SPS), Rohini Sector 13",
        "about": "Sachdeva Public School is alternatively also known as SPS. The school was established in 1992.",
        "contact_email": "info@spsrohini.com",
        "latitude": "28.7220517",
        "longitude": "77.128472",
        "rating": "3.1",
        "rated_by": "429",
        "classes": "Pre-nursery - 12th",
        "established": "1992",
        "school_medium": "English",
        "campus_area": "4 Acres",
        "full_address": "Rohini Sector 13, Sector 13, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730401",
        "school_name": "Salwan Public School (SPS), Mayur Vihar",
        "about": "Salwan Public School is alternatively also known as SPS. The school was established in 1996.",
        "contact_email": "spsmayurvihar@salwanschools.com, principal.spsmayurvihar@salwanschools.com",
        "latitude": "28.6095544",
        "longitude": "77.3302981",
        "rating": "4",
        "rated_by": "353",
        "classes": "Nursery - 12th",
        "established": "1996",
        "school_medium": "English",
        "campus_area": "15000 Sq. Metres",
        "full_address": "Mayur Vihar Phase III, New Delhi, India"
    },
    {
        "affiliation_id": "2730277",
        "school_name": "Shah International Public School, New Delhi",
        "about": "Shah International Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "mail@shahinternationalschool.in, shahint95@yahoo.co.in",
        "latitude": "28.6658743",
        "longitude": "77.0827056",
        "rating": "3.6",
        "rated_by": "351",
        "classes": "Nursery - 12th",
        "established": "1998",
        "school_medium": "English",
        "campus_area": "15701 Sq. Metres",
        "full_address": "Kanshi Ram Shah Marg, Ambica Vihar, Paschim Vihar, Delhi, 110087, India"
    },
    {
        "affiliation_id": "2730154",
        "school_name": "Shaheed Rajpal DAV Public School, Dayanand Vihar",
        "about": "Shaheed Rajpal DAV Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "davr_dv@yahoo.com",
        "latitude": "28.6443433",
        "longitude": "77.30228679999999",
        "rating": "3.3",
        "rated_by": "497",
        "classes": "Nursery - 12th",
        "established": "1982",
        "school_medium": "English",
        "campus_area": "9000 Sq. Metres",
        "full_address": "Dayanand Vihar, Anand Vihar, Delhi, 110092, India"
    },
    {
        "affiliation_id": "2730155",
        "school_name": "Springdales School, Dhaula Kuan",
        "about": "Springdales School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "springdales@vsnl.com",
        "latitude": "28.5870587",
        "longitude": "77.1665046",
        "rating": "3.3",
        "rated_by": "401",
        "classes": "Nursery - 12th",
        "established": "1983",
        "school_medium": "English",
        "full_address": "Benito Juarez Marg, Dhaula Kuan, New Delhi, Delhi 110021, India"
    },
    {
        "affiliation_id": "2730043",
        "school_name": "Springdales School, Pusa Road",
        "about": "Springdales School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "ameetam@gmail.com",
        "latitude": "28.6449709",
        "longitude": "77.1967438",
        "rating": "3.5",
        "rated_by": "497",
        "classes": "Nursery - 12th",
        "established": "1955",
        "school_medium": "English",
        "campus_area": "7284 Sq. Metres",
        "full_address": "Pusa Road UPPER RIDGE ROAD JUNCTION, Old Rajinder Nagar, New Delhi, Delhi 110005, India"
    },
    {
        "affiliation_id": "2730642",
        "school_name": "Sri Venkateshwar International School (SVIS), Dwarka",
        "about": "Sri Venkateshwar International School is alternatively also known as SVIS. The school was established in 2006.",
        "contact_email": "info@svis.org.in",
        "latitude": "28.5871504",
        "longitude": "77.0648034",
        "rating": "4.3",
        "rated_by": "338",
        "classes": "Pre-nursery - 12th",
        "established": "2006",
        "school_medium": "English",
        "campus_area": "8264.77 Sq. Metres",
        "full_address": "Sector 6 Dwarka, Dwarka, Delhi, 110075, India"
    },
    {
        "affiliation_id": "2730073",
        "school_name": "St. Francis De Sales Senior Secondary School, Janakpuri",
        "about": "St. Francis De Sales Senior Secondary School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "mail@sfsdelhi.com",
        "latitude": "28.621016",
        "longitude": "77.092574",
        "rating": "4.3",
        "rated_by": "359",
        "classes": "Nursery - 12th",
        "established": "1978",
        "school_medium": "English",
        "campus_area": "16114.58 Sq. Metres",
        "full_address": "4c, Janakpuri, New Delhi, Delhi 110058, India"
    },
    {
        "affiliation_id": "2730182",
        "school_name": "St George'S School, Alaknanda",
        "about": "St George'S School is affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@sgs.edu.in",
        "latitude": "28.5304408",
        "longitude": "77.2505733",
        "rating": "4",
        "rated_by": "334",
        "classes": "Nursery - 12th",
        "established": "1962",
        "school_medium": "English",
        "campus_area": "8097 Sq. Metres",
        "full_address": "Alaknanda, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730350",
        "school_name": "St. Gregorios School, Dwarka",
        "about": "St. Gregorios School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "principalsgs@yahoo.co.in",
        "latitude": "28.5868958",
        "longitude": "77.0501018",
        "rating": "3.6",
        "rated_by": "481",
        "classes": "UKG - 12th",
        "established": "1981",
        "school_medium": "English",
        "campus_area": "3589 Sq. Metres",
        "full_address": "Plot No. 12, Sector 11 Dwarka, Dwarka, New Delhi, Delhi 110075, India"
    },
    {
        "affiliation_id": "2730188",
        "school_name": "St. Mark's Senior Secondary Public School, Meera Bagh",
        "about": "St. Mark's Senior Secondary Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "stmarksmb@saintmarksschool.com",
        "latitude": "28.6590451",
        "longitude": "77.0888228",
        "rating": "3.9",
        "rated_by": "432",
        "classes": "1st - 12th",
        "established": "1990",
        "school_medium": "English",
        "campus_area": "17037 Sq. Metres",
        "full_address": "Block A, Meera Bagh, Nangloi Saiyed, Delhi, 110087, India"
    },
    {
        "affiliation_id": "2730014",
        "school_name": "St Thomas Girls Senior Secondary School, Mandir Marg",
        "about": "St Thomas Girls Senior Secondary School is a Girls only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "stsschool@gmail.com",
        "latitude": "28.6341752",
        "longitude": "77.20047459999999",
        "rating": "3.1",
        "rated_by": "329",
        "classes": "Nursery - 12th",
        "established": "1930",
        "school_medium": "English",
        "campus_area": "10213 Sq. Metres",
        "full_address": "Mandir Marg, New Delhi, Delhi 110001, India"
    },
    {
        "affiliation_id": "2730579",
        "school_name": "St. Mark's Girls Senior Secondary School (SMGS), Meera Bagh",
        "about": "St. Mark's Girls Senior Secondary School is alternatively also known as SMGS. The school was established in 1975.",
        "contact_email": "smgs@saintmarksschool.com",
        "latitude": "28.6590451",
        "longitude": "77.0888228",
        "rating": "3.2",
        "rated_by": "445",
        "classes": "Nursery - 12th",
        "established": "1975",
        "school_medium": "English",
        "campus_area": "4.22 Acres",
        "full_address": "Block A, Meera Bagh, Nangloi Saiyed, Delhi, 110087, India"
    },
    {
        "affiliation_id": "2730023",
        "school_name": "Summer Fields School (SFS), Kailash Colony",
        "about": "Summer Fields School is alternatively also known as SFS. The school was established in 1953.",
        "contact_email": "info@summerfields.co.in",
        "latitude": "28.5534601",
        "longitude": "77.24258069999999",
        "rating": "4.5",
        "rated_by": "376",
        "classes": "Pre-nursery - 12th",
        "established": "1953",
        "school_medium": "Hindi",
        "campus_area": "12145 Sq. Metres",
        "full_address": "Kailash Colony, Greater Kailash, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730034",
        "school_name": "Tagore International School (T I S), Vasant Vihar",
        "about": "Tagore International School is alternatively also known as T I S. The school was established in 1972.",
        "contact_email": "info.vv@tagoreint.com",
        "latitude": "28.56737",
        "longitude": "77.1591041",
        "rating": "3.4",
        "rated_by": "426",
        "classes": "Nursery - 12th",
        "established": "1972",
        "school_medium": "English",
        "campus_area": "2.50 Acres",
        "full_address": "72, Paschimi Marg, Block C, Vasant Vihar, New Delhi, Delhi 110057, India"
    },
    {
        "affiliation_id": "DE001",
        "school_name": "The Frank Anthony Public School, Lajpat Nagar",
        "about": "The Frank Anthony Public School is a Co-ed school affiliated to Council for Indian School Certificate Examinations (CISCE).",
        "latitude": "28.5642859",
        "longitude": "77.2369229",
        "rating": "4",
        "rated_by": "477",
        "classes": "Pre-nursery - 12th",
        "established": "1958",
        "full_address": "Lajpat Nagar IV, Lajpat Nagar 4, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730577",
        "school_name": "The Srijan School, New Delhi",
        "about": "The Srijan School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@thesrijanschool.com",
        "latitude": "28.711614",
        "longitude": "77.18800150000001",
        "rating": "3.8",
        "rated_by": "396",
        "classes": "Nursery - 12th",
        "established": "2003",
        "school_medium": "English",
        "campus_area": "8093.71 Sq. Metres",
        "full_address": "4/105, Ashok Vihar, Pocket M, Phase 2, Model Town, Delhi, 110009, India"
    },
    {
        "affiliation_id": "2730382",
        "school_name": "Venkateshwar International School (V.I.S), Dwarka",
        "about": "Venkateshwar International School is alternatively also known as V.I.S. The school was established in 2001.",
        "contact_email": "principal@vis10dwarka.com",
        "latitude": "28.5849492",
        "longitude": "77.05828439999999",
        "rating": "3.2",
        "rated_by": "410",
        "classes": "1st - 12th",
        "established": "2001",
        "school_medium": "English",
        "campus_area": "16187 Sq. Metres",
        "full_address": "Sector 10 Dwarka, Dwarka, Delhi, 110075, India"
    },
    {
        "affiliation_id": "2730365",
        "school_name": "Vikas Bharti Public School (VBPS), Sector 24, Rohini",
        "about": "Vikas Bharti Public School is alternatively also known as VBPS. The school was established in 1987.",
        "contact_email": "info@vikasbharati.com, vikasbharati@yahoo.co.in",
        "latitude": "28.7284523",
        "longitude": "77.0881034",
        "rating": "3.2",
        "rated_by": "494",
        "classes": "Pre-nursery - 12th",
        "established": "1987",
        "school_medium": "English",
        "campus_area": "16000 Sq. Metres",
        "full_address": "Sector-24, Rohini, Delhi, India"
    },
    {
        "affiliation_id": "2730119",
        "school_name": "Adarsh Public School, Vikaspuri",
        "about": "Adarsh Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "adarshpublicschool@hotmail.com",
        "latitude": "28.6344526",
        "longitude": "77.07155639999999",
        "rating": "3.5",
        "rated_by": "421",
        "classes": "Nursery - 12th",
        "established": "1936",
        "school_medium": "English",
        "campus_area": "6000 Sq. Metres",
        "full_address": "Block C, Vikaspuri, New Delhi, Delhi 110018, India"
    },
    {
        "affiliation_id": "2730095",
        "school_name": "Ambience Public School (APS), New Delhi",
        "about": "Ambience Public School is alternatively also known as APS. The school was established in 1971.",
        "contact_email": "info@ambiencepublicschool.com",
        "latitude": "28.5680076",
        "longitude": "77.19835719999999",
        "rating": "3.9",
        "rated_by": "465",
        "classes": "Nursery - 12th",
        "established": "1971",
        "school_medium": "English",
        "campus_area": "7041 Sq. Metres",
        "full_address": "A-1/258, Block A 1, Nauroji Nagar, Safdarjung Enclave, New Delhi, Delhi 110029, India"
    },
    {
        "affiliation_id": "2776013",
        "school_name": "Andhra Education Society N.T. Rama Rao Memorial Senior Secondary School (AES), Janakpuri",
        "about": "Andhra Education Society N.T. Rama Rao Memorial Senior Secondary School is alternatively also known as AES. The school was established in 1975.",
        "contact_email": "andhraeducationsociety@gmail.com",
        "latitude": "28.6249083",
        "longitude": "77.08774369999999",
        "rating": "3.4",
        "rated_by": "397",
        "classes": "1st - 12th",
        "established": "1975",
        "school_medium": "English",
        "campus_area": "8094 Sq. Metres",
        "full_address": "Block B 3B, Janakpuri, New Delhi, Delhi 110058, India"
    },
    {
        "affiliation_id": "2730181",
        "school_name": "Apeejay School, New Delhi",
        "about": "Apeejay School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "skool.saket.del@apj.edu",
        "latitude": "28.519124",
        "longitude": "77.2106289",
        "rating": "4.1",
        "rated_by": "400",
        "classes": "Nursery - 12th",
        "established": "1988",
        "school_medium": "English",
        "campus_area": "4047 Sq. Metres",
        "full_address": "Gurudwara Rd, Saket, New Delhi, Delhi 110017, India"
    },
    {
        "affiliation_id": "2730104",
        "school_name": "Bal Bhavan Public School (BBPS), Mayur Vihar",
        "about": "Bal Bhavan Public School is alternatively also known as BBPS. The school was established in 1967.",
        "contact_email": "admission@bbpsmv.com, helpdesk@bbpsmv.com",
        "latitude": "28.6196313",
        "longitude": "77.3024592",
        "rating": "3.1",
        "rated_by": "408",
        "classes": "Nursery - 12th",
        "established": "1967",
        "school_medium": "English",
        "campus_area": "15993.10 Sq. Metres",
        "full_address": "G.C.Lagan Marg, Pocket B, Mayur Vihar, New Delhi, Delhi 110091, India"
    },
    {
        "affiliation_id": "2730199",
        "school_name": "The Banyan Tree School, Lodhi Road",
        "about": "The Banyan Tree School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@banyantree.in",
        "latitude": "28.5910626",
        "longitude": "77.2280791",
        "rating": "3.9",
        "rated_by": "465",
        "classes": "Nursery - 12th",
        "established": "1990",
        "school_medium": "English",
        "campus_area": "2 Acres",
        "full_address": "Lodhi Rd, New Delhi, Delhi 110003, India"
    },
    {
        "affiliation_id": "2730543",
        "school_name": "Basava International School (BIS), Dwarka",
        "about": "Basava International School is alternatively also known as BIS. The school was established in 2004.",
        "contact_email": "info@basavainternational.school",
        "latitude": "28.5633432",
        "longitude": "77.05500719999999",
        "rating": "3.2",
        "rated_by": "343",
        "classes": "Nursery - 12th",
        "established": "2004",
        "school_medium": "English",
        "campus_area": "4 Acres",
        "full_address": "Sector 23, Dwarka, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730394",
        "school_name": "Bhai Parmanad Vidya Mandir, Anand Vihar",
        "about": "Bhai Parmanad Vidya Mandir is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@bvmschool.in",
        "latitude": "28.6560333",
        "longitude": "77.3083904",
        "rating": "3.3",
        "rated_by": "484",
        "classes": "Nursery - 12th",
        "established": "1991",
        "school_medium": "English",
        "campus_area": "4.23 Acres",
        "full_address": "Surya Niketan, Anand Vihar, New Delhi, Delhi 110092, India"
    },
    {
        "affiliation_id": "2730011",
        "school_name": "Bharatiya Vidya Bhavan's Mehta Vidyalaya (BVB), New Delhi",
        "about": "Bharatiya Vidya Bhavan's Mehta Vidyalaya is alternatively also known as BVB. The school was established in 1954.",
        "contact_email": "mehtavidyalaya@rediffmail.com",
        "latitude": "28.622932",
        "longitude": "77.2252942",
        "rating": "4.1",
        "rated_by": "445",
        "classes": "Nursery - 12th",
        "established": "1954",
        "school_medium": "English",
        "campus_area": "8672 Sq. Metres",
        "full_address": "KG Marg, New Delhi, Delhi 110001, India"
    },
    {
        "affiliation_id": "2730534",
        "school_name": "Bharti Public School (BPS), Mayur Vihar",
        "about": "Bharti Public School is alternatively also known as BPS. The school was established in 1980.",
        "contact_email": "info.mv@bps.edu.in",
        "latitude": "28.6095544",
        "longitude": "77.3302981",
        "rating": "4",
        "rated_by": "429",
        "classes": "Pre-nursery - 12th",
        "established": "1980",
        "school_medium": "Hindi",
        "campus_area": "8093 Sq. Metres",
        "full_address": "Mayur Vihar Phase III, New Delhi, India"
    },
    {
        "affiliation_id": "2730193",
        "school_name": "Bhatnagar International School (BIS), New Delhi",
        "about": "Bhatnagar International School is alternatively also known as BIS. The school was established in 1990.",
        "contact_email": "bhatnagarinternationalschool@gmail.com, principalbisvasantkunj@gmail.com",
        "latitude": "28.5412473",
        "longitude": "77.1551671",
        "rating": "5",
        "rated_by": "422",
        "classes": "Nursery - 12th",
        "established": "1990",
        "school_medium": "English",
        "campus_area": "14164 Sq. Metres",
        "full_address": "Plot No, 2, Nelson Mandela Marg, Ambience Island, Vasant Kunj II, Vasant Kunj, New Delhi, Delhi 110070, India"
    },
    {
        "affiliation_id": "2730268",
        "school_name": "Bloom Public School, Vasant Kunj",
        "about": "Bloom Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "information@bloompublicschool.org",
        "latitude": "28.537632",
        "longitude": "77.141533",
        "rating": "3.3",
        "rated_by": "432",
        "classes": "Pre-nursery - 12th",
        "established": "1987",
        "school_medium": "English",
        "campus_area": "6070 Sq. Metres",
        "full_address": "Pocket 8, Sector C, Vasant Kunj, New Delhi, Delhi 110070, India"
    },
    {
        "affiliation_id": "2730016",
        "school_name": "Cambridge School, New Delhi",
        "about": "Cambridge School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info.snp@cambridgeschool.edu.in",
        "latitude": "28.5651872",
        "longitude": "77.2518489",
        "rating": "4.8",
        "rated_by": "387",
        "classes": "3rd - 12th",
        "established": "1931",
        "school_medium": "English",
        "campus_area": "18984 Sq. Metres",
        "full_address": "Block H,Swami Pranavanand Marg.Ring Road, Srinivaspuri, Block H, Sri Niwaspuri, New Delhi, Delhi 110065, India"
    },
    {
        "affiliation_id": "2730169",
        "school_name": "Columbia Foundation Senior Secondary School (CFSSS), New Delhi",
        "about": "Columbia Foundation Senior Secondary School is alternatively also known as CFSSS. The school was established in 1985.",
        "contact_email": "columbia_foundation@yahoo.co.in",
        "latitude": "28.6406307",
        "longitude": "77.06457189999999",
        "rating": "4.3",
        "rated_by": "412",
        "classes": "Pre-nursery - 12th",
        "established": "1985",
        "school_medium": "English",
        "campus_area": "6070 Sq. Metres",
        "full_address": "Nightingale Rd, Lajpat Nagar II, Phase 1, Vikaspuri, Block A, Panchvati Apartment, Vikaspuri, New Delhi, Delhi 110018, India"
    },
    {
        "affiliation_id": "2730164",
        "school_name": "CRPF Public School, Rohini",
        "about": "CRPF Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "crpfschoolrohini@gmail.com",
        "latitude": "28.7157406",
        "longitude": "77.1351454",
        "rating": "3.3",
        "rated_by": "433",
        "classes": "LKG - 12th",
        "established": "1988",
        "school_medium": "English",
        "campus_area": "6999 Sq. Metres",
        "full_address": "Prashant Vihar, Sector 14, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730117",
        "school_name": "Darbari Lal DAV Model School, Shalimar Bagh",
        "about": "Darbari Lal DAV Model School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@dldavsb.org",
        "latitude": "28.70785759999999",
        "longitude": "77.1637451",
        "rating": "4.4",
        "rated_by": "387",
        "classes": "Nursery - 12th",
        "established": "1981",
        "school_medium": "English",
        "campus_area": "3.92 Acres",
        "full_address": "Block BN, Poorbi Shalimar Bag, Shalimar Bagh, Delhi, 110088, India"
    },
    {
        "affiliation_id": "2730292",
        "school_name": "D.A.V Public School, Ashok Vihar",
        "about": "D.A.V Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "davaskph4@gmail.com",
        "latitude": "28.6794057",
        "longitude": "77.1776331",
        "rating": "3.2",
        "rated_by": "344",
        "classes": "Nursery - 12th",
        "established": "1991",
        "school_medium": "English",
        "campus_area": "6069 Sq. Metres",
        "full_address": "Phase 4, Nimri Colony, Ashok Vihar, New Delhi, Delhi 110052, India"
    },
    {
        "affiliation_id": "2730186",
        "school_name": "DAV Public School, East Of Kailash",
        "about": "DAV Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "davkhills@hotmail.com",
        "latitude": "28.5592782",
        "longitude": "77.2567892",
        "rating": "4.8",
        "rated_by": "474",
        "classes": "Nursery - 12th",
        "established": "1983",
        "school_medium": "English",
        "campus_area": "97834 Sq. Metres",
        "full_address": "C Block, Kailash Hills, East of Kailash, New Delhi, Delhi 110065, India"
    },
    {
        "affiliation_id": "2730218",
        "school_name": "DAV Public School, Rohini",
        "about": "DAV Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "davpsrohini85@gmail.com",
        "latitude": "28.7080569",
        "longitude": "77.11795409999999",
        "rating": "3.2",
        "rated_by": "337",
        "classes": "Pre-nursery - 12th",
        "established": "1989",
        "school_medium": "English",
        "campus_area": "12885 Sq. Metres",
        "full_address": "Sector 7, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730151",
        "school_name": "DAV Public School, Vasant Kunj",
        "about": "DAV Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "davvasantkunj@gmail.com",
        "latitude": "28.5211639",
        "longitude": "77.1607391",
        "rating": "4.3",
        "rated_by": "450",
        "classes": "Nursery - 12th",
        "established": "1982",
        "school_medium": "English",
        "campus_area": "9695 Sq. Metres",
        "full_address": "Pocket 1, Sector B, Vasant Kunj, New Delhi, Delhi 110070, India"
    },
    {
        "affiliation_id": "2730578",
        "school_name": "Delhi International Public School (DIPS), Rohini",
        "about": "Delhi International Public School is alternatively also known as DIPS. The school was established in 2005.",
        "contact_email": "dips9rohini@rediffmail.com",
        "latitude": "28.7161663",
        "longitude": "77.1240672",
        "rating": "3.6",
        "rated_by": "313",
        "classes": "UKG - 12th",
        "established": "2005",
        "school_medium": "English",
        "campus_area": "4335 Sq. Metres",
        "full_address": "Sector 9, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730082",
        "school_name": "Don Bosco School, Alaknanda",
        "about": "Don Bosco School is a Boys only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "principal@donboscoschool.in",
        "latitude": "28.5317332",
        "longitude": "77.25387560000001",
        "rating": "3.7",
        "rated_by": "319",
        "classes": "Nursery - 12th",
        "established": "1980",
        "school_medium": "English",
        "campus_area": "17684 Sq. Metres",
        "full_address": "Alaknanda - DDA Flats Rd, Kalkaji, New Delhi, Delhi 110019, India"
    },
    {
        "affiliation_id": "2730596",
        "school_name": "Dwarka International School, Dwaraka",
        "about": "Dwarka International School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "dwarkainternationalschool@ymail.com",
        "latitude": "28.5937647",
        "longitude": "77.0434934",
        "rating": "4.5",
        "rated_by": "318",
        "classes": "Nursery - 12th",
        "established": "2006",
        "school_medium": "English",
        "campus_area": "8093.71 Sq. Metres",
        "full_address": "Sector 12 Dwarka, Dwarka, Delhi, 110075, India"
    },
    {
        "affiliation_id": "2730108",
        "school_name": "Fr. Agnel School, New Delhi",
        "about": "Fr. Agnel School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "office@agnel.org",
        "latitude": "28.5603647",
        "longitude": "77.2143725",
        "rating": "3.5",
        "rated_by": "405",
        "classes": "Nursery - 12th",
        "established": "1979",
        "school_medium": "English",
        "campus_area": "12140 Sq. Metres",
        "full_address": "Squadron Leader Mohinder Kumar Jain Marg, Gautam Nagar, New Delhi, Delhi 110049, India"
    },
    {
        "affiliation_id": "2730246",
        "school_name": "G.D. Goenka Public School (GDGPS), Vasant Kunj",
        "about": "G.D. Goenka Public School is alternatively also known as GDGPS. The school was established in 1994.",
        "contact_email": "school@gdgoenka.com",
        "latitude": "28.5292192",
        "longitude": "77.1549874",
        "rating": "4.1",
        "rated_by": "384",
        "classes": "Nursery - 12th",
        "established": "1994",
        "school_medium": "English",
        "campus_area": "17314 Sq. Metres",
        "full_address": "Pocket 8, Sector B, Vasant Kunj, New Delhi, Delhi 110070, India"
    },
    {
        "affiliation_id": "2730663",
        "school_name": "G.D. Goenka Public School (GDGPS), Dwarka",
        "about": "G.D. Goenka Public School is alternatively also known as GDGPS. The school was established in 2009.",
        "contact_email": "info@gdgoenkadwarka.in",
        "latitude": "28.5862275",
        "longitude": "77.05715459999999",
        "rating": "4.3",
        "rated_by": "443",
        "classes": "Nursery - 12th",
        "established": "2009",
        "school_medium": "English",
        "campus_area": "16187 Sq. Metres",
        "full_address": "H.A.F. (B), Part-1, Sector-10, Dwarka, Sector 10 Dwarka, Dwarka, New Delhi, Delhi 110075, India"
    },
    {
        "affiliation_id": "2730036",
        "school_name": "General Raj's School (GRS), Hauz Khas",
        "about": "General Raj's School is alternatively also known as GRS. The school was established in 1966.",
        "contact_email": "info@generalrajschool.com",
        "latitude": "28.5561983",
        "longitude": "77.21027389999999",
        "rating": "4.1",
        "rated_by": "463",
        "classes": "1st - 12th",
        "established": "1966",
        "school_medium": "English",
        "campus_area": "1.98 Acres",
        "full_address": "Balbir Saxena Marg, New Delhi, Delhi 110016, India"
    },
    {
        "affiliation_id": "2730129",
        "school_name": "Goodley Public School (GPS), Shalimar Bagh",
        "about": "Goodley Public School is alternatively also known as GPS. The school was established in 1984.",
        "contact_email": "info@goodleypublicschool.in",
        "latitude": "28.7117926",
        "longitude": "77.1567848",
        "rating": "4.7",
        "rated_by": "498",
        "classes": "Nursery - 12th",
        "established": "1984",
        "school_medium": "English",
        "campus_area": "7518 Sq. Metres",
        "full_address": "Block BD, West Shalimar Bagh, Shalimar Bagh, Delhi, 110088, India"
    },
    {
        "affiliation_id": "2730037",
        "school_name": "Green Fields School, New Delhi",
        "about": "Green Fields School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "green_fields_school@yahoo.com",
        "latitude": "28.5675456",
        "longitude": "77.1917259",
        "rating": "3.4",
        "rated_by": "363",
        "classes": "1st - 12th",
        "established": "1967",
        "school_medium": "English",
        "campus_area": "7401.70 Sq. Metres",
        "full_address": "A 2, A2/115, Block A 2, Nauroji Nagar, Safdarjung Enclave, New Delhi, Delhi 110029, India"
    },
    {
        "affiliation_id": "2730216",
        "school_name": "Greenway Modern School, Dilshad Garden",
        "about": "Greenway Modern School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "contact@greenwayschool.org",
        "latitude": "28.6802356",
        "longitude": "77.32433619999999",
        "rating": "3.1",
        "rated_by": "488",
        "classes": "Nursery - 12th",
        "established": "1983",
        "school_medium": "English",
        "campus_area": "7046 Sq. Metres",
        "full_address": "Pocket A, Pocket J & K, Dilshad Garden, New Delhi, Uttar Pradesh 110095, India"
    },
    {
        "affiliation_id": "2730056",
        "school_name": "Hans Raj Model School, New Delhi",
        "about": "Hans Raj Model School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@hansrajmodelschool.org",
        "latitude": "28.6633207",
        "longitude": "77.1252602",
        "rating": "3.4",
        "rated_by": "398",
        "classes": "Nursery - 12th",
        "established": "1966",
        "school_medium": "English",
        "campus_area": "8 Acres",
        "full_address": "Rd Number 73, West Punjabi Bagh, Punjabi Bagh, New Delhi, Delhi 110026, India"
    },
    {
        "affiliation_id": "2730234",
        "school_name": "Hillwoods Academy, New Delhi",
        "about": "Hillwoods Academy is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "hillwoodsgeneral@gmail.com",
        "latitude": "28.6410917",
        "longitude": "77.2991442",
        "rating": "3.1",
        "rated_by": "317",
        "classes": "Nursery - 12th",
        "established": "1982",
        "school_medium": "English",
        "campus_area": "3 Acres",
        "full_address": "G Block, Preet Vihar, Delhi, 110092, India"
    },
    {
        "affiliation_id": "2730018",
        "school_name": "Holy Child Auxilium School, Vasant Vihar",
        "about": "Holy Child Auxilium School is a Girls only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "hcauxiliumvv@yahoo.co.in",
        "latitude": "28.5603647",
        "longitude": "77.1611317",
        "rating": "4.5",
        "rated_by": "464",
        "classes": "6th - 12th",
        "established": "1970",
        "school_medium": "English",
        "campus_area": "3240 Sq. Metres",
        "full_address": "Vasant Vihar Poorvi Marg, Vasant Vihar, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730044",
        "school_name": "Holy Child Senior Secondary School (HCS), Tagore Garden",
        "about": "Holy Child Senior Secondary School is alternatively also known as HCS. The school was established in 1957.",
        "contact_email": "mail@holychilddelhi.org",
        "latitude": "28.648876",
        "longitude": "77.1096829",
        "rating": "4.1",
        "rated_by": "373",
        "classes": "Nursery - 12th",
        "established": "1957",
        "school_medium": "English",
        "campus_area": "20680 Sq. Metres",
        "full_address": "Tagore Garden, Tagore Garden Extension, New Delhi, Delhi 110027, India"
    },
    {
        "affiliation_id": "2730152",
        "school_name": "Jaspal Kaur Public School (JKPS), Shalimar Bagh",
        "about": "Jaspal Kaur Public School is alternatively also known as JKPS. The school was established in 1987.",
        "contact_email": "principal@jkps.org",
        "latitude": "28.7107889",
        "longitude": "77.1530781",
        "rating": "3.5",
        "rated_by": "405",
        "classes": "Nursery - 12th",
        "established": "1987",
        "school_medium": "English",
        "campus_area": "18008 Sq. Metres",
        "full_address": "B'Paschimi, Shalimar Bagh, Block BI, West Shalimar Bagh, Shalimar Bagh, New Delhi, Delhi 110088, India"
    },
    {
        "affiliation_id": "2774011",
        "school_name": "Jormal Periwal Memorial Senior Secondary School for the Blind, Delhi",
        "about": "Jormal Periwal Memorial Senior Secondary School for the Blind is a Boys only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "jpmsrsec@yahoo.co.in",
        "latitude": "28.5963001",
        "longitude": "77.2396602",
        "rating": "3.5",
        "rated_by": "304",
        "classes": "Nursery - 12th",
        "established": "1944",
        "school_medium": "English",
        "campus_area": "2.74 Acres",
        "full_address": "Dr Zakir Hussain Marg, Delhi Golf Club, Golf Links, New Delhi, Delhi 110003, India"
    },
    {
        "affiliation_id": "2730538",
        "school_name": "K.R. Mangalam World School, Vikaspuri",
        "about": "K.R. Mangalam World School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "admission@krmangalam.com, vikaspuri@krmangalam.com",
        "latitude": "28.6388834",
        "longitude": "77.07460209999999",
        "rating": "3.7",
        "rated_by": "373",
        "classes": "Nursery - 12th",
        "established": "1987",
        "school_medium": "English",
        "campus_area": "2.50 Acres",
        "full_address": "G 1, Community Centre, AK Market, Vikaspuri, New Delhi, Delhi 110018, India"
    },
    {
        "affiliation_id": "2730207",
        "school_name": "The Lawrence Public School, Janakpuri",
        "about": "The Lawrence Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "ipsjkp@rediffmail.com",
        "latitude": "28.6151989",
        "longitude": "77.0886096",
        "rating": "4.8",
        "rated_by": "483",
        "classes": "Nursery - 12th",
        "established": "1975",
        "school_medium": "Hindi",
        "full_address": "C-3/52, Block C3A, RWA Colony, Janakpuri, New Delhi, Delhi 110058, India"
    },
    {
        "affiliation_id": "2730038",
        "school_name": "Laxman Public School (LPS), New Delhi",
        "about": "Laxman Public School is alternatively also known as LPS. The school was established in 1976.",
        "contact_email": "general@laxmanpublicschool.com",
        "latitude": "28.5479558",
        "longitude": "77.2009932",
        "rating": "4.1",
        "rated_by": "335",
        "classes": "Pre-nursery - 12th",
        "established": "1976",
        "school_medium": "English",
        "campus_area": "26892 Sq. Metres",
        "full_address": "Hauz Khas Enclave, Hauz Khas, New Delhi, Delhi 110016, India"
    },
    {
        "affiliation_id": "2730113",
        "school_name": "Little Flowers Public Senior Secondary School (LFPS), Shahdara",
        "about": "Little Flowers Public Senior Secondary School is alternatively also known as LFPS. The school was established in 1975.",
        "contact_email": "lfps_sp@yahoo.com, lfpsss12@gmail.com",
        "latitude": "28.6832402",
        "longitude": "77.28541059999999",
        "rating": "4.2",
        "rated_by": "476",
        "classes": "Nursery - 12th",
        "established": "1975",
        "school_medium": "English",
        "campus_area": "3601 Sq. Metres",
        "full_address": "Shivaji Park, Babarpur, Delhi, 110032, India"
    },
    {
        "affiliation_id": "2730118",
        "school_name": "Lovely Public Senior Secondary School (LPS), Laxmi Nagar",
        "about": "Lovely Public Senior Secondary School is alternatively also known as LPS. The school was established in 1966.",
        "contact_email": "lpspioneersun@gmail.com, lpspioneersun@yahoo.co.in",
        "latitude": "28.6413298",
        "longitude": "77.27770749999999",
        "rating": "3",
        "rated_by": "371",
        "classes": "Nursery - 12th",
        "established": "1966",
        "school_medium": "English",
        "campus_area": "4000 Sq. Metres",
        "full_address": "Near, Mangal Bazar Rd, Priyadarshini Vihar, Bank Enclave, Laxmi Nagar, New Delhi, Delhi 110092, India"
    },
    {
        "affiliation_id": "2730192",
        "school_name": "Lt. Col. Mehar Little Angels Senior Secondary School, Paschim Vihar",
        "about": "Lt. Col. Mehar Little Angels Senior Secondary School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@laps.in",
        "latitude": "28.6647452",
        "longitude": "77.1101571",
        "rating": "3.3",
        "rated_by": "473",
        "classes": "Nursery - 12th",
        "established": "1990",
        "school_medium": "English",
        "full_address": "B-5/153, B 5 Block, Paschim Vihar, Delhi, 110063, India"
    },
    {
        "affiliation_id": "2730499",
        "school_name": "Maharaja Aggarsain Adarsh Public School (MAAPS), Pitampura",
        "about": "Maharaja Aggarsain Adarsh Public School is alternatively also known as MAAPS. The school was established in 1980.",
        "contact_email": "maaps.pp@gmail.com",
        "latitude": "28.7139048",
        "longitude": "77.144292",
        "rating": "3.6",
        "rated_by": "417",
        "classes": "Nursery - 12th",
        "established": "1980",
        "school_medium": "English",
        "campus_area": "16187 Sq. Metres",
        "full_address": "DU Block Park, Block DU, Uttari Pitampura, Pitam Pura, Delhi, 110052, India"
    },
    {
        "affiliation_id": "2730130",
        "school_name": "Mahavir Senior Model School (MSMS), Sangam Park Extension",
        "about": "Mahavir Senior Model School is alternatively also known as MSMS. The school was established in 1983.",
        "contact_email": "msmsdelhi83@gmail.com",
        "latitude": "28.6901309",
        "longitude": "77.19168250000001",
        "rating": "4.7",
        "rated_by": "498",
        "classes": "Nursery - 12th",
        "established": "1983",
        "school_medium": "English",
        "campus_area": "11295 Sq. Metres",
        "full_address": "opposite Nanak Piao, Gurudwara, Block B, Sangam Park, Ashok Vihar, New Delhi, Delhi 110007, India"
    },
    {
        "affiliation_id": "2730050",
        "school_name": "Manav Sthali School, New Rajinder Nagar",
        "about": "Manav Sthali School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@manavsthalischool.com",
        "latitude": "28.6333576",
        "longitude": "77.1794302",
        "rating": "4.2",
        "rated_by": "398",
        "classes": "1st - 12th",
        "established": "1957",
        "school_medium": "English",
        "campus_area": "3.18 Acres",
        "full_address": "Block R, Rajender Nagar Part 1, New Rajinder Nagar, New Delhi, Delhi 110001, India"
    },
    {
        "affiliation_id": "2730033",
        "school_name": "Manava Bharati India International School (MBIIS), Panchsheel Park",
        "about": "Manava Bharati India International School is alternatively also known as MBIIS. The school was established in 1976.",
        "contact_email": "contact@mbiis.in",
        "latitude": "28.5415056",
        "longitude": "77.21608499999999",
        "rating": "3.3",
        "rated_by": "499",
        "classes": "Pre-nursery - 12th",
        "established": "1976",
        "school_medium": "English",
        "campus_area": "8 Acres",
        "full_address": "Panchsheel Park, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730070",
        "school_name": "Mata Jai Kaur Public School (MJKPS), New Delhi",
        "about": "Mata Jai Kaur Public School is alternatively also known as MJKPS. The school was established in 1977.",
        "contact_email": "mjkps@hotmail.com",
        "latitude": "28.6944491",
        "longitude": "77.1781451",
        "rating": "4.1",
        "rated_by": "394",
        "classes": "Nursery - 12th",
        "established": "1977",
        "campus_area": "4 Acres",
        "full_address": "Phase 3, Ashok Vihar, Delhi, 110052, India"
    },
    {
        "affiliation_id": "2730093",
        "school_name": "Mater Dei School, Tilak Lane",
        "about": "Mater Dei School is a Girls only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "contact@materdeischool.in",
        "latitude": "28.6161356",
        "longitude": "77.2354086",
        "rating": "3.1",
        "rated_by": "384",
        "classes": "LKG - 12th",
        "established": "1956",
        "school_medium": "English",
        "campus_area": "1.67 Acres",
        "full_address": "Tilak Ln, India Gate, New Delhi, Delhi 110001, India"
    },
    {
        "affiliation_id": "2730605",
        "school_name": "Maxfort School, Dwarka",
        "about": "Maxfort School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "maxfortschool.dwarka@gmail.com",
        "latitude": "28.5338064",
        "longitude": "77.0581693",
        "rating": "4",
        "rated_by": "307",
        "classes": "Nursery - 12th",
        "established": "2006",
        "school_medium": "English",
        "campus_area": "8093 Sq. Metres",
        "full_address": "Plot No. 9, 7, Bijwasan Rd, Dalmia Vihar, Bijwasan, New Delhi, Delhi 110061, India"
    },
    {
        "affiliation_id": "2730456",
        "school_name": "MDH International School, New Delhi",
        "about": "MDH International School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "contact@mdhinternationalschool.co.in",
        "latitude": "28.592515",
        "longitude": "77.05974300000001",
        "rating": "3.2",
        "rated_by": "386",
        "classes": "Nursery - 12th",
        "established": "2002",
        "school_medium": "English",
        "campus_area": "4046.86 Sq. Metres",
        "full_address": "Plot No.3 Pocket, 2, Sector 6 Dwarka, Dwarka, New Delhi, Delhi 110075, India"
    },
    {
        "affiliation_id": "2730075",
        "school_name": "Mira Model Senior Secondary School (MMS), New Delhi",
        "about": "Mira Model Senior Secondary School is alternatively also known as MMS. The school was established in 1972.",
        "contact_email": "miramodelschool@gmail.com",
        "latitude": "28.6306607",
        "longitude": "77.09508389999999",
        "rating": "3.5",
        "rated_by": "366",
        "classes": "1st - 12th",
        "established": "1972",
        "school_medium": "Hindi",
        "campus_area": "16200 Sq. Metres",
        "full_address": "Shaheed Captain Anuj Nayyar Marg, Janakpuri, New Delhi, Delhi 110058, India"
    },
    {
        "affiliation_id": "2730106",
        "school_name": "Modern Child Public School (MCPS), Punjabi Basti",
        "about": "Modern Child Public School is alternatively also known as MCPS. The school was established in 1976.",
        "contact_email": "modernchildpublicschool@gmail.com",
        "latitude": "28.68314149999999",
        "longitude": "77.06759919999999",
        "rating": "3.3",
        "rated_by": "484",
        "classes": "Nursery - 12th",
        "established": "1976",
        "school_medium": "English",
        "campus_area": "5985 Sq. Metres",
        "full_address": "Punjabi Basti, JJ Colony No 1, Nangloi, Delhi, 110041, India"
    },
    {
        "affiliation_id": "2730338",
        "school_name": "Modern Convent School, Dwarka",
        "about": "Modern Convent School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "modernconventschool@rediffmail.com",
        "latitude": "28.6029202",
        "longitude": "77.04925039999999",
        "rating": "4",
        "rated_by": "305",
        "classes": "Nursery - 12th",
        "established": "1999",
        "school_medium": "English",
        "campus_area": "4 Acres",
        "full_address": "Sector 4, Dwarka, Delhi, India"
    },
    {
        "affiliation_id": "2730325",
        "school_name": "Modern Era Convent (MEC), Janakpuri",
        "about": "Modern Era Convent is alternatively also known as MEC. The school was established in 1984.",
        "contact_email": "moderneraconvent@gmail.com",
        "latitude": "28.6318195",
        "longitude": "77.0888228",
        "rating": "3.8",
        "rated_by": "335",
        "classes": "Pre-nursery - 12th",
        "established": "1984",
        "school_medium": "English",
        "campus_area": "2149 Sq. Metres",
        "full_address": "Block B1, Janakpuri, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730258",
        "school_name": "Mother Divine Public School, Rohini",
        "about": "Mother Divine Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@motherdivineschool.com",
        "latitude": "28.7067574",
        "longitude": "77.10373899999999",
        "rating": "3.7",
        "rated_by": "419",
        "classes": "LKG - 12th",
        "established": "1991",
        "school_medium": "English",
        "campus_area": "7592 Sq. Metres",
        "full_address": "G 31, Avantika Rd, Tota Ram Bazar, Sector 3G, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730147",
        "school_name": "Mount St MaryS School, Delhi Cantt",
        "about": "Mount St MaryS School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "msmschool1963@gmail.com",
        "latitude": "28.582717",
        "longitude": "77.1354705",
        "rating": "4.5",
        "rated_by": "421",
        "classes": "Nursery - 12th",
        "established": "1963",
        "school_medium": "English",
        "campus_area": "13.95 Acres",
        "full_address": "75, Parade Rd, Parade Ground, Delhi Cantonment, New Delhi, Delhi 110010, India"
    },
    {
        "affiliation_id": "2730302",
        "school_name": "National Victor Public School (NVPS), Patparganj",
        "about": "National Victor Public School is alternatively also known as NVPS. The school was established in 1975.",
        "contact_email": "nationalvictor@yahoo.com",
        "latitude": "28.6295233",
        "longitude": "77.3123396",
        "rating": "4.9",
        "rated_by": "488",
        "classes": "Nursery - 12th",
        "established": "1975",
        "school_medium": "English",
        "campus_area": "16036 Sq. Metres",
        "full_address": "I.P.Extension, Patparganj, Delhi, India"
    },
    {
        "affiliation_id": "2730057",
        "school_name": "N.C. Jindal Public School (NCJPS), New Delhi",
        "about": "N.C. Jindal Public School is alternatively also known as NCJPS. The school was established in 1966.",
        "contact_email": "ncjindalps@yahoo.co.in",
        "latitude": "28.6634523",
        "longitude": "77.1241067",
        "rating": "4.2",
        "rated_by": "385",
        "classes": "Pre-nursery - 12th",
        "established": "1966",
        "school_medium": "English",
        "campus_area": "16188 Sq. Metres",
        "full_address": "Rd Number 73, West Punjabi Bagh, Delhi, 110026, India"
    },
    {
        "affiliation_id": "2730163",
        "school_name": "Neo Convent School, New Delhi",
        "about": "Neo Convent School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@neoconventschool.com",
        "latitude": "28.6623128",
        "longitude": "77.0972086",
        "rating": "4.5",
        "rated_by": "434",
        "classes": "LKG - 12th",
        "established": "1973",
        "school_medium": "English",
        "campus_area": "3.38 Acres",
        "full_address": "G-17 Area, Paschim Vihar, State Bank Nagar, Paschim Vihar, Delhi, 110063, India"
    },
    {
        "affiliation_id": "2730159",
        "school_name": "New Horizon School (NHS), New Delhi",
        "about": "New Horizon School is alternatively also known as NHS. The school was established in 1979.",
        "contact_email": "nhsschoolorg@gmail.com, nhsschoolorg@yahoo.com",
        "latitude": "28.5932848",
        "longitude": "77.2507492",
        "rating": "4.1",
        "rated_by": "329",
        "classes": "Nursery - 12th",
        "established": "1979",
        "school_medium": "English",
        "campus_area": "6541.04 Sq. Metres",
        "full_address": "Mathura Road Opposite, Hazrat Nizamuddin Aulia Dargah, Nizamuddin, Nizamuddin East, New Delhi, Delhi 110013, India"
    },
    {
        "affiliation_id": "2730598",
        "school_name": "Nirmal Bhartia School (NIBS), New Delhi",
        "about": "Nirmal Bhartia School is alternatively also known as NIBS. The school was established in 2005.",
        "contact_email": "sayori@nirmalbhartia.org, nibsadmin@nirmalbhartia.org",
        "latitude": "28.6038371",
        "longitude": "77.0290995",
        "rating": "3.6",
        "rated_by": "327",
        "classes": "Nursery - 12th",
        "established": "2005",
        "school_medium": "English",
        "campus_area": "8093.71 Sq. Metres",
        "full_address": "Sector 14 Dwarka, Kakrola, Delhi, India"
    },
    {
        "affiliation_id": "2730256",
        "school_name": "Poorna Prajna Public School, Vasant Kunj",
        "about": "Poorna Prajna Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@poornaprajnaschooldelhi.org",
        "latitude": "28.5151659",
        "longitude": "77.1607496",
        "rating": "4.7",
        "rated_by": "366",
        "classes": "Nursery - 12th",
        "established": "1987",
        "school_medium": "English",
        "campus_area": "4.25 Acres",
        "full_address": "behind Church, Sector D-3, Pkt.-III, Sector D, Vasant Kunj, New Delhi, Delhi 110070, India"
    },
    {
        "affiliation_id": "2730415",
        "school_name": "Pragati Public School, Dwarka",
        "about": "Pragati Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "ppsdwarka@rediffmail.com",
        "latitude": "28.598662",
        "longitude": "77.0348573",
        "rating": "4.5",
        "rated_by": "316",
        "classes": "Pre-nursery - 12th",
        "established": "Not Available",
        "school_medium": "English",
        "campus_area": "15997 Sq. Metres",
        "full_address": "Sector 13, Kakrola, Delhi, 110075, India"
    },
    {
        "affiliation_id": "2730061",
        "school_name": "Presentation Convent Senior Secondary School, S.P. Mukherjee Marg",
        "about": "Presentation Convent Senior Secondary School is a Girls only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "mail@pcsdelhi.in",
        "latitude": "28.6602363",
        "longitude": "77.2274347",
        "rating": "4",
        "rated_by": "358",
        "classes": "Pre-nursery - 12th",
        "established": "1924",
        "school_medium": "English",
        "campus_area": "16363 Sq. Metres",
        "full_address": "Shyama Prasad Mukherjee Marg, Delhi, 110006, India"
    },
    {
        "affiliation_id": "2730599",
        "school_name": "Queen's Valley School (QVS), Dwarka",
        "about": "Queen's Valley School is alternatively also known as QVS. The school was established in 2007.",
        "contact_email": "info@queensvalley.in",
        "latitude": "28.5656779",
        "longitude": "77.06710489999999",
        "rating": "3.8",
        "rated_by": "422",
        "classes": "Pre-nursery - 12th",
        "established": "2007",
        "school_medium": "English",
        "campus_area": "8000.64 Sq. Metres",
        "full_address": "Dwarka Sector- 8, Sector 8 Dwarka, Dwarka, Sector 8 Dwarka, Dwarka, New Delhi, Delhi 110077, India"
    },
    {
        "affiliation_id": "2730121",
        "school_name": "Rabea Girls Public School, Lal Kuan",
        "about": "Rabea Girls Public School is a Girls only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "rabeaschool2024@gmail.com",
        "latitude": "28.6546542",
        "longitude": "77.2250122",
        "rating": "3.8",
        "rated_by": "367",
        "classes": "Nursery - 12th",
        "established": "1973",
        "school_medium": "English",
        "campus_area": "6960 Sq. Metres",
        "full_address": "3622/4, 2nd Floor, Katra Dina Beg, Gali, Hamdard Marg, Balli Maran, Lal Kuan Bazar, Chandni Chowk, New Delhi, Delhi 110006, India"
    },
    {
        "affiliation_id": "2730249",
        "school_name": "Rajdhani Public School, Narela",
        "about": "Rajdhani Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "rajdhanischooldelhi@gmail.com",
        "latitude": "28.83585799999999",
        "longitude": "77.091984",
        "rating": "4.6",
        "rated_by": "377",
        "classes": "Nursery - 10th",
        "established": "1985",
        "school_medium": "English",
        "campus_area": "1 Acres",
        "full_address": "Alipur Rd, Kurenai Village, Narela, Delhi, 110040, India"
    },
    {
        "affiliation_id": "2730049",
        "school_name": "Ramjas School, Pusa Road",
        "about": "Ramjas School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "Principal@ramjaspusa.com",
        "latitude": "28.6437296",
        "longitude": "77.1857419",
        "rating": "3.1",
        "rated_by": "378",
        "classes": "6th - 12th",
        "established": "1971",
        "school_medium": "English",
        "campus_area": "6795 Sq. Metres",
        "full_address": "Pusa Rd, New Delhi, Delhi 110005, India"
    },
    {
        "affiliation_id": "2730020",
        "school_name": "Ramjas School, Sector Iv R K Puram",
        "about": "Ramjas School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "ramjas.rkp@gmail.com",
        "latitude": "28.55906",
        "longitude": "77.1783519",
        "rating": "4.6",
        "rated_by": "311",
        "classes": "Nursery - 12th",
        "established": "1974",
        "school_medium": "English",
        "campus_area": "18000 Sq. Metres",
        "full_address": "Sector 4 R K Puram, Sector 4, Rama Krishna Puram, New Delhi, Delhi 110022, India"
    },
    {
        "affiliation_id": "2730167",
        "school_name": "Rao Man Singh Senior Secondary School (RMSSS), Najafgarh",
        "about": "Rao Man Singh Senior Secondary School is alternatively also known as RMSSS. The school was established in 1989.",
        "contact_email": "raomansinghschool1989@gmail.com",
        "latitude": "28.6004055",
        "longitude": "76.9822815",
        "rating": "3.9",
        "rated_by": "315",
        "classes": "Pre-nursery - 12th",
        "established": "1989",
        "school_medium": "English",
        "campus_area": "4 Acres",
        "full_address": "Paprawat Rd, Roshanpura, Najafgarh, Delhi, 110043, India"
    },
    {
        "affiliation_id": "2730318",
        "school_name": "Rao Mohar Singh Memorial Public School (RMSM), Paprawat Road",
        "about": "Rao Mohar Singh Memorial Public School is alternatively also known as RMSM. The school was established in 2000.",
        "contact_email": "info@raomoharsinghschool.com",
        "latitude": "28.6090126",
        "longitude": "76.9854526",
        "rating": "4.9",
        "rated_by": "396",
        "classes": "Nursery - 12th",
        "established": "2000",
        "school_medium": "English",
        "campus_area": "6070 Sq. Metres",
        "full_address": "Najafgarh, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730071",
        "school_name": "Rosary Senior Secondary School, Kingsway Camp",
        "about": "Rosary Senior Secondary School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "school_rosary@rediffmail.com",
        "latitude": "28.6961996",
        "longitude": "77.1998976",
        "rating": "3.1",
        "rated_by": "326",
        "classes": "1st - 12th",
        "established": "1958",
        "school_medium": "English",
        "campus_area": "16187 Sq. Metres",
        "full_address": "Kingsway Camp, GTB Nagar, Delhi, 110009, India"
    },
    {
        "affiliation_id": "2730150",
        "school_name": "Sadhu Vaswani International School For Girls (SVISG), Shanti Niketan",
        "about": "Sadhu Vaswani International School For Girls is alternatively also known as SVISG. The school was established in 1987.",
        "contact_email": "svisg@rediffmail.com, svisg_in@yahoo.com",
        "latitude": "28.5779173",
        "longitude": "77.16936609999999",
        "rating": "3.7",
        "rated_by": "399",
        "classes": "Nursery - 12th",
        "established": "1987",
        "school_medium": "English",
        "campus_area": "2.50 Acres",
        "full_address": "Shanti Niketan, New Delhi, Delhi 110021, India"
    },
    {
        "affiliation_id": "2730146",
        "school_name": "St Margaret Senior Secondary School, Prashant Vihar",
        "about": "St Margaret Senior Secondary School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "office.smsss@gmail.com",
        "latitude": "28.713027",
        "longitude": "77.138772",
        "rating": "4.6",
        "rated_by": "425",
        "classes": "Nursery - 12th",
        "established": "1988",
        "school_medium": "English",
        "campus_area": "6596 Sq. Metres",
        "full_address": "D Block Prashant Vihar, QU Block, Uttari Pitampura, Pitam Pura, Delhi, 110034, India"
    },
    {
        "affiliation_id": "2730048",
        "school_name": "Salwan Public School (SPS), Rajinder Nagar",
        "about": "Salwan Public School is alternatively also known as SPS. The school was established in 1953.",
        "contact_email": "sps@salwanschools.com, sps@salwanschools.com",
        "latitude": "28.6354261",
        "longitude": "77.1856762",
        "rating": "4.8",
        "rated_by": "373",
        "classes": "Nursery - 12th",
        "established": "1953",
        "school_medium": "English",
        "campus_area": "4532 Sq. Metres",
        "full_address": "New Delhi, Delhi 110060, India"
    },
    {
        "affiliation_id": "2730274",
        "school_name": "Shadley Public School, Rajouri Garden",
        "about": "Shadley Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "admin@shadleypublicschool.com",
        "latitude": "28.6320851",
        "longitude": "77.1175004",
        "rating": "3.1",
        "rated_by": "409",
        "classes": "1st - 12th",
        "established": "1969",
        "school_medium": "English",
        "campus_area": "8094 Sq. Metres",
        "full_address": "Press Colony, Mayapuri, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730584",
        "school_name": "Shri Ram Shiksha Mandir (SRSM), Jindpur",
        "about": "Shri Ram Shiksha Mandir is alternatively also known as SRSM. The school was established in 2005.",
        "contact_email": "info@srsm.in, srsm36@rediffmail.com",
        "latitude": "25.8579993",
        "longitude": "80.7020359",
        "rating": "3.6",
        "rated_by": "499",
        "classes": "Nursery - 12th",
        "established": "2005",
        "school_medium": "English",
        "campus_area": "2.50 Acres",
        "full_address": "Jindpur, Uttar Pradesh, India"
    },
    {
        "affiliation_id": "2730526",
        "school_name": "Sneh International School, New Rajdhani Enclave",
        "about": "Sneh International School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "sneh@snehinternationalschool.com",
        "latitude": "28.6415389",
        "longitude": "77.2952734",
        "rating": "3.6",
        "rated_by": "307",
        "classes": "Nursery - 12th",
        "established": "1994",
        "school_medium": "English",
        "campus_area": "6835 Sq. Metres",
        "full_address": "Preet Vihar, Vikas Marg, New Rajdhani Enclave, Swasthya Vihar, New Delhi, Delhi 110092, India"
    },
    {
        "affiliation_id": "2730013",
        "school_name": "Somerville School, Vasundhara Enclave",
        "about": "Somerville School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "somervilleve@gmail.com",
        "latitude": "28.6001813",
        "longitude": "77.3165886",
        "rating": "3.7",
        "rated_by": "302",
        "classes": "Pre-nursery - 12th",
        "established": "1974",
        "school_medium": "English",
        "campus_area": "3.82 Acres",
        "full_address": "Vasundhara Enclave, New Delhi, India"
    },
    {
        "affiliation_id": "2730074",
        "school_name": "S S Mota Singh Senior Secondary Model School, Janak Puri",
        "about": "S S Mota Singh Senior Secondary Model School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "latitude": "28.6249393",
        "longitude": "77.0812279",
        "rating": "4.8",
        "rated_by": "387",
        "classes": "LKG - 12th",
        "established": "2010",
        "school_medium": "English",
        "campus_area": "16106 Sq. Metres",
        "full_address": "AUC-122, Janakpuri, Delhi, 110058, India"
    },
    {
        "affiliation_id": "2730264",
        "school_name": "St. Angel's School, Rohini",
        "about": "St. Angel's School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "stangelsrohini@gmail.com",
        "latitude": "28.730738",
        "longitude": "77.13322289999999",
        "rating": "3.5",
        "rated_by": "469",
        "classes": "1st - 12th",
        "established": "1987",
        "school_medium": "English",
        "campus_area": "4976 Sq. Metres",
        "full_address": "A Block Rohini Sector 15, Sector 15H, Rohini, Delhi, 110089, India"
    },
    {
        "affiliation_id": "2730026",
        "school_name": "St. Anthony's Senior Secondary School, Hauz Khas",
        "about": "St. Anthony's Senior Secondary School is a Girls only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "stanthonyschool@rediffmail.com, stanthonyschool50@gmail.com",
        "latitude": "28.5460603",
        "longitude": "77.19991519999999",
        "rating": "3.9",
        "rated_by": "355",
        "classes": "Pre-nursery - 12th",
        "established": "1970",
        "school_medium": "English",
        "campus_area": "7365 Sq. Metres",
        "full_address": "Block C 6, Hauz Khas Enclave, Hauz Khas, New Delhi, Delhi 110016, India"
    },
    {
        "affiliation_id": "2730131",
        "school_name": "St. Cecilia's Public School, New Delhi",
        "about": "St. Cecilia's Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@cecilia.in, helpdesk@cecilia.in",
        "latitude": "28.6412243",
        "longitude": "77.07119670000002",
        "rating": "3.3",
        "rated_by": "357",
        "classes": "Pre-nursery - 12th",
        "established": "1978",
        "school_medium": "English",
        "campus_area": "6060 Sq. Metres",
        "full_address": "Block F, Vikaspuri, Delhi, 110018, India"
    },
    {
        "affiliation_id": "2730144",
        "school_name": "St. Columba's School, Ashok Place",
        "about": "St. Columba's School is a Boys only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@stcolumbas.edu.in, principal@stcolumbas.edu.in",
        "latitude": "28.629446",
        "longitude": "77.205918",
        "rating": "4.4",
        "rated_by": "401",
        "classes": "Nursery - 12th",
        "established": "1940",
        "school_medium": "English",
        "campus_area": "3 Acres",
        "full_address": "1, Ashok Place, Sector 4, Gole Market, New Delhi, Delhi 110001, India"
    },
    {
        "affiliation_id": "2730513",
        "school_name": "St Lawrence Public School (St. LPS), Dilshad Garden",
        "about": "St Lawrence Public School is alternatively also known as St. LPS. The school was established in 1967.",
        "contact_email": "stlps@ymail.com",
        "latitude": "28.6783278",
        "longitude": "77.31862210000001",
        "rating": "4.5",
        "rated_by": "478",
        "classes": "Nursery - 12th",
        "established": "1967",
        "school_medium": "English",
        "campus_area": "4200 Sq. Metres",
        "full_address": "Block E, Jeevan Sarita, Dilshad Garden, Delhi, 110095, India"
    },
    {
        "affiliation_id": "2730076",
        "school_name": "St Marks Senior Secondary Public School, Janakpuri",
        "about": "St Marks Senior Secondary Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "smsjp@saintmarksschool.com",
        "latitude": "28.6204001",
        "longitude": "77.0744343",
        "rating": "4.6",
        "rated_by": "303",
        "classes": "1st - 12th",
        "established": "1975",
        "school_medium": "English",
        "campus_area": "7891 Sq. Metres",
        "full_address": "Block A2, Janakpuri, New Delhi, Delhi 110058, India"
    },
    {
        "affiliation_id": "2730342",
        "school_name": "St Mary's School, Dwarka",
        "about": "St Mary's School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "st.marys.19@gmail.com",
        "latitude": "28.5860795",
        "longitude": "77.0486422",
        "rating": "5",
        "rated_by": "390",
        "classes": "1st - 12th",
        "established": "1995",
        "school_medium": "English",
        "campus_area": "4 Acres",
        "full_address": "Sector 19, Pocket 3, Dwarka, Delhi, 110075, India"
    },
    {
        "affiliation_id": "2730092",
        "school_name": "St. Paul's School, Hauz Khas",
        "about": "St. Paul's School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "stpauls@stpauls-delhi.com",
        "latitude": "28.5470092",
        "longitude": "77.1976427",
        "rating": "3.2",
        "rated_by": "458",
        "classes": "Nursery - 12th",
        "established": "1968",
        "school_medium": "English",
        "campus_area": "8215 Sq. Metres",
        "full_address": "C-5/3, Block C 5, Safdarjung Development Area, Hauz Khas, New Delhi, Delhi 110016, India"
    },
    {
        "affiliation_id": "2730158",
        "school_name": "Sumer Mal Jain Public School (SMJPS), Janakpuri",
        "about": "Sumer Mal Jain Public School is alternatively also known as SMJPS. The school was established in 1987.",
        "contact_email": "sumermaljainschool@rediffmail.com, smjpschoolnd@gmail.com",
        "latitude": "28.6293694",
        "longitude": "77.093139",
        "rating": "3.3",
        "rated_by": "343",
        "classes": "Pre-nursery - 12th",
        "established": "1987",
        "school_medium": "English",
        "campus_area": "7608 Sq. Metres",
        "full_address": "Block B2, Shiv Nagar, Janakpuri, New Delhi, Delhi 110058, India"
    },
    {
        "affiliation_id": "2730139",
        "school_name": "Suraj Bhan D A V Public School, Vasant Vihar",
        "about": "Suraj Bhan D A V Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "sb_dav@yahoo.co.in",
        "latitude": "28.5599472",
        "longitude": "77.1553019",
        "rating": "4.8",
        "rated_by": "365",
        "classes": "LKG - 12th",
        "established": "1984",
        "school_medium": "English",
        "campus_area": "10562 Sq. Metres",
        "full_address": "15, F 10 Marg, Indian Air Lines & Air India Estate, Vasant Vihar, New Delhi, Delhi 110057, India"
    },
    {
        "affiliation_id": "2730084",
        "school_name": "Tagore International School (TIS), East Of Kailash",
        "about": "Tagore International School is alternatively also known as TIS. The school was established in 1964.",
        "contact_email": "info.eok@tagoreint.com, principal.eok@tagoreint.com",
        "latitude": "28.5576612",
        "longitude": "77.24267069999999",
        "rating": "4.3",
        "rated_by": "403",
        "classes": "Nursery - 12th",
        "established": "1964",
        "school_medium": "English",
        "campus_area": "9065 Sq. Metres",
        "full_address": "Block E, East of Kailash, New Delhi, Delhi, India"
    },
    {
        "affiliation_id": "2730315",
        "school_name": "The Heritage School, Vasant Kunj",
        "about": "The Heritage School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "admin@theheritageschool.in",
        "latitude": "28.5124389",
        "longitude": "77.1370115",
        "rating": "4.8",
        "rated_by": "391",
        "classes": "Nursery - 12th",
        "established": "1999",
        "school_medium": "English",
        "campus_area": "1.73 Acres",
        "full_address": "New Delhi, Delhi 110070, India"
    },
    {
        "affiliation_id": "2730402",
        "school_name": "Titiksha Public School, New Delhi",
        "about": "Titiksha Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@titikshapublicschool.com",
        "latitude": "28.7288259",
        "longitude": "77.1068059",
        "rating": "4.1",
        "rated_by": "426",
        "classes": "Nursery - 12th",
        "established": "1987",
        "school_medium": "English",
        "campus_area": "16229 Sq. Metres",
        "full_address": "Sector 11, Rohini, Delhi, 110085, India"
    },
    {
        "affiliation_id": "2730153",
        "school_name": "Universal Public School, Preet Vihar",
        "about": "Universal Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "u_p_school@yahoo.co.in",
        "latitude": "28.6388437",
        "longitude": "77.2917664",
        "rating": "4",
        "rated_by": "492",
        "classes": "Nursery - 12th",
        "established": "1984",
        "school_medium": "English",
        "campus_area": "7850.90 Sq. Metres",
        "full_address": "C-57, GROUND FLOOR, PREET VIHAR, C Block, Preet Vihar, New Delhi, Delhi 110092, India"
    },
    {
        "affiliation_id": "2730141",
        "school_name": "Veda Vyasa D A V Public School (VVDAV), Vikaspuri",
        "about": "Veda Vyasa D A V Public School is alternatively also known as VVDAV. The school was established in 1982.",
        "contact_email": "Info@vvdav.com",
        "latitude": "28.6371698",
        "longitude": "77.0622727",
        "rating": "5",
        "rated_by": "407",
        "classes": "Nursery - 12th",
        "established": "1982",
        "school_medium": "English",
        "campus_area": "14487 Sq. Metres",
        "full_address": "D Block, Vikaspuri, New Delhi, Delhi 110018, India"
    },
    {
        "affiliation_id": "2730255",
        "school_name": "Vishal Bharti Public School (VBPS), Paschim Vihar",
        "about": "Vishal Bharti Public School is alternatively also known as VBPS. The school was established in 1989.",
        "contact_email": "vbpspv@gmail.com",
        "latitude": "28.67577679999999",
        "longitude": "77.09889369999999",
        "rating": "3.4",
        "rated_by": "449",
        "classes": "Nursery - 12th",
        "established": "1989",
        "school_medium": "English",
        "campus_area": "6070 Sq. Metres",
        "full_address": "A 1 Block, Krishna Apartment, Paschim Vihar, Delhi, 110063, India"
    },
    {
        "affiliation_id": "2730107",
        "school_name": "Vivekanand School, Anand Vihar",
        "about": "Vivekanand School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "info@vivekanandschool.in",
        "latitude": "28.6511591",
        "longitude": "77.3137201",
        "rating": "4.8",
        "rated_by": "424",
        "classes": "Nursery - 12th",
        "established": "1978",
        "school_medium": "English",
        "campus_area": "152212 Sq. Metres",
        "full_address": "Block D, Anand Vihar, Delhi, 110092, India"
    },
    {
        "affiliation_id": "2730432",
        "school_name": "V S P K International School, Rohini",
        "about": "V S P K International School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "vspkschool@yahoo.co.in",
        "latitude": "28.7225368",
        "longitude": "77.12775859999999",
        "rating": "5",
        "rated_by": "453",
        "classes": "Nursery - 12th",
        "established": "2003",
        "school_medium": "English",
        "campus_area": "7729.49 Sq. Metres",
        "full_address": "Sector 13, Rohini, Delhi, India"
    },
    {
        "affiliation_id": "2730289",
        "school_name": "DAV Centenary Public School, Paschim Enclave",
        "about": "DAV Centenary Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "davpe87@gmail.com",
        "latitude": "28.6787222",
        "longitude": "77.0904414",
        "rating": "3",
        "rated_by": "332",
        "classes": "Nursery - 12th",
        "established": "1986",
        "school_medium": "English",
        "campus_area": "1.96 Acres",
        "full_address": "Paschim Enclave, Peeragarhi Village, Paschim Vihar, Delhi, 110087, India"
    },
    {
        "affiliation_id": "2730590",
        "school_name": "Queen Mary'sSchool, Model Town Iii",
        "about": "Queen Mary's  School is a Girls only school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "qmsdelhi@yahoo.in, info@qmsmodeltown.com",
        "latitude": "28.7148376",
        "longitude": "77.1846533",
        "rating": "4.2",
        "rated_by": "401",
        "classes": "Nursery - 12th",
        "established": "2002",
        "school_medium": "English",
        "campus_area": "8822.15 Sq. Metres",
        "full_address": "Plot No 4-A, Model Town 3, Rishabh Park, Phase 3, Azadpur, Delhi, 110009, India"
    },
    {
        "affiliation_id": "2730125",
        "school_name": "St Mary's Senior Secondary School, Paschim Vihar",
        "about": "St Mary's Senior Secondary School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).",
        "contact_email": "st_marysschools@yahoo.co.in",
        "latitude": "28.6683801",
        "longitude": "77.08162879999999",
        "rating": "3.7",
        "rated_by": "406",
        "classes": "Nursery - 12th",
        "established": "1966",
        "campus_area": "4046 Sq. Metres",
        "full_address": "Block GH 13, GH 13, Ambica Vihar, Paschim Vihar, Delhi, 110087, India"
    }
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'productgallery';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _productcard_productcard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productcard/productcard.component */ "pTP8");
/* harmony import */ var _productsearch_productsearch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productsearch/productsearch.component */ "cx7j");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _productcard_productcard_component__WEBPACK_IMPORTED_MODULE_4__["ProductcardComponent"],
        _productsearch_productsearch_component__WEBPACK_IMPORTED_MODULE_5__["ProductsearchComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _productcard_productcard_component__WEBPACK_IMPORTED_MODULE_4__["ProductcardComponent"],
                    _productsearch_productsearch_component__WEBPACK_IMPORTED_MODULE_5__["ProductsearchComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cx7j":
/*!**********************************************************!*\
  !*** ./src/app/productsearch/productsearch.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsearchComponent", function() { return ProductsearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductsearchComponent {
    constructor() {
        this.placeholder = "Start Searching....";
        this.keyupevents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    returnevent(event) {
        this.keyupevents.emit(event);
    }
}
ProductsearchComponent.ɵfac = function ProductsearchComponent_Factory(t) { return new (t || ProductsearchComponent)(); };
ProductsearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsearchComponent, selectors: [["app-productsearch"]], inputs: { placeholder: "placeholder" }, outputs: { keyupevents: "keyupevents" }, decls: 5, vars: 1, consts: [[1, "row"], [1, "col-md-1"], [1, "col-md-10", "search-area"], [1, "searchbox", "form-control", 3, "placeholder", "keyup"]], template: function ProductsearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProductsearchComponent_Template_input_keyup_3_listener($event) { return ctx.returnevent($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
    } }, styles: [".search-area[_ngcontent-%COMP%] {\n    line-height: 100px;\n    height: 100px;\n    margin-top: 50px;\n}\n.searchbox[_ngcontent-%COMP%] {\n    width: 96%;\n    margin-bottom: 30px;\n    margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkIiLCJmaWxlIjoicHJvZHVjdHNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1hcmVhIHtcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnNlYXJjaGJveCB7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productsearch',
                templateUrl: './productsearch.component.html',
                styleUrls: ['./productsearch.component.css']
            }]
    }], function () { return []; }, { placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], keyupevents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 24, vars: 0, consts: [[1, "p-3", "bg-dark", "text-white"], [1, "container"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-center", "justify-content-lg-start"], ["href", "/", 1, "d-flex", "align-items-center", "mb-2", "mb-lg-0", "text-white", "text-decoration-none"], ["src", "https://dashboard.ask-jennie.com/assets/header_logo.png", 1, "navbar-logo-image"], [1, "nav", "col-12", "col-lg-auto", "me-lg-auto", "mb-2", "justify-content-center", "mb-md-0"], ["href", "#", 1, "nav-link", "px-2", "text-secondary"], ["href", "#", 1, "nav-link", "px-2", "text-white"], [1, "text-end"], ["type", "button", 1, "btn", "btn-warning"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".navbar-logo-image[_ngcontent-%COMP%] {\n    height: 50px!important;\n    margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItbG9nby1pbWFnZSB7XG4gICAgaGVpZ2h0OiA1MHB4IWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pTP8":
/*!******************************************************!*\
  !*** ./src/app/productcard/productcard.component.ts ***!
  \******************************************************/
/*! exports provided: ProductcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductcardComponent", function() { return ProductcardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProductcardComponent_span_7__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductcardComponent_span_7__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductcardComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductcardComponent_span_7__svg_svg_1_Template, 4, 0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductcardComponent_span_7__svg_svg_2_Template, 4, 0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rating > number_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rating < number_r3);
} }
function ProductcardComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.category_1);
} }
function ProductcardComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.category_2);
} }
const _c0 = function () { return [0, 1, 2, 3, 4]; };
class ProductcardComponent {
    constructor() {
        this.product_image = "http://placehold.jp/300x200.png";
        this.product_name = "Product Name Here";
        this.product_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
        this.rating = 4.5;
        this.rated_by = 100;
        this.address = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
        this.category_1 = "";
        this.category_2 = "";
    }
    ngOnInit() {
        // transitioncard();
    }
    RotateCard(id) {
        rotate_card(id);
    }
}
ProductcardComponent.ɵfac = function ProductcardComponent_Factory(t) { return new (t || ProductcardComponent)(); };
ProductcardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductcardComponent, selectors: [["app-productcard"]], inputs: { product_image: "product_image", product_name: "product_name", product_description: "product_description", rating: "rating", rated_by: "rated_by", link: "link", address: "address", category_1: "category_1", category_2: "category_2" }, decls: 21, vars: 12, consts: [[1, "product-card"], [1, "card"], [1, "card__face", "card__face--front"], [1, "img", "info"], [1, "info"], [4, "ngFor", "ngForOf"], [1, "product-description", 2, "margin-top", "10px"], ["class", "banner", 4, "ngIf"], [1, "reviews", 2, "margin-top", "10px"], [1, "address"], [1, "fas", "fa-map-marked"], [1, "button-area"], ["target", "blank", 3, "href"], ["fill", "#FFC324", "height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["fill", "#DCDCDC", "height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["fill", "#FFC324", "height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"], ["fill", "#DCDCDC", "height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg"], [1, "banner"]], template: function ProductcardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductcardComponent_span_7_Template, 3, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductcardComponent_span_12_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductcardComponent_span_13_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Click Know More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background: url(", ctx.product_image, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.rated_by, " Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category_1 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category_2 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".product-card {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n    border-radius: 5px;\n    opacity: 1;\n    perspective: 600px;\n}\n\n.card {\n  position: relative;\n  width: 100%;\n  min-height: 465px;\n  cursor: pointer;\n  transform-style: preserve-3d;\n  transform-origin: center right;\n  transition: transform 1s;\n  box-shadow: 0 14px 50px -4px rgba(0, 0, 0, 0.15);\n  transform: translateZ(-30px);\n}\n\n.card:hover {\n  transform: translateZ(0px);\n}\n\n.img {\n    height:150px;\n    width:100%\n}\n\n.info {\n    padding: 10px;\n    margin-bottom: 10px;\n}\n\n.info h2 {\n    font-size: 20px;\n    line-height: 25px;\n    min-height: 50px;\n}\n\n.product-description {\n  font-size: 17px;\n  font-weight: 300;\n  line-height: 25px;\n  height: 75px;\n}\n\n.button-area {\n    text-align: right;\n}\n\n.address {\n  font-size: 12px;\n  font-style: italic;\n  line-height: 15px;\n  height: 30px;\n  margin-bottom: 15px;\n}\n\n.fas {\n  margin-right: 5px;\n  font-size: 15px;\n}\n\n.banner {\n  border-radius:10px; background: rgba(0,0,0,0.1); padding: 5px 10px; width: auto; font-size: 14px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixnREFBZ0Q7RUFDaEQsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSwyQkFBMkIsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsZUFBZTtFQUNoRyxpQkFBaUI7QUFDbkIiLCJmaWxlIjoicHJvZHVjdGNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNhcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQ2NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICBib3gtc2hhZG93OiAwIDE0cHggNTBweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzBweCk7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG59XG5cbi5pbWcge1xuICAgIGhlaWdodDoxNTBweDtcbiAgICB3aWR0aDoxMDAlXG59XG5cbi5pbmZvIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbmZvIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5idXR0b24tYXJlYSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mYXMge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYmFubmVyIHtcbiAgYm9yZGVyLXJhZGl1czoxMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7IHBhZGRpbmc6IDVweCAxMHB4OyB3aWR0aDogYXV0bzsgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductcardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productcard',
                templateUrl: './productcard.component.html',
                styleUrls: ['./productcard.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { product_image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], product_name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], product_description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rated_by: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], address: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], category_1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], category_2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");





const routes = [
    {
        path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map