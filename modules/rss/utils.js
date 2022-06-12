"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = undefined;
function sanitize(url) {
  if (typeof url === "undefined") {
    return;
  }
  return url.replace(/&/g, "&amp;");
}
exports.sanitize = sanitize;
