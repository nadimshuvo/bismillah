import '../styles/styles.css'
import StickyHeader from './modules/StickyHeader'

let stickyHeader = new StickyHeader()

if(module.hot){
    module.hot.accept()
}