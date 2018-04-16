export class Domo {
    domoId = '';
    totemParent = '';
    ubicacionBrief = '';
    lat: 0;
    long: 0;
}

export class DomoStatus {
    domoId = '';
    status = true;
}

export interface IDomos {
    domoId: string;
    totemParent: string;
    ubicacionBrief: string;
    lat: number;
    long: number;
    status: string;
}
