# grunt-ng-sass-colors

> Converts SASS colors to angular values

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ng-sass-colors --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ng-sass-colors');
```

## The "ngSassColors" task

### Overview
In your project's Gruntfile, add a section named `ngSassColors` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ngSassColors: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options


#### options.module
Type: `String`
**Mandatory** (Default value: `null`)

Specifies the angular module under which this values provider is to be created.
This is *mandatory*.


#### options.providerName
Type: `String`
Default value: `ColorPalette`

Specifies the name to be given to the generated values provider


#### options.variablesLike
Type: `Function` or `RegExp`
Default value: `null`

Specified which variables to add to the generated values


#### options.stripPrefix
Type: `String`
Default value: `null`

Removes the given string prefix from variables before adding them to the generated values provider


#### options.transform
Type: `Function`
Default value: `null`

Accepts the variable name as input and returns a transformed name that is used as
'key' in the generated values provider


#### options.quotes
Type: `String`
Default value: `'`

Specifies whether generated code will use single or double quotes

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  ngSassColors: {
    options: {
      module: 'ameyms'
    },
    files: {
      'app/scripts/values/colors.js': [
          'app/styles/my_colors.scss',
          'app/styles/brand_colors.scss'
      ],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  ngSassColors: {
    options: {
      module: 'ameyms',
      variablesLike: /color[_\-].+/i,
      providerName: 'ColorPalette',
      quotes: '\''
    },
    files: {
      'app/scripts/values/colors.js': [
          'app/styles/my_colors.scss',
          'app/styles/brand_colors.scss'
      ],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
