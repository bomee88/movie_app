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
  jsx는 react에서 나온 매우 커스텀하고 유일한 개념  
  (그 외의 variables, classes, arrays, maps, returns등은 모두 js)
      
2. component를 만드는 방법.  
    src안에 새로운 파일을 만듬    
    potato.js를 만들고 App.js안에 potato를 삽입.    
    상단 import와 내부의 jsx형태로.    
     
3. component를 쓰는 이유.   
    재사용 가능한 component를 계속 만들 수 있음.    
    동적으로 움직이게 함. (hexo처럼?)    
    ```html
    <Food fav="kimchi"/>
    ```
    component는 대문자로 시작함. jsx형태    
    food라는 component에 kimchi라는 value로 prop는 fav(favourite)을 줌.    
    이 props는 아래와 같은 형태로 여러개도 써줄 수 있음.    
    ```html
    <Food
        fav="kimchi"
        spicy={true}
        color={["red",1,2,3,true]}
    >
    ```
     
4. App.js에서 Food를 부르는 방법    
    ```javascript
    function Food(prop.fav){
        return <h1>I like {fav}</h1>
    }
    function Food({fav}){
        return <h1>I like {fav}</h1>
    }
    ```
    둘은 같은 의미임.    
          
5. Map and Array      
    map은 array를 가지는 javascript function임.     
    map은 array의 각각 item에서 function을 실행함.     
    (= jquery의 each 역할 같음)     
    ```javascript
    const friends = ["a","b","c","d"];
    friends.map(current=>{
        console.log(current);
        return 0
    });
    ```
    console은 각각의 item명을 반환함.     
    ```javascript
    friends.map(function(friend){ //프랜즈의 아이템 각각에 접속해서 펑션(아규먼트)을 실행해라. 
        return friend + "😀";
    });
    ```
       
6. State      
    동적데이터와 함께 작업할때 사용함.    
    변경되는 데이터, 다이나믹 데이터 들.      
    function component는 class component로 바꿔쓴다.     
    ``` javascript
    class App extends React.Component{
        render(){
            return <h1>this is class component</h1>;
        }
    }
    ```
    여기까지는 필수임.    
    > function component와의 차이점.     
    > * function은 뭔가를 반환 return함.
    > * 그리고 그것은 screen에 표시됨.
    > * class component는 react component로부터 확장되고 screen에 표시됨.
    > * screen에 표시될 그것을 render method안에 넣어야만 함.
    > * react는 자동적으로 class component의 render method를 실행함. 자동으로.
        
    > class component를 써야하는 이유.
    > * state라는 녀석 때문에!
    > * state는 object임(component의 변하는-유동적인-data를 넣을 공간이 있음.)
     
    ``` javascript
    state = {
        count: 0;
    }
    class App extends React.Component{
        render(){
            return <h1>The number is {this.state.count}</h1>;
        }
    }
    ```
    state를 class안에서 부르려면! 위와 같이 {}안에     
    this와 state와 그 안의 설정해준 count(유동적 데이터)를 불러와줌.     
    여기서 문제는 App안에서 어떻게 date를 바꿀것인가? 임.     
      
    ``` javascript
    state = {
        count: 0;
    }
    class App extends React.Component{
        render(){
            return (
                <div>
                    <h1>The number is {this.state.count}</h1>
                    <button>Add</button>
                    <button>Minus</button>
                </div>
            )    
        }
    }
    ```
    유동적으로 0이라는 데이터를 +와 -할수있는 버튼을 추가했음.     
    우리는 component의 data를 바꾸기 원해서 이 작업을 하는 것을 잊지말것!      
    class는 javascript(es6)에서 왔다는 것도 잊지말것.      
     
    ``` javascript
    state = {
        count: 0;
    }
    plus = () => {
        this.setState({ count: this.state.count + 1 });
    };
    minus = () => {
        this.setState({ count: this.state.count - 1 });
    };
    class App extends React.Component{
        render(){
            return (
                <div>
                    <h1>The number is {this.state.count}</h1>
                    <button onClick={this.plus}>Add</button>
                    <button onClick={this.minus}>Minus</button>
                </div>
            )    
        }
    }
    ```
    위와 같이 add와 remove에 해당하는 function을 만들어줌.      
    그리고 놀랍게도 react에는 eventListener를 등록하지 않아도 onclick을 바로 쓸수있다.      
    > setState를 사용 해야하는 이유
    > * state는 직접 바꾸면 안됨, 그러면 react는 render function을 새로고침 하지않음.
    > * 매번 state의 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원함.
    > * 우리가 setState를 쓰면 react에게 setState를 호출하고, view를 새로고치고, render functiond을 업데이트해야한다고 알려주는 것임.      
    저렇게 count를 직접 바꿔주는건 현재의 상태에 의존적이기 때문에 좋지 않으니 아래처럼 function으로 감싸서 현재값 current를 던져주는 것으로 바꿔보자.      
       
    ``` javascript
    state = {
        count: 0;
    }
    plus = () => {
        this.setState(current => ({count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({count: current.count - 1 }));
    };
    class App extends React.Component{
        render(){
            return (
                <div>
                    <h1>The number is {this.state.count}</h1>
                    <button onClick={this.plus}>Add</button>
                    <button onClick={this.minus}>Minus</button>
                </div>
            )    
        }
    }
    ```
   > **기억해야 할 것**
   > * 매순간 내가 setState를 호출할때마다 react는 새로운 state와 함께 render function을 호출한다!
   > * 내가 오직 seState를 호출할 때만! 
        
   오늘은 여기까지~ 그럼~ 안녕!      