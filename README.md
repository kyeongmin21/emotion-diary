## 2. 감정 일기장 만들기

### 1) 페이지 라우팅 - SPA & CSR
- Routing: 어떤 네트워크 내에서 통신 데이터를 보낼 경로를 선택하는 일련의 과정
- Router: 데이터의 경로를 실시간으로 지정해주는 역할을 하는 무언가
- MPA: Multipage Application (페이지가 이동할 때마다 새로고침되면서 페이지가 깜빡임 - 유데미사이트)
- SPA: Single Page Application (페이지가 하나 index.html만 반환함)
- CSR: Client Side Rendering (클라이언트에서 페이지를 렌더링)

### 2) Router V6
- Router V6 : React 에서 CSR 기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리
- path Variable : useParams
- Query String : useSearchParams 
  -  웹 페이지에 데이터를 전달하는 가장 간단한 방법
  -  `/edit?id=10&mode=dark `
- Page Moving : useNavigate (ex 로그인 안한 user가 마이페이지로 접근하려고 할 때, 로그인페이지로 이동 시키기)


## 페이지 라우팅 1 - React Router 기본
- npm i react-router-dom@6 설치
- import BrowserRouter
- Link 컴포넌트를 이용한 페이지 이동


## 페이지 라우팅 2 - React Router 응용
- Path Variable | useParams 
  - 경로 변수 
  - /diary/1  -> 1번일기
  - `const {id} = useParams();`

  
- Query String | useSearchParams
  - url과 함께 data를 전달 할 수 있음
  - /edit?id=10&mod=dark
  - `const [searchParams, setSearchParams] = useSearchParams();`
  - `const id = searchParams.get('id');`
  - `const qsChange = () => setSearchParams({name: 'min', age: '30'});`


- Page Moving | useNavigate :
  - 로그인 안된 사용자가 마이페이지로 가려고 할 때
  - `const navigate = useNavigate();`
  - `const goHome = () => navigate('/');`


## 프로젝트 기초 공사 1
- 폰트, 레이아웃, 이미지, 공통 컴포넌트 세팅
- MyButton: type 이 아닌 것은 default로 세팅


## 프로젝트 기초 공사 2
- useReducer
- Context


## 페이지 구현 - 홈(/)
### `header`

- `<` 왼쪽 버튼 : 전 달 페이지 이동
- `년 월` : 현재 해당 년, 월
- `>` 오른쪽 버튼 : 다음 달 페이지 이동
- 해당 월에 맞는 일기리스트만 출력되게 하기 (useEffect)
- 일기리스트와, 현재날짜가 바뀌게 되면 일기리스트 리렌더링 !

### `DiaryList`

- `DiaryList.js` 컴포넌트 생성 
- 날짜순, 감정순 정렬 기능
- ControlMenu (셀렉트 메뉴 컴포넌트)
  - value: 값
  - onChange: 클릭해서 변경된 값
  - optionList: 정렬 리스트들
- getProcessedDiaryList (필터 기능)
  - dayFilter: 날짜순 필터
  - emotionFilter: 감정순 필터
  - copyList: 원본 배열을 건들지 않기 위해 깊은 복사한 배열을 사용

- ### `DiaryItem`

- `DiaryItem.js` 컴포넌트 생성 
  - 이미지 썸네일 
  - 날짜, 내용
  - 수정하기 버튼




## 페이지 구현 - 일기 쓰기(/new)
