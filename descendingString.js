/*
문제
문자열 내림차순으로 배치하기

문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.
입출력 예
s	return
*/

function solution(s) {

    return s.split('').sort().reverse().join('');
}

/*다른 사람의 풀이 방법 이해

1. 문자열을 split메소드를 사용하여 배열로 쪼갠다.
예: ['Z', 'b', 'c', 'd', 'e', 'f', 'g']

2. sort메소드로 순차적으로 나열해준다.
예: ["Z", "b", "c", "d", "e", "f", "g"]

3. reverse메소드로 반전시켜준다.
예: ["g", "f", "e", "d", "c", "b", "Z"]

4. join메소드로 문자열로 바꿔줘서 반환한다.
예: "gfedcbZ"
*/
