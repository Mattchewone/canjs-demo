import QUnit from 'steal-qunit'
import stache from 'can-stache'

import './party-poppers'

// ViewModel unit tests
QUnit.module('~/components/party-poppers')

QUnit.test('Show the correct amount of items', function () {
  const componentFragment = stache(`
    <party-poppers items:from="items" />
  `)({ items: ['🎉', '🎉'] })

  const testArea = document.querySelector('#qunit-fixture')
  testArea.appendChild(componentFragment)
  const componentElement = testArea.querySelector('party-poppers')
  const divs = componentElement.querySelectorAll('div')

  QUnit.equal(divs.length, 2)
})
