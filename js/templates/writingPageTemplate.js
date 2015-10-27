// template for writingPageFactory
// input -- an array of article objects w link, title, and lede values
"use strict";

var writingPageTemplate = [
    "{{#articles}}",
    "<h2><a> href='{{link}}' {{title}} </a></h2>",
    "<p> {{lede}} </p>",
    "{{/articles}}",
].join("\n");
