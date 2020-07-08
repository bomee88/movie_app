# Movie App 2020

## 😎노마드코더와 함께하는 React JS!
* 이제 시작이예욥! 드디어 React를 해봅니당
* 빨리 완성해보도록 할께용!

> https://bomee88.github.io/movie_app/  아직은 미완성입니다만,,🙄

1.   component 란?
    html을 반환하는 함수
  <App /> 이런 형태를 갖추고 있음. 
  react는 component를 사용해서 html처럼 작성하려는 경우 필요함.
  javascript와 HTML사이의 이러한 조합을 jsx라고 부름.
  jsx는 react에서 나온 매우 커스텀하고 유일한 개념 (그 외의 variables, classes, arrays, maps, returns등은 모두 js)

2. component를 만드는 방법.
    src안에 새로운 파일을 만듬
    potato.js를 만들고 App.js안에 potato를 삽입. 상단 import와 내부의 jsx형태로. 

3. component를 쓰는 이유.
    재사용 가능한 component를 계속 만들 수 있음.
    동적으로 움직이게 함. (hexo처럼?)
    ```html
    <Food fav="kimchi"/>
    ```
    component는 대문자로 시작함. jsx형태
    food라는 component에 kimchi라는 value로 prop는 fav(favourite)을 줌
    이 props는 아래와 같은 형태로 여러개도 써줄 수 있음.
    ```html
    <Food
        fav="kimchi"
        spicy={true}
        color={["red",1,2,3,true]}
    >
    ```

4. App.js에서 Food를 부르는 방법
    ```react
    function Food(prop.fav){
        return <h1>I like {fav}</h1>
    }
    function Food({fav}){
        return <h1>I like {fav}</h1>
    }
    ```
    둘은 같은 의미다. 
