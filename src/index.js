'use strict';

const ICON_FILE = require('./icon.png');
const WC_REGEX = /wc\s+(.*)/i;

const plugin = ({term, display, actions}) => {
  if (WC_REGEX.test(term)) {
    let [, query] = WC_REGEX.exec(term);
    let count = query.length;
    display({
      icon:       ICON_FILE,
      title:      `${count}`,
      getPreview: () => `<div style="font-size: 2em;">${count} word(s)<br/>${query}</div>`
    });
  }
};

module.exports = {
  fn: plugin,
  icon: ICON_FILE,
  name: 'Word Count',
  keyword: 'wc'
}
