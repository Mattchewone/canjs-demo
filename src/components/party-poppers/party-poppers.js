import Component from 'can-component'
import DefineMap from 'can-define/map/'
import DefineList from 'can-define/list/'
import './party-poppers.less'
import view from './party-poppers.stache'

export const ViewModel = DefineMap.extend({
  items: DefineList
})

export default Component.extend({
  tag: 'party-poppers',
  ViewModel,
  view
})
