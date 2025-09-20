# week1


## 미션: 감정 우표 클릭 이벤트 구현하기


### 위젯 가운데 정렬

* 고정 dp 사용
  layout.xml에서 layout\\\_width나 layout\\\_marginTop등에 고정 dp 값을 주어 화면 크기가 달라지더라도 같은 위치에 정렬할 수 있도록 구현함.

* GuirdLine 사용
  layout.xml에서 guideline 태그를 정의하여 위젯들이 가이드라인을 기준으로 가운데에 위치할 수 있도록 구현함.

* layout\_constraint 사용
  각 View들을 정의할 때에 시작과 끝, 위와 아래의 기준을 줌으로서 하나의 위젯을 옮겨도 그 아래의 다른 위젯들이 다같이 움직여 일정한 간격을 유지할 수 있도록 구현함.



### 위젯 클릭 구현

* 텍스트 색깔 바꾸기
  colors.xml에 직접 위젯 색깔과 같은 색들을 정의하고  MainActivity.kt에서 getColor() 함수를 이용하여 colors의 색들을 가져옴. 또한 setOnClickListerner 안의 setTextColor() 함수를 이용하여 가져온 색으로 텍스트의 색깔이 바뀌도록 구현함.

* Toast 메시지 출력하기
  setOnClickListerner 안의 Toast.makeText().show()를 이용하여 내가 원하는 메시지가 앱 화면에 나타날 수 있도록 구현함.

