module.exports = {
  paths: {
    public: './docs'
  },

  files: {
    javascripts: {
      joinTo: {
        'js/vendor.js': /^(?!app)/,
        'js/app.js': /^app/
      }
      // joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.css',
      order: {
        after: ["app/scss/application.scss"] // concat app.css last
      }
    }
  },

  plugins: {
    babel: {
      presets: ['es2015']
    },
    sass: {
      options: {
        includePaths: [
          'node_modules/bootstrap/scss'
        ]
      }
    },
    copycat: {
      "fonts": ["node_modules/font-awesome/fonts"],
      "css": ["node_modules/colors.css/css/colors.min.css"]
    }
  }
};
