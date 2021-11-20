import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const Sidemenu = () => (
  <Sidebar.Pushable as={Segment} style = {{height: "100vh"}}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
      
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>
<div style = {{marginLeft: "10vw"}}>
    <Sidebar.Pusher >
        <div>
            hello
        </div>
      {/* <Segment basic >
        <Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment> */}
    </Sidebar.Pusher>
</div>
  </Sidebar.Pushable>
)

export default Sidemenu
