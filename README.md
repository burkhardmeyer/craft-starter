
## Craft 3 Boilerplate


This is an alternate boilderplate package for Craft 3 CMS projects.

It builds on Pixel & Tonic's canonical [craftcms/craft](https://github.com/craftcms/craft) package and NYStudio's craft setup [nystudio107/craft](https://github.com/nystudio107/craft)



## Assumptions Made


* Gulp is used as a the frontend workflow automation tool
* [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind) is used as the utility-first CSS framework
* Apache is used as the web server
* Critical CSS is used site-wide
* FontFaceObserver is used for font loading
* Craft-Scripts are used for db/asset synching
* Craft 3 Multi-Environment is used for the Craft 3 multi-environment setup
* Modernizr is used for fallback solutions (e.g. CSS Grid)


## Using burkhardmeyer/craft-starter

This project package works exactly the way Pixel & Tonic's [craftcms/craft](https://github.com/craftcms/craft) package works; you create a new project by first creating & installing the project:

    composer create-project burkhardmeyer/craft-starter PATH -s RC

Make sure that `PATH` is the path to your project, including the name you want for the project, e.g.:

    composer create-project burkhardmeyer/craft-starter craft3 -s RC

Then `cd` to your new project directory, and run Craft's `setup` console command to create your `.env` environments and optionally install:

    cd PATH
    ./craft setup

Finally, run the `bmeyer-setup` command to configure Craft-Scripts & Craft 3 Multi-Environment based on your newly created `.env` settings:

    ./bmeyer-setup

That's it, enjoy!

If you ever delete the `vendor` folder or such, just re-run:

    ./bmeyer-setup

...and it will re-create the symlink to your `.env.sh`; don't worry, it won't stomp on any changes you've made.
