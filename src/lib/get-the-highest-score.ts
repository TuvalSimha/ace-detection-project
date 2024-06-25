import * as faceapi from 'face-api.js';

export function getTheHighestScore(expression: faceapi.FaceExpressions | null | undefined): number | string {
    if (!expression) {
        return 'Thinking...';
    }

    for (const [_key, value] of Object.entries(expression)) {
        if (typeof value === 'number') {
            return parseFloat(value.toFixed(5));
        }
    }
    return 'Thinking...';
}
