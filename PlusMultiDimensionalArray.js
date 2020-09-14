/*
Programmers 연습문제 문제 풀이 성공, 채점 실패 / 오답노트 요함
행렬의 덧셈

문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
입출력 예
arr1	          arr2	        return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	    [[3],[4]]	    [[4],[6]]
*/

function solution(arr1, arr2) {

    if(arr1[1][0,1] == null){
        var ans1 = new Array();
        var ans3 = new Array();
        
        ans1 = arr1[0][0,0]+arr2[0][0,0];
        ans3 = arr1[1][0,0]+arr2[1][0,0];
        
        var arrNumber1 = new Array();
        var arrNumber1 = new Array(ans1, ans3);
        var answer = [[arrNumber1[0]],[arrNumber1[1]]];
        return answer;
        
    } else {
        var ans1 = new Array();
        var ans2 = new Array();
        var ans3 = new Array();
        var ans4 = new Array();

        ans1 = arr1[0][0,0]+arr2[0][0,0];
        ans2 = arr1[0][0,1]+arr2[0][0,1];
        ans3 = arr1[1][0,0]+arr2[1][0,0];
        ans4 = arr1[1][0,1]+arr2[1][0,1];
        
        var arrNumber1 = new Array();
        var arrNumber1 = new Array(ans1, ans2, ans3, ans4);
        var answer = [[arrNumber1[0],arrNumber1[1]],[arrNumber1[2],arrNumber1[3]]];
        return answer;
    }

}
