# wanted-pre-onboarding-frontend

## 프로젝트 실행 방법

1. <code>npm i</code>

2. <code>npm run dev</code>

3. <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> 접속

### 프로젝트 구현 영상

<a href="https://www.youtube.com/watch?v=riRHi9lVsoo&t=1s">https://www.youtube.com/watch?v=riRHi9lVsoo&t=1s</a>

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

## 구현 명세

### 컴포넌트

모든 컴포넌트들은 styled-components 라이브러리를 사용하였으며 모든 CSS 스타일을 직접 작성하여 구성하였습니다.

### 상태 관리

- 인증 상태(auth)를 redux 전역 상태로 관리하여 구현하였습니다.

- todos 데이터(todoList)를 redux 전역 상태로 관리하여 구현하였습니다.

- 모달의 상태(isShowModal, modalContent)와 dispatch 함수(showModalContent, hideModalContent)를 Context API를 사용하여 구현하였습니다.

### LoginPage(/) 컴포넌트

- 로그인을 성공한 경우 localStorage에 access_token key 값에 JWT을 저장하며, auth 전역 상태값이 true로 갱신됩니다.

- 인증한 이후 자동적으로 '/todo' URL로 리다이렉팅됩니다.

- 만약 auth 전역 상태가 true인 경우 '/' URL로 접근하더라도 자동적으로 '/todo' URL로 리다이렉팅되도록 구현하였습니다.

- Email input 필드에는 '@'를 포함한 경우에만 Sign Up, Sign In 버튼이 활성화됩니다.

- Password input 필드의 값이 8글자 이상인 경우에만 Sign Up, Sign In 버튼이 활성화됩니다.

### TodoListPage(/todo) 컴포넌트

- auth 전역 상태가 true인 경우에만 접근 가능한 페이지로 구현하였습니다.

- header 영역의 Logout 버튼 클릭시 localStorage의 access_token을 제거하고, auth 전역 상태가 false로 갱신됩니다.

- Add Todo 버튼 클릭시 ModalLayout 컴포넌트가 렌더링되며, Content로 ModalFormSection 컴포넌트가 렌더링됩니다.

- 각 Todo 하단의 Edit 버튼 클릭시 ModalLaout 컴포넌트가 렌더링되며, Content로 ModalFormSection 컴포넌트가 렌더링됩니다.

- 각 Todo 하단의 Delete 버튼 클릭시 ModalLayout 컴포넌트가 렌더링되며, Content로 ModalDeleteConfirmSection 컴포넌트가 렌더링됩니다.

### ModalContextProvider 컴포넌트

- ModalContextProvider 컴포넌트의 isShowModal 상태값이 true인 경우 createPortal을 통해 ModalLayout 컴포넌트가 렌더링됩니다.

- ModalContextProvider 컴포넌트의 modalContent 상태값은 ModalLayout 컴포넌트 내 렌더링될 Conetent인 React Element를 관리합니다.

- ModalContextProvider 컴포넌트의 showModalHandler 함수에 인수로 ModalLayout 내 렌더링될 Content를 전달하면서 호출시 인수로 전달한 React Element는 modalContent 상태값이 되고, isShowModal 상태값이 true로 갱신됩니다.

- ModalContextProvider 컴포넌트의 hideModalHandler 함수 호출시 isShowModal 상태값이 false로 갱신됩니다.

### ModalFormSection 컴포넌트

- props로 전달받은 type 값이 'Edit'인 경우 Todo를 수정하는 모달이 렌더링됩니다. Todo의 내용을 수정할 수 있으며, 하단의 Incomplete 버튼을 토글하여 completed 값을 변경할 수 있습니다.

- props로 전달받은 type 값이 'Add'인 경우 Todo를 추가하는 모달이 렌더링됩니다.
