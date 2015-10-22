// template for writingPageFactory
"use strict";

var writingPageTemplate = [
    "{{#articles}}",
    "<h2><a> href=' {{link}}' {{title}} </a></h2>",
    "<p> {{lede}} </p>",
    "{{/articles}}",
].join("\n");
