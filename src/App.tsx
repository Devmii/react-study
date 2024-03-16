/* eslint-disable */
import React,{useState} from 'react'
import './App.css'

function App() {
  // const posts = '강남 맛집'
  const [title,setTitle] = useState(['남자코트추천','우동집 추천','베스트글 추천']);
  const [likeCnt,setLikeCnt] = useState(0);
  function changeTitle(){
    const _title = [...title];
    _title[1] = '헤어샵 추천';
    setTitle(_title);
  }

  function sortTitle() {
    console.log(title.sort());
    const _title = [...title];
    setTitle(_title.sort());
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'blue', fontSize:'30px'}}>개발 블로그</div>
      </div>
      <button onClick={changeTitle}>버튼</button>
      <button onClick={sortTitle}>sort</button>

      <div className='list'>
        <h3>{title[0]} <span onClick={() => setLikeCnt(likeCnt+1)}>👍</span>{likeCnt}</h3>
        <p>2/27 published</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{title[1]}</h3>
        <p>2/27 published</p>
        <hr/>
      </div>

      <Modal></Modal>
      
    </div>
  );


}

function Item(title: string) {
  return (
    <div className='list'>
      <h3>{title}</h3>
      <p>2/27 published</p>
      <hr />
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className='modal'>
        <h3>제목</h3>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div>footer</div>
    </>
  )
}

export default App
