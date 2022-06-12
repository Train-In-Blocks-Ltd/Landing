"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feed = undefined;
const rss2 = require("./rss2");
const Feed = (function () {
  function Feed(options) {
    const _this = this;
    this.items = [];
    this.categories = [];
    this.contributors = [];
    this.extensions = [];
    this.addItem = function (item) {
      return _this.items.push(item);
    };
    this.addCategory = function (category) {
      return _this.categories.push(category);
    };
    this.addContributor = function (contributor) {
      return _this.contributors.push(contributor);
    };
    this.addExtension = function (extension) {
      return _this.extensions.push(extension);
    };
    this.rss2 = function () {
      return rss2.default(_this);
    };
    this.options = options;
  }
  return Feed;
})();
exports.Feed = Feed;
