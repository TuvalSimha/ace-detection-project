# Face Detection with `face-api.js` and `react-webcam`

This project demonstrates real-time face detection using `face-api.js` and `react-webcam`.

## Technologies Used:
- **React**: Frontend framework for building user interfaces.
- **face-api.js**: JavaScript API for face detection, face recognition, and more.
- **react-webcam**: React component for accessing the webcam.

## Setup Instructions:
**Clone the Repository:**
```
git clone https://github.com/TuvalSimha/face-detection-project.git
cd face-detection-react-webcam
```

**Install Dependencies:**

```
Copy code
pnpm install
```
**Run the Application:**

```
pnpm dev
```
This will start the development server and open the application in your default web browser.

## Usage:
When the application loads, it accesses your webcam using react-webcam.
The face-api.js library is used to detect faces in real-time.
Detected face attributes such as age, gender, and facial expressions are displayed.
Expressions score and the highest expression are calculated and shown.

## Features:
- Real-time face detection using the webcam.
- Displaying age, gender, and facial expressions of the detected face.
- Calculating and displaying the highest expression and its score.
