
import {Navbar, MainPage} from '../sections'
import LocalST from '../components/localStorage/init_LS'
const Page = () => {

  return (
    <div>
      <LocalST />
        <Navbar />
        <MainPage />
    </div>
  )
}

export default Page