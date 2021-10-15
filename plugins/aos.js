import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    once: true,
    disable: 'phone',
    duration: 750,
    easing: 'ease-out-quart',
  }) // eslint-disable-line new-cap
}
