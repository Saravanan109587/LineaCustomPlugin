cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-infineasdk.InfineaSDKCordova",
    "file": "plugins/cordova-plugin-infineasdk/www/InfineaSDKCordova.js",
    "pluginId": "cordova-plugin-infineasdk",
    "clobbers": [
      "Infinea"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-infineasdk": "1.0.3",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});