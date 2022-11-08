export class Share {
    id: string;
    Sender_Name: string;
    User_Name: string;
    Beneficiary_Special_Text: string;
    Beneficiary_Mobile: string;
    Editing_Field: string;
    Mpesa_Code: string;
    Gift_Code: string;
    User_Mobile: string;
    Gift_Amount: string;
    Trans_Date: string;
    Gift_Type: string;
    Status: string;

    constructor(
        id: string,
        Sender_Name: string,
        User_Name: string,
        Beneficiary_Special_Text: string,
        Beneficiary_Mobile: string,
        Editing_Field: string,
        Mpesa_Code: string,
        Gift_Code: string,
        User_Mobile: string,
        Gift_Amount: string,
        Trans_Date: string,
        Gift_Type: string,
        Status: string,
    ){
        
        this.id=id,
        this.Sender_Name=Sender_Name,
        this.User_Name=User_Name,
        this.Beneficiary_Special_Text=Beneficiary_Special_Text,
        this.Beneficiary_Mobile=Beneficiary_Mobile,
        this.Editing_Field=Editing_Field,
        this.Mpesa_Code=Mpesa_Code,
        this.Gift_Code=Gift_Code,
        this.User_Mobile=User_Mobile,
        this.Gift_Amount=Gift_Amount,
        this.Trans_Date=Trans_Date,
        this.Gift_Type=Gift_Type,
        this.Status=Status
    }
}
