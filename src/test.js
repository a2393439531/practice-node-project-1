'use strict';

$.method('user.add').call({
  name: 'hello',
  email: 'javasaint@163.com',
  password: '123456',
  nickname: 'javasaint',
  about: 'about javasaint'
}, console.log)
