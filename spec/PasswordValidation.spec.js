

describe('Password', ()=> {
        it('validates that meets basic conditions', ()=> {
               const password = new Password('A123_456')

                const isBasicPassword = password.isValidBasic(password) 

                expect(isBasicPassword).toBe(true)
        })
}) 
