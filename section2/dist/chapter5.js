var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "문동현",
    role: Role.ADMIN, // 0 <- 관리자 
    language: Language.english
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 1 <- 일반유저 
    language: Language.korean
};
const user3 = {
    name: "아무개",
    role: Role.GUEST // 2 <- 게스트 
};
console.log(user1, user2, user3);
export {};
