import logo from './assets/logo.jpg'; // Import the image

export default function App() {
  return (
    <div className="flex min-h-screen items-center gap-4 p-4">
      <h1 className="text-4xl font-bold text-green-600">
        Hello Tailwind CSS 🚀
      </h1>
      <h1>github deployment successfull</h1>
      <img src={logo} alt="Logo"  style={{borderRadius : 25 , height : 100 , width : 100}} />
    </div>
  );
}
