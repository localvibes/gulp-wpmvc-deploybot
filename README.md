# gulp-wpmvc-deploybot

DeployBot tasks for WPMVC. DeployBots compatible server sources: Atomic SFTP, SFTP, FTP or any other that allows server compilation.

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

The `Destination Path` should be the proper plugin/theme subfolder under either `wp-content/plugins` or `wp-content/themes`, for example:

```bash
[path to wp-content]/themes/twenty-ninteen-child
```

On the **Compile, compress, or minimize your code** section during DeployBot's server configuration add the following:

```bash
# Create a shared vendor directory and symlink it to the project root
echo "(1) Prepare deployment folders..."
mkdir -p $SHARED/vendor
ln -s $SHARED/vendor $RELEASE/vendor
# Dependencies
echo "(2) Downloading dependencies..."
composer install --no-dev
npm install
# Build
echo "(3) Building..."
gulp deploybot
echo "(5) FINISHED"
# Change directory on advance options
# source path to:
# /builds/deploybot
echo "(5) FINISHED"
```

On the **Advanced options** set `Source Path` to be:

```bash
/builds/deploybot
```

## License

MIT (c) 2019 Local Vibes