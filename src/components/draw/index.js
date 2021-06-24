
import React, { Children, Component } from 'react';
import PropTypes from 'prop-types'
import Drawbox from './Drawbox';
import Url from 'url-parse'

import '../../assets/fonts/icon-font/iconfont.css'
import './index.css'
import "react-img-editor/assets/index.css"

const isImageFileType = (type) => !!type && type.indexOf('image') === 0;

const isImg = (file) => {
  if (isImageFileType(file.fileType)) {
    return true
  }
  const extension = file.fileExt ? file.fileExt : ''
  if (
    /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)
  ) {
    return true
  }
  if (extension) {
    // other file types which have extension
    return false
  }
  return true
}

class Draw extends Component {
  state = {
    visible: false
  }

  onSaveAddInfoClick = (dataURL) => {
    const { onSave } = this.props
    onSave && onSave(dataURL)
  }

  onCloseClick = () => {
    this.setState({ visible: false })
    const { onCancel } = this.props
    onCancel && onCancel()
  }

  showHandler = (e) => {
    e.stopPropagation()
    this.props.onClick && this.props.onClick()
    this.setState({ visible: true })
  }

  render() {
    const { children, visible, image } = this.props
    const { uri, base64DataURL } = image
    const drawboxVisible = 'visible' in this.props ? visible : this.state.visible
    let url = decodeURIComponent(uri)
    const parsed = new Url(url, null, true)
    parsed.query.time = new Date().valueOf()
    url = parsed.toString()

    const showStyle = {
      'opacity': 1,
      'display': 'block'
    }

    const hiddenStyle = {
      'display': 'none'
    }

    return (
      <>
        {children && <span onClick={this.showHandler}>{children}</span>}
        <div className='lightbox-viewer lightbox-viewer-transition' style={drawboxVisible ? showStyle : hiddenStyle}>
          <div className='lightbox-viewer-mask' onClick={this.onCloseClick}></div>
          {isImg(image)
            ? <Drawbox
              src={url}
              onCloseClick={this.onCloseClick}
              onSaveClick={this.onSaveAddInfoClick}
              dataURL={base64DataURL}
            />
            : <div className="lightbox-viewer-content" >
              <div style={{ color: '#fff', fontSize: '16px', width: 'fit-content', lineHeight: '40px', margin: '0 auto', textAlign: 'center', paddingTop: '30px' }}>
                <div>该文件不支持预览</div>
              </div>
            </div>
          }
        </div>
      </>
    )
  }
}

Draw.propTypes = {
  visible: PropTypes.bool,
  withDrawer: PropTypes.bool,
  imgvImages: PropTypes.array,
  onCancel: PropTypes.func,
}

Draw.defaultProps = {
  imgvImages: [],
  withDrawer: false,
  showToolbar: true,
  showAttribute: true,
  showNav: true,
  image: {}
}

export default Draw
