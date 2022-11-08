export class Message {
    Out_ID: string;
    Trans_Date: string;
    Out_Mobile_No: string;
    Out_Text: string;
    Out_Status: string;
    Out_Response: string;
    Out_Msg_Type: string;
    Out_Trans_ID: string;
    Out_Processed_Status: string;
    Out_Vendor_ID: string;
    Out_Msg_ID: string;
    Total_Characters: string;
    Total_Msgs: string;
    Msg_Content_ID: string;

    constructor(
        Out_ID: string,
        Trans_Date: string,
        Out_Mobile_No: string,
        Out_Text: string,
        Out_Status: string,
        Out_Response: string,
        Out_Msg_Type: string,
        Out_Trans_ID: string,
        Out_Processed_Status: string,
        Out_Vendor_ID: string,
        Out_Msg_ID: string,
        Total_Characters: string,
        Total_Msgs: string,
        Msg_Content_ID: string,

    ){
        this.Out_ID=Out_ID,
        this.Trans_Date=Trans_Date,
        this.Out_Mobile_No=Out_Mobile_No,
        this.Out_Text=Out_Text,
        this.Out_Status=Out_Status,
        this.Out_Response=Out_Response,
        this.Out_Msg_Type=Out_Msg_Type,
        this.Out_Trans_ID=Out_Trans_ID,
        this.Out_Processed_Status=Out_Processed_Status,
        this.Out_Vendor_ID=Out_Vendor_ID,
        this.Out_Msg_ID=Out_Msg_ID,
        this.Total_Characters=Total_Characters,
        this.Total_Msgs=Total_Msgs,
        this.Msg_Content_ID=Msg_Content_ID
    }
}
