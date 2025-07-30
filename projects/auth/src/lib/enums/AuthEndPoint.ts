export class AuthEndPoint {
// static => These properties belong to the class itself and can be accessed without creating an instance of the class.
  static AUTH_LOGIN = 'https://exam.elevateegy.com/api/v1/auth/signin';
  static AUTH_REGISTER = 'https://exam.elevateegy.com/api/v1/auth/signup';
  static AUTH_LOGOUT = 'https://exam.elevateegy.com/api/v1/auth/logout';
  static AUTH_DELETE_ACCOUNT = 'https://exam.elevateegy.com/api/v1/auth/deleteMe';
  static AUTH_EDIT_PROFILE = 'https://exam.elevateegy.com/api/v1/auth/editProfile';
  static AUTH_GET_USER_INFO = 'https://exam.elevateegy.com/api/v1/auth/profileData';
  static AUTH_VERIFY_RESET_CODE = 'https://exam.elevateegy.com/api/v1/auth/verifyResetCode';
  static AUTH_CHANGE_PASSWORD = 'https://exam.elevateegy.com/api/v1/auth/changePassword';
  static AUTH_FORGOT_PASSWORD = 'https://exam.elevateegy.com/api/v1/auth/forgotPassword';
  static AUTH_RESET_PASSWORD = 'https://exam.elevateegy.com/api/v1/auth/resetPassword';
}