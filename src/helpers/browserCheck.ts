import getBrowser from 'ua-parser-js';

const { browser } = getBrowser();
export const isChrome = /chrome/i.test(browser.name || '');
