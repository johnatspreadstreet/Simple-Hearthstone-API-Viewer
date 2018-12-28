// Remember to make functions self-invoking

'use strict';
// Require is a node only piece. Remove this if you are pulling from client side
// const axios = require('axios');

const baseSettings = {
  method: 'get',
  baseURL: 'https://omgvamp-hearthstone-v1.p.mashape.com',
  headers: {'X-Mashape-Key': 'dMHkSEuoDrmshZxFIPf47djFFMJJp1EbTC7jsnzkaUs8ALPf4R'},
  responseType: 'json',
};

const api = function() {
  const info = function(baseSettings) {
    baseSettings.url = '/info';
    return axios(baseSettings);
  };

  const cards = function(baseSettings) {
    baseSettings.url = '/cards';
    return axios(baseSettings);
  };

  // Returns card by name or ID. This may return more then one card if they share the same name. Loatheb returns both the card and the boss.
  const cardByName = function(name, baseSettings) {
    baseSettings.url = `/cards/${name}`;
    return axios(baseSettings);
  };

  return {
    info,
    cards,
    cardByName
  };
}();