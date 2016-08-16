Lumeter
=======

Website redesign
----------------


# Setup assumes you have installed node, npm, git, bower and gulp on your machine
### Once you've cloned the Newsplex repository, in your command line tool...

sudo npm install -g bower

npm install -g gulp

1. Run `bower init` and agree with all the wizard configurations.

3. Run `sudo npm init` and agree with all the wizard configurations.

2. Run `bower install` to install third-party dependency files.

2. Run `sudo npm install` to install all the task dependencies.

2. Run `sudo gulp build` to regenerate the project's files (.html, .css, .js, and .jpg/.jpeg/.png/.gif/.svg).



### Tasks

Task running is split into partial tasks, with most tasks cascading from basic jobs like compile, delete and watch file activity. Below are the main tasks:

1. `gulp` generates the project .html and creates folders for, and compiles, .css, .js and .jpg/.jpeg/.png/.gif/.svg files to the distribution folder, **_dist_** at root

2. `gulp local` compiles all project .html, .css, .js and .jpg/.jpeg/.png/.gif/.svg files directly into the project root, and organizes the files into **_css_**, **_js_** and **_img_** folders. This is useful for local development and testing.

3. `gulp clean` deletes compiled files compiled to the project root, as well as the distribution folder.

4. `gulp watch` listens in on changes to .html, .css/.scss, .js and .jpg/.jpeg/.png/.gif/.svg files inside the project's **_source_** folder. When changes are made (write/delete), the affected file is re-compiled to the relevant project root folder.



### Other tasks

Here are some other useful tasks, but you can look through the **_tasks_** folder at the project root to find some of the more obscure sub-tasks.

1. `gulp html` re-compiles **_source_** .html files to the project root.

2. `gulp css` re-compiles **_source_** .css/.scss files to the **_css_** folder at root.

3. `gulp js` re-compiles **_source_** .js files to the **_js_** folder at root.

4. `gulp img` re-compiles **_source_** .jpg/.jpeg/.png/.gif/.svg files to the **_img_** folder at root.



### Gulp modules set as 'variables'

1. gulp
2. gulp-sass
3. gulp-autoprefixer
4. gulp-uglify
5. gulp-minify-css
6. gulp-concat
7. gulp-imagemin C
8. gulp-rename X
9. gulp-notify
10. gulp-cache
11. gulp-plumber
12. del
13. event-stream
14. gulp-livereload

### HTML task

1. Find all .html files in project 'root' folder.
2. Minify them.
3. Save to 'dist' folder.
4. Reload project page in the browser.
5. 'Task complete' message.

### CSS task

1. Find all .scss files in project 'css' folder, and it's child folders.
2. Autoprefix them with browser prefixes where necessary.
3. Compile .scss and save to 'css' folder.
4. Reload project page in the browser.
5. Minify the project stylesheet.
6. Save to 'dist/css' folder.
7. 'Task complete' message.

### JS task

1. Find all .js files in project 'js' folder, and it's child folders.
2. Concatenate them.
3. Save to 'js' folder.
4. Reload project page in the browser.
5. Minify the project scripts.
6. Save to 'dist/js' folder.
7. 'Task complete' message.

### IMG task

1. Find all image files in project 'img' folder, and it's child folders.
2. Minify them.
3. Save to 'dist/js' folder.
4. Reload project page in the browser.
5. 'Task complete' message.

### Cleanup task

1. Set which folders to "flush" from the 'dist' folder.

### Default task

1. Delete 'dist' folder contents.
2. Run 'html', 'css', 'js' and 'img' tasks.

### Watch task

1. Listen in on changes to files in the project 'root' folders (css, js and img), and the .html files.
2. Run the default tasks.

What next?
----------

Pick and choose what kind of project you think this workflow is best suited for :)

Good luck!