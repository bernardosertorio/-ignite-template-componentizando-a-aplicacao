import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';

import './styles/global.scss';

export function App() {
  return (
  <>
    <Header />
    <SideBar />
    <Content />
  </>
  )
}
