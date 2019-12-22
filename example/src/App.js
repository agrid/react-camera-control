import React, { Component } from 'react'

import ReactCameraControl from 'react-camera-control'

export default class App extends Component {
  takePicture = async () => {
    const blob = await this.camera.capture()
    this.img.src = URL.createObjectURL(blob)
    this.img.onload = () => {
      URL.revokeObjectURL(this.src)
    }
  };

  render() {
    return (
      <div>
        <ReactCameraControl ref={cam => { this.camera = cam }} >
          <div style={styles.captureContainer} onClick={this.takePicture}>
            <div style={styles.captureButton} />
          </div>
        </ReactCameraControl>
        <img
          style={styles.captureImage}
          ref={img => { this.img = img }}
          alt='' />
      </div>
    )
  }
}

const styles = {
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 28,
    width: 28,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%'
  }
}
