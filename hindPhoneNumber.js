/*
문제
핸드폰 번호 가리기

문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 4 이상, 20이하인 문자열입니다.

입출력 예
phone_number	  return
01033334444	    *******4444
027778888	      *****8888
*/

function solution(n)
{
    var result = 0;
    var str = String(n);

    for(var i=0; i<str.length; i++){
        result = result + Number(str[i]);
    }

    return result;
}

/* 다른 사람 풀이
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4); //repeat으로 인자의 길이 -4로 repeat함수를 사용하여 반복하여 넣고 slice()함수를 사용하여 -4부터의 값만 가져와서 붙힌다.

  return result;
}


*/
