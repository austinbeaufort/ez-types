"use strict";

const types = {
  n: function(item) {
    if (typeof item === 'number' && item !== NaN) {
      return item
    }
    else if (Array.isArray(item)) {
      throw new TypeError(`\n  Expected : number\n  Actual   : array\n\n`)
    }
    else {
      throw new TypeError(`\n  Expected : number\n  Actual   : ${typeof item}\n\n`)
    }
  },


  s: function(item) {
    if (typeof item === 'string') {
      return item
    }
    else if (Array.isArray(item)) {
      throw new TypeError(`\n  Expected : string\n  Actual   : array\n\n`)
    }
    else {
      throw new TypeError(`\n  Expected : string\n  Actual   : ${typeof item}\n\n`)
    }
  },


  o: function(item) {
    if (Array.isArray(item)) {
      throw new TypeError(`\n  Expected : object\n  Actual   : array\n\n`)
    }
    else if (typeof item === 'object') {
      return item
    }
    else {
      throw new TypeError(`\n  Expected : object\n  Actual   : ${typeof item}\n\n`)
    }
  },


  a: function(item) {
    if (Array.isArray(item)) {
      return item
    }
    else {
      throw new TypeError(`\n  Expected : array\n  Actual   : ${typeof item}\n\n`)
    }
  },


  f: function(item) {
    if (typeof item === 'function') {
      return item
    }
    else if (Array.isArray(item)) {
      throw new TypeError(`\n  Expected : function\n  Actual   : array\n\n`)
    }
    else {
      throw new TypeError(`\n  Expected : function\n  Actual   : ${typeof item}\n\n`)
    }
  },


  u: function(item) {
    if (item === undefined) {
      return `True: ${item}`
    }
    else if (Array.isArray(item)) {
      throw new TypeError(`\n  Expected : undefined\n  Actual   : array\n\n`)
    }
    else {
      throw new TypeError(`\n  Expected : undefined\n  Actual   : ${typeof item}\n\n`)
    }
  },


  b: function(item) {
    if (typeof item === 'boolean') {
      return item
    }
    else if (Array.isArray(item)) {
      throw new TypeError(`\n  Expected : string\n  Actual   : array\n\n`)
    }
    else {
      throw new TypeError(`\n  Expected : string\n  Actual   : ${typeof item}\n\n`)
    }
  },


  nul : function(item) {
    if (item === undefined) {
      return `True: ${item}`
    }
    else if (Array.isArray(item)) {
      throw new TypeError(`\n  Expected : undefined\n  Actual   : array\n\n`)
    }
    else {
      throw new TypeError(`\n  Expected : undefined\n  Actual   : ${typeof item}\n\n`)
    }
  },


}

module.exports = types