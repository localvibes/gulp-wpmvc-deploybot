# gulp-wpmvc-deploybot

Deploybot tasks for WPMVC.

## Install

```bash
npm install gulp-wpmvc-deploybot -save
```

## Project Setup

In your project's `gulpfile.js` add the following:

### Gulpfile

At the `// Prepare` section:

```bash
var deploybot = require('gulp-wpmvc-deploybot');
```

Then after `wpmvc()` line:

```bash
wpmvc(gulp, config);
deploybot(gulp, config);
```

## Deploybot Setup

On the **Compile, compress, or minimize your code** section during DeployBot's server configuration add the following:

```bash
# Dependencies
echo "(1) Downloading dependencies..."
composer install --no-dev
npm install
# Build
echo "(2) Building..."
gulp deploybot
echo "(3) Change-Directory deploy..."
# Change to build directory
cd builds/deploybot
```

## License

MIT (c) 2019 Local Vibes