# 1. 헤더

This is an H1
==============
This is an H2
--------------
# This is a H1
## This is a H2
### This is a H3
#### This is a H4
##### This is a H5
###### This is a H6

# 2. 블록 인용
> This is a first blockqute. 인용 블록
>   > This is a second blockqute.
>   >   >This is a third blockqute.

#  3. 목록

## 함께 있는 목록(번호가 있음)
1. 첫번째
2. 두번째
3. 세번째

## 순서 없는 목록

* 순서없는 목록
    + 글머리 기호
        - 지원함
* 1단계
    - 2단계
        + 3단계
            + 4단계


# 4. 코드 들여쓰기

This is a normal paragraph:

    This is a code block.

end code block. //들여쓰기, 사이에 한줄씩 띄워야 작용됨.

## 코드블럭
1. <pre><code>{code}</code></pre> 방식
<pre>
<code>
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }

}
</code>
</pre>

public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}

2. 코드블럭코드("```") 을 이용하는 방법
```
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```
// 깃헙에서는 코드블럭코드("```") 시작점에 사용하는 언어를 선언하여 문법강조(Syntax highlighting)이 가능


# 5. 수평선 <hr/>
* * *

***

*****

- - -

---------------------------------------
//모두 수평선으로 페이지 나누기 가능함.

# 6. 링크
* 참조링크
[link keyword][id]

[id]: URL "Optional Title here"

// code
Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"

* 외부링크

사용문법: [Title](link)

적용예: [Google](https://google.com, "google link")

* 자동 연결

일반적인 URL 혹은 이메일주소인 경우 적절한 형식으로 링크를 형성한다.

* 외부링크: <http://example.com/>
* 이메일링크: <address@example.com>


# 7. 강조

*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
~~cancelline~~
이텔릭체는 *별 기호(Asterisks)* 혹은 _언더바 기호(Underscore)_ 를 사용하세요.
두껍게는 **별 기호(asterisks)** 혹은 __언더바 기호(underscore)__ 를 2번씩 사용하세요.
__*이텔릭체*와 두껍게__ 를 혼용할 수도 있습니다.

취소선은 ~~물결 기호(tilde)~~ 를 사용하세요.

# 8. 이미지

![Alt text](/path/to/img.jpg)
![Alt text](/path/to/img.jpg "Optional title")

사이즈 조절 기능은 어려워서 <img width="" height=""></img>를 이용


<img src="/path/to/img.jpg" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>
<img src="/path/to/img.jpg" width="40%" height="30%" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>

# 9. 줄바꿈

3칸 이상 띄어쓰기( )를 하면 줄이 바뀐다.

* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다. 
이렇게

* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.___\\ 띄어쓰기
이렇게


### 위에 작성된 내용은 https://gist.github.com/ihoneymon/652be052a0727ad59601 이곳을 참고하였습니다.


--------
# + 추가로
## + 표
---, :---: 좌측 정렬

:---:: 가운데 정렬

---:: 우측 정렬

| 헤더 | 헤더 | 헤더 |
|---|---|---|
| 셀 | 셀 | 셀 |
| 셀 | 셀 | 셀 |

헤더 | 헤더 | 헤더
---|---|---
셀 | 셀 | 셀
셀 | 셀 | 셀

| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |
| `sticky` | 스크롤 영역 기준으로 배치 |  |

값 | 의미 | 기본값
---|:---:|---:
`static` | 유형(기준) 없음 / 배치 불가능 | `static`
`relative` | 요소 자신을 기준으로 배치 |
`absolute` | 위치 상 부모_(조상)요소를 기준으로 배치 |
`fixed` | 브라우저 창을 기준으로 배치 |
`sticky` | 스크롤 영역 기준으로 배치 |

---------
## * 버티컬바 기호 사용

| 값 | 의미 |
|---|---|
| 버티컬바 출력 | \| |
| 인라인 코드 강조 | `\|` |

## * 줄바꿈

줄바꿈(Line Breaks)을 위해서는 문장 마지막에서 <br> 태그를 직접 입력하거나, 문장 마지막에서 띄어쓰기를 2번 이상 입력합니다.  (199번줄 띄어쓰기 2번함)

동해물과 백두산이 마르고 닳도록 
하느님이 보우하사 우리나라 만세
무궁화 삼천리 화려 강산  
대한 사람 대한으로 길이 보전하세<br>
끝!

## * 주석
-- 시작 --

<!-- 안녕하세요. -->
[//]: # (안녕하세요.)
[//]: # "안녕하세요."
[//]: # '안녕하세요.'

-- 종료 --

//추가된 내용은 https://www.heropy.dev/p/B74sNE 을 참고해서 작성하였습니다.