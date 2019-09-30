'use strict'

const store = require('../store')
// require so we can save the user and their token

const onSignUpSuccess = function () {
  $('#message').text('Signed Up Successfully!')
  $('.sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Signed Up Failed.')
  $('.sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  $('#message').text('Signed In Successfully!')
  store.user = responseData.user
  $('.sign-up, .sign-in').hide()
  $('.messageBox').show()
  $('.change-password, .sign-out').css('display', 'block')
  $('#new-game').css('display', 'block')
  $('.player-stats').css('display', 'block')
  $('.sign-in').trigger('reset')
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed.')
  $('.sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Password changed successfully!')
  $('.change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message').text('Password change failed.')
  $('.change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully!')
  $('.sign-up, .sign-in').show()
  $('.change-password, .sign-out').hide()
  $('.board').hide()
  $('.player-stats').hide()
  $('#new-game').hide()
  $('#messageBox').hide()
  $('.sign-out').trigger('reset')
}

const onSignOutFailure = function () {
  $('#message').text('Sign out failed')
  $('.sign-out').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
