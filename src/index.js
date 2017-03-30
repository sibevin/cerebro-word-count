'use strict';

const ICON_FILE = require('./icon.png');
const WC_REGEX = /wc\s+(.*)/i;

const plugin = ({
  term,
  display,
  actions
}) => {
  if (WC_REGEX.test(term)) {
    let [, query] = WC_REGEX.exec(term);
    let letterCount = query.length;
    let wordCount = query.split(/(\s+)/)
      .filter(function(e) {
        return e.trim().length > 0;
      })
      .length;
    display({
      icon: ICON_FILE,
      title: `Letters: ${letterCount} / Words: ${wordCount}`,
      getPreview: () => `<div style="font-size: 2em;">Letters: ${letterCount} <br/>Words: ${wordCount}<hr/>${query}</div>`
    });
  }
};

module.exports = {
  fn: plugin,
  icon: ICON_FILE,
  name: 'Word Count',
  keyword: 'wc'
}
