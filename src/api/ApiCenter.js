import fetch from '../config/fetch'


export const login = data => fetch('/login',data,'get');