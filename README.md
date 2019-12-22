# react-camera-control

The objective of this package is to support both web camera and onvif camera for pan-tilt-zoom control. Non pan-tilt-zoom camera can also use package to display and capture video feed.

## Features:
- [x] Web camera photo taking
- [x] Web camera zoom control
- [ ] Web camera pan control
- [ ] Web camera tilt control
- [ ] Onvif camera photo taking
- [ ] Onvif camera zoom control
- [ ] Onvif camera pan control
- [ ] Onvif camera tilt control
- [ ] Camera list

## Requirement
- react: >=15.0.0
- react-dom: >=15.0.0
- prop-types: >=15.5.4
- Chrome version: > 57

[![NPM](https://img.shields.io/npm/v/react-camera-control.svg)](https://www.npmjs.com/package/react-camera-control) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## LiveDemo
[Demo of react-camera-control](https://agrid.github.io/react-camera-control/)

## Install

```bash
npm install --save react-camera-control
```

## Usage

```jsx
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
```

## Reference
- [MDN web docs - MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [Google Take Photos and Control Camera Settings](https://developers.google.com/web/updates/2016/12/imagecapture)
- [React Camera](https://www.npmjs.com/package/react-camera)
- [jslib-html5-camera-photo](https://www.npmjs.com/package/jslib-html5-camera-photo)

## License

MIT © [AGRID](https://github.com/agrid)
