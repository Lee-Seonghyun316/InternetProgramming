function over(obj) {
    obj.src = "사과.jpg";
}
function out(obj) {
    obj.src = "사과2.jpg";
}

//자바스크립트 식별자(변수, 상수, 함수이름)만들기
//숫자 처음 안된다. 
//대소문자는 구분해서 다루어진다.
//알파벳, _ 0-9, $만 사용가능
//예약어 안된다. 
//_로 시작하지 말것

//문장 끝에 ; 필요->알수없는 오류로 존대
/*
문자열 작은따옴표 큰따옴표 모두 가능 단, 교차안된다
문자 하나도 문자열로 인식
*/
//if부터 다음시간

var score;//변수 score선언
var address="서울시"//address변수로 선언하고 서울시로 초기화
age="21"//이미 선언된 age면 덮어쓰기 아니면 초기화 선언

/*
전역변수 
지역변수(괄호 안 지역)
단, 선언없이 지역에서 초기화 시 
지역 또는 전역에서 찾고 난 후 선언처리(전역변수로 선언처리)
전역 변수 앞에this를 붙이기도함
*/

//지수형 표현 1234E-4 = 0.1234(오른쪽도 가능)
//treu flase도 상수에 해당
//null, NaN도 상수
//parseInt():괄호안을 십진수로 바꿔라
//parseInt("123")문자 123->숫자123
// "출"력원하면 \""을 써주면 된다
