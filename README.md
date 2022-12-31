# wanted-pre-onboarding-frontend

## 프로젝트 실행 방법

1. <code>npm i</code>

2. <code>npm run start</code>

3. <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> 접속

### 프로젝트 배포 링크

<a href="http://wanted-pre-onboarding-frontend-8dong.s3-website.ap-northeast-2.amazonaws.com/">http://wanted-pre-onboarding-frontend-8dong.s3-website.ap-northeast-2.amazonaws.com/</a>

## 기술 스택

  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="styled-components">

## 디자인 패턴

아토믹(Atomic) 디자인 패턴을 이번 프로젝트에 적용하였으며, 컴포넌트 재사용성과 명확한 파일 구조를 적용해보고자 사용하게 되었습니다.

atoms, molecules, organisms, layout, pages로 프로젝트를 구성하였습니다.

1. atoms
   : atoms는 프로젝트 내 사용되는 가장 작은 컴포넌트 단위들로 구성, 더이상 분해되지 않는 가장 작은 단위의 컴포넌트들이 존재합니다.

2. molecules
   : molecules는 atoms 내 컴포넌트를 조합하여 구성된 컴포넌트들이 존재합니다.

3. organisms
   : organisms는 molecules와 atoms 내 컴포넌트들로 구성된 컴포넌트들이 존재합니다.
   organisms 컴포넌트는 기능적인 요구사항을 포함하고 있습니다.

4. layout
   : layout 컴포넌트의 경우 UI 배치를 위한 layout 역할을 하는 컴포넌트가 존재합니다.

5. pages
   : pages 컴포넌트의 경우 하나의 페이지를 나타내는 컴포넌트들이 존재합니다.

## CI/CD

- 클라우드 CI/CD 플랫폼인 GitHub Actions를 이용하여 CI/CD 과정을 자동화하였습니다.

- master 브랜치에 push, merge되는 경우 workflow가 실행되도록 설계하였습니다.

- AWS S3 서비스를 사용하여 실제 배포하였습니다.

## 구현 명세

### Style

모든 컴포넌트들은 styled-components 라이브러리(CSS-in-JS)를 사용하였으며 모든 CSS 스타일을 직접 작성하여 구성하였습니다.

### API 명세

Rest API를 이용하여 클라이언트를 구현하였습니다(<a href="https://github.com/walking-sunset/selection-task#api">API 명세</a>).

### 상태 관리

#### auth

- 인증 상태(auth)를 redux 전역 상태로 관리하여 구현하였습니다.

- localStorage에 access_token 키 값이 존재하는 경우 auth 상태값은 true로 설정되며, 이외 경우 false로 설정됩니다.

- login이 dispatch되면 응답으로 전달받은 access_token을 localStorage에 추가하고 auth 상태값을 true로 갱신합니다.

- logout이 dispatch되면 localStrage에 access_token 키 값을 제거하고 auth 상태값을 false로 갱신합니다.

#### todoList

- todo 리스트(todoList)를 redux 전역 상태로 관리하여 구현하였습니다.

- setTodos가 dispatch되면 전달받은 todo 리스트를 todoList 상태값으로 갱신합니다.

- addTodo가 dispatch되면 전달받은 todo를 추가한 배열을 todoList 상태값으로 갱신합니다.

- editTodo가 dispatch되면 전달받은 수정된 todo로 새롭게 갱신한 배열을 todoList 상태값으로 갱신합니다.

- deleteTodo가 dispatch되면 전달받은 todo를 제거한 배열로 todoList 상태값을 갱신합니다.

#### ModalContext

- Modal 관련 상태를 Context API를 활용하여 구현하였습니다.

- isShowModal 상태값은 모달의 마운트/언마운트를 나타내는 상태값이며 불리언값을 갖습니다.

- modalContent 상태값은 모달에 렌더링될 컴포넌트를 나타내는 상태값입니다.

- showModalHandler 함수는 인수로 모달에 렌더링될 컴포넌트를 전달받습니다.<br /> 전달받은 컴포넌트를 modalContent 상태값으로 갱신하고, isShowModal 상태값을 true로 갱신합니다.

- hideModalHandler 함수는 isShowMal 상태값을 false로 갱신합니다.

### LoginPage(/) 컴포넌트

- 로그인 폼 유효성 검증

  - 이메일 조건 : @ 포함

  - 비밀번호 조건 : 8자 이상

  - 이메일과 비밀번호가 유효한 경우에만 Sign Up, Sign In 버튼 활성

<img src="https://user-images.githubusercontent.com/96307662/210149385-ba28ae95-fd6c-4c55-8663-afdd155e7aae.gif" alt="Login" width="80%" />

<hr />

- 로그인을 성공한 경우 localStorage에 access_token key 값에 JWT을 저장하며, redux로 관리되는 auth 상태값이 true로 갱신됩니다.

- auth 상태값이 true인 경우 자동적으로 '/todo'로 리다이렉팅됩니다.

- auth 상태값이 true인 경우 '/' URL로 접근하더라도 자동적으로 '/todo' URL로 리다이렉팅되도록 구현하였습니다.

<img src="https://user-images.githubusercontent.com/96307662/210149548-b77b6376-2732-41c4-8202-d31c5421a2ad.gif" alt="Redirect" width="80%" />

### TodoListPage(/todo) 컴포넌트

- header 영역의 Logout 버튼 클릭시 localStorage의 access_token을 제거하고, auth 전역 상태가 false로 갱신됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210149607-fe4905c1-3351-441c-959f-60b043dc206e.gif" alt="Logout" width="80%" />

<hr />

- Add Todo 버튼 클릭시 ModalLayout 컴포넌트가 렌더링되며, Content로 ModalFormSection 컴포넌트가 렌더링됩니다.

- Modal의 Cancel 버튼 클릭시 Todo를 추가하지 않고 Modal을 언마운트합니다.

- Add 버튼 클릭시 작성한 Todo가 추가됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210149662-1d5a4a66-dd28-466d-a617-2c42dcfd4cbd.gif" alt="AddTodo" width="80%" />

<hr />

- 각 Todo 하단의 Edit 버튼 클릭시 ModalLaout 컴포넌트가 렌더링되며, Content로 ModalFormSection 컴포넌트가 렌더링됩니다.

- Modal의 Cancel 버튼 클릭시 Todo를 수정하지 않고 Modal을 언마운트합니다.

- Incomplete/Completed 버튼은 토클 버튼이며 클릭시 Todo의 완료 여부를 수정할 수 있습니다.

<img src="https://user-images.githubusercontent.com/96307662/210149772-2d443a9c-31c1-4595-8326-042760ed9351.gif" alt="EditTodo" width="80%" />

<hr />

- 각 Todo 하단의 Delete 버튼 클릭시 ModalLayout 컴포넌트가 렌더링되며, Content로 ModalDeleteConfirmSection 컴포넌트가 렌더링됩니다.

<img src="https://user-images.githubusercontent.com/96307662/210149859-266627c7-54c9-4dcb-9913-25072630826d.gif" alt="DelTodo" width="80%" />
