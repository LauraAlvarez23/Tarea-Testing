import {generateSixDigitCode} from '../../../src/utils/generateCode.util.ts'
import { describe, it, expect}  from 'vitest';

describe('generate code test', ()=>{
    it('should generate a code with 6 digits', ()=>{
        expect(generateSixDigitCode()).matches(/\d{6}/);
    });
    it('should generate positive integers ',()=>{
        const code = generateSixDigitCode();
        const numericCode = Number(code);

        expect(numericCode).toBeGreaterThan(0);
        expect(Number.isInteger(numericCode)).toBe(true);
    })
    it('should generate unique codes', ()=>{
        const code1 = generateSixDigitCode();
        const code2 = generateSixDigitCode();
        expect(code1!==code2).toBe(true);
    });
})

