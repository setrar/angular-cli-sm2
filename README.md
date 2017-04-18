# angular-cli-sm2
Running SoundManager2 with Angular CLI

```
$ ng new frontend --style=scss
$ cd frontend
```

install soundmanager2
```
$ npm install --save soundmanager2
```


Edit `.angular-cli.json`by adding
```
      "scripts": [
        "../node_modules/soundmanager2/script/soundmanager2-jsmin.js"
      ],
```

copy all flash files to assets folder
```
$ mkdir src/assets/sm2
$ cp -R node_modules/soundmanager2/swf src/assets/sm2/
```

# Material

```
$ npm install --save @angular/material
```

Slide components need hammer
```
$ npm install --save hammerjs
```

Update src/style.scss

```
@import '~https://fonts.googleapis.com/icon?family=Material+Icons';
@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';
```

Include MaterialModule
