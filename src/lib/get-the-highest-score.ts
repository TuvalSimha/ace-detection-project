import * as faceapi from 'face-api.js';

export function getTheHighestScore(expression: faceapi.FaceExpressions | null | undefined): number | string {
    if (!expression) {
        return 'Thinking...';
    }

    let highestExpression: string = '';
    let highestValue: number = 0;

    Object.entries(expression).forEach(([key, value]) => {
        if (typeof value === 'number' && value > highestValue) {
            highestValue = value;
            highestExpression = key;
        }
    });

    const parseFloatValue = parseFloat(highestValue.toFixed(5));
    return parseFloatValue;
}