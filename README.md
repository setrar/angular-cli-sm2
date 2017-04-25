# Running SoundManager2 with Angular CLI


## play backend

update build.sbt

```scala

/* ================================= WEBPACK ================================== */

val frontEndProjectName = "frontend"
val backEndProjectName = "backend"
val distDirectory = ".." + backEndProjectName + "public/dist"

// Starts: angularCLI build task
val frontendDirectory = baseDirectory {_ /".."/frontEndProjectName}

val ng = sys.props("os.name").toLowerCase match {
  case os if os.contains("win") => "cmd /c ng"
  case _ => "ng"
}

val params = sys.props("os.name").toLowerCase match {
  case os if os.contains("win") => " build --deploy-url /dist --output-path ..\\backend\\public\\dist --progress "
  case _ => " build --deploy-url /dist --output-path ../backend/public/dist --progress "
}

val ngBuild = taskKey[Unit]("ng build task.")
ngBuild := { Process( ng + params , frontendDirectory.value) ! }
(packageBin in Universal) <<= (packageBin in Universal) dependsOn ngBuild
// Ends.
```






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
$ npm install --save @angular/animations
```

Slide components need hammer
```
$ npm install --save hammerjs
```

Update src/style.scss

```
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
```

Include specific MaterialModules (i.e. MdToolbarModule, ...)

```
$ npm install --save material-design-icons
```

Update src/style.scss

```
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url('~material-design-icons/iconfont/MaterialIcons-Regular.eot'); /* For IE6-8 */
  src: local('Material Icons'),
  local('MaterialIcons-Regular'),
  url('~material-design-icons/iconfont/MaterialIcons-Regular.woff2') format('woff2'),
  url('~material-design-icons/iconfont/MaterialIcons-Regular.woff') format('woff'),
  url('~material-design-icons/iconfont/MaterialIcons-Regular.ttf') format('truetype');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
```

https://github.com/google/material-design-icons/blob/master/iconfont/codepoints

## detect browser

```
$ npm install detect-browser --save
```

tey mediaelement
