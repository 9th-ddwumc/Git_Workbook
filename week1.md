

  * 정의: 다양한 상품, 서비스, 참여자를 연결하고 교환할 수 있는 기반이 되는 토대 또는 환경
  * 안드로이드 앱 플랫폼

    * 주요 구성 요소: 안드로이드 운영체제, 하드웨어 추상화 계층(HAL), 네이티브 라이브러리, 안드로이드 런타임(ART), 안드로이드 프레임워크, 애플리케이션(앱)
    * 역할: 앱 개발 환경 제공, 기기 성능 활용, 사용자 경험

* Android의 Architecture

  * 안드로이드의 권장 아키텍쳐는 무엇일까요?

    * 최신 앱 아키텍처 권장 기법

      1. 반응형 및 계층형 아키텍처
      2. 모든 레이어에서의 단방향 데이터 흐름(UDF)
      3. UI 레이어 → 복잡성 관리
      4. 코루틴 및 흐름
      5. 종속 항목 삽입 권장사항

    

* **UI Layer**: 화면에 애플리케이션 데이터 표시

!\[image.png](attachment:72afa456-e8b2-48ed-893c-9648b3b9c084:image.png)

    * **Domain Layer**: UI와 Data 레이어 간 상호작용 간소화\&재사용

    !\[image.png](attachment:ba5ed3e5-0c46-45e3-9685-bba954a92233:44e3416a-a1c3-4271-afaf-cfc789eaa63e.png)

    * **Data Layer**: 앱의 비즈니스 로직 포함 \& 애플리케이션 데이터 노출

  * 안드로이드 아키텍쳐 컴포넌트 (AAC)는 무엇일까요?

    * DataBinding
    * Lifecycle
    * Navigation
    * Room
    * Paging
    * WorkManager
    * Livedata
    * ViewModel

* Android의 4대 컴포넌트

  1. **Activities** :

     * 사용자와 상호작용하기 위한 진입점
     * 단일 사용자 인터페이스
     * 여러 활동이 함께 작동하지만 서로 독립적임

  2. **Services** :

     * 앱을 백그라운드에서 계속 실행하기 위한 범용 진입점
     * 사용자 인터페이스 제공 x
     * Started services : 작업 마칠 때까지 실행
     * Bound services: 다른 앱/시스템이 서비스 사용하고자 할 때 실행

  3. **Broadcast receivers :**

     * 일반적인 사용자 플로우 외부에 있는 앱 공지사항
     * 현재 실행되고 있지 않는 앱에도 브로드캐스트 전달 가능
     * 상태 표시줄 알림 생성

  4. **Content providers :**

     * 개발자 저장 가능한 공유 앱 데이터 집합 관리
     * 콘텐츠 제공자가 허용한 경우, 다른 앱은 콘텐츠 제공자를 통해 질의하거나 데이터 수정 가능함.

* Manifest의 주요 속성 (AndroidManifest.xml 참고!)

  `xmlns:android` : 네임스페이스 정의

  `package` : 고유한 애플리케이션 ID 나타냄. 값 변경하지 않기

  `android:targetSandboxVersion` : 타겟 샌드박스

  `android:versionCode` : 내부 버전 번호 (높을수록 최신), 사용자에겐 표시 x

  `android:versionName` : 사용자 표시 버전 번호

  `android:installLocation` : 앱의 기본 설치 위치

  `"internalOnly"` : 내부 기기 저장소에만 저장

  `"auto"` : 기본적으로 내부 저장소에 저장. 외부 저장소에 설치 가능

  `"preferExternal"` : 외부 저장소에  설치 희망. (보장 x)

* Android 위젯\&속성

  1. **Button**

     * 사용자가  탭할 때 이벤트를 발생시켜 앱 기능 제어, 텍스트 혹은 이미지 표시

  2. **TextView**

     * 텍스트 표시

  3. **ScrollView**

     * 화면에 긴 내용 표시

  4. **BottomNavigationView**

     * 메뉴 항목에 따라 화면 전환

  5. **ConstraintLayout**

     * 뷰에 제약을 적용하여 뷰의 위치와 크기 조정

  6. **chainStyle**

     * 뷰간의 상호 참조 연결 시 어떤 방식으로 연결하고 표현할지 결정

  7. **Barrier**

     * 뷰 사이에 장벽을 만들어 물리적으로 차단

  8. **GuideLine**

     * 화면에 보이지 않는 가상의 선을 생성하는 도구

  9. **margin**

     * 위젯과 부모 레이아웃 테두리 사이의 여백

  10. **padding**

      * 위젯 테두리로부터 위젯 안 내용 사이의 여백
      * margin과 padding 설명 그림
  11. **id 네이밍 (android:id)**

      * 뷰나 리소스에 고유한 식별자 부여

* Intent

  * Intent의 역할은 무엇인가요?

    : 컴포넌트간 통신을 위한 메시지 객체. 특정 컴포넌트에 대한 정보를 넣어 해당 컴포넌트 실행 후 원하는 데이터를 전달함.
    * 활동 시작, 서비스 시작, 브로드캐스트 전송

  * 명시적 Intent와 암시적 Intent의 차이는 무엇인가요?

    * 명시적 인텐트: 호출 대상이 명확. Package와 Class명을 정확하게 명시.

      (+ 서비스 시작 시에는 명시적 인텐트 사용하기 → 보안성 문제)

    * 암시적 인텐트: 호출 대상 불명확. 인텐트 의도에 맞는 activity 찾아서 실행함. Action, Category, Type 등을 저장.
