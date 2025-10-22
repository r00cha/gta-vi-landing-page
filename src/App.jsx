import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <div>
            <h1 className="bg-red-500">GTA 6</h1>
        </div>
    </main>
  )
}

export default App