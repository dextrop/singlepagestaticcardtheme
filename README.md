# Productgallery

![image](https://ask-jennie-assets.s3.ap-south-1.amazonaws.com/card-layout-1.png)

## Intregration Steps

Add Bootstrap and Font Awesome to index.html 
- For Bootstrap [Bootstrap Get Started](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- For Font Awesome `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet">`

Once done user can either reuse the component directly by renaming it 
#### Or 
can add `loginsignupsliderlayout` to app.module.ts. Create your component login

```shell
ng g c login
```

inside login component edit login.component.html
```html
<app-loginsignupsliderlayout></app-loginsignupsliderlayout>
```
