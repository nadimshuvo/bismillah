import '../styles/styles.css'
import StickyHeader from './modules/StickyHeader'
import MobileMenu from './modules/MobileMenu'

new StickyHeader()
new MobileMenu()

if(module.hot){
    module.hot.accept()
}