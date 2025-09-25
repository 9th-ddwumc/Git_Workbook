# 1.useState
-React에서 컴포넌트의 상태를 관리하는 가장 기본적인 Hook
- 상태가 변경되면 컴포넌트가 다시 렌더링 되어 화면이 업데이트 된다.
- 선언 방식:const [state, setState] = useState(초기값);
# 2. Context API
- props를 통해 데이터를 여러 계층의 컴포넌트로 전달해야 하는 "Props Drilling" 문제를 해결하기 위해 사용된다.
    1. createContext(): Context 객체를 생성합니다.
    1. <Provider>: 데이터를 제공할 최상위 컴포넌트를 감싸고, value prop으로 전달할 데이터를 지정합니다.
    1. useContext(): Provider 하위의 어떤 컴포넌트에서든 useContext 훅을 통해 데이터에 접근합니다.