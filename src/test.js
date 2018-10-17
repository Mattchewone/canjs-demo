import F from 'funcunit'
import QUnit from 'steal-qunit'

import 'donejs-app/models/test'

import '~/component/hello-world/hello-world-test'

import '~/my-button/my-button-test';

F.attach(QUnit)

QUnit.module('donejs-app functional smoke test', {
  beforeEach () {
    F.open('./development.html')
  }
})

QUnit.test('donejs-app main page shows up', function () {
  F('title').text('donejs-app', 'Title is set')
})
