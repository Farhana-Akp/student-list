

export interface StudentDetails {
    id: number;
    name: string;
    course?: string;
    age?: number;
    class?: number;
    username?:string;
        email?:string;
    address?:{
        street?:string;
    suite?:string;
        city?:string;
    zipcode?:string;
    geo?:{
        lat:string;
        lng:string;

    }};

    phone?:string;


}