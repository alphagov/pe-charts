
describe('Demo test pe-charts', function() {
  test('Test for appended chart container', function(browser) {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('body')
      .assert.titleContains('Markup Charts - GOV.UK')
      .assert.visible('#chart-container-wrap-table-1-chart-0')
      .end();
  })
});
