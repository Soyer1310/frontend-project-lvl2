const differentFiles = `{
  -follow: false
   host: hexlet.io
  -proxy: 123.234.53.22
  -timeout: 50
  +timeout: 20
  +verbose: true
}`;

const equalFiles = `{
   follow: false
   host: hexlet.io
   proxy: 123.234.53.22
   timeout: 50
}`;

const emptyFiles = '{\n}';

export { differentFiles, equalFiles, emptyFiles };
