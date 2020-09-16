/*

소수인 것은 입력 받은 인자값이 자기 자신 이외의 값으로 나눠지지 않을 때를 if문으로 표현할려는 것이 실수 였다.
단순히 약수의 합만 구하는 것인데 괜한 조건문을 사용하였다.
수학 개념과 알고리즘 및 코딩의 실력이 부족한 것을 느낀다.

약수의 합

문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.

입출력 예
n	    return
12	  28
5	    6

입출력 예 설명
입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
*/

function solution(n) {
    var answer = 0;
    var sum = 0;

    if(n%1==0  n%2==0  n%3 ==0){
        for(var i = 1; i <= n; i++){
            if (n%i==0){
                sum = sum + i;
            }
        }
    } else {
    sum = n + 1;
    }

    answer = sum;
    return answer;
}

/*
친구의 답
function solution(n) {
    var i = 0;
    var sum = 0;
    for(i = 0; i <= n; i++){
        if(n % i === 0){
            sum += i;
        }
    }

    return sum;
}
*/

