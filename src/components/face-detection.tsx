import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { getTheHighestExpression } from '@/lib/get-the-highest-expression';
import { getTheHighestScore } from '@/lib/get-the-highest-score';
import { loadModels } from '@/lib/load-models';

interface Detection {
    age: number;
    alignedRect: faceapi.FaceDetection;
    descriptor: Float32Array;
    detection: faceapi.FaceDetection;
    expressions: faceapi.FaceExpressions;
    gender: string;
    genderProbability: number;
    landmarks: faceapi.FaceLandmarks68;
    unshiftedLandmarks: faceapi.FaceLandmarks68;
}

const FaceDetectionComponent: React.FC = () => {
    const [detections, setDetections] = useState<Detection | null>(null);
    const webcamRef = useRef<Webcam>(null);

    useEffect(() => {
        loadModels();
    }, []);

    const detectFace = async () => {
        const result = await faceapi.detectSingleFace(webcamRef.current?.video as HTMLVideoElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor().withFaceExpressions().withAgeAndGender();

        if (result) {
            setDetections(result);
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            detectFace();
        }
            , 1000);
        return () => clearInterval(interval);
    }
        , []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-8">
            <div className="w-full md:w-3/5 rounded-lg overflow-hidden">
                <Webcam
                    ref={webcamRef}
                    className='w-full p-2 aspect-video border-2 border-black rounded-lg'
                    screenshotFormat="image/jpeg"
                />
            </div>
            <div className="w-full md:w-2/5 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                        <div className="text-2xl font-bold">{!detections?.age ? 'Thinking...' : parseFloat(detections?.age?.toFixed(2) as string)}</div>
                        <div className="text-muted-foreground">Age</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                        <div className="text-2xl font-bold capitalize">{!detections?.gender ? 'Thinking...' : detections?.gender}</div>
                        <div className="text-muted-foreground">Gender</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                        <div className="text-2xl font-bold capitalize">{getTheHighestExpression(detections?.expressions as faceapi.FaceExpressions)}</div>
                        <div className="text-muted-foreground">Expressions</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                        <div className="text-2xl font-bold">{getTheHighestScore(detections?.expressions as faceapi.FaceExpressions)}</div>
                        <div className="text-muted-foreground">Expressions Score</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaceDetectionComponent;



