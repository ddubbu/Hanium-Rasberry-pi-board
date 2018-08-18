import React, { Component } from 'react'
import {Checkbox, Button, Image, Header, Dropdown,
  Segment,  Menu,  Container, Grid, Embed,Confirm } from 'semantic-ui-react'

class App extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  render() {

const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'

return(

<div>

    <Menu fixed='top' inverted>
      <Container>
      <Menu.Item  href='http://localhost:3000/Home_Login' as='a' header>
          <Image size='mini' src={img_dachshund} circular style={{ marginRight: '1.5em' }} />
            Dachshund
        </Menu.Item>
      
         <Dropdown item simple text='Board'>
          <Dropdown.Menu>
          <Dropdown.Item active  href='http://localhost:3000/IN_BM_Board_Waitlist'>승인 대기 게시판 목록</Dropdown.Item>
            <Dropdown.Item href='http://localhost:3000/IN_BM_Board_DM'>위치 수정</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
         <Dropdown item simple text='Contents'>
          <Dropdown.Menu>
          <Dropdown.Item href='http://localhost:3000/IN_CM_Setting_m' >기본 설정</Dropdown.Item>
            <Dropdown.Item href='http://localhost:3000/IN_CM_Board_Content'>컨텐츠 관리</Dropdown.Item>
            <Dropdown.Item>컨텐츠 등록</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
         <Menu.Item position='right'>
          <Button as='a' inverted  href='http://localhost:3000/home' as='a' header>
            Log out
          </Button>
        </Menu.Item>
       </Container>
    </Menu>
     <Segment style={{background: '#FAFAFA'}}>
     <Container centered style={{ marginTop: '8em'}}>
     </Container>

     <Header textAlign='center'>
    {//이미지 삽입 위해서는 아직 local 저장소에서는 모르겠고, 웹 링크 타고는 가능!>이미지 선택>새탭에서 열기>링크 복사
    }
    <Header size='Huge'>
    <Image circular src={img_dachshund} /> 
      Dachshund Digital Board
      <Header.Subheader size='Large' >동영상</Header.Subheader>
      <Segment basic color='yellow'/>
      </Header>
      <Button basic color='gray' > 모두 선택 </Button>
      
        <Button onClick={this.open} basic color='gray'>삭제</Button>
        <Confirm open={this.state.open} onConfirm={this.close} onCancel={this.close} 
         content='삭제 되었습니다.'
          />
      
      <Button basic color='gray'> 편집</Button>
      <br/><br/>
    
<Grid textAlign='center' celled='internally' >
<Grid.Row>
<Grid.Column width={3}> 
{//1번 그림
}
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='IHNzOHi8sJs' 
    placeholder='https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg'
    source='youtube' />
</Grid.Column>
<Grid.Column width={3}> 
{//2번 그림
}
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='d9IxdwEFk1c' 
    placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7ZbnMX1wrKBLyMCNUzeTdQH4ctJZ1Sua8eB7eb4x1wSw1GKL'
    source='youtube' />
</Grid.Column>
<Grid.Column width={3}> 
{//3번 그림
}
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='IHNzOHi8sJs' 
    placeholder='https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg'
    source='youtube' />
  </Grid.Column>
  </Grid.Row>

<Grid.Row>
<Grid.Column width={3}> 
{//4번 그림
}
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='d9IxdwEFk1c' 
    placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7ZbnMX1wrKBLyMCNUzeTdQH4ctJZ1Sua8eB7eb4x1wSw1GKL'
    source='youtube' />
</Grid.Column>
<Grid.Column width={3}>{//5번 그림
}
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='aiHSVQy9xN8' 
    placeholder='http://img.insight.co.kr/static/2016/10/16/700/9MPZ186PBF18236N32R1.jpg'
    source='youtube' />
</Grid.Column> 
{//6번 그림
}
<Grid.Column width={3}>
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='IHNzOHi8sJs' 
    placeholder='https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg'
    source='youtube' />
  </Grid.Column>
</Grid.Row> 

<Grid.Row>
<Grid.Column width={3}> 
{//7번 그림
}
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='aiHSVQy9xN8' 
    placeholder='http://img.insight.co.kr/static/2016/10/16/700/9MPZ186PBF18236N32R1.jpg'
    source='youtube' />
</Grid.Column>
<Grid.Column width={3}>{//8번 그림
}
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='d9IxdwEFk1c' 
    placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7ZbnMX1wrKBLyMCNUzeTdQH4ctJZ1Sua8eB7eb4x1wSw1GKL'
    source='youtube' />
</Grid.Column> 
{//9번 그림
}
<Grid.Column width={3}>
<Checkbox label />
<Embed  aspectRatio='4:3'  
    color='white' 
    brandedUI hd={false}
    id='aiHSVQy9xN8' 
    placeholder='http://img.insight.co.kr/static/2016/10/16/700/9MPZ186PBF18236N32R1.jpg'
    source='youtube' />
  </Grid.Column>
</Grid.Row> 
</Grid>
<br/>
  
  </Header>
  </Segment>
  </div>
      )
    }
  }
export default App
