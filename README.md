# Random Lunch (FE)

랜덤 런치의 프론트엔드 개발 코드입니다.  
  
> ## 목차

- [데모](#데모)
- [폴더 구조](#폴더-구조)
- [파일별 역할](#파일별-역할)
- [구현 방법](#구현-방법)
- [기술 스택](#기술-스택)
  
> ## 데모

[🌎 데모 링크](https://random-lunch-nttjxsjdw-nknkcho.vercel.app/)
  
> ## 폴더 구조

```
├─pages
├─components
│  ├─CreateGroups
│  ├─InputNewMember
│  ├─MemberList
│  └─UI
├─public
├─styles
└─utils
  └─constants
```
  
> ## 파일별 역할

**components/CreateGroups**
| 함수 | 역할 |
|---------------------|-----------------------------------|
| `CreateGroups` | 그룹 생성 옵션의 최상위 컴포넌트 |
| `GroupOption` | 그룹수와 최소 인원수를 결정하는 버튼 컴포넌트|
| `GroupResultModal` | 생성된 그룹의 결과를 나타내는 모달 컴포넌트 |
| `GroupResultItem` | 모달안에 있는 각각의 생성된 그룹 결과 컴포넌트|

**components/InputNewMember**
| 함수 | 역할 |
|---------------------|-----------------------------------|
| `InputNewMember` | 멤버를 생성하는 Input창 컴포넌트 |

**components/MemberList**
| 함수 | 역할 |
|---------------------|-----------------------------------|
| `MemberList` | 멤버 전체의 리스트 컴포넌트 |
| `MemberItem` | 리스트 내 하나의 멤버 컴포넌트 |

**components/UI**
| 함수 | 역할 |
|---------------------|-----------------------------------|
| `UI` | 애플리케이션의 공통 스타일 |

**pages**
| 함수 | 역할 |
|---------------------|-----------------------------------|
| `index` | 메인 페이지 |

**styles**
| 함수 | 역할 |
|---------------------|-----------------------------------|
| `globals` | 전역 스타일 |
| `theme` | 애플리케이션의 공통 테마 스타일 |
| `styled.d.ts` | 공통 테마 스타일의 타입 선언 |

**utils/constants**
| 함수 | 역할 |
|---------------------|-----------------------------------|
| `httpMethod` | http method 상수화 |
| `interface` | 자주 사용하는 interface 타입 상수화 |

**utils**
| 함수 | 역할 |
|---------------------|-----------------------------------|
| `fetch` | api 호출하는 fetch 모듈화 |
  
> ## 구현 방법

### 현재 멤버의 리스트 및 멤버 삭제

- Next.js의 data fetching 함수인 `getServerSideProps`를 이용해 사용자 요청 시 저장된 전체 멤버 데이터를 가져옵니다.
- map 함수를 이용해 멤버 각각의 컴포넌트를 생성합니다.
- 멤버 이름 옆에 삭제 버튼을 생성하였고, 삭제 버튼 클릭 시 멤버의 name을 `''`로 처리하여 렌더링 하지 않도록 구현하였습니다.

### 신규 멤버 추가

- 신규 멤버 이름 입력 시, 빈칸 또는 특수문자는 입력할 수 없다는 경고 메시지가 나타나도록 구현하였습니다.
- 중복된 멤버 이름 입력 시, 중복된 이름은 입력할 수 없다는 경고 메시지가 나타나도록 구현하였습니다.
- 새로 생성된 멤버는 props 끌어올리기를 통해 부모 컴포넌트인 index로 이동하게 되며(`saveMemberList`), 형제 컴포넌트인 `MemberList`와 `CreateGroups`에 상태(`members`)가 공유 됩니다.

```JavaScript
const [members, setMembers] = useState(memberList);
  const saveMemberList = (id: string, name: string) => {
    return setMembers((prevData: []) => {
      return [...prevData, { id, name }];
    });
  };
```

### 옵션 버튼 및 에러

- useReducer 훅을 이용하여 그룹 생성 수 및 최소 인원 수를 결정하는 숫자 결정 버튼을 구현하였습니다.
- dispatch 함수에 value 인자를 함께 전달하여, 같은 기능을 하는 두 개의 컴포넌트(그룹 생성 컴포넌트, 최소 인원 수 컴포넌트)를 reducer 함수가 구분할 수 있도록 구현하였습니다.
- useCallback 훅을 이용해 숫자 증가, 감소를 담당하는 함수(`onIncrease`, `onDecrease`)를 재사용하였습니다.
- 옵션의 숫자가 그룹 생성 조건을 충족시키지 않을 경우, 그룹을 생성할 수 없다는 에러 메시지가 발생하며 결과를 확인할 수 있는 모달 창이 보이지 않습니다.

### 그룹 생성 결과

- 그룹 생성 결과는 서버로부터 이중배열 형태로 전달됩니다. (ex. `[[그룹1], [그룹2]]`)
- map 함수를 이용해 그룹별로 컴포넌트를 나누고 그룹을 구성하는 그룹원들을 컴포넌트로 분리하여 구현하였습니다.
  
> ## 기술 스택

- TypeScript
- React.js
- styled-components
- Next.js
