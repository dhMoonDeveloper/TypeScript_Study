// object 

let user: {
    id? : number;    // 필수값이 아니게 설정
    name : string;
} = {
    id : 1,
    name : "문동현",
};

let config : {
    readonly apiKey: string;   // 값 변경이 불가능하게 속성 지정 
} = {
    apiKey: "MY API KEY",
}


