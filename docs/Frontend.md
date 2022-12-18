# Frontend

The frontend component provides the Web application client module.

The Web Application is implemented as Single Web Application based on the [Vue](https://vuejs.org/) framework.

The Web Application is served by a nginx web server running on the Raspberry Pi. The nginx also works as a reverse proxy for the backend REST API, as well as the wifi-connect REST API.

## Paths

The main paths served by the frontend are:

- `/` (root) - The Web Application
- `/api` -  The backend REST API
- `/wifi` - The wifi-connect REST API

## Components

The Web App uses several Vue ecosystem extensions and add-ons:

- [Vuetify](https://next.vuetifyjs.com/en/) - UI elements aligned to Material Design
- [Vuex](https://vuex.vuejs.org/) - client state management
- [VueRouter](https://router.vuejs.org/) - path routing
- [Vuelidate](https://vuelidate-next.netlify.app/) - form input validation

The program editor is based on [Blockly](https://developers.google.com/blockly), which is also used as a toolbox (blocks "palette" editor).

See [frontend repo](https://github.com/CoderBotOrg/frontend) for more details.