// fastify 웹서버를 구성하는 코드입니다. @fastify/static 모듈을 사용하여 정적 파일을 제공합니다.
const fastify = require('fastify')({logger: true});
const path = require('path');
const fs = require('fs');

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, ''),
});

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs'),
  },
  root: path.join(__dirname, ''),
});

fastify.get('/', async (request, reply) => {
  return reply.view('index.html');
});

(async () => {
  await fastify.listen(80, '0.0.0.0');
})();