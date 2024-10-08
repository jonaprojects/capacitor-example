export default function Home() {
  return (
    <div className="flex h-lvh flex-col gap-2 justify-center items-center text-center">
      <h1 className="font-bold text-2xl">Hello World</h1>
      <p>
        Capacitor is an awesome tool that helps us converts websites to mobile
        apps
      </p>
      <button className="bg-blue-600 text-white hover:bg-blue-700 rounded-md p-2">This Button Does Nothing</button>
    </div>
  );
}
