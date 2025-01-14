/* eslint-disable no-console */
console.log = console.log.bind(undefined, `[${new Date().toLocaleString()}]`);
console.error = console.error.bind(undefined, `[${new Date().toLocaleString()}]`);
console.info = console.info.bind(undefined, `[${new Date().toLocaleString()}]`);
console.warn = console.warn.bind(undefined, `[${new Date().toLocaleString()}]`);
