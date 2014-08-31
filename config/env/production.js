'use strict';

module.exports = {
  /**
   * Uploads configuration
   * If local storage will be false then application by defaults initialize S3 upload service
   * For local storage uploadsDirectory is mandatory.
   * If temp directory is not given it will default to os.tempdir()
   *
   * For s3 upload configuration
   * key, secret bucket and region properties are mandatory
   * @type {Object}
   */
  uploads : {
    isLocalStorage : false,
    uploadsDirectory : './uploads'
  },
  /**
   * AWS configuration for s3 upload service
   * @type {Object}
   */
  aws : {
    secure: false,
    key: 'key',
    secret: 'secret',
    bucket: 'test-bucket',
    region : 'ap-southeast-1'
  },
  /**
   * Database configuration
   * @type {String}
   */
  dburl : 'postgres://gcmrgfyexzcaqv:8aYb613dBYVBjRo4hfxhQqDaVA@ec2-54-197-246-197.compute-1.amazonaws.com:5432/d15udplm8qqgp4',
  pg : {
    dialect: 'postgres',
    omitNull: true
  },
  /**
   * Global route configuration
   * @type {Object}
   */
  routes: {
    'GET /challenges' : 'Challenges#getAll',
    'GET /challenges/:id' : 'Challenges#getSingle',
    'POST /challenges': 'Challenges#createChallenge',
    'POST /challenges/:id/register' : 'Challenges#registerForChallenge',
    'POST /challenges/:id/submit' : 'Challenges#submission'
  },
  /**
   * Global controllers configuration
   * @type {Object}
   */
  controllers : {
    Challenges : {
      options : {
      }
    }
  }
};