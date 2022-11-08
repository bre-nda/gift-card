
export class Redemption {
    id: string;
    Redeem_Mobile: string;
    Redeem_Merchant_ID: string;
    Editing_Field: string;
    Redeem_Mpesa_Code: string;
    Redeem_Code: string;
    Redeem_Account_No: string;
    Redeem_Amount: string;
    Redeem_Trans_Charge: string;
    Redeem_Type: string;
    Redeem_Date: string;
    Redeem_Status: string;
    
   

   constructor(
    id: string,
    Redeem_Mobile: string,
    Redeem_Merchant_ID: string,
    Editing_Field: string,
    Redeem_Mpesa_Code: string,
    Redeem_Code: string,
    Redeem_Account_No: string,
    Redeem_Amount: string,
    Redeem_Trans_Charge: string,
    Redeem_Type: string,
    Redeem_Date: string,
    Redeem_Status: string,
   ){
    this.id=id;
    this.Redeem_Mobile=Redeem_Mobile;
    this.Redeem_Merchant_ID=Redeem_Merchant_ID;
    this.Editing_Field=Editing_Field;
    this.Redeem_Mpesa_Code=Redeem_Mpesa_Code;
    this.Redeem_Code=Redeem_Code;
    this.Redeem_Account_No=Redeem_Account_No;
    this.Redeem_Amount=Redeem_Amount;
    this.Redeem_Trans_Charge=Redeem_Trans_Charge;
    this.Redeem_Type=Redeem_Type;
    this.Redeem_Date=Redeem_Date;
    this.Redeem_Status=Redeem_Status;
   }
}
