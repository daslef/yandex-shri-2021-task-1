/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/leaders.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

function PersonCardComponent(srcSuffix, name, score) {
  var selected = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return "<div class=\"podium__item__pic ".concat(selected && 'podium__item__pic--selected', "\">\n            <picture>\n                <source srcset=\"./images/4x/").concat(srcSuffix, "\" media=\"(orientation: landscape) and (min-width: 1921px), (orientation: portrait) and (min-width: 1200px)\"/>\n                <source srcset=\"./images/3x/").concat(srcSuffix, "\" media=\"(orientation: landscape) and (min-width: 1280px), (orientation: portrait) and (min-width: 880px)\"/>\n                <source srcset=\"./images/2x/").concat(srcSuffix, "\" media=\"(orientation: landscape) and (min-width: 880px), (orientation: portrait) and (min-width: 570px)\"/>\n                <img class=\"podium__item__photo\" src=\"./images/1x/").concat(srcSuffix, "\">\n            </picture>\n        </div>\n        <div class=\"podium__item__name ").concat(selected && 'podium__item__name--selected', "\">").concat(name, "</div>\n        <div class=\"podium__item__score ").concat(selected && 'podium__item__score--selected', "\">").concat(score, "</div>");
}

function PersonCardEmbedded(selectedUser) {
  var name = selectedUser.name,
      avatar = selectedUser.avatar,
      valueText = selectedUser.valueText;
  var selectedPerson = '<div class="podium__item__awards podium__item__awards--selected">👍</div>';
  selectedPerson += PersonCardComponent(avatar, name, valueText, true);
  selectedPerson += '<div class="podium__item__delimiter"></div>';
  selectedPerson += "<div class=\"podium__item__place podium__item__place--selected\">".concat(selectedUser.index + 1, "</div>");
  return selectedPerson;
}

function PersonComponent(_ref) {
  var srcSuffix = _ref.srcSuffix,
      name = _ref.name,
      score = _ref.score,
      place = _ref.place,
      emoji = _ref.emoji,
      selectedUser = _ref.selectedUser,
      orientation = _ref.orientation;
  var barSizeModifier = place >= 4 ? '-small' : place >= 2 ? '-medium' : '-large';
  var selectedPerson;

  if (orientation.startsWith('portrait') && place == 1 && (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.index) > 2) {
    selectedPerson = PersonCardEmbedded(selectedUser);
  } else if (orientation.startsWith('landscape') && place == 5 && (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.index) > 4) {
    var _srcSuffix = selectedUser.avatar,
        _name = selectedUser.name,
        _score = selectedUser.valueText,
        _place = selectedUser.index;
    _readOnlyError("place"), _place++;
    selectedPerson = '';
  } else {
    selectedPerson = '';
  }

  var awardsEmoji;

  if (place == 1) {
    awardsEmoji = emoji;
  } else if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.name) === name) {
    awardsEmoji = '👍';
  } else {
    awardsEmoji = '';
  }

  return "<div class=\"podium__item\">\n            <div class=\"podium__item__awards\">".concat(awardsEmoji, "</div>\n            ").concat(PersonCardComponent(srcSuffix, name, score), "\n            <div class=\"podium__item__bar podium__item__bar").concat(barSizeModifier, "\">\n                <div class=\"podium__item__place\">").concat(place, "</div>\n                ").concat(selectedPerson, "\n            </div>\n        </div>");
}

