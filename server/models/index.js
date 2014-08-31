'use strict';

module.exports = function(config) {
  var fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    lodash = require('lodash'),
    // reading config
    // dburl will be the database url and pg will be postgres options
    sequelize = new Sequelize(config.dburl, config.pg),
    db = {};

  fs.readdirSync(__dirname)
    .filter(function(file) {
      return ((file.indexOf('.' ) !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js'));
    })
    .forEach(function(file) {
      var model = sequelize.import(path.join(__dirname, file));
      db[model.name] = model;
    });
  Object.keys(db).forEach(function(modelName) {
    if (db[modelName].options.hasOwnProperty('associate')) {
      db[modelName].options.associate(db);
    }
  });

  return lodash.extend({sequelize: sequelize, Sequelize: Sequelize}, db);
};