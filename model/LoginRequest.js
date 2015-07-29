module.exports = function (opts) {
  opts = opts || {};
  return {
    "deviceToken": opts.deviceToken || "kiCS7Kvht1DVFBKwE2kEjLrEZF5xaIQa",
    "phoneDetails": opts.phoneDetails || {
      "APPVersionCode": opts.APPVersionCode || 1246,
      "versionName": opts.versionName || "3.1.0",
      "apiLevel": opts.apiLevel || 19,
      "operator": opts.operator || "310260",
      "phoneModel": opts.phoneModel || "Google+Nexus+5+-+4.4.4+-+API+19+-+1080x1920",
      "country": opts.country || "United+States",
      "language": opts.language || "en",
      "androidId": opts.androidId || "8c01457f2ad53699",
      "gcmRegistrationId": opts.gcmRegistrationId || "",
      "imei": opts.imei || "000000000000000",
      "deviceFeatures": opts.deviceFeatures || {
        "screenSpec": {
          "size": 2,
          "density": 480
        },
        "configuration": {
          "reqTouchScreen": 3,
          "reqKeyboardType": 2,
          "reqNavigation": 2,
          "reqInputFeatures": 3,
          "reqGlEsVersion": 131072
        },
        "features": [
          "android.hardware.wifi",
          "android.hardware.location.network",
          "android.hardware.location",
          "android.software.input_methods",
          "android.hardware.screen.landscape",
          "android.hardware.screen.portrait",
          "android.hardware.usb.accessory",
          "android.hardware.camera.any",
          "android.hardware.touchscreen.multitouch.distinct",
          "android.hardware.microphone",
          "android.software.live_wallpaper",
          "android.software.app_widgets",
          "android.hardware.telephony",
          "android.software.sip",
          "android.hardware.touchscreen.multitouch.jazzhand",
          "android.hardware.usb.host",
          "android.hardware.touchscreen.multitouch",
          "android.hardware.faketouch",
          "android.hardware.camera",
          "android.software.home_screen",
          "android.software.sip.voip",
          "android.hardware.location.gps",
          "android.hardware.telephony.gsm",
          "android.software.device_admin",
          "android.hardware.camera.front",
          "android.hardware.sensor.accelerometer",
          "android.hardware.touchscreen"
        ],
        "glEsVersion": 131072,
        "libraries": [
          "android.test.runner",
          "javax.obex",
          "com.android.future.usb.accessory",
          "com.android.location.provider",
          "com.android.media.remotedisplay"
        ],
        "sdkVersion": 19,
        "cpu": "x86",
        "cpu2": "unknown"
      }
    },
    "pv": opts.pv || 700,
    "store": opts.store || "APPLAND_SE",
    "language": opts.language || "en",
    "operator": opts.operator || "310260"
  };
};
