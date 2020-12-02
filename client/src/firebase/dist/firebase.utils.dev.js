"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.signInWithGoogle = exports.firestore = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  apiKey: "AIzaSyDGCyMCYBEaLlbsR1mMlJ9ULOUCWASKmWs",
  authDomain: "market-clother.firebaseapp.com",
  databaseURL: "https://market-clother.firebaseio.com",
  projectId: "market-clother",
  storageBucket: "market-clother.appspot.com",
  messagingSenderId: "1077911697799",
  appId: "1:1077911697799:web:da1ad4639caa68bbdd7b22",
  measurementId: "G-RB4RMKWBRQ"
}; // Initialize Firebase

_app["default"].initializeApp(config);

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'selected_account'
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;
var _default = _app["default"];
exports["default"] = _default;