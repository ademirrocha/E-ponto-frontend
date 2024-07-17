export interface TextError{
    field: string
    message: string
}

export interface AlertsType{
    type: string;
    text: string;
    open: boolean;
    duration: number;
}


export interface HttpResponse<T> {
    data: T;
    message: string;
    success: boolean;
};

export interface EventType {
    target: {
        value: number
        name: string
    }
}

export interface MessageErro {
    field: string
    message: string
}

export type TargetType = EventTarget & {
   innerHTML?: number|string;
}