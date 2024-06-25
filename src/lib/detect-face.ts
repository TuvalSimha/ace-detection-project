import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';


export async function detectFace(webcam: React.RefObject<Webcam>) {
    if (webcam.current?.video?.readyState === 4) {
        const videoEl = webcam.current.video;
        const result = await faceapi.detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor().withFaceExpressions().withAgeAndGender();
        return result;
    }
}