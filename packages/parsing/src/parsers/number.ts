import { ParsingError } from '../ParsingError.js';
import { createValueParserGen, unknownTypeError } from './shared.js';

/**
 * Returns parser to parse value as number.
 */
export const number = createValueParserGen<number>((value) => {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    const num = Number(value);

    if (!Number.isNaN(num)) {
      return num;
    }
  }

  throw new ParsingError(value, { type: 'number', error: unknownTypeError() });
});