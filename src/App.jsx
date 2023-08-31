import { Link } from "./components/Link"
import Logo from './assets/logo.jpg'

function App() {

  return (
    <div className="flex bg-[#ffcada] flex-col bg-[url('./assets/background.png')] bg-cover items-center justify-center gap-4 h-[100vh]">
      <img className="w-40 h-40 rounded-full border-2 border-white" src={Logo} alt="" />
      <h1 className=" font-bold text-2xl">Doce Bistrô</h1>
      <span className=" mt-[-10px] mb-10">Trazendo alegria em forma de doces</span>
      <Link label="Instagram" link="https://instagram.com/doce__bistro/"/>
      <Link label="WhatsApp" link="https://wa.me/+5541988475554"/>
      <Link label="iFood" link="https://www.ifood.com.br/delivery/curitiba-pr/doce-bistro-tatuquara/6868a062-ef2b-43bc-a1d2-2b372d09ca80" />
    </div>
  )
}

export default App
