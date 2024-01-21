import TodoWrapper from "./components/TodoWrapper"

function App() {
  return (
    <div className="bg-purple-800 relative h-[100vh] flex flex-col justify-center items-center">
     
        <TodoWrapper />
      
      <div className="absolute bottom-0">
        <p>Designed and Developed by © <a href="https://github.com/hadiraza04/" target="_blank" className="text-black font-bold underline">HadiRaza04</a></p>
      </div>
    </div>
  )
}
export default App
