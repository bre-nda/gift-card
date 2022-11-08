export class Sessions {
    id_auto: string;
    id: string;
    phone_no: string;
    ss_id: string;
    screen_id: string;
    Screen_description: string;

    constructor(
        id_auto: string,
        id: string,
        phone_no: string,
        ss_id: string,
        screen_id: string,
        Screen_description: string,
    ){
        this.id_auto=id_auto,
        this.id=id,
        this.phone_no=phone_no,
        this.ss_id=ss_id,
        this.screen_id=screen_id,
        this.Screen_description=Screen_description
    }
}
