### Hexlet tests and linter status:
[![Actions Status](https://github.com/Soyer1310/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Soyer1310/frontend-project-lvl2/actions)

<a href="https://codeclimate.com/github/Soyer1310/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/e75034a66dcc2264c1a9/maintainability" /></a>

[![Node CI](https://github.com/Soyer1310/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)](https://github.com/Soyer1310/frontend-project-lvl2/actions/workflows/nodejs.yml)

[![Test Coverage](https://api.codeclimate.com/v1/badges/e75034a66dcc2264c1a9/test_coverage)](https://codeclimate.com/github/Soyer1310/frontend-project-lvl2/test_coverage)

## Description
This is a CLI utility which is used for showing the difference between two files.

Stack: Node.js, Commander.js, npm, JEST, ESLint, Git, GitHub.

## Installation
$ git clone git@github.com:Soyer1310/frontend-project-lvl2.git

$ cd frontend-project-lvl2

$ make install

## Usage
This utility can be used as a CLI programm or a library in other projects.

$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version          output the version number
  -f, --format <type>    output format (default: "stylish". You also can use two additional formats: plain and json)
  -h, --help             display help for command

## Use in a project
import genDiff from '@hexlet/code';
const diff = genDiff(filepath1, filepath2, format);
console.log(diff);

## Demonstrations
[![asciicast](https://asciinema.org/a/fgll99KBgbGVGyxgr2AqCoom6.svg)](https://asciinema.org/a/fgll99KBgbGVGyxgr2AqCoom6)

[![asciicast](https://asciinema.org/a/CG1HHdZgZPCe0g0375a4aOcuF.svg)](https://asciinema.org/a/CG1HHdZgZPCe0g0375a4aOcuF)

[![asciicast](https://asciinema.org/a/RNltUeq5UPVSCHI4EvAnqi9m6.svg)](https://asciinema.org/a/RNltUeq5UPVSCHI4EvAnqi9m6)

[![asciicast](https://asciinema.org/a/CmGQiook5aD39MrSIZBCOovs7.svg)](https://asciinema.org/a/CmGQiook5aD39MrSIZBCOovs7)

[![asciicast](https://asciinema.org/a/88VeDcTBzS5d51vGEZHQP26Tt.svg)](https://asciinema.org/a/88VeDcTBzS5d51vGEZHQP26Tt)