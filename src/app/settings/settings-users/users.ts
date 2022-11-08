export class Users {
    id: string;
    User_Mobile: string;
    User_Name: string;
    User_Reg_Date: string;

    constructor(
        id: string,
        User_Mobile: string,
        User_Name: string,
        User_Reg_Date: string,
    ){
        this.id=id,
        this.User_Mobile=User_Mobile,
        this.User_Name=User_Name,
        this.User_Reg_Date=User_Reg_Date
    }
}


