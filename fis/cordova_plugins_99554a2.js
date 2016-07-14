cordova.define('cordova/plugin_list', function(require, exports, module) {
var whiltelistjspath = 'plugins/cordova-plugin-whitelist/whitelist_7cf3ea8.js';
var coocaaosapijspath = 'plugins/coocaa-plugin-coocaaosapi/www/coocaaosapi_1c18ecb.js';
var dynamicpluginloaderjspath = 'plugins/coocaa-plugin-dynamicpluginloader/www/dynamicpluginloader_8798176.js';
var pluginlistconfigjspath = 'plugins/coocaa-plugin-dynamicpluginloader/www/pluginlistconfig_4b9be8a.js';
var startappjspath = 'plugins/com.lampa.startapp/www/startApp_d923956.js';
var broadcasterjspath = 'plugins/cordova-plugin-broadcaster/www/broadcaster_838af79.js';

module.exports = [
    {
        "file":whiltelistjspath,
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": coocaaosapijspath,
        "id": "coocaa-plugin-coocaaosapi.coocaaosapi",
        "clobbers": [
            "coocaaosapi"
        ]
    },
    {
        "file": dynamicpluginloaderjspath,
        "id": "coocaa-plugin-dynamicpluginloader.dynamicpluginloader",
        "clobbers": [
            "dynamicpluginloader"
        ]
    },
    {
        "file": pluginlistconfigjspath,
        "id": "coocaa-plugin-dynamicpluginloader.pluginlistconfig",
    },
   {
        "file": startappjspath,
        "id": "com.lampa.startapp.startapp",
        "merges": [
            "navigator.startApp"
            ]
    },
    {
        "file": broadcasterjspath,
        "id": "cordova-plugin-broadcaster.broadcaster",
        "clobbers": [
            "broadcaster"
        ]
    },
    /*
        * dynamic plugin
        */

];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "coocaa-plugin-coocaaosapi": "1.0.0",
    "coocaa-plugin-dynamicpluginloader": "1.0.0",
    "com.lampa.startapp": "0.0.6",
    "cordova-plugin-broadcaster": "2.0.6"
    /*
        * dynamic plugin
        */
};
// BOTTOM OF METADATA
});