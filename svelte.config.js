// Quote from https://daveceddia.com/svelte-typescript-jest/ :
/*
    I noticed that everything worked fine without this file until I added 
    support for JS tests with Babel. So if you’re writing your tests in TS 
    and skipping the Babel stuff, you might not need this.
*/

const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess(),
};