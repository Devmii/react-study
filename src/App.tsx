/* eslint-disable */
import {useState} from 'react'
import './App.css'

function App() {
  // const posts = '강남 맛집'
  const [title,setTitle] = useState('남자코트추천');
  const [likeCnt,setLikeCnt] = useState(0);
  function changeTitle(){
    setTitle('여자코트 추천')
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'blue', fontSize:'30px'}}>개발 블로그</div>
      </div>
      <button onClick={changeTitle}>버튼</button>
      <div className='list'>
        <h3>{title} <span onClick={() => setLikeCnt(likeCnt+1)}>👍</span>{likeCnt}</h3>
        <p>2/27 published</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{title}</h3>
        <p>2/27 published</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{title}</h3>
        <p>2/27 published</p>
        <hr/>
      </div>
    </div>
  )
}

export default App
