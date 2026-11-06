import * as api from '@lp-labs/array-median-selector';
import { median } from '@lp-labs/array-median-selector';
console.log(median([7, 1, 4]));
// @ts-expect-error invalid argument must be rejected by declarations
api.median('values');
