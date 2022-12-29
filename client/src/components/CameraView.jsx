import { Camera, CameraType } from 'expo-camera'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import SelectDropdown from 'react-native-select-dropdown'
import { getAll } from '../services/user'
import { newCapture } from '../services/cloudinary'

import cameraSwitch from '../../assets/cameraswitch.png'
import close from '../../assets/close.png'
import scopeLogo from '../../assets/infinity-logo.webp'
import settings from '../../assets/settings.png'
import Settings from './Settings.jsx'

const CameraView = (props) => {
    // save camera type (back or forward)
    const [cameraType, setCameraType] = useState(CameraType.back);
    const [hasPermission, setHasPermission] = useState();
    const [photoReadyToUpload, setPhotoReadyToUpload] = React.useState(false)
    const [photo, setPhoto] = React.useState(null)
    const [scopemonIndex, setScopemonIndex] = React.useState(null)
    const [scopemonsNames, setScopemonsNames] = React.useState([])
    const [scopemons, setScopemons] = React.useState([])
    const camera = React.useRef()
    const [showSettings, setShowSettings] = React.useState(false)

    // go back to camera
    const closeUploadPhoto = () => {
        setPhotoReadyToUpload(false)
        setPhoto(null)
    }

    // toggle camera type
    const toggleCameraType = () => {
        setCameraType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    // captures photo
    const takePicture = async () => {
        const options = {
          exif: true,  // just in case we want location info later on
          quality: 1,
        }

        const picture = await camera.current.takePictureAsync({base64: true})
        setPhoto(picture)
        setPhotoReadyToUpload(true)
    }

    // capture scopemon (sends photo to server)
    const capture = async () => {
        // to implement: send photo
        console.log("-------------------------------")
        console.log("-------------------------")
        //const res = await newCapture(photo, props.userID, scopemons[scopemonIndex])
        const res = await newCapture(photo, props.userID, '637062c13c1d77383894814c')

        // reset state
        setPhotoReadyToUpload(false)
        setPhoto(null)
        setScopemonIndex(null)
    }

    React.useEffect(() => {
        // to implement
        // get all scopemons and save to scopemons state
        
        // ask the user for permissions
        (async () => {
          console.log('Asking for camera permissions...')
          const permission = await Camera.requestCameraPermissionsAsync(); 
          setHasPermission(permission.status === "granted");
        })();

        // get all current users
        if (scopemons.length == 0) {
            (async () => {
                const tempArr = await getAll()
                var tempArr2 = []
                for (var i=0; i<tempArr.length; ++i) {
                    tempArr2.push(tempArr[i].username)
                }
                setScopemons(tempArr)
                setScopemonsNames(tempArr2)
            })();
        }

    }, []);

    // if we haven't asked yet
    if(hasPermission === undefined)
      return <Text>Requesting camera permissions...</Text>
    // if the user declined permissions
    if(hasPermission === false)
      return (<Text>
                To capture a scoper, please go to your settings app and give Scopemon Go
                access to your camera
              </Text>)

    if (showSettings) {
        return (
            <Settings loginCallback={props.loginCallback} />
        )
    }
    else if (photoReadyToUpload) {
        // upload photo view
        return (
            <View style={styles.container}>
                <View style={styles.uploadButtonContainer}>
                    <TouchableOpacity style={styles.uploadButton} onPress={closeUploadPhoto}>
                        <Image source={close} style={styles.closeButton} />
                    </TouchableOpacity>
                </View>
                <View style={styles.uploadPhotoPhotoView}>
                    <Image source={photo} style={styles.uploadPhotoPhoto} />
                </View>
                <View style={styles.uploadBottomView}>
                    <Text style={styles.scopemonText}>Scopemon:</Text>
                    <SelectDropdown style={styles.dropdown}
                        data={scopemonsNames}
                        onSelect={(selectedItem, index) => {setScopemonIndex(index)}}
                        >
                    </SelectDropdown>
                    <TouchableOpacity style={styles.captureButton} onPress={capture}>
                        <Text style={styles.captureText}>CAPTURE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        // camera view
        return (
            <View style={styles.container}>
                <Camera style={styles.camera} type={cameraType} ref={camera}>
                    <View style={styles.cameraButtonContainer}>
                        <TouchableOpacity style={styles.settingsButton} onPress={() => setShowSettings (true)}>
                            <Image source={settings} style={styles.closeButton} />
                        </TouchableOpacity>
                        <View style={styles.horzSpacer} />
                        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                            <Image source={cameraSwitch} style={styles.cameraSwitchButton} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.takePictureView}>
                        <TouchableOpacity style={styles.takePictureButton} onPress={takePicture}>
                            <Image source={scopeLogo} style={styles.takePictureButtonImage} />
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    camera: {
        display: 'flex',
        height: '100%',
        width: '100%'
    },
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    cameraSwitchButton: {
        maxWidth: '100%',
        maxHeight: '100%',
        resizeMode: 'contain',
    },
    closeButton: {
        maxWidth: '100%',
        maxHeight: '100%',
        resizeMode: 'contain',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: '20%',
        width: '100%',
    },
    cameraButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
        width: '100%',
    },
    uploadButtonContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: '12%',
        width: '100%',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30,
        marginRight: 15,
        alignItems: 'center',
        height: 30,
        width: 30,
    },
    horzSpacer: {
        display: 'flex',
        width: '70%'
    },
    settingsButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 15,
        alignItems: 'center',
        height: 30,
        width: 30,
    },
    captureButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        width: '80%',
        height: '20%',
        borderRadius: 30,
        marginTop: 20
    },
    captureText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    dropdown: {
    },
    uploadBottomView: {
        display: 'flex',
        alignItems: 'center'
    },
    uploadButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 80,
        marginRight: 25,
        alignItems: 'center',
        height: 30,
        width: 30,
    },
    uploadPhotoView: {
        display: 'flex'
    },
    uploadPhotoPhoto: {
        maxWidth: '100%',
        maxHeight: '100%',
        resizeMode: 'cover',
    },
    uploadPhotoPhotoView: {
        display: 'flex',
        justifyContent: 'top',
        alignItems: 'center',
        width: '100%',
        height: '60%',
    },
    scopemonText: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    takePictureButton: {
        display: 'flex',
        marginBottom: 50,
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 90,
        height: 90,
        borderRadius: 5000,
        borderColor: 'white',
        borderWidth: 3,
    },
    takePictureButtonImage: {
        maxWidth: '100%',
        maxHeight: '100%',
        resizeMode: 'contain',
    },
    takePictureView: {
        display: 'flex',
        width: '100%',
        height: '80%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        color: 'pink',
    },
}); 

export default CameraView