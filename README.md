
## Craft 3 Boilerplate


This is an alternate boilderplate package for Craft 3 CMS projects.

It builds on Pixel & Tonic's canonical [craftcms/craft](https://github.com/craftcms/craft) package and NYStudio's craft setup [nystudio107/craft](https://github.com/nystudio107/craft)

In addition to setting up a new Craft 3 CMS project, this project sets up :
 
* [Craft 3 Multi-Environment](https://github.com/nystudio107/craft3-multi-environment) as described in the [Multi-Environment Config for Craft CMS](https://nystudio107.com/blog/multi-environment-config-for-craft-cms) article
* [Craft-Scripts](https://github.com/nystudio107/craft-scripts) as described in the [Database & Asset Syncing Between Environments in Craft CMS](https://nystudio107.com/blog/database-asset-syncing-between-environments-in-craft-cms), [Mitigating Disaster via Website Backups](https://nystudio107.com/blog/mitigating-disaster-via-website-backups) & [Hardening Craft CMS Permissions](https://nystudio107.com/blog/hardening-craft-cms-permissions) articles
  
...and sets up some other base scaffolding as described to the following articles:

* [A Better package.json for the Frontend](https://nystudio107.com/blog/a-better-package-json-for-the-frontend)
* [A Gulp Workflow for Frontend Development Automation](https://nystudio107.com/blog/a-gulp-workflow-for-frontend-development-automation)
* [Implementing Critical CSS on your website](https://nystudio107.com/blog/implementing-critical-css)
* [Simple Static Asset Versioning in Craft CMS](https://nystudio107.com/blog/simple-static-asset-versioning)
* [Enhancing a Craft CMS 3 Website with a Custom Module](https://nystudio107.com/blog/simple-static-asset-versioning)

It also installs a few base plugins that I use on every project. You can read more about it in the [Setting up a New Craft 3 CMS Project](https://nystudio107.com/blog/enhancing-a-craft-cms-3-website-with-a-custom-module) article.

## Assumptions Made

Since this is boilerplate that nystudio107 uses for projects, it is by definition opinionated, and has a number of assumptions:

* Gulp is used as a the frontend workflow automation tool
* [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind) is used as the utility-first CSS framework
* Apache is used as the web server
* Redis is used as the PHP Session and Craft data caching method
* Critical CSS is used site-wide
* FontFaceObserver is used for font loading
* Craft-Scripts are used for db/asset synching
* Craft 3 Multi-Environment is used for the Craft 3 multi-environment setup

Obviously you're free to remove whatever components you don't need/want to use.

## Using burkhardmeyer/craft

This project package works exactly the way Pixel & Tonic's [craftcms/craft](https://github.com/craftcms/craft) package works; you create a new project by first creating & installing the project:

    composer create-project burkhardmeyer/craft PATH -s RC

Make sure that `PATH` is the path to your project, including the name you want for the project, e.g.:

    composer create-project burkhardmeyer/craft craft3 -s RC

Then `cd` to your new project directory, and run Craft's `setup` console command to create your `.env` environments and optionally install:

    cd PATH
    ./craft setup

Finally, run the `nys-setup` command to configure Craft-Scripts & Craft 3 Multi-Environment based on your newly created `.env` settings:

    ./nys-setup

That's it, enjoy!

If you ever delete the `vendor` folder or such, just re-run:

    ./nys-setup

...and it will re-create the symlink to your `.env.sh`; don't worry, it won't stomp on any changes you've made.
