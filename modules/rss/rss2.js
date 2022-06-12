"use strict";
let __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (let s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (const p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
const convert = require("xml-js");
const config = require("./config");
const utils = require("./utils");
exports.default = function (ins) {
  const options = ins.options;
  let isContent = false;
  const base = {
    _declaration: { _attributes: { version: "1.0", encoding: "utf-8" } },
    rss: {
      _attributes: { version: "2.0" },
      channel: {
        title: { _text: options.title },
        link: { _text: utils.sanitize(options.link) },
        description: { _text: options.description },
        lastBuildDate: {
          _text: options.updated
            ? options.updated.toUTCString()
            : new Date().toUTCString(),
        },
        docs: {
          _text: options.docs
            ? options.docs
            : "https://validator.w3.org/feed/docs/rss2.html",
        },
        generator: { _text: options.generator || config.generator },
      },
    },
  };
  if (options.language) {
    base.rss.channel.language = { _text: options.language };
  }
  if (options.ttl) {
    base.rss.channel.ttl = { _text: options.ttl };
  }
  if (options.image) {
    base.rss.channel.image = {
      title: { _text: options.title },
      url: { _text: options.image },
      link: { _text: utils.sanitize(options.link) },
    };
  }
  if (options.copyright) {
    base.rss.channel.copyright = { _text: options.copyright };
  }
  // eslint-disable-next-line
  ins.categories.map(function (category) {
    if (!base.rss.channel.category) {
      base.rss.channel.category = [];
    }
    base.rss.channel.category.push({ _text: category });
  });
  base.rss.channel.item = [];
  // eslint-disable-next-line
  ins.items.map(function (entry) {
    const item = {};
    if (entry.title) {
      item.title = { _cdata: entry.title };
    }
    if (entry.link) {
      item.link = { _text: utils.sanitize(entry.link) };
    }
    if (entry.guid) {
      item.guid = { _text: entry.guid };
    } else if (entry.id) {
      item.guid = { _text: entry.id };
    } else if (entry.link) {
      item.guid = { _text: utils.sanitize(entry.link) };
    }
    if (entry.date) {
      item.pubDate = { _text: entry.date.toUTCString() };
    }
    if (entry.published) {
      item.pubDate = { _text: entry.published.toUTCString() };
    }
    if (entry.description) {
      item.description = { _cdata: entry.description };
    }
    if (entry.content) {
      isContent = true;
      item["content:encoded"] = { _cdata: entry.content };
    }
    if (Array.isArray(entry.author)) {
      item.author = [];
      // eslint-disable-next-line
      entry.author.map(function (author) {
        if (author.email && author.name) {
          item.author.push({ _text: author.email + " (" + author.name + ")" });
        }
      });
    }
    if (Array.isArray(entry.category)) {
      item.category = [];
      // eslint-disable-next-line
      entry.category.map(function (category) {
        item.category.push(formatCategory(category));
      });
    }
    if (entry.enclosure) {
      item.enclosure = formatEnclosure(entry.enclosure);
    }
    if (entry.image) {
      item.enclosure = formatEnclosure(entry.image, "image");
    }
    if (entry.img && entry.img.url && entry.img.type) {
      item["media:content"] = {
        _attributes: { url: entry.img.url, type: entry.img.type },
      };
    }
    if (entry.audio) {
      item.enclosure = formatEnclosure(entry.audio, "audio");
    }
    if (entry.video) {
      item.enclosure = formatEnclosure(entry.video, "video");
    }
    base.rss.channel.item.push(item);
  });
  if (isContent) {
    base.rss._attributes["xmlns:dc"] = "http://purl.org/dc/elements/1.1/";
    base.rss._attributes["xmlns:content"] =
      "http://purl.org/rss/1.0/modules/content/";
    base.rss._attributes["xmlns:media"] = "http://search.yahoo.com/mrss/";
  }
  return convert.js2xml(base, {
    compact: true,
    ignoreComment: true,
    spaces: 4,
  });
};
const formatEnclosure = function (enclosure, mimeCategory) {
  if (mimeCategory === undefined) {
    mimeCategory = "image";
  }
  if (typeof enclosure === "string") {
    const type = new URL(enclosure).pathname.split(".").slice(-1)[0];
    return {
      _attributes: {
        url: enclosure,
        length: 0,
        type: mimeCategory + "/" + type,
      },
    };
  }
  const type = new URL(enclosure.url).pathname.split(".").slice(-1)[0];
  return {
    _attributes: __assign(
      { length: 0, type: mimeCategory + "/" + type },
      enclosure
    ),
  };
};
const formatCategory = function (category) {
  const name = category.name;
  const domain = category.domain;
  return {
    _text: name,
    _attributes: {
      domain,
    },
  };
};
