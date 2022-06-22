# 실행방법

# 사용한 기술과 선택한 이유

```
    "react-transition-group": "^4.4.2",
    "styled-components": "^5.3.5",
```

## Challenge

- React Transition Group
  컴포넌트가 마운트/언마운트에 따라 애니메이션 효과를 주기

- 재사용성이 있는, 공용 컴포넌트
  재사용성을 높이기 위해 스트링과 태그를 props로 넘겨줄 때 <Fragment> 태그에 묶어 함께 넘겨주어야 하는 문제가 있었는데 이것이 과연 옳은 방법인가에 대한 생각.

- 너무 많은 props가 가독성을 해치지는 않는지, 이를 어떻게 최소화할 수 있는 방법이 있을지

- 아토믹 디자인 -> 컴포넌트 하나 당 하나의 역할만 수행하고 있는가?

- img 태그와 background 이미지의 차이

- window.location.href 와 window.location.replace()의 차이, window.open
