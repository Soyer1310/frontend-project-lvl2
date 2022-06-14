const differentJsons = `{
  -follow: false
   host: hexlet.io
  -proxy: 123.234.53.22
  -timeout: 50
  +timeout: 20
  +verbose: true
}`;

const equalJsons = `{
   follow: false
   host: hexlet.io
   proxy: 123.234.53.22
   timeout: 50
}`;

const emptyJson = '{\n}';

export { differentJsons, equalJsons, emptyJson };
