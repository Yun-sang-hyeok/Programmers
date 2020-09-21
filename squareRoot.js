/*
    문제 설명
    임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
    n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
    
    제한 사항
    n은 1이상, 50000000000000 이하인 양의 정수입니다.
    
    입출력 예)
    parameter -> 121
    return 144
    
    parameter -> 3
    return -1
*/


function solution(n) {
    var z = 0;
    var nn = n/2;
    for(var x = 1; x <Number.MAX_VALUE; x++){
        if(nn > x){
            nn = nn-x;
        } else if(nn < x){
            z = nn*2;
            break;
        }
    }
    if(n == z*z && n > 0){
        return (z + 1) * (z + 1);
    } else {
        return -1;
    }
}

/* 다른 사람의 풀이
function nextSqaure(n){
    var result = 0;
    var n = Math.sqrt(n);
    result = Number.isInteger(n) ? Math.pow(n+1, 2) : 'no';
    return result;
}

    Math.sqrt(int)
    주어진 숫자에 루트를 씌웁니다.
    만약 숫자가 음수이면 NaN를 반환합니다.
    sqrt()는 Math의 정적 메서드 이므로 만든 Math 객체의 메서드가 아니라 항상 Math.sqrt()함수를 사용해야합니다. (Math는 생성자가 없습니다.)
*/
