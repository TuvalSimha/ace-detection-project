import * as faceapi from 'face-api.js';

export function getTheHighestExpression(expression: faceapi.FaceExpressions | null | undefined): string {
    if (!expression) {
        return 'Thinking...';
    }

    let highestExpression = '';
    let highestValue = 0;

    Object.entries(expression).forEach(([key, value]) => {
        if (typeof value === 'number' && value > highestValue) {
            highestValue = value;
            highestExpression = key;
        }
    });

    return highestExpression;
}