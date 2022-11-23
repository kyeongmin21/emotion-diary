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


### 페이지 구현 - 홈(/)
- 헤더 부분 : 왼쪽 버튼, 현재 년&월, 오른쪽 버튼 


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
