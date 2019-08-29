 # base setup
- npm init -y
- touch server.js
- mkdir views public routes views views/partials
- touch views/layout.hbs views/index.hbs views/data.hbs
- mkdir public/js public/styles public/img
- touch public/js/client.js public/styles/styles.css
- touch .env
 # install dependencies
 # create a launching script @ package.json
"dev": "nodemon ./server.js -e hbs,js"