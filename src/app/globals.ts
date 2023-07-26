//
// ===== File globals.ts    
//

'use strict';
export const sep='/';
// export const url = 'https://tutresearchapp.com/api/v1/'
export const url = 'http://localhost:3000/api/v1/'
export class GlobalVariables {
    constructor () {}
    static isToBeShown =false;
    showSideNav()
    {
        GlobalVariables.isToBeShown = true;
    }
    hideSideNav()
    {
        GlobalVariables.isToBeShown = true;
    }
}
//It seems like when I update this variable it does not get updated on the other files.
//
export const version: string="22.2.2";    