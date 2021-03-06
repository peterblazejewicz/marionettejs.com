var GittyCache = require('./tasks/utils/gitty-cache');

module.exports = function(grunt) {
  require('load-grunt-config')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.loadTasks('tasks');

  GittyCache.setReleaseTag(grunt.option('TAG'));

  grunt.config.merge({
    'gitty:releaseTag': {
      marionette: {
        options: {
          repo: 'backbone.marionette'
        }
      }
    },
    'gitty:checkoutTag': {
      marionette: {
        options: {
          repo: 'backbone.marionette'
        }
      }
    },

    compileDocs: {
      marionette: {
        options: {
          repo: 'backbone.marionette',
          template: 'src/docs/template.hbs',
          indexTemplate: 'src/docs/index.hbs',
          svgIcons: 'src/images/svg-sprite.svg'
        },
        src: 'backbone.marionette/docs',
        dest: 'dist/docs'
      }
    },

    compileApi: {
      marionette: {
        options: {
          repo: 'backbone.marionette'
        },
        src: 'src/api',
        dest: 'dist/api'
      }
    },

    compileAnnotatedSrc: {
      marionette: {
        options: {
          repo: 'backbone.marionette',
          src: 'backbone.marionette/lib/backbone.marionette.js',
          template: 'src/docco/marionette.jst',
          output: 'dist/annotated-src/'
        }
      }
    },

    compileAdditionalResources: {
      marionette: {
        options: {
          /*jshint ignore:start*/
          resUrl: 'https://raw.githubusercontent.com/sadcitizen/awesome-marionette/master/README.md',
          /*jshint ignore:end*/
          output: 'dist/data'
        }
      }
    },

    psiNgrok: {
      marionette: {}
    }
  });
};
