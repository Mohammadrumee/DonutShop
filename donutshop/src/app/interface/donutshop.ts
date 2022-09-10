export interface Donutshop {
    count :number;
    results :Properties[];
}


export interface Properties {
    id :number;
    ref :string;
    name :string;
    photo :string;
    photo_attribution :string;
}

export interface Donutdetails {
    id :number;
    ref :string;
    name :string;
    calories :number;
    extras :string[];
    photo :string;
    photo_attribution :string;
}