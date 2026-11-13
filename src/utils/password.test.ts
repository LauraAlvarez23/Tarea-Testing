import { hashPassword, comparePassword } from '../../../src/utils/password.util.ts'; 

describe('generation of hashes test', ()=> {
    const password1 = "ClaveUno123!";
    const password2 = "ClaveDos456!";

    let hash1: string;
    let hash2: string;

    it('should generate a non-empty hashes that are diferent from the original password', async() => {
        hash1 = await hashPassword(password1);
        hash2 = await hashPassword(password2);

        expect(hash1).toBeTypeOf('string');
        expect(hash1.length).toBeGreaterThan(0);
        expect(hash1).not.toBe(password1);

        expect(hash2).toBeTypeOf('string');
        expect(hash2.length).toBeGreaterThan(0);
        expect(hash2).not.toBe(password2);

        expect(hash1 !== hash2).toBe(true);
    });

    it('should return true if the hashes are correct', async() => {
        if(!hash1 || !hash2){
            hash1 = await hashPassword(password1);
            hash2 = await hashPassword(password2);
        }

        const match1 = await comparePassword(password1, hash1);
        const match2 = await comparePassword(password2, hash2);

        expect(match1).toBe(true);
        expect(match2).toBe(true);
    });

    it('should return false if the hashes doesnt get mixed', async() => {
        if(!hash1 || !hash2){
            hash1 = await hashPassword(password1);
            hash2 = await hashPassword(password2);
        }

        const notMatch1 = await comparePassword(password2, hash1);
        const notMatch2 = await comparePassword(password1, hash2);

        expect(notMatch1).toBe(false);
        expect(notMatch2).toBe(false);
    })


})
