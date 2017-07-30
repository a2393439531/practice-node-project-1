import marked from 'marked';

import xss from 'xss';

export function redirectURL(url) {
  location = url;
}


const xssOptions = {
  whiteList: Object.assign({}, xss.whiteList),
};
xssOptions.whiteList.code = ['class'];
xssOptions.whiteList.span = ['class'];
const myxss = new xss.FilterXSS(xssOptions);
