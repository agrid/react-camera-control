import React from 'react'
import PropTypes from 'prop-types'

class ReactCameraControl extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videoTrack: null,
      capabilities: null
    }
  }

  async componentDidMount() {
    const {video, audio} = this.props
    if (navigator.mediaDevices) {
      const mediaStream = await navigator.mediaDevices.getUserMedia({video, audio})
      const videoTrack = mediaStream.getVideoTracks()[0]

      // Before crbug.com/711524 is fixed, this is needed to retrieve capabilities.
      await this.sleep(1000)
      const capabilities = videoTrack.getCapabilities()

      this.setState({
        videoTrack,
        capabilities
      })

      this.video.srcObject = mediaStream
      await this.video.play()
    }
  }

  async sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms))
  }

  capture() {
    return new window.ImageCapture(this.state.videoTrack).takePhoto()
  }

  async zoom(e) {
    const {videoTrack, capabilities} = this.state
    if ('zoom' in capabilities) {
      await videoTrack.applyConstraints({advanced: [{zoom: Number(e.target.value)}]})
      this.setState({
        videoTrack
      })
    }
  }

  render() {
    if (this.state.videoTrack === null) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    const { videoTrack, capabilities } = this.state
    const settings = videoTrack.getSettings()
    const hasZoom = 'zoom' in capabilities

    return (
      <div style={styles.preview}>
        {this.props.children}
        <div style={styles.slider}>
          <input
            type='range'
            hidden={!hasZoom}
            min={hasZoom ? capabilities.zoom.min : 0}
            max={hasZoom ? capabilities.zoom.max : 0}
            step={hasZoom ? capabilities.zoom.step : 0}
            value={hasZoom ? settings.zoom : 0}
            onChange={e => this.zoom(e)} />
        </div>
        <video style={styles.video} ref={video => { this.video = video }} />
      </div>
    )
  }
}

ReactCameraControl.propTypes = {
  audio: PropTypes.bool,
  video: PropTypes.bool,
  children: PropTypes.element
}

ReactCameraControl.defaultProps = {
  audio: false,
  video: true,
  style: {},
  children: null
}

const styles = {
  preview: {
    position: 'relative'
  },
  video: {
    width: '100%',
    height: '100%'
  },
  slider: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  }
}

export default ReactCameraControl
