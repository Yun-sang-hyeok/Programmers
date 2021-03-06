/*
문제
시저 암호

문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.

입출력 예
s	          n	      result
"AB"	      1	      "BC"
"z"	        1	      "a"
"a B z"	    4	      "e F d"
*/

function solution(s, n) {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var alphabetB = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var arr = [];
    var idx = 0;
    
    s = s.split('');
    
    for(var i = 0; i < s.length; i++){
        if(s[i]==" "){
            arr.push(" ");   
        }
        else if(s[i] != s[i].toLowerCase() && s[i] != ''){
            idx = alphabetB.indexOf(s[i]);
            arr.push(alphabetB[idx+n]);
            if(idx + n > 25){
                arr.push(alphabetB[idx+n-26]);
            }
        }else if(s[i] == s[i].toLowerCase() && s[i] != ''){
            idx = alphabet.indexOf(s[i]);
            arr.push(alphabet[idx+n]);
            if(idx + n > 25){
                arr.push(alphabet[idx+n-26]);
            }
        }
    }
    arr = arr.join("");   
    return arr;
}

//다른 사람의 풀이 CharCodeat 공부해야겠다..
function caesar(s, n) {
    var result = "";
    // 함수를 완성하세요.
  var car = ""

  for (var i=0; i<s.length;i++)
  {        
    if ( s[i] == ' ' )
      result += ' '
    else 
        result += String.fromCharCode( (s.charCodeAt(i)>90)?
      (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65 )     
  }

    return result;
}

// 실행을 위한 테스트코드입니다. 
console.log('s는 "a B z", n은 4인 경우: ' + caesar("a B z", 4));

//다른 사람의 풀이, map 공부해야겠다..
function caesar(s, n) {
    var small = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var big = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    return s.split(' ').map((word) => word.split('').map((char) => {
    if (small.indexOf(char) > -1) return small[(small.indexOf(char)+n)%small.length]
    else if (big.indexOf(char) > -1) return big[(big.indexOf(char)+n)%big.length]
  }).join('')).join(' ')
}

// 실행을 위한 테스트코드입니다.
console.log('s는 "a B z", n은 4인 경우: ' + caesar("a B z", 4));
