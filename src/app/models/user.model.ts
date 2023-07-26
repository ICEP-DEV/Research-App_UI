export class User{
    [x: string]: any;
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    userType: number = 1;
    password: string = '';
    disciplineId: number = 1;
    confirmPassword: string = '';
    photo: string = '';
    idNumber: number | undefined ;
    title: string = '';
    verified: boolean = true;
    references: number | undefined;
    createdAt: Date |undefined;
    updatedAt: Date |undefined;
    studNumber: number | undefined 
}