function LeadersComponent(emoji, users, selectedUsedId) {
  var selectedUser;

  if (selectedUsedId) {
    var selectedUserIndex = users.map(function (object) {
      return object.id;
    }).indexOf(selectedUsedId);
    selectedUser = _objectSpread(_objectSpread({}, users[selectedUserIndex]), {}, {
      index: selectedUserIndex
    });
  }

  return "<div class=\"slide__content podium podium--landscape\">\n            ".concat(users.slice(0, 5).map(function (user, ix) {
    return PersonComponent({
      srcSuffix: user.avatar,
      name: user.name,
      score: user.valueText,
      place: ix + 1,
      emoji: emoji,
      selectedUser: selectedUser,
      orientation: 'landscape'
    });
  }).join(''), "\n        </div>\n        <div class=\"slide__content podium--portrait\">\n        ").concat(users.slice(0, 5).map(function (user, ix) {
    return PersonComponent({
      srcSuffix: user.avatar,
      name: user.name,
      score: user.valueText,
      place: ix + 1,
      emoji: emoji,
      selectedUser: selectedUser,
      orientation: 'portrait'
    });
  }).join(''), "\n        </div>");
}
;// CONCATENATED MODULE: ./src/components/vote.js
function vote_PersonComponent(_ref) {
  var srcSuffix = _ref.srcSuffix,
      name = _ref.name,
      selected = _ref.selected;
  return "<div class=\"vote__item ".concat(selected ? 'vote__item--selected' : '', "\">\n            <div class=\"vote__item__awards\">").concat(selected ? '👍' : '', "</div>\n            <div class=\"vote__item__pic\">\n                <picture>\n                    <source srcset=\"./images/4x/").concat(srcSuffix, "\" media=\"(orientation: landscape) and (min-width: 1921px), (orientation: portrait) and (min-width: 1200px)\"/>\n                    <source srcset=\"./images/3x/").concat(srcSuffix, "\" media=\"(orientation: landscape) and (min-width: 1280px), (orientation: portrait) and (min-width: 880px)\"/>\n                    <source srcset=\"./images/2x/").concat(srcSuffix, "\" media=\"(orientation: landscape) and (min-width: 880px), (orientation: portrait) and (min-width: 570px)\"/>\n                    <img class=\"vote__item__photo\" src=\"./images/1x/").concat(srcSuffix, "\">\n                </picture>\n            </div>\n            <div class=\"vote__item__name\">").concat(name, "</div>\n        </div>");
}

function ArrowComponent(_ref2) {
  var direction = _ref2.direction,
      selected = _ref2.selected;
  var directionModifier = direction == 'up' ? '--up' : '--down';
  return "<svg \n            width=\"64\" \n            height=\"64\" \n            class=\"vote__arrow vote__arrow".concat(directionModifier, " ").concat(selected === true ? 'vote__arrow--selected' : '', "\" \n            viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path \n                    fill-rule=\"evenodd\" \n                    clip-rule=\"evenodd\" \n                    d=\"M32 2C15.4315 2 2 15.4315 2 32C2 48.5685 15.4315 62 32 62C48.5685 62 62 48.5685 62 32C62 15.4315 48.5685 2 32 2ZM32 -2.79753e-06C14.3269 -4.34256e-06 4.34256e-06 14.3269 2.79753e-06 32C1.2525e-06 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 -1.2525e-06 32 -2.79753e-06ZM4.99999 32C4.99999 17.0883 17.0883 4.99999 32 4.99999C46.9117 4.99999 59 17.0883 59 32C59 46.9117 46.9117 59 32 59C17.0883 59 4.99999 46.9117 4.99999 32ZM38.9393 36.0607C39.5251 36.6464 40.4749 36.6464 41.0607 36.0607C41.6464 35.4749 41.6464 34.5251 41.0607 33.9393L33.0607 25.9393C32.4749 25.3536 31.5251 25.3536 30.9393 25.9393L22.9393 33.9393C22.3536 34.5251 22.3536 35.4749 22.9393 36.0607C23.5251 36.6464 24.4749 36.6464 25.0607 36.0607L32 29.1213L38.9393 36.0607Z\" \n                />\n        </svg>");
}

