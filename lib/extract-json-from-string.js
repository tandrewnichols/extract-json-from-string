(function() {
  var isNode = typeof module !== 'undefined' && this.module !== module;

  /* istanbul ignore else */
  if (isNode) {
    module.exports = {};
  } else {
    window.extractJsonFromString = {};
  }
})();
