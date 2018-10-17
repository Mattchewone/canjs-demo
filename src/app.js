import DefineMap from 'can-define/map/'
import route from 'can-route'
import 'can-route-pushstate'
import 'can-debug#?./is-dev'

const AppViewModel = DefineMap.extend({
  env: {
    default: () => ({ NODE_ENV: 'development' }),
    serialize: false
  },
  message: {
    default () {
      return 'Party time..'
    }
  },
  poppers: {
    default () {
      return [
        '🎉',
        '🎉',
        '🎉',
        '🎉',
        '🎉',
        '🎉'
      ]
    }
  },
  title: {
    default: 'donejs-app',
    serialize: false
  }
})

export default AppViewModel