function VoteComponent(emoji, selectedUserId, data) {
  var renderPersonComponent = function renderPersonComponent(user) {
    return vote_PersonComponent({
      srcSuffix: user.avatar,
      name: user.name,
      selected: user.id === selectedUserId
    });
  };

  return "<div class=\"slide__content vote vote--portrait\">\n            <div class=\"slide__row slide__row--left\">\n                ".concat(renderPersonComponent(data[0]), "\n                ").concat(renderPersonComponent(data[3]), "\n                ").concat(renderPersonComponent(data[6]), "\n            </div>\n            <div class=\"slide__row slide__row--middle\">\n                ").concat(ArrowComponent({
    direction: 'up',
    selected: false
  }), "\n                ").concat(renderPersonComponent(data[1]), "\n                ").concat(renderPersonComponent(data[4]), "\n                ").concat(ArrowComponent({
    direction: 'down',
    selected: true
  }), "\n            </div>\n            <div class=\"slide__row slide__row--right\">\n                ").concat(renderPersonComponent(data[2]), "\n                ").concat(renderPersonComponent(data[5]), "\n                ").concat(renderPersonComponent(data[7]), "\n            </div>\n        </div>\n\n        <div class=\"slide__content vote vote--landscape\">\n            <div class=\"slide__column slide__column--1\">\n                ").concat(renderPersonComponent(data[0]), "\n            </div>\n            <div class=\"slide__column slide__column--2\">\n                ").concat(renderPersonComponent(data[1]), "\n                ").concat(renderPersonComponent(data[4]), "\n            </div>\n            <div class=\"slide__column slide__column--3\">\n                ").concat(ArrowComponent({
    direction: 'up',
    selected: false
  }), "\n                ").concat(ArrowComponent({
    direction: 'down',
    selected: true
  }), "\n            </div>\n            <div class=\"slide__column slide__column--4\">\n                ").concat(renderPersonComponent(data[2]), "\n                ").concat(renderPersonComponent(data[5]), "\n            </div>\n            <div class=\"slide__column slide__column--5\">\n                ").concat(renderPersonComponent(data[3]), "\n            </div>\n        </div>");
}
;// CONCATENATED MODULE: ./src/components/chart.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ChartItem(_ref) {
  var value = _ref.value,
      title = _ref.title,
      isCurrent = _ref.isCurrent,
      maxValue = _ref.maxValue;
  var minHeight = value / maxValue * (70 - 3.3);
  minHeight = minHeight < 1 ? '8px' : "".concat(minHeight, "%");
  return "<div class=\"chart__item ".concat(isCurrent ? 'chart__item--active' : '', "\">\n            <div class=\"chart__item__value\">").concat(value > 0 ? value : '', "</div>\n            <div class=\"chart__item__bar\" style=\"min-height:").concat(minHeight, "\"></div>\n            <div class=\"chart__item__title\">").concat(title, "</div>\n        </div>");
}

