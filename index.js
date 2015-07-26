(function () {

  if (document.documentElement) {
    initialize();
  } else {
    window.addEventListener('DOMContentLoaded', initialize);
  }

  function initialize () {

    var SHEET_ID = 'messages-smaller-font';
    var SHEET_SELECTOR = 'style#' + SHEET_ID;
    var SHEET_CONTENT = [
      '.message-content p.message-content-body,',
      '[data-type="list"] li p:first-of-type {',
      '  font-size: 1.4rem; line-height: 1.8rem',
      '}',
    ].join('\n');

    var existing = document.head.querySelector(SHEET_SELECTOR);
    if (existing) { existing.parentNode.removeChild(existing); }

    var sheet = document.createElement('style');
    sheet.setAttribute('id', SHEET_ID);
    sheet.setAttribute('type', 'text/css');

    var styleText = document.createTextNode(SHEET_CONTENT)
    sheet.appendChild(styleText);

    document.head.appendChild(sheet);

  }

}());
