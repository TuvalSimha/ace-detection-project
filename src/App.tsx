import { GitHubLogoIcon } from '@radix-ui/react-icons';
import FaceDetectionComponent from './components/face-detection';

function App() {
  const thisYear = new Date().getFullYear();
  return (
    <div className='flex flex-col w-full h-screen justify-between'>
      <header className="bg-black text-white py-4 px-6 flex flex-row justify-between">
        <h1 className="text-2xl font-bold">Face Detection App</h1>
        <a href="" target="_blank" rel="noreferrer">
          <GitHubLogoIcon className="w-6 h-6 text-white" />
        </a>
      </header>
      <div className='p-3 mb-3'>
        <div className='flex flex-col justify-center items-center text-center'>
          <h2 className="text-2xl font-bold">Hey There <span>&#128075;</span></h2>
          <p >
            We are detecting your face in real-time. Smile for the camera!
          </p>
          <p>
            You must allow access to your camera to use this app.
          </p>
        </div>
        <FaceDetectionComponent />
      </div>
      <footer className="bg-black text-white py-4 px-6 flex flex-col gap-1 md:flex-row justify-between">
        <p className="text-center">© {thisYear} Face Detection App</p>
        <p className="text-center">Built with ❤️ by <a href="https://github.com/TuvalSimha" target="_blank" rel="noreferrer">Tuval Simha</a></p>
      </footer>
    </div>
  );
}

export default App;