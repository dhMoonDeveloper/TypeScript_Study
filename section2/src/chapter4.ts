
type User = {
    id : number;
    name : string;
    nickname : string;
    birth : string;
    bio : string;
    location: string;
}

let user: User = {
    id : 1,
    name : "문동현",
    nickname : "test",
    birth : "1990.10.23",
    bio : "하이",
    location : "과천"
}

type CountryCodes = {
    [key: string]: string;
};

let countryCode: CountryCodes = {
    Korea : "ko",
    UnitedState : "us",
    UnitedKingdom : "uk"
}

type CountryNumberCodes = {
    [key: string]: number;
    // 필수로 지정이 필요한 타입이 존재하면 추가로 입력
    // Korea : number
}

let countryNumberCodes = {}