function ChartList(values) {
  var activeIndex;

  var _iterator = _createForOfIteratorHelper(values.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          ix = _step$value[0],
          el = _step$value[1];

      if (el.hasOwnProperty('active') && el.active === true) {
        activeIndex = ix;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var leftLimit = Math.max(activeIndex - 6, 0);
  var rightLimit = Math.min(activeIndex + 2, values.length);
  var relevantValues = values.slice(leftLimit, rightLimit + 1);
  var maxValue = Math.max.apply(Math, _toConsumableArray(relevantValues.map(function (el) {
    return el.value;
  })));
  var output = relevantValues.map(function (el, ix) {
    return ChartItem({
      value: el.value,
      title: el.title,
      isCurrent: el.hasOwnProperty('active'),
      maxValue: maxValue
    });
  }).join('');
  return "<div class=\"chart__list\">".concat(output, "</div>");
}

function LeadersItem(_ref2) {
  var srcSuffix = _ref2.srcSuffix,
      name = _ref2.name,
      value = _ref2.value;
  return "<div class=\"chart__person\">\n            <div class=\"chart__person__pic\">\n                <picture>\n                    <source srcset=\"./images/4x/".concat(srcSuffix, "\" media=\"(orientation: landscape) and (min-width: 1921px), (orientation: portrait) and (min-width: 1200px)\"/>\n                    <source srcset=\"./images/3x/").concat(srcSuffix, "\" media=\"(orientation: landscape) and (min-width: 1280px), (orientation: portrait) and (min-width: 880px)\"/>\n                    <source srcset=\"./images/2x/").concat(srcSuffix, "\" media=\"(orientation: landscape) and (min-width: 880px), (orientation: portrait) and (min-width: 570px)\"/>\n                    <img class=\"chart__person__photo\" src=\"./images/1x/").concat(srcSuffix, "\">\n                </picture>\n            </div>\n            <div class=\"chart__person__meta\">\n                <div class=\"chart__person__name\">").concat(name, "</div>\n                <div class=\"chart__person__value\">").concat(value, "</div>\n            </div>\n        </div>");
}

function LeadersList(users) {
  var separator = "<div class=\"chart__leaders__separator\"></div>";
  var leaders = users.slice(0, 2).map(function (user) {
    return LeadersItem({
      srcSuffix: user.avatar,
      name: user.name,
      value: user.valueText
    });
  }).join(separator);
  return "<div class=\"chart__leaders\">".concat(leaders, "</div>");
}

function ChartComponent(values, users) {
  var leaders = LeadersList(users);
  var chart = ChartList(values);
  return "<div class=\"slide__content chart\">\n            ".concat(chart, "\n            ").concat(leaders, "\n        </div>");
}
;// CONCATENATED MODULE: ./src/components/diagram.js
function DonutComponent(total, diff, categories, theme) {
  var SETTINGS = {
    cx: 170,
    cy: 170,
    radius: 144,
    strokeWidth: 51
  };
  var values = categories.map(function (category) {
    return category.valueText;
  }).map(function (category) {
    var spaceIndex = category.indexOf(' ');
    return parseInt(category.substring(0, spaceIndex));
  });
  var l = 2 * Math.PI * SETTINGS.radius;
  var valuesSum = values.reduce(function (acc, val) {
    return acc + val;
  });

  function dashArray(value) {
    var dash = value / valuesSum * l;
    return [dash, l - dash];
  }

  var dashArrayValues = values.map(function (value) {
    return dashArray(value);
  });
  var offsetValues = [0, dashArrayValues[0][1], dashArrayValues[0][1] + dashArrayValues[1][1], dashArrayValues[0][1] + dashArrayValues[1][1] + dashArrayValues[2][1]];
  console.log(values, dashArrayValues, offsetValues);

  var donutChunkElement = function donutChunkElement(index, value, stroke) {
    return "<g filter=\"url(#filter".concat(index, "_dii)\">\n            <circle\n                fill-opacity=\"0\" \n                cx=\"").concat(SETTINGS.cx, "\"\n                cy=\"").concat(SETTINGS.cy, "\"\n                r=\"").concat(SETTINGS.radius, "\"\n                stroke-width=\"").concat(SETTINGS.strokeWidth, "\"\n                stroke-dasharray=\"").concat(dashArrayValues[index].join(' '), "\"\n                stroke-dashoffset=\"").concat(offsetValues[index], "\"\n                stroke=\"url(#paint").concat(index, "_radial)\"\n                stroke-opacity=\"0.8\"\n            />\n        </g>");
  };

  return "<div class=\"diagram__donut\">\n            <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 340 340\" class=\"diagram__donut__svg\">\n  \n            <defs>\n              <filter id=\"filter0_dii\" filterUnits=\"objectBoundingBox\" color-interpolation-filters=\"sRGB\">\n                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"></feColorMatrix>\n                <feMorphology radius=\"8\" operator=\"erode\" in=\"SourceAlpha\" result=\"effect1_dropShadow\"></feMorphology>\n                <feOffset></feOffset>\n                <feGaussianBlur stdDeviation=\"10\"></feGaussianBlur>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.575 0 0 0 0 0.365803 0 0 0 0 0 0 0 0 0.2 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"></feBlend>\n                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"></feBlend>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n                <feOffset></feOffset>\n                <feGaussianBlur stdDeviation=\"10\"></feGaussianBlur>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"></feComposite>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.791667 0 0 0 0 0.504028 0 0 0 0 0 0 0 0 0.9 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow\"></feBlend>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n                <feOffset dx=\"-1\" dy=\"1\"></feOffset>\n                <feGaussianBlur stdDeviation=\"0.5\"></feGaussianBlur>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"></feComposite>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"effect2_innerShadow\" result=\"effect3_innerShadow\"></feBlend>\n                </filter>\n                \n              <filter id=\"filter1_dii\" filterUnits=\"objectBoundingBox\" color-interpolation-filters=\"sRGB\">\n                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"></feColorMatrix>\n                <feMorphology radius=\"8\" operator=\"erode\" in=\"SourceAlpha\" result=\"effect1_dropShadow\"></feMorphology>\n                <feOffset></feOffset>\n                <feGaussianBlur stdDeviation=\"10\"></feGaussianBlur>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.2 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"></feBlend>\n                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"></feBlend>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n                <feOffset></feOffset>\n                <feGaussianBlur stdDeviation=\"10\"></feGaussianBlur>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"></feComposite>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0.9 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow\"></feBlend>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n                <feOffset dx=\"-1\" dy=\"1\"></feOffset>\n                <feGaussianBlur stdDeviation=\"0.5\"></feGaussianBlur>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"></feComposite>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"effect2_innerShadow\" result=\"effect3_innerShadow\"></feBlend>\n              </filter>\n              \n              <filter id=\"filter2_dii\" filterUnits=\"objectBoundingBox\" color-interpolation-filters=\"sRGB\">\n                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"></feColorMatrix>\n                <feMorphology radius=\"8\" operator=\"erode\" in=\"SourceAlpha\" result=\"effect1_dropShadow\"></feMorphology>\n                <feOffset></feOffset>\n                <feGaussianBlur stdDeviation=\"10\"></feGaussianBlur>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"></feBlend>\n                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"></feBlend>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n                <feOffset></feOffset>\n                <feGaussianBlur stdDeviation=\"10\"></feGaussianBlur>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"></feComposite>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0.9 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow\"></feBlend>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n                <feOffset dx=\"-1\" dy=\"1\"></feOffset>\n                <feGaussianBlur stdDeviation=\"0.5\"></feGaussianBlur>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"></feComposite>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"effect2_innerShadow\" result=\"effect3_innerShadow\"></feBlend>\n              </filter>\n              \n              <filter id=\"filter3_dii\" filterUnits=\"objectBoundingBox\" color-interpolation-filters=\"sRGB\">\n                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"></feColorMatrix>\n                <feMorphology radius=\"8\" operator=\"erode\" in=\"SourceAlpha\" result=\"effect1_dropShadow\"></feMorphology>\n                <feOffset></feOffset>\n                <feGaussianBlur stdDeviation=\"10\"></feGaussianBlur>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.972549 0 0 0 0 0.618715 0 0 0 0 0 0 0 0 0.2 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"></feBlend>\n                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"></feBlend>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n                <feOffset></feOffset>\n                <feGaussianBlur stdDeviation=\"10\"></feGaussianBlur>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"></feComposite>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 0.636666 0 0 0 0 0 0 0 0 0.9 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow\"></feBlend>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n                <feOffset dx=\"-1\" dy=\"1\"></feOffset>\n                <feGaussianBlur stdDeviation=\"0.5\"></feGaussianBlur>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"></feComposite>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0\"></feColorMatrix>\n                <feBlend mode=\"normal\" in2=\"effect2_innerShadow\" result=\"effect3_innerShadow\"></feBlend>\n              </filter>\n              \n              <filter id=\"filter0_ii\" filterUnits=\"objectBoundingBox\" color-interpolation-filters=\"sRGB\">\n                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n                <feOffset/>\n                <feGaussianBlur stdDeviation=\"10\"/>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.4 0\"/>\n                <feBlend mode=\"normal\" in2=\"shape\" result=\"effect1_innerShadow\"/>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n                <feOffset dx=\"-1\" dy=\"1\"/>\n                <feGaussianBlur stdDeviation=\"0.5\"/>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0\"/>\n                <feBlend mode=\"normal\" in2=\"effect1_innerShadow\" result=\"effect2_innerShadow\"/>\n              </filter>\n              \n              <filter id=\"filter1_ii\" filterUnits=\"objectBoundingBox\" color-interpolation-filters=\"sRGB\">\n                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n                <feOffset/>\n                <feGaussianBlur stdDeviation=\"10\"/>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.5125 0 0 0 0 0.5125 0 0 0 0 0.5125 0 0 0 0.6 0\"/>\n                <feBlend mode=\"normal\" in2=\"shape\" result=\"effect1_innerShadow\"/>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n                <feOffset dx=\"-1\" dy=\"1\"/>\n                <feGaussianBlur stdDeviation=\"0.5\"/>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0\"/>\n                <feBlend mode=\"normal\" in2=\"effect1_innerShadow\" result=\"effect2_innerShadow\"/>\n              </filter>\n              \n              <filter id=\"filter2_ii\" filterUnits=\"objectBoundingBox\" color-interpolation-filters=\"sRGB\">\n                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n                <feOffset/>\n                <feGaussianBlur stdDeviation=\"10\"/>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.4125 0 0 0 0 0.4125 0 0 0 0 0.4125 0 0 0 0.2 0\"/>\n                <feBlend mode=\"normal\" in2=\"shape\" result=\"effect1_innerShadow\"/>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n                <feOffset dx=\"-1\" dy=\"1\"/>\n                <feGaussianBlur stdDeviation=\"0.5\"/>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0\"/>\n                <feBlend mode=\"normal\" in2=\"effect1_innerShadow\" result=\"effect2_innerShadow\"/>\n              </filter>\n            \n              <filter id=\"filter3_ii\" filterUnits=\"objectBoundingBox\" color-interpolation-filters=\"sRGB\">\n                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n                <feOffset/>\n                <feGaussianBlur stdDeviation=\"10\"/>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 0.69 0 0 0 0 0.225 0 0 0 0.9 0\"/>\n                <feBlend mode=\"normal\" in2=\"shape\" result=\"effect1_innerShadow\"/>\n                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n                <feOffset dx=\"-1\" dy=\"1\"/>\n                <feGaussianBlur stdDeviation=\"0.5\"/>\n                <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0\"/>\n                <feBlend mode=\"normal\" in2=\"effect1_innerShadow\" result=\"effect2_innerShadow\"/>\n              </filter>\n            \n              <radialGradient id=\"paint0_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(163.486 164.514) rotate(90) scale(163.486)\">\n              <stop offset=\"0.8125\" stop-color=\"#FFB800\" stop-opacity=\"0.4\"/>\n              <stop offset=\"1\" stop-color=\"#FFEF99\" stop-opacity=\"0.2\"/>\n              </radialGradient>\n            \n              <radialGradient id=\"paint1_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(163.486 164.514) rotate(90) scale(163.486)\">\n              <stop offset=\"0.828125\" stop-color=\"#BFBFBF\" stop-opacity=\"0.69\"/>\n              <stop offset=\"0.921875\" stop-color=\"#E4E4E4\" stop-opacity=\"0.2\"/>\n              </radialGradient>\n            \n              <radialGradient id=\"paint2_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(163.486 164.514) rotate(90) scale(163.486)\">\n              <stop offset=\"0.828125\" stop-color=\"#A6A6A6\" stop-opacity=\"0.69\"/>\n              <stop offset=\"0.921875\" stop-color=\"#CBCBCB\" stop-opacity=\"0.2\"/>\n              </radialGradient>\n            \n              <radialGradient id=\"paint3_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(163.486 164.514) rotate(90) scale(163.486)\">\n              <stop offset=\"0.8125\" stop-color=\"#FFB800\" stop-opacity=\"0.7\"/>\n              <stop offset=\"1\" stop-color=\"#FFEF99\" stop-opacity=\"0.4\"/>\n              </radialGradient>\n\n              <radialGradient id=\"paint0d_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(175.486 176.514) rotate(90) scale(163.486)\">\n                <stop offset=\"0.729167\" stop-color=\"#633F00\"></stop>\n                <stop offset=\"1\" stop-color=\"#0F0900\"></stop>\n              </radialGradient>\n              \n              <radialGradient id=\"paint1d_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(175.486 176.514) rotate(90) scale(163.486)\">\n                <stop offset=\"0.71875\" stop-color=\"#4D4D4D\"></stop>\n                <stop offset=\"1\" stop-color=\"#382900\"></stop>\n              </radialGradient>\n              \n              <radialGradient id=\"paint2d_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(175.486 176.514) rotate(90) scale(163.486)\">\n                <stop offset=\"0.71875\" stop-color=\"#9B9B9B\"></stop>\n                <stop offset=\"1\" stop-color=\"#382900\"></stop>\n              </radialGradient>\n              \n              <radialGradient id=\"paint3d_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(175.486 176.514) rotate(90) scale(163.486)\">\n                <stop offset=\"0.71875\" stop-color=\"#FFA300\"></stop>\n                <stop offset=\"1\" stop-color=\"#5B3A00\"></stop>\n              </radialGradient>\n            </defs>\n            \n            \n            <g filter=\"".concat(theme == "dark" ? 'url(#filter3_dii)' : 'url(#filter3_ii)', "\">\n              <circle \n                      class=\"donut-segment\" \n                      cx=\"170\" \n                      cy=\"170\" \n                      r=\"144\" \n                      fill=\"transparent\" \n                      stroke-width=\"51\"\n                      stroke-dasharray=\"149.13934355503193 755.6393406788285\"\n                      stroke-dashoffset=\"0\"\n                      stroke=\"").concat(theme == "dark" ? 'url(#paint3d_radial)' : 'url(#paint3_radial)', "\"\n                      stroke-opacity=\"0.8\"\n               ></circle>\n            </g>\n            \n            <g filter=\"").concat(theme == "dark" ? 'url(#filter0_dii)' : 'url(#filter0_ii)', "\">\n              <circle \n                    class=\"donut-segment\" \n                    cx=\"170\" \n                    cy=\"170\" \n                    r=\"144\" \n                    fill=\"transparent\" \n                    stroke-width=\"51\"\n                    stroke-dasharray=\"159.08196645870075 745.6967177751596\"\n                    stroke-dashoffset=\"755.6393406788285\"\n                    stroke=\"").concat(theme == "dark" ? 'url(#paint0d_radial)' : 'url(#paint0_radial)', "\"\n                    stroke-opacity=\"0.8\"\n             ></circle>\n            </g>\n            \n            <g filter=\"").concat(theme == "dark" ? 'url(#filter2_dii)' : 'url(#filter2_ii)', "\">\n                <circle \n                    class=\"donut-segment\" \n                    cx=\"170\" \n                    cy=\"170\" \n                    r=\"144\" \n                    fill=\"transparent\" \n                    stroke-width=\"51\"\n                    stroke-dasharray=\"288.33606420639506 616.4426200274654\"\n                    stroke-dashoffset=\"1501.3360584539882\"\n                    stroke=\"").concat(theme == "dark" ? 'url(#paint2d_radial)' : 'url(#paint2_radial)', "\"\n                    stroke-opacity=\"0.8\"\n             ></circle>\n            </g>  \n            \n            <g filter=\"").concat(theme == "dark" ? 'url(#filter1_dii)' : 'url(#filter1_ii)', "\">\n                <circle \n                    class=\"donut-segment\" \n                    cx=\"170\" \n                    cy=\"170\" \n                    r=\"144\" \n                    fill=\"transparent\" \n                    stroke-width=\"51\"\n                    stroke-dasharray=\"308.2213100137327 596.5573742201277\"\n                    stroke-dashoffset=\"2117.7786784814534\"\n                    stroke=\"").concat(theme == "dark" ? 'url(#paint1d_radial)' : 'url(#paint1_radial)', "\"\n                    stroke-opacity=\"0.8\"\n             ></circle>\n            </g>\n            \n          </svg>\n            <div class=\"diagram__donut__text\">\n                <div class=\"diagram__donut__total\">").concat(total, "</div>\n                <div class=\"diagram__donut__diff\">").concat(diff, "</div>\n            </div>\n        </div>");
}

function LegendItem(_ref) {
  var title = _ref.title,
      value = _ref.value,
      difference = _ref.difference;
  return "<div class=\"legend__item\">\n            <div class=\"legend__item__indicator\"></div>\n            <div class=\"legend__item__title\">".concat(title, "</div>\n            <div class=\"legend__item__values\">\n                <div class=\"legend__item__diff\">").concat(difference.slice(0, difference.indexOf(' ')), "</div>\n                <div class=\"legend__item__total\">").concat(value.slice(0, difference.indexOf(' ')), "</div>\n            </div>\n        </div>");
}

function LegendComponent(categories) {
  var separator = "<div class=\"diagram__legend__separator\"></div>";
  var output = categories.map(function (category) {
    return LegendItem({
      title: category.title,
      value: category.valueText,
      difference: category.differenceText
    });
  }).join(separator);
  return "<div class=\"diagram__legend\">".concat(output, "</div>");
}

function DiagramComponent(total, diff, categories) {
  var theme = 'dark';
  return "<div class=\"slide__content diagram\">\n            ".concat(DonutComponent(total, diff, categories, theme), "\n            ").concat(LegendComponent(categories), "\n        </div>");
}
;// CONCATENATED MODULE: ./src/components/activity.js
function HeatmapRowComponent(rowData, index) {
  var magicNumber = 16.7;
  return "<div class=\"heatmap__row\" style=\"bottom: ".concat(magicNumber * (23 - index), "px;\">\n            ").concat(rowData.join(''), "\n        </div>");
}

function HeatmapImageComponent(theme, activity) {
  var size = activity == 0 ? 'min' : activity <= 2 ? 'mid' : activity <= 4 ? 'max' : 'extra';
  return "<div class=\"heatmap__element\">\n            <img class=\"heatmap__image\" src=\"./images/".concat(size, "-").concat(theme, ".svg\" />\n        </div>");
}

function generateHourData(theme, data) {
  var hourData = [];
  var days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  var _loop = function _loop() {
    var day = _days[_i];
    var dayData = [];
    data[day].map(function (activity, index) {
      if (index % 2 == 1) {
        dayData[dayData.length - 1] += activity;
      } else {
        dayData.push(activity);
      }
    });
    var dayImages = dayData.map(function (value) {
      return HeatmapImageComponent(theme, value);
    });
    var heatmapGap = '<div class="heatmap__gap"></div>';

    if (days.indexOf(day) % 2 == 0) {
      dayImages.push(heatmapGap);
    } else {
      dayImages.unshift(heatmapGap);
    }

    hourData.push(dayImages);
  };

  for (var _i = 0, _days = days; _i < _days.length; _i++) {
    _loop();
  }

  return hourData;
}

function generateDayData(theme, data) {
  var dayData = [];

  for (var i = 0; i < 24; i++) {
    var hourData = [data.mon[i], data.tue[i], data.wed[i], data.thu[i], data.fri[i], data.sat[i], data.sun[i]];
    var hourImages = hourData.map(function (value) {
      return HeatmapImageComponent(theme, value);
    });
    var heatmapGap = '<div class="heatmap__gap"></div>';

    if (i % 2 == 0) {
      hourImages.push(heatmapGap);
    } else {
      hourImages.unshift(heatmapGap);
    }

    dayData.push(hourImages);
  }

  return dayData;
}

function HeatmapComponent(data, orientation, theme) {
  var heatMapData = [];

  if (orientation == 'landscape') {
    heatMapData = generateHourData(theme, data);
  } else {
    heatMapData = generateDayData(theme, data);
  }

  return "<div class=\"activity__heatmap activity__heatmap--".concat(orientation, "\">\n            ").concat(heatMapData.map(function (el, ix) {
    return HeatmapRowComponent(el, ix);
  }).join(''), "\n        </div>");
}

function activity_LegendComponent(theme, orientation) {
  var sliderUnitSrc = "./images/slider-unit-".concat(theme, ".svg");
  return "<div class=\"activity__legend activity__legend--".concat(orientation, "\">\n            <div class=\"activity__legend__item\">\n                <div class=\"activity__legend__pic\">\n                    <img src=").concat(sliderUnitSrc, " />\n                </div>\n                <div class=\"activity__legend__text\">").concat(orientation == 'landscape' ? '2 часа' : '1 час', "</div>\n            </div>\n            <div class=\"activity__legend__item\">\n                <div class=\"activity__legend__pic activity__legend__pic--min\"></div>\n                <div class=\"activity__legend__text\">0</div>\n            </div>\n            <div class=\"activity__legend__item\">\n                <div class=\"activity__legend__pic activity__legend__pic--mid\"></div>\n                <div class=\"activity__legend__text\">1\u2009\u2014\u20092</div>\n            </div>\n            <div class=\"activity__legend__item\">\n                <div class=\"activity__legend__pic activity__legend__pic--max\"></div>\n                <div class=\"activity__legend__text\">3\u2009\u2014\u20094</div>\n            </div>\n            <div class=\"activity__legend__item\">\n                <div class=\"activity__legend__pic activity__legend__pic--extra\"></div>\n                <div class=\"activity__legend__text\">5\u2009\u2014\u20096</div>\n            </div>\n        </div>");
}

function ActivityComponent(data) {
  // const theme = document.body.className.substr(6) // why not 5??
  var theme = 'dark';
  return "<div class=\"slide__content activity\">\n            ".concat(HeatmapComponent(data.data, 'portrait', theme), "\n            ").concat(activity_LegendComponent(theme, 'portrait'), "\n        </div>");
}
;// CONCATENATED MODULE: ./src/stories.js















window.renderTemplate = function (alias, data) {
  var content;

  if (alias == 'leaders') {
    content = LeadersComponent(data.emoji, data.users, data.selectedUserId);
  } else if (alias == 'vote') {
    content = VoteComponent(data.emoji, data.selectedUserId, data.users);
  } else if (alias == 'chart') {
    content = ChartComponent(data.values, data.users);
  } else if (alias == 'diagram') {
    content = DiagramComponent(data.totalText, data.differenceText, data.categories);
  } else if (alias == 'activity') {
    content = ActivityComponent(data);
  }

  return "<div class=\"slide\">\n            <div class=\"slide__heading\">".concat(data.title, "</div>\n            <div class=\"slide__subhead\">").concat(data.subtitle, "</div>\n            ").concat(content, "\n        </div>");
};
/******/ })()
;