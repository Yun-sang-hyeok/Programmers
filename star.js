/*
문제
직사각형 별찍기

문제 설명
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

제한 조건
n과 m은 각각 1000 이하인 자연수입니다.

예시

입력
5 3

출력
*****
*****
*****

*/

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for(var i = 0; i < b; i++){
        var star = "";
        for(var y = 0; y < a; y++){
            star = star + "*";
        }
        console.log(star);
    }
    
});

//다른 사람의 풀이, 반복문을 하나만 사용하고 별을 찍기 위해 repeat함수로 a만큼 찍어서 활용하였다.
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});
