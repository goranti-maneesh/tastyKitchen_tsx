export const usernameRegex = new RegExp('[a-zA-Z0-9]{5,}')

export const passwordRegex = new RegExp('^(?=.*[0-9])(?=.*[!@#$%])(?=.*[a-zA-Z]).{6,16}$')