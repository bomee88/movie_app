import React from 'react';

class App extends React.Component{
  state = {
    count : 0
  }
  plus = ()=>{
    this.setState(current=>({count: current.count + 1}));
  }
  minus = ()=>{
    this.setState(current=>({count: current.count - 1}));
  }
  compoen
  render(){
    return (
      <div>
        <h1>this is numner : {this.state.count}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>         
      </div>
    );
  }
/*

  react의 life cycle method (component의 생성과 삭제)
  1. Mounting = 태어남
   - constructor() : javascript기반, 처음 웹에 들어갈때
 
  2. Updating = 업데이트 됨
   - render() : 사용자가 어떤 액션을 해서 화면이 랜더링 되는 중일때
   - componentDidUpdate() : 랜더링 되고 난 뒤(업데이트 되고 난 뒤) 

  3. Unmounting = 죽음
   - componentWillUnmount() : 화면을 나갈때, 화면이 죽을때.
*/
}

export default App;
