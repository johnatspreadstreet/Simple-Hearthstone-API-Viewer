/* global $ api hearthstone */

'use strict';

const hearthstone = function() {
  const template = function(expansion) {
    return `<li><a href="#">${expansion}</a></li>`;
  };

  function buildExpansionDropdown() {
    api.info(baseSettings)
      .then(function(res) {
        const {sets} = res.data;
        return sets;
      })
      .then(function(sets) {
        const string = sets.map(expansion => template(expansion));
        return string.join('');
      })
      .then(function(string) {
        $('.js-expansion-dropdown').html(string);
      });
  }

  function handleInfoButtonclick() {
    $('.js-info').on('click', function(e) {
      e.preventDefault();
      api.info(baseSettings)
        .then(function(res) {
          const {data} = res;
          return data;
        })
        .then(function(data) {
          console.log(data);
        });
    });
  }
    
  function bindEventListeners() {
    handleInfoButtonclick();
    buildExpansionDropdown();
  }

  return {
    bindEventListeners
  };
}();


