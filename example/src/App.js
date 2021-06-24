import React, { Component } from 'react'
import { Icon, message, Button } from 'antd'
import { Drawbox } from 'nsc-drawbox'
import 'antd/dist/antd.css'

const image = {
  category: "print",
  createdAt: "2020-09-07 15:34:13",
  createdBy: "1732",
  encodedFileName: "8e67209cd9a58cdfc9469edfa1484866_1599459834761",
  fileExt: "pdf",
  fileName: "测试图片3.pdf",
  fileSize: "268713",
  fileType: "pdf",
  id: "24137691-f0df-11ea-8146-f9a5d6b3bf59",
  isDeleted: null,
  sortNo: "1",
  updatedAt: "2020-09-07 15:52:55",
  updatedBy: "1732",
  uri: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.pdf",
  volCode: null,
  volId: "ef31a5d3-eb54-11ea-abe5-735dc8c1a294",
  volRevision: "7",
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Drawbox
        image={image}
      >
        <Button>click</Button>
      </Drawbox>
    )
  }
}
export default App
