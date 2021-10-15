# Productgallery

![image](https://ask-jennie-assets.s3.ap-south-1.amazonaws.com/card-layout-1.png)

## Intregration Steps

Extract the code to some directy, Once the code is extracted, user can see folder structure

```
src/
  app/
    navbar/
      navbar.component.html
      navbar.component.ts
      navbar.component.css      
    productcard/
      productcard.component.html
      productcard.component.ts  
      productcard.component.css        
    productsearch/
      productsearch.component.html
      productsearch.component.ts
      productsearch.component.css      
    productgallerysample/
      productgallerysample.component.html
      productgallerysample.component.ts
      productgallerysample.component.css
```


Add Bootstrap and Font Awesome to index.html 
- For Bootstrap [Bootstrap Get Started](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- For Font Awesome `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet">`

copy component navbar, productcard, productsearch inside your project src/app/ and all 
Navbarcomponent, ProductcardComponent, ProductsearchComponent to your app.module.ts file.

## Using Card Layout with Navbar

user can user navbar directly 
```
<app-navbar></app-navbar>
```

while the product card layout can be used

```
<app-productcard 
    [product_name]="school.school_name" 
    [product_description]="school.about"
    [product_image]="school.image"
    [address]="school.full_address"
    [category_1]="school.established"
    [category_2]="school.classes"
></app-productcard>
```

Take reference from below code.

A complete sample refernce for layout can be found inside productgallerysample.
