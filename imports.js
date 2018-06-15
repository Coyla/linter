import foo from 'foo';
import { readFile } from 'fs';
import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path'; //bad
import {
  writeFile,
  unlink,
} from 'fs';

const fileVariables = 'vars';
const initComponents = 'init';

// laisser une ligne vide entre les imports et body
foo.init();

