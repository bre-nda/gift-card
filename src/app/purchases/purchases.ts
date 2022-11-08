export class Purchases {
    id: string;
    Acc_Mpesa_Code: string;
    Acc_Channel: string;
    Acc_Redeem_Code: string;
    Acc_Deposit_Type: string;
    Acc_Mobile: string;
    Acc_TransDate: string;
    Acc_Amount: string;
    Acc_Type:string;
    Acc_Trans_Charge: string;


    constructor(id: string, Acc_Mpesa_Code: string, Acc_Channel:string, Acc_Redeem_Code: string,Acc_Deposit_Type: string, Acc_Mobile: string,Acc_TransDate:string, Acc_Amount:string, Acc_Type:string, Acc_Trans_Charge: string){
        this.id=id;
        this.Acc_Mpesa_Code=Acc_Mpesa_Code;
        this.Acc_Channel=Acc_Channel;
        this.Acc_Redeem_Code=Acc_Redeem_Code;
        this.Acc_Deposit_Type=Acc_Deposit_Type;
        this.Acc_Mobile=Acc_Mobile;
        this.Acc_TransDate=Acc_TransDate;
        this.Acc_Amount=Acc_Amount;
        this.Acc_Type=Acc_Type;
        this.Acc_Trans_Charge=Acc_Trans_Charge
       }
}
