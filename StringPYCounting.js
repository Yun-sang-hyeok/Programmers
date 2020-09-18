/*
문제
문자열 내 p와 y의 개수

문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.

입출력     예
s	        answer
pPoooyY	  true
Pyy	      false

입출력 예 설명
입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

첫번째께 내 풀이
*/
function solution(s){
    var s = s.toLowerCase();
    var pArr = []
    var yArr = []

    for(var i = 0; i < s.length; i++){
        if(s[i] == 'p'){
            pArr.push(s[i]);
        }else if(s[i] =='y'){
            yArr.push(s[i]);
        }
    }
    if(pArr.length == yArr.length){
        return true;
    }else{
        return false;
    }
}


/* 다른 사람의 풀이1
function solution(s){
    return s.match(/p/ig).length == s.match(/y/ig).length; 
    //match 메소드를 이용하여 정규식으로 i(case Insensitive, 대소문자를 구별함), 
    //g(global, 전역 매칭 처음부터가 아닌 전체에서 정규식이 맞는 것을 찾는다.)
    //하지만 이것은 p 혹은 y가 없는 경우에는 에러가 난다.
    const solution = s => (s.match(/p/ig)||[]).length === (s.match(/y/ig)||[]).length; // 이것이 더 정확한 답이다.ver1
    const solution = s => s.match(/p/ig)?.length === s.match(/y/ig)?.length; // ver2
}
*/

/* 다른 사람의 풀이2
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
    // s를 전부 toUpperCase()메소드를 활용하여 대문자로 변환하고,
    // split()메소드로 "P"를 분리하고 문자열의 길이와 같은 방식으로 "Y"를 분리하고 남은 문자열의 길이를 비교한다.
}
*/
