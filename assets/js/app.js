/**
 * This file basically imports our sass file which is built through webpack and compile to css file.
 * The compile css file would be placed inside the `next.js` public `css` folder.
 * -----
 * Q: Why I'm not using builtin `Next.js` configuration file `next.config.js` or any `Next.js`
 * plugin to compile sass files into css?
 * A: Because of the separation of concern. I wanted my separate css file for frontend which is only
 * scoped to the frontend doesn't interact with admin code. I searched an answer to my problem but
 * `Next.js` community also don't know how to separate multiple css files.
 * By default `Next.js` only compile sass file into one css bundle which is I'm not interested.
 */
import '@assets/scss/vendor-frontend.scss';
import '@assets/scss/utility.scss';
import '@assets/scss/app.scss';
