/*
문제
소수 찾기

문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.

입출력 예
n	    result
10	  4
5	    3

입출력 예 설명

입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
*/
function solution(n) {
    var answer = 3;
    for(var i = 2; i <= n && n <= 1000000; i++){
        if(i%2 == 0 || i%3 == 0 || i%5 == 0 || i%7 == 0 || i%9 == 0){
            continue;
        }else{
            answer++;
        }
    }
    return answer;
}

------------------
function solution(n) {
    var answer = 2;
    
    if (n == 2){
        return 1;
    }
    
    for(var i = 2; i <= n && n <= 1000000; i++){
        if(i % 2 == 0 || i % 3 == 0){
            arr.push(i);
        }else{
            answer++;
        }
    }
    console.log(arr);
    return answer;
}

console.log(solution(30));

----------------------
function solution(n) {
    var answer = 4;
    var arr = [];
    
    if (n == 2){
        return 1;
    }else if (n == 3){
        return 2;
    }else if (n == 5){
        return 3;
    }else if (n == 7){
        return 4;
    }
    
    for(var i = 2; i <= n && n <= 1000000; i++){
        if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 11 == 0 || i % 13 == 0){
            //continue;
            arr.push(i);
        }else{
            answer++;
        }
    }
    console.log(arr);
    return answer;
    
}
console.log(solution(12));
