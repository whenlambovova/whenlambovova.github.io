/**
     * @license
     * KLineChart v9.8.12
     * Copyright (c) 2019 lihu.
     * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
     */
(function (global, factory) {
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.klinecharts = {}));
})(this, (function (exports) { 'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * line type
 */
exports.LineType = void 0;
(function (LineType) {
    LineType["Dashed"] = "dashed";
    LineType["Solid"] = "solid";
})(exports.LineType || (exports.LineType = {}));
exports.PolygonType = void 0;
(function (PolygonType) {
    PolygonType["Stroke"] = "stroke";
    PolygonType["Fill"] = "fill";
    PolygonType["StrokeFill"] = "stroke_fill";
})(exports.PolygonType || (exports.PolygonType = {}));
exports.TooltipShowRule = void 0;
(function (TooltipShowRule) {
    TooltipShowRule["Always"] = "always";
    TooltipShowRule["FollowCross"] = "follow_cross";
    TooltipShowRule["None"] = "none";
})(exports.TooltipShowRule || (exports.TooltipShowRule = {}));
exports.TooltipShowType = void 0;
(function (TooltipShowType) {
    TooltipShowType["Standard"] = "standard";
    TooltipShowType["Rect"] = "rect";
})(exports.TooltipShowType || (exports.TooltipShowType = {}));
exports.TooltipIconPosition = void 0;
(function (TooltipIconPosition) {
    TooltipIconPosition["Left"] = "left";
    TooltipIconPosition["Middle"] = "middle";
    TooltipIconPosition["Right"] = "right";
})(exports.TooltipIconPosition || (exports.TooltipIconPosition = {}));
exports.CandleTooltipRectPosition = void 0;
(function (CandleTooltipRectPosition) {
    CandleTooltipRectPosition["Fixed"] = "fixed";
    CandleTooltipRectPosition["Pointer"] = "pointer";
})(exports.CandleTooltipRectPosition || (exports.CandleTooltipRectPosition = {}));
exports.CandleType = void 0;
(function (CandleType) {
    CandleType["CandleSolid"] = "candle_solid";
    CandleType["CandleStroke"] = "candle_stroke";
    CandleType["CandleUpStroke"] = "candle_up_stroke";
    CandleType["CandleDownStroke"] = "candle_down_stroke";
    CandleType["Ohlc"] = "ohlc";
    CandleType["Area"] = "area";
})(exports.CandleType || (exports.CandleType = {}));
exports.YAxisPosition = void 0;
(function (YAxisPosition) {
    YAxisPosition["Left"] = "left";
    YAxisPosition["Right"] = "right";
})(exports.YAxisPosition || (exports.YAxisPosition = {}));
exports.YAxisType = void 0;
(function (YAxisType) {
    YAxisType["Normal"] = "normal";
    YAxisType["Percentage"] = "percentage";
    YAxisType["Log"] = "log";
})(exports.YAxisType || (exports.YAxisType = {}));
var red = '#F92855';
var alphaRed = 'rgba(249, 40, 85, .7)';
var green = '#2DC08E';
var alphaGreen = 'rgba(45, 192, 142, .7)';
var grey = '#888888';
var white = '#FFFFFF';
var blue = '#1677FF';
var textColor = '#76808F';
var axisLineColor = '#DDDDDD';
function getAlphaBlue(alpha) {
    return "rgba(22, 119, 255, ".concat(alpha, ")");
}
function getDefaultGridStyle() {
    function item() {
        return {
            show: true,
            size: 1,
            color: '#EDEDED',
            style: exports.LineType.Dashed,
            dashedValue: [2, 2]
        };
    }
    return {
        show: true,
        horizontal: item(),
        vertical: item()
    };
}
/**
 * Get default candle style
 * @type {{area: {backgroundColor: [{offset: number, color: string}, {offset: number, color: string}], lineColor: string, lineSize: number, value: string}, bar: {noChangeColor: string, upColor: string, downColor: string}, tooltip: {rect: {offsetTop: number, fillColor: string, borderColor: string, paddingBottom: number, borderRadius: number, paddingRight: number, borderSize: number, offsetLeft: number, paddingTop: number, paddingLeft: number, offsetRight: number}, showRule: string, values: null, showType: string, text: {marginRight: number, size: number, color: string, weight: string, marginBottom: number, family: string, marginTop: number, marginLeft: number}, labels: string[]}, type: string, priceMark: {high: {textMargin: number, textSize: number, color: string, textFamily: string, show: boolean, textWeight: string}, last: {noChangeColor: string, upColor: string, line: {dashValue: number[], size: number, show: boolean, style: string}, show: boolean, text: {paddingBottom: number, size: number, color: string, paddingRight: number, show: boolean, weight: string, paddingTop: number, family: string, paddingLeft: number}, downColor: string}, low: {textMargin: number, textSize: number, color: string, textFamily: string, show: boolean, textWeight: string}, show: boolean}}}
 */
function getDefaultCandleStyle() {
    var highLow = {
        show: true,
        color: textColor,
        textOffset: 5,
        textSize: 10,
        textFamily: 'Helvetica Neue',
        textWeight: 'normal'
    };
    return {
        type: exports.CandleType.CandleSolid,
        bar: {
            upColor: green,
            downColor: red,
            noChangeColor: grey,
            upBorderColor: green,
            downBorderColor: red,
            noChangeBorderColor: grey,
            upWickColor: green,
            downWickColor: red,
            noChangeWickColor: grey
        },
        area: {
            lineSize: 2,
            lineColor: blue,
            smooth: false,
            value: 'close',
            backgroundColor: [{
                    offset: 0,
                    color: getAlphaBlue(0.01)
                }, {
                    offset: 1,
                    color: getAlphaBlue(0.2)
                }],
            point: {
                show: true,
                color: blue,
                radius: 4,
                rippleColor: getAlphaBlue(0.3),
                rippleRadius: 8,
                animation: true,
                animationDuration: 1000
            }
        },
        priceMark: {
            show: true,
            high: __assign({}, highLow),
            low: __assign({}, highLow),
            last: {
                show: true,
                upColor: green,
                downColor: red,
                noChangeColor: grey,
                line: {
                    show: true,
                    style: exports.LineType.Dashed,
                    dashedValue: [4, 4],
                    size: 1
                },
                text: {
                    show: true,
                    style: exports.PolygonType.Fill,
                    size: 12,
                    paddingLeft: 4,
                    paddingTop: 4,
                    paddingRight: 4,
                    paddingBottom: 4,
                    borderColor: 'transparent',
                    borderStyle: exports.LineType.Solid,
                    borderSize: 0,
                    borderDashedValue: [2, 2],
                    color: white,
                    family: 'Helvetica Neue',
                    weight: 'normal',
                    borderRadius: 2
                }
            }
        },
        tooltip: {
            offsetLeft: 4,
            offsetTop: 6,
            offsetRight: 4,
            offsetBottom: 6,
            showRule: exports.TooltipShowRule.Always,
            showType: exports.TooltipShowType.Standard,
            custom: [
                { title: 'time', value: '{time}' },
                { title: 'open', value: '{open}' },
                { title: 'high', value: '{high}' },
                { title: 'low', value: '{low}' },
                { title: 'close', value: '{close}' },
                { title: 'volume', value: '{volume}' }
            ],
            defaultValue: 'n/a',
            rect: {
                position: exports.CandleTooltipRectPosition.Fixed,
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop: 4,
                paddingBottom: 4,
                offsetLeft: 4,
                offsetTop: 4,
                offsetRight: 4,
                offsetBottom: 4,
                borderRadius: 4,
                borderSize: 1,
                borderColor: '#F2F3F5',
                color: '#FEFEFE'
            },
            text: {
                size: 12,
                family: 'Helvetica Neue',
                weight: 'normal',
                color: textColor,
                marginLeft: 8,
                marginTop: 4,
                marginRight: 8,
                marginBottom: 4
            },
            icons: []
        }
    };
}
/**
 * Get default indicator style
 */
function getDefaultIndicatorStyle() {
    var lines = ['#FF9600', '#935EBD', blue, '#E11D74', '#01C5C4'].map(function (color) { return ({
        style: exports.LineType.Solid,
        smooth: false,
        size: 1,
        dashedValue: [2, 2],
        color: color
    }); });
    return {
        ohlc: {
            upColor: alphaGreen,
            downColor: alphaRed,
            noChangeColor: grey
        },
        bars: [{
                style: exports.PolygonType.Fill,
                borderStyle: exports.LineType.Solid,
                borderSize: 1,
                borderDashedValue: [2, 2],
                upColor: alphaGreen,
                downColor: alphaRed,
                noChangeColor: grey
            }],
        lines: lines,
        circles: [{
                style: exports.PolygonType.Fill,
                borderStyle: exports.LineType.Solid,
                borderSize: 1,
                borderDashedValue: [2, 2],
                upColor: alphaGreen,
                downColor: alphaRed,
                noChangeColor: grey
            }],
        lastValueMark: {
            show: false,
            text: {
                show: false,
                style: exports.PolygonType.Fill,
                color: white,
                size: 12,
                family: 'Helvetica Neue',
                weight: 'normal',
                borderStyle: exports.LineType.Solid,
                borderColor: 'transparent',
                borderSize: 0,
                borderDashedValue: [2, 2],
                paddingLeft: 4,
                paddingTop: 4,
                paddingRight: 4,
                paddingBottom: 4,
                borderRadius: 2
            }
        },
        tooltip: {
            offsetLeft: 4,
            offsetTop: 6,
            offsetRight: 4,
            offsetBottom: 6,
            showRule: exports.TooltipShowRule.Always,
            showType: exports.TooltipShowType.Standard,
            showName: true,
            showParams: true,
            defaultValue: 'n/a',
            text: {
                size: 12,
                family: 'Helvetica Neue',
                weight: 'normal',
                color: textColor,
                marginLeft: 8,
                marginTop: 4,
                marginRight: 8,
                marginBottom: 4
            },
            icons: []
        }
    };
}
function getDefaultXAxisStyle() {
    return {
        show: true,
        size: 'auto',
        axisLine: {
            show: true,
            color: axisLineColor,
            size: 1
        },
        tickText: {
            show: true,
            color: textColor,
            size: 12,
            family: 'Helvetica Neue',
            weight: 'normal',
            marginStart: 4,
            marginEnd: 4
        },
        tickLine: {
            show: true,
            size: 1,
            length: 3,
            color: axisLineColor
        }
    };
}
function getDefaultYAxisStyle() {
    var style = getDefaultXAxisStyle();
    style.type = exports.YAxisType.Normal;
    style.position = exports.YAxisPosition.Right;
    style.inside = false;
    style.reverse = false;
    return style;
}
function getDefaultCrosshairStyle() {
    function item() {
        return {
            show: true,
            line: {
                show: true,
                style: exports.LineType.Dashed,
                dashedValue: [4, 2],
                size: 1,
                color: textColor
            },
            text: {
                show: true,
                style: exports.PolygonType.Fill,
                color: white,
                size: 12,
                family: 'Helvetica Neue',
                weight: 'normal',
                borderStyle: exports.LineType.Solid,
                borderDashedValue: [2, 2],
                borderSize: 1,
                borderColor: textColor,
                borderRadius: 2,
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop: 4,
                paddingBottom: 4,
                backgroundColor: textColor
            }
        };
    }
    return {
        show: true,
        horizontal: item(),
        vertical: item()
    };
}
function getDefaultOverlayStyle() {
    var pointBorderColor = getAlphaBlue(0.35);
    var alphaBg = getAlphaBlue(0.25);
    function text() {
        return {
            style: exports.PolygonType.Fill,
            color: white,
            size: 12,
            family: 'Helvetica Neue',
            weight: 'normal',
            borderStyle: exports.LineType.Solid,
            borderDashedValue: [2, 2],
            borderSize: 1,
            borderRadius: 2,
            borderColor: blue,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 4,
            paddingBottom: 4,
            backgroundColor: blue
        };
    }
    return {
        point: {
            color: blue,
            borderColor: pointBorderColor,
            borderSize: 1,
            radius: 5,
            activeColor: blue,
            activeBorderColor: pointBorderColor,
            activeBorderSize: 3,
            activeRadius: 5
        },
        line: {
            style: exports.LineType.Solid,
            smooth: false,
            color: blue,
            size: 1,
            dashedValue: [2, 2]
        },
        rect: {
            style: exports.PolygonType.Fill,
            color: alphaBg,
            borderColor: blue,
            borderSize: 1,
            borderRadius: 0,
            borderStyle: exports.LineType.Solid,
            borderDashedValue: [2, 2]
        },
        polygon: {
            style: exports.PolygonType.Fill,
            color: blue,
            borderColor: blue,
            borderSize: 1,
            borderStyle: exports.LineType.Solid,
            borderDashedValue: [2, 2]
        },
        circle: {
            style: exports.PolygonType.Fill,
            color: alphaBg,
            borderColor: blue,
            borderSize: 1,
            borderStyle: exports.LineType.Solid,
            borderDashedValue: [2, 2]
        },
        arc: {
            style: exports.LineType.Solid,
            color: blue,
            size: 1,
            dashedValue: [2, 2]
        },
        text: text(),
        rectText: text()
    };
}
function getDefaultSeparatorStyle() {
    return {
        size: 1,
        color: axisLineColor,
        fill: true,
        activeBackgroundColor: getAlphaBlue(0.08)
    };
}
function getDefaultStyles() {
    return {
        grid: getDefaultGridStyle(),
        candle: getDefaultCandleStyle(),
        indicator: getDefaultIndicatorStyle(),
        xAxis: getDefaultXAxisStyle(),
        yAxis: getDefaultYAxisStyle(),
        separator: getDefaultSeparatorStyle(),
        crosshair: getDefaultCrosshairStyle(),
        overlay: getDefaultOverlayStyle()
    };
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function log(templateText, tagStyle, messageStyle, api, invalidParam, append) {
    {
        var apiStr = api !== '' ? "Call api `".concat(api, "`").concat(invalidParam !== '' || append !== '' ? ', ' : '.') : '';
        var invalidParamStr = invalidParam !== '' ? "invalid parameter `".concat(invalidParam, "`").concat(append !== '' ? ', ' : '.') : '';
        var appendStr = append !== '' ? append : '';
        console.log(templateText, tagStyle, messageStyle, apiStr, invalidParamStr, appendStr);
    }
}
function logWarn(api, invalidParam, append) {
    log('%c😑 klinecharts warning%c %s%s%s', 'padding:3px 4px;border-radius:2px;color:#ffffff;background-color:#FF9600', 'color:#FF9600', api, invalidParam, append !== null && append !== void 0 ? append : '');
}
function logError(api, invalidParam, append) {
    log('%c😟 klinecharts error%c %s%s%s', 'padding:3px 4px;border-radius:2px;color:#ffffff;background-color:#F92855;', 'color:#F92855;', api, invalidParam, append );
}
function logTag() {
    log('%c❤️ Welcome to klinecharts. Version is 9.8.12', 'border-radius:4px;border:dashed 1px #1677FF;line-height:70px;padding:0 20px;margin:16px 0;font-size:14px;color:#1677FF;', '', '', '', '');
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function merge(target, source) {
    if ((!isObject(target) && !isObject(source))) {
        return;
    }
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            var targetProp = target[key];
            var sourceProp = source[key];
            if (isObject(sourceProp) &&
                isObject(targetProp)) {
                merge(targetProp, sourceProp);
            }
            else {
                if (isValid(source[key])) {
                    target[key] = clone(source[key]);
                }
            }
        }
    }
}
function clone(target) {
    if (!isObject(target)) {
        return target;
    }
    var copy;
    if (isArray(target)) {
        copy = [];
    }
    else {
        copy = {};
    }
    for (var key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
            var v = target[key];
            if (isObject(v)) {
                copy[key] = clone(v);
            }
            else {
                copy[key] = v;
            }
        }
    }
    return copy;
}
function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}
function isFunction(value) {
    return typeof value === 'function';
}
function isObject(value) {
    return (typeof value === 'object') && isValid(value);
}
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
function isValid(value) {
    return value !== null && value !== undefined;
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isString(value) {
    return typeof value === 'string';
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var reEscapeChar = /\\(\\)?/g;
var rePropName = RegExp('[^.[\\]]+' + '|' +
    '\\[(?:' +
    '([^"\'][^[]*)' + '|' +
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' + '|' +
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))', 'g');
function formatValue(data, key, defaultValue) {
    if (isValid(data)) {
        var path_1 = [];
        key.replace(rePropName, function (subString) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var k = subString;
            if (isValid(args[1])) {
                k = args[2].replace(reEscapeChar, '$1');
            }
            else if (isValid(args[0])) {
                k = args[0].trim();
            }
            path_1.push(k);
            return '';
        });
        var value = data;
        var index = 0;
        var length_1 = path_1.length;
        while (isValid(value) && index < length_1) {
            value = value === null || value === void 0 ? void 0 : value[path_1[index++]];
        }
        return isValid(value) ? value : (defaultValue !== null && defaultValue !== void 0 ? defaultValue : '--');
    }
    return defaultValue !== null && defaultValue !== void 0 ? defaultValue : '--';
}
function formatDate(dateTimeFormat, timestamp, format) {
    var date = {};
    dateTimeFormat.formatToParts(new Date(timestamp)).forEach(function (_a) {
        var type = _a.type, value = _a.value;
        switch (type) {
            case 'year': {
                date.YYYY = value;
                break;
            }
            case 'month': {
                date.MM = value;
                break;
            }
            case 'day': {
                date.DD = value;
                break;
            }
            case 'hour': {
                date.HH = value === '24' ? '00' : value;
                break;
            }
            case 'minute': {
                date.mm = value;
                break;
            }
            case 'second': {
                date.ss = value;
                break;
            }
        }
    });
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, function (key) { return date[key]; });
}
function formatPrecision(value, precision) {
    var v = +value;
    if (isNumber(v)) {
        return v.toFixed(precision !== null && precision !== void 0 ? precision : 2);
    }
    return "".concat(value);
}
function formatBigNumber(value) {
    var v = +value;
    if (isNumber(v)) {
        if (v > 1000000000) {
            return "".concat(+((v / 1000000000).toFixed(3)), "B");
        }
        if (v > 1000000) {
            return "".concat(+((v / 1000000).toFixed(3)), "M");
        }
        if (v > 1000) {
            return "".concat(+((v / 1000).toFixed(3)), "K");
        }
    }
    return "".concat(value);
}
function formatThousands(value, sign) {
    var vl = "".concat(value);
    if (sign.length === 0) {
        return vl;
    }
    if (vl.includes('.')) {
        var arr = vl.split('.');
        return "".concat(arr[0].replace(/(\d)(?=(\d{3})+$)/g, function ($1) { return "".concat($1).concat(sign); }), ".").concat(arr[1]);
    }
    return vl.replace(/(\d)(?=(\d{3})+$)/g, function ($1) { return "".concat($1).concat(sign); });
}
function formatFoldDecimal(value, threshold) {
    var vl = "".concat(value);
    var reg = new RegExp('\\.0{' + threshold + ',}[1-9][0-9]*$');
    if (reg.test(vl)) {
        var result = vl.split('.');
        var v = result[result.length - 1];
        var match = v.match(/0*/);
        if (isValid(match)) {
            var count = match[0].length;
            result[result.length - 1] = v.replace(/0*/, "0{".concat(count, "}"));
            return result.join('.');
        }
    }
    return vl;
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var measureCtx;
/**
 * Get pixel ratio
 * @param canvas
 * @returns {number}
 */
function getPixelRatio(canvas) {
    var _a, _b, _c;
    return (_c = (_b = (_a = canvas.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b.devicePixelRatio) !== null && _c !== void 0 ? _c : 1;
}
function createFont(size, weight, family) {
    return "".concat(weight !== null && weight !== void 0 ? weight : 'normal', " ").concat(size !== null && size !== void 0 ? size : 12, "px ").concat(family !== null && family !== void 0 ? family : 'Helvetica Neue');
}
/**
 * Measure the width of text
 * @param text
 * @returns {number}
 */
function calcTextWidth(text, size, weight, family) {
    if (!isValid(measureCtx)) {
        var canvas = document.createElement('canvas');
        var pixelRatio = getPixelRatio(canvas);
        measureCtx = canvas.getContext('2d');
        measureCtx.scale(pixelRatio, pixelRatio);
    }
    measureCtx.font = createFont(size, weight, family);
    return Math.round(measureCtx.measureText(text).width);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.ActionType = void 0;
(function (ActionType) {
    ActionType["OnDataReady"] = "onDataReady";
    ActionType["OnZoom"] = "onZoom";
    ActionType["OnScroll"] = "onScroll";
    ActionType["OnVisibleRangeChange"] = "onVisibleRangeChange";
    ActionType["OnTooltipIconClick"] = "onTooltipIconClick";
    ActionType["OnCrosshairChange"] = "onCrosshairChange";
    ActionType["OnCandleBarClick"] = "onCandleBarClick";
    ActionType["OnPaneDrag"] = "onPaneDrag";
})(exports.ActionType || (exports.ActionType = {}));
var Delegate = /** @class */ (function () {
    function Delegate() {
        this._callbacks = [];
    }
    Delegate.prototype.subscribe = function (callback) {
        var _a;
        var index = (_a = this._callbacks.indexOf(callback)) !== null && _a !== void 0 ? _a : -1;
        if (index < 0) {
            this._callbacks.push(callback);
        }
    };
    Delegate.prototype.unsubscribe = function (callback) {
        var _a;
        if (isFunction(callback)) {
            var index = (_a = this._callbacks.indexOf(callback)) !== null && _a !== void 0 ? _a : -1;
            if (index > -1) {
                this._callbacks.splice(index, 1);
            }
        }
        else {
            this._callbacks = [];
        }
    };
    Delegate.prototype.execute = function (data) {
        this._callbacks.forEach(function (callback) {
            callback(data);
        });
    };
    Delegate.prototype.isEmpty = function () {
        return this._callbacks.length === 0;
    };
    return Delegate;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.LoadDataType = void 0;
(function (LoadDataType) {
    LoadDataType["Init"] = "init";
    LoadDataType["Forward"] = "forward";
    LoadDataType["Backward"] = "backward";
})(exports.LoadDataType || (exports.LoadDataType = {}));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.IndicatorSeries = void 0;
(function (IndicatorSeries) {
    IndicatorSeries["Normal"] = "normal";
    IndicatorSeries["Price"] = "price";
    IndicatorSeries["Volume"] = "volume";
})(exports.IndicatorSeries || (exports.IndicatorSeries = {}));
function eachFigures(kLineDataList, indicator, dataIndex, defaultStyles, eachFigureCallback) {
    var result = indicator.result;
    var figures = indicator.figures;
    var styles = indicator.styles;
    var circleStyles = formatValue(styles, 'circles', defaultStyles.circles);
    var circleStyleCount = circleStyles.length;
    var barStyles = formatValue(styles, 'bars', defaultStyles.bars);
    var barStyleCount = barStyles.length;
    var lineStyles = formatValue(styles, 'lines', defaultStyles.lines);
    var lineStyleCount = lineStyles.length;
    var circleCount = 0;
    var barCount = 0;
    var lineCount = 0;
    var defaultFigureStyles;
    var figureIndex = 0;
    figures.forEach(function (figure) {
        var _a;
        switch (figure.type) {
            case 'circle': {
                figureIndex = circleCount;
                var styles_1 = circleStyles[circleCount % circleStyleCount];
                defaultFigureStyles = __assign(__assign({}, styles_1), { color: styles_1.noChangeColor });
                circleCount++;
                break;
            }
            case 'bar': {
                figureIndex = barCount;
                var styles_2 = barStyles[barCount % barStyleCount];
                defaultFigureStyles = __assign(__assign({}, styles_2), { color: styles_2.noChangeColor });
                barCount++;
                break;
            }
            case 'line': {
                figureIndex = lineCount;
                defaultFigureStyles = lineStyles[lineCount % lineStyleCount];
                lineCount++;
                break;
            }
        }
        if (isValid(defaultFigureStyles)) {
            var cbData = {
                prev: { kLineData: kLineDataList[dataIndex - 1], indicatorData: result[dataIndex - 1] },
                current: { kLineData: kLineDataList[dataIndex], indicatorData: result[dataIndex] },
                next: { kLineData: kLineDataList[dataIndex + 1], indicatorData: result[dataIndex + 1] }
            };
            var ss = (_a = figure.styles) === null || _a === void 0 ? void 0 : _a.call(figure, cbData, indicator, defaultStyles);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            eachFigureCallback(figure, __assign(__assign({}, defaultFigureStyles), ss), figureIndex);
        }
    });
}
var IndicatorImp = /** @class */ (function () {
    function IndicatorImp(indicator) {
        this.result = [];
        this._precisionFlag = false;
        var name = indicator.name, shortName = indicator.shortName, series = indicator.series, calcParams = indicator.calcParams, figures = indicator.figures, precision = indicator.precision, shouldOhlc = indicator.shouldOhlc, shouldFormatBigNumber = indicator.shouldFormatBigNumber, visible = indicator.visible, zLevel = indicator.zLevel, minValue = indicator.minValue, maxValue = indicator.maxValue, styles = indicator.styles, extendData = indicator.extendData, regenerateFigures = indicator.regenerateFigures, createTooltipDataSource = indicator.createTooltipDataSource, draw = indicator.draw;
        this.name = name;
        this.shortName = shortName !== null && shortName !== void 0 ? shortName : name;
        this.series = series !== null && series !== void 0 ? series : exports.IndicatorSeries.Normal;
        this.precision = precision !== null && precision !== void 0 ? precision : 4;
        this.calcParams = calcParams !== null && calcParams !== void 0 ? calcParams : [];
        this.figures = figures !== null && figures !== void 0 ? figures : [];
        this.shouldOhlc = shouldOhlc !== null && shouldOhlc !== void 0 ? shouldOhlc : false;
        this.shouldFormatBigNumber = shouldFormatBigNumber !== null && shouldFormatBigNumber !== void 0 ? shouldFormatBigNumber : false;
        this.visible = visible !== null && visible !== void 0 ? visible : true;
        this.zLevel = zLevel !== null && zLevel !== void 0 ? zLevel : 0;
        this.minValue = minValue !== null && minValue !== void 0 ? minValue : null;
        this.maxValue = maxValue !== null && maxValue !== void 0 ? maxValue : null;
        this.styles = clone(styles !== null && styles !== void 0 ? styles : {});
        this.extendData = extendData;
        this.regenerateFigures = regenerateFigures !== null && regenerateFigures !== void 0 ? regenerateFigures : null;
        this.createTooltipDataSource = createTooltipDataSource !== null && createTooltipDataSource !== void 0 ? createTooltipDataSource : null;
        this.draw = draw !== null && draw !== void 0 ? draw : null;
    }
    IndicatorImp.prototype.setShortName = function (shortName) {
        if (this.shortName !== shortName) {
            this.shortName = shortName;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setSeries = function (series) {
        if (this.series !== series) {
            this.series = series;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setPrecision = function (precision, flag) {
        var f = flag !== null && flag !== void 0 ? flag : false;
        var optimalPrecision = Math.floor(precision);
        if (optimalPrecision !== this.precision && precision >= 0 && (!f || (f && !this._precisionFlag))) {
            this.precision = optimalPrecision;
            if (!f) {
                this._precisionFlag = true;
            }
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setCalcParams = function (params) {
        var _a, _b;
        this.calcParams = params;
        this.figures = (_b = (_a = this.regenerateFigures) === null || _a === void 0 ? void 0 : _a.call(this, params)) !== null && _b !== void 0 ? _b : this.figures;
        return true;
    };
    IndicatorImp.prototype.setShouldOhlc = function (shouldOhlc) {
        if (this.shouldOhlc !== shouldOhlc) {
            this.shouldOhlc = shouldOhlc;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setShouldFormatBigNumber = function (shouldFormatBigNumber) {
        if (this.shouldFormatBigNumber !== shouldFormatBigNumber) {
            this.shouldFormatBigNumber = shouldFormatBigNumber;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setVisible = function (visible) {
        if (this.visible !== visible) {
            this.visible = visible;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setZLevel = function (zLevel) {
        if (this.zLevel !== zLevel) {
            this.zLevel = zLevel;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setStyles = function (styles) {
        merge(this.styles, styles);
        return true;
    };
    IndicatorImp.prototype.setExtendData = function (extendData) {
        if (this.extendData !== extendData) {
            this.extendData = extendData;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setFigures = function (figures) {
        if (this.figures !== figures) {
            this.figures = figures;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setMinValue = function (value) {
        if (this.minValue !== value) {
            this.minValue = value;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setMaxValue = function (value) {
        if (this.maxValue !== value) {
            this.maxValue = value;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setRegenerateFigures = function (callback) {
        if (this.regenerateFigures !== callback) {
            this.regenerateFigures = callback;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setCreateTooltipDataSource = function (callback) {
        if (this.createTooltipDataSource !== callback) {
            this.createTooltipDataSource = callback;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.setDraw = function (callback) {
        if (this.draw !== callback) {
            this.draw = callback;
            return true;
        }
        return false;
    };
    IndicatorImp.prototype.calcIndicator = function (dataList) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.calc(dataList, this)];
                    case 1:
                        result = _a.sent();
                        this.result = result;
                        return [2 /*return*/, true];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    IndicatorImp.extend = function (template) {
        var Custom = /** @class */ (function (_super) {
            __extends(Custom, _super);
            function Custom() {
                return _super.call(this, template) || this;
            }
            Custom.prototype.calc = function (dataList, indicator) {
                return template.calc(dataList, indicator);
            };
            return Custom;
        }(IndicatorImp));
        return Custom;
    };
    return IndicatorImp;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.OverlayMode = void 0;
(function (OverlayMode) {
    OverlayMode["Normal"] = "normal";
    OverlayMode["WeakMagnet"] = "weak_magnet";
    OverlayMode["StrongMagnet"] = "strong_magnet";
})(exports.OverlayMode || (exports.OverlayMode = {}));
function getAllOverlayFigureIgnoreEventTypes() {
    return [
        'mouseClickEvent',
        'mouseDoubleClickEvent',
        'mouseRightClickEvent',
        'tapEvent',
        'doubleTapEvent',
        'mouseDownEvent',
        'touchStartEvent',
        'mouseMoveEvent',
        'touchMoveEvent'
    ];
}
var OVERLAY_DRAW_STEP_START = 1;
var OVERLAY_DRAW_STEP_FINISHED = -1;
var OVERLAY_ID_PREFIX = 'overlay_';
var OVERLAY_FIGURE_KEY_PREFIX = 'overlay_figure_';
var OverlayImp = /** @class */ (function () {
    function OverlayImp(overlay) {
        this.currentStep = OVERLAY_DRAW_STEP_START;
        this.points = [];
        this._prevPressedPoint = null;
        this._prevPressedPoints = [];
        var mode = overlay.mode, modeSensitivity = overlay.modeSensitivity, extendData = overlay.extendData, styles = overlay.styles, name = overlay.name, totalStep = overlay.totalStep, lock = overlay.lock, visible = overlay.visible, zLevel = overlay.zLevel, needDefaultPointFigure = overlay.needDefaultPointFigure, needDefaultXAxisFigure = overlay.needDefaultXAxisFigure, needDefaultYAxisFigure = overlay.needDefaultYAxisFigure, createPointFigures = overlay.createPointFigures, createXAxisFigures = overlay.createXAxisFigures, createYAxisFigures = overlay.createYAxisFigures, performEventPressedMove = overlay.performEventPressedMove, performEventMoveForDrawing = overlay.performEventMoveForDrawing, onDrawStart = overlay.onDrawStart, onDrawing = overlay.onDrawing, onDrawEnd = overlay.onDrawEnd, onClick = overlay.onClick, onDoubleClick = overlay.onDoubleClick, onRightClick = overlay.onRightClick, onPressedMoveStart = overlay.onPressedMoveStart, onPressedMoving = overlay.onPressedMoving, onPressedMoveEnd = overlay.onPressedMoveEnd, onMouseEnter = overlay.onMouseEnter, onMouseLeave = overlay.onMouseLeave, onRemoved = overlay.onRemoved, onSelected = overlay.onSelected, onDeselected = overlay.onDeselected;
        this.name = name;
        this.totalStep = (!isNumber(totalStep) || totalStep < 2) ? 1 : totalStep;
        this.lock = lock !== null && lock !== void 0 ? lock : false;
        this.visible = visible !== null && visible !== void 0 ? visible : true;
        this.zLevel = zLevel !== null && zLevel !== void 0 ? zLevel : 0;
        this.needDefaultPointFigure = needDefaultPointFigure !== null && needDefaultPointFigure !== void 0 ? needDefaultPointFigure : false;
        this.needDefaultXAxisFigure = needDefaultXAxisFigure !== null && needDefaultXAxisFigure !== void 0 ? needDefaultXAxisFigure : false;
        this.needDefaultYAxisFigure = needDefaultYAxisFigure !== null && needDefaultYAxisFigure !== void 0 ? needDefaultYAxisFigure : false;
        this.mode = mode !== null && mode !== void 0 ? mode : exports.OverlayMode.Normal;
        this.modeSensitivity = modeSensitivity !== null && modeSensitivity !== void 0 ? modeSensitivity : 8;
        this.extendData = extendData;
        this.styles = clone(styles !== null && styles !== void 0 ? styles : {});
        this.createPointFigures = createPointFigures !== null && createPointFigures !== void 0 ? createPointFigures : null;
        this.createXAxisFigures = createXAxisFigures !== null && createXAxisFigures !== void 0 ? createXAxisFigures : null;
        this.createYAxisFigures = createYAxisFigures !== null && createYAxisFigures !== void 0 ? createYAxisFigures : null;
        this.performEventPressedMove = performEventPressedMove !== null && performEventPressedMove !== void 0 ? performEventPressedMove : null;
        this.performEventMoveForDrawing = performEventMoveForDrawing !== null && performEventMoveForDrawing !== void 0 ? performEventMoveForDrawing : null;
        this.onDrawStart = onDrawStart !== null && onDrawStart !== void 0 ? onDrawStart : null;
        this.onDrawing = onDrawing !== null && onDrawing !== void 0 ? onDrawing : null;
        this.onDrawEnd = onDrawEnd !== null && onDrawEnd !== void 0 ? onDrawEnd : null;
        this.onClick = onClick !== null && onClick !== void 0 ? onClick : null;
        this.onDoubleClick = onDoubleClick !== null && onDoubleClick !== void 0 ? onDoubleClick : null;
        this.onRightClick = onRightClick !== null && onRightClick !== void 0 ? onRightClick : null;
        this.onPressedMoveStart = onPressedMoveStart !== null && onPressedMoveStart !== void 0 ? onPressedMoveStart : null;
        this.onPressedMoving = onPressedMoving !== null && onPressedMoving !== void 0 ? onPressedMoving : null;
        this.onPressedMoveEnd = onPressedMoveEnd !== null && onPressedMoveEnd !== void 0 ? onPressedMoveEnd : null;
        this.onMouseEnter = onMouseEnter !== null && onMouseEnter !== void 0 ? onMouseEnter : null;
        this.onMouseLeave = onMouseLeave !== null && onMouseLeave !== void 0 ? onMouseLeave : null;
        this.onRemoved = onRemoved !== null && onRemoved !== void 0 ? onRemoved : null;
        this.onSelected = onSelected !== null && onSelected !== void 0 ? onSelected : null;
        this.onDeselected = onDeselected !== null && onDeselected !== void 0 ? onDeselected : null;
    }
    OverlayImp.prototype.setId = function (id) {
        if (!isString(this.id)) {
            this.id = id;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setGroupId = function (groupId) {
        if (!isString(this.groupId)) {
            this.groupId = groupId;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setPaneId = function (paneId) {
        this.paneId = paneId;
    };
    OverlayImp.prototype.setExtendData = function (extendData) {
        if (extendData !== this.extendData) {
            this.extendData = extendData;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setStyles = function (styles) {
        merge(this.styles, styles);
        return true;
    };
    OverlayImp.prototype.setPoints = function (points) {
        if (points.length > 0) {
            var repeatTotalStep = void 0;
            this.points = __spreadArray([], __read(points), false);
            if (points.length >= this.totalStep - 1) {
                this.currentStep = OVERLAY_DRAW_STEP_FINISHED;
                repeatTotalStep = this.totalStep - 1;
            }
            else {
                this.currentStep = points.length + 1;
                repeatTotalStep = points.length;
            }
            // Prevent wrong drawing due to wrong points
            if (this.performEventMoveForDrawing !== null) {
                for (var i = 0; i < repeatTotalStep; i++) {
                    this.performEventMoveForDrawing({
                        currentStep: i + 2,
                        mode: this.mode,
                        points: this.points,
                        performPointIndex: i,
                        performPoint: this.points[i]
                    });
                }
            }
            if (this.currentStep === OVERLAY_DRAW_STEP_FINISHED && this.performEventPressedMove !== null) {
                this.performEventPressedMove({
                    currentStep: this.currentStep,
                    mode: this.mode,
                    points: this.points,
                    performPointIndex: this.points.length - 1,
                    performPoint: this.points[this.points.length - 1]
                });
            }
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setLock = function (lock) {
        if (this.lock !== lock) {
            this.lock = lock;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setVisible = function (visible) {
        if (this.visible !== visible) {
            this.visible = visible;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setZLevel = function (zLevel) {
        if (this.zLevel !== zLevel) {
            this.zLevel = zLevel;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setMode = function (mode) {
        if (this.mode !== mode) {
            this.mode = mode;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setModeSensitivity = function (modeSensitivity) {
        if (this.modeSensitivity !== modeSensitivity) {
            this.modeSensitivity = modeSensitivity;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnDrawStartCallback = function (callback) {
        if (this.onDrawStart !== callback) {
            this.onDrawStart = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnDrawingCallback = function (callback) {
        if (this.onDrawing !== callback) {
            this.onDrawing = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnDrawEndCallback = function (callback) {
        if (this.onDrawEnd !== callback) {
            this.onDrawEnd = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnClickCallback = function (callback) {
        if (this.onClick !== callback) {
            this.onClick = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnDoubleClickCallback = function (callback) {
        if (this.onDoubleClick !== callback) {
            this.onDoubleClick = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnRightClickCallback = function (callback) {
        if (this.onRightClick !== callback) {
            this.onRightClick = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnPressedMoveStartCallback = function (callback) {
        if (this.onPressedMoveStart !== callback) {
            this.onPressedMoveStart = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnPressedMovingCallback = function (callback) {
        if (this.onPressedMoving !== callback) {
            this.onPressedMoving = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnPressedMoveEndCallback = function (callback) {
        if (this.onPressedMoveEnd !== callback) {
            this.onPressedMoveEnd = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnMouseEnterCallback = function (callback) {
        if (this.onMouseEnter !== callback) {
            this.onMouseEnter = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnMouseLeaveCallback = function (callback) {
        if (this.onMouseLeave !== callback) {
            this.onMouseLeave = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnRemovedCallback = function (callback) {
        if (this.onRemoved !== callback) {
            this.onRemoved = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnSelectedCallback = function (callback) {
        if (this.onSelected !== callback) {
            this.onSelected = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.setOnDeselectedCallback = function (callback) {
        if (this.onDeselected !== callback) {
            this.onDeselected = callback;
            return true;
        }
        return false;
    };
    OverlayImp.prototype.nextStep = function () {
        if (this.currentStep === this.totalStep - 1) {
            this.currentStep = OVERLAY_DRAW_STEP_FINISHED;
        }
        else {
            this.currentStep++;
        }
    };
    OverlayImp.prototype.forceComplete = function () {
        this.currentStep = OVERLAY_DRAW_STEP_FINISHED;
    };
    OverlayImp.prototype.isDrawing = function () {
        return this.currentStep !== OVERLAY_DRAW_STEP_FINISHED;
    };
    OverlayImp.prototype.isStart = function () {
        return this.currentStep === OVERLAY_DRAW_STEP_START;
    };
    OverlayImp.prototype.eventMoveForDrawing = function (point) {
        var _a;
        var pointIndex = this.currentStep - 1;
        var newPoint = {};
        if (isNumber(point.timestamp)) {
            newPoint.timestamp = point.timestamp;
        }
        if (isNumber(point.dataIndex)) {
            newPoint.dataIndex = point.dataIndex;
        }
        if (isNumber(point.value)) {
            newPoint.value = point.value;
        }
        this.points[pointIndex] = newPoint;
        (_a = this.performEventMoveForDrawing) === null || _a === void 0 ? void 0 : _a.call(this, {
            currentStep: this.currentStep,
            mode: this.mode,
            points: this.points,
            performPointIndex: pointIndex,
            performPoint: newPoint
        });
    };
    OverlayImp.prototype.eventPressedPointMove = function (point, pointIndex) {
        var _a;
        if (isNumber(point.dataIndex)) {
            this.points[pointIndex].dataIndex = point.dataIndex;
            this.points[pointIndex].timestamp = point.timestamp;
        }
        if (isNumber(point.value)) {
            this.points[pointIndex].value = point.value;
        }
        (_a = this.performEventPressedMove) === null || _a === void 0 ? void 0 : _a.call(this, {
            currentStep: this.currentStep,
            points: this.points,
            mode: this.mode,
            performPointIndex: pointIndex,
            performPoint: this.points[pointIndex]
        });
    };
    OverlayImp.prototype.startPressedMove = function (point) {
        this._prevPressedPoint = __assign({}, point);
        this._prevPressedPoints = clone(this.points);
    };
    OverlayImp.prototype.eventPressedOtherMove = function (point, timeScaleStore) {
        if (this._prevPressedPoint !== null) {
            var difDataIndex_1;
            if (isNumber(point.dataIndex) && isNumber(this._prevPressedPoint.dataIndex)) {
                difDataIndex_1 = point.dataIndex - this._prevPressedPoint.dataIndex;
            }
            var difValue_1;
            if (isNumber(point.value) && isNumber(this._prevPressedPoint.value)) {
                difValue_1 = point.value - this._prevPressedPoint.value;
            }
            this.points = this._prevPressedPoints.map(function (p) {
                var _a;
                if (isNumber(p.timestamp)) {
                    p.dataIndex = timeScaleStore.timestampToDataIndex(p.timestamp);
                }
                var newPoint = __assign({}, p);
                if (isNumber(difDataIndex_1) && isNumber(p.dataIndex)) {
                    newPoint.dataIndex = p.dataIndex + difDataIndex_1;
                    newPoint.timestamp = (_a = timeScaleStore.dataIndexToTimestamp(newPoint.dataIndex)) !== null && _a !== void 0 ? _a : undefined;
                }
                if (isNumber(difValue_1) && isNumber(p.value)) {
                    newPoint.value = p.value + difValue_1;
                }
                return newPoint;
            });
        }
    };
    OverlayImp.extend = function (template) {
        var Custom = /** @class */ (function (_super) {
            __extends(Custom, _super);
            function Custom() {
                return _super.call(this, template) || this;
            }
            return Custom;
        }(OverlayImp));
        return Custom;
    };
    return OverlayImp;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.FormatDateType = void 0;
(function (FormatDateType) {
    FormatDateType[FormatDateType["Tooltip"] = 0] = "Tooltip";
    FormatDateType[FormatDateType["Crosshair"] = 1] = "Crosshair";
    FormatDateType[FormatDateType["XAxis"] = 2] = "XAxis";
})(exports.FormatDateType || (exports.FormatDateType = {}));
function getDefaultCustomApi() {
    return {
        formatDate: formatDate,
        formatBigNumber: formatBigNumber
    };
}
var defaultLocale = 'en-US';

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_REQUEST_ID = -1;
function requestAnimationFrame(fn) {
    if (isFunction(window.requestAnimationFrame)) {
        return window.requestAnimationFrame(fn);
    }
    return window.setTimeout(fn, 20);
}
function cancelAnimationFrame(id) {
    if (isFunction(window.cancelAnimationFrame)) {
        window.cancelAnimationFrame(id);
    }
    else {
        window.clearTimeout(id);
    }
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Animation = /** @class */ (function () {
    function Animation(options) {
        this._options = { duration: 500, iterationCount: 1 };
        this._currentIterationCount = 0;
        this._running = false;
        this._time = 0;
        merge(this._options, options);
    }
    Animation.prototype._loop = function () {
        var _this = this;
        this._running = true;
        var step = function () {
            var _a;
            if (_this._running) {
                var diffTime = new Date().getTime() - _this._time;
                if (diffTime < _this._options.duration) {
                    (_a = _this._doFrameCallback) === null || _a === void 0 ? void 0 : _a.call(_this, diffTime);
                    requestAnimationFrame(step);
                }
                else {
                    _this.stop();
                    _this._currentIterationCount++;
                    if (_this._currentIterationCount < _this._options.iterationCount) {
                        _this.start();
                    }
                }
            }
        };
        requestAnimationFrame(step);
    };
    Animation.prototype.doFrame = function (callback) {
        this._doFrameCallback = callback;
        return this;
    };
    Animation.prototype.setDuration = function (duration) {
        this._options.duration = duration;
        return this;
    };
    Animation.prototype.setIterationCount = function (iterationCount) {
        this._options.iterationCount = iterationCount;
        return this;
    };
    Animation.prototype.start = function () {
        if (!this._running) {
            this._time = new Date().getTime();
            this._loop();
        }
    };
    Animation.prototype.stop = function () {
        var _a;
        if (this._running) {
            (_a = this._doFrameCallback) === null || _a === void 0 ? void 0 : _a.call(this, this._options.duration);
        }
        this._running = false;
    };
    return Animation;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var baseId = 1;
var prevIdTimestamp = new Date().getTime();
function createId(prefix) {
    var timestamp = new Date().getTime();
    if (timestamp === prevIdTimestamp) {
        ++baseId;
    }
    else {
        baseId = 1;
    }
    prevIdTimestamp = timestamp;
    return "".concat(prefix !== null && prefix !== void 0 ? prefix : '').concat(timestamp, "_").concat(baseId);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Create dom
 * @param tagName
 * @param styles
 * @return {*}
 */
function createDom(tagName, styles) {
    var _a;
    var dom = document.createElement(tagName);
    var s = styles !== null && styles !== void 0 ? styles : {};
    for (var key in s) {
        (dom.style)[key] = (_a = s[key]) !== null && _a !== void 0 ? _a : '';
    }
    return dom;
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Binary search for the nearest result
 * @param dataList
 * @param valueKey
 * @param targetValue
 * @return {number}
 */
function binarySearchNearest(dataList, valueKey, targetValue) {
    var left = 0;
    var right = 0;
    for (right = dataList.length - 1; left !== right;) {
        var midIndex = Math.floor((right + left) / 2);
        var mid = right - left;
        var midValue = dataList[midIndex][valueKey];
        if (targetValue === dataList[left][valueKey]) {
            return left;
        }
        if (targetValue === dataList[right][valueKey]) {
            return right;
        }
        if (targetValue === midValue) {
            return midIndex;
        }
        if (targetValue > midValue) {
            left = midIndex;
        }
        else {
            right = midIndex;
        }
        if (mid <= 2) {
            break;
        }
    }
    return left;
}
/**
 * 优化数字
 * @param value
 * @return {number|number}
 */
function nice(value) {
    var exponent = Math.floor(log10(value));
    var exp10 = index10(exponent);
    var f = value / exp10; // 1 <= f < 10
    var nf = 0;
    if (f < 1.5) {
        nf = 1;
    }
    else if (f < 2.5) {
        nf = 2;
    }
    else if (f < 3.5) {
        nf = 3;
    }
    else if (f < 4.5) {
        nf = 4;
    }
    else if (f < 5.5) {
        nf = 5;
    }
    else if (f < 6.5) {
        nf = 6;
    }
    else {
        nf = 8;
    }
    value = nf * exp10;
    return exponent >= -20 ? +value.toFixed(exponent < 0 ? -exponent : 0) : value;
}
/**
 * 四舍五入
 * @param value
 * @param precision
 * @return {number}
 */
function round(value, precision) {
    if (precision == null) {
        precision = 10;
    }
    precision = Math.min(Math.max(0, precision), 20);
    var v = (+value).toFixed(precision);
    return +v;
}
/**
 * 获取小数位数
 * @param value
 * @return {number|number}
 */
function getPrecision(value) {
    var str = value.toString();
    var eIndex = str.indexOf('e');
    if (eIndex > 0) {
        var precision = +str.slice(eIndex + 1);
        return precision < 0 ? -precision : 0;
    }
    else {
        var dotIndex = str.indexOf('.');
        return dotIndex < 0 ? 0 : str.length - 1 - dotIndex;
    }
}
function getMaxMin(dataList, maxKey, minKey) {
    var maxMin = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    dataList.forEach(function (data) {
        var _a, _b;
        maxMin[0] = Math.max(((_a = data[maxKey]) !== null && _a !== void 0 ? _a : data), maxMin[0]);
        maxMin[1] = Math.min(((_b = data[minKey]) !== null && _b !== void 0 ? _b : data), maxMin[1]);
    });
    return maxMin;
}
/**
 * 10为底的对数函数
 * @param value
 * @return {number}
 */
function log10(value) {
    return Math.log(value) / Math.log(10);
}
/**
 * 10的指数函数
 * @param value
 * @return {number}
 */
function index10(value) {
    return Math.pow(10, value);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getDefaultVisibleRange() {
    return { from: 0, to: 0, realFrom: 0, realTo: 0 };
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var BarSpaceLimitConstants = {
    MIN: 1,
    MAX: 50
};
var DEFAULT_BAR_SPACE = 8;
var DEFAULT_OFFSET_RIGHT_DISTANCE = 80;
var GAP_BAR_SPACE_RATIO = 0.88;
var SCALE_MULTIPLIER = 10;
var TimeScaleStore = /** @class */ (function () {
    function TimeScaleStore(chartStore) {
        /**
         * Time format
         */
        this._dateTimeFormat = this._buildDateTimeFormat();
        /**
         * Scale enabled flag
         */
        this._zoomEnabled = true;
        /**
         * Scroll enabled flag
         */
        this._scrollEnabled = true;
        /**
         * Total space of drawing area
         */
        this._totalBarSpace = 0;
        /**
         * Space occupied by a single piece of data
         */
        this._barSpace = DEFAULT_BAR_SPACE;
        /**
         * Distance from the last data to the right of the drawing area
         */
        this._offsetRightDistance = DEFAULT_OFFSET_RIGHT_DISTANCE;
        /**
         * The number of bar to the right of the drawing area from the last data when scrolling starts
         */
        this._startLastBarRightSideDiffBarCount = 0;
        /**
         * Scroll limit role
         */
        this._scrollLimitRole = 0 /* ScrollLimitRole.BarCount */;
        /**
         * Scroll to the leftmost and rightmost visible bar
         */
        this._minVisibleBarCount = { left: 2, right: 2 };
        /**
         * Scroll to the leftmost and rightmost distance
         */
        this._maxOffsetDistance = { left: 50, right: 50 };
        /**
         * Start and end points of visible area data index
         */
        this._visibleRange = getDefaultVisibleRange();
        this._chartStore = chartStore;
        this._gapBarSpace = this._calcGapBarSpace();
        this._lastBarRightSideDiffBarCount = this._offsetRightDistance / this._barSpace;
    }
    TimeScaleStore.prototype._calcGapBarSpace = function () {
        var gapBarSpace;
        if (this._barSpace > 3) {
            gapBarSpace = Math.floor(this._barSpace * GAP_BAR_SPACE_RATIO);
        }
        else {
            gapBarSpace = Math.floor(this._barSpace);
            if (gapBarSpace === this._barSpace) {
                gapBarSpace--;
            }
        }
        if (gapBarSpace % 2 === 0) {
            gapBarSpace--;
        }
        gapBarSpace = Math.max(1, gapBarSpace);
        return gapBarSpace;
    };
    /**
     * adjust visible range
     */
    TimeScaleStore.prototype.adjustVisibleRange = function () {
        var _a, _b;
        var dataList = this._chartStore.getDataList();
        var totalBarCount = dataList.length;
        var visibleBarCount = this._totalBarSpace / this._barSpace;
        var leftMinVisibleBarCount;
        var rightMinVisibleBarCount;
        if (this._scrollLimitRole === 1 /* ScrollLimitRole.Distance */) {
            leftMinVisibleBarCount = (this._totalBarSpace - this._maxOffsetDistance.right) / this._barSpace;
            rightMinVisibleBarCount = (this._totalBarSpace - this._maxOffsetDistance.left) / this._barSpace;
        }
        else {
            leftMinVisibleBarCount = this._minVisibleBarCount.left;
            rightMinVisibleBarCount = this._minVisibleBarCount.right;
        }
        leftMinVisibleBarCount = Math.max(0, leftMinVisibleBarCount);
        rightMinVisibleBarCount = Math.max(0, rightMinVisibleBarCount);
        var maxRightOffsetBarCount = visibleBarCount - Math.min(leftMinVisibleBarCount, totalBarCount);
        if (this._lastBarRightSideDiffBarCount > maxRightOffsetBarCount) {
            this._lastBarRightSideDiffBarCount = maxRightOffsetBarCount;
        }
        var minRightOffsetBarCount = -totalBarCount + Math.min(rightMinVisibleBarCount, totalBarCount);
        if (this._lastBarRightSideDiffBarCount < minRightOffsetBarCount) {
            this._lastBarRightSideDiffBarCount = minRightOffsetBarCount;
        }
        var to = Math.round(this._lastBarRightSideDiffBarCount + totalBarCount + 0.5);
        var realTo = to;
        if (to > totalBarCount) {
            to = totalBarCount;
        }
        var from = Math.round(to - visibleBarCount) - 1;
        if (from < 0) {
            from = 0;
        }
        var realFrom = this._lastBarRightSideDiffBarCount > 0 ? Math.round(totalBarCount + this._lastBarRightSideDiffBarCount - visibleBarCount) - 1 : from;
        this._visibleRange = { from: from, to: to, realFrom: realFrom, realTo: realTo };
        this._chartStore.getActionStore().execute(exports.ActionType.OnVisibleRangeChange, this._visibleRange);
        this._chartStore.adjustVisibleDataList();
        // More processing and loading, more loading if there are callback methods and no data is being loaded
        if (from === 0) {
            var firstData = dataList[0];
            this._chartStore.executeLoadMoreCallback((_a = firstData === null || firstData === void 0 ? void 0 : firstData.timestamp) !== null && _a !== void 0 ? _a : null);
            this._chartStore.executeLoadDataCallback({
                type: exports.LoadDataType.Forward,
                data: firstData !== null && firstData !== void 0 ? firstData : null
            });
        }
        if (to === totalBarCount) {
            this._chartStore.executeLoadDataCallback({
                type: exports.LoadDataType.Backward,
                data: (_b = dataList[totalBarCount - 1]) !== null && _b !== void 0 ? _b : null
            });
        }
    };
    TimeScaleStore.prototype.getDateTimeFormat = function () {
        return this._dateTimeFormat;
    };
    TimeScaleStore.prototype._buildDateTimeFormat = function (timezone) {
        var options = {
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        if (isString(timezone)) {
            options.timeZone = timezone;
        }
        var dateTimeFormat = null;
        try {
            dateTimeFormat = new Intl.DateTimeFormat('en', options);
        }
        catch (e) {
            logWarn('', '', 'Timezone is error!!!');
        }
        return dateTimeFormat;
    };
    TimeScaleStore.prototype.setTimezone = function (timezone) {
        var dateTimeFormat = this._buildDateTimeFormat(timezone);
        if (dateTimeFormat !== null) {
            this._dateTimeFormat = dateTimeFormat;
        }
    };
    TimeScaleStore.prototype.getTimezone = function () {
        return this._dateTimeFormat.resolvedOptions().timeZone;
    };
    TimeScaleStore.prototype.getBarSpace = function () {
        return {
            bar: this._barSpace,
            halfBar: this._barSpace / 2,
            gapBar: this._gapBarSpace,
            halfGapBar: Math.floor(this._gapBarSpace / 2)
        };
    };
    TimeScaleStore.prototype.setBarSpace = function (barSpace, adjustBeforeFunc) {
        if (barSpace < BarSpaceLimitConstants.MIN || barSpace > BarSpaceLimitConstants.MAX || this._barSpace === barSpace) {
            return;
        }
        this._barSpace = barSpace;
        this._gapBarSpace = this._calcGapBarSpace();
        adjustBeforeFunc === null || adjustBeforeFunc === void 0 ? void 0 : adjustBeforeFunc();
        this.adjustVisibleRange();
        this._chartStore.getTooltipStore().recalculateCrosshair(true);
        this._chartStore.getChart().adjustPaneViewport(false, true, true, true);
    };
    TimeScaleStore.prototype.setTotalBarSpace = function (totalSpace) {
        if (this._totalBarSpace !== totalSpace) {
            this._totalBarSpace = totalSpace;
            this.adjustVisibleRange();
            this._chartStore.getTooltipStore().recalculateCrosshair(true);
        }
        return this;
    };
    TimeScaleStore.prototype.setOffsetRightDistance = function (distance, isUpdate) {
        this._offsetRightDistance = this._scrollLimitRole === 1 /* ScrollLimitRole.Distance */ ? Math.min(this._maxOffsetDistance.right, distance) : distance;
        this._lastBarRightSideDiffBarCount = this._offsetRightDistance / this._barSpace;
        if (isUpdate !== null && isUpdate !== void 0 ? isUpdate : false) {
            this.adjustVisibleRange();
            this._chartStore.getTooltipStore().recalculateCrosshair(true);
            this._chartStore.getChart().adjustPaneViewport(false, true, true, true);
        }
        return this;
    };
    TimeScaleStore.prototype.resetOffsetRightDistance = function () {
        this.setOffsetRightDistance(this._offsetRightDistance);
    };
    TimeScaleStore.prototype.getInitialOffsetRightDistance = function () {
        return this._offsetRightDistance;
    };
    TimeScaleStore.prototype.getOffsetRightDistance = function () {
        return Math.max(0, this._lastBarRightSideDiffBarCount * this._barSpace);
    };
    TimeScaleStore.prototype.getLastBarRightSideDiffBarCount = function () {
        return this._lastBarRightSideDiffBarCount;
    };
    TimeScaleStore.prototype.setLastBarRightSideDiffBarCount = function (barCount) {
        this._lastBarRightSideDiffBarCount = barCount;
        return this;
    };
    TimeScaleStore.prototype.setMaxOffsetLeftDistance = function (distance) {
        this._scrollLimitRole = 1 /* ScrollLimitRole.Distance */;
        this._maxOffsetDistance.left = distance;
        return this;
    };
    TimeScaleStore.prototype.setMaxOffsetRightDistance = function (distance) {
        this._scrollLimitRole = 1 /* ScrollLimitRole.Distance */;
        this._maxOffsetDistance.right = distance;
        return this;
    };
    TimeScaleStore.prototype.setLeftMinVisibleBarCount = function (barCount) {
        this._scrollLimitRole = 0 /* ScrollLimitRole.BarCount */;
        this._minVisibleBarCount.left = barCount;
        return this;
    };
    TimeScaleStore.prototype.setRightMinVisibleBarCount = function (barCount) {
        this._scrollLimitRole = 0 /* ScrollLimitRole.BarCount */;
        this._minVisibleBarCount.right = barCount;
        return this;
    };
    TimeScaleStore.prototype.getVisibleRange = function () {
        return this._visibleRange;
    };
    TimeScaleStore.prototype.startScroll = function () {
        this._startLastBarRightSideDiffBarCount = this._lastBarRightSideDiffBarCount;
    };
    TimeScaleStore.prototype.scroll = function (distance) {
        if (!this._scrollEnabled) {
            return;
        }
        var distanceBarCount = distance / this._barSpace;
        var prevLastBarRightSideDistance = this._lastBarRightSideDiffBarCount * this._barSpace;
        this._lastBarRightSideDiffBarCount = this._startLastBarRightSideDiffBarCount - distanceBarCount;
        this.adjustVisibleRange();
        this._chartStore.getTooltipStore().recalculateCrosshair(true);
        this._chartStore.getChart().adjustPaneViewport(false, true, true, true);
        var realDistance = Math.round(prevLastBarRightSideDistance - this._lastBarRightSideDiffBarCount * this._barSpace);
        if (realDistance !== 0) {
            this._chartStore.getActionStore().execute(exports.ActionType.OnScroll, { distance: realDistance });
        }
    };
    TimeScaleStore.prototype.getDataByDataIndex = function (dataIndex) {
        var _a;
        return (_a = this._chartStore.getDataList()[dataIndex]) !== null && _a !== void 0 ? _a : null;
    };
    TimeScaleStore.prototype.coordinateToFloatIndex = function (x) {
        var dataCount = this._chartStore.getDataList().length;
        var deltaFromRight = (this._totalBarSpace - x) / this._barSpace;
        var index = dataCount + this._lastBarRightSideDiffBarCount - deltaFromRight;
        return Math.round(index * 1000000) / 1000000;
    };
    TimeScaleStore.prototype.dataIndexToTimestamp = function (dataIndex) {
        var _a;
        var data = this.getDataByDataIndex(dataIndex);
        return (_a = data === null || data === void 0 ? void 0 : data.timestamp) !== null && _a !== void 0 ? _a : null;
    };
    TimeScaleStore.prototype.timestampToDataIndex = function (timestamp) {
        var dataList = this._chartStore.getDataList();
        if (dataList.length === 0) {
            return 0;
        }
        return binarySearchNearest(dataList, 'timestamp', timestamp);
    };
    TimeScaleStore.prototype.dataIndexToCoordinate = function (dataIndex) {
        var dataCount = this._chartStore.getDataList().length;
        var deltaFromRight = dataCount + this._lastBarRightSideDiffBarCount - dataIndex;
        // return Math.floor(this._totalBarSpace - (deltaFromRight - 0.5) * this._barSpace) - 0.5
        return Math.floor(this._totalBarSpace - (deltaFromRight - 0.5) * this._barSpace);
    };
    TimeScaleStore.prototype.coordinateToDataIndex = function (x) {
        return Math.ceil(this.coordinateToFloatIndex(x)) - 1;
    };
    TimeScaleStore.prototype.zoom = function (scale, coordinate) {
        var _this = this;
        var _a;
        if (!this._zoomEnabled) {
            return;
        }
        var zoomCoordinate = coordinate !== null && coordinate !== void 0 ? coordinate : null;
        if (!isNumber(zoomCoordinate === null || zoomCoordinate === void 0 ? void 0 : zoomCoordinate.x)) {
            var crosshair = this._chartStore.getTooltipStore().getCrosshair();
            zoomCoordinate = { x: (_a = crosshair === null || crosshair === void 0 ? void 0 : crosshair.x) !== null && _a !== void 0 ? _a : this._totalBarSpace / 2 };
        }
        var x = zoomCoordinate.x;
        var floatIndex = this.coordinateToFloatIndex(x);
        var prevBarSpace = this._barSpace;
        var barSpace = this._barSpace + scale * (this._barSpace / SCALE_MULTIPLIER);
        this.setBarSpace(barSpace, function () {
            _this._lastBarRightSideDiffBarCount += (floatIndex - _this.coordinateToFloatIndex(x));
        });
        var realScale = this._barSpace / prevBarSpace;
        if (realScale !== 1) {
            this._chartStore.getActionStore().execute(exports.ActionType.OnZoom, { scale: realScale });
        }
    };
    TimeScaleStore.prototype.setZoomEnabled = function (enabled) {
        this._zoomEnabled = enabled;
        return this;
    };
    TimeScaleStore.prototype.getZoomEnabled = function () {
        return this._zoomEnabled;
    };
    TimeScaleStore.prototype.setScrollEnabled = function (enabled) {
        this._scrollEnabled = enabled;
        return this;
    };
    TimeScaleStore.prototype.getScrollEnabled = function () {
        return this._scrollEnabled;
    };
    TimeScaleStore.prototype.clear = function () {
        this._visibleRange = getDefaultVisibleRange();
    };
    return TimeScaleStore;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * average price
 */
var averagePrice = {
    name: 'AVP',
    shortName: 'AVP',
    series: exports.IndicatorSeries.Price,
    precision: 2,
    figures: [
        { key: 'avp', title: 'AVP: ', type: 'line' }
    ],
    calc: function (dataList) {
        var totalTurnover = 0;
        var totalVolume = 0;
        return dataList.map(function (kLineData) {
            var _a, _b;
            var avp = {};
            var turnover = (_a = kLineData === null || kLineData === void 0 ? void 0 : kLineData.turnover) !== null && _a !== void 0 ? _a : 0;
            var volume = (_b = kLineData === null || kLineData === void 0 ? void 0 : kLineData.volume) !== null && _b !== void 0 ? _b : 0;
            totalTurnover += turnover;
            totalVolume += volume;
            if (totalVolume !== 0) {
                avp.avp = totalTurnover / totalVolume;
            }
            return avp;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var awesomeOscillator = {
    name: 'AO',
    shortName: 'AO',
    calcParams: [5, 34],
    figures: [{
            key: 'ao',
            title: 'AO: ',
            type: 'bar',
            baseValue: 0,
            styles: function (data, indicator, defaultStyles) {
                var _a, _b, _c, _d;
                var prev = data.prev, current = data.current;
                var prevAo = (_b = (_a = prev.indicatorData) === null || _a === void 0 ? void 0 : _a.ao) !== null && _b !== void 0 ? _b : Number.MIN_SAFE_INTEGER;
                var currentAo = (_d = (_c = current.indicatorData) === null || _c === void 0 ? void 0 : _c.ao) !== null && _d !== void 0 ? _d : Number.MIN_SAFE_INTEGER;
                var color;
                if (currentAo > prevAo) {
                    color = formatValue(indicator.styles, 'bars[0].upColor', (defaultStyles.bars)[0].upColor);
                }
                else {
                    color = formatValue(indicator.styles, 'bars[0].downColor', (defaultStyles.bars)[0].downColor);
                }
                var style = currentAo > prevAo ? exports.PolygonType.Stroke : exports.PolygonType.Fill;
                return { color: color, style: style, borderColor: color };
            }
        }],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var maxPeriod = Math.max(params[0], params[1]);
        var shortSum = 0;
        var longSum = 0;
        var short = 0;
        var long = 0;
        return dataList.map(function (kLineData, i) {
            var ao = {};
            var middle = (kLineData.low + kLineData.high) / 2;
            shortSum += middle;
            longSum += middle;
            if (i >= params[0] - 1) {
                short = shortSum / params[0];
                var agoKLineData = dataList[i - (params[0] - 1)];
                shortSum -= ((agoKLineData.low + agoKLineData.high) / 2);
            }
            if (i >= params[1] - 1) {
                long = longSum / params[1];
                var agoKLineData = dataList[i - (params[1] - 1)];
                longSum -= ((agoKLineData.low + agoKLineData.high) / 2);
            }
            if (i >= maxPeriod - 1) {
                ao.ao = short - long;
            }
            return ao;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * BIAS
 * 乖离率=[(当日收盘价-N日平均价)/N日平均价]*100%
 */
var bias = {
    name: 'BIAS',
    shortName: 'BIAS',
    calcParams: [6, 12, 24],
    figures: [
        { key: 'bias1', title: 'BIAS6: ', type: 'line' },
        { key: 'bias2', title: 'BIAS12: ', type: 'line' },
        { key: 'bias3', title: 'BIAS24: ', type: 'line' }
    ],
    regenerateFigures: function (params) {
        return params.map(function (p, i) {
            return { key: "bias".concat(i + 1), title: "BIAS".concat(p, ": "), type: 'line' };
        });
    },
    calc: function (dataList, indicator) {
        var params = indicator.calcParams, figures = indicator.figures;
        var closeSums = [];
        return dataList.map(function (kLineData, i) {
            var bias = {};
            var close = kLineData.close;
            params.forEach(function (p, index) {
                var _a;
                closeSums[index] = ((_a = closeSums[index]) !== null && _a !== void 0 ? _a : 0) + close;
                if (i >= p - 1) {
                    var mean = closeSums[index] / params[index];
                    bias[figures[index].key] = (close - mean) / mean * 100;
                    closeSums[index] -= dataList[i - (p - 1)].close;
                }
            });
            return bias;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 计算布林指标中的标准差
 * @param dataList
 * @param ma
 * @return {number}
 */
function getBollMd(dataList, ma) {
    var dataSize = dataList.length;
    var sum = 0;
    dataList.forEach(function (data) {
        var closeMa = data.close - ma;
        sum += closeMa * closeMa;
    });
    sum = Math.abs(sum);
    return Math.sqrt(sum / dataSize);
}
/**
 * BOLL
 */
var bollingerBands = {
    name: 'BOLL',
    shortName: 'BOLL',
    series: exports.IndicatorSeries.Price,
    calcParams: [20, 2],
    precision: 2,
    shouldOhlc: true,
    figures: [
        { key: 'up', title: 'UP: ', type: 'line' },
        { key: 'mid', title: 'MID: ', type: 'line' },
        { key: 'dn', title: 'DN: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var p = params[0] - 1;
        var closeSum = 0;
        return dataList.map(function (kLineData, i) {
            var close = kLineData.close;
            var boll = {};
            closeSum += close;
            if (i >= p) {
                boll.mid = closeSum / params[0];
                var md = getBollMd(dataList.slice(i - p, i + 1), boll.mid);
                boll.up = boll.mid + params[1] * md;
                boll.dn = boll.mid - params[1] * md;
                closeSum -= dataList[i - p].close;
            }
            return boll;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * BRAR
 * 默认参数是26。
 * 公式N日BR=N日内（H－CY）之和除以N日内（CY－L）之和*100，
 * 其中，H为当日最高价，L为当日最低价，CY为前一交易日的收盘价，N为设定的时间参数。
 * N日AR=(N日内（H－O）之和除以N日内（O－L）之和)*100，
 * 其中，H为当日最高价，L为当日最低价，O为当日开盘价，N为设定的时间参数
 *
 */
var brar = {
    name: 'BRAR',
    shortName: 'BRAR',
    calcParams: [26],
    figures: [
        { key: 'br', title: 'BR: ', type: 'line' },
        { key: 'ar', title: 'AR: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var hcy = 0;
        var cyl = 0;
        var ho = 0;
        var ol = 0;
        return dataList.map(function (kLineData, i) {
            var _a, _b;
            var brar = {};
            var high = kLineData.high;
            var low = kLineData.low;
            var open = kLineData.open;
            var prevClose = ((_a = dataList[i - 1]) !== null && _a !== void 0 ? _a : kLineData).close;
            ho += (high - open);
            ol += (open - low);
            hcy += (high - prevClose);
            cyl += (prevClose - low);
            if (i >= params[0] - 1) {
                if (ol !== 0) {
                    brar.ar = ho / ol * 100;
                }
                else {
                    brar.ar = 0;
                }
                if (cyl !== 0) {
                    brar.br = hcy / cyl * 100;
                }
                else {
                    brar.br = 0;
                }
                var agoKLineData = dataList[i - (params[0] - 1)];
                var agoHigh = agoKLineData.high;
                var agoLow = agoKLineData.low;
                var agoOpen = agoKLineData.open;
                var agoPreClose = ((_b = dataList[i - params[0]]) !== null && _b !== void 0 ? _b : dataList[i - (params[0] - 1)]).close;
                hcy -= (agoHigh - agoPreClose);
                cyl -= (agoPreClose - agoLow);
                ho -= (agoHigh - agoOpen);
                ol -= (agoOpen - agoLow);
            }
            return brar;
        });
    }
};

/**
 * 多空指标
 * 公式: BBI = (MA(CLOSE, M) + MA(CLOSE, N) + MA(CLOSE, O) + MA(CLOSE, P)) / 4
 *
 */
var bullAndBearIndex = {
    name: 'BBI',
    shortName: 'BBI',
    series: exports.IndicatorSeries.Price,
    precision: 2,
    calcParams: [3, 6, 12, 24],
    shouldOhlc: true,
    figures: [
        { key: 'bbi', title: 'BBI: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var maxPeriod = Math.max.apply(Math, __spreadArray([], __read(params), false));
        var closeSums = [];
        var mas = [];
        return dataList.map(function (kLineData, i) {
            var bbi = {};
            var close = kLineData.close;
            params.forEach(function (p, index) {
                var _a;
                closeSums[index] = ((_a = closeSums[index]) !== null && _a !== void 0 ? _a : 0) + close;
                if (i >= p - 1) {
                    mas[index] = closeSums[index] / p;
                    closeSums[index] -= dataList[i - (p - 1)].close;
                }
            });
            if (i >= maxPeriod - 1) {
                var maSum_1 = 0;
                mas.forEach(function (ma) {
                    maSum_1 += ma;
                });
                bbi.bbi = maSum_1 / 4;
            }
            return bbi;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * CCI
 * CCI（N日）=（TP－MA）÷MD÷0.015
 * 其中，TP=（最高价+最低价+收盘价）÷3
 * MA=近N日TP价的累计之和÷N
 * MD=近N日TP - 当前MA绝对值的累计之和÷N
 *
 */
var commodityChannelIndex = {
    name: 'CCI',
    shortName: 'CCI',
    calcParams: [20],
    figures: [
        { key: 'cci', title: 'CCI: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var p = params[0] - 1;
        var tpSum = 0;
        var tpList = [];
        return dataList.map(function (kLineData, i) {
            var cci = {};
            var tp = (kLineData.high + kLineData.low + kLineData.close) / 3;
            tpSum += tp;
            tpList.push(tp);
            if (i >= p) {
                var maTp_1 = tpSum / params[0];
                var sliceTpList = tpList.slice(i - p, i + 1);
                var sum_1 = 0;
                sliceTpList.forEach(function (tp) {
                    sum_1 += Math.abs(tp - maTp_1);
                });
                var md = sum_1 / params[0];
                cci.cci = md !== 0 ? (tp - maTp_1) / md / 0.015 : 0;
                var agoTp = (dataList[i - p].high + dataList[i - p].low + dataList[i - p].close) / 3;
                tpSum -= agoTp;
            }
            return cci;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http:*www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * MID:=REF(HIGH+LOW,1)/2;
 * CR:SUM(MAX(0,HIGH-MID),N)/SUM(MAX(0,MID-LOW),N)*100;
 * MA1:REF(MA(CR,M1),M1/2.5+1);
 * MA2:REF(MA(CR,M2),M2/2.5+1);
 * MA3:REF(MA(CR,M3),M3/2.5+1);
 * MA4:REF(MA(CR,M4),M4/2.5+1);
 * MID赋值:(昨日最高价+昨日最低价)/2
 * 输出带状能量线:0和最高价-MID的较大值的N日累和/0和MID-最低价的较大值的N日累和*100
 * 输出MA1:M1(5)/2.5+1日前的CR的M1(5)日简单移动平均
 * 输出MA2:M2(10)/2.5+1日前的CR的M2(10)日简单移动平均
 * 输出MA3:M3(20)/2.5+1日前的CR的M3(20)日简单移动平均
 * 输出MA4:M4/2.5+1日前的CR的M4日简单移动平均
 *
 */
var currentRatio = {
    name: 'CR',
    shortName: 'CR',
    calcParams: [26, 10, 20, 40, 60],
    figures: [
        { key: 'cr', title: 'CR: ', type: 'line' },
        { key: 'ma1', title: 'MA1: ', type: 'line' },
        { key: 'ma2', title: 'MA2: ', type: 'line' },
        { key: 'ma3', title: 'MA3: ', type: 'line' },
        { key: 'ma4', title: 'MA4: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var ma1ForwardPeriod = Math.ceil(params[1] / 2.5 + 1);
        var ma2ForwardPeriod = Math.ceil(params[2] / 2.5 + 1);
        var ma3ForwardPeriod = Math.ceil(params[3] / 2.5 + 1);
        var ma4ForwardPeriod = Math.ceil(params[4] / 2.5 + 1);
        var ma1Sum = 0;
        var ma1List = [];
        var ma2Sum = 0;
        var ma2List = [];
        var ma3Sum = 0;
        var ma3List = [];
        var ma4Sum = 0;
        var ma4List = [];
        var result = [];
        dataList.forEach(function (kLineData, i) {
            var _a, _b, _c, _d, _e;
            var cr = {};
            var prevData = (_a = dataList[i - 1]) !== null && _a !== void 0 ? _a : kLineData;
            var prevMid = (prevData.high + prevData.close + prevData.low + prevData.open) / 4;
            var highSubPreMid = Math.max(0, kLineData.high - prevMid);
            var preMidSubLow = Math.max(0, prevMid - kLineData.low);
            if (i >= params[0] - 1) {
                if (preMidSubLow !== 0) {
                    cr.cr = highSubPreMid / preMidSubLow * 100;
                }
                else {
                    cr.cr = 0;
                }
                ma1Sum += cr.cr;
                ma2Sum += cr.cr;
                ma3Sum += cr.cr;
                ma4Sum += cr.cr;
                if (i >= params[0] + params[1] - 2) {
                    ma1List.push(ma1Sum / params[1]);
                    if (i >= params[0] + params[1] + ma1ForwardPeriod - 3) {
                        cr.ma1 = ma1List[ma1List.length - 1 - ma1ForwardPeriod];
                    }
                    ma1Sum -= ((_b = result[i - (params[1] - 1)].cr) !== null && _b !== void 0 ? _b : 0);
                }
                if (i >= params[0] + params[2] - 2) {
                    ma2List.push(ma2Sum / params[2]);
                    if (i >= params[0] + params[2] + ma2ForwardPeriod - 3) {
                        cr.ma2 = ma2List[ma2List.length - 1 - ma2ForwardPeriod];
                    }
                    ma2Sum -= ((_c = result[i - (params[2] - 1)].cr) !== null && _c !== void 0 ? _c : 0);
                }
                if (i >= params[0] + params[3] - 2) {
                    ma3List.push(ma3Sum / params[3]);
                    if (i >= params[0] + params[3] + ma3ForwardPeriod - 3) {
                        cr.ma3 = ma3List[ma3List.length - 1 - ma3ForwardPeriod];
                    }
                    ma3Sum -= ((_d = result[i - (params[3] - 1)].cr) !== null && _d !== void 0 ? _d : 0);
                }
                if (i >= params[0] + params[4] - 2) {
                    ma4List.push(ma4Sum / params[4]);
                    if (i >= params[0] + params[4] + ma4ForwardPeriod - 3) {
                        cr.ma4 = ma4List[ma4List.length - 1 - ma4ForwardPeriod];
                    }
                    ma4Sum -= ((_e = result[i - (params[4] - 1)].cr) !== null && _e !== void 0 ? _e : 0);
                }
            }
            result.push(cr);
        });
        return result;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DMA
 * 公式：DIF:MA(CLOSE,N1)-MA(CLOSE,N2);DIFMA:MA(DIF,M)
 */
var differentOfMovingAverage = {
    name: 'DMA',
    shortName: 'DMA',
    calcParams: [10, 50, 10],
    figures: [
        { key: 'dma', title: 'DMA: ', type: 'line' },
        { key: 'ama', title: 'AMA: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var maxPeriod = Math.max(params[0], params[1]);
        var closeSum1 = 0;
        var closeSum2 = 0;
        var dmaSum = 0;
        var result = [];
        dataList.forEach(function (kLineData, i) {
            var _a;
            var dma = {};
            var close = kLineData.close;
            closeSum1 += close;
            closeSum2 += close;
            var ma1 = 0;
            var ma2 = 0;
            if (i >= params[0] - 1) {
                ma1 = closeSum1 / params[0];
                closeSum1 -= dataList[i - (params[0] - 1)].close;
            }
            if (i >= params[1] - 1) {
                ma2 = closeSum2 / params[1];
                closeSum2 -= dataList[i - (params[1] - 1)].close;
            }
            if (i >= maxPeriod - 1) {
                var dif = ma1 - ma2;
                dma.dma = dif;
                dmaSum += dif;
                if (i >= maxPeriod + params[2] - 2) {
                    dma.ama = dmaSum / params[2];
                    dmaSum -= ((_a = result[i - (params[2] - 1)].dma) !== null && _a !== void 0 ? _a : 0);
                }
            }
            result.push(dma);
        });
        return result;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DMI
 *
 * MTR:=EXPMEMA(MAX(MAX(HIGH-LOW,ABS(HIGH-REF(CLOSE,1))),ABS(REF(CLOSE,1)-LOW)),N)
 * HD :=HIGH-REF(HIGH,1);
 * LD :=REF(LOW,1)-LOW;
 * DMP:=EXPMEMA(IF(HD>0&&HD>LD,HD,0),N);
 * DMM:=EXPMEMA(IF(LD>0&&LD>HD,LD,0),N);
 *
 * PDI: DMP*100/MTR;
 * MDI: DMM*100/MTR;
 * ADX: EXPMEMA(ABS(MDI-PDI)/(MDI+PDI)*100,MM);
 * ADXR:EXPMEMA(ADX,MM);
 * 公式含义：
 * MTR赋值:最高价-最低价和最高价-昨收的绝对值的较大值和昨收-最低价的绝对值的较大值的N日指数平滑移动平均
 * HD赋值:最高价-昨日最高价
 * LD赋值:昨日最低价-最低价
 * DMP赋值:如果HD>0并且HD>LD,返回HD,否则返回0的N日指数平滑移动平均
 * DMM赋值:如果LD>0并且LD>HD,返回LD,否则返回0的N日指数平滑移动平均
 * 输出PDI:DMP*100/MTR
 * 输出MDI:DMM*100/MTR
 * 输出ADX:MDI-PDI的绝对值/(MDI+PDI)*100的MM日指数平滑移动平均
 * 输出ADXR:ADX的MM日指数平滑移动平均
 *
 */
var directionalMovementIndex = {
    name: 'DMI',
    shortName: 'DMI',
    calcParams: [14, 6],
    figures: [
        { key: 'pdi', title: 'PDI: ', type: 'line' },
        { key: 'mdi', title: 'MDI: ', type: 'line' },
        { key: 'adx', title: 'ADX: ', type: 'line' },
        { key: 'adxr', title: 'ADXR: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var trSum = 0;
        var hSum = 0;
        var lSum = 0;
        var mtr = 0;
        var dmp = 0;
        var dmm = 0;
        var dxSum = 0;
        var adx = 0;
        var result = [];
        dataList.forEach(function (kLineData, i) {
            var _a, _b;
            var dmi = {};
            var prevKLineData = (_a = dataList[i - 1]) !== null && _a !== void 0 ? _a : kLineData;
            var preClose = prevKLineData.close;
            var high = kLineData.high;
            var low = kLineData.low;
            var hl = high - low;
            var hcy = Math.abs(high - preClose);
            var lcy = Math.abs(preClose - low);
            var hhy = high - prevKLineData.high;
            var lyl = prevKLineData.low - low;
            var tr = Math.max(Math.max(hl, hcy), lcy);
            var h = (hhy > 0 && hhy > lyl) ? hhy : 0;
            var l = (lyl > 0 && lyl > hhy) ? lyl : 0;
            trSum += tr;
            hSum += h;
            lSum += l;
            if (i >= params[0] - 1) {
                if (i > params[0] - 1) {
                    mtr = mtr - mtr / params[0] + tr;
                    dmp = dmp - dmp / params[0] + h;
                    dmm = dmm - dmm / params[0] + l;
                }
                else {
                    mtr = trSum;
                    dmp = hSum;
                    dmm = lSum;
                }
                var pdi = 0;
                var mdi = 0;
                if (mtr !== 0) {
                    pdi = dmp * 100 / mtr;
                    mdi = dmm * 100 / mtr;
                }
                dmi.pdi = pdi;
                dmi.mdi = mdi;
                var dx = 0;
                if (mdi + pdi !== 0) {
                    dx = Math.abs((mdi - pdi)) / (mdi + pdi) * 100;
                }
                dxSum += dx;
                if (i >= params[0] * 2 - 2) {
                    if (i > params[0] * 2 - 2) {
                        adx = (adx * (params[0] - 1) + dx) / params[0];
                    }
                    else {
                        adx = dxSum / params[0];
                    }
                    dmi.adx = adx;
                    if (i >= params[0] * 2 + params[1] - 3) {
                        dmi.adxr = (((_b = result[i - (params[1] - 1)].adx) !== null && _b !== void 0 ? _b : 0) + adx) / 2;
                    }
                }
            }
            result.push(dmi);
        });
        return result;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * EMV 简易波动指标
 * 公式：
 * A=（今日最高+今日最低）/2
 * B=（前日最高+前日最低）/2
 * C=今日最高-今日最低
 * EM=（A-B）*C/今日成交额
 * EMV=N日内EM的累和
 * MAEMV=EMV的M日的简单移动平均
 *
 */
var easeOfMovementValue = {
    name: 'EMV',
    shortName: 'EMV',
    calcParams: [14, 9],
    figures: [
        { key: 'emv', title: 'EMV: ', type: 'line' },
        { key: 'maEmv', title: 'MAEMV: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var emvValueSum = 0;
        var emvValueList = [];
        return dataList.map(function (kLineData, i) {
            var _a;
            var emv = {};
            if (i > 0) {
                var prevKLineData = dataList[i - 1];
                var high = kLineData.high;
                var low = kLineData.low;
                var volume = (_a = kLineData.volume) !== null && _a !== void 0 ? _a : 0;
                var distanceMoved = (high + low) / 2 - (prevKLineData.high + prevKLineData.low) / 2;
                if (volume === 0 || high - low === 0) {
                    emv.emv = 0;
                }
                else {
                    var ratio = volume / 100000000 / (high - low);
                    emv.emv = distanceMoved / ratio;
                }
                emvValueSum += emv.emv;
                emvValueList.push(emv.emv);
                if (i >= params[0]) {
                    emv.maEmv = emvValueSum / params[0];
                    emvValueSum -= emvValueList[i - params[0]];
                }
            }
            return emv;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * EMA 指数移动平均
 */
var exponentialMovingAverage = {
    name: 'EMA',
    shortName: 'EMA',
    series: exports.IndicatorSeries.Price,
    calcParams: [6, 12, 20],
    precision: 2,
    shouldOhlc: true,
    figures: [
        { key: 'ema1', title: 'EMA6: ', type: 'line' },
        { key: 'ema2', title: 'EMA12: ', type: 'line' },
        { key: 'ema3', title: 'EMA20: ', type: 'line' }
    ],
    regenerateFigures: function (params) {
        return params.map(function (p, i) {
            return { key: "ema".concat(i + 1), title: "EMA".concat(p, ": "), type: 'line' };
        });
    },
    calc: function (dataList, indicator) {
        var params = indicator.calcParams, figures = indicator.figures;
        var closeSum = 0;
        var emaValues = [];
        return dataList.map(function (kLineData, i) {
            var ema = {};
            var close = kLineData.close;
            closeSum += close;
            params.forEach(function (p, index) {
                if (i >= p - 1) {
                    if (i > p - 1) {
                        emaValues[index] = (2 * close + (p - 1) * emaValues[index]) / (p + 1);
                    }
                    else {
                        emaValues[index] = closeSum / p;
                    }
                    ema[figures[index].key] = emaValues[index];
                }
            });
            return ema;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * mtm
 * 公式 MTM（N日）=C－CN
 */
var momentum = {
    name: 'MTM',
    shortName: 'MTM',
    calcParams: [12, 6],
    figures: [
        { key: 'mtm', title: 'MTM: ', type: 'line' },
        { key: 'maMtm', title: 'MAMTM: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var mtmSum = 0;
        var result = [];
        dataList.forEach(function (kLineData, i) {
            var _a;
            var mtm = {};
            if (i >= params[0]) {
                var close_1 = kLineData.close;
                var agoClose = dataList[i - params[0]].close;
                mtm.mtm = close_1 - agoClose;
                mtmSum += mtm.mtm;
                if (i >= params[0] + params[1] - 1) {
                    mtm.maMtm = mtmSum / params[1];
                    mtmSum -= ((_a = result[i - (params[1] - 1)].mtm) !== null && _a !== void 0 ? _a : 0);
                }
            }
            result.push(mtm);
        });
        return result;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * MA 移动平均
 */
var movingAverage = {
    name: 'MA',
    shortName: 'MA',
    series: exports.IndicatorSeries.Price,
    calcParams: [5, 10, 30, 60],
    precision: 2,
    shouldOhlc: true,
    figures: [
        { key: 'ma5', title: 'MA5: ', type: 'line' },
        { key: 'ma10', title: 'MA10: ', type: 'line' },
        { key: 'ma30', title: 'MA30: ', type: 'line' },
        { key: 'ma60', title: 'MA60: ', type: 'line' }
    ],
    regenerateFigures: function (params) {
        return params.map(function (p, i) {
            return { key: "ma".concat(i + 1), title: "MA".concat(p, ": "), type: 'line' };
        });
    },
    calc: function (dataList, indicator) {
        var params = indicator.calcParams, figures = indicator.figures;
        var closeSums = [];
        return dataList.map(function (kLineData, i) {
            var ma = {};
            var close = kLineData.close;
            params.forEach(function (p, index) {
                var _a;
                closeSums[index] = ((_a = closeSums[index]) !== null && _a !== void 0 ? _a : 0) + close;
                if (i >= p - 1) {
                    ma[figures[index].key] = closeSums[index] / p;
                    closeSums[index] -= dataList[i - (p - 1)].close;
                }
            });
            return ma;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * MACD：参数快线移动平均、慢线移动平均、移动平均，
 * 默认参数值12、26、9。
 * 公式：⒈首先分别计算出收盘价12日指数平滑移动平均线与26日指数平滑移动平均线，分别记为EMA(12）与EMA(26）。
 * ⒉求这两条指数平滑移动平均线的差，即：DIFF = EMA(SHORT) － EMA(LONG)。
 * ⒊再计算DIFF的M日的平均的指数平滑移动平均线，记为DEA。
 * ⒋最后用DIFF减DEA，得MACD。MACD通常绘制成围绕零轴线波动的柱形图。MACD柱状大于0涨颜色，小于0跌颜色。
 */
var movingAverageConvergenceDivergence = {
    name: 'MACD',
    shortName: 'MACD',
    calcParams: [12, 26, 9],
    figures: [
        { key: 'dif', title: 'DIF: ', type: 'line' },
        { key: 'dea', title: 'DEA: ', type: 'line' },
        {
            key: 'macd',
            title: 'MACD: ',
            type: 'bar',
            baseValue: 0,
            styles: function (data, indicator, defaultStyles) {
                var _a, _b, _c, _d;
                var prev = data.prev, current = data.current;
                var prevMacd = (_b = (_a = prev.indicatorData) === null || _a === void 0 ? void 0 : _a.macd) !== null && _b !== void 0 ? _b : Number.MIN_SAFE_INTEGER;
                var currentMacd = (_d = (_c = current.indicatorData) === null || _c === void 0 ? void 0 : _c.macd) !== null && _d !== void 0 ? _d : Number.MIN_SAFE_INTEGER;
                var color;
                if (currentMacd > 0) {
                    color = formatValue(indicator.styles, 'bars[0].upColor', (defaultStyles.bars)[0].upColor);
                }
                else if (currentMacd < 0) {
                    color = formatValue(indicator.styles, 'bars[0].downColor', (defaultStyles.bars)[0].downColor);
                }
                else {
                    color = formatValue(indicator.styles, 'bars[0].noChangeColor', (defaultStyles.bars)[0].noChangeColor);
                }
                var style = prevMacd < currentMacd ? exports.PolygonType.Stroke : exports.PolygonType.Fill;
                return { style: style, color: color, borderColor: color };
            }
        }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var closeSum = 0;
        var emaShort;
        var emaLong;
        var dif = 0;
        var difSum = 0;
        var dea = 0;
        var maxPeriod = Math.max(params[0], params[1]);
        return dataList.map(function (kLineData, i) {
            var macd = {};
            var close = kLineData.close;
            closeSum += close;
            if (i >= params[0] - 1) {
                if (i > params[0] - 1) {
                    emaShort = (2 * close + (params[0] - 1) * emaShort) / (params[0] + 1);
                }
                else {
                    emaShort = closeSum / params[0];
                }
            }
            if (i >= params[1] - 1) {
                if (i > params[1] - 1) {
                    emaLong = (2 * close + (params[1] - 1) * emaLong) / (params[1] + 1);
                }
                else {
                    emaLong = closeSum / params[1];
                }
            }
            if (i >= maxPeriod - 1) {
                dif = emaShort - emaLong;
                macd.dif = dif;
                difSum += dif;
                if (i >= maxPeriod + params[2] - 2) {
                    if (i > maxPeriod + params[2] - 2) {
                        dea = (dif * 2 + dea * (params[2] - 1)) / (params[2] + 1);
                    }
                    else {
                        dea = difSum / params[2];
                    }
                    macd.macd = (dif - dea) * 2;
                    macd.dea = dea;
                }
            }
            return macd;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * OBV
 * OBV = REF(OBV) + sign * V
 */
var onBalanceVolume = {
    name: 'OBV',
    shortName: 'OBV',
    calcParams: [30],
    figures: [
        { key: 'obv', title: 'OBV: ', type: 'line' },
        { key: 'maObv', title: 'MAOBV: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var obvSum = 0;
        var oldObv = 0;
        var result = [];
        dataList.forEach(function (kLineData, i) {
            var _a, _b, _c, _d;
            var prevKLineData = (_a = dataList[i - 1]) !== null && _a !== void 0 ? _a : kLineData;
            if (kLineData.close < prevKLineData.close) {
                oldObv -= ((_b = kLineData.volume) !== null && _b !== void 0 ? _b : 0);
            }
            else if (kLineData.close > prevKLineData.close) {
                oldObv += ((_c = kLineData.volume) !== null && _c !== void 0 ? _c : 0);
            }
            var obv = { obv: oldObv };
            obvSum += oldObv;
            if (i >= params[0] - 1) {
                obv.maObv = obvSum / params[0];
                obvSum -= ((_d = result[i - (params[0] - 1)].obv) !== null && _d !== void 0 ? _d : 0);
            }
            result.push(obv);
        });
        return result;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 价量趋势指标
 * 公式:
 * X = (CLOSE - REF(CLOSE, 1)) / REF(CLOSE, 1) * VOLUME
 * PVT = SUM(X)
 *
 */
var priceAndVolumeTrend = {
    name: 'PVT',
    shortName: 'PVT',
    figures: [
        { key: 'pvt', title: 'PVT: ', type: 'line' }
    ],
    calc: function (dataList) {
        var sum = 0;
        return dataList.map(function (kLineData, i) {
            var _a, _b;
            var pvt = {};
            var close = kLineData.close;
            var volume = (_a = kLineData.volume) !== null && _a !== void 0 ? _a : 1;
            var prevClose = ((_b = dataList[i - 1]) !== null && _b !== void 0 ? _b : kLineData).close;
            var x = 0;
            var total = prevClose * volume;
            if (total !== 0) {
                x = (close - prevClose) / total;
            }
            sum += x;
            pvt.pvt = sum;
            return pvt;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * PSY
 * 公式：PSY=N日内的上涨天数/N×100%。
 */
var psychologicalLine = {
    name: 'PSY',
    shortName: 'PSY',
    calcParams: [12, 6],
    figures: [
        { key: 'psy', title: 'PSY: ', type: 'line' },
        { key: 'maPsy', title: 'MAPSY: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var upCount = 0;
        var psySum = 0;
        var upList = [];
        var result = [];
        dataList.forEach(function (kLineData, i) {
            var _a, _b;
            var psy = {};
            var prevClose = ((_a = dataList[i - 1]) !== null && _a !== void 0 ? _a : kLineData).close;
            var upFlag = kLineData.close - prevClose > 0 ? 1 : 0;
            upList.push(upFlag);
            upCount += upFlag;
            if (i >= params[0] - 1) {
                psy.psy = upCount / params[0] * 100;
                psySum += psy.psy;
                if (i >= params[0] + params[1] - 2) {
                    psy.maPsy = psySum / params[1];
                    psySum -= ((_b = result[i - (params[1] - 1)].psy) !== null && _b !== void 0 ? _b : 0);
                }
                upCount -= upList[i - (params[0] - 1)];
            }
            result.push(psy);
        });
        return result;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 变动率指标
 * 公式：ROC = (CLOSE - REF(CLOSE, N)) / REF(CLOSE, N)
 */
var rateOfChange = {
    name: 'ROC',
    shortName: 'ROC',
    calcParams: [12, 6],
    figures: [
        { key: 'roc', title: 'ROC: ', type: 'line' },
        { key: 'maRoc', title: 'MAROC: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var result = [];
        var rocSum = 0;
        dataList.forEach(function (kLineData, i) {
            var _a, _b;
            var roc = {};
            if (i >= params[0] - 1) {
                var close_1 = kLineData.close;
                var agoClose = ((_a = dataList[i - params[0]]) !== null && _a !== void 0 ? _a : dataList[i - (params[0] - 1)]).close;
                if (agoClose !== 0) {
                    roc.roc = (close_1 - agoClose) / agoClose * 100;
                }
                else {
                    roc.roc = 0;
                }
                rocSum += roc.roc;
                if (i >= params[0] - 1 + params[1] - 1) {
                    roc.maRoc = rocSum / params[1];
                    rocSum -= ((_b = result[i - (params[1] - 1)].roc) !== null && _b !== void 0 ? _b : 0);
                }
            }
            result.push(roc);
        });
        return result;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * RSI
 * RSI = SUM(MAX(CLOSE - REF(CLOSE,1),0),N) / SUM(ABS(CLOSE - REF(CLOSE,1)),N) × 100
 */
var relativeStrengthIndex = {
    name: 'RSI',
    shortName: 'RSI',
    calcParams: [6, 12, 24],
    figures: [
        { key: 'rsi1', title: 'RSI1: ', type: 'line' },
        { key: 'rsi2', title: 'RSI2: ', type: 'line' },
        { key: 'rsi3', title: 'RSI3: ', type: 'line' }
    ],
    regenerateFigures: function (params) {
        return params.map(function (_, index) {
            var num = index + 1;
            return { key: "rsi".concat(num), title: "RSI".concat(num, ": "), type: 'line' };
        });
    },
    calc: function (dataList, indicator) {
        var params = indicator.calcParams, figures = indicator.figures;
        var sumCloseAs = [];
        var sumCloseBs = [];
        return dataList.map(function (kLineData, i) {
            var _a;
            var rsi = {};
            var prevClose = ((_a = dataList[i - 1]) !== null && _a !== void 0 ? _a : kLineData).close;
            var tmp = kLineData.close - prevClose;
            params.forEach(function (p, index) {
                var _a, _b, _c;
                if (tmp > 0) {
                    sumCloseAs[index] = ((_a = sumCloseAs[index]) !== null && _a !== void 0 ? _a : 0) + tmp;
                }
                else {
                    sumCloseBs[index] = ((_b = sumCloseBs[index]) !== null && _b !== void 0 ? _b : 0) + Math.abs(tmp);
                }
                if (i >= p - 1) {
                    if (sumCloseBs[index] !== 0) {
                        rsi[figures[index].key] = 100 - (100.0 / (1 + sumCloseAs[index] / sumCloseBs[index]));
                    }
                    else {
                        rsi[figures[index].key] = 0;
                    }
                    var agoData = dataList[i - (p - 1)];
                    var agoPreData = (_c = dataList[i - p]) !== null && _c !== void 0 ? _c : agoData;
                    var agoTmp = agoData.close - agoPreData.close;
                    if (agoTmp > 0) {
                        sumCloseAs[index] -= agoTmp;
                    }
                    else {
                        sumCloseBs[index] -= Math.abs(agoTmp);
                    }
                }
            });
            return rsi;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * sma
 */
var simpleMovingAverage = {
    name: 'SMA',
    shortName: 'SMA',
    series: exports.IndicatorSeries.Price,
    calcParams: [12, 2],
    precision: 2,
    figures: [
        { key: 'sma', title: 'SMA: ', type: 'line' }
    ],
    shouldOhlc: true,
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var closeSum = 0;
        var smaValue = 0;
        return dataList.map(function (kLineData, i) {
            var sma = {};
            var close = kLineData.close;
            closeSum += close;
            if (i >= params[0] - 1) {
                if (i > params[0] - 1) {
                    smaValue = (close * params[1] + smaValue * (params[0] - params[1] + 1)) / (params[0] + 1);
                }
                else {
                    smaValue = closeSum / params[0];
                }
                sma.sma = smaValue;
            }
            return sma;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * KDJ
 *
 * 当日K值=2/3×前一日K值+1/3×当日RSV
 * 当日D值=2/3×前一日D值+1/3×当日K值
 * 若无前一日K 值与D值，则可分别用50来代替。
 * J值=3*当日K值-2*当日D值
 */
var stoch = {
    name: 'KDJ',
    shortName: 'KDJ',
    calcParams: [9, 3, 3],
    figures: [
        { key: 'k', title: 'K: ', type: 'line' },
        { key: 'd', title: 'D: ', type: 'line' },
        { key: 'j', title: 'J: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var result = [];
        dataList.forEach(function (kLineData, i) {
            var _a, _b, _c, _d;
            var kdj = {};
            var close = kLineData.close;
            if (i >= params[0] - 1) {
                var lhn = getMaxMin(dataList.slice(i - (params[0] - 1), i + 1), 'high', 'low');
                var hn = lhn[0];
                var ln = lhn[1];
                var hnSubLn = hn - ln;
                var rsv = (close - ln) / (hnSubLn === 0 ? 1 : hnSubLn) * 100;
                kdj.k = ((params[1] - 1) * ((_b = (_a = result[i - 1]) === null || _a === void 0 ? void 0 : _a.k) !== null && _b !== void 0 ? _b : 50) + rsv) / params[1];
                kdj.d = ((params[2] - 1) * ((_d = (_c = result[i - 1]) === null || _c === void 0 ? void 0 : _c.d) !== null && _d !== void 0 ? _d : 50) + kdj.k) / params[2];
                kdj.j = 3.0 * kdj.k - 2.0 * kdj.d;
            }
            result.push(kdj);
        });
        return result;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stopAndReverse = {
    name: 'SAR',
    shortName: 'SAR',
    series: exports.IndicatorSeries.Price,
    calcParams: [2, 2, 20],
    precision: 2,
    shouldOhlc: true,
    figures: [
        {
            key: 'sar',
            title: 'SAR: ',
            type: 'circle',
            styles: function (data, indicator, defaultStyles) {
                var _a, _b;
                var current = data.current;
                var sar = (_b = (_a = current.indicatorData) === null || _a === void 0 ? void 0 : _a.sar) !== null && _b !== void 0 ? _b : Number.MIN_SAFE_INTEGER;
                var kLineData = current.kLineData;
                var halfHL = ((kLineData === null || kLineData === void 0 ? void 0 : kLineData.high) + (kLineData === null || kLineData === void 0 ? void 0 : kLineData.low)) / 2;
                var color = sar < halfHL
                    ? formatValue(indicator.styles, 'circles[0].upColor', (defaultStyles.circles)[0].upColor)
                    : formatValue(indicator.styles, 'circles[0].downColor', (defaultStyles.circles)[0].downColor);
                return { color: color };
            }
        }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var startAf = params[0] / 100;
        var step = params[1] / 100;
        var maxAf = params[2] / 100;
        // 加速因子
        var af = startAf;
        // 极值
        var ep = -100;
        // 判断是上涨还是下跌  false：下跌
        var isIncreasing = false;
        var sar = 0;
        return dataList.map(function (kLineData, i) {
            // 上一个周期的sar
            var preSar = sar;
            var high = kLineData.high;
            var low = kLineData.low;
            if (isIncreasing) {
                // 上涨
                if (ep === -100 || ep < high) {
                    // 重新初始化值
                    ep = high;
                    af = Math.min(af + step, maxAf);
                }
                sar = preSar + af * (ep - preSar);
                var lowMin = Math.min(dataList[Math.max(1, i) - 1].low, low);
                if (sar > kLineData.low) {
                    sar = ep;
                    // 重新初始化值
                    af = startAf;
                    ep = -100;
                    isIncreasing = !isIncreasing;
                }
                else if (sar > lowMin) {
                    sar = lowMin;
                }
            }
            else {
                if (ep === -100 || ep > low) {
                    // 重新初始化值
                    ep = low;
                    af = Math.min(af + step, maxAf);
                }
                sar = preSar + af * (ep - preSar);
                var highMax = Math.max(dataList[Math.max(1, i) - 1].high, high);
                if (sar < kLineData.high) {
                    sar = ep;
                    // 重新初始化值
                    af = 0;
                    ep = -100;
                    isIncreasing = !isIncreasing;
                }
                else if (sar < highMax) {
                    sar = highMax;
                }
            }
            return { sar: sar };
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http:*www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * trix
 *
 * TR=收盘价的N日指数移动平均的N日指数移动平均的N日指数移动平均；
 * TRIX=(TR-昨日TR)/昨日TR*100；
 * MATRIX=TRIX的M日简单移动平均；
 * 默认参数N设为12，默认参数M设为9；
 * 默认参数12、9
 * 公式：MTR:=EMA(EMA(EMA(CLOSE,N),N),N)
 * TRIX:(MTR-REF(MTR,1))/REF(MTR,1)*100;
 * TRMA:MA(TRIX,M)
 *
 */
var tripleExponentiallySmoothedAverage = {
    name: 'TRIX',
    shortName: 'TRIX',
    calcParams: [12, 9],
    figures: [
        { key: 'trix', title: 'TRIX: ', type: 'line' },
        { key: 'maTrix', title: 'MATRIX: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var closeSum = 0;
        var ema1;
        var ema2;
        var oldTr;
        var ema1Sum = 0;
        var ema2Sum = 0;
        var trixSum = 0;
        var result = [];
        dataList.forEach(function (kLineData, i) {
            var _a;
            var trix = {};
            var close = kLineData.close;
            closeSum += close;
            if (i >= params[0] - 1) {
                if (i > params[0] - 1) {
                    ema1 = (2 * close + (params[0] - 1) * ema1) / (params[0] + 1);
                }
                else {
                    ema1 = closeSum / params[0];
                }
                ema1Sum += ema1;
                if (i >= params[0] * 2 - 2) {
                    if (i > params[0] * 2 - 2) {
                        ema2 = (2 * ema1 + (params[0] - 1) * ema2) / (params[0] + 1);
                    }
                    else {
                        ema2 = ema1Sum / params[0];
                    }
                    ema2Sum += ema2;
                    if (i >= params[0] * 3 - 3) {
                        var tr = void 0;
                        var trixValue = 0;
                        if (i > params[0] * 3 - 3) {
                            tr = (2 * ema2 + (params[0] - 1) * oldTr) / (params[0] + 1);
                            trixValue = (tr - oldTr) / oldTr * 100;
                        }
                        else {
                            tr = ema2Sum / params[0];
                        }
                        oldTr = tr;
                        trix.trix = trixValue;
                        trixSum += trixValue;
                        if (i >= params[0] * 3 + params[1] - 4) {
                            trix.maTrix = trixSum / params[1];
                            trixSum -= ((_a = result[i - (params[1] - 1)].trix) !== null && _a !== void 0 ? _a : 0);
                        }
                    }
                }
            }
            result.push(trix);
        });
        return result;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getVolumeFigure() {
    return {
        key: 'volume',
        title: 'VOLUME: ',
        type: 'bar',
        baseValue: 0,
        styles: function (data, indicator, defaultStyles) {
            var kLineData = data.current.kLineData;
            var color = formatValue(indicator.styles, 'bars[0].noChangeColor', (defaultStyles.bars)[0].noChangeColor);
            if (isValid(kLineData)) {
                if (kLineData.close > kLineData.open) {
                    color = formatValue(indicator.styles, 'bars[0].upColor', (defaultStyles.bars)[0].upColor);
                }
                else if (kLineData.close < kLineData.open) {
                    color = formatValue(indicator.styles, 'bars[0].downColor', (defaultStyles.bars)[0].downColor);
                }
            }
            return { color: color };
        }
    };
}
var volume = {
    name: 'VOL',
    shortName: 'VOL',
    series: exports.IndicatorSeries.Volume,
    calcParams: [5, 10, 20],
    shouldFormatBigNumber: true,
    precision: 0,
    minValue: 0,
    figures: [
        { key: 'ma1', title: 'MA5: ', type: 'line' },
        { key: 'ma2', title: 'MA10: ', type: 'line' },
        { key: 'ma3', title: 'MA20: ', type: 'line' },
        getVolumeFigure()
    ],
    regenerateFigures: function (params) {
        var figures = params.map(function (p, i) {
            return { key: "ma".concat(i + 1), title: "MA".concat(p, ": "), type: 'line' };
        });
        figures.push(getVolumeFigure());
        return figures;
    },
    calc: function (dataList, indicator) {
        var params = indicator.calcParams, figures = indicator.figures;
        var volSums = [];
        return dataList.map(function (kLineData, i) {
            var _a;
            var volume = (_a = kLineData.volume) !== null && _a !== void 0 ? _a : 0;
            var vol = { volume: volume };
            params.forEach(function (p, index) {
                var _a, _b;
                volSums[index] = ((_a = volSums[index]) !== null && _a !== void 0 ? _a : 0) + volume;
                if (i >= p - 1) {
                    vol[figures[index].key] = volSums[index] / p;
                    volSums[index] -= ((_b = dataList[i - (p - 1)].volume) !== null && _b !== void 0 ? _b : 0);
                }
            });
            return vol;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * VR
 * VR=（UVS+1/2PVS）/（DVS+1/2PVS）
 * 24天以来凡是股价上涨那一天的成交量都称为AV，将24天内的AV总和相加后称为UVS
 * 24天以来凡是股价下跌那一天的成交量都称为BV，将24天内的BV总和相加后称为DVS
 * 24天以来凡是股价不涨不跌，则那一天的成交量都称为CV，将24天内的CV总和相加后称为PVS
 *
 */
var volumeRatio = {
    name: 'VR',
    shortName: 'VR',
    calcParams: [26, 6],
    figures: [
        { key: 'vr', title: 'VR: ', type: 'line' },
        { key: 'maVr', title: 'MAVR: ', type: 'line' }
    ],
    calc: function (dataList, indicator) {
        var params = indicator.calcParams;
        var uvs = 0;
        var dvs = 0;
        var pvs = 0;
        var vrSum = 0;
        var result = [];
        dataList.forEach(function (kLineData, i) {
            var _a, _b, _c, _d, _e;
            var vr = {};
            var close = kLineData.close;
            var preClose = ((_a = dataList[i - 1]) !== null && _a !== void 0 ? _a : kLineData).close;
            var volume = (_b = kLineData.volume) !== null && _b !== void 0 ? _b : 0;
            if (close > preClose) {
                uvs += volume;
            }
            else if (close < preClose) {
                dvs += volume;
            }
            else {
                pvs += volume;
            }
            if (i >= params[0] - 1) {
                var halfPvs = pvs / 2;
                if (dvs + halfPvs === 0) {
                    vr.vr = 0;
                }
                else {
                    vr.vr = (uvs + halfPvs) / (dvs + halfPvs) * 100;
                }
                vrSum += vr.vr;
                if (i >= params[0] + params[1] - 2) {
                    vr.maVr = vrSum / params[1];
                    vrSum -= ((_c = result[i - (params[1] - 1)].vr) !== null && _c !== void 0 ? _c : 0);
                }
                var agoData = dataList[i - (params[0] - 1)];
                var agoPreData = (_d = dataList[i - params[0]]) !== null && _d !== void 0 ? _d : agoData;
                var agoClose = agoData.close;
                var agoVolume = (_e = agoData.volume) !== null && _e !== void 0 ? _e : 0;
                if (agoClose > agoPreData.close) {
                    uvs -= agoVolume;
                }
                else if (agoClose < agoPreData.close) {
                    dvs -= agoVolume;
                }
                else {
                    pvs -= agoVolume;
                }
            }
            result.push(vr);
        });
        return result;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * WR
 * 公式 WR(N) = 100 * [ C - HIGH(N) ] / [ HIGH(N)-LOW(N) ]
 */
var williamsR = {
    name: 'WR',
    shortName: 'WR',
    calcParams: [6, 10, 14],
    figures: [
        { key: 'wr1', title: 'WR1: ', type: 'line' },
        { key: 'wr2', title: 'WR2: ', type: 'line' },
        { key: 'wr3', title: 'WR3: ', type: 'line' }
    ],
    regenerateFigures: function (params) {
        return params.map(function (_, i) {
            return { key: "wr".concat(i + 1), title: "WR".concat(i + 1, ": "), type: 'line' };
        });
    },
    calc: function (dataList, indicator) {
        var params = indicator.calcParams, figures = indicator.figures;
        return dataList.map(function (kLineData, i) {
            var wr = {};
            var close = kLineData.close;
            params.forEach(function (param, index) {
                var p = param - 1;
                if (i >= p) {
                    var hln = getMaxMin(dataList.slice(i - p, i + 1), 'high', 'low');
                    var hn = hln[0];
                    var ln = hln[1];
                    var hnSubLn = hn - ln;
                    wr[figures[index].key] = hnSubLn === 0 ? 0 : (close - hn) / hnSubLn * 100;
                }
            });
            return wr;
        });
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var indicators = {};
var extensions$2 = [
    averagePrice, awesomeOscillator, bias, bollingerBands, brar,
    bullAndBearIndex, commodityChannelIndex, currentRatio, differentOfMovingAverage,
    directionalMovementIndex, easeOfMovementValue, exponentialMovingAverage, momentum,
    movingAverage, movingAverageConvergenceDivergence, onBalanceVolume, priceAndVolumeTrend,
    psychologicalLine, rateOfChange, relativeStrengthIndex, simpleMovingAverage,
    stoch, stopAndReverse, tripleExponentiallySmoothedAverage, volume, volumeRatio, williamsR
];
extensions$2.forEach(function (indicator) {
    indicators[indicator.name] = IndicatorImp.extend(indicator);
});
function registerIndicator(indicator) {
    indicators[indicator.name] = IndicatorImp.extend(indicator);
}
function getIndicatorClass(name) {
    var _a;
    return (_a = indicators[name]) !== null && _a !== void 0 ? _a : null;
}
function getSupportedIndicators() {
    return Object.keys(indicators);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IndicatorStore = /** @class */ (function () {
    function IndicatorStore(chartStore) {
        this._instances = new Map();
        this._chartStore = chartStore;
    }
    IndicatorStore.prototype._overrideInstance = function (instance, indicator) {
        var shortName = indicator.shortName, series = indicator.series, calcParams = indicator.calcParams, precision = indicator.precision, figures = indicator.figures, minValue = indicator.minValue, maxValue = indicator.maxValue, shouldOhlc = indicator.shouldOhlc, shouldFormatBigNumber = indicator.shouldFormatBigNumber, visible = indicator.visible, zLevel = indicator.zLevel, styles = indicator.styles, extendData = indicator.extendData, regenerateFigures = indicator.regenerateFigures, createTooltipDataSource = indicator.createTooltipDataSource, draw = indicator.draw, calc = indicator.calc;
        var updateFlag = false;
        if (isString(shortName) && instance.setShortName(shortName)) {
            updateFlag = true;
        }
        if (isValid(series) && instance.setSeries(series)) {
            updateFlag = true;
        }
        var calcFlag = false;
        if (isArray(calcParams) && instance.setCalcParams(calcParams)) {
            updateFlag = true;
            calcFlag = true;
        }
        if (isArray(figures) && instance.setFigures(figures)) {
            updateFlag = true;
            calcFlag = true;
        }
        if (minValue !== undefined && instance.setMinValue(minValue)) {
            updateFlag = true;
        }
        if (maxValue !== undefined && instance.setMinValue(maxValue)) {
            updateFlag = true;
        }
        if (isNumber(precision) && instance.setPrecision(precision)) {
            updateFlag = true;
        }
        if (isBoolean(shouldOhlc) && instance.setShouldOhlc(shouldOhlc)) {
            updateFlag = true;
        }
        if (isBoolean(shouldFormatBigNumber) && instance.setShouldFormatBigNumber(shouldFormatBigNumber)) {
            updateFlag = true;
        }
        if (isBoolean(visible) && instance.setVisible(visible)) {
            updateFlag = true;
        }
        var sortFlag = false;
        if (isNumber(zLevel) && instance.setZLevel(zLevel)) {
            updateFlag = true;
            sortFlag = true;
        }
        if (isValid(styles) && instance.setStyles(styles)) {
            updateFlag = true;
        }
        if (extendData !== undefined && instance.setExtendData(extendData)) {
            updateFlag = true;
            calcFlag = true;
        }
        if (regenerateFigures !== undefined && instance.setRegenerateFigures(regenerateFigures)) {
            updateFlag = true;
        }
        if (createTooltipDataSource !== undefined && instance.setCreateTooltipDataSource(createTooltipDataSource)) {
            updateFlag = true;
        }
        if (draw !== undefined && instance.setDraw(draw)) {
            updateFlag = true;
        }
        if (isFunction(calc)) {
            instance.calc = calc;
            calcFlag = true;
        }
        return [updateFlag, calcFlag, sortFlag];
    };
    IndicatorStore.prototype._sort = function (paneId) {
        var _a;
        if (isString(paneId)) {
            (_a = this._instances.get(paneId)) === null || _a === void 0 ? void 0 : _a.sort(function (i1, i2) { return i1.zLevel - i2.zLevel; });
        }
        else {
            this._instances.forEach(function (paneInstances) {
                paneInstances.sort(function (i1, i2) { return i1.zLevel - i2.zLevel; });
            });
        }
    };
    IndicatorStore.prototype.addInstance = function (indicator, paneId, isStack) {
        return __awaiter(this, void 0, void 0, function () {
            var name, paneInstances, instance_1, IndicatorClazz, instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = indicator.name;
                        paneInstances = this._instances.get(paneId);
                        if (!isValid(paneInstances)) return [3 /*break*/, 2];
                        instance_1 = paneInstances.find(function (ins) { return ins.name === name; });
                        if (!isValid(instance_1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.reject(new Error('Duplicate indicators.'))];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!isValid(paneInstances)) {
                            paneInstances = [];
                        }
                        IndicatorClazz = getIndicatorClass(name);
                        instance = new IndicatorClazz();
                        this.synchronizeSeriesPrecision(instance);
                        this._overrideInstance(instance, indicator);
                        if (!isStack) {
                            paneInstances = [];
                        }
                        paneInstances.push(instance);
                        this._instances.set(paneId, paneInstances);
                        this._sort(paneId);
                        return [4 /*yield*/, instance.calcIndicator(this._chartStore.getDataList())];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    IndicatorStore.prototype.getInstances = function (paneId) {
        var _a;
        return (_a = this._instances.get(paneId)) !== null && _a !== void 0 ? _a : [];
    };
    IndicatorStore.prototype.removeInstance = function (paneId, name) {
        var _a;
        var removed = false;
        var paneInstances = this._instances.get(paneId);
        if (isValid(paneInstances)) {
            if (isString(name)) {
                var index = paneInstances.findIndex(function (ins) { return ins.name === name; });
                if (index > -1) {
                    paneInstances.splice(index, 1);
                    removed = true;
                }
            }
            else {
                this._instances.set(paneId, []);
                removed = true;
            }
            if (((_a = this._instances.get(paneId)) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                this._instances.delete(paneId);
            }
        }
        return removed;
    };
    IndicatorStore.prototype.hasInstances = function (paneId) {
        return this._instances.has(paneId);
    };
    IndicatorStore.prototype.calcInstance = function (name, paneId) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, paneInstances, instance, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tasks = [];
                        if (isString(name)) {
                            if (isString(paneId)) {
                                paneInstances = this._instances.get(paneId);
                                if (isValid(paneInstances)) {
                                    instance = paneInstances.find(function (ins) { return ins.name === name; });
                                    if (isValid(instance)) {
                                        tasks.push(instance.calcIndicator(this._chartStore.getDataList()));
                                    }
                                }
                            }
                            else {
                                this._instances.forEach(function (paneInstances) {
                                    var instance = paneInstances.find(function (ins) { return ins.name === name; });
                                    if (isValid(instance)) {
                                        tasks.push(instance.calcIndicator(_this._chartStore.getDataList()));
                                    }
                                });
                            }
                        }
                        else {
                            this._instances.forEach(function (paneInstances) {
                                paneInstances.forEach(function (instance) {
                                    tasks.push(instance.calcIndicator(_this._chartStore.getDataList()));
                                });
                            });
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.includes(true)];
                }
            });
        });
    };
    IndicatorStore.prototype.getInstanceByPaneId = function (paneId, name) {
        var _a, _b;
        var createMapping = function (instances) {
            var mapping = new Map();
            instances.forEach(function (ins) {
                mapping.set(ins.name, ins);
            });
            return mapping;
        };
        if (isString(paneId)) {
            var paneInstances = (_a = this._instances.get(paneId)) !== null && _a !== void 0 ? _a : [];
            if (isString(name)) {
                return (_b = paneInstances === null || paneInstances === void 0 ? void 0 : paneInstances.find(function (ins) { return ins.name === name; })) !== null && _b !== void 0 ? _b : null;
            }
            return createMapping(paneInstances);
        }
        var mapping = new Map();
        this._instances.forEach(function (instances, paneId) {
            mapping.set(paneId, createMapping(instances));
        });
        return mapping;
    };
    IndicatorStore.prototype.synchronizeSeriesPrecision = function (indicator) {
        var _a = this._chartStore.getPrecision(), pricePrecision = _a.price, volumePrecision = _a.volume;
        var synchronize = function (instance) {
            switch (instance.series) {
                case exports.IndicatorSeries.Price: {
                    instance.setPrecision(pricePrecision, true);
                    break;
                }
                case exports.IndicatorSeries.Volume: {
                    instance.setPrecision(volumePrecision, true);
                    break;
                }
            }
        };
        if (isValid(indicator)) {
            synchronize(indicator);
        }
        else {
            this._instances.forEach(function (paneInstances) {
                paneInstances.forEach(function (instance) {
                    synchronize(instance);
                });
            });
        }
    };
    IndicatorStore.prototype.override = function (indicator, paneId) {
        return __awaiter(this, void 0, void 0, function () {
            var name, instances, paneInstances, onlyUpdateFlag, tasks, sortFlag, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = indicator.name;
                        instances = new Map();
                        if (paneId !== null) {
                            paneInstances = this._instances.get(paneId);
                            if (isValid(paneInstances)) {
                                instances.set(paneId, paneInstances);
                            }
                        }
                        else {
                            instances = this._instances;
                        }
                        onlyUpdateFlag = false;
                        tasks = [];
                        sortFlag = false;
                        instances.forEach(function (paneInstances) {
                            var instance = paneInstances.find(function (ins) { return ins.name === name; });
                            if (isValid(instance)) {
                                var overrideResult = _this._overrideInstance(instance, indicator);
                                if (overrideResult[2]) {
                                    sortFlag = true;
                                }
                                if (overrideResult[1]) {
                                    tasks.push(instance.calcIndicator(_this._chartStore.getDataList()));
                                }
                                else {
                                    if (overrideResult[0]) {
                                        onlyUpdateFlag = true;
                                    }
                                }
                            }
                        });
                        if (sortFlag) {
                            this._sort();
                        }
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, [onlyUpdateFlag, result.includes(true)]];
                }
            });
        });
    };
    return IndicatorStore;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TooltipStore = /** @class */ (function () {
    function TooltipStore(chartStore) {
        this._crosshair = {};
        this._activeIcon = null;
        this._chartStore = chartStore;
    }
    /**
      * 设置十字光标点信息
      * @param crosshair
      * @param options
      */
    TooltipStore.prototype.setCrosshair = function (crosshair, options) {
        var _a = options !== null && options !== void 0 ? options : {}, notInvalidate = _a.notInvalidate, notExecuteAction = _a.notExecuteAction;
        var dataList = this._chartStore.getDataList();
        var cr = crosshair !== null && crosshair !== void 0 ? crosshair : {};
        var realDataIndex;
        var dataIndex;
        if (isNumber(cr.x)) {
            realDataIndex = this._chartStore.getTimeScaleStore().coordinateToDataIndex(cr.x);
            if (realDataIndex < 0) {
                dataIndex = 0;
            }
            else if (realDataIndex > dataList.length - 1) {
                dataIndex = dataList.length - 1;
            }
            else {
                dataIndex = realDataIndex;
            }
        }
        else {
            realDataIndex = dataList.length - 1;
            dataIndex = realDataIndex;
        }
        var kLineData = dataList[dataIndex];
        var realX = this._chartStore.getTimeScaleStore().dataIndexToCoordinate(realDataIndex);
        var prevCrosshair = { x: this._crosshair.x, y: this._crosshair.y, paneId: this._crosshair.paneId };
        this._crosshair = __assign(__assign({}, cr), { realX: realX, kLineData: kLineData, realDataIndex: realDataIndex, dataIndex: dataIndex });
        if (prevCrosshair.x !== cr.x || prevCrosshair.y !== cr.y || prevCrosshair.paneId !== cr.paneId) {
            if (kLineData !== null && !(notExecuteAction !== null && notExecuteAction !== void 0 ? notExecuteAction : false)) {
                this._chartStore.getChart().crosshairChange(this._crosshair);
            }
            if (!(notInvalidate !== null && notInvalidate !== void 0 ? notInvalidate : false)) {
                this._chartStore.getChart().updatePane(1 /* UpdateLevel.Overlay */);
            }
        }
    };
    /**
     * 重新计算十字光标
     * @param notInvalidate
     */
    TooltipStore.prototype.recalculateCrosshair = function (notInvalidate) {
        this.setCrosshair(this._crosshair, { notInvalidate: notInvalidate });
    };
    /**
     * 获取crosshair信息
     * @returns
     */
    TooltipStore.prototype.getCrosshair = function () {
        return this._crosshair;
    };
    TooltipStore.prototype.setActiveIcon = function (icon) {
        this._activeIcon = icon !== null && icon !== void 0 ? icon : null;
    };
    TooltipStore.prototype.getActiveIcon = function () {
        return this._activeIcon;
    };
    TooltipStore.prototype.clear = function () {
        this.setCrosshair({}, { notInvalidate: true });
        this.setActiveIcon();
    };
    return TooltipStore;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fibonacciLine = {
    name: 'fibonacciLine',
    totalStep: 3,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var _b;
        var coordinates = _a.coordinates, bounding = _a.bounding, overlay = _a.overlay, precision = _a.precision, thousandsSeparator = _a.thousandsSeparator, decimalFoldThreshold = _a.decimalFoldThreshold, yAxis = _a.yAxis;
        var points = overlay.points;
        if (coordinates.length > 0) {
            var currentPrecision_1 = ((_b = yAxis === null || yAxis === void 0 ? void 0 : yAxis.isInCandle()) !== null && _b !== void 0 ? _b : true) ? precision.price : precision.excludePriceVolumeMax;
            var lines_1 = [];
            var texts_1 = [];
            var startX_1 = 0;
            var endX_1 = bounding.width;
            if (coordinates.length > 1 && isNumber(points[0].value) && isNumber(points[1].value)) {
                var percents = [1, 0.786, 0.618, 0.5, 0.382, 0.236, 0];
                var yDif_1 = coordinates[0].y - coordinates[1].y;
                var valueDif_1 = points[0].value - points[1].value;
                percents.forEach(function (percent) {
                    var _a;
                    var y = coordinates[1].y + yDif_1 * percent;
                    var value = formatFoldDecimal(formatThousands((((_a = points[1].value) !== null && _a !== void 0 ? _a : 0) + valueDif_1 * percent).toFixed(currentPrecision_1), thousandsSeparator), decimalFoldThreshold);
                    lines_1.push({ coordinates: [{ x: startX_1, y: y }, { x: endX_1, y: y }] });
                    texts_1.push({
                        x: startX_1,
                        y: y,
                        text: "".concat(value, " (").concat((percent * 100).toFixed(1), "%)"),
                        baseline: 'bottom'
                    });
                });
            }
            return [
                {
                    type: 'line',
                    attrs: lines_1
                }, {
                    type: 'text',
                    isCheckEvent: false,
                    attrs: texts_1
                }
            ];
        }
        return [];
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var horizontalRayLine = {
    name: 'horizontalRayLine',
    totalStep: 3,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates, bounding = _a.bounding;
        var coordinate = { x: 0, y: coordinates[0].y };
        if (isValid(coordinates[1]) && coordinates[0].x < coordinates[1].x) {
            coordinate.x = bounding.width;
        }
        return [
            {
                type: 'line',
                attrs: { coordinates: [coordinates[0], coordinate] }
            }
        ];
    },
    performEventPressedMove: function (_a) {
        var points = _a.points, performPoint = _a.performPoint;
        points[0].value = performPoint.value;
        points[1].value = performPoint.value;
    },
    performEventMoveForDrawing: function (_a) {
        var currentStep = _a.currentStep, points = _a.points, performPoint = _a.performPoint;
        if (currentStep === 2) {
            points[0].value = performPoint.value;
        }
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var horizontalSegment = {
    name: 'horizontalSegment',
    totalStep: 3,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates;
        var lines = [];
        if (coordinates.length === 2) {
            lines.push({ coordinates: coordinates });
        }
        return [
            {
                type: 'line',
                attrs: lines
            }
        ];
    },
    performEventPressedMove: function (_a) {
        var points = _a.points, performPoint = _a.performPoint;
        points[0].value = performPoint.value;
        points[1].value = performPoint.value;
    },
    performEventMoveForDrawing: function (_a) {
        var currentStep = _a.currentStep, points = _a.points, performPoint = _a.performPoint;
        if (currentStep === 2) {
            points[0].value = performPoint.value;
        }
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var horizontalStraightLine = {
    name: 'horizontalStraightLine',
    totalStep: 2,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates, bounding = _a.bounding;
        return [{
                type: 'line',
                attrs: {
                    coordinates: [
                        {
                            x: 0,
                            y: coordinates[0].y
                        }, {
                            x: bounding.width,
                            y: coordinates[0].y
                        }
                    ]
                }
            }];
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Eventful = /** @class */ (function () {
    function Eventful() {
        this._children = [];
        this._callbacks = new Map();
    }
    Eventful.prototype.registerEvent = function (name, callback) {
        this._callbacks.set(name, callback);
        return this;
    };
    Eventful.prototype.onEvent = function (name, event, other) {
        var callback = this._callbacks.get(name);
        if (isValid(callback) && this.checkEventOn(event)) {
            return callback(event, other);
        }
        return false;
    };
    Eventful.prototype.checkEventOn = function (event) {
        var e_1, _a;
        try {
            for (var _b = __values(this._children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var eventful = _c.value;
                if (eventful.checkEventOn(event)) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    Eventful.prototype.dispatchEvent = function (name, event, other) {
        var start = this._children.length - 1;
        if (start > -1) {
            for (var i = start; i > -1; i--) {
                if (this._children[i].dispatchEvent(name, event, other)) {
                    return true;
                }
            }
        }
        return this.onEvent(name, event, other);
    };
    Eventful.prototype.addChild = function (eventful) {
        this._children.push(eventful);
        return this;
    };
    Eventful.prototype.clear = function () {
        this._children = [];
    };
    return Eventful;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEVIATION = 2;
var FigureImp = /** @class */ (function (_super) {
    __extends(FigureImp, _super);
    function FigureImp(figure) {
        var _this = _super.call(this) || this;
        _this.attrs = figure.attrs;
        _this.styles = figure.styles;
        return _this;
    }
    FigureImp.prototype.checkEventOn = function (event) {
        return this.checkEventOnImp(event, this.attrs, this.styles);
    };
    FigureImp.prototype.setAttrs = function (attrs) {
        this.attrs = attrs;
        return this;
    };
    FigureImp.prototype.setStyles = function (styles) {
        this.styles = styles;
        return this;
    };
    FigureImp.prototype.draw = function (ctx) {
        this.drawImp(ctx, this.attrs, this.styles);
    };
    FigureImp.extend = function (figure) {
        var Custom = /** @class */ (function (_super) {
            __extends(Custom, _super);
            function Custom() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Custom.prototype.checkEventOnImp = function (coordinate, attrs, styles) {
                return figure.checkEventOn(coordinate, attrs, styles);
            };
            Custom.prototype.drawImp = function (ctx, attrs, styles) {
                figure.draw(ctx, attrs, styles);
            };
            return Custom;
        }(FigureImp));
        return Custom;
    };
    return FigureImp;
}(Eventful));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function checkCoordinateOnLine(coordinate, attrs) {
    var lines = [];
    lines = lines.concat(attrs);
    for (var i = 0; i < lines.length; i++) {
        var coordinates = lines[i].coordinates;
        if (coordinates.length > 1) {
            for (var i_1 = 1; i_1 < coordinates.length; i_1++) {
                var prevCoordinate = coordinates[i_1 - 1];
                var currentCoordinate = coordinates[i_1];
                if (prevCoordinate.x === currentCoordinate.x) {
                    if (Math.abs(prevCoordinate.y - coordinate.y) + Math.abs(currentCoordinate.y - coordinate.y) - Math.abs(prevCoordinate.y - currentCoordinate.y) < DEVIATION + DEVIATION &&
                        Math.abs(coordinate.x - prevCoordinate.x) < DEVIATION) {
                        return true;
                    }
                }
                else {
                    var kb = getLinearSlopeIntercept(prevCoordinate, currentCoordinate);
                    var y = getLinearYFromSlopeIntercept(kb, coordinate);
                    var yDif = Math.abs(y - coordinate.y);
                    if (Math.abs(prevCoordinate.x - coordinate.x) + Math.abs(currentCoordinate.x - coordinate.x) - Math.abs(prevCoordinate.x - currentCoordinate.x) < DEVIATION + DEVIATION &&
                        yDif * yDif / (kb[0] * kb[0] + 1) < DEVIATION * DEVIATION) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
function getLinearYFromSlopeIntercept(kb, coordinate) {
    if (kb !== null) {
        return coordinate.x * kb[0] + kb[1];
    }
    return coordinate.y;
}
/**
 * 获取点在两点决定的一次函数上的y值
 * @param coordinate1
 * @param coordinate2
 * @param targetCoordinate
 */
function getLinearYFromCoordinates(coordinate1, coordinate2, targetCoordinate) {
    var kb = getLinearSlopeIntercept(coordinate1, coordinate2);
    return getLinearYFromSlopeIntercept(kb, targetCoordinate);
}
function getLinearSlopeIntercept(coordinate1, coordinate2) {
    var difX = coordinate1.x - coordinate2.x;
    if (difX !== 0) {
        var k = (coordinate1.y - coordinate2.y) / difX;
        var b = coordinate1.y - k * coordinate1.x;
        return [k, b];
    }
    return null;
}
function lineTo(ctx, coordinates, smooth) {
    var length = coordinates.length;
    var smoothParam = isNumber(smooth) ? (smooth > 0 && smooth < 1 ? smooth : 0) : (smooth ? 0.5 : 0);
    if ((smoothParam > 0) && length > 2) {
        var cpx0 = coordinates[0].x;
        var cpy0 = coordinates[0].y;
        for (var i = 1; i < length - 1; i++) {
            var prevCoordinate = coordinates[i - 1];
            var coordinate = coordinates[i];
            var nextCoordinate = coordinates[i + 1];
            var dx01 = coordinate.x - prevCoordinate.x;
            var dy01 = coordinate.y - prevCoordinate.y;
            var dx12 = nextCoordinate.x - coordinate.x;
            var dy12 = nextCoordinate.y - coordinate.y;
            var dx02 = nextCoordinate.x - prevCoordinate.x;
            var dy02 = nextCoordinate.y - prevCoordinate.y;
            var prevSegmentLength = Math.sqrt(dx01 * dx01 + dy01 * dy01);
            var nextSegmentLength = Math.sqrt(dx12 * dx12 + dy12 * dy12);
            var segmentLengthRatio = nextSegmentLength / (nextSegmentLength + prevSegmentLength);
            var nextCpx = coordinate.x + dx02 * smoothParam * segmentLengthRatio;
            var nextCpy = coordinate.y + dy02 * smoothParam * segmentLengthRatio;
            nextCpx = Math.min(nextCpx, Math.max(nextCoordinate.x, coordinate.x));
            nextCpy = Math.min(nextCpy, Math.max(nextCoordinate.y, coordinate.y));
            nextCpx = Math.max(nextCpx, Math.min(nextCoordinate.x, coordinate.x));
            nextCpy = Math.max(nextCpy, Math.min(nextCoordinate.y, coordinate.y));
            dx02 = nextCpx - coordinate.x;
            dy02 = nextCpy - coordinate.y;
            var cpx1 = coordinate.x - dx02 * prevSegmentLength / nextSegmentLength;
            var cpy1 = coordinate.y - dy02 * prevSegmentLength / nextSegmentLength;
            cpx1 = Math.min(cpx1, Math.max(prevCoordinate.x, coordinate.x));
            cpy1 = Math.min(cpy1, Math.max(prevCoordinate.y, coordinate.y));
            cpx1 = Math.max(cpx1, Math.min(prevCoordinate.x, coordinate.x));
            cpy1 = Math.max(cpy1, Math.min(prevCoordinate.y, coordinate.y));
            dx02 = coordinate.x - cpx1;
            dy02 = coordinate.y - cpy1;
            nextCpx = coordinate.x + dx02 * nextSegmentLength / prevSegmentLength;
            nextCpy = coordinate.y + dy02 * nextSegmentLength / prevSegmentLength;
            ctx.bezierCurveTo(cpx0, cpy0, cpx1, cpy1, coordinate.x, coordinate.y);
            cpx0 = nextCpx;
            cpy0 = nextCpy;
        }
        var lastCoordinate = coordinates[length - 1];
        ctx.bezierCurveTo(cpx0, cpy0, lastCoordinate.x, lastCoordinate.y, lastCoordinate.x, lastCoordinate.y);
    }
    else {
        for (var i = 1; i < length; i++) {
            ctx.lineTo(coordinates[i].x, coordinates[i].y);
        }
    }
}
function drawLine(ctx, attrs, styles) {
    var lines = [];
    lines = lines.concat(attrs);
    var _a = styles.style, style = _a === void 0 ? exports.LineType.Solid : _a, _b = styles.smooth, smooth = _b === void 0 ? false : _b, _c = styles.size, size = _c === void 0 ? 1 : _c, _d = styles.color, color = _d === void 0 ? 'currentColor' : _d, _e = styles.dashedValue, dashedValue = _e === void 0 ? [2, 2] : _e;
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    if (style === exports.LineType.Dashed) {
        ctx.setLineDash(dashedValue);
    }
    else {
        ctx.setLineDash([]);
    }
    var correction = size % 2 === 1 ? 0.5 : 0;
    lines.forEach(function (_a) {
        var coordinates = _a.coordinates;
        if (coordinates.length > 1) {
            if (coordinates.length === 2 &&
                (coordinates[0].x === coordinates[1].x ||
                    coordinates[0].y === coordinates[1].y)) {
                ctx.beginPath();
                if (coordinates[0].x === coordinates[1].x) {
                    ctx.moveTo(coordinates[0].x + correction, coordinates[0].y);
                    ctx.lineTo(coordinates[1].x + correction, coordinates[1].y);
                }
                else {
                    ctx.moveTo(coordinates[0].x, coordinates[0].y + correction);
                    ctx.lineTo(coordinates[1].x, coordinates[1].y + correction);
                }
                ctx.stroke();
                ctx.closePath();
            }
            else {
                ctx.save();
                if (size % 2 === 1) {
                    ctx.translate(0.5, 0.5);
                }
                ctx.beginPath();
                ctx.moveTo(coordinates[0].x, coordinates[0].y);
                lineTo(ctx, coordinates, smooth);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            }
        }
    });
}
var line = {
    name: 'line',
    checkEventOn: checkCoordinateOnLine,
    draw: function (ctx, attrs, styles) {
        drawLine(ctx, attrs, styles);
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * 获取平行线
 * @param coordinates
 * @param bounding
 * @param extendParallelLineCount
 * @returns {Array}
 */
function getParallelLines(coordinates, bounding, extendParallelLineCount) {
    var count = extendParallelLineCount !== null && extendParallelLineCount !== void 0 ? extendParallelLineCount : 0;
    var lines = [];
    if (coordinates.length > 1) {
        if (coordinates[0].x === coordinates[1].x) {
            var startY = 0;
            var endY = bounding.height;
            lines.push({ coordinates: [{ x: coordinates[0].x, y: startY }, { x: coordinates[0].x, y: endY }] });
            if (coordinates.length > 2) {
                lines.push({ coordinates: [{ x: coordinates[2].x, y: startY }, { x: coordinates[2].x, y: endY }] });
                var distance = coordinates[0].x - coordinates[2].x;
                for (var i = 0; i < count; i++) {
                    var d = distance * (i + 1);
                    lines.push({ coordinates: [{ x: coordinates[0].x + d, y: startY }, { x: coordinates[0].x + d, y: endY }] });
                }
            }
        }
        else {
            var startX = 0;
            var endX = bounding.width;
            var kb = getLinearSlopeIntercept(coordinates[0], coordinates[1]);
            var k = kb[0];
            var b = kb[1];
            lines.push({ coordinates: [{ x: startX, y: startX * k + b }, { x: endX, y: endX * k + b }] });
            if (coordinates.length > 2) {
                var b1 = coordinates[2].y - k * coordinates[2].x;
                lines.push({ coordinates: [{ x: startX, y: startX * k + b1 }, { x: endX, y: endX * k + b1 }] });
                var distance = b - b1;
                for (var i = 0; i < count; i++) {
                    var b2 = b + distance * (i + 1);
                    lines.push({ coordinates: [{ x: startX, y: startX * k + b2 }, { x: endX, y: endX * k + b2 }] });
                }
            }
        }
    }
    return lines;
}
var parallelStraightLine = {
    name: 'parallelStraightLine',
    totalStep: 4,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates, bounding = _a.bounding;
        return [
            {
                type: 'line',
                attrs: getParallelLines(coordinates, bounding)
            }
        ];
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var priceChannelLine = {
    name: 'priceChannelLine',
    totalStep: 4,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates, bounding = _a.bounding;
        return [
            {
                type: 'line',
                attrs: getParallelLines(coordinates, bounding, 1)
            }
        ];
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var priceLine = {
    name: 'priceLine',
    totalStep: 2,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var _b;
        var coordinates = _a.coordinates, bounding = _a.bounding, precision = _a.precision, overlay = _a.overlay, thousandsSeparator = _a.thousandsSeparator, decimalFoldThreshold = _a.decimalFoldThreshold, yAxis = _a.yAxis;
        var _c = (overlay.points)[0].value, value = _c === void 0 ? 0 : _c;
        var currentPrecision = ((_b = yAxis === null || yAxis === void 0 ? void 0 : yAxis.isInCandle()) !== null && _b !== void 0 ? _b : true) ? precision.price : precision.excludePriceVolumeMax;
        return [
            {
                type: 'line',
                attrs: { coordinates: [coordinates[0], { x: bounding.width, y: coordinates[0].y }] }
            },
            {
                type: 'text',
                ignoreEvent: true,
                attrs: {
                    x: coordinates[0].x,
                    y: coordinates[0].y,
                    text: formatFoldDecimal(formatThousands(value.toFixed(currentPrecision), thousandsSeparator), decimalFoldThreshold),
                    baseline: 'bottom'
                }
            }
        ];
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getRayLine(coordinates, bounding) {
    if (coordinates.length > 1) {
        var coordinate = void 0;
        if (coordinates[0].x === coordinates[1].x && coordinates[0].y !== coordinates[1].y) {
            if (coordinates[0].y < coordinates[1].y) {
                coordinate = {
                    x: coordinates[0].x,
                    y: bounding.height
                };
            }
            else {
                coordinate = {
                    x: coordinates[0].x,
                    y: 0
                };
            }
        }
        else if (coordinates[0].x > coordinates[1].x) {
            coordinate = {
                x: 0,
                y: getLinearYFromCoordinates(coordinates[0], coordinates[1], { x: 0, y: coordinates[0].y })
            };
        }
        else {
            coordinate = {
                x: bounding.width,
                y: getLinearYFromCoordinates(coordinates[0], coordinates[1], { x: bounding.width, y: coordinates[0].y })
            };
        }
        return { coordinates: [coordinates[0], coordinate] };
    }
    return [];
}
var rayLine = {
    name: 'rayLine',
    totalStep: 3,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates, bounding = _a.bounding;
        return [
            {
                type: 'line',
                attrs: getRayLine(coordinates, bounding)
            }
        ];
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var segment = {
    name: 'segment',
    totalStep: 3,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates;
        if (coordinates.length === 2) {
            return [
                {
                    type: 'line',
                    attrs: { coordinates: coordinates }
                }
            ];
        }
        return [];
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var straightLine = {
    name: 'straightLine',
    totalStep: 3,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates, bounding = _a.bounding;
        if (coordinates.length === 2) {
            if (coordinates[0].x === coordinates[1].x) {
                return [
                    {
                        type: 'line',
                        attrs: {
                            coordinates: [
                                {
                                    x: coordinates[0].x,
                                    y: 0
                                }, {
                                    x: coordinates[0].x,
                                    y: bounding.height
                                }
                            ]
                        }
                    }
                ];
            }
            return [
                {
                    type: 'line',
                    attrs: {
                        coordinates: [
                            {
                                x: 0,
                                y: getLinearYFromCoordinates(coordinates[0], coordinates[1], { x: 0, y: coordinates[0].y })
                            }, {
                                x: bounding.width,
                                y: getLinearYFromCoordinates(coordinates[0], coordinates[1], { x: bounding.width, y: coordinates[0].y })
                            }
                        ]
                    }
                }
            ];
        }
        return [];
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var verticalRayLine = {
    name: 'verticalRayLine',
    totalStep: 3,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates, bounding = _a.bounding;
        if (coordinates.length === 2) {
            var coordinate = { x: coordinates[0].x, y: 0 };
            if (coordinates[0].y < coordinates[1].y) {
                coordinate.y = bounding.height;
            }
            return [
                {
                    type: 'line',
                    attrs: { coordinates: [coordinates[0], coordinate] }
                }
            ];
        }
        return [];
    },
    performEventPressedMove: function (_a) {
        var points = _a.points, performPoint = _a.performPoint;
        points[0].timestamp = performPoint.timestamp;
        points[0].dataIndex = performPoint.dataIndex;
        points[1].timestamp = performPoint.timestamp;
        points[1].dataIndex = performPoint.dataIndex;
    },
    performEventMoveForDrawing: function (_a) {
        var currentStep = _a.currentStep, points = _a.points, performPoint = _a.performPoint;
        if (currentStep === 2) {
            points[0].timestamp = performPoint.timestamp;
            points[0].dataIndex = performPoint.dataIndex;
        }
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var verticalSegment = {
    name: 'verticalSegment',
    totalStep: 3,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates;
        if (coordinates.length === 2) {
            return [
                {
                    type: 'line',
                    attrs: { coordinates: coordinates }
                }
            ];
        }
        return [];
    },
    performEventPressedMove: function (_a) {
        var points = _a.points, performPoint = _a.performPoint;
        points[0].timestamp = performPoint.timestamp;
        points[0].dataIndex = performPoint.dataIndex;
        points[1].timestamp = performPoint.timestamp;
        points[1].dataIndex = performPoint.dataIndex;
    },
    performEventMoveForDrawing: function (_a) {
        var currentStep = _a.currentStep, points = _a.points, performPoint = _a.performPoint;
        if (currentStep === 2) {
            points[0].timestamp = performPoint.timestamp;
            points[0].dataIndex = performPoint.dataIndex;
        }
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var verticalStraightLine = {
    name: 'verticalStraightLine',
    totalStep: 2,
    needDefaultPointFigure: true,
    needDefaultXAxisFigure: true,
    needDefaultYAxisFigure: true,
    createPointFigures: function (_a) {
        var coordinates = _a.coordinates, bounding = _a.bounding;
        return [
            {
                type: 'line',
                attrs: {
                    coordinates: [
                        {
                            x: coordinates[0].x,
                            y: 0
                        }, {
                            x: coordinates[0].x,
                            y: bounding.height
                        }
                    ]
                }
            }
        ];
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var simpleAnnotation = {
    name: 'simpleAnnotation',
    totalStep: 2,
    styles: {
        line: { style: exports.LineType.Dashed }
    },
    createPointFigures: function (_a) {
        var _b;
        var overlay = _a.overlay, coordinates = _a.coordinates;
        var text;
        if (isValid(overlay.extendData)) {
            if (!isFunction(overlay.extendData)) {
                text = (_b = overlay.extendData) !== null && _b !== void 0 ? _b : '';
            }
            else {
                text = overlay.extendData(overlay);
            }
        }
        var startX = coordinates[0].x;
        var startY = coordinates[0].y - 6;
        var lineEndY = startY - 50;
        var arrowEndY = lineEndY - 5;
        return [
            {
                type: 'line',
                attrs: { coordinates: [{ x: startX, y: startY }, { x: startX, y: lineEndY }] },
                ignoreEvent: true
            },
            {
                type: 'polygon',
                attrs: { coordinates: [{ x: startX, y: lineEndY }, { x: startX - 4, y: arrowEndY }, { x: startX + 4, y: arrowEndY }] },
                ignoreEvent: true
            },
            {
                type: 'text',
                attrs: { x: startX, y: arrowEndY, text: text !== null && text !== void 0 ? text : '', align: 'center', baseline: 'bottom' },
                ignoreEvent: true
            }
        ];
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var simpleTag = {
    name: 'simpleTag',
    totalStep: 2,
    styles: {
        line: { style: exports.LineType.Dashed }
    },
    createPointFigures: function (_a) {
        var bounding = _a.bounding, coordinates = _a.coordinates;
        return {
            type: 'line',
            attrs: {
                coordinates: [
                    { x: 0, y: coordinates[0].y },
                    { x: bounding.width, y: coordinates[0].y }
                ]
            },
            ignoreEvent: true
        };
    },
    createYAxisFigures: function (_a) {
        var _b, _c;
        var overlay = _a.overlay, coordinates = _a.coordinates, bounding = _a.bounding, yAxis = _a.yAxis, precision = _a.precision;
        var isFromZero = (_b = yAxis === null || yAxis === void 0 ? void 0 : yAxis.isFromZero()) !== null && _b !== void 0 ? _b : false;
        var textAlign;
        var x;
        if (isFromZero) {
            textAlign = 'left';
            x = 0;
        }
        else {
            textAlign = 'right';
            x = bounding.width;
        }
        var text;
        if (isValid(overlay.extendData)) {
            if (!isFunction(overlay.extendData)) {
                text = (_c = overlay.extendData) !== null && _c !== void 0 ? _c : '';
            }
            else {
                text = overlay.extendData(overlay);
            }
        }
        if (!isValid(text) && isNumber(overlay.points[0].value)) {
            text = formatPrecision(overlay.points[0].value, precision.price);
        }
        return { type: 'text', attrs: { x: x, y: coordinates[0].y, text: text !== null && text !== void 0 ? text : '', align: textAlign, baseline: 'middle' } };
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var overlays = {};
var extensions$1 = [
    fibonacciLine, horizontalRayLine, horizontalSegment, horizontalStraightLine,
    parallelStraightLine, priceChannelLine, priceLine, rayLine, segment,
    straightLine, verticalRayLine, verticalSegment, verticalStraightLine,
    simpleAnnotation, simpleTag
];
extensions$1.forEach(function (template) {
    overlays[template.name] = OverlayImp.extend(template);
});
function registerOverlay(template) {
    overlays[template.name] = OverlayImp.extend(template);
}
function getOverlayInnerClass(name) {
    var _a;
    return (_a = overlays[name]) !== null && _a !== void 0 ? _a : null;
}
function getOverlayClass(name) {
    var _a;
    return (_a = overlays[name]) !== null && _a !== void 0 ? _a : null;
}
function getSupportedOverlays() {
    return Object.keys(overlays);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PANE_MIN_HEIGHT = 30;
var PANE_DEFAULT_HEIGHT = 100;
var PaneIdConstants = {
    CANDLE: 'candle_pane',
    INDICATOR: 'indicator_pane_',
    X_AXIS: 'x_axis_pane'
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OverlayStore = /** @class */ (function () {
    function OverlayStore(chartStore) {
        this._instances = new Map();
        /**
         * Overlay information in painting
         */
        this._progressInstanceInfo = null;
        /**
         * Overlay information by the mouse pressed
         */
        this._pressedInstanceInfo = {
            paneId: '',
            instance: null,
            figureType: 0 /* EventOverlayInfoFigureType.None */,
            figureKey: '',
            figureIndex: -1,
            attrsIndex: -1
        };
        /**
         * Overlay information by hover
         */
        this._hoverInstanceInfo = {
            paneId: '',
            instance: null,
            figureType: 0 /* EventOverlayInfoFigureType.None */,
            figureKey: '',
            figureIndex: -1,
            attrsIndex: -1
        };
        /**
         * Overlay information by the mouse click
         */
        this._clickInstanceInfo = {
            paneId: '',
            instance: null,
            figureType: 0 /* EventOverlayInfoFigureType.None */,
            figureKey: '',
            figureIndex: -1,
            attrsIndex: -1
        };
        this._chartStore = chartStore;
    }
    OverlayStore.prototype._overrideInstance = function (instance, overlay) {
        var id = overlay.id, groupId = overlay.groupId, points = overlay.points, styles = overlay.styles, lock = overlay.lock, visible = overlay.visible, zLevel = overlay.zLevel, mode = overlay.mode, modeSensitivity = overlay.modeSensitivity, extendData = overlay.extendData, onDrawStart = overlay.onDrawStart, onDrawing = overlay.onDrawing, onDrawEnd = overlay.onDrawEnd, onClick = overlay.onClick, onDoubleClick = overlay.onDoubleClick, onRightClick = overlay.onRightClick, onPressedMoveStart = overlay.onPressedMoveStart, onPressedMoving = overlay.onPressedMoving, onPressedMoveEnd = overlay.onPressedMoveEnd, onMouseEnter = overlay.onMouseEnter, onMouseLeave = overlay.onMouseLeave, onRemoved = overlay.onRemoved, onSelected = overlay.onSelected, onDeselected = overlay.onDeselected;
        var updateFlag = false;
        var sortFlag = false;
        if (isString(id)) {
            instance.setId(id);
        }
        if (isString(groupId)) {
            instance.setGroupId(groupId);
        }
        if (isArray(points) && instance.setPoints(points)) {
            updateFlag = true;
        }
        if (isValid(styles) && instance.setStyles(styles)) {
            updateFlag = true;
        }
        if (isBoolean(lock)) {
            instance.setLock(lock);
        }
        if (isBoolean(visible) && instance.setVisible(visible)) {
            updateFlag = true;
        }
        if (isNumber(zLevel) && instance.setZLevel(zLevel)) {
            updateFlag = true;
            sortFlag = true;
        }
        if (isValid(mode)) {
            instance.setMode(mode);
        }
        if (isNumber(modeSensitivity)) {
            instance.setModeSensitivity(modeSensitivity);
        }
        if (extendData !== undefined && instance.setExtendData(extendData)) {
            updateFlag = true;
        }
        if (onDrawStart !== undefined) {
            instance.setOnDrawStartCallback(onDrawStart);
        }
        if (onDrawing !== undefined) {
            instance.setOnDrawingCallback(onDrawing);
        }
        if (onDrawEnd !== undefined) {
            instance.setOnDrawEndCallback(onDrawEnd);
        }
        if (onClick !== undefined) {
            instance.setOnClickCallback(onClick);
        }
        if (onDoubleClick !== undefined) {
            instance.setOnDoubleClickCallback(onDoubleClick);
        }
        if (onRightClick !== undefined) {
            instance.setOnRightClickCallback(onRightClick);
        }
        if (onPressedMoveStart !== undefined) {
            instance.setOnPressedMoveStartCallback(onPressedMoveStart);
        }
        if (onPressedMoving !== undefined) {
            instance.setOnPressedMovingCallback(onPressedMoving);
        }
        if (onPressedMoveEnd !== undefined) {
            instance.setOnPressedMoveEndCallback(onPressedMoveEnd);
        }
        if (onMouseEnter !== undefined) {
            instance.setOnMouseEnterCallback(onMouseEnter);
        }
        if (onMouseLeave !== undefined) {
            instance.setOnMouseLeaveCallback(onMouseLeave);
        }
        if (onRemoved !== undefined) {
            instance.setOnRemovedCallback(onRemoved);
        }
        if (onSelected !== undefined) {
            instance.setOnSelectedCallback(onSelected);
        }
        if (onDeselected !== undefined) {
            instance.setOnDeselectedCallback(onDeselected);
        }
        return [updateFlag, sortFlag];
    };
    OverlayStore.prototype.getInstanceById = function (id) {
        var e_1, _a;
        try {
            for (var _b = __values(this._instances), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                var paneShapes = entry[1];
                var overlay = paneShapes.find(function (s) { return s.id === id; });
                if (isValid(overlay)) {
                    return overlay;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this._progressInstanceInfo !== null) {
            if (this._progressInstanceInfo.instance.id === id) {
                return this._progressInstanceInfo.instance;
            }
        }
        return null;
    };
    OverlayStore.prototype._sort = function (paneId) {
        var _a;
        if (isString(paneId)) {
            (_a = this._instances.get(paneId)) === null || _a === void 0 ? void 0 : _a.sort(function (o1, o2) { return o1.zLevel - o2.zLevel; });
        }
        else {
            this._instances.forEach(function (paneInstances) {
                paneInstances.sort(function (o1, o2) { return o1.zLevel - o2.zLevel; });
            });
        }
    };
    OverlayStore.prototype.addInstances = function (overlays, paneId, appointPaneFlag) {
        var _this = this;
        var ids = overlays.map(function (overlay) {
            var _a, _b, _c, _d;
            var id = (_a = overlay.id) !== null && _a !== void 0 ? _a : createId(OVERLAY_ID_PREFIX);
            if (_this.getInstanceById(id) === null) {
                var OverlayClazz = getOverlayInnerClass(overlay.name);
                if (OverlayClazz !== null) {
                    var instance = new OverlayClazz();
                    instance.setPaneId(paneId);
                    var groupId = (_b = overlay.groupId) !== null && _b !== void 0 ? _b : id;
                    overlay.id = id;
                    overlay.groupId = groupId;
                    _this._overrideInstance(instance, overlay);
                    if (instance.isDrawing()) {
                        _this._progressInstanceInfo = { paneId: paneId, instance: instance, appointPaneFlag: appointPaneFlag };
                    }
                    else {
                        if (!_this._instances.has(paneId)) {
                            _this._instances.set(paneId, []);
                        }
                        (_c = _this._instances.get(paneId)) === null || _c === void 0 ? void 0 : _c.push(instance);
                    }
                    if (instance.isStart()) {
                        (_d = instance.onDrawStart) === null || _d === void 0 ? void 0 : _d.call(instance, ({ overlay: instance }));
                    }
                    return id;
                }
            }
            return null;
        });
        if (ids.some(function (id) { return id !== null; })) {
            this._sort();
            var chart = this._chartStore.getChart();
            chart.updatePane(1 /* UpdateLevel.Overlay */, paneId);
            chart.updatePane(1 /* UpdateLevel.Overlay */, PaneIdConstants.X_AXIS);
        }
        return ids;
    };
    OverlayStore.prototype.getProgressInstanceInfo = function () {
        return this._progressInstanceInfo;
    };
    OverlayStore.prototype.progressInstanceComplete = function () {
        var _a;
        if (this._progressInstanceInfo !== null) {
            var _b = this._progressInstanceInfo, instance = _b.instance, paneId = _b.paneId;
            if (!instance.isDrawing()) {
                if (!this._instances.has(paneId)) {
                    this._instances.set(paneId, []);
                }
                (_a = this._instances.get(paneId)) === null || _a === void 0 ? void 0 : _a.push(instance);
                this._sort(paneId);
                this._progressInstanceInfo = null;
            }
        }
    };
    OverlayStore.prototype.updateProgressInstanceInfo = function (paneId, appointPaneFlag) {
        if (this._progressInstanceInfo !== null) {
            if (isBoolean(appointPaneFlag) && appointPaneFlag) {
                this._progressInstanceInfo.appointPaneFlag = appointPaneFlag;
            }
            this._progressInstanceInfo.paneId = paneId;
            this._progressInstanceInfo.instance.setPaneId(paneId);
        }
    };
    OverlayStore.prototype.getInstances = function (paneId) {
        var _a;
        if (!isString(paneId)) {
            var instances_1 = [];
            this._instances.forEach(function (paneInstances) {
                instances_1 = instances_1.concat(paneInstances);
            });
            return instances_1;
        }
        return (_a = this._instances.get(paneId)) !== null && _a !== void 0 ? _a : [];
    };
    OverlayStore.prototype.override = function (overlay) {
        var _this = this;
        var id = overlay.id, groupId = overlay.groupId, name = overlay.name;
        var updateFlag = false;
        var sortFlag = false;
        var setFlag = function (instance) {
            var flags = _this._overrideInstance(instance, overlay);
            if (flags[0]) {
                updateFlag = true;
            }
            if (flags[1]) {
                sortFlag = true;
            }
        };
        if (isString(id)) {
            var instance = this.getInstanceById(id);
            if (instance !== null) {
                setFlag(instance);
            }
        }
        else {
            var nameValid_1 = isString(name);
            var groupIdValid_1 = isString(groupId);
            this._instances.forEach(function (paneInstances) {
                paneInstances.forEach(function (instance) {
                    if ((nameValid_1 && instance.name === name) ||
                        (groupIdValid_1 && instance.groupId === groupId) ||
                        (!nameValid_1 && !groupIdValid_1)) {
                        setFlag(instance);
                    }
                });
            });
            if (this._progressInstanceInfo !== null) {
                var progressInstance = this._progressInstanceInfo.instance;
                if ((nameValid_1 && progressInstance.name === name) ||
                    (groupIdValid_1 && progressInstance.groupId === groupId) ||
                    (!nameValid_1 && !groupIdValid_1)) {
                    setFlag(progressInstance);
                }
            }
        }
        if (sortFlag) {
            this._sort();
        }
        if (updateFlag) {
            this._chartStore.getChart().updatePane(1 /* UpdateLevel.Overlay */);
        }
    };
    OverlayStore.prototype.removeInstance = function (overlayRemove) {
        var e_2, _a;
        var _b;
        var match = function (remove, overlay) {
            if (isString(remove.id)) {
                if (overlay.id !== remove.id) {
                    return false;
                }
            }
            else {
                if (isString(remove.groupId)) {
                    if (overlay.groupId !== remove.groupId) {
                        return false;
                    }
                }
                else {
                    if (isString(remove.name)) {
                        if (overlay.name !== remove.name) {
                            return false;
                        }
                    }
                }
            }
            return true;
        };
        var updatePaneIds = [];
        var overlayRemoveValid = isValid(overlayRemove);
        if (this._progressInstanceInfo !== null) {
            var instance = this._progressInstanceInfo.instance;
            if (!overlayRemoveValid ||
                (overlayRemoveValid && match(overlayRemove, instance))) {
                updatePaneIds.push(this._progressInstanceInfo.paneId);
                (_b = instance.onRemoved) === null || _b === void 0 ? void 0 : _b.call(instance, { overlay: instance });
                this._progressInstanceInfo = null;
            }
        }
        if (overlayRemoveValid) {
            var instances = new Map();
            var _loop_1 = function (entry) {
                var paneInstances = entry[1];
                var newPaneInstances = paneInstances.filter(function (instance) {
                    var _a;
                    if (match(overlayRemove, instance)) {
                        if (!updatePaneIds.includes(entry[0])) {
                            updatePaneIds.push(entry[0]);
                        }
                        (_a = instance.onRemoved) === null || _a === void 0 ? void 0 : _a.call(instance, { overlay: instance });
                        return false;
                    }
                    return true;
                });
                if (newPaneInstances.length > 0) {
                    instances.set(entry[0], newPaneInstances);
                }
            };
            try {
                for (var _c = __values(this._instances), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var entry = _d.value;
                    _loop_1(entry);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this._instances = instances;
        }
        else {
            this._instances.forEach(function (paneInstances, paneId) {
                updatePaneIds.push(paneId);
                paneInstances.forEach(function (instance) {
                    var _a;
                    (_a = instance.onRemoved) === null || _a === void 0 ? void 0 : _a.call(instance, { overlay: instance });
                });
            });
            this._instances.clear();
        }
        if (updatePaneIds.length > 0) {
            var chart_1 = this._chartStore.getChart();
            updatePaneIds.forEach(function (paneId) {
                chart_1.updatePane(1 /* UpdateLevel.Overlay */, paneId);
            });
            chart_1.updatePane(1 /* UpdateLevel.Overlay */, PaneIdConstants.X_AXIS);
        }
    };
    OverlayStore.prototype.setPressedInstanceInfo = function (info) {
        this._pressedInstanceInfo = info;
    };
    OverlayStore.prototype.getPressedInstanceInfo = function () {
        return this._pressedInstanceInfo;
    };
    OverlayStore.prototype.updatePointPosition = function (dataChangeLength, type) {
        if (dataChangeLength > 0) {
            var dataList_1 = this._chartStore.getDataList();
            this._instances.forEach(function (overlays) {
                overlays.forEach(function (o) {
                    var points = o.points;
                    points.forEach(function (point) {
                        if (!isValid(point.timestamp) && isValid(point.dataIndex)) {
                            if (type === exports.LoadDataType.Forward) {
                                point.dataIndex = point.dataIndex + dataChangeLength;
                            }
                            var data = dataList_1[point.dataIndex];
                            point.timestamp = data === null || data === void 0 ? void 0 : data.timestamp;
                        }
                    });
                });
            });
        }
    };
    OverlayStore.prototype.setHoverInstanceInfo = function (info, event) {
        var _a, _b;
        var _c = this._hoverInstanceInfo, instance = _c.instance, figureType = _c.figureType, figureKey = _c.figureKey, figureIndex = _c.figureIndex;
        if ((instance === null || instance === void 0 ? void 0 : instance.id) !== ((_a = info.instance) === null || _a === void 0 ? void 0 : _a.id) ||
            figureType !== info.figureType ||
            figureIndex !== info.figureIndex) {
            this._hoverInstanceInfo = info;
            if ((instance === null || instance === void 0 ? void 0 : instance.id) !== ((_b = info.instance) === null || _b === void 0 ? void 0 : _b.id)) {
                var ignoreUpdateFlag = false;
                var sortFlag = false;
                if (instance !== null) {
                    sortFlag = true;
                    if (isFunction(instance.onMouseLeave)) {
                        instance.onMouseLeave(__assign({ overlay: instance, figureKey: figureKey, figureIndex: figureIndex }, event));
                        ignoreUpdateFlag = true;
                    }
                }
                if (info.instance !== null) {
                    sortFlag = true;
                    if (isFunction(info.instance.onMouseEnter)) {
                        info.instance.onMouseEnter(__assign({ overlay: info.instance, figureKey: info.figureKey, figureIndex: info.figureIndex }, event));
                        ignoreUpdateFlag = true;
                    }
                }
                if (sortFlag) {
                    this._sort();
                }
                if (!ignoreUpdateFlag) {
                    this._chartStore.getChart().updatePane(1 /* UpdateLevel.Overlay */);
                }
            }
        }
    };
    OverlayStore.prototype.getHoverInstanceInfo = function () {
        return this._hoverInstanceInfo;
    };
    OverlayStore.prototype.setClickInstanceInfo = function (info, event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var _k = this._clickInstanceInfo, paneId = _k.paneId, instance = _k.instance, figureType = _k.figureType, figureKey = _k.figureKey, figureIndex = _k.figureIndex;
        if (!((_b = (_a = info.instance) === null || _a === void 0 ? void 0 : _a.isDrawing()) !== null && _b !== void 0 ? _b : false)) {
            (_d = (_c = info.instance) === null || _c === void 0 ? void 0 : _c.onClick) === null || _d === void 0 ? void 0 : _d.call(_c, __assign({ overlay: info.instance, figureKey: info.figureKey, figureIndex: info.figureIndex }, event));
        }
        if ((instance === null || instance === void 0 ? void 0 : instance.id) !== ((_e = info.instance) === null || _e === void 0 ? void 0 : _e.id) || figureType !== info.figureType || figureIndex !== info.figureIndex) {
            this._clickInstanceInfo = info;
            if ((instance === null || instance === void 0 ? void 0 : instance.id) !== ((_f = info.instance) === null || _f === void 0 ? void 0 : _f.id)) {
                (_g = instance === null || instance === void 0 ? void 0 : instance.onDeselected) === null || _g === void 0 ? void 0 : _g.call(instance, __assign({ overlay: instance, figureKey: figureKey, figureIndex: figureIndex }, event));
                (_j = (_h = info.instance) === null || _h === void 0 ? void 0 : _h.onSelected) === null || _j === void 0 ? void 0 : _j.call(_h, __assign({ overlay: info.instance, figureKey: info.figureKey, figureIndex: info.figureIndex }, event));
                var chart = this._chartStore.getChart();
                chart.updatePane(1 /* UpdateLevel.Overlay */, info.paneId);
                if (paneId !== info.paneId) {
                    chart.updatePane(1 /* UpdateLevel.Overlay */, paneId);
                }
                chart.updatePane(1 /* UpdateLevel.Overlay */, PaneIdConstants.X_AXIS);
            }
        }
    };
    OverlayStore.prototype.getClickInstanceInfo = function () {
        return this._clickInstanceInfo;
    };
    OverlayStore.prototype.isEmpty = function () {
        return this._instances.size === 0 && this._progressInstanceInfo === null;
    };
    OverlayStore.prototype.isDrawing = function () {
        var _a, _b;
        return this._progressInstanceInfo !== null && ((_b = (_a = this._progressInstanceInfo) === null || _a === void 0 ? void 0 : _a.instance.isDrawing()) !== null && _b !== void 0 ? _b : false);
    };
    return OverlayStore;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ActionStore = /** @class */ (function () {
    function ActionStore() {
        /**
         * Chart action map
         */
        this._actions = new Map();
    }
    ActionStore.prototype.execute = function (type, data) {
        var _a;
        (_a = this._actions.get(type)) === null || _a === void 0 ? void 0 : _a.execute(data);
    };
    ActionStore.prototype.subscribe = function (type, callback) {
        var _a;
        if (!this._actions.has(type)) {
            this._actions.set(type, new Delegate());
        }
        (_a = this._actions.get(type)) === null || _a === void 0 ? void 0 : _a.subscribe(callback);
    };
    /**
     * 取消事件订阅
     * @param type
     * @param callback
     * @return {boolean}
     */
    ActionStore.prototype.unsubscribe = function (type, callback) {
        var action = this._actions.get(type);
        if (isValid(action)) {
            action.unsubscribe(callback);
            if (action.isEmpty()) {
                this._actions.delete(type);
            }
        }
    };
    ActionStore.prototype.has = function (type) {
        var action = this._actions.get(type);
        return isValid(action) && !action.isEmpty();
    };
    return ActionStore;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var light = {
    grid: {
        horizontal: {
            color: '#EDEDED'
        },
        vertical: {
            color: '#EDEDED'
        }
    },
    candle: {
        priceMark: {
            high: {
                color: '#76808F'
            },
            low: {
                color: '#76808F'
            }
        },
        tooltip: {
            rect: {
                color: '#FEFEFE',
                borderColor: '#F2F3F5'
            },
            text: {
                color: '#76808F'
            }
        }
    },
    indicator: {
        tooltip: {
            text: {
                color: '#76808F'
            }
        }
    },
    xAxis: {
        axisLine: {
            color: '#DDDDDD'
        },
        tickText: {
            color: '#76808F'
        },
        tickLine: {
            color: '#DDDDDD'
        }
    },
    yAxis: {
        axisLine: {
            color: '#DDDDDD'
        },
        tickText: {
            color: '#76808F'
        },
        tickLine: {
            color: '#DDDDDD'
        }
    },
    separator: {
        color: '#DDDDDD'
    },
    crosshair: {
        horizontal: {
            line: {
                color: '#76808F'
            },
            text: {
                borderColor: '#686D76',
                backgroundColor: '#686D76'
            }
        },
        vertical: {
            line: {
                color: '#76808F'
            },
            text: {
                borderColor: '#686D76',
                backgroundColor: '#686D76'
            }
        }
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dark = {
    grid: {
        horizontal: {
            color: '#292929'
        },
        vertical: {
            color: '#292929'
        }
    },
    candle: {
        priceMark: {
            high: {
                color: '#929AA5'
            },
            low: {
                color: '#929AA5'
            }
        },
        tooltip: {
            rect: {
                color: 'rgba(10, 10, 10, .6)',
                borderColor: 'rgba(10, 10, 10, .6)'
            },
            text: {
                color: '#929AA5'
            }
        }
    },
    indicator: {
        tooltip: {
            text: {
                color: '#929AA5'
            }
        }
    },
    xAxis: {
        axisLine: {
            color: '#333333'
        },
        tickText: {
            color: '#929AA5'
        },
        tickLine: {
            color: '#333333'
        }
    },
    yAxis: {
        axisLine: {
            color: '#333333'
        },
        tickText: {
            color: '#929AA5'
        },
        tickLine: {
            color: '#333333'
        }
    },
    separator: {
        color: '#333333'
    },
    crosshair: {
        horizontal: {
            line: {
                color: '#929AA5'
            },
            text: {
                borderColor: '#373a40',
                backgroundColor: '#373a40'
            }
        },
        vertical: {
            line: {
                color: '#929AA5'
            },
            text: {
                borderColor: '#373a40',
                backgroundColor: '#373a40'
            }
        }
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var styles = {
    light: light,
    dark: dark
};
function registerStyles(name, ss) {
    styles[name] = ss;
}
function getStyles(name) {
    var _a;
    return (_a = styles[name]) !== null && _a !== void 0 ? _a : null;
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ChartStore = /** @class */ (function () {
    function ChartStore(chart, options) {
        /**
         * Style config
         */
        this._styles = getDefaultStyles();
        /**
         * Custom api
         */
        this._customApi = getDefaultCustomApi();
        /**
         * language
         */
        this._locale = defaultLocale;
        /**
         * Price and volume precision
         */
        this._precision = { price: 2, volume: 0 };
        /**
         * Thousands separator
         */
        this._thousandsSeparator = ',';
        // Decimal fold threshold
        this._decimalFoldThreshold = 3;
        /**
         * Data source
         */
        this._dataList = [];
        /**
         * Load more data callback
         * Since v9.8.0 deprecated, since v10 removed
         * @deprecated
         */
        this._loadMoreCallback = null;
        /**
         * Load data callback
         */
        this._loadDataCallback = null;
        /**
         * Is loading data flag
         */
        this._loading = true;
        /**
         * Whether there are forward more flag
         */
        this._forwardMore = true;
        /**
         * Whether there are forward more flag
         */
        this._backwardMore = true;
        /**
         * Time scale store
         */
        this._timeScaleStore = new TimeScaleStore(this);
        /**
         * Indicator store
         */
        this._indicatorStore = new IndicatorStore(this);
        /**
         * Overlay store
         */
        this._overlayStore = new OverlayStore(this);
        /**
         * Tooltip store
         */
        this._tooltipStore = new TooltipStore(this);
        /**
         * Chart action store
         */
        this._actionStore = new ActionStore();
        /**
         * Visible data array
         */
        this._visibleDataList = [];
        this._chart = chart;
        this.setOptions(options);
    }
    /**
     * @description Adjust visible data
     * @return {*}
     */
    ChartStore.prototype.adjustVisibleDataList = function () {
        this._visibleDataList = [];
        var _a = this._timeScaleStore.getVisibleRange(), realFrom = _a.realFrom, realTo = _a.realTo;
        for (var i = realFrom; i < realTo; i++) {
            var kLineData = this._dataList[i];
            var x = this._timeScaleStore.dataIndexToCoordinate(i);
            this._visibleDataList.push({
                dataIndex: i,
                x: x,
                data: kLineData
            });
        }
    };
    ChartStore.prototype.setOptions = function (options) {
        var _a, _b, _c, _d;
        if (isValid(options)) {
            var locale = options.locale, timezone = options.timezone, styles = options.styles, customApi = options.customApi, thousandsSeparator = options.thousandsSeparator, decimalFoldThreshold = options.decimalFoldThreshold;
            if (isString(locale)) {
                this._locale = locale;
            }
            if (isString(timezone)) {
                this._timeScaleStore.setTimezone(timezone);
            }
            if (isValid(styles)) {
                var ss = null;
                if (isString(styles)) {
                    ss = getStyles(styles);
                }
                else {
                    ss = styles;
                }
                merge(this._styles, ss);
                // `candle.tooltip.custom` should override
                if (isArray((_b = (_a = ss === null || ss === void 0 ? void 0 : ss.candle) === null || _a === void 0 ? void 0 : _a.tooltip) === null || _b === void 0 ? void 0 : _b.custom)) {
                    this._styles.candle.tooltip.custom = (_d = (_c = ss === null || ss === void 0 ? void 0 : ss.candle) === null || _c === void 0 ? void 0 : _c.tooltip) === null || _d === void 0 ? void 0 : _d.custom;
                }
            }
            if (isValid(customApi)) {
                merge(this._customApi, customApi);
            }
            if (isString(thousandsSeparator)) {
                this._thousandsSeparator = thousandsSeparator;
            }
            if (isNumber(decimalFoldThreshold) && decimalFoldThreshold > 0) {
                this._decimalFoldThreshold = decimalFoldThreshold;
            }
        }
        return this;
    };
    ChartStore.prototype.getStyles = function () {
        return this._styles;
    };
    ChartStore.prototype.getLocale = function () {
        return this._locale;
    };
    ChartStore.prototype.getCustomApi = function () {
        return this._customApi;
    };
    ChartStore.prototype.getThousandsSeparator = function () {
        return this._thousandsSeparator;
    };
    ChartStore.prototype.getDecimalFoldThreshold = function () {
        return this._decimalFoldThreshold;
    };
    ChartStore.prototype.getPrecision = function () {
        return this._precision;
    };
    ChartStore.prototype.setPrecision = function (precision) {
        this._precision = precision;
        this._indicatorStore.synchronizeSeriesPrecision();
        return this;
    };
    ChartStore.prototype.getDataList = function () {
        return this._dataList;
    };
    ChartStore.prototype.getVisibleFirstData = function () {
        var _a;
        var from = this._timeScaleStore.getVisibleRange().from;
        return (_a = this._dataList[from]) !== null && _a !== void 0 ? _a : null;
    };
    ChartStore.prototype.getVisibleDataList = function () {
        return this._visibleDataList;
    };
    ChartStore.prototype.addData = function (data, type, more) {
        return __awaiter(this, void 0, void 0, function () {
            var success, adjustFlag, dataLengthChange, dataCount, timestamp, lastDataTimestamp, lastBarRightSideDiffBarCount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        success = false;
                        adjustFlag = false;
                        dataLengthChange = 0;
                        if (isArray(data)) {
                            dataLengthChange = data.length;
                            switch (type) {
                                case exports.LoadDataType.Init: {
                                    this.clear();
                                    this._dataList = data;
                                    this._forwardMore = more !== null && more !== void 0 ? more : true;
                                    this._timeScaleStore.resetOffsetRightDistance();
                                    adjustFlag = true;
                                    break;
                                }
                                case exports.LoadDataType.Backward: {
                                    this._dataList = this._dataList.concat(data);
                                    this._backwardMore = more !== null && more !== void 0 ? more : false;
                                    adjustFlag = dataLengthChange > 0;
                                    break;
                                }
                                case exports.LoadDataType.Forward: {
                                    this._dataList = data.concat(this._dataList);
                                    this._forwardMore = more !== null && more !== void 0 ? more : false;
                                    adjustFlag = dataLengthChange > 0;
                                }
                            }
                            this._loading = false;
                            success = true;
                        }
                        else {
                            dataCount = this._dataList.length;
                            timestamp = data.timestamp;
                            lastDataTimestamp = formatValue(this._dataList[dataCount - 1], 'timestamp', 0);
                            if (timestamp > lastDataTimestamp) {
                                this._dataList.push(data);
                                lastBarRightSideDiffBarCount = this._timeScaleStore.getLastBarRightSideDiffBarCount();
                                if (lastBarRightSideDiffBarCount < 0) {
                                    this._timeScaleStore.setLastBarRightSideDiffBarCount(--lastBarRightSideDiffBarCount);
                                }
                                dataLengthChange = 1;
                                success = true;
                                adjustFlag = true;
                            }
                            else if (timestamp === lastDataTimestamp) {
                                this._dataList[dataCount - 1] = data;
                                success = true;
                                adjustFlag = true;
                            }
                        }
                        if (!success) return [3 /*break*/, 5];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        this._overlayStore.updatePointPosition(dataLengthChange, type);
                        if (!adjustFlag) return [3 /*break*/, 3];
                        this._timeScaleStore.adjustVisibleRange();
                        this._tooltipStore.recalculateCrosshair(true);
                        return [4 /*yield*/, this._indicatorStore.calcInstance()];
                    case 2:
                        _b.sent();
                        this._chart.adjustPaneViewport(false, true, true, true);
                        _b.label = 3;
                    case 3:
                        this._actionStore.execute(exports.ActionType.OnDataReady);
                        return [3 /*break*/, 5];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ChartStore.prototype.setLoadMoreCallback = function (callback) {
        this._loadMoreCallback = callback;
    };
    ChartStore.prototype.executeLoadMoreCallback = function (timestamp) {
        if (this._forwardMore && !this._loading && isValid(this._loadMoreCallback)) {
            this._loading = true;
            this._loadMoreCallback(timestamp);
        }
    };
    ChartStore.prototype.setLoadDataCallback = function (callback) {
        this._loadDataCallback = callback;
    };
    ChartStore.prototype.executeLoadDataCallback = function (params) {
        var _this = this;
        if (!this._loading &&
            isValid(this._loadDataCallback) &&
            ((this._forwardMore && params.type === exports.LoadDataType.Forward) ||
                (this._backwardMore && params.type === exports.LoadDataType.Backward))) {
            var cb = function (data, more) {
                _this.addData(data, params.type, more).then(function () { }).catch(function () { });
            };
            this._loading = true;
            this._loadDataCallback(__assign(__assign({}, params), { callback: cb }));
        }
    };
    ChartStore.prototype.clear = function () {
        this._forwardMore = true;
        this._backwardMore = true;
        this._loading = true;
        this._dataList = [];
        this._visibleDataList = [];
        this._timeScaleStore.clear();
        this._tooltipStore.clear();
    };
    ChartStore.prototype.getTimeScaleStore = function () {
        return this._timeScaleStore;
    };
    ChartStore.prototype.getIndicatorStore = function () {
        return this._indicatorStore;
    };
    ChartStore.prototype.getOverlayStore = function () {
        return this._overlayStore;
    };
    ChartStore.prototype.getTooltipStore = function () {
        return this._tooltipStore;
    };
    ChartStore.prototype.getActionStore = function () {
        return this._actionStore;
    };
    ChartStore.prototype.getChart = function () {
        return this._chart;
    };
    return ChartStore;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WidgetNameConstants = {
    MAIN: 'main',
    X_AXIS: 'xAxis',
    Y_AXIS: 'yAxis',
    SEPARATOR: 'separator'
};
var REAL_SEPARATOR_HEIGHT = 7;

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isSupportedDevicePixelContentBox() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) {
                        var ro = new ResizeObserver(function (entries) {
                            resolve(entries.every(function (entry) { return 'devicePixelContentBoxSize' in entry; }));
                            ro.disconnect();
                        });
                        ro.observe(document.body, { box: 'device-pixel-content-box' });
                    }).catch(function () { return false; })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
var Canvas = /** @class */ (function () {
    function Canvas(style, listener) {
        var _this = this;
        this._supportedDevicePixelContentBox = false;
        this._width = 0;
        this._height = 0;
        this._pixelWidth = 0;
        this._pixelHeight = 0;
        this._nextPixelWidth = 0;
        this._nextPixelHeight = 0;
        this._requestAnimationId = DEFAULT_REQUEST_ID;
        this._mediaQueryListener = function () {
            var pixelRatio = getPixelRatio(_this._element);
            _this._nextPixelWidth = Math.round(_this._element.clientWidth * pixelRatio);
            _this._nextPixelHeight = Math.round(_this._element.clientHeight * pixelRatio);
            _this._resetPixelRatio();
        };
        this._listener = listener;
        this._element = createDom('canvas', style);
        this._ctx = this._element.getContext('2d', { willReadFrequently: true });
        isSupportedDevicePixelContentBox().then(function (result) {
            _this._supportedDevicePixelContentBox = result;
            if (result) {
                _this._resizeObserver = new ResizeObserver(function (entries) {
                    var _a;
                    var entry = entries.find(function (entry) { return entry.target === _this._element; });
                    var size = (_a = entry === null || entry === void 0 ? void 0 : entry.devicePixelContentBoxSize) === null || _a === void 0 ? void 0 : _a[0];
                    if (isValid(size)) {
                        _this._nextPixelWidth = size.inlineSize;
                        _this._nextPixelHeight = size.blockSize;
                        if (_this._pixelWidth !== _this._nextPixelWidth || _this._pixelHeight !== _this._nextPixelHeight) {
                            _this._resetPixelRatio();
                        }
                    }
                });
                _this._resizeObserver.observe(_this._element, { box: 'device-pixel-content-box' });
            }
            else {
                _this._mediaQueryList = window.matchMedia("(resolution: ".concat(getPixelRatio(_this._element), "dppx)"));
                _this._mediaQueryList.addListener(_this._mediaQueryListener);
            }
        }).catch(function (_) { return false; });
    }
    Canvas.prototype._resetPixelRatio = function () {
        var _this = this;
        this._executeListener(function () {
            var width = _this._element.clientWidth;
            var height = _this._element.clientHeight;
            var horizontalPixelRatio = _this._nextPixelWidth / width;
            var verticalPixelRatio = _this._nextPixelHeight / height;
            _this._width = width;
            _this._height = height;
            _this._pixelWidth = _this._nextPixelWidth;
            _this._pixelHeight = _this._nextPixelHeight;
            _this._element.width = _this._nextPixelWidth;
            _this._element.height = _this._nextPixelHeight;
            _this._ctx.scale(horizontalPixelRatio, verticalPixelRatio);
        });
    };
    Canvas.prototype._executeListener = function (fn) {
        var _this = this;
        if (this._requestAnimationId === DEFAULT_REQUEST_ID) {
            this._requestAnimationId = requestAnimationFrame(function () {
                _this._ctx.clearRect(0, 0, _this._width, _this._height);
                fn === null || fn === void 0 ? void 0 : fn();
                _this._listener();
                _this._requestAnimationId = DEFAULT_REQUEST_ID;
            });
        }
    };
    Canvas.prototype.update = function (w, h) {
        if (this._width !== w || this._height !== h) {
            this._element.style.width = "".concat(w, "px");
            this._element.style.height = "".concat(h, "px");
            if (!this._supportedDevicePixelContentBox) {
                var pixelRatio = getPixelRatio(this._element);
                this._nextPixelWidth = Math.round(w * pixelRatio);
                this._nextPixelHeight = Math.round(h * pixelRatio);
                this._resetPixelRatio();
            }
        }
        else {
            this._executeListener();
        }
    };
    Canvas.prototype.getElement = function () {
        return this._element;
    };
    Canvas.prototype.getContext = function () {
        return this._ctx;
    };
    Canvas.prototype.destroy = function () {
        if (isValid(this._resizeObserver)) {
            this._resizeObserver.unobserve(this._element);
        }
        if (isValid(this._mediaQueryList)) {
            this._mediaQueryList.removeListener(this._mediaQueryListener);
        }
    };
    return Canvas;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createDefaultBounding(bounding) {
    var defaultBounding = {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    };
    if (isValid(bounding)) {
        merge(defaultBounding, bounding);
    }
    return defaultBounding;
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget(rootContainer, pane) {
        var _this = _super.call(this) || this;
        _this._bounding = createDefaultBounding();
        _this._pane = pane;
        _this._rootContainer = rootContainer;
        _this._container = _this.createContainer();
        rootContainer.appendChild(_this._container);
        return _this;
    }
    Widget.prototype.setBounding = function (bounding) {
        merge(this._bounding, bounding);
        return this;
    };
    Widget.prototype.getContainer = function () { return this._container; };
    Widget.prototype.getBounding = function () {
        return this._bounding;
    };
    Widget.prototype.getPane = function () {
        return this._pane;
    };
    Widget.prototype.update = function (level) {
        this.updateImp(this._container, this._bounding, level !== null && level !== void 0 ? level : 3 /* UpdateLevel.Drawer */);
    };
    Widget.prototype.destroy = function () {
        this._rootContainer.removeChild(this._container);
    };
    return Widget;
}(Eventful));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DrawWidget = /** @class */ (function (_super) {
    __extends(DrawWidget, _super);
    function DrawWidget(rootContainer, pane) {
        var _this = _super.call(this, rootContainer, pane) || this;
        _this._mainCanvas = new Canvas({
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '2',
            boxSizing: 'border-box'
        }, function () {
            _this.updateMain(_this._mainCanvas.getContext());
        });
        _this._overlayCanvas = new Canvas({
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '2',
            boxSizing: 'border-box'
        }, function () {
            _this.updateOverlay(_this._overlayCanvas.getContext());
        });
        var container = _this.getContainer();
        container.appendChild(_this._mainCanvas.getElement());
        container.appendChild(_this._overlayCanvas.getElement());
        return _this;
    }
    DrawWidget.prototype.createContainer = function () {
        return createDom('div', {
            margin: '0',
            padding: '0',
            position: 'absolute',
            top: '0',
            overflow: 'hidden',
            boxSizing: 'border-box',
            zIndex: '1'
        });
    };
    DrawWidget.prototype.updateImp = function (container, bounding, level) {
        var width = bounding.width, height = bounding.height, left = bounding.left;
        container.style.left = "".concat(left, "px");
        var l = level;
        var w = container.clientWidth;
        var h = container.clientHeight;
        if (width !== w || height !== h) {
            container.style.width = "".concat(width, "px");
            container.style.height = "".concat(height, "px");
            l = 3 /* UpdateLevel.Drawer */;
        }
        switch (l) {
            case 0 /* UpdateLevel.Main */: {
                this._mainCanvas.update(width, height);
                break;
            }
            case 1 /* UpdateLevel.Overlay */: {
                this._overlayCanvas.update(width, height);
                break;
            }
            case 3 /* UpdateLevel.Drawer */:
            case 4 /* UpdateLevel.All */: {
                this._mainCanvas.update(width, height);
                this._overlayCanvas.update(width, height);
                break;
            }
        }
    };
    DrawWidget.prototype.destroy = function () {
        this._mainCanvas.destroy();
        this._overlayCanvas.destroy();
    };
    DrawWidget.prototype.getImage = function (includeOverlay) {
        var _a = this.getBounding(), width = _a.width, height = _a.height;
        var canvas = createDom('canvas', {
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            boxSizing: 'border-box'
        });
        var ctx = canvas.getContext('2d');
        var pixelRatio = getPixelRatio(canvas);
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        ctx.scale(pixelRatio, pixelRatio);
        ctx.drawImage(this._mainCanvas.getElement(), 0, 0, width, height);
        if (includeOverlay) {
            ctx.drawImage(this._overlayCanvas.getElement(), 0, 0, width, height);
        }
        return canvas;
    };
    return DrawWidget;
}(Widget));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isTransparent(color) {
    return color === 'transparent' ||
        color === 'none' ||
        /^[rR][gG][Bb][Aa]\(([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,){3}[\s]*0[\s]*\)$/.test(color) ||
        /^[hH][Ss][Ll][Aa]\(([\s]*(360｜3[0-5][0-9]|[012]?[0-9][0-9]?)[\s]*,)([\s]*((100|[0-9][0-9]?)%|0)[\s]*,){2}([\s]*0[\s]*)\)$/.test(color);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function checkCoordinateOnCircle(coordinate, attrs) {
    var circles = [];
    circles = circles.concat(attrs);
    for (var i = 0; i < circles.length; i++) {
        var _a = circles[i], x = _a.x, y = _a.y, r = _a.r;
        var difX = coordinate.x - x;
        var difY = coordinate.y - y;
        if (!(difX * difX + difY * difY > r * r)) {
            return true;
        }
    }
    return false;
}
function drawCircle(ctx, attrs, styles) {
    var circles = [];
    circles = circles.concat(attrs);
    var _a = styles.style, style = _a === void 0 ? exports.PolygonType.Fill : _a, _b = styles.color, color = _b === void 0 ? 'currentColor' : _b, _c = styles.borderSize, borderSize = _c === void 0 ? 1 : _c, _d = styles.borderColor, borderColor = _d === void 0 ? 'currentColor' : _d, _e = styles.borderStyle, borderStyle = _e === void 0 ? exports.LineType.Solid : _e, _f = styles.borderDashedValue, borderDashedValue = _f === void 0 ? [2, 2] : _f;
    var solid = (style === exports.PolygonType.Fill || styles.style === exports.PolygonType.StrokeFill) && (!isString(color) || !isTransparent(color));
    if (solid) {
        ctx.fillStyle = color;
        circles.forEach(function (_a) {
            var x = _a.x, y = _a.y, r = _a.r;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        });
    }
    if ((style === exports.PolygonType.Stroke || styles.style === exports.PolygonType.StrokeFill) && borderSize > 0 && !isTransparent(borderColor)) {
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderSize;
        if (borderStyle === exports.LineType.Dashed) {
            ctx.setLineDash(borderDashedValue);
        }
        else {
            ctx.setLineDash([]);
        }
        circles.forEach(function (_a) {
            var x = _a.x, y = _a.y, r = _a.r;
            if (!solid || r > borderSize) {
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.stroke();
            }
        });
    }
}
var circle = {
    name: 'circle',
    checkEventOn: checkCoordinateOnCircle,
    draw: function (ctx, attrs, styles) {
        drawCircle(ctx, attrs, styles);
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function checkCoordinateOnPolygon(coordinate, attrs) {
    var polygons = [];
    polygons = polygons.concat(attrs);
    for (var i = 0; i < polygons.length; i++) {
        var on = false;
        var coordinates = polygons[i].coordinates;
        for (var i_1 = 0, j = coordinates.length - 1; i_1 < coordinates.length; j = i_1++) {
            if ((coordinates[i_1].y > coordinate.y) !== (coordinates[j].y > coordinate.y) &&
                (coordinate.x < (coordinates[j].x - coordinates[i_1].x) * (coordinate.y - coordinates[i_1].y) / (coordinates[j].y - coordinates[i_1].y) + coordinates[i_1].x)) {
                on = !on;
            }
        }
        if (on) {
            return true;
        }
    }
    return false;
}
function drawPolygon(ctx, attrs, styles) {
    var polygons = [];
    polygons = polygons.concat(attrs);
    var _a = styles.style, style = _a === void 0 ? exports.PolygonType.Fill : _a, _b = styles.color, color = _b === void 0 ? 'currentColor' : _b, _c = styles.borderSize, borderSize = _c === void 0 ? 1 : _c, _d = styles.borderColor, borderColor = _d === void 0 ? 'currentColor' : _d, _e = styles.borderStyle, borderStyle = _e === void 0 ? exports.LineType.Solid : _e, _f = styles.borderDashedValue, borderDashedValue = _f === void 0 ? [2, 2] : _f;
    if ((style === exports.PolygonType.Fill || styles.style === exports.PolygonType.StrokeFill) &&
        (!isString(color) || !isTransparent(color))) {
        ctx.fillStyle = color;
        polygons.forEach(function (_a) {
            var coordinates = _a.coordinates;
            ctx.beginPath();
            ctx.moveTo(coordinates[0].x, coordinates[0].y);
            for (var i = 1; i < coordinates.length; i++) {
                ctx.lineTo(coordinates[i].x, coordinates[i].y);
            }
            ctx.closePath();
            ctx.fill();
        });
    }
    if ((style === exports.PolygonType.Stroke || styles.style === exports.PolygonType.StrokeFill) && borderSize > 0 && !isTransparent(borderColor)) {
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderSize;
        if (borderStyle === exports.LineType.Dashed) {
            ctx.setLineDash(borderDashedValue);
        }
        else {
            ctx.setLineDash([]);
        }
        polygons.forEach(function (_a) {
            var coordinates = _a.coordinates;
            ctx.beginPath();
            ctx.moveTo(coordinates[0].x, coordinates[0].y);
            for (var i = 1; i < coordinates.length; i++) {
                ctx.lineTo(coordinates[i].x, coordinates[i].y);
            }
            ctx.closePath();
            ctx.stroke();
        });
    }
}
var polygon = {
    name: 'polygon',
    checkEventOn: checkCoordinateOnPolygon,
    draw: function (ctx, attrs, styles) {
        drawPolygon(ctx, attrs, styles);
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function checkCoordinateOnRect(coordinate, attrs) {
    var rects = [];
    rects = rects.concat(attrs);
    for (var i = 0; i < rects.length; i++) {
        var rect_1 = rects[i];
        var x = rect_1.x;
        var width = rect_1.width;
        if (width < DEVIATION * 2) {
            x -= DEVIATION;
            width = DEVIATION * 2;
        }
        var y = rect_1.y;
        var height = rect_1.height;
        if (height < DEVIATION * 2) {
            y -= DEVIATION;
            height = DEVIATION * 2;
        }
        if (coordinate.x >= x &&
            coordinate.x <= x + width &&
            coordinate.y >= y &&
            coordinate.y <= y + height) {
            return true;
        }
    }
    return false;
}
function drawRect(ctx, attrs, styles) {
    var _a;
    var rects = [];
    rects = rects.concat(attrs);
    var _b = styles.style, style = _b === void 0 ? exports.PolygonType.Fill : _b, _c = styles.color, color = _c === void 0 ? 'transparent' : _c, _d = styles.borderSize, borderSize = _d === void 0 ? 1 : _d, _e = styles.borderColor, borderColor = _e === void 0 ? 'transparent' : _e, _f = styles.borderStyle, borderStyle = _f === void 0 ? exports.LineType.Solid : _f, _g = styles.borderRadius, r = _g === void 0 ? 0 : _g, _h = styles.borderDashedValue, borderDashedValue = _h === void 0 ? [2, 2] : _h;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    var draw = (_a = ctx.roundRect) !== null && _a !== void 0 ? _a : ctx.rect;
    var solid = (style === exports.PolygonType.Fill || styles.style === exports.PolygonType.StrokeFill) && (!isString(color) || !isTransparent(color));
    if (solid) {
        ctx.fillStyle = color;
        rects.forEach(function (_a) {
            var x = _a.x, y = _a.y, w = _a.width, h = _a.height;
            ctx.beginPath();
            draw.call(ctx, x, y, w, h, r);
            ctx.closePath();
            ctx.fill();
        });
    }
    if ((style === exports.PolygonType.Stroke || styles.style === exports.PolygonType.StrokeFill) && borderSize > 0 && !isTransparent(borderColor)) {
        ctx.strokeStyle = borderColor;
        ctx.fillStyle = borderColor;
        ctx.lineWidth = borderSize;
        if (borderStyle === exports.LineType.Dashed) {
            ctx.setLineDash(borderDashedValue);
        }
        else {
            ctx.setLineDash([]);
        }
        var correction_1 = borderSize % 2 === 1 ? 0.5 : 0;
        var doubleCorrection_1 = Math.round(correction_1 * 2);
        rects.forEach(function (_a) {
            var x = _a.x, y = _a.y, w = _a.width, h = _a.height;
            if (w > borderSize * 2 && h > borderSize * 2) {
                ctx.beginPath();
                draw.call(ctx, x + correction_1, y + correction_1, w - doubleCorrection_1, h - doubleCorrection_1, r);
                ctx.closePath();
                ctx.stroke();
            }
            else {
                if (!solid) {
                    ctx.fillRect(x, y, w, h);
                }
            }
        });
    }
}
var rect = {
    name: 'rect',
    checkEventOn: checkCoordinateOnRect,
    draw: function (ctx, attrs, styles) {
        drawRect(ctx, attrs, styles);
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getTextRect(attrs, styles) {
    var _a = styles.size, size = _a === void 0 ? 12 : _a, _b = styles.paddingLeft, paddingLeft = _b === void 0 ? 0 : _b, _c = styles.paddingTop, paddingTop = _c === void 0 ? 0 : _c, _d = styles.paddingRight, paddingRight = _d === void 0 ? 0 : _d, _e = styles.paddingBottom, paddingBottom = _e === void 0 ? 0 : _e, _f = styles.weight, weight = _f === void 0 ? 'normal' : _f, family = styles.family;
    var x = attrs.x, y = attrs.y, text = attrs.text, _g = attrs.align, align = _g === void 0 ? 'left' : _g, _h = attrs.baseline, baseline = _h === void 0 ? 'top' : _h, w = attrs.width, h = attrs.height;
    var width = w !== null && w !== void 0 ? w : (paddingLeft + calcTextWidth(text, size, weight, family) + paddingRight);
    var height = h !== null && h !== void 0 ? h : (paddingTop + size + paddingBottom);
    var startX;
    switch (align) {
        case 'left':
        case 'start': {
            startX = x;
            break;
        }
        case 'right':
        case 'end': {
            startX = x - width;
            break;
        }
        default: {
            startX = x - width / 2;
            break;
        }
    }
    var startY;
    switch (baseline) {
        case 'top':
        case 'hanging': {
            startY = y;
            break;
        }
        case 'bottom':
        case 'ideographic':
        case 'alphabetic': {
            startY = y - height;
            break;
        }
        default: {
            startY = y - height / 2;
            break;
        }
    }
    return { x: startX, y: startY, width: width, height: height };
}
function checkCoordinateOnText(coordinate, attrs, styles) {
    var texts = [];
    texts = texts.concat(attrs);
    for (var i = 0; i < texts.length; i++) {
        var _a = getTextRect(texts[i], styles), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        if (coordinate.x >= x &&
            coordinate.x <= x + width &&
            coordinate.y >= y &&
            coordinate.y <= y + height) {
            return true;
        }
    }
    return false;
}
function drawText(ctx, attrs, styles) {
    var texts = [];
    texts = texts.concat(attrs);
    var _a = styles.color, color = _a === void 0 ? 'currentColor' : _a, _b = styles.size, size = _b === void 0 ? 12 : _b, family = styles.family, weight = styles.weight, _c = styles.paddingLeft, paddingLeft = _c === void 0 ? 0 : _c, _d = styles.paddingTop, paddingTop = _d === void 0 ? 0 : _d, _e = styles.paddingRight, paddingRight = _e === void 0 ? 0 : _e;
    var rects = texts.map(function (text) { return getTextRect(text, styles); });
    drawRect(ctx, rects, __assign(__assign({}, styles), { color: styles.backgroundColor }));
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.font = createFont(size, weight, family);
    ctx.fillStyle = color;
    texts.forEach(function (text, index) {
        var rect = rects[index];
        ctx.fillText(text.text, rect.x + paddingLeft, rect.y + paddingTop, rect.width - paddingLeft - paddingRight);
    });
}
var text = {
    name: 'text',
    checkEventOn: checkCoordinateOnText,
    draw: function (ctx, attrs, styles) {
        drawText(ctx, attrs, styles);
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @deprecated
 * Starting from v10, it will be deleted
 */
var rectText = text;
/**
 * @deprecated
 * Starting from v10, it will be deleted
 */
var drawRectText = drawText;

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getDistance(coordinate1, coordinate2) {
    var xDif = coordinate1.x - coordinate2.x;
    var yDif = coordinate1.y - coordinate2.y;
    return Math.sqrt(xDif * xDif + yDif * yDif);
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function checkCoordinateOnArc(coordinate, attrs) {
    var arcs = [];
    arcs = arcs.concat(attrs);
    for (var i = 0; i < arcs.length; i++) {
        var arc_1 = arcs[i];
        if (Math.abs(getDistance(coordinate, arc_1) - arc_1.r) < DEVIATION) {
            var r = arc_1.r, startAngle = arc_1.startAngle, endAngle = arc_1.endAngle;
            var startCoordinateX = r * Math.cos(startAngle) + arc_1.x;
            var startCoordinateY = r * Math.sin(startAngle) + arc_1.y;
            var endCoordinateX = r * Math.cos(endAngle) + arc_1.x;
            var endCoordinateY = r * Math.sin(endAngle) + arc_1.y;
            if (coordinate.x <= Math.max(startCoordinateX, endCoordinateX) + DEVIATION &&
                coordinate.x >= Math.min(startCoordinateX, endCoordinateX) - DEVIATION &&
                coordinate.y <= Math.max(startCoordinateY, endCoordinateY) + DEVIATION &&
                coordinate.y >= Math.min(startCoordinateY, endCoordinateY) - DEVIATION) {
                return true;
            }
        }
    }
    return false;
}
function drawArc(ctx, attrs, styles) {
    var arcs = [];
    arcs = arcs.concat(attrs);
    var _a = styles.style, style = _a === void 0 ? exports.LineType.Solid : _a, _b = styles.size, size = _b === void 0 ? 1 : _b, _c = styles.color, color = _c === void 0 ? 'currentColor' : _c, _d = styles.dashedValue, dashedValue = _d === void 0 ? [2, 2] : _d;
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    if (style === exports.LineType.Dashed) {
        ctx.setLineDash(dashedValue);
    }
    else {
        ctx.setLineDash([]);
    }
    arcs.forEach(function (_a) {
        var x = _a.x, y = _a.y, r = _a.r, startAngle = _a.startAngle, endAngle = _a.endAngle;
        ctx.beginPath();
        ctx.arc(x, y, r, startAngle, endAngle);
        ctx.stroke();
        ctx.closePath();
    });
}
var arc = {
    name: 'arc',
    checkEventOn: checkCoordinateOnArc,
    draw: function (ctx, attrs, styles) {
        drawArc(ctx, attrs, styles);
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var figures = {};
var extensions = [circle, line, polygon, rect, text, rectText, arc];
extensions.forEach(function (figure) {
    figures[figure.name] = FigureImp.extend(figure);
});
function getSupportedFigures() {
    return Object.keys(figures);
}
function registerFigure(figure) {
    figures[figure.name] = FigureImp.extend(figure);
}
function getInnerFigureClass(name) {
    var _a;
    return (_a = figures[name]) !== null && _a !== void 0 ? _a : null;
}
function getFigureClass(name) {
    var _a;
    return (_a = figures[name]) !== null && _a !== void 0 ? _a : null;
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(widget) {
        var _this = _super.call(this) || this;
        _this._widget = widget;
        return _this;
    }
    View.prototype.getWidget = function () { return this._widget; };
    View.prototype.createFigure = function (figure, eventHandler) {
        var FigureClazz = getInnerFigureClass(figure.name);
        if (FigureClazz !== null) {
            var instance = new FigureClazz(figure);
            if (isValid(eventHandler)) {
                for (var key in eventHandler) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (eventHandler.hasOwnProperty(key)) {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                        instance.registerEvent(key, eventHandler[key]);
                    }
                }
                this.addChild(instance);
            }
            return instance;
        }
        return null;
    };
    View.prototype.draw = function (ctx) {
        this.clear();
        this.drawImp(ctx);
    };
    return View;
}(Eventful));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var GridView = /** @class */ (function (_super) {
    __extends(GridView, _super);
    function GridView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridView.prototype.drawImp = function (ctx) {
        var _a, _b;
        var widget = this.getWidget();
        var pane = this.getWidget().getPane();
        var chart = pane.getChart();
        var bounding = widget.getBounding();
        var gridStyles = chart.getStyles().grid;
        var show = gridStyles.show;
        if (show) {
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            var horizontalStyles = gridStyles.horizontal;
            var horizontalShow = horizontalStyles.show;
            if (horizontalShow) {
                var yAxis = pane.getAxisComponent();
                var attrs = yAxis.getTicks().map(function (tick) { return ({
                    coordinates: [
                        { x: 0, y: tick.coord },
                        { x: bounding.width, y: tick.coord }
                    ]
                }); });
                (_a = this.createFigure({
                    name: 'line',
                    attrs: attrs,
                    styles: horizontalStyles
                })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
            }
            var verticalStyles = gridStyles.vertical;
            var verticalShow = verticalStyles.show;
            if (verticalShow) {
                var xAxis = chart.getXAxisPane().getAxisComponent();
                var attrs = xAxis.getTicks().map(function (tick) { return ({
                    coordinates: [
                        { x: tick.coord, y: 0 },
                        { x: tick.coord, y: bounding.height }
                    ]
                }); });
                (_b = this.createFigure({
                    name: 'line',
                    attrs: attrs,
                    styles: verticalStyles
                })) === null || _b === void 0 ? void 0 : _b.draw(ctx);
            }
            ctx.restore();
        }
    };
    return GridView;
}(View));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ChildrenView = /** @class */ (function (_super) {
    __extends(ChildrenView, _super);
    function ChildrenView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildrenView.prototype.eachChildren = function (childCallback) {
        var pane = this.getWidget().getPane();
        var chartStore = pane.getChart().getChartStore();
        var visibleDataList = chartStore.getVisibleDataList();
        var barSpace = chartStore.getTimeScaleStore().getBarSpace();
        visibleDataList.forEach(function (data, index) {
            childCallback(data, barSpace, index);
        });
    };
    return ChildrenView;
}(View));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CandleBarView = /** @class */ (function (_super) {
    __extends(CandleBarView, _super);
    function CandleBarView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._boundCandleBarClickEvent = function (data) { return function () {
            _this.getWidget().getPane().getChart().getChartStore().getActionStore().execute(exports.ActionType.OnCandleBarClick, data);
            return false;
        }; };
        return _this;
    }
    CandleBarView.prototype.drawImp = function (ctx) {
        var _this = this;
        var pane = this.getWidget().getPane();
        var isMain = pane.getId() === PaneIdConstants.CANDLE;
        var chartStore = pane.getChart().getChartStore();
        var candleBarOptions = this.getCandleBarOptions(chartStore);
        if (candleBarOptions !== null) {
            var ohlcSize_1 = 0;
            var halfOhlcSize_1 = 0;
            if (candleBarOptions.type === exports.CandleType.Ohlc) {
                var gapBar = chartStore.getTimeScaleStore().getBarSpace().gapBar;
                ohlcSize_1 = Math.min(Math.max(Math.round(gapBar * 0.2), 1), 8);
                if (ohlcSize_1 > 2 && ohlcSize_1 % 2 === 1) {
                    ohlcSize_1--;
                }
                halfOhlcSize_1 = Math.floor(halfOhlcSize_1 / 2);
            }
            var yAxis_1 = pane.getAxisComponent();
            this.eachChildren(function (data, barSpace) {
                var kLineData = data.data, x = data.x;
                if (isValid(kLineData)) {
                    var open_1 = kLineData.open, high = kLineData.high, low = kLineData.low, close_1 = kLineData.close;
                    var type = candleBarOptions.type, styles = candleBarOptions.styles;
                    var colors = [];
                    if (close_1 > open_1) {
                        colors[0] = styles.upColor;
                        colors[1] = styles.upBorderColor;
                        colors[2] = styles.upWickColor;
                    }
                    else if (close_1 < open_1) {
                        colors[0] = styles.downColor;
                        colors[1] = styles.downBorderColor;
                        colors[2] = styles.downWickColor;
                    }
                    else {
                        colors[0] = styles.noChangeColor;
                        colors[1] = styles.noChangeBorderColor;
                        colors[2] = styles.noChangeWickColor;
                    }
                    var openY = yAxis_1.convertToPixel(open_1);
                    var closeY = yAxis_1.convertToPixel(close_1);
                    var priceY = [
                        openY, closeY,
                        yAxis_1.convertToPixel(high),
                        yAxis_1.convertToPixel(low)
                    ];
                    priceY.sort(function (a, b) { return a - b; });
                    var rects = [];
                    switch (type) {
                        case exports.CandleType.CandleSolid: {
                            rects = _this._createSolidBar(x, priceY, barSpace, colors);
                            break;
                        }
                        case exports.CandleType.CandleStroke: {
                            rects = _this._createStrokeBar(x, priceY, barSpace, colors);
                            break;
                        }
                        case exports.CandleType.CandleUpStroke: {
                            if (close_1 > open_1) {
                                rects = _this._createStrokeBar(x, priceY, barSpace, colors);
                            }
                            else {
                                rects = _this._createSolidBar(x, priceY, barSpace, colors);
                            }
                            break;
                        }
                        case exports.CandleType.CandleDownStroke: {
                            if (open_1 > close_1) {
                                rects = _this._createStrokeBar(x, priceY, barSpace, colors);
                            }
                            else {
                                rects = _this._createSolidBar(x, priceY, barSpace, colors);
                            }
                            break;
                        }
                        case exports.CandleType.Ohlc: {
                            rects = [
                                {
                                    name: 'rect',
                                    attrs: [
                                        {
                                            x: x - halfOhlcSize_1,
                                            y: priceY[0],
                                            width: ohlcSize_1,
                                            height: priceY[3] - priceY[0]
                                        },
                                        {
                                            x: x - barSpace.halfGapBar,
                                            y: openY + ohlcSize_1 > priceY[3] ? priceY[3] - ohlcSize_1 : openY,
                                            width: barSpace.halfGapBar,
                                            height: ohlcSize_1
                                        },
                                        {
                                            x: x + halfOhlcSize_1,
                                            y: closeY + ohlcSize_1 > priceY[3] ? priceY[3] - ohlcSize_1 : closeY,
                                            width: barSpace.halfGapBar - halfOhlcSize_1,
                                            height: ohlcSize_1
                                        }
                                    ],
                                    styles: { color: colors[0] }
                                }
                            ];
                            break;
                        }
                    }
                    rects.forEach(function (rect) {
                        var _a;
                        var handler;
                        if (isMain) {
                            handler = {
                                mouseClickEvent: _this._boundCandleBarClickEvent(data)
                            };
                        }
                        (_a = _this.createFigure(rect, handler)) === null || _a === void 0 ? void 0 : _a.draw(ctx);
                    });
                }
            });
        }
    };
    CandleBarView.prototype.getCandleBarOptions = function (chartStore) {
        var candleStyles = chartStore.getStyles().candle;
        return {
            type: candleStyles.type,
            styles: candleStyles.bar
        };
    };
    CandleBarView.prototype._createSolidBar = function (x, priceY, barSpace, colors) {
        return [
            {
                name: 'rect',
                attrs: {
                    x: x,
                    y: priceY[0],
                    width: 1,
                    height: priceY[3] - priceY[0]
                },
                styles: { color: colors[2] }
            },
            {
                name: 'rect',
                attrs: {
                    x: x - barSpace.halfGapBar,
                    y: priceY[1],
                    width: barSpace.gapBar,
                    height: Math.max(1, priceY[2] - priceY[1])
                },
                styles: {
                    style: exports.PolygonType.StrokeFill,
                    color: colors[0],
                    borderColor: colors[1]
                }
            }
        ];
    };
    CandleBarView.prototype._createStrokeBar = function (x, priceY, barSpace, colors) {
        return [
            {
                name: 'rect',
                attrs: [
                    {
                        x: x,
                        y: priceY[0],
                        width: 1,
                        height: priceY[1] - priceY[0]
                    },
                    {
                        x: x,
                        y: priceY[2],
                        width: 1,
                        height: priceY[3] - priceY[2]
                    }
                ],
                styles: { color: colors[2] }
            },
            {
                name: 'rect',
                attrs: {
                    x: x - barSpace.halfGapBar,
                    y: priceY[1],
                    width: barSpace.gapBar,
                    height: Math.max(1, priceY[2] - priceY[1])
                },
                styles: {
                    style: exports.PolygonType.Stroke,
                    borderColor: colors[1]
                }
            }
        ];
    };
    return CandleBarView;
}(ChildrenView));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IndicatorView = /** @class */ (function (_super) {
    __extends(IndicatorView, _super);
    function IndicatorView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndicatorView.prototype.getCandleBarOptions = function (chartStore) {
        var e_1, _a;
        var pane = this.getWidget().getPane();
        var yAxis = pane.getAxisComponent();
        if (!yAxis.isInCandle()) {
            var indicators = chartStore.getIndicatorStore().getInstances(pane.getId());
            try {
                for (var indicators_1 = __values(indicators), indicators_1_1 = indicators_1.next(); !indicators_1_1.done; indicators_1_1 = indicators_1.next()) {
                    var indicator = indicators_1_1.value;
                    if (indicator.shouldOhlc && indicator.visible) {
                        var indicatorStyles = indicator.styles;
                        var defaultStyles = chartStore.getStyles().indicator;
                        var upColor = formatValue(indicatorStyles, 'ohlc.upColor', defaultStyles.ohlc.upColor);
                        var downColor = formatValue(indicatorStyles, 'ohlc.downColor', defaultStyles.ohlc.downColor);
                        var noChangeColor = formatValue(indicatorStyles, 'ohlc.noChangeColor', defaultStyles.ohlc.noChangeColor);
                        return {
                            type: exports.CandleType.Ohlc,
                            styles: {
                                upColor: upColor,
                                downColor: downColor,
                                noChangeColor: noChangeColor,
                                upBorderColor: upColor,
                                downBorderColor: downColor,
                                noChangeBorderColor: noChangeColor,
                                upWickColor: upColor,
                                downWickColor: downColor,
                                noChangeWickColor: noChangeColor
                            }
                        };
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (indicators_1_1 && !indicators_1_1.done && (_a = indicators_1.return)) _a.call(indicators_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return null;
    };
    IndicatorView.prototype.drawImp = function (ctx) {
        var _this = this;
        _super.prototype.drawImp.call(this, ctx);
        var widget = this.getWidget();
        var pane = widget.getPane();
        var chart = pane.getChart();
        var bounding = widget.getBounding();
        var xAxis = chart.getXAxisPane().getAxisComponent();
        var yAxis = pane.getAxisComponent();
        var chartStore = chart.getChartStore();
        var dataList = chartStore.getDataList();
        var timeScaleStore = chartStore.getTimeScaleStore();
        var visibleRange = timeScaleStore.getVisibleRange();
        var indicators = chartStore.getIndicatorStore().getInstances(pane.getId());
        var defaultStyles = chartStore.getStyles().indicator;
        ctx.save();
        indicators.forEach(function (indicator) {
            var _a;
            if (indicator.visible) {
                if (indicator.zLevel < 0) {
                    ctx.globalCompositeOperation = 'destination-over';
                }
                else {
                    ctx.globalCompositeOperation = 'source-over';
                }
                var isCover = false;
                if (indicator.draw !== null) {
                    ctx.save();
                    isCover = (_a = indicator.draw({
                        ctx: ctx,
                        kLineDataList: dataList,
                        indicator: indicator,
                        visibleRange: visibleRange,
                        bounding: bounding,
                        barSpace: timeScaleStore.getBarSpace(),
                        defaultStyles: defaultStyles,
                        xAxis: xAxis,
                        yAxis: yAxis
                    })) !== null && _a !== void 0 ? _a : false;
                    ctx.restore();
                }
                if (!isCover) {
                    var result_1 = indicator.result;
                    var lines_1 = [];
                    _this.eachChildren(function (data, barSpace) {
                        var _a, _b, _c;
                        var halfGapBar = barSpace.halfGapBar;
                        var dataIndex = data.dataIndex, x = data.x;
                        var prevX = xAxis.convertToPixel(dataIndex - 1);
                        var nextX = xAxis.convertToPixel(dataIndex + 1);
                        var prevData = (_a = result_1[dataIndex - 1]) !== null && _a !== void 0 ? _a : null;
                        var currentData = (_b = result_1[dataIndex]) !== null && _b !== void 0 ? _b : null;
                        var nextData = (_c = result_1[dataIndex + 1]) !== null && _c !== void 0 ? _c : null;
                        var prevCoordinate = { x: prevX };
                        var currentCoordinate = { x: x };
                        var nextCoordinate = { x: nextX };
                        indicator.figures.forEach(function (_a) {
                            var key = _a.key;
                            var prevValue = prevData === null || prevData === void 0 ? void 0 : prevData[key];
                            if (isNumber(prevValue)) {
                                prevCoordinate[key] = yAxis.convertToPixel(prevValue);
                            }
                            var currentValue = currentData === null || currentData === void 0 ? void 0 : currentData[key];
                            if (isNumber(currentValue)) {
                                currentCoordinate[key] = yAxis.convertToPixel(currentValue);
                            }
                            var nextValue = nextData === null || nextData === void 0 ? void 0 : nextData[key];
                            if (isNumber(nextValue)) {
                                nextCoordinate[key] = yAxis.convertToPixel(nextValue);
                            }
                        });
                        eachFigures(dataList, indicator, dataIndex, defaultStyles, function (figure, figureStyles, figureIndex) {
                            var _a, _b, _c;
                            if (isValid(currentData === null || currentData === void 0 ? void 0 : currentData[figure.key])) {
                                var valueY = currentCoordinate[figure.key];
                                var attrs = (_a = figure.attrs) === null || _a === void 0 ? void 0 : _a.call(figure, {
                                    data: { prev: prevData, current: currentData, next: nextData },
                                    coordinate: { prev: prevCoordinate, current: currentCoordinate, next: nextCoordinate },
                                    bounding: bounding,
                                    barSpace: barSpace,
                                    xAxis: xAxis,
                                    yAxis: yAxis
                                });
                                if (!isValid(attrs)) {
                                    switch (figure.type) {
                                        case 'circle': {
                                            attrs = { x: x, y: valueY, r: Math.max(1, halfGapBar) };
                                            break;
                                        }
                                        case 'rect':
                                        case 'bar': {
                                            var baseValue = (_b = figure.baseValue) !== null && _b !== void 0 ? _b : yAxis.getRange().from;
                                            var baseValueY = yAxis.convertToPixel(baseValue);
                                            var height = Math.abs(baseValueY - valueY);
                                            if (baseValue !== (currentData === null || currentData === void 0 ? void 0 : currentData[figure.key])) {
                                                height = Math.max(1, height);
                                            }
                                            var y = void 0;
                                            if (valueY > baseValueY) {
                                                y = baseValueY;
                                            }
                                            else {
                                                y = valueY;
                                            }
                                            attrs = {
                                                x: x - halfGapBar,
                                                y: y,
                                                width: Math.max(1, halfGapBar * 2),
                                                height: height
                                            };
                                            break;
                                        }
                                        case 'line': {
                                            if (!isValid(lines_1[figureIndex])) {
                                                lines_1[figureIndex] = [];
                                            }
                                            if (isNumber(currentCoordinate[figure.key]) && isNumber(nextCoordinate[figure.key])) {
                                                lines_1[figureIndex].push({
                                                    coordinates: [
                                                        { x: currentCoordinate.x, y: currentCoordinate[figure.key] },
                                                        { x: nextCoordinate.x, y: nextCoordinate[figure.key] }
                                                    ],
                                                    styles: figureStyles
                                                });
                                            }
                                            break;
                                        }
                                    }
                                }
                                var type = figure.type;
                                if (isValid(attrs) && type !== 'line') {
                                    (_c = _this.createFigure({
                                        name: type === 'bar' ? 'rect' : type,
                                        attrs: attrs,
                                        styles: figureStyles
                                    })) === null || _c === void 0 ? void 0 : _c.draw(ctx);
                                }
                            }
                        });
                    });
                    // merge line and render
                    lines_1.forEach(function (items) {
                        if (items.length > 1) {
                            var mergeLines = [
                                {
                                    coordinates: [items[0].coordinates[0], items[0].coordinates[1]],
                                    styles: items[0].styles
                                }
                            ];
                            for (var i = 1; i < items.length; i++) {
                                var lastMergeLine = mergeLines[mergeLines.length - 1];
                                var current = items[i];
                                var lastMergeLineLastCoordinate = lastMergeLine.coordinates[lastMergeLine.coordinates.length - 1];
                                if (lastMergeLineLastCoordinate.x === current.coordinates[0].x &&
                                    lastMergeLineLastCoordinate.y === current.coordinates[0].y &&
                                    lastMergeLine.styles.style === current.styles.style &&
                                    lastMergeLine.styles.color === current.styles.color &&
                                    lastMergeLine.styles.size === current.styles.size &&
                                    lastMergeLine.styles.smooth === current.styles.smooth &&
                                    lastMergeLine.styles.dashedValue[0] === current.styles.dashedValue[0] &&
                                    lastMergeLine.styles.dashedValue[1] === current.styles.dashedValue[1]) {
                                    lastMergeLine.coordinates.push(current.coordinates[1]);
                                }
                                else {
                                    mergeLines.push({
                                        coordinates: [current.coordinates[0], current.coordinates[1]],
                                        styles: current.styles
                                    });
                                }
                            }
                            mergeLines.forEach(function (_a) {
                                var _b;
                                var coordinates = _a.coordinates, styles = _a.styles;
                                (_b = _this.createFigure({
                                    name: 'line',
                                    attrs: { coordinates: coordinates },
                                    styles: styles
                                })) === null || _b === void 0 ? void 0 : _b.draw(ctx);
                            });
                        }
                    });
                }
            }
        });
        ctx.restore();
    };
    return IndicatorView;
}(CandleBarView));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CrosshairLineView = /** @class */ (function (_super) {
    __extends(CrosshairLineView, _super);
    function CrosshairLineView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CrosshairLineView.prototype.drawImp = function (ctx) {
        var widget = this.getWidget();
        var pane = widget.getPane();
        var bounding = widget.getBounding();
        var chartStore = widget.getPane().getChart().getChartStore();
        var crosshair = chartStore.getTooltipStore().getCrosshair();
        var styles = chartStore.getStyles().crosshair;
        if (isString(crosshair.paneId) && styles.show) {
            if (crosshair.paneId === pane.getId()) {
                var y = crosshair.y;
                this._drawLine(ctx, [
                    { x: 0, y: y },
                    { x: bounding.width, y: y }
                ], styles.horizontal);
            }
            var x = crosshair.realX;
            this._drawLine(ctx, [
                { x: x, y: 0 },
                { x: x, y: bounding.height }
            ], styles.vertical);
        }
    };
    CrosshairLineView.prototype._drawLine = function (ctx, coordinates, styles) {
        var _a;
        if (styles.show) {
            var lineStyles = styles.line;
            if (lineStyles.show) {
                (_a = this.createFigure({
                    name: 'line',
                    attrs: { coordinates: coordinates },
                    styles: lineStyles
                })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
            }
        }
    };
    return CrosshairLineView;
}(View));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IndicatorTooltipView = /** @class */ (function (_super) {
    __extends(IndicatorTooltipView, _super);
    function IndicatorTooltipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._boundIconClickEvent = function (currentIcon) { return function () {
            var pane = _this.getWidget().getPane();
            pane.getChart().getChartStore().getActionStore().execute(exports.ActionType.OnTooltipIconClick, __assign({}, currentIcon));
            return true;
        }; };
        _this._boundIconMouseMoveEvent = function (currentIconInfo) { return function () {
            var pane = _this.getWidget().getPane();
            var tooltipStore = pane.getChart().getChartStore().getTooltipStore();
            tooltipStore.setActiveIcon(__assign({}, currentIconInfo));
            return true;
        }; };
        return _this;
    }
    IndicatorTooltipView.prototype.drawImp = function (ctx) {
        var widget = this.getWidget();
        var pane = widget.getPane();
        var chartStore = pane.getChart().getChartStore();
        var crosshair = chartStore.getTooltipStore().getCrosshair();
        if (isValid(crosshair.kLineData)) {
            var bounding = widget.getBounding();
            var customApi = chartStore.getCustomApi();
            var thousandsSeparator = chartStore.getThousandsSeparator();
            var decimalFoldThreshold = chartStore.getDecimalFoldThreshold();
            var indicators = chartStore.getIndicatorStore().getInstances(pane.getId());
            var activeIcon = chartStore.getTooltipStore().getActiveIcon();
            var defaultStyles = chartStore.getStyles().indicator;
            var _a = defaultStyles.tooltip, offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop, offsetRight = _a.offsetRight;
            this.drawIndicatorTooltip(ctx, pane.getId(), chartStore.getDataList(), crosshair, activeIcon, indicators, customApi, thousandsSeparator, decimalFoldThreshold, offsetLeft, offsetTop, bounding.width - offsetRight, defaultStyles);
        }
    };
    IndicatorTooltipView.prototype.drawIndicatorTooltip = function (ctx, paneId, dataList, crosshair, activeTooltipIcon, indicators, customApi, thousandsSeparator, decimalFoldThreshold, left, top, maxWidth, styles) {
        var _this = this;
        var tooltipStyles = styles.tooltip;
        if (this.isDrawTooltip(crosshair, tooltipStyles)) {
            var tooltipTextStyles_1 = tooltipStyles.text;
            indicators.forEach(function (indicator) {
                var prevRowHeight = 0;
                var coordinate = { x: left, y: top };
                var _a = _this.getIndicatorTooltipData(dataList, crosshair, indicator, customApi, thousandsSeparator, decimalFoldThreshold, styles), name = _a.name, calcParamsText = _a.calcParamsText, legends = _a.values, icons = _a.icons;
                var nameValid = name.length > 0;
                var legendValid = legends.length > 0;
                if (nameValid || legendValid) {
                    var _b = __read(_this.classifyTooltipIcons(icons), 3), leftIcons = _b[0], middleIcons = _b[1], rightIcons = _b[2];
                    prevRowHeight = _this.drawStandardTooltipIcons(ctx, activeTooltipIcon, leftIcons, coordinate, paneId, indicator.name, left, prevRowHeight, maxWidth);
                    if (nameValid) {
                        var text = name;
                        if (calcParamsText.length > 0) {
                            text = "".concat(text).concat(calcParamsText);
                        }
                        prevRowHeight = _this.drawStandardTooltipLegends(ctx, [
                            {
                                title: { text: '', color: tooltipTextStyles_1.color },
                                value: { text: text, color: tooltipTextStyles_1.color }
                            }
                        ], coordinate, left, prevRowHeight, maxWidth, tooltipTextStyles_1);
                    }
                    prevRowHeight = _this.drawStandardTooltipIcons(ctx, activeTooltipIcon, middleIcons, coordinate, paneId, indicator.name, left, prevRowHeight, maxWidth);
                    if (legendValid) {
                        prevRowHeight = _this.drawStandardTooltipLegends(ctx, legends, coordinate, left, prevRowHeight, maxWidth, tooltipStyles.text);
                    }
                    // draw right icons
                    prevRowHeight = _this.drawStandardTooltipIcons(ctx, activeTooltipIcon, rightIcons, coordinate, paneId, indicator.name, left, prevRowHeight, maxWidth);
                    top = coordinate.y + prevRowHeight;
                }
            });
        }
        return top;
    };
    IndicatorTooltipView.prototype.drawStandardTooltipIcons = function (ctx, activeIcon, icons, coordinate, paneId, indicatorName, left, prevRowHeight, maxWidth) {
        var _this = this;
        if (icons.length > 0) {
            var width_1 = 0;
            var height_1 = 0;
            icons.forEach(function (icon) {
                var _a = icon.marginLeft, marginLeft = _a === void 0 ? 0 : _a, _b = icon.marginTop, marginTop = _b === void 0 ? 0 : _b, _c = icon.marginRight, marginRight = _c === void 0 ? 0 : _c, _d = icon.marginBottom, marginBottom = _d === void 0 ? 0 : _d, _e = icon.paddingLeft, paddingLeft = _e === void 0 ? 0 : _e, _f = icon.paddingTop, paddingTop = _f === void 0 ? 0 : _f, _g = icon.paddingRight, paddingRight = _g === void 0 ? 0 : _g, _h = icon.paddingBottom, paddingBottom = _h === void 0 ? 0 : _h, size = icon.size, fontFamily = icon.fontFamily, text = icon.icon;
                ctx.font = createFont(size, 'normal', fontFamily);
                width_1 += (marginLeft + paddingLeft + ctx.measureText(text).width + paddingRight + marginRight);
                height_1 = Math.max(height_1, marginTop + paddingTop + size + paddingBottom + marginBottom);
            });
            if (coordinate.x + width_1 > maxWidth) {
                coordinate.x = left;
                coordinate.y += prevRowHeight;
                prevRowHeight = height_1;
            }
            else {
                prevRowHeight = Math.max(prevRowHeight, height_1);
            }
            icons.forEach(function (icon) {
                var _a;
                var _b = icon.marginLeft, marginLeft = _b === void 0 ? 0 : _b, _c = icon.marginTop, marginTop = _c === void 0 ? 0 : _c, _d = icon.marginRight, marginRight = _d === void 0 ? 0 : _d, _e = icon.paddingLeft, paddingLeft = _e === void 0 ? 0 : _e, _f = icon.paddingTop, paddingTop = _f === void 0 ? 0 : _f, _g = icon.paddingRight, paddingRight = _g === void 0 ? 0 : _g, _h = icon.paddingBottom, paddingBottom = _h === void 0 ? 0 : _h, color = icon.color, activeColor = icon.activeColor, size = icon.size, fontFamily = icon.fontFamily, text = icon.icon, backgroundColor = icon.backgroundColor, activeBackgroundColor = icon.activeBackgroundColor;
                var active = (activeIcon === null || activeIcon === void 0 ? void 0 : activeIcon.paneId) === paneId && (activeIcon === null || activeIcon === void 0 ? void 0 : activeIcon.indicatorName) === indicatorName && (activeIcon === null || activeIcon === void 0 ? void 0 : activeIcon.iconId) === icon.id;
                (_a = _this.createFigure({
                    name: 'text',
                    attrs: { text: text, x: coordinate.x + marginLeft, y: coordinate.y + marginTop },
                    styles: {
                        paddingLeft: paddingLeft,
                        paddingTop: paddingTop,
                        paddingRight: paddingRight,
                        paddingBottom: paddingBottom,
                        color: active ? activeColor : color,
                        size: size,
                        family: fontFamily,
                        backgroundColor: active ? activeBackgroundColor : backgroundColor
                    }
                }, {
                    mouseClickEvent: _this._boundIconClickEvent({ paneId: paneId, indicatorName: indicatorName, iconId: icon.id }),
                    mouseMoveEvent: _this._boundIconMouseMoveEvent({ paneId: paneId, indicatorName: indicatorName, iconId: icon.id })
                })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
                coordinate.x += (marginLeft + paddingLeft + ctx.measureText(text).width + paddingRight + marginRight);
            });
        }
        return prevRowHeight;
    };
    IndicatorTooltipView.prototype.drawStandardTooltipLegends = function (ctx, legends, coordinate, left, prevRowHeight, maxWidth, styles) {
        var _this = this;
        if (legends.length > 0) {
            var marginLeft_1 = styles.marginLeft, marginTop_1 = styles.marginTop, marginRight_1 = styles.marginRight, marginBottom_1 = styles.marginBottom, size_1 = styles.size, family_1 = styles.family, weight_1 = styles.weight;
            ctx.font = createFont(size_1, weight_1, family_1);
            legends.forEach(function (data) {
                var _a, _b;
                var title = data.title;
                var value = data.value;
                var titleTextWidth = ctx.measureText(title.text).width;
                var valueTextWidth = ctx.measureText(value.text).width;
                var totalTextWidth = titleTextWidth + valueTextWidth;
                var h = marginTop_1 + size_1 + marginBottom_1;
                if (coordinate.x + marginLeft_1 + totalTextWidth + marginRight_1 > maxWidth) {
                    coordinate.x = left;
                    coordinate.y += prevRowHeight;
                    prevRowHeight = h;
                }
                else {
                    prevRowHeight = Math.max(prevRowHeight, h);
                }
                if (title.text.length > 0) {
                    (_a = _this.createFigure({
                        name: 'text',
                        attrs: { x: coordinate.x + marginLeft_1, y: coordinate.y + marginTop_1, text: title.text },
                        styles: { color: title.color, size: size_1, family: family_1, weight: weight_1 }
                    })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
                }
                (_b = _this.createFigure({
                    name: 'text',
                    attrs: { x: coordinate.x + marginLeft_1 + titleTextWidth, y: coordinate.y + marginTop_1, text: value.text },
                    styles: { color: value.color, size: size_1, family: family_1, weight: weight_1 }
                })) === null || _b === void 0 ? void 0 : _b.draw(ctx);
                coordinate.x += (marginLeft_1 + totalTextWidth + marginRight_1);
            });
        }
        return prevRowHeight;
    };
    IndicatorTooltipView.prototype.isDrawTooltip = function (crosshair, styles) {
        var showRule = styles.showRule;
        return showRule === exports.TooltipShowRule.Always ||
            (showRule === exports.TooltipShowRule.FollowCross && isString(crosshair.paneId));
    };
    IndicatorTooltipView.prototype.getIndicatorTooltipData = function (dataList, crosshair, indicator, customApi, thousandsSeparator, decimalFoldThreshold, styles) {
        var _a, _b;
        var tooltipStyles = styles.tooltip;
        var name = tooltipStyles.showName ? indicator.shortName : '';
        var calcParamsText = '';
        var calcParams = indicator.calcParams;
        if (calcParams.length > 0 && tooltipStyles.showParams) {
            calcParamsText = "(".concat(calcParams.join(','), ")");
        }
        var tooltipData = { name: name, calcParamsText: calcParamsText, values: [], icons: tooltipStyles.icons };
        var dataIndex = crosshair.dataIndex;
        var result = (_a = indicator.result) !== null && _a !== void 0 ? _a : [];
        var legends = [];
        if (indicator.visible) {
            var indicatorData_1 = (_b = result[dataIndex]) !== null && _b !== void 0 ? _b : {};
            eachFigures(dataList, indicator, dataIndex, styles, function (figure, figureStyles) {
                var _a;
                if (isString(figure.title)) {
                    var color = figureStyles.color;
                    var value = (_a = indicatorData_1[figure.key]) !== null && _a !== void 0 ? _a : tooltipStyles.defaultValue;
                    if (isNumber(value)) {
                        value = formatPrecision(value, indicator.precision);
                        if (indicator.shouldFormatBigNumber) {
                            value = customApi.formatBigNumber(value);
                        }
                        value = formatFoldDecimal(formatThousands(value, thousandsSeparator), decimalFoldThreshold);
                    }
                    legends.push({ title: { text: figure.title, color: color }, value: { text: value, color: color } });
                }
            });
            tooltipData.values = legends;
        }
        if (indicator.createTooltipDataSource !== null) {
            var widget = this.getWidget();
            var pane = widget.getPane();
            var chartStore = pane.getChart().getChartStore();
            var _c = indicator.createTooltipDataSource({
                kLineDataList: dataList,
                indicator: indicator,
                visibleRange: chartStore.getTimeScaleStore().getVisibleRange(),
                bounding: widget.getBounding(),
                crosshair: crosshair,
                defaultStyles: styles,
                xAxis: pane.getChart().getXAxisPane().getAxisComponent(),
                yAxis: pane.getAxisComponent()
            }), customName = _c.name, customCalcParamsText = _c.calcParamsText, customLegends = _c.values, customIcons = _c.icons;
            if (isString(customName) && tooltipStyles.showName) {
                tooltipData.name = customName;
            }
            if (isString(customCalcParamsText) && tooltipStyles.showParams) {
                tooltipData.calcParamsText = customCalcParamsText;
            }
            if (isValid(customIcons)) {
                tooltipData.icons = customIcons;
            }
            if (isValid(customLegends) && indicator.visible) {
                var optimizedLegends_1 = [];
                var color_1 = styles.tooltip.text.color;
                customLegends.forEach(function (data) {
                    var _a;
                    var title = { text: '', color: color_1 };
                    if (isObject(data.title)) {
                        title = data.title;
                    }
                    else {
                        title.text = data.title;
                    }
                    var value = { text: '', color: color_1 };
                    if (isObject(data.value)) {
                        value = data.value;
                    }
                    else {
                        value.text = (_a = data.value) !== null && _a !== void 0 ? _a : tooltipStyles.defaultValue;
                    }
                    if (isNumber(value.text)) {
                        var text = formatPrecision(value.text, indicator.precision);
                        if (indicator.shouldFormatBigNumber) {
                            text = customApi.formatBigNumber(text);
                        }
                        text = formatFoldDecimal(formatThousands(text, thousandsSeparator), decimalFoldThreshold);
                        value.text = text;
                    }
                    optimizedLegends_1.push({ title: title, value: value });
                });
                tooltipData.values = optimizedLegends_1;
            }
        }
        return tooltipData;
    };
    IndicatorTooltipView.prototype.classifyTooltipIcons = function (icons) {
        var leftIcons = [];
        var middleIcons = [];
        var rightIcons = [];
        icons.forEach(function (icon) {
            switch (icon.position) {
                case exports.TooltipIconPosition.Left: {
                    leftIcons.push(icon);
                    break;
                }
                case exports.TooltipIconPosition.Middle: {
                    middleIcons.push(icon);
                    break;
                }
                case exports.TooltipIconPosition.Right: {
                    rightIcons.push(icon);
                    break;
                }
            }
        });
        return [leftIcons, middleIcons, rightIcons];
    };
    return IndicatorTooltipView;
}(View));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OverlayView = /** @class */ (function (_super) {
    __extends(OverlayView, _super);
    function OverlayView(widget) {
        var _this = _super.call(this, widget) || this;
        _this._initEvent();
        return _this;
    }
    OverlayView.prototype._initEvent = function () {
        var _this = this;
        var pane = this.getWidget().getPane();
        var paneId = pane.getId();
        var overlayStore = pane.getChart().getChartStore().getOverlayStore();
        this.registerEvent('mouseMoveEvent', function (event) {
            var _a;
            var progressInstanceInfo = overlayStore.getProgressInstanceInfo();
            if (progressInstanceInfo !== null) {
                var overlay = progressInstanceInfo.instance;
                var progressInstancePaneId = progressInstanceInfo.paneId;
                if (overlay.isStart()) {
                    overlayStore.updateProgressInstanceInfo(paneId);
                    progressInstancePaneId = paneId;
                }
                var index = overlay.points.length - 1;
                var key = "".concat(OVERLAY_FIGURE_KEY_PREFIX, "point_").concat(index);
                if (overlay.isDrawing() && progressInstancePaneId === paneId) {
                    overlay.eventMoveForDrawing(_this._coordinateToPoint(progressInstanceInfo.instance, event));
                    (_a = overlay.onDrawing) === null || _a === void 0 ? void 0 : _a.call(overlay, __assign({ overlay: overlay, figureKey: key, figureIndex: index }, event));
                }
                return _this._figureMouseMoveEvent(overlay, 1 /* EventOverlayInfoFigureType.Point */, key, index, 0)(event);
            }
            overlayStore.setHoverInstanceInfo({
                paneId: paneId,
                instance: null, figureType: 0 /* EventOverlayInfoFigureType.None */, figureKey: '', figureIndex: -1, attrsIndex: -1
            }, event);
            return false;
        }).registerEvent('mouseClickEvent', function (event) {
            var _a, _b;
            var progressInstanceInfo = overlayStore.getProgressInstanceInfo();
            if (progressInstanceInfo !== null) {
                var overlay = progressInstanceInfo.instance;
                var progressInstancePaneId = progressInstanceInfo.paneId;
                if (overlay.isStart()) {
                    overlayStore.updateProgressInstanceInfo(paneId, true);
                    progressInstancePaneId = paneId;
                }
                var index = overlay.points.length - 1;
                var key = "".concat(OVERLAY_FIGURE_KEY_PREFIX, "point_").concat(index);
                if (overlay.isDrawing() && progressInstancePaneId === paneId) {
                    overlay.eventMoveForDrawing(_this._coordinateToPoint(overlay, event));
                    (_a = overlay.onDrawing) === null || _a === void 0 ? void 0 : _a.call(overlay, __assign({ overlay: overlay, figureKey: key, figureIndex: index }, event));
                    overlay.nextStep();
                    if (!overlay.isDrawing()) {
                        overlayStore.progressInstanceComplete();
                        (_b = overlay.onDrawEnd) === null || _b === void 0 ? void 0 : _b.call(overlay, __assign({ overlay: overlay, figureKey: key, figureIndex: index }, event));
                    }
                }
                return _this._figureMouseClickEvent(overlay, 1 /* EventOverlayInfoFigureType.Point */, key, index, 0)(event);
            }
            overlayStore.setClickInstanceInfo({
                paneId: paneId,
                instance: null, figureType: 0 /* EventOverlayInfoFigureType.None */, figureKey: '', figureIndex: -1, attrsIndex: -1
            }, event);
            return false;
        }).registerEvent('mouseDoubleClickEvent', function (event) {
            var _a;
            var progressInstanceInfo = overlayStore.getProgressInstanceInfo();
            if (progressInstanceInfo !== null) {
                var overlay = progressInstanceInfo.instance;
                var progressInstancePaneId = progressInstanceInfo.paneId;
                if (overlay.isDrawing() && progressInstancePaneId === paneId) {
                    overlay.forceComplete();
                    if (!overlay.isDrawing()) {
                        overlayStore.progressInstanceComplete();
                        var index_1 = overlay.points.length - 1;
                        var key = "".concat(OVERLAY_FIGURE_KEY_PREFIX, "point_").concat(index_1);
                        (_a = overlay.onDrawEnd) === null || _a === void 0 ? void 0 : _a.call(overlay, __assign({ overlay: overlay, figureKey: key, figureIndex: index_1 }, event));
                    }
                }
                var index = overlay.points.length - 1;
                return _this._figureMouseClickEvent(overlay, 1 /* EventOverlayInfoFigureType.Point */, "".concat(OVERLAY_FIGURE_KEY_PREFIX, "point_").concat(index), index, 0)(event);
            }
            return false;
        }).registerEvent('mouseRightClickEvent', function (event) {
            var progressInstanceInfo = overlayStore.getProgressInstanceInfo();
            if (progressInstanceInfo !== null) {
                var overlay = progressInstanceInfo.instance;
                if (overlay.isDrawing()) {
                    var index = overlay.points.length - 1;
                    return _this._figureMouseRightClickEvent(overlay, 1 /* EventOverlayInfoFigureType.Point */, "".concat(OVERLAY_FIGURE_KEY_PREFIX, "point_").concat(index), index, 0)(event);
                }
            }
            return false;
        }).registerEvent('mouseUpEvent', function (event) {
            var _a;
            var _b = overlayStore.getPressedInstanceInfo(), instance = _b.instance, figureIndex = _b.figureIndex, figureKey = _b.figureKey;
            if (instance !== null) {
                (_a = instance.onPressedMoveEnd) === null || _a === void 0 ? void 0 : _a.call(instance, __assign({ overlay: instance, figureKey: figureKey, figureIndex: figureIndex }, event));
            }
            overlayStore.setPressedInstanceInfo({
                paneId: paneId,
                instance: null, figureType: 0 /* EventOverlayInfoFigureType.None */, figureKey: '', figureIndex: -1, attrsIndex: -1
            });
            return false;
        }).registerEvent('pressedMouseMoveEvent', function (event) {
            var _a, _b;
            var _c = overlayStore.getPressedInstanceInfo(), instance = _c.instance, figureType = _c.figureType, figureIndex = _c.figureIndex, figureKey = _c.figureKey;
            if (instance !== null) {
                if (!instance.lock) {
                    if (!((_b = (_a = instance.onPressedMoving) === null || _a === void 0 ? void 0 : _a.call(instance, __assign({ overlay: instance, figureIndex: figureIndex, figureKey: figureKey }, event))) !== null && _b !== void 0 ? _b : false)) {
                        var point = _this._coordinateToPoint(instance, event);
                        if (figureType === 1 /* EventOverlayInfoFigureType.Point */) {
                            instance.eventPressedPointMove(point, figureIndex);
                        }
                        else {
                            instance.eventPressedOtherMove(point, _this.getWidget().getPane().getChart().getChartStore().getTimeScaleStore());
                        }
                    }
                }
                return true;
            }
            return false;
        });
    };
    OverlayView.prototype._createFigureEvents = function (overlay, figureType, figureKey, figureIndex, attrsIndex, ignoreEvent) {
        var eventHandler;
        if (!overlay.isDrawing()) {
            var eventTypes = [];
            if (isValid(ignoreEvent)) {
                if (isBoolean(ignoreEvent)) {
                    if (ignoreEvent) {
                        eventTypes = getAllOverlayFigureIgnoreEventTypes();
                    }
                }
                else {
                    eventTypes = ignoreEvent;
                }
            }
            if (eventTypes.length === 0) {
                return {
                    mouseMoveEvent: this._figureMouseMoveEvent(overlay, figureType, figureKey, figureIndex, attrsIndex),
                    mouseDownEvent: this._figureMouseDownEvent(overlay, figureType, figureKey, figureIndex, attrsIndex),
                    mouseClickEvent: this._figureMouseClickEvent(overlay, figureType, figureKey, figureIndex, attrsIndex),
                    mouseRightClickEvent: this._figureMouseRightClickEvent(overlay, figureType, figureKey, figureIndex, attrsIndex),
                    mouseDoubleClickEvent: this._figureMouseDoubleClickEvent(overlay, figureType, figureKey, figureIndex, attrsIndex)
                };
            }
            eventHandler = {};
            // [
            //   'mouseClickEvent', mouseDoubleClickEvent, 'mouseRightClickEvent',
            //   'tapEvent', 'doubleTapEvent', 'mouseDownEvent',
            //   'touchStartEvent', 'mouseMoveEvent', 'touchMoveEvent'
            // ]
            if (!eventTypes.includes('mouseMoveEvent') && !eventTypes.includes('touchMoveEvent')) {
                eventHandler.mouseMoveEvent = this._figureMouseMoveEvent(overlay, figureType, figureKey, figureIndex, attrsIndex);
            }
            if (!eventTypes.includes('mouseDownEvent') && !eventTypes.includes('touchStartEvent')) {
                eventHandler.mouseDownEvent = this._figureMouseDownEvent(overlay, figureType, figureKey, figureIndex, attrsIndex);
            }
            if (!eventTypes.includes('mouseClickEvent') && !eventTypes.includes('tapEvent')) {
                eventHandler.mouseClickEvent = this._figureMouseClickEvent(overlay, figureType, figureKey, figureIndex, attrsIndex);
            }
            if (!eventTypes.includes('mouseDoubleClickEvent') && !eventTypes.includes('doubleTapEvent')) {
                eventHandler.mouseDoubleClickEvent = this._figureMouseDoubleClickEvent(overlay, figureType, figureKey, figureIndex, attrsIndex);
            }
            if (!eventTypes.includes('mouseRightClickEvent')) {
                eventHandler.mouseRightClickEvent = this._figureMouseRightClickEvent(overlay, figureType, figureKey, figureIndex, attrsIndex);
            }
        }
        return eventHandler;
    };
    OverlayView.prototype._figureMouseMoveEvent = function (overlay, figureType, figureKey, figureIndex, attrsIndex) {
        var _this = this;
        return function (event) {
            var pane = _this.getWidget().getPane();
            var overlayStore = pane.getChart().getChartStore().getOverlayStore();
            overlayStore.setHoverInstanceInfo({ paneId: pane.getId(), instance: overlay, figureType: figureType, figureKey: figureKey, figureIndex: figureIndex, attrsIndex: attrsIndex }, event);
            return true;
        };
    };
    OverlayView.prototype._figureMouseDownEvent = function (overlay, figureType, figureKey, figureIndex, attrsIndex) {
        var _this = this;
        return function (event) {
            var _a;
            var pane = _this.getWidget().getPane();
            var paneId = pane.getId();
            var overlayStore = pane.getChart().getChartStore().getOverlayStore();
            overlay.startPressedMove(_this._coordinateToPoint(overlay, event));
            (_a = overlay.onPressedMoveStart) === null || _a === void 0 ? void 0 : _a.call(overlay, __assign({ overlay: overlay, figureIndex: figureIndex, figureKey: figureKey }, event));
            overlayStore.setPressedInstanceInfo({ paneId: paneId, instance: overlay, figureType: figureType, figureKey: figureKey, figureIndex: figureIndex, attrsIndex: attrsIndex });
            return true;
        };
    };
    OverlayView.prototype._figureMouseClickEvent = function (overlay, figureType, figureKey, figureIndex, attrsIndex) {
        var _this = this;
        return function (event) {
            var pane = _this.getWidget().getPane();
            var paneId = pane.getId();
            var overlayStore = pane.getChart().getChartStore().getOverlayStore();
            overlayStore.setClickInstanceInfo({ paneId: paneId, instance: overlay, figureType: figureType, figureKey: figureKey, figureIndex: figureIndex, attrsIndex: attrsIndex }, event);
            return true;
        };
    };
    OverlayView.prototype._figureMouseDoubleClickEvent = function (overlay, _figureType, figureKey, figureIndex, _attrsIndex) {
        return function (event) {
            var _a;
            (_a = overlay.onDoubleClick) === null || _a === void 0 ? void 0 : _a.call(overlay, __assign(__assign({}, event), { figureIndex: figureIndex, figureKey: figureKey, overlay: overlay }));
            return true;
        };
    };
    OverlayView.prototype._figureMouseRightClickEvent = function (overlay, _figureType, figureKey, figureIndex, _attrsIndex) {
        var _this = this;
        return function (event) {
            var _a, _b;
            if (!((_b = (_a = overlay.onRightClick) === null || _a === void 0 ? void 0 : _a.call(overlay, __assign({ overlay: overlay, figureIndex: figureIndex, figureKey: figureKey }, event))) !== null && _b !== void 0 ? _b : false)) {
                var pane = _this.getWidget().getPane();
                var overlayStore = pane.getChart().getChartStore().getOverlayStore();
                overlayStore.removeInstance(overlay);
            }
            return true;
        };
    };
    OverlayView.prototype._coordinateToPoint = function (overlay, coordinate) {
        var _a;
        var point = {};
        var pane = this.getWidget().getPane();
        var chart = pane.getChart();
        var paneId = pane.getId();
        var timeScaleStore = chart.getChartStore().getTimeScaleStore();
        if (this.coordinateToPointTimestampDataIndexFlag()) {
            var xAxis = chart.getXAxisPane().getAxisComponent();
            var dataIndex = xAxis.convertFromPixel(coordinate.x);
            var timestamp = (_a = timeScaleStore.dataIndexToTimestamp(dataIndex)) !== null && _a !== void 0 ? _a : undefined;
            point.dataIndex = dataIndex;
            point.timestamp = timestamp;
        }
        if (this.coordinateToPointValueFlag()) {
            var yAxis = pane.getAxisComponent();
            var value = yAxis.convertFromPixel(coordinate.y);
            if (overlay.mode !== exports.OverlayMode.Normal && paneId === PaneIdConstants.CANDLE && isNumber(point.dataIndex)) {
                var kLineData = timeScaleStore.getDataByDataIndex(point.dataIndex);
                if (kLineData !== null) {
                    var modeSensitivity = overlay.modeSensitivity;
                    if (value > kLineData.high) {
                        if (overlay.mode === exports.OverlayMode.WeakMagnet) {
                            var highY = yAxis.convertToPixel(kLineData.high);
                            var buffValue = yAxis.convertFromPixel(highY - modeSensitivity);
                            if (value < buffValue) {
                                value = kLineData.high;
                            }
                        }
                        else {
                            value = kLineData.high;
                        }
                    }
                    else if (value < kLineData.low) {
                        if (overlay.mode === exports.OverlayMode.WeakMagnet) {
                            var lowY = yAxis.convertToPixel(kLineData.low);
                            var buffValue = yAxis.convertFromPixel(lowY - modeSensitivity);
                            if (value > buffValue) {
                                value = kLineData.low;
                            }
                        }
                        else {
                            value = kLineData.low;
                        }
                    }
                    else {
                        var max = Math.max(kLineData.open, kLineData.close);
                        var min = Math.min(kLineData.open, kLineData.close);
                        if (value > max) {
                            if (value - max < kLineData.high - value) {
                                value = max;
                            }
                            else {
                                value = kLineData.high;
                            }
                        }
                        else if (value < min) {
                            if (value - kLineData.low < min - value) {
                                value = kLineData.low;
                            }
                            else {
                                value = min;
                            }
                        }
                        else if (max - value < value - min) {
                            value = max;
                        }
                        else {
                            value = min;
                        }
                    }
                }
            }
            point.value = value;
        }
        return point;
    };
    OverlayView.prototype.coordinateToPointValueFlag = function () {
        return true;
    };
    OverlayView.prototype.coordinateToPointTimestampDataIndexFlag = function () {
        return true;
    };
    OverlayView.prototype.dispatchEvent = function (name, event, other) {
        if (this.getWidget().getPane().getChart().getChartStore().getOverlayStore().isDrawing()) {
            return this.onEvent(name, event, other);
        }
        return _super.prototype.dispatchEvent.call(this, name, event, other);
    };
    OverlayView.prototype.checkEventOn = function () {
        return true;
    };
    OverlayView.prototype.drawImp = function (ctx) {
        var _this = this;
        var widget = this.getWidget();
        var pane = widget.getPane();
        var paneId = pane.getId();
        var chart = pane.getChart();
        var yAxis = pane.getAxisComponent();
        var xAxis = chart.getXAxisPane().getAxisComponent();
        var bounding = widget.getBounding();
        var chartStore = chart.getChartStore();
        var customApi = chartStore.getCustomApi();
        var thousandsSeparator = chartStore.getThousandsSeparator();
        var decimalFoldThreshold = chartStore.getDecimalFoldThreshold();
        var timeScaleStore = chartStore.getTimeScaleStore();
        var dateTimeFormat = timeScaleStore.getDateTimeFormat();
        var barSpace = timeScaleStore.getBarSpace();
        var precision = chartStore.getPrecision();
        var defaultStyles = chartStore.getStyles().overlay;
        var overlayStore = chartStore.getOverlayStore();
        var hoverInstanceInfo = overlayStore.getHoverInstanceInfo();
        var clickInstanceInfo = overlayStore.getClickInstanceInfo();
        var overlays = this.getCompleteOverlays(overlayStore, paneId);
        var paneIndicators = chartStore.getIndicatorStore().getInstances(paneId);
        var overlayPrecision = paneIndicators.reduce(function (prev, indicator) {
            var precision = indicator.precision;
            prev[indicator.name] = precision;
            prev.max = Math.max(prev.max, precision);
            prev.min = Math.min(prev.min, precision);
            prev.excludePriceVolumeMax = Math.max(prev.excludePriceVolumeMax, precision);
            prev.excludePriceVolumeMin = Math.min(prev.excludePriceVolumeMin, precision);
            return prev;
        }, __assign(__assign({}, precision), { max: Math.max(precision.price, precision.volume), min: Math.min(precision.price, precision.volume), excludePriceVolumeMax: Number.MIN_SAFE_INTEGER, excludePriceVolumeMin: Number.MAX_SAFE_INTEGER }));
        overlays.forEach(function (overlay) {
            if (overlay.visible) {
                _this._drawOverlay(ctx, overlay, bounding, barSpace, overlayPrecision, dateTimeFormat, customApi, thousandsSeparator, decimalFoldThreshold, defaultStyles, xAxis, yAxis, hoverInstanceInfo, clickInstanceInfo, timeScaleStore);
            }
        });
        var progressInstanceInfo = overlayStore.getProgressInstanceInfo();
        if (progressInstanceInfo !== null) {
            var overlay = this.getProgressOverlay(progressInstanceInfo, paneId);
            // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
            if (overlay !== null && overlay.visible) {
                this._drawOverlay(ctx, overlay, bounding, barSpace, overlayPrecision, dateTimeFormat, customApi, thousandsSeparator, decimalFoldThreshold, defaultStyles, xAxis, yAxis, hoverInstanceInfo, clickInstanceInfo, timeScaleStore);
            }
        }
    };
    OverlayView.prototype._drawOverlay = function (ctx, overlay, bounding, barSpace, precision, dateTimeFormat, customApi, thousandsSeparator, decimalFoldThreshold, defaultStyles, xAxis, yAxis, hoverInstanceInfo, clickInstanceInfo, timeScaleStore) {
        var points = overlay.points;
        var coordinates = points.map(function (point) {
            var _a, _b;
            var dataIndex = point.dataIndex;
            if (isNumber(point.timestamp)) {
                dataIndex = timeScaleStore.timestampToDataIndex(point.timestamp);
            }
            var coordinate = { x: 0, y: 0 };
            if (isNumber(dataIndex)) {
                coordinate.x = (_a = xAxis === null || xAxis === void 0 ? void 0 : xAxis.convertToPixel(dataIndex)) !== null && _a !== void 0 ? _a : 0;
            }
            if (isNumber(point.value)) {
                coordinate.y = (_b = yAxis === null || yAxis === void 0 ? void 0 : yAxis.convertToPixel(point.value)) !== null && _b !== void 0 ? _b : 0;
            }
            return coordinate;
        });
        if (coordinates.length > 0) {
            var figures = new Array().concat(this.getFigures(overlay, coordinates, bounding, barSpace, precision, thousandsSeparator, decimalFoldThreshold, dateTimeFormat, defaultStyles, xAxis, yAxis));
            this.drawFigures(ctx, overlay, figures, defaultStyles);
        }
        this.drawDefaultFigures(ctx, overlay, coordinates, bounding, precision, dateTimeFormat, customApi, thousandsSeparator, decimalFoldThreshold, defaultStyles, xAxis, yAxis, hoverInstanceInfo, clickInstanceInfo);
    };
    OverlayView.prototype.drawFigures = function (ctx, overlay, figures, defaultStyles) {
        var _this = this;
        figures.forEach(function (figure, figureIndex) {
            var type = figure.type, styles = figure.styles, attrs = figure.attrs, ignoreEvent = figure.ignoreEvent;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            var attrsArray = [].concat(attrs);
            attrsArray.forEach(function (ats, attrsIndex) {
                var _a, _b, _c;
                var events = _this._createFigureEvents(overlay, 2 /* EventOverlayInfoFigureType.Other */, (_a = figure.key) !== null && _a !== void 0 ? _a : '', figureIndex, attrsIndex, ignoreEvent);
                var ss = __assign(__assign(__assign({}, defaultStyles[type]), (_b = overlay.styles) === null || _b === void 0 ? void 0 : _b[type]), styles);
                (_c = _this.createFigure({
                    name: type, attrs: ats, styles: ss
                }, events)) === null || _c === void 0 ? void 0 : _c.draw(ctx);
            });
        });
    };
    OverlayView.prototype.getCompleteOverlays = function (overlayStore, paneId) {
        return overlayStore.getInstances(paneId);
    };
    OverlayView.prototype.getProgressOverlay = function (info, paneId) {
        if (info.paneId === paneId) {
            return info.instance;
        }
        return null;
    };
    OverlayView.prototype.getFigures = function (overlay, coordinates, bounding, barSpace, precision, thousandsSeparator, decimalFoldThreshold, dateTimeFormat, defaultStyles, xAxis, yAxis) {
        var _a, _b;
        return (_b = (_a = overlay.createPointFigures) === null || _a === void 0 ? void 0 : _a.call(overlay, { overlay: overlay, coordinates: coordinates, bounding: bounding, barSpace: barSpace, precision: precision, thousandsSeparator: thousandsSeparator, decimalFoldThreshold: decimalFoldThreshold, dateTimeFormat: dateTimeFormat, defaultStyles: defaultStyles, xAxis: xAxis, yAxis: yAxis })) !== null && _b !== void 0 ? _b : [];
    };
    OverlayView.prototype.drawDefaultFigures = function (ctx, overlay, coordinates, _bounding, _precision, _dateTimeFormat, _customApi, _thousandsSeparator, _drawDefaultFigures, defaultStyles, _xAxis, _yAxis, hoverInstanceInfo, clickInstanceInfo) {
        var _this = this;
        var _a, _b;
        if (overlay.needDefaultPointFigure) {
            if ((((_a = hoverInstanceInfo.instance) === null || _a === void 0 ? void 0 : _a.id) === overlay.id && hoverInstanceInfo.figureType !== 0 /* EventOverlayInfoFigureType.None */) ||
                (((_b = clickInstanceInfo.instance) === null || _b === void 0 ? void 0 : _b.id) === overlay.id && clickInstanceInfo.figureType !== 0 /* EventOverlayInfoFigureType.None */)) {
                var styles = overlay.styles;
                var pointStyles_1 = __assign(__assign({}, defaultStyles.point), styles === null || styles === void 0 ? void 0 : styles.point);
                coordinates.forEach(function (_a, index) {
                    var _b, _c, _d;
                    var x = _a.x, y = _a.y;
                    var radius = pointStyles_1.radius;
                    var color = pointStyles_1.color;
                    var borderColor = pointStyles_1.borderColor;
                    var borderSize = pointStyles_1.borderSize;
                    if (((_b = hoverInstanceInfo.instance) === null || _b === void 0 ? void 0 : _b.id) === overlay.id &&
                        hoverInstanceInfo.figureType === 1 /* EventOverlayInfoFigureType.Point */ &&
                        hoverInstanceInfo.figureIndex === index) {
                        radius = pointStyles_1.activeRadius;
                        color = pointStyles_1.activeColor;
                        borderColor = pointStyles_1.activeBorderColor;
                        borderSize = pointStyles_1.activeBorderSize;
                    }
                    (_c = _this.createFigure({
                        name: 'circle',
                        attrs: { x: x, y: y, r: radius + borderSize },
                        styles: { color: borderColor }
                    }, _this._createFigureEvents(overlay, 1 /* EventOverlayInfoFigureType.Point */, "".concat(OVERLAY_FIGURE_KEY_PREFIX, "point_").concat(index), index, 0))) === null || _c === void 0 ? void 0 : _c.draw(ctx);
                    (_d = _this.createFigure({
                        name: 'circle',
                        attrs: { x: x, y: y, r: radius },
                        styles: { color: color }
                    })) === null || _d === void 0 ? void 0 : _d.draw(ctx);
                });
            }
        }
    };
    return OverlayView;
}(View));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IndicatorWidget = /** @class */ (function (_super) {
    __extends(IndicatorWidget, _super);
    function IndicatorWidget(rootContainer, pane) {
        var _this = _super.call(this, rootContainer, pane) || this;
        _this._gridView = new GridView(_this);
        _this._indicatorView = new IndicatorView(_this);
        _this._crosshairLineView = new CrosshairLineView(_this);
        _this._tooltipView = _this.createTooltipView();
        _this._overlayView = new OverlayView(_this);
        _this.addChild(_this._tooltipView);
        _this.addChild(_this._overlayView);
        _this.getContainer().style.cursor = 'crosshair';
        _this.registerEvent('mouseMoveEvent', function () {
            pane.getChart().getChartStore().getTooltipStore().setActiveIcon();
            return false;
        });
        return _this;
    }
    IndicatorWidget.prototype.getName = function () {
        return WidgetNameConstants.MAIN;
    };
    IndicatorWidget.prototype.updateMain = function (ctx) {
        this.updateMainContent(ctx);
        this._indicatorView.draw(ctx);
        this._gridView.draw(ctx);
    };
    IndicatorWidget.prototype.createTooltipView = function () {
        return new IndicatorTooltipView(this);
    };
    IndicatorWidget.prototype.updateMainContent = function (_ctx) { };
    IndicatorWidget.prototype.updateOverlay = function (ctx) {
        this._overlayView.draw(ctx);
        this._crosshairLineView.draw(ctx);
        this._tooltipView.draw(ctx);
    };
    return IndicatorWidget;
}(DrawWidget));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CandleAreaView = /** @class */ (function (_super) {
    __extends(CandleAreaView, _super);
    function CandleAreaView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ripplePoint = _this.createFigure({
            name: 'circle',
            attrs: {
                x: 0,
                y: 0,
                r: 0
            },
            styles: {
                style: 'fill'
            }
        });
        _this._animationFrameTime = 0;
        _this._animation = new Animation({ iterationCount: Infinity }).doFrame(function (time) {
            _this._animationFrameTime = time;
            var pane = _this.getWidget().getPane();
            pane.getChart().updatePane(0 /* UpdateLevel.Main */, pane.getId());
        });
        return _this;
    }
    CandleAreaView.prototype.drawImp = function (ctx) {
        var _a, _b, _c;
        var widget = this.getWidget();
        var pane = widget.getPane();
        var chart = pane.getChart();
        var dataList = chart.getDataList();
        var lastDataIndex = dataList.length - 1;
        var bounding = widget.getBounding();
        var yAxis = pane.getAxisComponent();
        var styles = chart.getStyles().candle.area;
        var coordinates = [];
        var minY = Number.MAX_SAFE_INTEGER;
        var areaStartX = Number.MIN_SAFE_INTEGER;
        var ripplePointCoordinate = null;
        this.eachChildren(function (data) {
            var kLineData = data.data, x = data.x;
            var value = kLineData === null || kLineData === void 0 ? void 0 : kLineData[styles.value];
            if (isNumber(value)) {
                var y = yAxis.convertToPixel(value);
                if (areaStartX === Number.MIN_SAFE_INTEGER) {
                    areaStartX = x;
                }
                coordinates.push({ x: x, y: y });
                minY = Math.min(minY, y);
                if (data.dataIndex === lastDataIndex) {
                    ripplePointCoordinate = { x: x, y: y };
                }
            }
        });
        if (coordinates.length > 0) {
            (_a = this.createFigure({
                name: 'line',
                attrs: { coordinates: coordinates },
                styles: {
                    color: styles.lineColor,
                    size: styles.lineSize,
                    smooth: styles.smooth
                }
            })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
            // render area
            var backgroundColor = styles.backgroundColor;
            var color = void 0;
            if (isArray(backgroundColor)) {
                var gradient_1 = ctx.createLinearGradient(0, bounding.height, 0, minY);
                try {
                    backgroundColor.forEach(function (_a) {
                        var offset = _a.offset, color = _a.color;
                        gradient_1.addColorStop(offset, color);
                    });
                }
                catch (e) {
                }
                color = gradient_1;
            }
            else {
                color = backgroundColor;
            }
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(areaStartX, bounding.height);
            ctx.lineTo(coordinates[0].x, coordinates[0].y);
            lineTo(ctx, coordinates, styles.smooth);
            ctx.lineTo(coordinates[coordinates.length - 1].x, bounding.height);
            ctx.closePath();
            ctx.fill();
        }
        var pointStyles = styles.point;
        if (pointStyles.show && isValid(ripplePointCoordinate)) {
            (_b = this.createFigure({
                name: 'circle',
                attrs: {
                    x: ripplePointCoordinate.x,
                    y: ripplePointCoordinate.y,
                    r: pointStyles.radius
                },
                styles: {
                    style: 'fill',
                    color: pointStyles.color
                }
            })) === null || _b === void 0 ? void 0 : _b.draw(ctx);
            var rippleRadius = pointStyles.rippleRadius;
            if (pointStyles.animation) {
                rippleRadius = pointStyles.radius + this._animationFrameTime / pointStyles.animationDuration * (pointStyles.rippleRadius - pointStyles.radius);
                this._animation.setDuration(pointStyles.animationDuration).start();
            }
            (_c = this._ripplePoint) === null || _c === void 0 ? void 0 : _c.setAttrs({
                x: ripplePointCoordinate.x,
                y: ripplePointCoordinate.y,
                r: rippleRadius
            }).setStyles({ style: 'fill', color: pointStyles.rippleColor }).draw(ctx);
        }
        else {
            this.stopAnimation();
        }
    };
    CandleAreaView.prototype.stopAnimation = function () {
        this._animation.stop();
    };
    return CandleAreaView;
}(ChildrenView));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CandleHighLowPriceView = /** @class */ (function (_super) {
    __extends(CandleHighLowPriceView, _super);
    function CandleHighLowPriceView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CandleHighLowPriceView.prototype.drawImp = function (ctx) {
        var widget = this.getWidget();
        var pane = widget.getPane();
        var chartStore = pane.getChart().getChartStore();
        var priceMarkStyles = chartStore.getStyles().candle.priceMark;
        var highPriceMarkStyles = priceMarkStyles.high;
        var lowPriceMarkStyles = priceMarkStyles.low;
        if (priceMarkStyles.show && (highPriceMarkStyles.show || lowPriceMarkStyles.show)) {
            var thousandsSeparator = chartStore.getThousandsSeparator();
            var decimalFoldThreshold = chartStore.getDecimalFoldThreshold();
            var precision = chartStore.getPrecision();
            var yAxis = pane.getAxisComponent();
            var high_1 = Number.MIN_SAFE_INTEGER;
            var highX_1 = 0;
            var low_1 = Number.MAX_SAFE_INTEGER;
            var lowX_1 = 0;
            this.eachChildren(function (data) {
                var kLineData = data.data, x = data.x;
                if (isValid(kLineData)) {
                    if (high_1 < kLineData.high) {
                        high_1 = kLineData.high;
                        highX_1 = x;
                    }
                    if (low_1 > kLineData.low) {
                        low_1 = kLineData.low;
                        lowX_1 = x;
                    }
                }
            });
            var highY = yAxis.convertToPixel(high_1);
            var lowY = yAxis.convertToPixel(low_1);
            if (highPriceMarkStyles.show && high_1 !== Number.MIN_SAFE_INTEGER) {
                this._drawMark(ctx, formatFoldDecimal(formatThousands(formatPrecision(high_1, precision.price), thousandsSeparator), decimalFoldThreshold), { x: highX_1, y: highY }, highY < lowY ? [-2, -5] : [2, 5], highPriceMarkStyles);
            }
            if (lowPriceMarkStyles.show && low_1 !== Number.MAX_SAFE_INTEGER) {
                this._drawMark(ctx, formatFoldDecimal(formatThousands(formatPrecision(low_1, precision.price), thousandsSeparator), decimalFoldThreshold), { x: lowX_1, y: lowY }, highY < lowY ? [2, 5] : [-2, -5], lowPriceMarkStyles);
            }
        }
    };
    CandleHighLowPriceView.prototype._drawMark = function (ctx, text, coordinate, offsets, styles) {
        var _a, _b, _c;
        var startX = coordinate.x;
        var startY = coordinate.y + offsets[0];
        (_a = this.createFigure({
            name: 'line',
            attrs: {
                coordinates: [
                    { x: startX - 2, y: startY + offsets[0] },
                    { x: startX, y: startY },
                    { x: startX + 2, y: startY + offsets[0] }
                ]
            },
            styles: { color: styles.color }
        })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
        var lineEndX;
        var textStartX;
        var textAlign;
        var width = this.getWidget().getBounding().width;
        if (startX > width / 2) {
            lineEndX = startX - 5;
            textStartX = lineEndX - styles.textOffset;
            textAlign = 'right';
        }
        else {
            lineEndX = startX + 5;
            textAlign = 'left';
            textStartX = lineEndX + styles.textOffset;
        }
        var y = startY + offsets[1];
        (_b = this.createFigure({
            name: 'line',
            attrs: {
                coordinates: [
                    { x: startX, y: startY },
                    { x: startX, y: y },
                    { x: lineEndX, y: y }
                ]
            },
            styles: { color: styles.color }
        })) === null || _b === void 0 ? void 0 : _b.draw(ctx);
        (_c = this.createFigure({
            name: 'text',
            attrs: {
                x: textStartX,
                y: y,
                text: text,
                align: textAlign,
                baseline: 'middle'
            },
            styles: {
                color: styles.color,
                size: styles.textSize,
                family: styles.textFamily,
                weight: styles.textWeight
            }
        })) === null || _c === void 0 ? void 0 : _c.draw(ctx);
    };
    return CandleHighLowPriceView;
}(ChildrenView));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CandleLastPriceView = /** @class */ (function (_super) {
    __extends(CandleLastPriceView, _super);
    function CandleLastPriceView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CandleLastPriceView.prototype.drawImp = function (ctx) {
        var _a;
        var widget = this.getWidget();
        var pane = widget.getPane();
        var bounding = widget.getBounding();
        var chartStore = pane.getChart().getChartStore();
        var priceMarkStyles = chartStore.getStyles().candle.priceMark;
        var lastPriceMarkStyles = priceMarkStyles.last;
        var lastPriceMarkLineStyles = lastPriceMarkStyles.line;
        if (priceMarkStyles.show && lastPriceMarkStyles.show && lastPriceMarkLineStyles.show) {
            var yAxis = pane.getAxisComponent();
            var dataList = chartStore.getDataList();
            var data = dataList[dataList.length - 1];
            if (data != null) {
                var close_1 = data.close, open_1 = data.open;
                var priceY = yAxis.convertToNicePixel(close_1);
                var color = void 0;
                if (close_1 > open_1) {
                    color = lastPriceMarkStyles.upColor;
                }
                else if (close_1 < open_1) {
                    color = lastPriceMarkStyles.downColor;
                }
                else {
                    color = lastPriceMarkStyles.noChangeColor;
                }
                (_a = this.createFigure({
                    name: 'line',
                    attrs: {
                        coordinates: [
                            { x: 0, y: priceY },
                            { x: bounding.width, y: priceY }
                        ]
                    },
                    styles: {
                        style: lastPriceMarkLineStyles.style,
                        color: color,
                        size: lastPriceMarkLineStyles.size,
                        dashedValue: lastPriceMarkLineStyles.dashedValue
                    }
                })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
            }
        }
    };
    return CandleLastPriceView;
}(View));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zhCN = {
    time: '时间：',
    open: '开：',
    high: '高：',
    low: '低：',
    close: '收：',
    volume: '成交量：',
    turnover: '成交额：',
    change: '涨幅：'
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var enUS = {
    time: 'Time: ',
    open: 'Open: ',
    high: 'High: ',
    low: 'Low: ',
    close: 'Close: ',
    volume: 'Volume: ',
    turnover: 'Turnover: ',
    change: 'Change: '
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var locales = {
    'zh-CN': zhCN,
    'en-US': enUS
};
function registerLocale(locale, ls) {
    locales[locale] = __assign(__assign({}, locales[locale]), ls);
}
function getSupportedLocales() {
    return Object.keys(locales);
}
function i18n(key, locale) {
    var _a, _b;
    return (_b = (_a = locales[locale]) === null || _a === void 0 ? void 0 : _a[key]) !== null && _b !== void 0 ? _b : key;
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CandleTooltipView = /** @class */ (function (_super) {
    __extends(CandleTooltipView, _super);
    function CandleTooltipView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CandleTooltipView.prototype.drawImp = function (ctx) {
        var widget = this.getWidget();
        var pane = widget.getPane();
        var paneId = pane.getId();
        var chartStore = pane.getChart().getChartStore();
        var crosshair = chartStore.getTooltipStore().getCrosshair();
        if (isValid(crosshair.kLineData)) {
            var bounding = widget.getBounding();
            var yAxisBounding = pane.getYAxisWidget().getBounding();
            var dataList = chartStore.getDataList();
            var precision = chartStore.getPrecision();
            var locale = chartStore.getLocale();
            var customApi = chartStore.getCustomApi();
            var thousandsSeparator = chartStore.getThousandsSeparator();
            var decimalFoldThreshold = chartStore.getDecimalFoldThreshold();
            var activeIcon = chartStore.getTooltipStore().getActiveIcon();
            var indicators = chartStore.getIndicatorStore().getInstances(pane.getId());
            var dateTimeFormat = chartStore.getTimeScaleStore().getDateTimeFormat();
            var styles = chartStore.getStyles();
            var candleStyles = styles.candle;
            var indicatorStyles = styles.indicator;
            if (candleStyles.tooltip.showType === exports.TooltipShowType.Rect &&
                indicatorStyles.tooltip.showType === exports.TooltipShowType.Rect) {
                var isDrawCandleTooltip = this.isDrawTooltip(crosshair, candleStyles.tooltip);
                var isDrawIndicatorTooltip = this.isDrawTooltip(crosshair, indicatorStyles.tooltip);
                this._drawRectTooltip(ctx, dataList, indicators, bounding, yAxisBounding, crosshair, precision, dateTimeFormat, locale, customApi, thousandsSeparator, decimalFoldThreshold, isDrawCandleTooltip, isDrawIndicatorTooltip, candleStyles.tooltip.offsetTop, styles);
            }
            else if (candleStyles.tooltip.showType === exports.TooltipShowType.Standard &&
                indicatorStyles.tooltip.showType === exports.TooltipShowType.Standard) {
                var _a = candleStyles.tooltip, offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop, offsetRight = _a.offsetRight;
                var maxWidth = bounding.width - offsetRight;
                var top_1 = this._drawCandleStandardTooltip(ctx, dataList, paneId, crosshair, activeIcon, precision, dateTimeFormat, locale, customApi, thousandsSeparator, decimalFoldThreshold, offsetLeft, offsetTop, maxWidth, candleStyles);
                this.drawIndicatorTooltip(ctx, paneId, dataList, crosshair, activeIcon, indicators, customApi, thousandsSeparator, decimalFoldThreshold, offsetLeft, top_1, maxWidth, indicatorStyles);
            }
            else if (candleStyles.tooltip.showType === exports.TooltipShowType.Rect &&
                indicatorStyles.tooltip.showType === exports.TooltipShowType.Standard) {
                var _b = candleStyles.tooltip, offsetLeft = _b.offsetLeft, offsetTop = _b.offsetTop, offsetRight = _b.offsetRight;
                var maxWidth = bounding.width - offsetRight;
                var top_2 = this.drawIndicatorTooltip(ctx, paneId, dataList, crosshair, activeIcon, indicators, customApi, thousandsSeparator, decimalFoldThreshold, offsetLeft, offsetTop, maxWidth, indicatorStyles);
                var isDrawCandleTooltip = this.isDrawTooltip(crosshair, candleStyles.tooltip);
                this._drawRectTooltip(ctx, dataList, indicators, bounding, yAxisBounding, crosshair, precision, dateTimeFormat, locale, customApi, thousandsSeparator, decimalFoldThreshold, isDrawCandleTooltip, false, top_2, styles);
            }
            else {
                var _c = candleStyles.tooltip, offsetLeft = _c.offsetLeft, offsetTop = _c.offsetTop, offsetRight = _c.offsetRight;
                var maxWidth = bounding.width - offsetRight;
                var top_3 = this._drawCandleStandardTooltip(ctx, dataList, paneId, crosshair, activeIcon, precision, dateTimeFormat, locale, customApi, thousandsSeparator, decimalFoldThreshold, offsetLeft, offsetTop, maxWidth, candleStyles);
                var isDrawIndicatorTooltip = this.isDrawTooltip(crosshair, indicatorStyles.tooltip);
                this._drawRectTooltip(ctx, dataList, indicators, bounding, yAxisBounding, crosshair, precision, dateTimeFormat, locale, customApi, thousandsSeparator, decimalFoldThreshold, false, isDrawIndicatorTooltip, top_3, styles);
            }
        }
    };
    CandleTooltipView.prototype._drawCandleStandardTooltip = function (ctx, dataList, paneId, crosshair, activeTooltipIcon, precision, dateTimeFormat, locale, customApi, thousandsSeparator, decimalFoldThreshold, left, top, maxWidth, styles) {
        var _a, _b, _c;
        var tooltipStyles = styles.tooltip;
        var tooltipTextStyles = tooltipStyles.text;
        var prevRowHeight = 0;
        var coordinate = { x: left, y: top };
        if (this.isDrawTooltip(crosshair, tooltipStyles)) {
            var dataIndex = (_a = crosshair.dataIndex) !== null && _a !== void 0 ? _a : 0;
            var legends = this._getCandleTooltipLegends({ prev: (_b = dataList[dataIndex - 1]) !== null && _b !== void 0 ? _b : null, current: crosshair.kLineData, next: (_c = dataList[dataIndex + 1]) !== null && _c !== void 0 ? _c : null }, precision, dateTimeFormat, locale, customApi, thousandsSeparator, decimalFoldThreshold, styles);
            var _d = __read(this.classifyTooltipIcons(tooltipStyles.icons), 3), leftIcons = _d[0], middleIcons = _d[1], rightIcons = _d[2];
            prevRowHeight = this.drawStandardTooltipIcons(ctx, activeTooltipIcon, leftIcons, coordinate, paneId, '', left, prevRowHeight, maxWidth);
            prevRowHeight = this.drawStandardTooltipIcons(ctx, activeTooltipIcon, middleIcons, coordinate, paneId, '', left, prevRowHeight, maxWidth);
            if (legends.length > 0) {
                prevRowHeight = this.drawStandardTooltipLegends(ctx, legends, coordinate, left, prevRowHeight, maxWidth, tooltipTextStyles);
            }
            prevRowHeight = this.drawStandardTooltipIcons(ctx, activeTooltipIcon, rightIcons, coordinate, paneId, '', left, prevRowHeight, maxWidth);
        }
        return coordinate.y + prevRowHeight;
    };
    CandleTooltipView.prototype._drawRectTooltip = function (ctx, dataList, indicators, bounding, yAxisBounding, crosshair, precision, dateTimeFormat, locale, customApi, thousandsSeparator, decimalFoldThreshold, isDrawCandleTooltip, isDrawIndicatorTooltip, top, styles) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        var candleStyles = styles.candle;
        var indicatorStyles = styles.indicator;
        var candleTooltipStyles = candleStyles.tooltip;
        var indicatorTooltipStyles = indicatorStyles.tooltip;
        if (isDrawCandleTooltip || isDrawIndicatorTooltip) {
            var dataIndex = (_a = crosshair.dataIndex) !== null && _a !== void 0 ? _a : 0;
            var candleLegends = this._getCandleTooltipLegends({ prev: (_b = dataList[dataIndex - 1]) !== null && _b !== void 0 ? _b : null, current: crosshair.kLineData, next: (_c = dataList[dataIndex + 1]) !== null && _c !== void 0 ? _c : null }, precision, dateTimeFormat, locale, customApi, thousandsSeparator, decimalFoldThreshold, candleStyles);
            var offsetLeft = candleTooltipStyles.offsetLeft, offsetTop = candleTooltipStyles.offsetTop, offsetRight = candleTooltipStyles.offsetRight, offsetBottom = candleTooltipStyles.offsetBottom;
            var _f = candleTooltipStyles.text, baseTextMarginLeft_1 = _f.marginLeft, baseTextMarginRight_1 = _f.marginRight, baseTextMarginTop_1 = _f.marginTop, baseTextMarginBottom_1 = _f.marginBottom, baseTextSize_1 = _f.size, baseTextWeight_1 = _f.weight, baseTextFamily_1 = _f.family;
            var _g = candleTooltipStyles.rect, rectPosition = _g.position, rectPaddingLeft = _g.paddingLeft, rectPaddingRight_1 = _g.paddingRight, rectPaddingTop = _g.paddingTop, rectPaddingBottom = _g.paddingBottom, rectOffsetLeft = _g.offsetLeft, rectOffsetRight = _g.offsetRight, rectOffsetTop = _g.offsetTop, rectOffsetBottom = _g.offsetBottom, rectBorderSize_1 = _g.borderSize, rectBorderRadius = _g.borderRadius, rectBorderColor = _g.borderColor, rectBackgroundColor = _g.color;
            var maxTextWidth_1 = 0;
            var rectWidth_1 = 0;
            var rectHeight_1 = 0;
            if (isDrawCandleTooltip) {
                ctx.font = createFont(baseTextSize_1, baseTextWeight_1, baseTextFamily_1);
                candleLegends.forEach(function (data) {
                    var title = data.title;
                    var value = data.value;
                    var text = "".concat(title.text).concat(value.text);
                    var labelWidth = ctx.measureText(text).width + baseTextMarginLeft_1 + baseTextMarginRight_1;
                    maxTextWidth_1 = Math.max(maxTextWidth_1, labelWidth);
                });
                rectHeight_1 += ((baseTextMarginBottom_1 + baseTextMarginTop_1 + baseTextSize_1) * candleLegends.length);
            }
            var _h = indicatorTooltipStyles.text, indicatorTextMarginLeft_1 = _h.marginLeft, indicatorTextMarginRight_1 = _h.marginRight, indicatorTextMarginTop_1 = _h.marginTop, indicatorTextMarginBottom_1 = _h.marginBottom, indicatorTextSize_1 = _h.size, indicatorTextWeight_1 = _h.weight, indicatorTextFamily_1 = _h.family;
            var indicatorLegendsArray_1 = [];
            if (isDrawIndicatorTooltip) {
                ctx.font = createFont(indicatorTextSize_1, indicatorTextWeight_1, indicatorTextFamily_1);
                indicators.forEach(function (indicator) {
                    var _a;
                    var tooltipDataValues = (_a = _this.getIndicatorTooltipData(dataList, crosshair, indicator, customApi, thousandsSeparator, decimalFoldThreshold, indicatorStyles).values) !== null && _a !== void 0 ? _a : [];
                    indicatorLegendsArray_1.push(tooltipDataValues);
                    tooltipDataValues.forEach(function (data) {
                        var title = data.title;
                        var value = data.value;
                        var text = "".concat(title.text).concat(value.text);
                        var textWidth = ctx.measureText(text).width + indicatorTextMarginLeft_1 + indicatorTextMarginRight_1;
                        maxTextWidth_1 = Math.max(maxTextWidth_1, textWidth);
                        rectHeight_1 += (indicatorTextMarginTop_1 + indicatorTextMarginBottom_1 + indicatorTextSize_1);
                    });
                });
            }
            rectWidth_1 += maxTextWidth_1;
            if (rectWidth_1 !== 0 && rectHeight_1 !== 0) {
                rectWidth_1 += (rectBorderSize_1 * 2 + rectPaddingLeft + rectPaddingRight_1);
                rectHeight_1 += (rectBorderSize_1 * 2 + rectPaddingTop + rectPaddingBottom);
                var centerX = bounding.width / 2;
                var isPointer = rectPosition === exports.CandleTooltipRectPosition.Pointer && crosshair.paneId === PaneIdConstants.CANDLE;
                var isLeft = ((_d = crosshair.realX) !== null && _d !== void 0 ? _d : 0) > centerX;
                var rectX_1 = 0;
                if (isPointer) {
                    var realX = crosshair.realX;
                    if (isLeft) {
                        rectX_1 = realX - rectOffsetRight - rectWidth_1;
                    }
                    else {
                        rectX_1 = realX + rectOffsetLeft;
                    }
                }
                else {
                    if (isLeft) {
                        rectX_1 = rectOffsetLeft + offsetLeft;
                        if (styles.yAxis.inside && styles.yAxis.position === exports.YAxisPosition.Left) {
                            rectX_1 += yAxisBounding.width;
                        }
                    }
                    else {
                        rectX_1 = bounding.width - rectOffsetRight - rectWidth_1 - offsetRight;
                        if (styles.yAxis.inside && styles.yAxis.position === exports.YAxisPosition.Right) {
                            rectX_1 -= yAxisBounding.width;
                        }
                    }
                }
                var rectY = top + rectOffsetTop;
                if (isPointer) {
                    var y = crosshair.y;
                    rectY = y - rectHeight_1 / 2;
                    if (rectY + rectHeight_1 > bounding.height - rectOffsetBottom - offsetBottom) {
                        rectY = bounding.height - rectOffsetBottom - rectHeight_1 - offsetBottom;
                    }
                    if (rectY < top + rectOffsetTop) {
                        rectY = top + rectOffsetTop + offsetTop;
                    }
                }
                (_e = this.createFigure({
                    name: 'rect',
                    attrs: {
                        x: rectX_1,
                        y: rectY,
                        width: rectWidth_1,
                        height: rectHeight_1
                    },
                    styles: {
                        style: exports.PolygonType.StrokeFill,
                        color: rectBackgroundColor,
                        borderColor: rectBorderColor,
                        borderSize: rectBorderSize_1,
                        borderRadius: rectBorderRadius
                    }
                })) === null || _e === void 0 ? void 0 : _e.draw(ctx);
                var candleTextX_1 = rectX_1 + rectBorderSize_1 + rectPaddingLeft + baseTextMarginLeft_1;
                var textY_1 = rectY + rectBorderSize_1 + rectPaddingTop;
                if (isDrawCandleTooltip) {
                    // render candle texts
                    candleLegends.forEach(function (data) {
                        var _a, _b;
                        textY_1 += baseTextMarginTop_1;
                        var title = data.title;
                        (_a = _this.createFigure({
                            name: 'text',
                            attrs: {
                                x: candleTextX_1,
                                y: textY_1,
                                text: title.text
                            },
                            styles: {
                                color: title.color,
                                size: baseTextSize_1,
                                family: baseTextFamily_1,
                                weight: baseTextWeight_1
                            }
                        })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
                        var value = data.value;
                        (_b = _this.createFigure({
                            name: 'text',
                            attrs: {
                                x: rectX_1 + rectWidth_1 - rectBorderSize_1 - baseTextMarginRight_1 - rectPaddingRight_1,
                                y: textY_1,
                                text: value.text,
                                align: 'right'
                            },
                            styles: {
                                color: value.color,
                                size: baseTextSize_1,
                                family: baseTextFamily_1,
                                weight: baseTextWeight_1
                            }
                        })) === null || _b === void 0 ? void 0 : _b.draw(ctx);
                        textY_1 += (baseTextSize_1 + baseTextMarginBottom_1);
                    });
                }
                if (isDrawIndicatorTooltip) {
                    // render indicator texts
                    var indicatorTextX_1 = rectX_1 + rectBorderSize_1 + rectPaddingLeft + indicatorTextMarginLeft_1;
                    indicatorLegendsArray_1.forEach(function (legends) {
                        legends.forEach(function (data) {
                            var _a, _b;
                            textY_1 += indicatorTextMarginTop_1;
                            var title = data.title;
                            var value = data.value;
                            (_a = _this.createFigure({
                                name: 'text',
                                attrs: {
                                    x: indicatorTextX_1,
                                    y: textY_1,
                                    text: title.text
                                },
                                styles: {
                                    color: title.color,
                                    size: indicatorTextSize_1,
                                    family: indicatorTextFamily_1,
                                    weight: indicatorTextWeight_1
                                }
                            })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
                            (_b = _this.createFigure({
                                name: 'text',
                                attrs: {
                                    x: rectX_1 + rectWidth_1 - rectBorderSize_1 - indicatorTextMarginRight_1 - rectPaddingRight_1,
                                    y: textY_1,
                                    text: value.text,
                                    align: 'right'
                                },
                                styles: {
                                    color: value.color,
                                    size: indicatorTextSize_1,
                                    family: indicatorTextFamily_1,
                                    weight: indicatorTextWeight_1
                                }
                            })) === null || _b === void 0 ? void 0 : _b.draw(ctx);
                            textY_1 += (indicatorTextSize_1 + indicatorTextMarginBottom_1);
                        });
                    });
                }
            }
        }
    };
    CandleTooltipView.prototype._getCandleTooltipLegends = function (data, precision, dateTimeFormat, locale, customApi, thousandsSeparator, decimalFoldThreshold, styles) {
        var _a, _b, _c, _d, _e;
        var tooltipStyles = styles.tooltip;
        var textColor = tooltipStyles.text.color;
        var current = data.current;
        var prevClose = (_b = (_a = data.prev) === null || _a === void 0 ? void 0 : _a.close) !== null && _b !== void 0 ? _b : current.close;
        var changeValue = current.close - prevClose;
        var pricePrecision = precision.price, volumePrecision = precision.volume;
        var mapping = {
            '{time}': customApi.formatDate(dateTimeFormat, current.timestamp, 'YYYY-MM-DD HH:mm', exports.FormatDateType.Tooltip),
            '{open}': formatFoldDecimal(formatThousands(formatPrecision(current.open, pricePrecision), thousandsSeparator), decimalFoldThreshold),
            '{high}': formatFoldDecimal(formatThousands(formatPrecision(current.high, pricePrecision), thousandsSeparator), decimalFoldThreshold),
            '{low}': formatFoldDecimal(formatThousands(formatPrecision(current.low, pricePrecision), thousandsSeparator), decimalFoldThreshold),
            '{close}': formatFoldDecimal(formatThousands(formatPrecision(current.close, pricePrecision), thousandsSeparator), decimalFoldThreshold),
            '{volume}': formatFoldDecimal(formatThousands(customApi.formatBigNumber(formatPrecision((_c = current.volume) !== null && _c !== void 0 ? _c : tooltipStyles.defaultValue, volumePrecision)), thousandsSeparator), decimalFoldThreshold),
            '{turnover}': formatFoldDecimal(formatThousands(formatPrecision((_d = current.turnover) !== null && _d !== void 0 ? _d : tooltipStyles.defaultValue, pricePrecision), thousandsSeparator), decimalFoldThreshold),
            '{change}': prevClose === 0 ? tooltipStyles.defaultValue : "".concat(formatThousands(formatPrecision(changeValue / prevClose * 100), thousandsSeparator), "%")
        };
        var legends = (_e = (isFunction(tooltipStyles.custom)
            ? tooltipStyles.custom(data, styles)
            : tooltipStyles.custom)) !== null && _e !== void 0 ? _e : [];
        return legends.map(function (_a) {
            var _b;
            var title = _a.title, value = _a.value;
            var t = { text: '', color: '' };
            if (isObject(title)) {
                t = __assign({}, title);
            }
            else {
                t.text = title;
                t.color = textColor;
            }
            t.text = i18n(t.text, locale);
            var v = { text: tooltipStyles.defaultValue, color: '' };
            if (isObject(value)) {
                v = __assign({}, value);
            }
            else {
                v.text = value;
                v.color = textColor;
            }
            var match = v.text.match(/{(\S*)}/);
            if (match !== null && match.length > 1) {
                var key = "{".concat(match[1], "}");
                v.text = v.text.replace(key, ((_b = mapping[key]) !== null && _b !== void 0 ? _b : tooltipStyles.defaultValue));
                if (key === '{change}') {
                    v.color = changeValue === 0 ? styles.priceMark.last.noChangeColor : (changeValue > 0 ? styles.priceMark.last.upColor : styles.priceMark.last.downColor);
                }
            }
            return { title: t, value: v };
        });
    };
    return CandleTooltipView;
}(IndicatorTooltipView));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CandleWidget = /** @class */ (function (_super) {
    __extends(CandleWidget, _super);
    function CandleWidget(rootContainer, pane) {
        var _this = _super.call(this, rootContainer, pane) || this;
        _this._candleBarView = new CandleBarView(_this);
        _this._candleAreaView = new CandleAreaView(_this);
        _this._candleHighLowPriceView = new CandleHighLowPriceView(_this);
        _this._candleLastPriceLineView = new CandleLastPriceView(_this);
        _this.addChild(_this._candleBarView);
        return _this;
    }
    CandleWidget.prototype.updateMainContent = function (ctx) {
        var candleStyles = this.getPane().getChart().getStyles().candle;
        if (candleStyles.type !== exports.CandleType.Area) {
            this._candleBarView.draw(ctx);
            this._candleHighLowPriceView.draw(ctx);
            this._candleAreaView.stopAnimation();
        }
        else {
            this._candleAreaView.draw(ctx);
        }
        this._candleLastPriceLineView.draw(ctx);
    };
    CandleWidget.prototype.createTooltipView = function () {
        return new CandleTooltipView(this);
    };
    return CandleWidget;
}(IndicatorWidget));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var AxisView = /** @class */ (function (_super) {
    __extends(AxisView, _super);
    function AxisView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxisView.prototype.drawImp = function (ctx) {
        var _this = this;
        var _a, _b;
        var widget = this.getWidget();
        var pane = widget.getPane();
        var bounding = widget.getBounding();
        var axis = pane.getAxisComponent();
        var styles = this.getAxisStyles(pane.getChart().getStyles());
        if (styles.show) {
            if (styles.axisLine.show) {
                (_a = this.createFigure({
                    name: 'line',
                    attrs: this.createAxisLine(bounding, styles),
                    styles: styles.axisLine
                })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
            }
            var ticks = axis.getTicks();
            if (styles.tickLine.show) {
                var lines = this.createTickLines(ticks, bounding, styles);
                lines.forEach(function (line) {
                    var _a;
                    (_a = _this.createFigure({
                        name: 'line',
                        attrs: line,
                        styles: styles.tickLine
                    })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
                });
            }
            if (styles.tickText.show) {
                var texts = this.createTickTexts(ticks, bounding, styles);
                (_b = this.createFigure({
                    name: 'text',
                    attrs: texts,
                    styles: styles.tickText
                })) === null || _b === void 0 ? void 0 : _b.draw(ctx);
            }
        }
    };
    return AxisView;
}(View));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var YAxisView = /** @class */ (function (_super) {
    __extends(YAxisView, _super);
    function YAxisView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YAxisView.prototype.getAxisStyles = function (styles) {
        return styles.yAxis;
    };
    YAxisView.prototype.createAxisLine = function (bounding, styles) {
        var yAxis = this.getWidget().getPane().getAxisComponent();
        var size = styles.axisLine.size;
        var x;
        if (yAxis.isFromZero()) {
            x = 0;
        }
        else {
            x = bounding.width - size;
        }
        return {
            coordinates: [
                { x: x, y: 0 },
                { x: x, y: bounding.height }
            ]
        };
    };
    YAxisView.prototype.createTickLines = function (ticks, bounding, styles) {
        var yAxis = this.getWidget().getPane().getAxisComponent();
        var axisLineStyles = styles.axisLine;
        var tickLineStyles = styles.tickLine;
        var startX = 0;
        var endX = 0;
        if (yAxis.isFromZero()) {
            startX = 0;
            if (axisLineStyles.show) {
                startX += axisLineStyles.size;
            }
            endX = startX + tickLineStyles.length;
        }
        else {
            startX = bounding.width;
            if (axisLineStyles.show) {
                startX -= axisLineStyles.size;
            }
            endX = startX - tickLineStyles.length;
        }
        return ticks.map(function (tick) { return ({
            coordinates: [
                { x: startX, y: tick.coord },
                { x: endX, y: tick.coord }
            ]
        }); });
    };
    YAxisView.prototype.createTickTexts = function (ticks, bounding, styles) {
        var yAxis = this.getWidget().getPane().getAxisComponent();
        var axisLineStyles = styles.axisLine;
        var tickLineStyles = styles.tickLine;
        var tickTextStyles = styles.tickText;
        var x = 0;
        if (yAxis.isFromZero()) {
            x = tickTextStyles.marginStart;
            if (axisLineStyles.show) {
                x += axisLineStyles.size;
            }
            if (tickLineStyles.show) {
                x += tickLineStyles.length;
            }
        }
        else {
            x = bounding.width - tickTextStyles.marginEnd;
            if (axisLineStyles.show) {
                x -= axisLineStyles.size;
            }
            if (tickLineStyles.show) {
                x -= tickLineStyles.length;
            }
        }
        var textAlign = this.getWidget().getPane().getAxisComponent().isFromZero() ? 'left' : 'right';
        return ticks.map(function (tick) { return ({
            x: x,
            y: tick.coord,
            text: tick.text,
            align: textAlign,
            baseline: 'middle'
        }); });
    };
    return YAxisView;
}(AxisView));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CandleLastPriceLabelView = /** @class */ (function (_super) {
    __extends(CandleLastPriceLabelView, _super);
    function CandleLastPriceLabelView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CandleLastPriceLabelView.prototype.drawImp = function (ctx) {
        var _a;
        var widget = this.getWidget();
        var pane = widget.getPane();
        var bounding = widget.getBounding();
        var chartStore = pane.getChart().getChartStore();
        var priceMarkStyles = chartStore.getStyles().candle.priceMark;
        var lastPriceMarkStyles = priceMarkStyles.last;
        var lastPriceMarkTextStyles = lastPriceMarkStyles.text;
        if (priceMarkStyles.show && lastPriceMarkStyles.show && lastPriceMarkTextStyles.show) {
            var precision = chartStore.getPrecision();
            var yAxis = pane.getAxisComponent();
            var dataList = chartStore.getDataList();
            var data = dataList[dataList.length - 1];
            if (isValid(data)) {
                var close_1 = data.close, open_1 = data.open;
                var priceY = yAxis.convertToNicePixel(close_1);
                var backgroundColor = void 0;
                if (close_1 > open_1) {
                    backgroundColor = lastPriceMarkStyles.upColor;
                }
                else if (close_1 < open_1) {
                    backgroundColor = lastPriceMarkStyles.downColor;
                }
                else {
                    backgroundColor = lastPriceMarkStyles.noChangeColor;
                }
                var text = void 0;
                if (yAxis.getType() === exports.YAxisType.Percentage) {
                    var fromData = chartStore.getVisibleFirstData();
                    var fromClose = fromData.close;
                    text = "".concat(((close_1 - fromClose) / fromClose * 100).toFixed(2), "%");
                }
                else {
                    text = formatPrecision(close_1, precision.price);
                }
                text = formatFoldDecimal(formatThousands(text, chartStore.getThousandsSeparator()), chartStore.getDecimalFoldThreshold());
                var x = void 0;
                var textAlgin = void 0;
                if (yAxis.isFromZero()) {
                    x = 0;
                    textAlgin = 'left';
                }
                else {
                    x = bounding.width;
                    textAlgin = 'right';
                }
                (_a = this.createFigure({
                    name: 'text',
                    attrs: {
                        x: x,
                        y: priceY,
                        text: text,
                        align: textAlgin,
                        baseline: 'middle'
                    },
                    styles: __assign(__assign({}, lastPriceMarkTextStyles), { backgroundColor: backgroundColor })
                })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
            }
        }
    };
    return CandleLastPriceLabelView;
}(View));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IndicatorLastValueView = /** @class */ (function (_super) {
    __extends(IndicatorLastValueView, _super);
    function IndicatorLastValueView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndicatorLastValueView.prototype.drawImp = function (ctx) {
        var _this = this;
        var widget = this.getWidget();
        var pane = widget.getPane();
        var bounding = widget.getBounding();
        var chartStore = pane.getChart().getChartStore();
        var customApi = chartStore.getCustomApi();
        var defaultStyles = chartStore.getStyles().indicator;
        var lastValueMarkStyles = defaultStyles.lastValueMark;
        var lastValueMarkTextStyles = lastValueMarkStyles.text;
        if (lastValueMarkStyles.show) {
            var yAxis_1 = pane.getAxisComponent();
            var dataList_1 = chartStore.getDataList();
            var dataIndex_1 = dataList_1.length - 1;
            var indicators = chartStore.getIndicatorStore().getInstances(pane.getId());
            var thousandsSeparator_1 = chartStore.getThousandsSeparator();
            var decimalFoldThreshold_1 = chartStore.getDecimalFoldThreshold();
            indicators.forEach(function (indicator) {
                var result = indicator.result;
                var indicatorData = result[dataIndex_1];
                if (isValid(indicatorData) && indicator.visible) {
                    var precision_1 = indicator.precision;
                    eachFigures(dataList_1, indicator, dataIndex_1, defaultStyles, function (figure, figureStyles) {
                        var _a;
                        var value = indicatorData[figure.key];
                        if (isNumber(value)) {
                            var y = yAxis_1.convertToNicePixel(value);
                            var text = formatPrecision(value, precision_1);
                            if (indicator.shouldFormatBigNumber) {
                                text = customApi.formatBigNumber(text);
                            }
                            text = formatFoldDecimal(formatThousands(text, thousandsSeparator_1), decimalFoldThreshold_1);
                            var x = void 0;
                            var textAlign = void 0;
                            if (yAxis_1.isFromZero()) {
                                x = 0;
                                textAlign = 'left';
                            }
                            else {
                                x = bounding.width;
                                textAlign = 'right';
                            }
                            (_a = _this.createFigure({
                                name: 'text',
                                attrs: {
                                    x: x,
                                    y: y,
                                    text: text,
                                    align: textAlign,
                                    baseline: 'middle'
                                },
                                styles: __assign(__assign({}, lastValueMarkTextStyles), { backgroundColor: figureStyles.color })
                            })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
                        }
                    });
                }
            });
        }
    };
    return IndicatorLastValueView;
}(View));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OverlayYAxisView = /** @class */ (function (_super) {
    __extends(OverlayYAxisView, _super);
    function OverlayYAxisView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverlayYAxisView.prototype.coordinateToPointTimestampDataIndexFlag = function () {
        return false;
    };
    OverlayYAxisView.prototype.drawDefaultFigures = function (ctx, overlay, coordinates, bounding, precision, dateTimeFormat, customApi, thousandsSeparator, decimalFoldThreshold, defaultStyles, xAxis, yAxis, _hoverInstanceInfo, clickInstanceInfo) {
        this.drawFigures(ctx, overlay, this.getDefaultFigures(overlay, coordinates, bounding, precision, dateTimeFormat, customApi, thousandsSeparator, decimalFoldThreshold, xAxis, yAxis, clickInstanceInfo), defaultStyles);
    };
    OverlayYAxisView.prototype.getDefaultFigures = function (overlay, coordinates, bounding, precision, _dateTimeFormat, _customApi, thousandsSeparator, decimalFoldThreshold, _xAxis, yAxis, clickInstanceInfo) {
        var _a, _b;
        var figures = [];
        if (overlay.needDefaultYAxisFigure &&
            overlay.id === ((_a = clickInstanceInfo.instance) === null || _a === void 0 ? void 0 : _a.id) &&
            clickInstanceInfo.paneId === this.getWidget().getPane().getId()) {
            var topY_1 = Number.MAX_SAFE_INTEGER;
            var bottomY_1 = Number.MIN_SAFE_INTEGER;
            var isFromZero = (_b = yAxis === null || yAxis === void 0 ? void 0 : yAxis.isFromZero()) !== null && _b !== void 0 ? _b : false;
            var textAlign_1;
            var x_1;
            if (isFromZero) {
                textAlign_1 = 'left';
                x_1 = 0;
            }
            else {
                textAlign_1 = 'right';
                x_1 = bounding.width;
            }
            coordinates.forEach(function (coordinate, index) {
                var point = overlay.points[index];
                if (isNumber(point.value)) {
                    topY_1 = Math.min(topY_1, coordinate.y);
                    bottomY_1 = Math.max(bottomY_1, coordinate.y);
                    var text = formatFoldDecimal(formatThousands(formatPrecision(point.value, precision.price), thousandsSeparator), decimalFoldThreshold);
                    figures.push({ type: 'text', attrs: { x: x_1, y: coordinate.y, text: text, align: textAlign_1, baseline: 'middle' }, ignoreEvent: true });
                }
            });
            if (coordinates.length > 1) {
                figures.unshift({ type: 'rect', attrs: { x: 0, y: topY_1, width: bounding.width, height: bottomY_1 - topY_1 }, ignoreEvent: true });
            }
        }
        return figures;
    };
    OverlayYAxisView.prototype.getFigures = function (overlay, coordinates, bounding, barSpace, precision, thousandsSeparator, decimalFoldThreshold, dateTimeFormat, defaultStyles, xAxis, yAxis) {
        var _a, _b;
        return (_b = (_a = overlay.createYAxisFigures) === null || _a === void 0 ? void 0 : _a.call(overlay, { overlay: overlay, coordinates: coordinates, bounding: bounding, barSpace: barSpace, precision: precision, thousandsSeparator: thousandsSeparator, decimalFoldThreshold: decimalFoldThreshold, dateTimeFormat: dateTimeFormat, defaultStyles: defaultStyles, xAxis: xAxis, yAxis: yAxis })) !== null && _b !== void 0 ? _b : [];
    };
    return OverlayYAxisView;
}(OverlayView));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CrosshairHorizontalLabelView = /** @class */ (function (_super) {
    __extends(CrosshairHorizontalLabelView, _super);
    function CrosshairHorizontalLabelView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CrosshairHorizontalLabelView.prototype.drawImp = function (ctx) {
        var _a;
        var widget = this.getWidget();
        var pane = widget.getPane();
        var bounding = widget.getBounding();
        var chartStore = widget.getPane().getChart().getChartStore();
        var crosshair = chartStore.getTooltipStore().getCrosshair();
        var styles = chartStore.getStyles().crosshair;
        if (isString(crosshair.paneId) && this.compare(crosshair, pane.getId())) {
            if (styles.show) {
                var directionStyles = this.getDirectionStyles(styles);
                var textStyles = directionStyles.text;
                if (directionStyles.show && textStyles.show) {
                    var axis = pane.getAxisComponent();
                    var text = this.getText(crosshair, chartStore, axis);
                    ctx.font = createFont(textStyles.size, textStyles.weight, textStyles.family);
                    (_a = this.createFigure({
                        name: 'text',
                        attrs: this.getTextAttrs(text, ctx.measureText(text).width, crosshair, bounding, axis, textStyles),
                        styles: textStyles
                    })) === null || _a === void 0 ? void 0 : _a.draw(ctx);
                }
            }
        }
    };
    CrosshairHorizontalLabelView.prototype.compare = function (crosshair, paneId) {
        return crosshair.paneId === paneId;
    };
    CrosshairHorizontalLabelView.prototype.getDirectionStyles = function (styles) {
        return styles.horizontal;
    };
    CrosshairHorizontalLabelView.prototype.getText = function (crosshair, chartStore, axis) {
        var yAxis = axis;
        var value = axis.convertFromPixel(crosshair.y);
        var text;
        if (yAxis.getType() === exports.YAxisType.Percentage) {
            var fromData = chartStore.getVisibleFirstData();
            text = "".concat(((value - fromData.close) / fromData.close * 100).toFixed(2), "%");
        }
        else {
            var indicators = chartStore.getIndicatorStore().getInstances(crosshair.paneId);
            var precision_1 = 0;
            var shouldFormatBigNumber_1 = false;
            if (yAxis.isInCandle()) {
                precision_1 = chartStore.getPrecision().price;
            }
            else {
                indicators.forEach(function (indicator) {
                    precision_1 = Math.max(indicator.precision, precision_1);
                    if (!shouldFormatBigNumber_1) {
                        shouldFormatBigNumber_1 = indicator.shouldFormatBigNumber;
                    }
                });
            }
            text = formatPrecision(value, precision_1);
            if (shouldFormatBigNumber_1) {
                text = chartStore.getCustomApi().formatBigNumber(text);
            }
        }
        return formatFoldDecimal(formatThousands(text, chartStore.getThousandsSeparator()), chartStore.getDecimalFoldThreshold());
    };
    CrosshairHorizontalLabelView.prototype.getTextAttrs = function (text, _textWidth, crosshair, bounding, axis, _styles) {
        var yAxis = axis;
        var x;
        var textAlign;
        if (yAxis.isFromZero()) {
            x = 0;
            textAlign = 'left';
        }
        else {
            x = bounding.width;
            textAlign = 'right';
        }
        return { x: x, y: crosshair.y, text: text, align: textAlign, baseline: 'middle' };
    };
    return CrosshairHorizontalLabelView;
}(View));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var YAxisWidget = /** @class */ (function (_super) {
    __extends(YAxisWidget, _super);
    function YAxisWidget(rootContainer, pane) {
        var _this = _super.call(this, rootContainer, pane) || this;
        _this._yAxisView = new YAxisView(_this);
        _this._candleLastPriceLabelView = new CandleLastPriceLabelView(_this);
        _this._indicatorLastValueView = new IndicatorLastValueView(_this);
        _this._overlayYAxisView = new OverlayYAxisView(_this);
        _this._crosshairHorizontalLabelView = new CrosshairHorizontalLabelView(_this);
        _this.getContainer().style.cursor = 'ns-resize';
        _this.addChild(_this._overlayYAxisView);
        return _this;
    }
    YAxisWidget.prototype.getName = function () {
        return WidgetNameConstants.Y_AXIS;
    };
    YAxisWidget.prototype.updateMain = function (ctx) {
        this._yAxisView.draw(ctx);
        if (this.getPane().getAxisComponent().isInCandle()) {
            this._candleLastPriceLabelView.draw(ctx);
        }
        this._indicatorLastValueView.draw(ctx);
    };
    YAxisWidget.prototype.updateOverlay = function (ctx) {
        this._overlayYAxisView.draw(ctx);
        this._crosshairHorizontalLabelView.draw(ctx);
    };
    return YAxisWidget;
}(DrawWidget));

var AxisImp = /** @class */ (function () {
    function AxisImp(parent) {
        this._range = { from: 0, to: 0, range: 0, realFrom: 0, realTo: 0, realRange: 0 };
        this._prevRange = { from: 0, to: 0, range: 0, realFrom: 0, realTo: 0, realRange: 0 };
        this._ticks = [];
        this._autoCalcTickFlag = true;
        this._parent = parent;
    }
    AxisImp.prototype.getParent = function () { return this._parent; };
    AxisImp.prototype.buildTicks = function (force) {
        if (this._autoCalcTickFlag) {
            this._range = this.calcRange();
        }
        if (this._prevRange.from !== this._range.from || this._prevRange.to !== this._range.to || force) {
            this._prevRange = this._range;
            var defaultTicks = this.optimalTicks(this._calcTicks());
            this._ticks = this.createTicks({
                range: this._range,
                bounding: this.getSelfBounding(),
                defaultTicks: defaultTicks
            });
            return true;
        }
        return false;
    };
    AxisImp.prototype.getTicks = function () {
        return this._ticks;
    };
    AxisImp.prototype.getScrollZoomEnabled = function () {
        var _a;
        return (_a = this.getParent().getOptions().axisOptions.scrollZoomEnabled) !== null && _a !== void 0 ? _a : true;
    };
    AxisImp.prototype.setRange = function (range) {
        this._autoCalcTickFlag = false;
        this._range = range;
    };
    AxisImp.prototype.getRange = function () { return this._range; };
    AxisImp.prototype.setAutoCalcTickFlag = function (flag) {
        this._autoCalcTickFlag = flag;
    };
    AxisImp.prototype.getAutoCalcTickFlag = function () { return this._autoCalcTickFlag; };
    AxisImp.prototype._calcTicks = function () {
        var _a = this._range, realFrom = _a.realFrom, realTo = _a.realTo, realRange = _a.realRange;
        var ticks = [];
        if (realRange >= 0) {
            var _b = __read(this._calcTickInterval(realRange), 2), interval = _b[0], precision = _b[1];
            var first = round(Math.ceil(realFrom / interval) * interval, precision);
            var last = round(Math.floor(realTo / interval) * interval, precision);
            var n = 0;
            var f = first;
            if (interval !== 0) {
                while (f <= last) {
                    var v = f.toFixed(precision);
                    ticks[n] = { text: v, coord: 0, value: v };
                    ++n;
                    f += interval;
                }
            }
        }
        return ticks;
    };
    AxisImp.prototype._calcTickInterval = function (range) {
        var interval = nice(range / 8.0);
        var precision = getPrecision(interval);
        return [interval, precision];
    };
    return AxisImp;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var YAxisImp = /** @class */ (function (_super) {
    __extends(YAxisImp, _super);
    function YAxisImp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YAxisImp.prototype.calcRange = function () {
        var _a, _b, _c, _d;
        var parent = this.getParent();
        var chart = parent.getChart();
        var chartStore = chart.getChartStore();
        var min = Number.MAX_SAFE_INTEGER;
        var max = Number.MIN_SAFE_INTEGER;
        var figuresResultList = [];
        var shouldOhlc = false;
        var specifyMin = Number.MAX_SAFE_INTEGER;
        var specifyMax = Number.MIN_SAFE_INTEGER;
        var indicatorPrecision = Number.MAX_SAFE_INTEGER;
        var indicators = chartStore.getIndicatorStore().getInstances(parent.getId());
        indicators.forEach(function (indicator) {
            var _a, _b, _c;
            if (!shouldOhlc) {
                shouldOhlc = (_a = indicator.shouldOhlc) !== null && _a !== void 0 ? _a : false;
            }
            indicatorPrecision = Math.min(indicatorPrecision, indicator.precision);
            if (isNumber(indicator.minValue)) {
                specifyMin = Math.min(specifyMin, indicator.minValue);
            }
            if (isNumber(indicator.maxValue)) {
                specifyMax = Math.max(specifyMax, indicator.maxValue);
            }
            figuresResultList.push({
                figures: (_b = indicator.figures) !== null && _b !== void 0 ? _b : [],
                result: (_c = indicator.result) !== null && _c !== void 0 ? _c : []
            });
        });
        var precision = 4;
        var inCandle = this.isInCandle();
        if (inCandle) {
            var pricePrecision = chartStore.getPrecision().price;
            if (indicatorPrecision !== Number.MAX_SAFE_INTEGER) {
                precision = Math.min(indicatorPrecision, pricePrecision);
            }
            else {
                precision = pricePrecision;
            }
        }
        else {
            if (indicatorPrecision !== Number.MAX_SAFE_INTEGER) {
                precision = indicatorPrecision;
            }
        }
        var visibleDataList = chartStore.getVisibleDataList();
        var candleStyles = chart.getStyles().candle;
        var isArea = candleStyles.type === exports.CandleType.Area;
        var areaValueKey = candleStyles.area.value;
        var shouldCompareHighLow = (inCandle && !isArea) || (!inCandle && shouldOhlc);
        visibleDataList.forEach(function (_a) {
            var dataIndex = _a.dataIndex, data = _a.data;
            if (isValid(data)) {
                if (shouldCompareHighLow) {
                    min = Math.min(min, data.low);
                    max = Math.max(max, data.high);
                }
                if (inCandle && isArea) {
                    var value = data[areaValueKey];
                    if (isNumber(value)) {
                        min = Math.min(min, value);
                        max = Math.max(max, value);
                    }
                }
            }
            figuresResultList.forEach(function (_a) {
                var _b;
                var figures = _a.figures, result = _a.result;
                var indicatorData = (_b = result[dataIndex]) !== null && _b !== void 0 ? _b : {};
                figures.forEach(function (figure) {
                    var value = indicatorData[figure.key];
                    if (isNumber(value)) {
                        min = Math.min(min, value);
                        max = Math.max(max, value);
                    }
                });
            });
        });
        if (min !== Number.MAX_SAFE_INTEGER && max !== Number.MIN_SAFE_INTEGER) {
            min = Math.min(specifyMin, min);
            max = Math.max(specifyMax, max);
        }
        else {
            min = 0;
            max = 10;
        }
        var type = this.getType();
        var dif;
        switch (type) {
            case exports.YAxisType.Percentage: {
                var fromData = chartStore.getVisibleFirstData();
                if (isValid(fromData) && isNumber(fromData.close)) {
                    min = (min - fromData.close) / fromData.close * 100;
                    max = (max - fromData.close) / fromData.close * 100;
                }
                dif = Math.pow(10, -2);
                break;
            }
            case exports.YAxisType.Log: {
                min = log10(min);
                max = log10(max);
                dif = 0.05 * index10(-precision);
                break;
            }
            default: {
                dif = index10(-precision);
            }
        }
        if (min === max ||
            Math.abs(min - max) < dif) {
            var minCheck = specifyMin === min;
            var maxCheck = specifyMax === max;
            min = minCheck ? min : (maxCheck ? min - 8 * dif : min - 4 * dif);
            max = maxCheck ? max : (minCheck ? max + 8 * dif : max + 4 * dif);
        }
        var height = (_b = (_a = this.getParent().getYAxisWidget()) === null || _a === void 0 ? void 0 : _a.getBounding().height) !== null && _b !== void 0 ? _b : 0;
        var paneGap = parent.getOptions().gap;
        var topRate = (_c = paneGap === null || paneGap === void 0 ? void 0 : paneGap.top) !== null && _c !== void 0 ? _c : 0.2;
        if (topRate >= 1) {
            topRate = topRate / height;
        }
        var bottomRate = (_d = paneGap === null || paneGap === void 0 ? void 0 : paneGap.bottom) !== null && _d !== void 0 ? _d : 0.1;
        if (bottomRate >= 1) {
            bottomRate = bottomRate / height;
        }
        var range = Math.abs(max - min);
        // gap
        min = min - range * bottomRate;
        max = max + range * topRate;
        range = Math.abs(max - min);
        var realMin;
        var realMax;
        var realRange;
        if (type === exports.YAxisType.Log) {
            realMin = index10(min);
            realMax = index10(max);
            realRange = Math.abs(realMax - realMin);
        }
        else {
            realMin = min;
            realMax = max;
            realRange = range;
        }
        return {
            from: min, to: max,
            range: range,
            realFrom: realMin, realTo: realMax,
            realRange: realRange
        };
    };
    /**
     * 内部值转换成坐标
     * @param value
     * @return {number}
     * @private
     */
    YAxisImp.prototype._innerConvertToPixel = function (value) {
        var _a, _b;
        var height = (_b = (_a = this.getParent().getYAxisWidget()) === null || _a === void 0 ? void 0 : _a.getBounding().height) !== null && _b !== void 0 ? _b : 0;
        var _c = this.getRange(), from = _c.from, range = _c.range;
        var rate = (value - from) / range;
        return this.isReverse() ? Math.round(rate * height) : Math.round((1 - rate) * height);
    };
    /**
     * 是否是蜡烛图轴
     * @return {boolean}
     */
    YAxisImp.prototype.isInCandle = function () {
        return this.getParent().getId() === PaneIdConstants.CANDLE;
    };
    /**
     * y轴类型
     * @return {YAxisType}
     */
    YAxisImp.prototype.getType = function () {
        if (this.isInCandle()) {
            return this.getParent().getChart().getStyles().yAxis.type;
        }
        return exports.YAxisType.Normal;
    };
    YAxisImp.prototype.getPosition = function () {
        return this.getParent().getChart().getStyles().yAxis.position;
    };
    /**
     * 是否反转
     * @return {boolean}
     */
    YAxisImp.prototype.isReverse = function () {
        if (this.isInCandle()) {
            return this.getParent().getChart().getStyles().yAxis.reverse;
        }
        return false;
    };
    /**
     * 是否从y轴0开始
     * @return {boolean}
     */
    YAxisImp.prototype.isFromZero = function () {
        var yAxisStyles = this.getParent().getChart().getStyles().yAxis;
        var inside = yAxisStyles.inside;
        return ((yAxisStyles.position === exports.YAxisPosition.Left && inside) ||
            (yAxisStyles.position === exports.YAxisPosition.Right && !inside));
    };
    YAxisImp.prototype.optimalTicks = function (ticks) {
        var _this = this;
        var _a, _b;
        var pane = this.getParent();
        var height = (_b = (_a = pane.getYAxisWidget()) === null || _a === void 0 ? void 0 : _a.getBounding().height) !== null && _b !== void 0 ? _b : 0;
        var chartStore = pane.getChart().getChartStore();
        var customApi = chartStore.getCustomApi();
        var optimalTicks = [];
        var type = this.getType();
        var indicators = chartStore.getIndicatorStore().getInstances(pane.getId());
        var thousandsSeparator = chartStore.getThousandsSeparator();
        var decimalFoldThreshold = chartStore.getDecimalFoldThreshold();
        var precision = 0;
        var shouldFormatBigNumber = false;
        if (this.isInCandle()) {
            precision = chartStore.getPrecision().price;
        }
        else {
            indicators.forEach(function (tech) {
                precision = Math.max(precision, tech.precision);
                if (!shouldFormatBigNumber) {
                    shouldFormatBigNumber = tech.shouldFormatBigNumber;
                }
            });
        }
        var textHeight = chartStore.getStyles().xAxis.tickText.size;
        var validY;
        ticks.forEach(function (_a) {
            var value = _a.value;
            var v;
            var y = _this._innerConvertToPixel(+value);
            switch (type) {
                case exports.YAxisType.Percentage: {
                    v = "".concat(formatPrecision(value, 2), "%");
                    break;
                }
                case exports.YAxisType.Log: {
                    y = _this._innerConvertToPixel(log10(+value));
                    v = formatPrecision(value, precision);
                    break;
                }
                default: {
                    v = formatPrecision(value, precision);
                    if (shouldFormatBigNumber) {
                        v = customApi.formatBigNumber(value);
                    }
                    break;
                }
            }
            v = formatFoldDecimal(formatThousands(v, thousandsSeparator), decimalFoldThreshold);
            var validYNumber = isNumber(validY);
            if (y > textHeight &&
                y < height - textHeight &&
                ((validYNumber && (Math.abs(validY - y) > textHeight * 2)) || !validYNumber)) {
                optimalTicks.push({ text: v, coord: y, value: value });
                validY = y;
            }
        });
        return optimalTicks;
    };
    YAxisImp.prototype.getAutoSize = function () {
        var pane = this.getParent();
        var chart = pane.getChart();
        var styles = chart.getStyles();
        var yAxisStyles = styles.yAxis;
        var width = yAxisStyles.size;
        if (width !== 'auto') {
            return width;
        }
        var chartStore = chart.getChartStore();
        var customApi = chartStore.getCustomApi();
        var yAxisWidth = 0;
        if (yAxisStyles.show) {
            if (yAxisStyles.axisLine.show) {
                yAxisWidth += yAxisStyles.axisLine.size;
            }
            if (yAxisStyles.tickLine.show) {
                yAxisWidth += yAxisStyles.tickLine.length;
            }
            if (yAxisStyles.tickText.show) {
                var textWidth_1 = 0;
                this.getTicks().forEach(function (tick) {
                    textWidth_1 = Math.max(textWidth_1, calcTextWidth(tick.text, yAxisStyles.tickText.size, yAxisStyles.tickText.weight, yAxisStyles.tickText.family));
                });
                yAxisWidth += (yAxisStyles.tickText.marginStart + yAxisStyles.tickText.marginEnd + textWidth_1);
            }
        }
        var crosshairStyles = styles.crosshair;
        var crosshairVerticalTextWidth = 0;
        if (crosshairStyles.show &&
            crosshairStyles.horizontal.show &&
            crosshairStyles.horizontal.text.show) {
            var indicators = chartStore.getIndicatorStore().getInstances(pane.getId());
            var techPrecision_1 = 0;
            var shouldFormatBigNumber_1 = false;
            indicators.forEach(function (tech) {
                techPrecision_1 = Math.max(tech.precision, techPrecision_1);
                if (!shouldFormatBigNumber_1) {
                    shouldFormatBigNumber_1 = tech.shouldFormatBigNumber;
                }
            });
            var precision = 2;
            if (this.getType() !== exports.YAxisType.Percentage) {
                if (this.isInCandle()) {
                    var pricePrecision = chartStore.getPrecision().price;
                    var lastValueMarkStyles = styles.indicator.lastValueMark;
                    if (lastValueMarkStyles.show && lastValueMarkStyles.text.show) {
                        precision = Math.max(techPrecision_1, pricePrecision);
                    }
                    else {
                        precision = pricePrecision;
                    }
                }
                else {
                    precision = techPrecision_1;
                }
            }
            var valueText = formatPrecision(this.getRange().to, precision);
            if (shouldFormatBigNumber_1) {
                valueText = customApi.formatBigNumber(valueText);
            }
            valueText = formatFoldDecimal(valueText, chartStore.getDecimalFoldThreshold());
            crosshairVerticalTextWidth += (crosshairStyles.horizontal.text.paddingLeft +
                crosshairStyles.horizontal.text.paddingRight +
                crosshairStyles.horizontal.text.borderSize * 2 +
                calcTextWidth(valueText, crosshairStyles.horizontal.text.size, crosshairStyles.horizontal.text.weight, crosshairStyles.horizontal.text.family));
        }
        return Math.max(yAxisWidth, crosshairVerticalTextWidth);
    };
    YAxisImp.prototype.getSelfBounding = function () {
        return this.getParent().getYAxisWidget().getBounding();
    };
    YAxisImp.prototype.convertFromPixel = function (pixel) {
        var _a, _b;
        var height = (_b = (_a = this.getParent().getYAxisWidget()) === null || _a === void 0 ? void 0 : _a.getBounding().height) !== null && _b !== void 0 ? _b : 0;
        var _c = this.getRange(), from = _c.from, range = _c.range;
        var rate = this.isReverse() ? pixel / height : 1 - pixel / height;
        var value = rate * range + from;
        switch (this.getType()) {
            case exports.YAxisType.Percentage: {
                var fromData = this.getParent().getChart().getChartStore().getVisibleFirstData();
                if (isValid(fromData) && isNumber(fromData.close)) {
                    return fromData.close * value / 100 + fromData.close;
                }
                return 0;
            }
            case exports.YAxisType.Log: {
                return index10(value);
            }
            default: {
                return value;
            }
        }
    };
    YAxisImp.prototype.convertToRealValue = function (value) {
        var v = value;
        if (this.getType() === exports.YAxisType.Log) {
            v = index10(value);
        }
        return v;
    };
    YAxisImp.prototype.convertToPixel = function (value) {
        var v = value;
        switch (this.getType()) {
            case exports.YAxisType.Percentage: {
                var fromData = this.getParent().getChart().getChartStore().getVisibleFirstData();
                if (isValid(fromData) && isNumber(fromData.close)) {
                    v = (value - fromData.close) / fromData.close * 100;
                }
                break;
            }
            case exports.YAxisType.Log: {
                v = log10(value);
                break;
            }
            default: {
                v = value;
            }
        }
        return this._innerConvertToPixel(v);
    };
    YAxisImp.prototype.convertToNicePixel = function (value) {
        var _a, _b;
        var height = (_b = (_a = this.getParent().getYAxisWidget()) === null || _a === void 0 ? void 0 : _a.getBounding().height) !== null && _b !== void 0 ? _b : 0;
        var pixel = this.convertToPixel(value);
        return Math.round(Math.max(height * 0.05, Math.min(pixel, height * 0.98)));
    };
    YAxisImp.extend = function (template) {
        var Custom = /** @class */ (function (_super) {
            __extends(Custom, _super);
            function Custom() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Custom.prototype.createTicks = function (params) {
                return template.createTicks(params);
            };
            return Custom;
        }(YAxisImp));
        return Custom;
    };
    return YAxisImp;
}(AxisImp));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var defaultYAxis = {
    name: 'default',
    createTicks: function (_a) {
        var defaultTicks = _a.defaultTicks;
        return defaultTicks;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yAxises = {
    default: YAxisImp.extend(defaultYAxis)
};
function registerYAxis(axis) {
    yAxises[axis.name] = YAxisImp.extend(axis);
}
function getYAxisClass(name) {
    var _a;
    return (_a = yAxises[name]) !== null && _a !== void 0 ? _a : yAxises.default;
}

var Pane = /** @class */ (function () {
    function Pane(rootContainer, afterElement, chart, id) {
        this._bounding = createDefaultBounding();
        this._chart = chart;
        this._id = id;
        this._init(rootContainer, afterElement);
    }
    Pane.prototype._init = function (rootContainer, afterElement) {
        this._rootContainer = rootContainer;
        this._container = createDom('div', {
            width: '100%',
            margin: '0',
            padding: '0',
            position: 'relative',
            overflow: 'hidden',
            boxSizing: 'border-box'
        });
        if (afterElement !== null) {
            rootContainer.insertBefore(this._container, afterElement);
        }
        else {
            rootContainer.appendChild(this._container);
        }
    };
    Pane.prototype.getContainer = function () {
        return this._container;
    };
    Pane.prototype.getId = function () {
        return this._id;
    };
    Pane.prototype.getChart = function () {
        return this._chart;
    };
    Pane.prototype.getBounding = function () {
        return this._bounding;
    };
    Pane.prototype.update = function (level) {
        if (this._bounding.height !== this._container.clientHeight) {
            this._container.style.height = "".concat(this._bounding.height, "px");
        }
        this.updateImp(level !== null && level !== void 0 ? level : 3 /* UpdateLevel.Drawer */, this._container, this._bounding);
    };
    Pane.prototype.destroy = function () {
        this._rootContainer.removeChild(this._container);
    };
    return Pane;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DrawPane = /** @class */ (function (_super) {
    __extends(DrawPane, _super);
    function DrawPane(rootContainer, afterElement, chart, id, options) {
        var _this = _super.call(this, rootContainer, afterElement, chart, id) || this;
        _this._yAxisWidget = null;
        _this._options = { minHeight: PANE_MIN_HEIGHT, dragEnabled: true, gap: { top: 0.2, bottom: 0.1 }, axisOptions: { name: 'default', scrollZoomEnabled: true } };
        var container = _this.getContainer();
        _this._mainWidget = _this.createMainWidget(container);
        _this._yAxisWidget = _this.createYAxisWidget(container);
        _this.setOptions(options);
        return _this;
    }
    DrawPane.prototype.setOptions = function (options) {
        var _a, _b, _c;
        var name = (_a = options.axisOptions) === null || _a === void 0 ? void 0 : _a.name;
        if ((this._options.axisOptions.name !== name && isString(name)) ||
            !isValid(this._axis)) {
            this._axis = this.createAxisComponent(name !== null && name !== void 0 ? name : 'default');
        }
        merge(this._options, options);
        var container;
        var cursor;
        if (this.getId() === PaneIdConstants.X_AXIS) {
            container = this.getMainWidget().getContainer();
            cursor = 'ew-resize';
        }
        else {
            container = this.getYAxisWidget().getContainer();
            cursor = 'ns-resize';
        }
        if ((_c = (_b = options.axisOptions) === null || _b === void 0 ? void 0 : _b.scrollZoomEnabled) !== null && _c !== void 0 ? _c : true) {
            container.style.cursor = cursor;
        }
        else {
            container.style.cursor = 'default';
        }
        return this;
    };
    DrawPane.prototype.getOptions = function () { return this._options; };
    DrawPane.prototype.getAxisComponent = function () {
        return this._axis;
    };
    DrawPane.prototype.setBounding = function (rootBounding, mainBounding, yAxisBounding) {
        var _a, _b;
        merge(this.getBounding(), rootBounding);
        var contentBounding = {};
        if (isValid(rootBounding.height)) {
            contentBounding.height = rootBounding.height;
        }
        if (isValid(rootBounding.top)) {
            contentBounding.top = rootBounding.top;
        }
        this._mainWidget.setBounding(contentBounding);
        (_a = this._yAxisWidget) === null || _a === void 0 ? void 0 : _a.setBounding(contentBounding);
        if (isValid(mainBounding)) {
            this._mainWidget.setBounding(mainBounding);
        }
        if (isValid(yAxisBounding)) {
            (_b = this._yAxisWidget) === null || _b === void 0 ? void 0 : _b.setBounding(yAxisBounding);
        }
        return this;
    };
    DrawPane.prototype.getMainWidget = function () { return this._mainWidget; };
    DrawPane.prototype.getYAxisWidget = function () { return this._yAxisWidget; };
    DrawPane.prototype.updateImp = function (level) {
        var _a;
        this._mainWidget.update(level);
        (_a = this._yAxisWidget) === null || _a === void 0 ? void 0 : _a.update(level);
    };
    DrawPane.prototype.destroy = function () {
        var _a;
        _super.prototype.destroy.call(this);
        this._mainWidget.destroy();
        (_a = this._yAxisWidget) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    DrawPane.prototype.getImage = function (includeOverlay) {
        var _a = this.getBounding(), width = _a.width, height = _a.height;
        var canvas = createDom('canvas', {
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            boxSizing: 'border-box'
        });
        var ctx = canvas.getContext('2d');
        var pixelRatio = getPixelRatio(canvas);
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        ctx.scale(pixelRatio, pixelRatio);
        var mainBounding = this._mainWidget.getBounding();
        ctx.drawImage(this._mainWidget.getImage(includeOverlay), mainBounding.left, 0, mainBounding.width, mainBounding.height);
        if (this._yAxisWidget !== null) {
            var yAxisBounding = this._yAxisWidget.getBounding();
            ctx.drawImage(this._yAxisWidget.getImage(includeOverlay), yAxisBounding.left, 0, yAxisBounding.width, yAxisBounding.height);
        }
        return canvas;
    };
    DrawPane.prototype.createYAxisWidget = function (_container) { return null; };
    return DrawPane;
}(Pane));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var IndicatorPane = /** @class */ (function (_super) {
    __extends(IndicatorPane, _super);
    function IndicatorPane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndicatorPane.prototype.createAxisComponent = function (name) {
        var YAxisClass = getYAxisClass(name !== null && name !== void 0 ? name : 'default');
        return new YAxisClass(this);
    };
    IndicatorPane.prototype.createMainWidget = function (container) {
        return new IndicatorWidget(container, this);
    };
    IndicatorPane.prototype.createYAxisWidget = function (container) {
        return new YAxisWidget(container, this);
    };
    return IndicatorPane;
}(DrawPane));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CandlePane = /** @class */ (function (_super) {
    __extends(CandlePane, _super);
    function CandlePane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CandlePane.prototype.createMainWidget = function (container) {
        return new CandleWidget(container, this);
    };
    return CandlePane;
}(IndicatorPane));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var XAxisView = /** @class */ (function (_super) {
    __extends(XAxisView, _super);
    function XAxisView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XAxisView.prototype.getAxisStyles = function (styles) {
        return styles.xAxis;
    };
    XAxisView.prototype.createAxisLine = function (bounding) {
        return {
            coordinates: [
                { x: 0, y: 0 },
                { x: bounding.width, y: 0 }
            ]
        };
    };
    XAxisView.prototype.createTickLines = function (ticks, _bounding, styles) {
        var tickLineStyles = styles.tickLine;
        var axisLineSize = styles.axisLine.size;
        return ticks.map(function (tick) { return ({
            coordinates: [
                { x: tick.coord, y: 0 },
                { x: tick.coord, y: axisLineSize + tickLineStyles.length }
            ]
        }); });
    };
    XAxisView.prototype.createTickTexts = function (ticks, _bounding, styles) {
        var tickTickStyles = styles.tickText;
        var axisLineSize = styles.axisLine.size;
        var tickLineLength = styles.tickLine.length;
        return ticks.map(function (tick) { return ({
            x: tick.coord,
            y: axisLineSize + tickLineLength + tickTickStyles.marginStart,
            text: tick.text,
            align: 'center',
            baseline: 'top'
        }); });
    };
    return XAxisView;
}(AxisView));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OverlayXAxisView = /** @class */ (function (_super) {
    __extends(OverlayXAxisView, _super);
    function OverlayXAxisView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverlayXAxisView.prototype.coordinateToPointTimestampDataIndexFlag = function () {
        return true;
    };
    OverlayXAxisView.prototype.coordinateToPointValueFlag = function () {
        return false;
    };
    OverlayXAxisView.prototype.getCompleteOverlays = function (overlayStore) {
        return overlayStore.getInstances();
    };
    OverlayXAxisView.prototype.getProgressOverlay = function (info) {
        return info.instance;
    };
    OverlayXAxisView.prototype.getDefaultFigures = function (overlay, coordinates, bounding, _precision, dateTimeFormat, customApi, _thousandsSeparator, _decimalFoldThreshold, _xAxis, _yAxis, clickInstanceInfo) {
        var _a;
        var figures = [];
        if (overlay.needDefaultXAxisFigure && overlay.id === ((_a = clickInstanceInfo.instance) === null || _a === void 0 ? void 0 : _a.id)) {
            var leftX_1 = Number.MAX_SAFE_INTEGER;
            var rightX_1 = Number.MIN_SAFE_INTEGER;
            coordinates.forEach(function (coordinate, index) {
                leftX_1 = Math.min(leftX_1, coordinate.x);
                rightX_1 = Math.max(rightX_1, coordinate.x);
                var point = overlay.points[index];
                if (isNumber(point.timestamp)) {
                    var text = customApi.formatDate(dateTimeFormat, point.timestamp, 'YYYY-MM-DD HH:mm', exports.FormatDateType.Crosshair);
                    figures.push({ type: 'text', attrs: { x: coordinate.x, y: 0, text: text, align: 'center' }, ignoreEvent: true });
                }
            });
            if (coordinates.length > 1) {
                figures.unshift({ type: 'rect', attrs: { x: leftX_1, y: 0, width: rightX_1 - leftX_1, height: bounding.height }, ignoreEvent: true });
            }
        }
        return figures;
    };
    OverlayXAxisView.prototype.getFigures = function (overlay, coordinates, bounding, barSpace, precision, thousandsSeparator, decimalFoldThreshold, dateTimeFormat, defaultStyles, xAxis, yAxis) {
        var _a, _b;
        return (_b = (_a = overlay.createXAxisFigures) === null || _a === void 0 ? void 0 : _a.call(overlay, { overlay: overlay, coordinates: coordinates, bounding: bounding, barSpace: barSpace, precision: precision, thousandsSeparator: thousandsSeparator, decimalFoldThreshold: decimalFoldThreshold, dateTimeFormat: dateTimeFormat, defaultStyles: defaultStyles, xAxis: xAxis, yAxis: yAxis })) !== null && _b !== void 0 ? _b : [];
    };
    return OverlayXAxisView;
}(OverlayYAxisView));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CrosshairVerticalLabelView = /** @class */ (function (_super) {
    __extends(CrosshairVerticalLabelView, _super);
    function CrosshairVerticalLabelView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CrosshairVerticalLabelView.prototype.compare = function (crosshair) {
        return isValid(crosshair.kLineData) && crosshair.dataIndex === crosshair.realDataIndex;
    };
    CrosshairVerticalLabelView.prototype.getDirectionStyles = function (styles) {
        return styles.vertical;
    };
    CrosshairVerticalLabelView.prototype.getText = function (crosshair, chartStore) {
        var _a;
        var timestamp = (_a = crosshair.kLineData) === null || _a === void 0 ? void 0 : _a.timestamp;
        return chartStore.getCustomApi().formatDate(chartStore.getTimeScaleStore().getDateTimeFormat(), timestamp, 'YYYY-MM-DD HH:mm', exports.FormatDateType.Crosshair);
    };
    CrosshairVerticalLabelView.prototype.getTextAttrs = function (text, textWidth, crosshair, bounding, _axis, styles) {
        var x = crosshair.realX;
        var optimalX;
        var align = 'center';
        if (x - textWidth / 2 - styles.paddingLeft < 0) {
            optimalX = 0;
            align = 'left';
        }
        else if (x + textWidth / 2 + styles.paddingRight > bounding.width) {
            optimalX = bounding.width;
            align = 'right';
        }
        else {
            optimalX = x;
        }
        return { x: optimalX, y: 0, text: text, align: align, baseline: 'top' };
    };
    return CrosshairVerticalLabelView;
}(CrosshairHorizontalLabelView));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var XAxisWidget = /** @class */ (function (_super) {
    __extends(XAxisWidget, _super);
    function XAxisWidget(rootContainer, pane) {
        var _this = _super.call(this, rootContainer, pane) || this;
        _this._xAxisView = new XAxisView(_this);
        _this._overlayXAxisView = new OverlayXAxisView(_this);
        _this._crosshairVerticalLabelView = new CrosshairVerticalLabelView(_this);
        _this.getContainer().style.cursor = 'ew-resize';
        _this.addChild(_this._overlayXAxisView);
        return _this;
    }
    XAxisWidget.prototype.getName = function () {
        return WidgetNameConstants.X_AXIS;
    };
    XAxisWidget.prototype.updateMain = function (ctx) {
        this._xAxisView.draw(ctx);
    };
    XAxisWidget.prototype.updateOverlay = function (ctx) {
        this._overlayXAxisView.draw(ctx);
        this._crosshairVerticalLabelView.draw(ctx);
    };
    return XAxisWidget;
}(DrawWidget));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var XAxisImp = /** @class */ (function (_super) {
    __extends(XAxisImp, _super);
    function XAxisImp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XAxisImp.prototype.calcRange = function () {
        var chartStore = this.getParent().getChart().getChartStore();
        var _a = chartStore.getTimeScaleStore().getVisibleRange(), from = _a.from, to = _a.to;
        var af = from;
        var at = to - 1;
        var range = to - from;
        return {
            from: af, to: at,
            range: range,
            realFrom: af, realTo: at, realRange: range
        };
    };
    XAxisImp.prototype.optimalTicks = function (ticks) {
        var _a, _b;
        var chart = this.getParent().getChart();
        var chartStore = chart.getChartStore();
        var formatDate = chartStore.getCustomApi().formatDate;
        var optimalTicks = [];
        var tickLength = ticks.length;
        var dataList = chartStore.getDataList();
        if (tickLength > 0) {
            var dateTimeFormat = chartStore.getTimeScaleStore().getDateTimeFormat();
            var tickTextStyles = chart.getStyles().xAxis.tickText;
            var defaultLabelWidth = calcTextWidth('00-00 00:00', tickTextStyles.size, tickTextStyles.weight, tickTextStyles.family);
            var pos = parseInt(ticks[0].value, 10);
            var x = this.convertToPixel(pos);
            var tickCountDif = 1;
            if (tickLength > 1) {
                var nextPos = parseInt(ticks[1].value, 10);
                var nextX = this.convertToPixel(nextPos);
                var xDif = Math.abs(nextX - x);
                if (xDif < defaultLabelWidth) {
                    tickCountDif = Math.ceil(defaultLabelWidth / xDif);
                }
            }
            for (var i = 0; i < tickLength; i += tickCountDif) {
                var pos_1 = parseInt(ticks[i].value, 10);
                var kLineData = dataList[pos_1];
                var timestamp = kLineData.timestamp;
                var text = formatDate(dateTimeFormat, timestamp, 'HH:mm', exports.FormatDateType.XAxis);
                if (i !== 0) {
                    var prevPos = parseInt(ticks[i - tickCountDif].value, 10);
                    var prevKLineData = dataList[prevPos];
                    var prevTimestamp = prevKLineData.timestamp;
                    text = (_a = this._optimalTickLabel(formatDate, dateTimeFormat, timestamp, prevTimestamp)) !== null && _a !== void 0 ? _a : text;
                }
                var x_1 = this.convertToPixel(pos_1);
                optimalTicks.push({ text: text, coord: x_1, value: timestamp });
            }
            var optimalTickLength = optimalTicks.length;
            if (optimalTickLength === 1) {
                optimalTicks[0].text = formatDate(dateTimeFormat, optimalTicks[0].value, 'YYYY-MM-DD HH:mm', exports.FormatDateType.XAxis);
            }
            else {
                var firstTimestamp = optimalTicks[0].value;
                var secondTimestamp = optimalTicks[1].value;
                if (isValid(optimalTicks[2])) {
                    var thirdText = optimalTicks[2].text;
                    if (/^[0-9]{2}-[0-9]{2}$/.test(thirdText)) {
                        optimalTicks[0].text = formatDate(dateTimeFormat, firstTimestamp, 'MM-DD', exports.FormatDateType.XAxis);
                    }
                    else if (/^[0-9]{4}-[0-9]{2}$/.test(thirdText)) {
                        optimalTicks[0].text = formatDate(dateTimeFormat, firstTimestamp, 'YYYY-MM', exports.FormatDateType.XAxis);
                    }
                    else if (/^[0-9]{4}$/.test(thirdText)) {
                        optimalTicks[0].text = formatDate(dateTimeFormat, firstTimestamp, 'YYYY', exports.FormatDateType.XAxis);
                    }
                }
                else {
                    optimalTicks[0].text = (_b = this._optimalTickLabel(formatDate, dateTimeFormat, firstTimestamp, secondTimestamp)) !== null && _b !== void 0 ? _b : optimalTicks[0].text;
                }
            }
        }
        return optimalTicks;
    };
    XAxisImp.prototype._optimalTickLabel = function (formatDate, dateTimeFormat, timestamp, comparedTimestamp) {
        var year = formatDate(dateTimeFormat, timestamp, 'YYYY', exports.FormatDateType.XAxis);
        var month = formatDate(dateTimeFormat, timestamp, 'YYYY-MM', exports.FormatDateType.XAxis);
        var day = formatDate(dateTimeFormat, timestamp, 'MM-DD', exports.FormatDateType.XAxis);
        if (year !== formatDate(dateTimeFormat, comparedTimestamp, 'YYYY', exports.FormatDateType.XAxis)) {
            return year;
        }
        else if (month !== formatDate(dateTimeFormat, comparedTimestamp, 'YYYY-MM', exports.FormatDateType.XAxis)) {
            return month;
        }
        else if (day !== formatDate(dateTimeFormat, comparedTimestamp, 'MM-DD', exports.FormatDateType.XAxis)) {
            return day;
        }
        return null;
    };
    XAxisImp.prototype.getAutoSize = function () {
        var styles = this.getParent().getChart().getStyles();
        var xAxisStyles = styles.xAxis;
        var height = xAxisStyles.size;
        if (height !== 'auto') {
            return height;
        }
        var crosshairStyles = styles.crosshair;
        var xAxisHeight = 0;
        if (xAxisStyles.show) {
            if (xAxisStyles.axisLine.show) {
                xAxisHeight += xAxisStyles.axisLine.size;
            }
            if (xAxisStyles.tickLine.show) {
                xAxisHeight += xAxisStyles.tickLine.length;
            }
            if (xAxisStyles.tickText.show) {
                xAxisHeight += (xAxisStyles.tickText.marginStart + xAxisStyles.tickText.marginEnd + xAxisStyles.tickText.size);
            }
        }
        var crosshairVerticalTextHeight = 0;
        if (crosshairStyles.show &&
            crosshairStyles.vertical.show &&
            crosshairStyles.vertical.text.show) {
            crosshairVerticalTextHeight += (crosshairStyles.vertical.text.paddingTop +
                crosshairStyles.vertical.text.paddingBottom +
                crosshairStyles.vertical.text.borderSize * 2 +
                crosshairStyles.vertical.text.size);
        }
        return Math.max(xAxisHeight, crosshairVerticalTextHeight);
    };
    XAxisImp.prototype.getSelfBounding = function () {
        return this.getParent().getMainWidget().getBounding();
    };
    XAxisImp.prototype.convertTimestampFromPixel = function (pixel) {
        var timeScaleStore = this.getParent().getChart().getChartStore().getTimeScaleStore();
        var dataIndex = timeScaleStore.coordinateToDataIndex(pixel);
        return timeScaleStore.dataIndexToTimestamp(dataIndex);
    };
    XAxisImp.prototype.convertTimestampToPixel = function (timestamp) {
        var timeScaleStore = this.getParent().getChart().getChartStore().getTimeScaleStore();
        var dataIndex = timeScaleStore.timestampToDataIndex(timestamp);
        return timeScaleStore.dataIndexToCoordinate(dataIndex);
    };
    XAxisImp.prototype.convertFromPixel = function (pixel) {
        return this.getParent().getChart().getChartStore().getTimeScaleStore().coordinateToDataIndex(pixel);
    };
    XAxisImp.prototype.convertToPixel = function (value) {
        return this.getParent().getChart().getChartStore().getTimeScaleStore().dataIndexToCoordinate(value);
    };
    XAxisImp.extend = function (template) {
        var Custom = /** @class */ (function (_super) {
            __extends(Custom, _super);
            function Custom() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Custom.prototype.createTicks = function (params) {
                return template.createTicks(params);
            };
            return Custom;
        }(XAxisImp));
        return Custom;
    };
    return XAxisImp;
}(AxisImp));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var defaultXAxis = {
    name: 'default',
    createTicks: function (_a) {
        var defaultTicks = _a.defaultTicks;
        return defaultTicks;
    }
};

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xAxises = {
    default: XAxisImp.extend(defaultXAxis)
};
function registerXAxis(axis) {
    xAxises[axis.name] = XAxisImp.extend(axis);
}
function getXAxisClass(name) {
    var _a;
    return (_a = xAxises[name]) !== null && _a !== void 0 ? _a : xAxises.default;
}

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var XAxisPane = /** @class */ (function (_super) {
    __extends(XAxisPane, _super);
    function XAxisPane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XAxisPane.prototype.createAxisComponent = function (name) {
        var XAxisClass = getXAxisClass(name);
        return new XAxisClass(this);
    };
    XAxisPane.prototype.createMainWidget = function (container) {
        return new XAxisWidget(container, this);
    };
    return XAxisPane;
}(DrawPane));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function throttle(func, wait) {
    var previous = 0;
    return function () {
        var now = Date.now();
        if (now - previous > (wait )) {
            func.apply(this, arguments);
            previous = now;
        }
    };
}
// export function memoize<R1 = any, R2 = any> (func: (...args: any[]) => R1, resolver?: (...args: any[]) => R2): (...args: any[]) => R1 {
//   if (!isFunction(func) || (isValid(resolver) && !isFunction(resolver))) {
//     throw new TypeError('Expected a function')
//   }
//   const memoized = function (...args: any[]): any {
//     const key = isFunction(resolver) ? resolver.apply(this, args) : args[0]
//     const cache = memoized.cache
//     if (cache.has(key)) {
//       return cache.get(key)
//     }
//     const result = func.apply(this, args)
//     // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
//     memoized.cache = cache.set(key, result) || cache
//     return result
//   }
//   // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
//   memoized.cache = new (memoize.Cache || Map)()
//   return memoized
// }
// memoize.Cache = Map

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SeparatorWidget = /** @class */ (function (_super) {
    __extends(SeparatorWidget, _super);
    function SeparatorWidget(rootContainer, pane) {
        var _this = _super.call(this, rootContainer, pane) || this;
        _this._dragFlag = false;
        _this._dragStartY = 0;
        _this._topPaneHeight = 0;
        _this._bottomPaneHeight = 0;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        _this._pressedMouseMoveEvent = throttle(_this._pressedTouchMouseMoveEvent, 20);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        _this.registerEvent('touchStartEvent', _this._mouseDownEvent.bind(_this))
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            .registerEvent('touchMoveEvent', _this._pressedMouseMoveEvent.bind(_this))
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            .registerEvent('touchEndEvent', _this._mouseUpEvent.bind(_this))
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            .registerEvent('mouseDownEvent', _this._mouseDownEvent.bind(_this))
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            .registerEvent('mouseUpEvent', _this._mouseUpEvent.bind(_this))
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            .registerEvent('pressedMouseMoveEvent', _this._pressedMouseMoveEvent.bind(_this))
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            .registerEvent('mouseEnterEvent', _this._mouseEnterEvent.bind(_this))
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            .registerEvent('mouseLeaveEvent', _this._mouseLeaveEvent.bind(_this));
        return _this;
    }
    SeparatorWidget.prototype.getName = function () {
        return WidgetNameConstants.SEPARATOR;
    };
    SeparatorWidget.prototype.checkEventOn = function () {
        return true;
    };
    SeparatorWidget.prototype._mouseDownEvent = function (event) {
        this._dragFlag = true;
        this._dragStartY = event.pageY;
        var pane = this.getPane();
        this._topPaneHeight = pane.getTopPane().getBounding().height;
        this._bottomPaneHeight = pane.getBottomPane().getBounding().height;
        return true;
    };
    SeparatorWidget.prototype._mouseUpEvent = function () {
        this._dragFlag = false;
        return this._mouseLeaveEvent();
    };
    SeparatorWidget.prototype._pressedTouchMouseMoveEvent = function (event) {
        var dragDistance = event.pageY - this._dragStartY;
        var currentPane = this.getPane();
        var topPane = currentPane.getTopPane();
        var bottomPane = currentPane.getBottomPane();
        var isUpDrag = dragDistance < 0;
        if (topPane !== null &&
            (bottomPane === null || bottomPane === void 0 ? void 0 : bottomPane.getOptions().dragEnabled)) {
            var reducedPane = void 0;
            var increasedPane = void 0;
            var startDragReducedPaneHeight = void 0;
            var startDragIncreasedPaneHeight = void 0;
            if (isUpDrag) {
                reducedPane = topPane;
                increasedPane = bottomPane;
                startDragReducedPaneHeight = this._topPaneHeight;
                startDragIncreasedPaneHeight = this._bottomPaneHeight;
            }
            else {
                reducedPane = bottomPane;
                increasedPane = topPane;
                startDragReducedPaneHeight = this._bottomPaneHeight;
                startDragIncreasedPaneHeight = this._topPaneHeight;
            }
            var reducedPaneMinHeight = reducedPane.getOptions().minHeight;
            if (startDragReducedPaneHeight > reducedPaneMinHeight) {
                var reducedPaneHeight = Math.max(startDragReducedPaneHeight - Math.abs(dragDistance), reducedPaneMinHeight);
                var diffHeight = startDragReducedPaneHeight - reducedPaneHeight;
                reducedPane.setBounding({ height: reducedPaneHeight });
                increasedPane.setBounding({ height: startDragIncreasedPaneHeight + diffHeight });
                var chart = currentPane.getChart();
                chart.getChartStore().getActionStore().execute(exports.ActionType.OnPaneDrag, { paneId: currentPane.getId() });
                chart.adjustPaneViewport(true, true, true, true, true);
            }
        }
        return true;
    };
    SeparatorWidget.prototype._mouseEnterEvent = function () {
        var _a;
        var pane = this.getPane();
        var bottomPane = pane.getBottomPane();
        if ((_a = bottomPane === null || bottomPane === void 0 ? void 0 : bottomPane.getOptions().dragEnabled) !== null && _a !== void 0 ? _a : false) {
            var chart = pane.getChart();
            var styles = chart.getStyles().separator;
            this.getContainer().style.background = styles.activeBackgroundColor;
            return true;
        }
        return false;
    };
    SeparatorWidget.prototype._mouseLeaveEvent = function () {
        if (!this._dragFlag) {
            this.getContainer().style.background = '';
            return true;
        }
        return false;
    };
    SeparatorWidget.prototype.createContainer = function () {
        return createDom('div', {
            width: '100%',
            height: "".concat(REAL_SEPARATOR_HEIGHT, "px"),
            margin: '0',
            padding: '0',
            position: 'absolute',
            top: '-3px',
            zIndex: '20',
            boxSizing: 'border-box',
            cursor: 'ns-resize'
        });
    };
    SeparatorWidget.prototype.updateImp = function (container, _bounding, level) {
        if (level === 4 /* UpdateLevel.All */ || level === 2 /* UpdateLevel.Separator */) {
            var styles = this.getPane().getChart().getStyles().separator;
            container.style.top = "".concat(-Math.floor((REAL_SEPARATOR_HEIGHT - styles.size) / 2), "px");
            container.style.height = "".concat(REAL_SEPARATOR_HEIGHT, "px");
        }
    };
    return SeparatorWidget;
}(Widget));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SeparatorPane = /** @class */ (function (_super) {
    __extends(SeparatorPane, _super);
    function SeparatorPane(rootContainer, afterElement, chart, id, topPane, bottomPane) {
        var _this = _super.call(this, rootContainer, afterElement, chart, id) || this;
        _this.getContainer().style.overflow = '';
        _this._topPane = topPane;
        _this._bottomPane = bottomPane;
        _this._separatorWidget = new SeparatorWidget(_this.getContainer(), _this);
        return _this;
    }
    SeparatorPane.prototype.setBounding = function (rootBounding) {
        merge(this.getBounding(), rootBounding);
        return this;
    };
    SeparatorPane.prototype.getTopPane = function () {
        return this._topPane;
    };
    SeparatorPane.prototype.setTopPane = function (pane) {
        this._topPane = pane;
        return this;
    };
    SeparatorPane.prototype.getBottomPane = function () {
        return this._bottomPane;
    };
    SeparatorPane.prototype.setBottomPane = function (pane) {
        this._bottomPane = pane;
        return this;
    };
    SeparatorPane.prototype.getWidget = function () { return this._separatorWidget; };
    SeparatorPane.prototype.getImage = function (_includeOverlay) {
        var _a = this.getBounding(), width = _a.width, height = _a.height;
        var styles = this.getChart().getStyles().separator;
        var canvas = createDom('canvas', {
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            boxSizing: 'border-box'
        });
        var ctx = canvas.getContext('2d');
        var pixelRatio = getPixelRatio(canvas);
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        ctx.scale(pixelRatio, pixelRatio);
        ctx.fillStyle = styles.color;
        ctx.fillRect(0, 0, width, height);
        return canvas;
    };
    SeparatorPane.prototype.updateImp = function (level, container, bounding) {
        if (level === 4 /* UpdateLevel.All */ || level === 2 /* UpdateLevel.Separator */) {
            var styles = this.getChart().getStyles().separator;
            container.style.backgroundColor = styles.color;
            container.style.height = "".concat(bounding.height, "px");
            container.style.marginLeft = "".concat(bounding.left, "px");
            container.style.width = "".concat(bounding.width, "px");
            this._separatorWidget.update(level);
        }
    };
    return SeparatorPane;
}(Pane));

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isFF() {
    var _a;
    if (typeof window === 'undefined') {
        return false;
    }
    return ((_a = window.navigator.userAgent.toLowerCase().indexOf('firefox')) !== null && _a !== void 0 ? _a : -1) > -1;
}
function isIOS() {
    if (typeof window === 'undefined') {
        return false;
    }
    return /iPhone|iPad|iPod/.test(window.navigator.platform);
}

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TOUCH_MIN_RADIUS = 10;
// TODO: get rid of a lot of boolean flags, probably we should replace it with some enum
var SyntheticEvent = /** @class */ (function () {
    function SyntheticEvent(target, handler, options) {
        var _this = this;
        this._clickCount = 0;
        this._clickTimeoutId = null;
        this._clickCoordinate = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY };
        this._tapCount = 0;
        this._tapTimeoutId = null;
        this._tapCoordinate = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY };
        this._longTapTimeoutId = null;
        this._longTapActive = false;
        this._mouseMoveStartCoordinate = null;
        this._touchMoveStartCoordinate = null;
        this._touchMoveExceededManhattanDistance = false;
        this._cancelClick = false;
        this._cancelTap = false;
        this._unsubscribeOutsideMouseEvents = null;
        this._unsubscribeOutsideTouchEvents = null;
        this._unsubscribeMobileSafariEvents = null;
        this._unsubscribeMousemove = null;
        this._unsubscribeMouseWheel = null;
        this._unsubscribeContextMenu = null;
        this._unsubscribeRootMouseEvents = null;
        this._unsubscribeRootTouchEvents = null;
        this._startPinchMiddleCoordinate = null;
        this._startPinchDistance = 0;
        this._pinchPrevented = false;
        this._preventTouchDragProcess = false;
        this._mousePressed = false;
        this._lastTouchEventTimeStamp = 0;
        // for touchstart/touchmove/touchend events we handle only first touch
        // i.e. we don't support several active touches at the same time (except pinch event)
        this._activeTouchId = null;
        // accept all mouse leave events if it's not an iOS device
        // see _mouseEnterHandler, _mouseMoveHandler, _mouseLeaveHandler
        this._acceptMouseLeave = !isIOS();
        /**
         * In Firefox mouse events dont't fire if the mouse position is outside of the browser's border.
         * To prevent the mouse from hanging while pressed we're subscribing on the mouseleave event of the document element.
         * We're subscribing on mouseleave, but this event is actually fired on mouseup outside of the browser's border.
         */
        this._onFirefoxOutsideMouseUp = function (mouseUpEvent) {
            _this._mouseUpHandler(mouseUpEvent);
        };
        /**
         * Safari doesn't fire touchstart/mousedown events on double tap since iOS 13.
         * There are two possible solutions:
         * 1) Call preventDefault in touchEnd handler. But it also prevents click event from firing.
         * 2) Add listener on dblclick event that fires with the preceding mousedown/mouseup.
         * https://developer.apple.com/forums/thread/125073
         */
        this._onMobileSafariDoubleClick = function (dblClickEvent) {
            if (_this._firesTouchEvents(dblClickEvent)) {
                ++_this._tapCount;
                if (_this._tapTimeoutId !== null && _this._tapCount > 1) {
                    var manhattanDistance = _this._mouseTouchMoveWithDownInfo(_this._getCoordinate(dblClickEvent), _this._tapCoordinate).manhattanDistance;
                    if (manhattanDistance < 30 /* ManhattanDistance.DoubleTap */ && !_this._cancelTap) {
                        _this._processEvent(_this._makeCompatEvent(dblClickEvent), _this._handler.doubleTapEvent);
                    }
                    _this._resetTapTimeout();
                }
            }
            else {
                ++_this._clickCount;
                if (_this._clickTimeoutId !== null && _this._clickCount > 1) {
                    var manhattanDistance = _this._mouseTouchMoveWithDownInfo(_this._getCoordinate(dblClickEvent), _this._clickCoordinate).manhattanDistance;
                    if (manhattanDistance < 5 /* ManhattanDistance.DoubleClick */ && !_this._cancelClick) {
                        _this._processEvent(_this._makeCompatEvent(dblClickEvent), _this._handler.mouseDoubleClickEvent);
                    }
                    _this._resetClickTimeout();
                }
            }
        };
        this._target = target;
        this._handler = handler;
        this._options = options;
        this._init();
    }
    SyntheticEvent.prototype.destroy = function () {
        if (this._unsubscribeOutsideMouseEvents !== null) {
            this._unsubscribeOutsideMouseEvents();
            this._unsubscribeOutsideMouseEvents = null;
        }
        if (this._unsubscribeOutsideTouchEvents !== null) {
            this._unsubscribeOutsideTouchEvents();
            this._unsubscribeOutsideTouchEvents = null;
        }
        if (this._unsubscribeMousemove !== null) {
            this._unsubscribeMousemove();
            this._unsubscribeMousemove = null;
        }
        if (this._unsubscribeMouseWheel !== null) {
            this._unsubscribeMouseWheel();
            this._unsubscribeMouseWheel = null;
        }
        if (this._unsubscribeContextMenu !== null) {
            this._unsubscribeContextMenu();
            this._unsubscribeContextMenu = null;
        }
        if (this._unsubscribeRootMouseEvents !== null) {
            this._unsubscribeRootMouseEvents();
            this._unsubscribeRootMouseEvents = null;
        }
        if (this._unsubscribeRootTouchEvents !== null) {
            this._unsubscribeRootTouchEvents();
            this._unsubscribeRootTouchEvents = null;
        }
        if (this._unsubscribeMobileSafariEvents !== null) {
            this._unsubscribeMobileSafariEvents();
            this._unsubscribeMobileSafariEvents = null;
        }
        this._clearLongTapTimeout();
        this._resetClickTimeout();
    };
    SyntheticEvent.prototype._mouseEnterHandler = function (enterEvent) {
        var _this = this;
        var _a, _b, _c;
        (_a = this._unsubscribeMousemove) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this._unsubscribeMouseWheel) === null || _b === void 0 ? void 0 : _b.call(this);
        (_c = this._unsubscribeContextMenu) === null || _c === void 0 ? void 0 : _c.call(this);
        var boundMouseMoveHandler = this._mouseMoveHandler.bind(this);
        this._unsubscribeMousemove = function () {
            _this._target.removeEventListener('mousemove', boundMouseMoveHandler);
        };
        this._target.addEventListener('mousemove', boundMouseMoveHandler);
        var boundMouseWheel = this._mouseWheelHandler.bind(this);
        this._unsubscribeMouseWheel = function () {
            _this._target.removeEventListener('wheel', boundMouseWheel);
        };
        this._target.addEventListener('wheel', boundMouseWheel, { passive: false });
        var boundContextMenu = this._contextMenuHandler.bind(this);
        this._unsubscribeContextMenu = function () {
            _this._target.removeEventListener('contextmenu', boundContextMenu);
        };
        this._target.addEventListener('contextmenu', boundContextMenu, { passive: false });
        if (this._firesTouchEvents(enterEvent)) {
            return;
        }
        this._processEvent(this._makeCompatEvent(enterEvent), this._handler.mouseEnterEvent);
        this._acceptMouseLeave = true;
    };
    SyntheticEvent.prototype._resetClickTimeout = function () {
        if (this._clickTimeoutId !== null) {
            clearTimeout(this._clickTimeoutId);
        }
        this._clickCount = 0;
        this._clickTimeoutId = null;
        this._clickCoordinate = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY };
    };
    SyntheticEvent.prototype._resetTapTimeout = function () {
        if (this._tapTimeoutId !== null) {
            clearTimeout(this._tapTimeoutId);
        }
        this._tapCount = 0;
        this._tapTimeoutId = null;
        this._tapCoordinate = { x: Number.NEGATIVE_INFINITY, y: Number.POSITIVE_INFINITY };
    };
    SyntheticEvent.prototype._mouseMoveHandler = function (moveEvent) {
        if (this._mousePressed || this._touchMoveStartCoordinate !== null) {
            return;
        }
        if (this._firesTouchEvents(moveEvent)) {
            return;
        }
        this._processEvent(this._makeCompatEvent(moveEvent), this._handler.mouseMoveEvent);
        this._acceptMouseLeave = true;
    };
    SyntheticEvent.prototype._mouseWheelHandler = function (wheelEvent) {
        if (Math.abs(wheelEvent.deltaX) > Math.abs(wheelEvent.deltaY)) {
            if (!isValid(this._handler.mouseWheelHortEvent)) {
                return;
            }
            this._preventDefault(wheelEvent);
            if (Math.abs(wheelEvent.deltaX) === 0) {
                return;
            }
            this._handler.mouseWheelHortEvent(this._makeCompatEvent(wheelEvent), -wheelEvent.deltaX);
        }
        else {
            if (!isValid(this._handler.mouseWheelVertEvent)) {
                return;
            }
            var deltaY = -(wheelEvent.deltaY / 100);
            if (deltaY === 0) {
                return;
            }
            this._preventDefault(wheelEvent);
            switch (wheelEvent.deltaMode) {
                case wheelEvent.DOM_DELTA_PAGE:
                    deltaY *= 120;
                    break;
                case wheelEvent.DOM_DELTA_LINE:
                    deltaY *= 32;
                    break;
            }
            if (deltaY !== 0) {
                var scale = Math.sign(deltaY) * Math.min(1, Math.abs(deltaY));
                this._handler.mouseWheelVertEvent(this._makeCompatEvent(wheelEvent), scale);
            }
        }
    };
    SyntheticEvent.prototype._contextMenuHandler = function (mouseEvent) {
        this._preventDefault(mouseEvent);
    };
    SyntheticEvent.prototype._touchMoveHandler = function (moveEvent) {
        var touch = this._touchWithId(moveEvent.changedTouches, this._activeTouchId);
        if (touch === null) {
            return;
        }
        this._lastTouchEventTimeStamp = this._eventTimeStamp(moveEvent);
        if (this._startPinchMiddleCoordinate !== null) {
            return;
        }
        if (this._preventTouchDragProcess) {
            return;
        }
        // prevent pinch if move event comes faster than the second touch
        this._pinchPrevented = true;
        var moveInfo = this._mouseTouchMoveWithDownInfo(this._getCoordinate(touch), this._touchMoveStartCoordinate);
        var xOffset = moveInfo.xOffset, yOffset = moveInfo.yOffset, manhattanDistance = moveInfo.manhattanDistance;
        if (!this._touchMoveExceededManhattanDistance && manhattanDistance < 5 /* ManhattanDistance.CancelTap */) {
            return;
        }
        if (!this._touchMoveExceededManhattanDistance) {
            // first time when current position exceeded manhattan distance
            // vertical drag is more important than horizontal drag
            // because we scroll the page vertically often than horizontally
            var correctedXOffset = xOffset * 0.5;
            // a drag can be only if touch page scroll isn't allowed
            var isVertDrag = yOffset >= correctedXOffset && !this._options.treatVertDragAsPageScroll();
            var isHorzDrag = correctedXOffset > yOffset && !this._options.treatHorzDragAsPageScroll();
            // if drag event happened then we should revert preventDefault state to original one
            // and try to process the drag event
            // else we shouldn't prevent default of the event and ignore processing the drag event
            if (!isVertDrag && !isHorzDrag) {
                this._preventTouchDragProcess = true;
            }
            this._touchMoveExceededManhattanDistance = true;
            // if manhattan distance is more that 5 - we should cancel tap event
            this._cancelTap = true;
            this._clearLongTapTimeout();
            this._resetTapTimeout();
        }
        if (!this._preventTouchDragProcess) {
            this._processEvent(this._makeCompatEvent(moveEvent, touch), this._handler.touchMoveEvent);
            // we should prevent default in case of touch only
            // to prevent scroll of the page
            // preventDefault(moveEvent)
        }
    };
    SyntheticEvent.prototype._mouseMoveWithDownHandler = function (moveEvent) {
        if (moveEvent.button !== 0 /* MouseEventButton.Left */) {
            return;
        }
        var moveInfo = this._mouseTouchMoveWithDownInfo(this._getCoordinate(moveEvent), this._mouseMoveStartCoordinate);
        var manhattanDistance = moveInfo.manhattanDistance;
        if (manhattanDistance >= 5 /* ManhattanDistance.CancelClick */) {
            // if manhattan distance is more that 5 - we should cancel click event
            this._cancelClick = true;
            this._resetClickTimeout();
        }
        if (this._cancelClick) {
            // if this._cancelClick is true, that means that minimum manhattan distance is already exceeded
            this._processEvent(this._makeCompatEvent(moveEvent), this._handler.pressedMouseMoveEvent);
        }
    };
    SyntheticEvent.prototype._mouseTouchMoveWithDownInfo = function (currentCoordinate, startCoordinate) {
        var xOffset = Math.abs(startCoordinate.x - currentCoordinate.x);
        var yOffset = Math.abs(startCoordinate.y - currentCoordinate.y);
        var manhattanDistance = xOffset + yOffset;
        return { xOffset: xOffset, yOffset: yOffset, manhattanDistance: manhattanDistance };
    };
    // eslint-disable-next-line complexity
    SyntheticEvent.prototype._touchEndHandler = function (touchEndEvent) {
        var touch = this._touchWithId(touchEndEvent.changedTouches, this._activeTouchId);
        if (touch === null && touchEndEvent.touches.length === 0) {
            // something went wrong, somehow we missed the required touchend event
            // probably the browser has not sent this event
            touch = touchEndEvent.changedTouches[0];
        }
        if (touch === null) {
            return;
        }
        this._activeTouchId = null;
        this._lastTouchEventTimeStamp = this._eventTimeStamp(touchEndEvent);
        this._clearLongTapTimeout();
        this._touchMoveStartCoordinate = null;
        if (this._unsubscribeRootTouchEvents !== null) {
            this._unsubscribeRootTouchEvents();
            this._unsubscribeRootTouchEvents = null;
        }
        var compatEvent = this._makeCompatEvent(touchEndEvent, touch);
        this._processEvent(compatEvent, this._handler.touchEndEvent);
        ++this._tapCount;
        if (this._tapTimeoutId !== null && this._tapCount > 1) {
            // check that both clicks are near enough
            var manhattanDistance = this._mouseTouchMoveWithDownInfo(this._getCoordinate(touch), this._tapCoordinate).manhattanDistance;
            if (manhattanDistance < 30 /* ManhattanDistance.DoubleTap */ && !this._cancelTap) {
                this._processEvent(compatEvent, this._handler.doubleTapEvent);
            }
            this._resetTapTimeout();
        }
        else {
            if (!this._cancelTap) {
                this._processEvent(compatEvent, this._handler.tapEvent);
                // do not fire mouse events if tap handler was executed
                // prevent click event on new dom element (who appeared after tap)
                if (isValid(this._handler.tapEvent)) {
                    this._preventDefault(touchEndEvent);
                }
            }
        }
        // prevent, for example, safari's dblclick-to-zoom or fast-click after long-tap
        // we handle mouseDoubleClickEvent here ourselves
        if (this._tapCount === 0) {
            this._preventDefault(touchEndEvent);
        }
        if (touchEndEvent.touches.length === 0) {
            if (this._longTapActive) {
                this._longTapActive = false;
                // prevent native click event
                this._preventDefault(touchEndEvent);
            }
        }
    };
    SyntheticEvent.prototype._mouseUpHandler = function (mouseUpEvent) {
        if (mouseUpEvent.button !== 0 /* MouseEventButton.Left */) {
            return;
        }
        var compatEvent = this._makeCompatEvent(mouseUpEvent);
        this._mouseMoveStartCoordinate = null;
        this._mousePressed = false;
        if (this._unsubscribeRootMouseEvents !== null) {
            this._unsubscribeRootMouseEvents();
            this._unsubscribeRootMouseEvents = null;
        }
        if (isFF()) {
            var rootElement = this._target.ownerDocument.documentElement;
            rootElement.removeEventListener('mouseleave', this._onFirefoxOutsideMouseUp);
        }
        if (this._firesTouchEvents(mouseUpEvent)) {
            return;
        }
        this._processEvent(compatEvent, this._handler.mouseUpEvent);
        ++this._clickCount;
        if (this._clickTimeoutId !== null && this._clickCount > 1) {
            // check that both clicks are near enough
            var manhattanDistance = this._mouseTouchMoveWithDownInfo(this._getCoordinate(mouseUpEvent), this._clickCoordinate).manhattanDistance;
            if (manhattanDistance < 5 /* ManhattanDistance.DoubleClick */ && !this._cancelClick) {
                this._processEvent(compatEvent, this._handler.mouseDoubleClickEvent);
            }
            this._resetClickTimeout();
        }
        else {
            if (!this._cancelClick) {
                this._processEvent(compatEvent, this._handler.mouseClickEvent);
            }
        }
    };
    SyntheticEvent.prototype._clearLongTapTimeout = function () {
        if (this._longTapTimeoutId === null) {
            return;
        }
        clearTimeout(this._longTapTimeoutId);
        this._longTapTimeoutId = null;
    };
    SyntheticEvent.prototype._touchStartHandler = function (downEvent) {
        if (this._activeTouchId !== null) {
            return;
        }
        var touch = downEvent.changedTouches[0];
        this._activeTouchId = touch.identifier;
        this._lastTouchEventTimeStamp = this._eventTimeStamp(downEvent);
        var rootElement = this._target.ownerDocument.documentElement;
        this._cancelTap = false;
        this._touchMoveExceededManhattanDistance = false;
        this._preventTouchDragProcess = false;
        this._touchMoveStartCoordinate = this._getCoordinate(touch);
        if (this._unsubscribeRootTouchEvents !== null) {
            this._unsubscribeRootTouchEvents();
            this._unsubscribeRootTouchEvents = null;
        }
        {
            var boundTouchMoveWithDownHandler_1 = this._touchMoveHandler.bind(this);
            var boundTouchEndHandler_1 = this._touchEndHandler.bind(this);
            this._unsubscribeRootTouchEvents = function () {
                rootElement.removeEventListener('touchmove', boundTouchMoveWithDownHandler_1);
                rootElement.removeEventListener('touchend', boundTouchEndHandler_1);
            };
            rootElement.addEventListener('touchmove', boundTouchMoveWithDownHandler_1, { passive: false });
            rootElement.addEventListener('touchend', boundTouchEndHandler_1, { passive: false });
            this._clearLongTapTimeout();
            this._longTapTimeoutId = setTimeout(this._longTapHandler.bind(this, downEvent), 500 /* Delay.LongTap */);
        }
        this._processEvent(this._makeCompatEvent(downEvent, touch), this._handler.touchStartEvent);
        if (this._tapTimeoutId === null) {
            this._tapCount = 0;
            this._tapTimeoutId = setTimeout(this._resetTapTimeout.bind(this), 500 /* Delay.ResetClick */);
            this._tapCoordinate = this._getCoordinate(touch);
        }
    };
    SyntheticEvent.prototype._mouseDownHandler = function (downEvent) {
        if (downEvent.button === 2 /* MouseEventButton.Right */) {
            this._preventDefault(downEvent);
            this._processEvent(this._makeCompatEvent(downEvent), this._handler.mouseRightClickEvent);
            return;
        }
        if (downEvent.button !== 0 /* MouseEventButton.Left */) {
            return;
        }
        var rootElement = this._target.ownerDocument.documentElement;
        if (isFF()) {
            rootElement.addEventListener('mouseleave', this._onFirefoxOutsideMouseUp);
        }
        this._cancelClick = false;
        this._mouseMoveStartCoordinate = this._getCoordinate(downEvent);
        if (this._unsubscribeRootMouseEvents !== null) {
            this._unsubscribeRootMouseEvents();
            this._unsubscribeRootMouseEvents = null;
        }
        {
            var boundMouseMoveWithDownHandler_1 = this._mouseMoveWithDownHandler.bind(this);
            var boundMouseUpHandler_1 = this._mouseUpHandler.bind(this);
            this._unsubscribeRootMouseEvents = function () {
                rootElement.removeEventListener('mousemove', boundMouseMoveWithDownHandler_1);
                rootElement.removeEventListener('mouseup', boundMouseUpHandler_1);
            };
            rootElement.addEventListener('mousemove', boundMouseMoveWithDownHandler_1);
            rootElement.addEventListener('mouseup', boundMouseUpHandler_1);
        }
        this._mousePressed = true;
        if (this._firesTouchEvents(downEvent)) {
            return;
        }
        this._processEvent(this._makeCompatEvent(downEvent), this._handler.mouseDownEvent);
        if (this._clickTimeoutId === null) {
            this._clickCount = 0;
            this._clickTimeoutId = setTimeout(this._resetClickTimeout.bind(this), 500 /* Delay.ResetClick */);
            this._clickCoordinate = this._getCoordinate(downEvent);
        }
    };
    SyntheticEvent.prototype._init = function () {
        var _this = this;
        this._target.addEventListener('mouseenter', this._mouseEnterHandler.bind(this));
        // Do not show context menu when something went wrong
        this._target.addEventListener('touchcancel', this._clearLongTapTimeout.bind(this));
        {
            var doc_1 = this._target.ownerDocument;
            var outsideHandler_1 = function (event) {
                if (_this._handler.mouseDownOutsideEvent == null) {
                    return;
                }
                if (event.composed && _this._target.contains(event.composedPath()[0])) {
                    return;
                }
                if ((event.target !== null) && _this._target.contains(event.target)) {
                    return;
                }
                _this._handler.mouseDownOutsideEvent({ x: 0, y: 0, pageX: 0, pageY: 0 });
            };
            this._unsubscribeOutsideTouchEvents = function () {
                doc_1.removeEventListener('touchstart', outsideHandler_1);
            };
            this._unsubscribeOutsideMouseEvents = function () {
                doc_1.removeEventListener('mousedown', outsideHandler_1);
            };
            doc_1.addEventListener('mousedown', outsideHandler_1);
            doc_1.addEventListener('touchstart', outsideHandler_1, { passive: true });
        }
        if (isIOS()) {
            this._unsubscribeMobileSafariEvents = function () {
                _this._target.removeEventListener('dblclick', _this._onMobileSafariDoubleClick);
            };
            this._target.addEventListener('dblclick', this._onMobileSafariDoubleClick);
        }
        this._target.addEventListener('mouseleave', this._mouseLeaveHandler.bind(this));
        this._target.addEventListener('touchstart', this._touchStartHandler.bind(this), { passive: true });
        this._target.addEventListener('mousedown', function (e) {
            if (e.button === 1 /* MouseEventButton.Middle */) {
                // prevent incorrect scrolling event
                e.preventDefault();
                return false;
            }
            return undefined;
        });
        this._target.addEventListener('mousedown', this._mouseDownHandler.bind(this));
        this._initPinch();
        // Hey mobile Safari, what's up?
        // If mobile Safari doesn't have any touchmove handler with passive=false
        // it treats a touchstart and the following touchmove events as cancelable=false,
        // so we can't prevent them (as soon we subscribe on touchmove inside touchstart's handler).
        // And we'll get scroll of the page along with chart's one instead of only chart's scroll.
        this._target.addEventListener('touchmove', function () { }, { passive: false });
    };
    SyntheticEvent.prototype._initPinch = function () {
        var _this = this;
        if (!isValid(this._handler.pinchStartEvent) &&
            !isValid(this._handler.pinchEvent) &&
            !isValid(this._handler.pinchEndEvent)) {
            return;
        }
        this._target.addEventListener('touchstart', function (event) { _this._checkPinchState(event.touches); }, { passive: true });
        this._target.addEventListener('touchmove', function (event) {
            if (event.touches.length !== 2 || _this._startPinchMiddleCoordinate === null) {
                return;
            }
            if (isValid(_this._handler.pinchEvent)) {
                var currentDistance = _this._getTouchDistance(event.touches[0], event.touches[1]);
                var scale = currentDistance / _this._startPinchDistance;
                _this._handler.pinchEvent(__assign(__assign({}, _this._startPinchMiddleCoordinate), { pageX: 0, pageY: 0 }), scale);
                _this._preventDefault(event);
            }
        }, { passive: false });
        this._target.addEventListener('touchend', function (event) {
            _this._checkPinchState(event.touches);
        });
    };
    SyntheticEvent.prototype._checkPinchState = function (touches) {
        if (touches.length === 1) {
            this._pinchPrevented = false;
        }
        if (touches.length !== 2 || this._pinchPrevented || this._longTapActive) {
            this._stopPinch();
        }
        else {
            this._startPinch(touches);
        }
    };
    SyntheticEvent.prototype._startPinch = function (touches) {
        var _a;
        var box = (_a = this._target.getBoundingClientRect()) !== null && _a !== void 0 ? _a : { left: 0, top: 0 };
        this._startPinchMiddleCoordinate = {
            x: ((touches[0].clientX - box.left) + (touches[1].clientX - box.left)) / 2,
            y: ((touches[0].clientY - box.top) + (touches[1].clientY - box.top)) / 2
        };
        this._startPinchDistance = this._getTouchDistance(touches[0], touches[1]);
        if (isValid(this._handler.pinchStartEvent)) {
            this._handler.pinchStartEvent({ x: 0, y: 0, pageX: 0, pageY: 0 });
        }
        this._clearLongTapTimeout();
    };
    SyntheticEvent.prototype._stopPinch = function () {
        if (this._startPinchMiddleCoordinate === null) {
            return;
        }
        this._startPinchMiddleCoordinate = null;
        if (isValid(this._handler.pinchEndEvent)) {
            this._handler.pinchEndEvent({ x: 0, y: 0, pageX: 0, pageY: 0 });
        }
    };
    SyntheticEvent.prototype._mouseLeaveHandler = function (event) {
        var _a, _b, _c;
        (_a = this._unsubscribeMousemove) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this._unsubscribeMouseWheel) === null || _b === void 0 ? void 0 : _b.call(this);
        (_c = this._unsubscribeContextMenu) === null || _c === void 0 ? void 0 : _c.call(this);
        if (this._firesTouchEvents(event)) {
            return;
        }
        if (!this._acceptMouseLeave) {
            // mobile Safari sometimes emits mouse leave event for no reason, there is no way to handle it in other way
            // just ignore this event if there was no mouse move or mouse enter events
            return;
        }
        this._processEvent(this._makeCompatEvent(event), this._handler.mouseLeaveEvent);
        // accept all mouse leave events if it's not an iOS device
        this._acceptMouseLeave = !isIOS();
    };
    SyntheticEvent.prototype._longTapHandler = function (event) {
        var touch = this._touchWithId(event.touches, this._activeTouchId);
        if (touch === null) {
            return;
        }
        this._processEvent(this._makeCompatEvent(event, touch), this._handler.longTapEvent);
        this._cancelTap = true;
        // long tap is active until touchend event with 0 touches occurred
        this._longTapActive = true;
    };
    SyntheticEvent.prototype._firesTouchEvents = function (e) {
        var _a;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (isValid((_a = e.sourceCapabilities) === null || _a === void 0 ? void 0 : _a.firesTouchEvents)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return e.sourceCapabilities.firesTouchEvents;
        }
        return this._eventTimeStamp(e) < this._lastTouchEventTimeStamp + 500 /* Delay.PreventFiresTouchEvents */;
    };
    SyntheticEvent.prototype._processEvent = function (event, callback) {
        callback === null || callback === void 0 ? void 0 : callback.call(this._handler, event);
    };
    SyntheticEvent.prototype._makeCompatEvent = function (event, touch) {
        var _this = this;
        var _a;
        // TouchEvent has no clientX/Y coordinates:
        // We have to use the last Touch instead
        var eventLike = touch !== null && touch !== void 0 ? touch : event;
        var box = (_a = this._target.getBoundingClientRect()) !== null && _a !== void 0 ? _a : { left: 0, top: 0 };
        return {
            x: eventLike.clientX - box.left,
            y: eventLike.clientY - box.top,
            pageX: eventLike.pageX,
            pageY: eventLike.pageY,
            isTouch: !event.type.startsWith('mouse') && event.type !== 'contextmenu' && event.type !== 'click' && event.type !== 'wheel',
            preventDefault: function () {
                if (event.type !== 'touchstart') {
                    // touchstart is passive and cannot be prevented
                    _this._preventDefault(event);
                }
            }
        };
    };
    SyntheticEvent.prototype._getTouchDistance = function (p1, p2) {
        var xDiff = p1.clientX - p2.clientX;
        var yDiff = p1.clientY - p2.clientY;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    };
    SyntheticEvent.prototype._preventDefault = function (event) {
        if (event.cancelable) {
            event.preventDefault();
        }
    };
    SyntheticEvent.prototype._getCoordinate = function (eventLike) {
        return {
            x: eventLike.pageX,
            y: eventLike.pageY
        };
    };
    SyntheticEvent.prototype._eventTimeStamp = function (e) {
        var _a;
        // for some reason e.timestamp is always 0 on iPad with magic mouse, so we use performance.now() as a fallback
        return (_a = e.timeStamp) !== null && _a !== void 0 ? _a : performance.now();
    };
    SyntheticEvent.prototype._touchWithId = function (touches, id) {
        for (var i = 0; i < touches.length; ++i) {
            if (touches[i].identifier === id) {
                return touches[i];
            }
        }
        return null;
    };
    return SyntheticEvent;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Event = /** @class */ (function () {
    function Event(container, chart) {
        var _this = this;
        // 惯性滚动开始时间
        this._flingStartTime = new Date().getTime();
        // 惯性滚动定时器
        this._flingScrollRequestId = null;
        // 开始滚动时坐标点
        this._startScrollCoordinate = null;
        // 开始触摸时坐标
        this._touchCoordinate = null;
        // 是否是取消了十字光标
        this._touchCancelCrosshair = false;
        // 是否缩放过
        this._touchZoomed = false;
        // 用来记录捏合缩放的尺寸
        this._pinchScale = 1;
        this._mouseDownWidget = null;
        this._prevYAxisRange = null;
        this._xAxisStartScaleCoordinate = null;
        this._xAxisStartScaleDistance = 0;
        this._xAxisScale = 1;
        this._yAxisStartScaleDistance = 0;
        this._mouseMoveTriggerWidgetInfo = { pane: null, widget: null };
        this._boundKeyBoardDownEvent = function (event) {
            if (event.shiftKey) {
                switch (event.code) {
                    case 'Equal': {
                        _this._chart.getChartStore().getTimeScaleStore().zoom(0.5);
                        break;
                    }
                    case 'Minus': {
                        _this._chart.getChartStore().getTimeScaleStore().zoom(-0.5);
                        break;
                    }
                    case 'ArrowLeft': {
                        var timeScaleStore = _this._chart.getChartStore().getTimeScaleStore();
                        timeScaleStore.startScroll();
                        timeScaleStore.scroll(-3 * timeScaleStore.getBarSpace().bar);
                        break;
                    }
                    case 'ArrowRight': {
                        var timeScaleStore = _this._chart.getChartStore().getTimeScaleStore();
                        timeScaleStore.startScroll();
                        timeScaleStore.scroll(3 * timeScaleStore.getBarSpace().bar);
                        break;
                    }
                }
            }
        };
        this._container = container;
        this._chart = chart;
        this._event = new SyntheticEvent(container, this, {
            treatVertDragAsPageScroll: function () { return false; },
            treatHorzDragAsPageScroll: function () { return false; }
        });
        container.addEventListener('keydown', this._boundKeyBoardDownEvent);
    }
    Event.prototype.pinchStartEvent = function () {
        this._touchZoomed = true;
        this._pinchScale = 1;
        return true;
    };
    Event.prototype.pinchEvent = function (e, scale) {
        var _a = this._findWidgetByEvent(e), pane = _a.pane, widget = _a.widget;
        if ((pane === null || pane === void 0 ? void 0 : pane.getId()) !== PaneIdConstants.X_AXIS && (widget === null || widget === void 0 ? void 0 : widget.getName()) === WidgetNameConstants.MAIN) {
            var event_1 = this._makeWidgetEvent(e, widget);
            var zoomScale = (scale - this._pinchScale) * 5;
            this._pinchScale = scale;
            this._chart.getChartStore().getTimeScaleStore().zoom(zoomScale, { x: event_1.x, y: event_1.y });
            return true;
        }
        return false;
    };
    Event.prototype.mouseWheelHortEvent = function (_, distance) {
        var timeScaleStore = this._chart.getChartStore().getTimeScaleStore();
        timeScaleStore.startScroll();
        timeScaleStore.scroll(distance);
        return true;
    };
    Event.prototype.mouseWheelVertEvent = function (e, scale) {
        var widget = this._findWidgetByEvent(e).widget;
        var event = this._makeWidgetEvent(e, widget);
        var name = widget === null || widget === void 0 ? void 0 : widget.getName();
        if (name === WidgetNameConstants.MAIN) {
            this._chart.getChartStore().getTimeScaleStore().zoom(scale, { x: event.x, y: event.y });
            return true;
        }
        return false;
    };
    Event.prototype.mouseDownEvent = function (e) {
        var _a, _b;
        var _c = this._findWidgetByEvent(e), pane = _c.pane, widget = _c.widget;
        this._mouseDownWidget = widget;
        if (widget !== null) {
            var event_2 = this._makeWidgetEvent(e, widget);
            var name_1 = widget.getName();
            switch (name_1) {
                case WidgetNameConstants.SEPARATOR: {
                    return widget.dispatchEvent('mouseDownEvent', event_2);
                }
                case WidgetNameConstants.MAIN: {
                    var range = (_a = pane.getAxisComponent().getRange()) !== null && _a !== void 0 ? _a : null;
                    this._prevYAxisRange = range === null ? range : __assign({}, range);
                    this._startScrollCoordinate = { x: event_2.x, y: event_2.y };
                    this._chart.getChartStore().getTimeScaleStore().startScroll();
                    return widget.dispatchEvent('mouseDownEvent', event_2);
                }
                case WidgetNameConstants.X_AXIS: {
                    var consumed = widget.dispatchEvent('mouseDownEvent', event_2);
                    if (consumed) {
                        this._chart.updatePane(1 /* UpdateLevel.Overlay */);
                    }
                    this._xAxisStartScaleCoordinate = { x: event_2.x, y: event_2.y };
                    this._xAxisStartScaleDistance = event_2.pageX;
                    return consumed;
                }
                case WidgetNameConstants.Y_AXIS: {
                    var consumed = widget.dispatchEvent('mouseDownEvent', event_2);
                    if (consumed) {
                        this._chart.updatePane(1 /* UpdateLevel.Overlay */);
                    }
                    var range = (_b = pane.getAxisComponent().getRange()) !== null && _b !== void 0 ? _b : null;
                    this._prevYAxisRange = range === null ? range : __assign({}, range);
                    this._yAxisStartScaleDistance = event_2.pageY;
                    return consumed;
                }
            }
        }
        return false;
    };
    Event.prototype.mouseMoveEvent = function (e) {
        var _a, _b, _c;
        var _d = this._findWidgetByEvent(e), pane = _d.pane, widget = _d.widget;
        var event = this._makeWidgetEvent(e, widget);
        if (((_a = this._mouseMoveTriggerWidgetInfo.pane) === null || _a === void 0 ? void 0 : _a.getId()) !== (pane === null || pane === void 0 ? void 0 : pane.getId()) ||
            ((_b = this._mouseMoveTriggerWidgetInfo.widget) === null || _b === void 0 ? void 0 : _b.getName()) !== (widget === null || widget === void 0 ? void 0 : widget.getName())) {
            widget === null || widget === void 0 ? void 0 : widget.dispatchEvent('mouseEnterEvent', event);
            (_c = this._mouseMoveTriggerWidgetInfo.widget) === null || _c === void 0 ? void 0 : _c.dispatchEvent('mouseLeaveEvent', event);
            this._mouseMoveTriggerWidgetInfo = { pane: pane, widget: widget };
        }
        if (widget !== null) {
            var name_2 = widget.getName();
            switch (name_2) {
                case WidgetNameConstants.MAIN: {
                    var consumed = widget.dispatchEvent('mouseMoveEvent', event);
                    var chartStore = this._chart.getChartStore();
                    var crosshair = { x: event.x, y: event.y, paneId: pane === null || pane === void 0 ? void 0 : pane.getId() };
                    if (consumed && chartStore.getTooltipStore().getActiveIcon() !== null) {
                        crosshair = undefined;
                        if (widget !== null) {
                            widget.getContainer().style.cursor = 'pointer';
                        }
                    }
                    this._chart.getChartStore().getTooltipStore().setCrosshair(crosshair);
                    return consumed;
                }
                case WidgetNameConstants.SEPARATOR:
                case WidgetNameConstants.X_AXIS:
                case WidgetNameConstants.Y_AXIS: {
                    var consumed = widget.dispatchEvent('mouseMoveEvent', event);
                    this._chart.getChartStore().getTooltipStore().setCrosshair();
                    return consumed;
                }
            }
        }
        return false;
    };
    Event.prototype.pressedMouseMoveEvent = function (e) {
        var _a, _b, _c, _d, _e;
        if (this._mouseDownWidget !== null && this._mouseDownWidget.getName() === WidgetNameConstants.SEPARATOR) {
            return this._mouseDownWidget.dispatchEvent('pressedMouseMoveEvent', e);
        }
        var _f = this._findWidgetByEvent(e), pane = _f.pane, widget = _f.widget;
        if (widget !== null &&
            ((_a = this._mouseDownWidget) === null || _a === void 0 ? void 0 : _a.getPane().getId()) === (pane === null || pane === void 0 ? void 0 : pane.getId()) &&
            ((_b = this._mouseDownWidget) === null || _b === void 0 ? void 0 : _b.getName()) === widget.getName()) {
            var event_3 = this._makeWidgetEvent(e, widget);
            var name_3 = widget.getName();
            switch (name_3) {
                case WidgetNameConstants.MAIN: {
                    var bounding = widget.getBounding();
                    var consumed = widget.dispatchEvent('pressedMouseMoveEvent', event_3);
                    if (!consumed && this._startScrollCoordinate !== null) {
                        var yAxis = pane.getAxisComponent();
                        if (this._prevYAxisRange !== null && !yAxis.getAutoCalcTickFlag() && yAxis.getScrollZoomEnabled()) {
                            var _g = this._prevYAxisRange, from = _g.from, to = _g.to, range = _g.range;
                            var distance_1;
                            if ((_c = yAxis === null || yAxis === void 0 ? void 0 : yAxis.isReverse()) !== null && _c !== void 0 ? _c : false) {
                                distance_1 = this._startScrollCoordinate.y - event_3.y;
                            }
                            else {
                                distance_1 = event_3.y - this._startScrollCoordinate.y;
                            }
                            var scale = distance_1 / bounding.height;
                            var difRange = range * scale;
                            var newFrom = from + difRange;
                            var newTo = to + difRange;
                            var newRealFrom = yAxis.convertToRealValue(newFrom);
                            var newRealTo = yAxis.convertToRealValue(newTo);
                            yAxis.setRange({
                                from: newFrom,
                                to: newTo,
                                range: newTo - newFrom,
                                realFrom: newRealFrom,
                                realTo: newRealTo,
                                realRange: newRealTo - newRealFrom
                            });
                        }
                        var distance = event_3.x - this._startScrollCoordinate.x;
                        this._chart.getChartStore().getTimeScaleStore().scroll(distance);
                    }
                    this._chart.getChartStore().getTooltipStore().setCrosshair({ x: event_3.x, y: event_3.y, paneId: pane === null || pane === void 0 ? void 0 : pane.getId() });
                    return consumed;
                }
                case WidgetNameConstants.X_AXIS: {
                    var consumed = widget.dispatchEvent('pressedMouseMoveEvent', event_3);
                    if (!consumed) {
                        var xAxis = pane.getAxisComponent();
                        if (((_d = xAxis === null || xAxis === void 0 ? void 0 : xAxis.getScrollZoomEnabled()) !== null && _d !== void 0 ? _d : true)) {
                            var scale = this._xAxisStartScaleDistance / event_3.pageX;
                            if (Number.isFinite(scale)) {
                                var zoomScale = (scale - this._xAxisScale) * 10;
                                this._xAxisScale = scale;
                                this._chart.getChartStore().getTimeScaleStore().zoom(zoomScale, (_e = this._xAxisStartScaleCoordinate) !== null && _e !== void 0 ? _e : undefined);
                            }
                        }
                    }
                    else {
                        this._chart.updatePane(1 /* UpdateLevel.Overlay */);
                    }
                    return consumed;
                }
                case WidgetNameConstants.Y_AXIS: {
                    var consumed = widget.dispatchEvent('pressedMouseMoveEvent', event_3);
                    if (!consumed) {
                        var yAxis = pane.getAxisComponent();
                        if (this._prevYAxisRange !== null && yAxis.getScrollZoomEnabled()) {
                            var _h = this._prevYAxisRange, from = _h.from, to = _h.to, range = _h.range;
                            var scale = event_3.pageY / this._yAxisStartScaleDistance;
                            var newRange = range * scale;
                            var difRange = (newRange - range) / 2;
                            var newFrom = from - difRange;
                            var newTo = to + difRange;
                            var newRealFrom = yAxis.convertToRealValue(newFrom);
                            var newRealTo = yAxis.convertToRealValue(newTo);
                            yAxis.setRange({
                                from: newFrom,
                                to: newTo,
                                range: newRange,
                                realFrom: newRealFrom,
                                realTo: newRealTo,
                                realRange: newRealTo - newRealFrom
                            });
                            this._chart.adjustPaneViewport(false, true, true, true);
                        }
                    }
                    else {
                        this._chart.updatePane(1 /* UpdateLevel.Overlay */);
                    }
                    return consumed;
                }
            }
        }
        return false;
    };
    Event.prototype.mouseUpEvent = function (e) {
        var widget = this._findWidgetByEvent(e).widget;
        var consumed = false;
        if (widget !== null) {
            var event_4 = this._makeWidgetEvent(e, widget);
            var name_4 = widget.getName();
            switch (name_4) {
                case WidgetNameConstants.MAIN:
                case WidgetNameConstants.SEPARATOR:
                case WidgetNameConstants.X_AXIS:
                case WidgetNameConstants.Y_AXIS: {
                    consumed = widget.dispatchEvent('mouseUpEvent', event_4);
                    break;
                }
            }
            if (consumed) {
                this._chart.updatePane(1 /* UpdateLevel.Overlay */);
            }
        }
        this._mouseDownWidget = null;
        this._startScrollCoordinate = null;
        this._prevYAxisRange = null;
        this._xAxisStartScaleCoordinate = null;
        this._xAxisStartScaleDistance = 0;
        this._xAxisScale = 1;
        this._yAxisStartScaleDistance = 0;
        return consumed;
    };
    Event.prototype.mouseClickEvent = function (e) {
        var widget = this._findWidgetByEvent(e).widget;
        if (widget !== null) {
            var event_5 = this._makeWidgetEvent(e, widget);
            return widget.dispatchEvent('mouseClickEvent', event_5);
        }
        return false;
    };
    Event.prototype.mouseRightClickEvent = function (e) {
        var widget = this._findWidgetByEvent(e).widget;
        var consumed = false;
        if (widget !== null) {
            var event_6 = this._makeWidgetEvent(e, widget);
            var name_5 = widget.getName();
            switch (name_5) {
                case WidgetNameConstants.MAIN:
                case WidgetNameConstants.X_AXIS:
                case WidgetNameConstants.Y_AXIS: {
                    consumed = widget.dispatchEvent('mouseRightClickEvent', event_6);
                    break;
                }
            }
            if (consumed) {
                this._chart.updatePane(1 /* UpdateLevel.Overlay */);
            }
        }
        return false;
    };
    Event.prototype.mouseDoubleClickEvent = function (e) {
        var _a = this._findWidgetByEvent(e), pane = _a.pane, widget = _a.widget;
        if (widget !== null) {
            var name_6 = widget.getName();
            switch (name_6) {
                case WidgetNameConstants.MAIN: {
                    var event_7 = this._makeWidgetEvent(e, widget);
                    return widget.dispatchEvent('mouseDoubleClickEvent', event_7);
                }
                case WidgetNameConstants.Y_AXIS: {
                    var yAxis = pane.getAxisComponent();
                    if (!yAxis.getAutoCalcTickFlag()) {
                        yAxis.setAutoCalcTickFlag(true);
                        this._chart.adjustPaneViewport(false, true, true, true);
                        return true;
                    }
                    break;
                }
            }
        }
        return false;
    };
    Event.prototype.mouseLeaveEvent = function () {
        this._chart.getChartStore().getTooltipStore().setCrosshair();
        return true;
    };
    Event.prototype.touchStartEvent = function (e) {
        var _a = this._findWidgetByEvent(e), pane = _a.pane, widget = _a.widget;
        if (widget !== null) {
            var event_8 = this._makeWidgetEvent(e, widget);
            var name_7 = widget.getName();
            switch (name_7) {
                case WidgetNameConstants.MAIN: {
                    var chartStore = this._chart.getChartStore();
                    var tooltipStore = chartStore.getTooltipStore();
                    if (widget.dispatchEvent('mouseDownEvent', event_8)) {
                        this._touchCancelCrosshair = true;
                        this._touchCoordinate = null;
                        tooltipStore.setCrosshair(undefined, { notInvalidate: true });
                        this._chart.updatePane(1 /* UpdateLevel.Overlay */);
                        return true;
                    }
                    if (this._flingScrollRequestId !== null) {
                        cancelAnimationFrame(this._flingScrollRequestId);
                        this._flingScrollRequestId = null;
                    }
                    this._flingStartTime = new Date().getTime();
                    this._startScrollCoordinate = { x: event_8.x, y: event_8.y };
                    chartStore.getTimeScaleStore().startScroll();
                    this._touchZoomed = false;
                    if (this._touchCoordinate !== null) {
                        var xDif = event_8.x - this._touchCoordinate.x;
                        var yDif = event_8.y - this._touchCoordinate.y;
                        var radius = Math.sqrt(xDif * xDif + yDif * yDif);
                        if (radius < TOUCH_MIN_RADIUS) {
                            this._touchCoordinate = { x: event_8.x, y: event_8.y };
                            tooltipStore.setCrosshair({ x: event_8.x, y: event_8.y, paneId: pane === null || pane === void 0 ? void 0 : pane.getId() });
                        }
                        else {
                            this._touchCoordinate = null;
                            this._touchCancelCrosshair = true;
                            tooltipStore.setCrosshair();
                        }
                    }
                    return true;
                }
                case WidgetNameConstants.X_AXIS:
                case WidgetNameConstants.Y_AXIS: {
                    var consumed = widget.dispatchEvent('mouseDownEvent', event_8);
                    if (consumed) {
                        this._chart.updatePane(1 /* UpdateLevel.Overlay */);
                    }
                    return consumed;
                }
            }
        }
        return false;
    };
    Event.prototype.touchMoveEvent = function (e) {
        var _a, _b, _c;
        var _d = this._findWidgetByEvent(e), pane = _d.pane, widget = _d.widget;
        if (widget !== null) {
            var event_9 = this._makeWidgetEvent(e, widget);
            var name_8 = widget.getName();
            var chartStore = this._chart.getChartStore();
            var tooltipStore = chartStore.getTooltipStore();
            switch (name_8) {
                case WidgetNameConstants.MAIN: {
                    if (widget.dispatchEvent('pressedMouseMoveEvent', event_9)) {
                        (_a = event_9.preventDefault) === null || _a === void 0 ? void 0 : _a.call(event_9);
                        tooltipStore.setCrosshair(undefined, { notInvalidate: true });
                        this._chart.updatePane(1 /* UpdateLevel.Overlay */);
                        return true;
                    }
                    if (this._touchCoordinate !== null) {
                        (_b = event_9.preventDefault) === null || _b === void 0 ? void 0 : _b.call(event_9);
                        tooltipStore.setCrosshair({ x: event_9.x, y: event_9.y, paneId: pane === null || pane === void 0 ? void 0 : pane.getId() });
                    }
                    else {
                        if (this._startScrollCoordinate !== null &&
                            Math.abs(this._startScrollCoordinate.x - event_9.x) > this._startScrollCoordinate.y - event_9.y) {
                            var distance = event_9.x - this._startScrollCoordinate.x;
                            chartStore.getTimeScaleStore().scroll(distance);
                        }
                    }
                    return true;
                }
                case WidgetNameConstants.X_AXIS:
                case WidgetNameConstants.Y_AXIS: {
                    var consumed = widget.dispatchEvent('pressedMouseMoveEvent', event_9);
                    if (consumed) {
                        (_c = event_9.preventDefault) === null || _c === void 0 ? void 0 : _c.call(event_9);
                        this._chart.updatePane(1 /* UpdateLevel.Overlay */);
                    }
                    return consumed;
                }
            }
        }
        return false;
    };
    Event.prototype.touchEndEvent = function (e) {
        var _this = this;
        var widget = this._findWidgetByEvent(e).widget;
        if (widget !== null) {
            var event_10 = this._makeWidgetEvent(e, widget);
            var name_9 = widget.getName();
            switch (name_9) {
                case WidgetNameConstants.MAIN: {
                    widget.dispatchEvent('mouseUpEvent', event_10);
                    if (this._startScrollCoordinate !== null) {
                        var time = new Date().getTime() - this._flingStartTime;
                        var distance = event_10.x - this._startScrollCoordinate.x;
                        var v_1 = distance / (time > 0 ? time : 1) * 20;
                        if (time < 200 && Math.abs(v_1) > 0) {
                            var timeScaleStore_1 = this._chart.getChartStore().getTimeScaleStore();
                            var flingScroll_1 = function () {
                                _this._flingScrollRequestId = requestAnimationFrame(function () {
                                    timeScaleStore_1.startScroll();
                                    timeScaleStore_1.scroll(v_1);
                                    v_1 = v_1 * (1 - 0.025);
                                    if (Math.abs(v_1) < 1) {
                                        if (_this._flingScrollRequestId !== null) {
                                            cancelAnimationFrame(_this._flingScrollRequestId);
                                            _this._flingScrollRequestId = null;
                                        }
                                    }
                                    else {
                                        flingScroll_1();
                                    }
                                });
                            };
                            flingScroll_1();
                        }
                    }
                    return true;
                }
                case WidgetNameConstants.X_AXIS:
                case WidgetNameConstants.Y_AXIS: {
                    var consumed = widget.dispatchEvent('mouseUpEvent', event_10);
                    if (consumed) {
                        this._chart.updatePane(1 /* UpdateLevel.Overlay */);
                    }
                }
            }
        }
        return false;
    };
    Event.prototype.tapEvent = function (e) {
        var _a = this._findWidgetByEvent(e), pane = _a.pane, widget = _a.widget;
        var consumed = false;
        if (widget !== null) {
            var event_11 = this._makeWidgetEvent(e, widget);
            var result = widget.dispatchEvent('mouseClickEvent', event_11);
            if (widget.getName() === WidgetNameConstants.MAIN) {
                var event_12 = this._makeWidgetEvent(e, widget);
                var chartStore = this._chart.getChartStore();
                var tooltipStore = chartStore.getTooltipStore();
                if (result) {
                    this._touchCancelCrosshair = true;
                    this._touchCoordinate = null;
                    tooltipStore.setCrosshair(undefined, { notInvalidate: true });
                    consumed = true;
                }
                else {
                    if (!this._touchCancelCrosshair && !this._touchZoomed) {
                        this._touchCoordinate = { x: event_12.x, y: event_12.y };
                        tooltipStore.setCrosshair({ x: event_12.x, y: event_12.y, paneId: pane === null || pane === void 0 ? void 0 : pane.getId() }, { notInvalidate: true });
                        consumed = true;
                    }
                    this._touchCancelCrosshair = false;
                }
            }
            if (consumed || result) {
                this._chart.updatePane(1 /* UpdateLevel.Overlay */);
            }
        }
        return consumed;
    };
    Event.prototype.doubleTapEvent = function (e) {
        return this.mouseDoubleClickEvent(e);
    };
    Event.prototype.longTapEvent = function (e) {
        var _a = this._findWidgetByEvent(e), pane = _a.pane, widget = _a.widget;
        if (widget !== null && widget.getName() === WidgetNameConstants.MAIN) {
            var event_13 = this._makeWidgetEvent(e, widget);
            this._touchCoordinate = { x: event_13.x, y: event_13.y };
            this._chart.getChartStore().getTooltipStore().setCrosshair({ x: event_13.x, y: event_13.y, paneId: pane === null || pane === void 0 ? void 0 : pane.getId() });
            return true;
        }
        return false;
    };
    Event.prototype._findWidgetByEvent = function (event) {
        var e_1, _a, e_2, _b;
        var x = event.x, y = event.y;
        var separatorPanes = this._chart.getAllSeparatorPanes();
        var separatorSize = this._chart.getChartStore().getStyles().separator.size;
        try {
            for (var separatorPanes_1 = __values(separatorPanes), separatorPanes_1_1 = separatorPanes_1.next(); !separatorPanes_1_1.done; separatorPanes_1_1 = separatorPanes_1.next()) {
                var _c = __read(separatorPanes_1_1.value, 2), pane_1 = _c[1];
                var bounding = pane_1.getBounding();
                var top_1 = bounding.top - Math.round((REAL_SEPARATOR_HEIGHT - separatorSize) / 2);
                if (x >= bounding.left && x <= bounding.left + bounding.width &&
                    y >= top_1 && y <= top_1 + REAL_SEPARATOR_HEIGHT) {
                    return { pane: pane_1, widget: pane_1.getWidget() };
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (separatorPanes_1_1 && !separatorPanes_1_1.done && (_a = separatorPanes_1.return)) _a.call(separatorPanes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var drawPanes = this._chart.getAllDrawPanes();
        var pane = null;
        try {
            for (var drawPanes_1 = __values(drawPanes), drawPanes_1_1 = drawPanes_1.next(); !drawPanes_1_1.done; drawPanes_1_1 = drawPanes_1.next()) {
                var p = drawPanes_1_1.value;
                var bounding = p.getBounding();
                if (x >= bounding.left && x <= bounding.left + bounding.width &&
                    y >= bounding.top && y <= bounding.top + bounding.height) {
                    pane = p;
                    break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (drawPanes_1_1 && !drawPanes_1_1.done && (_b = drawPanes_1.return)) _b.call(drawPanes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var widget = null;
        if (pane !== null) {
            if (widget === null) {
                var mainWidget = pane.getMainWidget();
                var mainBounding = mainWidget.getBounding();
                if (x >= mainBounding.left && x <= mainBounding.left + mainBounding.width &&
                    y >= mainBounding.top && y <= mainBounding.top + mainBounding.height) {
                    widget = mainWidget;
                }
            }
            if (widget === null) {
                var yAxisWidget = pane.getYAxisWidget();
                if (yAxisWidget !== null) {
                    var yAxisBounding = yAxisWidget.getBounding();
                    if (x >= yAxisBounding.left && x <= yAxisBounding.left + yAxisBounding.width &&
                        y >= yAxisBounding.top && y <= yAxisBounding.top + yAxisBounding.height) {
                        widget = yAxisWidget;
                    }
                }
            }
        }
        return { pane: pane, widget: widget };
    };
    Event.prototype._makeWidgetEvent = function (event, widget) {
        var _a, _b, _c;
        var bounding = (_a = widget === null || widget === void 0 ? void 0 : widget.getBounding()) !== null && _a !== void 0 ? _a : null;
        return __assign(__assign({}, event), { x: event.x - ((_b = bounding === null || bounding === void 0 ? void 0 : bounding.left) !== null && _b !== void 0 ? _b : 0), y: event.y - ((_c = bounding === null || bounding === void 0 ? void 0 : bounding.top) !== null && _c !== void 0 ? _c : 0) });
    };
    Event.prototype.destroy = function () {
        this._container.removeEventListener('keydown', this._boundKeyBoardDownEvent);
        this._event.destroy();
    };
    return Event;
}());

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.DomPosition = void 0;
(function (DomPosition) {
    DomPosition["Root"] = "root";
    DomPosition["Main"] = "main";
    DomPosition["YAxis"] = "yAxis";
})(exports.DomPosition || (exports.DomPosition = {}));
var ChartImp = /** @class */ (function () {
    function ChartImp(container, options) {
        this._drawPanes = [];
        this._separatorPanes = new Map();
        this._initContainer(container);
        this._chartEvent = new Event(this._chartContainer, this);
        this._chartStore = new ChartStore(this, options);
        this._initPanes(options);
        this.adjustPaneViewport(true, true, true);
    }
    ChartImp.prototype._initContainer = function (container) {
        this._container = container;
        this._chartContainer = createDom('div', {
            position: 'relative',
            width: '100%',
            outline: 'none',
            borderStyle: 'none',
            cursor: 'crosshair',
            boxSizing: 'border-box',
            userSelect: 'none',
            webkitUserSelect: 'none',
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            msUserSelect: 'none',
            MozUserSelect: 'none',
            webkitTapHighlightColor: 'transparent'
        });
        this._chartContainer.tabIndex = 1;
        container.appendChild(this._chartContainer);
    };
    ChartImp.prototype._initPanes = function (options) {
        var _this = this;
        var _a;
        var layout = (_a = options === null || options === void 0 ? void 0 : options.layout) !== null && _a !== void 0 ? _a : [{ type: "candle" /* LayoutChildType.Candle */ }];
        var candlePaneInitialized = false;
        var xAxisPaneInitialized = false;
        var createXAxisPane = function (ops) {
            if (!xAxisPaneInitialized) {
                var pane = _this._createPane(XAxisPane, PaneIdConstants.X_AXIS, ops !== null && ops !== void 0 ? ops : {});
                _this._xAxisPane = pane;
                xAxisPaneInitialized = true;
            }
        };
        layout.forEach(function (child) {
            var _a, _b, _c;
            switch (child.type) {
                case "candle" /* LayoutChildType.Candle */: {
                    if (!candlePaneInitialized) {
                        var paneOptions_1 = (_a = child.options) !== null && _a !== void 0 ? _a : {};
                        merge(paneOptions_1, { id: PaneIdConstants.CANDLE });
                        _this._candlePane = _this._createPane(CandlePane, PaneIdConstants.CANDLE, paneOptions_1);
                        var content = (_b = child.content) !== null && _b !== void 0 ? _b : [];
                        content.forEach(function (v) {
                            _this.createIndicator(v, true, paneOptions_1);
                        });
                        candlePaneInitialized = true;
                    }
                    break;
                }
                case "indicator" /* LayoutChildType.Indicator */: {
                    var content = (_c = child.content) !== null && _c !== void 0 ? _c : [];
                    if (content.length > 0) {
                        var paneId_1;
                        content.forEach(function (v) {
                            if (isValid(paneId_1)) {
                                _this.createIndicator(v, true, { id: paneId_1 });
                            }
                            else {
                                paneId_1 = _this.createIndicator(v, true, child.options);
                            }
                        });
                    }
                    break;
                }
                case "xAxis" /* LayoutChildType.XAxis */: {
                    createXAxisPane(child.options);
                    break;
                }
            }
        });
        createXAxisPane({ position: "bottom" /* PanePosition.Bottom */ });
    };
    ChartImp.prototype._createPane = function (DrawPaneClass, id, options) {
        var index = null;
        var pane = null;
        var position = options === null || options === void 0 ? void 0 : options.position;
        switch (position) {
            case "top" /* PanePosition.Top */: {
                var firstPane = this._drawPanes[0];
                if (isValid(firstPane)) {
                    pane = new DrawPaneClass(this._chartContainer, firstPane.getContainer(), this, id, options !== null && options !== void 0 ? options : {});
                    index = 0;
                }
                break;
            }
            case "bottom" /* PanePosition.Bottom */: {
                break;
            }
            default: {
                for (var i = this._drawPanes.length - 1; i > -1; i--) {
                    var p = this._drawPanes[i];
                    var prevP = this._drawPanes[i - 1];
                    if ((p === null || p === void 0 ? void 0 : p.getOptions().position) === "bottom" /* PanePosition.Bottom */ &&
                        (prevP === null || prevP === void 0 ? void 0 : prevP.getOptions().position) !== "bottom" /* PanePosition.Bottom */) {
                        pane = new DrawPaneClass(this._chartContainer, p.getContainer(), this, id, options !== null && options !== void 0 ? options : {});
                        index = i;
                        break;
                    }
                }
            }
        }
        if (!isValid(pane)) {
            pane = new DrawPaneClass(this._chartContainer, null, this, id, options !== null && options !== void 0 ? options : {});
        }
        var newIndex;
        if (isNumber(index)) {
            this._drawPanes.splice(index, 0, pane);
            newIndex = index;
        }
        else {
            this._drawPanes.push(pane);
            newIndex = this._drawPanes.length - 1;
        }
        if (pane.getId() !== PaneIdConstants.X_AXIS) {
            var nextPane = this._drawPanes[newIndex + 1];
            if (isValid(nextPane)) {
                if (nextPane.getId() === PaneIdConstants.X_AXIS) {
                    nextPane = this._drawPanes[newIndex + 2];
                }
            }
            if (isValid(nextPane)) {
                var separatorPane = this._separatorPanes.get(nextPane);
                if (isValid(separatorPane)) {
                    separatorPane.setTopPane(pane);
                }
                else {
                    separatorPane = new SeparatorPane(this._chartContainer, nextPane.getContainer(), this, '', pane, nextPane);
                    this._separatorPanes.set(nextPane, separatorPane);
                }
            }
            var prevPane = this._drawPanes[newIndex - 1];
            if (isValid(prevPane)) {
                if (prevPane.getId() === PaneIdConstants.X_AXIS) {
                    prevPane = this._drawPanes[newIndex - 2];
                }
            }
            if (isValid(prevPane)) {
                var separatorPane = new SeparatorPane(this._chartContainer, pane.getContainer(), this, '', prevPane, pane);
                this._separatorPanes.set(pane, separatorPane);
            }
        }
        return pane;
    };
    ChartImp.prototype._measurePaneHeight = function () {
        var _this = this;
        var _a;
        var totalHeight = Math.floor(this._container.clientHeight);
        var separatorSize = this._chartStore.getStyles().separator.size;
        var xAxisHeight = this._xAxisPane.getAxisComponent().getAutoSize();
        var paneExcludeXAxisHeight = totalHeight - xAxisHeight - this._separatorPanes.size * separatorSize;
        if (paneExcludeXAxisHeight < 0) {
            paneExcludeXAxisHeight = 0;
        }
        var indicatorPaneTotalHeight = 0;
        this._drawPanes.forEach(function (pane) {
            if (pane.getId() !== PaneIdConstants.CANDLE && pane.getId() !== PaneIdConstants.X_AXIS) {
                var paneHeight = pane.getBounding().height;
                var paneMinHeight = pane.getOptions().minHeight;
                if (paneHeight < paneMinHeight) {
                    paneHeight = paneMinHeight;
                }
                if (indicatorPaneTotalHeight + paneHeight > paneExcludeXAxisHeight) {
                    indicatorPaneTotalHeight = paneExcludeXAxisHeight;
                    paneHeight = Math.max(paneExcludeXAxisHeight - indicatorPaneTotalHeight, 0);
                }
                else {
                    indicatorPaneTotalHeight += paneHeight;
                }
                pane.setBounding({ height: paneHeight });
            }
        });
        var candlePaneHeight = paneExcludeXAxisHeight - indicatorPaneTotalHeight;
        (_a = this._candlePane) === null || _a === void 0 ? void 0 : _a.setBounding({ height: candlePaneHeight });
        this._xAxisPane.setBounding({ height: xAxisHeight });
        var top = 0;
        this._drawPanes.forEach(function (pane) {
            var separatorPane = _this._separatorPanes.get(pane);
            if (isValid(separatorPane)) {
                separatorPane.setBounding({ height: separatorSize, top: top });
                top += separatorSize;
            }
            pane.setBounding({ top: top });
            top += pane.getBounding().height;
        });
    };
    ChartImp.prototype._measurePaneWidth = function () {
        var _this = this;
        var totalWidth = Math.floor(this._container.clientWidth);
        var styles = this._chartStore.getStyles();
        var yAxisStyles = styles.yAxis;
        var isYAxisLeft = yAxisStyles.position === exports.YAxisPosition.Left;
        var isOutside = !yAxisStyles.inside;
        var mainWidth = 0;
        var yAxisWidth = 0;
        var yAxisLeft = 0;
        var mainLeft = 0;
        this._drawPanes.forEach(function (pane) {
            if (pane.getId() !== PaneIdConstants.X_AXIS) {
                yAxisWidth = Math.max(yAxisWidth, pane.getAxisComponent().getAutoSize());
            }
        });
        if (yAxisWidth > totalWidth) {
            yAxisWidth = totalWidth;
        }
        if (isOutside) {
            mainWidth = totalWidth - yAxisWidth;
            if (isYAxisLeft) {
                yAxisLeft = 0;
                mainLeft = yAxisWidth;
            }
            else {
                yAxisLeft = totalWidth - yAxisWidth;
                mainLeft = 0;
            }
        }
        else {
            mainWidth = totalWidth;
            mainLeft = 0;
            if (isYAxisLeft) {
                yAxisLeft = 0;
            }
            else {
                yAxisLeft = totalWidth - yAxisWidth;
            }
        }
        this._chartStore.getTimeScaleStore().setTotalBarSpace(mainWidth);
        var paneBounding = { width: totalWidth };
        var mainBounding = { width: mainWidth, left: mainLeft };
        var yAxisBounding = { width: yAxisWidth, left: yAxisLeft };
        var separatorFill = styles.separator.fill;
        var separatorBounding;
        if (isOutside && !separatorFill) {
            separatorBounding = mainBounding;
        }
        else {
            separatorBounding = paneBounding;
        }
        this._drawPanes.forEach(function (pane) {
            var _a;
            (_a = _this._separatorPanes.get(pane)) === null || _a === void 0 ? void 0 : _a.setBounding(separatorBounding);
            pane.setBounding(paneBounding, mainBounding, yAxisBounding);
        });
    };
    ChartImp.prototype._setPaneOptions = function (options, forceShouldAdjust) {
        var _a, _b;
        if (isString(options.id)) {
            var pane = this.getDrawPaneById(options.id);
            var shouldMeasureHeight = false;
            if (pane !== null) {
                var shouldAdjust = forceShouldAdjust;
                if (options.id !== PaneIdConstants.CANDLE && isNumber(options.height) && options.height > 0) {
                    var minHeight = Math.max((_a = options.minHeight) !== null && _a !== void 0 ? _a : pane.getOptions().minHeight, 0);
                    var height = Math.max(minHeight, options.height);
                    pane.setBounding({ height: height });
                    shouldAdjust = true;
                    shouldMeasureHeight = true;
                }
                if (isString((_b = options.axisOptions) === null || _b === void 0 ? void 0 : _b.name) || isValid(options.gap)) {
                    shouldAdjust = true;
                }
                pane.setOptions(options);
                if (shouldAdjust) {
                    this.adjustPaneViewport(shouldMeasureHeight, true, true, true, true);
                }
            }
        }
    };
    ChartImp.prototype.getDrawPaneById = function (paneId) {
        if (paneId === PaneIdConstants.CANDLE) {
            return this._candlePane;
        }
        if (paneId === PaneIdConstants.X_AXIS) {
            return this._xAxisPane;
        }
        var pane = this._drawPanes.find(function (p) { return p.getId() === paneId; });
        return pane !== null && pane !== void 0 ? pane : null;
    };
    ChartImp.prototype.getContainer = function () { return this._container; };
    ChartImp.prototype.getChartStore = function () { return this._chartStore; };
    ChartImp.prototype.getXAxisPane = function () { return this._xAxisPane; };
    ChartImp.prototype.getAllDrawPanes = function () { return this._drawPanes; };
    ChartImp.prototype.getAllSeparatorPanes = function () { return this._separatorPanes; };
    ChartImp.prototype.adjustPaneViewport = function (shouldMeasureHeight, shouldMeasureWidth, shouldUpdate, shouldAdjustYAxis, shouldForceAdjustYAxis) {
        if (shouldMeasureHeight) {
            this._measurePaneHeight();
        }
        var forceMeasureWidth = shouldMeasureWidth;
        var adjustYAxis = shouldAdjustYAxis !== null && shouldAdjustYAxis !== void 0 ? shouldAdjustYAxis : false;
        var forceAdjustYAxis = shouldForceAdjustYAxis !== null && shouldForceAdjustYAxis !== void 0 ? shouldForceAdjustYAxis : false;
        if (adjustYAxis || forceAdjustYAxis) {
            this._drawPanes.forEach(function (pane) {
                var adjust = pane.getAxisComponent().buildTicks(forceAdjustYAxis);
                if (!forceMeasureWidth) {
                    forceMeasureWidth = adjust;
                }
            });
        }
        if (forceMeasureWidth) {
            this._measurePaneWidth();
        }
        if (shouldUpdate !== null && shouldUpdate !== void 0 ? shouldUpdate : false) {
            this._xAxisPane.getAxisComponent().buildTicks(true);
            this.updatePane(4 /* UpdateLevel.All */);
        }
    };
    ChartImp.prototype.updatePane = function (level, paneId) {
        if (isValid(paneId)) {
            var pane = this.getDrawPaneById(paneId);
            pane === null || pane === void 0 ? void 0 : pane.update(level);
        }
        else {
            this._separatorPanes.forEach(function (pane) {
                pane.update(level);
            });
            this._drawPanes.forEach(function (pane) {
                pane.update(level);
            });
        }
    };
    ChartImp.prototype.crosshairChange = function (crosshair) {
        var _this = this;
        var actionStore = this._chartStore.getActionStore();
        if (actionStore.has(exports.ActionType.OnCrosshairChange)) {
            var indicatorData_1 = {};
            this._drawPanes.forEach(function (pane) {
                var id = pane.getId();
                var paneIndicatorData = {};
                var indicators = _this._chartStore.getIndicatorStore().getInstances(id);
                indicators.forEach(function (indicator) {
                    var _a;
                    var result = indicator.result;
                    paneIndicatorData[indicator.name] = result[(_a = crosshair.dataIndex) !== null && _a !== void 0 ? _a : result.length - 1];
                });
                indicatorData_1[id] = paneIndicatorData;
            });
            if (isString(crosshair.paneId)) {
                actionStore.execute(exports.ActionType.OnCrosshairChange, __assign(__assign({}, crosshair), { indicatorData: indicatorData_1 }));
            }
        }
    };
    ChartImp.prototype.getDom = function (paneId, position) {
        var _a, _b;
        if (isString(paneId)) {
            var pane = this.getDrawPaneById(paneId);
            if (pane !== null) {
                var pos = position !== null && position !== void 0 ? position : exports.DomPosition.Root;
                switch (pos) {
                    case exports.DomPosition.Root: {
                        return pane.getContainer();
                    }
                    case exports.DomPosition.Main: {
                        return pane.getMainWidget().getContainer();
                    }
                    case exports.DomPosition.YAxis: {
                        return (_b = (_a = pane.getYAxisWidget()) === null || _a === void 0 ? void 0 : _a.getContainer()) !== null && _b !== void 0 ? _b : null;
                    }
                }
            }
        }
        else {
            return this._chartContainer;
        }
        return null;
    };
    ChartImp.prototype.getSize = function (paneId, position) {
        var _a, _b;
        if (isValid(paneId)) {
            var pane = this.getDrawPaneById(paneId);
            if (pane !== null) {
                var pos = position !== null && position !== void 0 ? position : exports.DomPosition.Root;
                switch (pos) {
                    case exports.DomPosition.Root: {
                        return pane.getBounding();
                    }
                    case exports.DomPosition.Main: {
                        return pane.getMainWidget().getBounding();
                    }
                    case exports.DomPosition.YAxis: {
                        return (_b = (_a = pane.getYAxisWidget()) === null || _a === void 0 ? void 0 : _a.getBounding()) !== null && _b !== void 0 ? _b : null;
                    }
                }
            }
        }
        else {
            return {
                width: Math.floor(this._chartContainer.clientWidth),
                height: Math.floor(this._chartContainer.clientHeight),
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
        }
        return null;
    };
    ChartImp.prototype.setStyles = function (styles) {
        var _a, _b;
        this._chartStore.setOptions({ styles: styles });
        var realStyles;
        if (isString(styles)) {
            realStyles = getStyles(styles);
        }
        else {
            realStyles = styles;
        }
        if (isValid((_a = realStyles === null || realStyles === void 0 ? void 0 : realStyles.yAxis) === null || _a === void 0 ? void 0 : _a.type)) {
            (_b = this._candlePane) === null || _b === void 0 ? void 0 : _b.getAxisComponent().setAutoCalcTickFlag(true);
        }
        this.adjustPaneViewport(true, true, true, true, true);
    };
    ChartImp.prototype.getStyles = function () {
        return this._chartStore.getStyles();
    };
    ChartImp.prototype.setLocale = function (locale) {
        this._chartStore.setOptions({ locale: locale });
        this.adjustPaneViewport(true, true, true, true, true);
    };
    ChartImp.prototype.getLocale = function () {
        return this._chartStore.getLocale();
    };
    ChartImp.prototype.setCustomApi = function (customApi) {
        this._chartStore.setOptions({ customApi: customApi });
        this.adjustPaneViewport(true, true, true, true, true);
    };
    ChartImp.prototype.setPriceVolumePrecision = function (pricePrecision, volumePrecision) {
        this._chartStore.setPrecision({ price: pricePrecision, volume: volumePrecision });
    };
    ChartImp.prototype.getPriceVolumePrecision = function () {
        return this._chartStore.getPrecision();
    };
    ChartImp.prototype.setTimezone = function (timezone) {
        this._chartStore.setOptions({ timezone: timezone });
        this._xAxisPane.getAxisComponent().buildTicks(true);
        this._xAxisPane.update(3 /* UpdateLevel.Drawer */);
    };
    ChartImp.prototype.getTimezone = function () {
        return this._chartStore.getTimeScaleStore().getTimezone();
    };
    ChartImp.prototype.setOffsetRightDistance = function (distance) {
        this._chartStore.getTimeScaleStore().setOffsetRightDistance(distance, true);
    };
    ChartImp.prototype.getOffsetRightDistance = function () {
        return this._chartStore.getTimeScaleStore().getOffsetRightDistance();
    };
    ChartImp.prototype.setMaxOffsetLeftDistance = function (distance) {
        if (distance < 0) {
            logWarn('setMaxOffsetLeftDistance', 'distance', 'distance must greater than zero!!!');
            return;
        }
        this._chartStore.getTimeScaleStore().setMaxOffsetLeftDistance(distance);
    };
    ChartImp.prototype.setMaxOffsetRightDistance = function (distance) {
        if (distance < 0) {
            logWarn('setMaxOffsetRightDistance', 'distance', 'distance must greater than zero!!!');
            return;
        }
        this._chartStore.getTimeScaleStore().setMaxOffsetRightDistance(distance);
    };
    ChartImp.prototype.setLeftMinVisibleBarCount = function (barCount) {
        if (barCount < 0) {
            logWarn('setLeftMinVisibleBarCount', 'barCount', 'barCount must greater than zero!!!');
            return;
        }
        this._chartStore.getTimeScaleStore().setLeftMinVisibleBarCount(Math.ceil(barCount));
    };
    ChartImp.prototype.setRightMinVisibleBarCount = function (barCount) {
        if (barCount < 0) {
            logWarn('setRightMinVisibleBarCount', 'barCount', 'barCount must greater than zero!!!');
            return;
        }
        this._chartStore.getTimeScaleStore().setRightMinVisibleBarCount(Math.ceil(barCount));
    };
    ChartImp.prototype.setBarSpace = function (space) {
        this._chartStore.getTimeScaleStore().setBarSpace(space);
    };
    ChartImp.prototype.getBarSpace = function () {
        return this._chartStore.getTimeScaleStore().getBarSpace().bar;
    };
    ChartImp.prototype.getVisibleRange = function () {
        return this._chartStore.getTimeScaleStore().getVisibleRange();
    };
    ChartImp.prototype.clearData = function () {
        this._chartStore.clear();
    };
    ChartImp.prototype.getDataList = function () {
        return this._chartStore.getDataList();
    };
    ChartImp.prototype.applyNewData = function (data, more, callback) {
        if (isValid(callback)) {
            logWarn('applyNewData', '', 'param `callback` has been deprecated since version 9.8.0, use `subscribeAction(\'onDataReady\')` instead.');
        }
        this._chartStore.addData(data, exports.LoadDataType.Init, more).then(function () { }).catch(function () { }).finally(function () { callback === null || callback === void 0 ? void 0 : callback(); });
    };
    /**
     * @deprecated
     * Since v9.8.0 deprecated, since v10 removed
     */
    ChartImp.prototype.applyMoreData = function (data, more, callback) {
        logWarn('', '', 'Api `applyMoreData` has been deprecated since version 9.8.0.');
        this._chartStore.addData(data, exports.LoadDataType.Forward, more !== null && more !== void 0 ? more : true).then(function () { }).catch(function () { }).finally(function () { callback === null || callback === void 0 ? void 0 : callback(); });
    };
    ChartImp.prototype.updateData = function (data, callback) {
        if (isValid(callback)) {
            logWarn('updateData', '', 'param `callback` has been deprecated since version 9.8.0, use `subscribeAction(\'onDataReady\')` instead.');
        }
        this._chartStore.addData(data).then(function () { }).catch(function () { }).finally(function () { callback === null || callback === void 0 ? void 0 : callback(); });
    };
    /**
     * @deprecated
     * Since v9.8.0 deprecated, since v10 removed
     */
    ChartImp.prototype.loadMore = function (cb) {
        logWarn('', '', 'Api `loadMore` has been deprecated since version 9.8.0, use `setLoadDataCallback` instead.');
        this._chartStore.setLoadMoreCallback(cb);
    };
    ChartImp.prototype.setLoadDataCallback = function (cb) {
        this._chartStore.setLoadDataCallback(cb);
    };
    ChartImp.prototype.createIndicator = function (value, isStack, paneOptions, callback) {
        var _this = this;
        var _a;
        var indicator = isString(value) ? { name: value } : value;
        if (getIndicatorClass(indicator.name) === null) {
            logWarn('createIndicator', 'value', 'indicator not supported, you may need to use registerIndicator to add one!!!');
            return null;
        }
        var paneId = paneOptions === null || paneOptions === void 0 ? void 0 : paneOptions.id;
        var currentPane = this.getDrawPaneById(paneId !== null && paneId !== void 0 ? paneId : '');
        if (currentPane !== null) {
            this._chartStore.getIndicatorStore().addInstance(indicator, paneId !== null && paneId !== void 0 ? paneId : '', isStack !== null && isStack !== void 0 ? isStack : false).then(function (_) {
                var _a;
                _this._setPaneOptions(paneOptions !== null && paneOptions !== void 0 ? paneOptions : {}, (_a = currentPane.getAxisComponent().buildTicks(true)) !== null && _a !== void 0 ? _a : false);
            }).catch(function (_) { });
        }
        else {
            paneId !== null && paneId !== void 0 ? paneId : (paneId = createId(PaneIdConstants.INDICATOR));
            var pane = this._createPane(IndicatorPane, paneId, paneOptions !== null && paneOptions !== void 0 ? paneOptions : {});
            var height = (_a = paneOptions === null || paneOptions === void 0 ? void 0 : paneOptions.height) !== null && _a !== void 0 ? _a : PANE_DEFAULT_HEIGHT;
            pane.setBounding({ height: height });
            void this._chartStore.getIndicatorStore().addInstance(indicator, paneId, isStack !== null && isStack !== void 0 ? isStack : false).finally(function () {
                _this.adjustPaneViewport(true, true, true, true, true);
                callback === null || callback === void 0 ? void 0 : callback();
            });
        }
        return paneId !== null && paneId !== void 0 ? paneId : null;
    };
    ChartImp.prototype.overrideIndicator = function (override, paneId, callback) {
        var _this = this;
        this._chartStore.getIndicatorStore().override(override, paneId !== null && paneId !== void 0 ? paneId : null).then(function (_a) {
            var _b = __read(_a, 2), onlyUpdateFlag = _b[0], resizeFlag = _b[1];
            if (onlyUpdateFlag || resizeFlag) {
                _this.adjustPaneViewport(false, resizeFlag, true, resizeFlag);
                callback === null || callback === void 0 ? void 0 : callback();
            }
        }).catch(function () { });
    };
    ChartImp.prototype.getIndicatorByPaneId = function (paneId, name) {
        return this._chartStore.getIndicatorStore().getInstanceByPaneId(paneId, name);
    };
    ChartImp.prototype.removeIndicator = function (paneId, name) {
        var e_1, _a;
        var _b;
        var indicatorStore = this._chartStore.getIndicatorStore();
        var removed = indicatorStore.removeInstance(paneId, name);
        if (removed) {
            var shouldMeasureHeight = false;
            if (paneId !== PaneIdConstants.CANDLE) {
                if (!indicatorStore.hasInstances(paneId)) {
                    var pane = this.getDrawPaneById(paneId);
                    var index = this._drawPanes.findIndex(function (p) { return p.getId() === paneId; });
                    if (pane !== null) {
                        shouldMeasureHeight = true;
                        var separatorPane = this._separatorPanes.get(pane);
                        if (isValid(separatorPane)) {
                            var topPane = separatorPane === null || separatorPane === void 0 ? void 0 : separatorPane.getTopPane();
                            try {
                                for (var _c = __values(this._separatorPanes), _d = _c.next(); !_d.done; _d = _c.next()) {
                                    var item = _d.value;
                                    if (item[1].getTopPane().getId() === pane.getId()) {
                                        item[1].setTopPane(topPane);
                                        break;
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            separatorPane.destroy();
                            this._separatorPanes.delete(pane);
                        }
                        this._drawPanes.splice(index, 1);
                        pane.destroy();
                        var firstPane = this._drawPanes[0];
                        if (isValid(firstPane)) {
                            if (firstPane.getId() === PaneIdConstants.X_AXIS) {
                                firstPane = this._drawPanes[1];
                            }
                        }
                        (_b = this._separatorPanes.get(firstPane)) === null || _b === void 0 ? void 0 : _b.destroy();
                        this._separatorPanes.delete(firstPane);
                    }
                }
            }
            this.adjustPaneViewport(shouldMeasureHeight, true, true, true, true);
        }
    };
    ChartImp.prototype.createOverlay = function (value, paneId) {
        var overlays = [];
        if (isString(value)) {
            overlays = [{ name: value }];
        }
        else if (isArray(value)) {
            overlays = value.map(function (v) {
                if (isString(v)) {
                    return { name: v };
                }
                return v;
            });
        }
        else {
            var overlay = value;
            overlays = [overlay];
        }
        var appointPaneFlag = true;
        if (!isValid(paneId) || this.getDrawPaneById(paneId) === null) {
            paneId = PaneIdConstants.CANDLE;
            appointPaneFlag = false;
        }
        var ids = this._chartStore.getOverlayStore().addInstances(overlays, paneId, appointPaneFlag);
        if (isArray(value)) {
            return ids;
        }
        return ids[0];
    };
    ChartImp.prototype.getOverlayById = function (id) {
        return this._chartStore.getOverlayStore().getInstanceById(id);
    };
    ChartImp.prototype.overrideOverlay = function (override) {
        this._chartStore.getOverlayStore().override(override);
    };
    ChartImp.prototype.removeOverlay = function (remove) {
        var overlayRemove;
        if (isValid(remove)) {
            if (isString(remove)) {
                overlayRemove = { id: remove };
            }
            else {
                overlayRemove = remove;
            }
        }
        this._chartStore.getOverlayStore().removeInstance(overlayRemove);
    };
    ChartImp.prototype.setPaneOptions = function (options) {
        this._setPaneOptions(options, false);
    };
    ChartImp.prototype.setZoomEnabled = function (enabled) {
        this._chartStore.getTimeScaleStore().setZoomEnabled(enabled);
    };
    ChartImp.prototype.isZoomEnabled = function () {
        return this._chartStore.getTimeScaleStore().getZoomEnabled();
    };
    ChartImp.prototype.setScrollEnabled = function (enabled) {
        this._chartStore.getTimeScaleStore().setScrollEnabled(enabled);
    };
    ChartImp.prototype.isScrollEnabled = function () {
        return this._chartStore.getTimeScaleStore().getScrollEnabled();
    };
    ChartImp.prototype.scrollByDistance = function (distance, animationDuration) {
        var duration = isNumber(animationDuration) && animationDuration > 0 ? animationDuration : 0;
        var timeScaleStore = this._chartStore.getTimeScaleStore();
        timeScaleStore.startScroll();
        if (duration > 0) {
            var animation = new Animation({ duration: duration });
            animation.doFrame(function (frameTime) {
                var progressDistance = distance * (frameTime / duration);
                timeScaleStore.scroll(progressDistance);
            });
            animation.start();
        }
        else {
            timeScaleStore.scroll(distance);
        }
    };
    ChartImp.prototype.scrollToRealTime = function (animationDuration) {
        var timeScaleStore = this._chartStore.getTimeScaleStore();
        var barSpace = timeScaleStore.getBarSpace().bar;
        var difBarCount = timeScaleStore.getLastBarRightSideDiffBarCount() - timeScaleStore.getInitialOffsetRightDistance() / barSpace;
        var distance = difBarCount * barSpace;
        this.scrollByDistance(distance, animationDuration);
    };
    ChartImp.prototype.scrollToDataIndex = function (dataIndex, animationDuration) {
        var timeScaleStore = this._chartStore.getTimeScaleStore();
        var distance = (timeScaleStore.getLastBarRightSideDiffBarCount() + (this.getDataList().length - 1 - dataIndex)) * timeScaleStore.getBarSpace().bar;
        this.scrollByDistance(distance, animationDuration);
    };
    ChartImp.prototype.scrollToTimestamp = function (timestamp, animationDuration) {
        var dataIndex = binarySearchNearest(this.getDataList(), 'timestamp', timestamp);
        this.scrollToDataIndex(dataIndex, animationDuration);
    };
    ChartImp.prototype.zoomAtCoordinate = function (scale, coordinate, animationDuration) {
        var duration = isNumber(animationDuration) && animationDuration > 0 ? animationDuration : 0;
        var timeScaleStore = this._chartStore.getTimeScaleStore();
        var barSpace = timeScaleStore.getBarSpace().bar;
        var scaleBarSpace = barSpace * scale;
        var difSpace = scaleBarSpace - barSpace;
        if (duration > 0) {
            var prevProgressBarSpace_1 = 0;
            var animation = new Animation({ duration: duration });
            animation.doFrame(function (frameTime) {
                var progressBarSpace = difSpace * (frameTime / duration);
                var scale = (progressBarSpace - prevProgressBarSpace_1) / timeScaleStore.getBarSpace().bar * SCALE_MULTIPLIER;
                timeScaleStore.zoom(scale, coordinate);
                prevProgressBarSpace_1 = progressBarSpace;
            });
            animation.start();
        }
        else {
            timeScaleStore.zoom(difSpace / barSpace * SCALE_MULTIPLIER, coordinate);
        }
    };
    ChartImp.prototype.zoomAtDataIndex = function (scale, dataIndex, animationDuration) {
        var x = this._chartStore.getTimeScaleStore().dataIndexToCoordinate(dataIndex);
        this.zoomAtCoordinate(scale, { x: x, y: 0 }, animationDuration);
    };
    ChartImp.prototype.zoomAtTimestamp = function (scale, timestamp, animationDuration) {
        var dataIndex = binarySearchNearest(this.getDataList(), 'timestamp', timestamp);
        this.zoomAtDataIndex(scale, dataIndex, animationDuration);
    };
    ChartImp.prototype.convertToPixel = function (points, finder) {
        var _a;
        var _b = finder.paneId, paneId = _b === void 0 ? PaneIdConstants.CANDLE : _b, _c = finder.absolute, absolute = _c === void 0 ? false : _c;
        var coordinates = [];
        if (paneId !== PaneIdConstants.X_AXIS) {
            var pane = this.getDrawPaneById(paneId);
            if (pane !== null) {
                var timeScaleStore_1 = this._chartStore.getTimeScaleStore();
                var bounding_1 = pane.getBounding();
                var ps = new Array().concat(points);
                var xAxis_1 = this._xAxisPane.getAxisComponent();
                var yAxis_1 = pane.getAxisComponent();
                coordinates = ps.map(function (point) {
                    var coordinate = {};
                    var dataIndex = point.dataIndex;
                    if (isNumber(point.timestamp)) {
                        dataIndex = timeScaleStore_1.timestampToDataIndex(point.timestamp);
                    }
                    if (isNumber(dataIndex)) {
                        coordinate.x = xAxis_1 === null || xAxis_1 === void 0 ? void 0 : xAxis_1.convertToPixel(dataIndex);
                    }
                    if (isNumber(point.value)) {
                        var y = yAxis_1 === null || yAxis_1 === void 0 ? void 0 : yAxis_1.convertToPixel(point.value);
                        coordinate.y = absolute ? bounding_1.top + y : y;
                    }
                    return coordinate;
                });
            }
        }
        return isArray(points) ? coordinates : ((_a = coordinates[0]) !== null && _a !== void 0 ? _a : {});
    };
    ChartImp.prototype.convertFromPixel = function (coordinates, finder) {
        var _a;
        var _b = finder.paneId, paneId = _b === void 0 ? PaneIdConstants.CANDLE : _b, _c = finder.absolute, absolute = _c === void 0 ? false : _c;
        var points = [];
        if (paneId !== PaneIdConstants.X_AXIS) {
            var pane = this.getDrawPaneById(paneId);
            if (pane !== null) {
                var timeScaleStore_2 = this._chartStore.getTimeScaleStore();
                var bounding_2 = pane.getBounding();
                var cs = new Array().concat(coordinates);
                var xAxis_2 = this._xAxisPane.getAxisComponent();
                var yAxis_2 = pane.getAxisComponent();
                points = cs.map(function (coordinate) {
                    var _a, _b;
                    var point = {};
                    if (isNumber(coordinate.x)) {
                        var dataIndex = (_a = xAxis_2 === null || xAxis_2 === void 0 ? void 0 : xAxis_2.convertFromPixel(coordinate.x)) !== null && _a !== void 0 ? _a : -1;
                        point.dataIndex = dataIndex;
                        point.timestamp = (_b = timeScaleStore_2.dataIndexToTimestamp(dataIndex)) !== null && _b !== void 0 ? _b : undefined;
                    }
                    if (isNumber(coordinate.y)) {
                        var y = absolute ? coordinate.y - bounding_2.top : coordinate.y;
                        point.value = yAxis_2.convertFromPixel(y);
                    }
                    return point;
                });
            }
        }
        return isArray(coordinates) ? points : ((_a = points[0]) !== null && _a !== void 0 ? _a : {});
    };
    ChartImp.prototype.executeAction = function (type, data) {
        var _a;
        switch (type) {
            case exports.ActionType.OnCrosshairChange: {
                var crosshair = __assign({}, data);
                crosshair.paneId = (_a = crosshair.paneId) !== null && _a !== void 0 ? _a : PaneIdConstants.CANDLE;
                this._chartStore.getTooltipStore().setCrosshair(crosshair, { notExecuteAction: true });
                break;
            }
        }
    };
    ChartImp.prototype.subscribeAction = function (type, callback) {
        this._chartStore.getActionStore().subscribe(type, callback);
    };
    ChartImp.prototype.unsubscribeAction = function (type, callback) {
        this._chartStore.getActionStore().unsubscribe(type, callback);
    };
    ChartImp.prototype.getConvertPictureUrl = function (includeOverlay, type, backgroundColor) {
        var _this = this;
        var width = this._chartContainer.clientWidth;
        var height = this._chartContainer.clientHeight;
        var canvas = createDom('canvas', {
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            boxSizing: 'border-box'
        });
        var ctx = canvas.getContext('2d');
        var pixelRatio = getPixelRatio(canvas);
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        ctx.scale(pixelRatio, pixelRatio);
        ctx.fillStyle = backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        var overlayFlag = includeOverlay !== null && includeOverlay !== void 0 ? includeOverlay : false;
        this._drawPanes.forEach(function (pane) {
            var separatorPane = _this._separatorPanes.get(pane);
            if (isValid(separatorPane)) {
                var separatorBounding = separatorPane.getBounding();
                ctx.drawImage(separatorPane.getImage(overlayFlag), separatorBounding.left, separatorBounding.top, separatorBounding.width, separatorBounding.height);
            }
            var bounding = pane.getBounding();
            ctx.drawImage(pane.getImage(overlayFlag), 0, bounding.top, width, bounding.height);
        });
        return canvas.toDataURL("image/".concat(type !== null && type !== void 0 ? type : 'jpeg'));
    };
    ChartImp.prototype.resize = function () {
        this.adjustPaneViewport(true, true, true, true, true);
    };
    ChartImp.prototype.destroy = function () {
        this._chartEvent.destroy();
        this._drawPanes.forEach(function (pane) {
            pane.destroy();
        });
        this._drawPanes = [];
        this._separatorPanes.forEach(function (pane) {
            pane.destroy();
        });
        this._separatorPanes.clear();
        this._container.removeChild(this._chartContainer);
    };
    return ChartImp;
}());

/**
 *       ___           ___                   ___           ___           ___           ___           ___           ___           ___
 *      /\__\         /\__\      ___        /\__\         /\  \         /\  \         /\__\         /\  \         /\  \         /\  \
 *     /:/  /        /:/  /     /\  \      /::|  |       /::\  \       /::\  \       /:/  /        /::\  \       /::\  \        \:\  \
 *    /:/__/        /:/  /      \:\  \    /:|:|  |      /:/\:\  \     /:/\:\  \     /:/__/        /:/\:\  \     /:/\:\  \        \:\  \
 *   /::\__\____   /:/  /       /::\__\  /:/|:|  |__   /::\~\:\  \   /:/  \:\  \   /::\  \ ___   /::\~\:\  \   /::\~\:\  \       /::\  \
 *  /:/\:::::\__\ /:/__/     __/:/\/__/ /:/ |:| /\__\ /:/\:\ \:\__\ /:/__/ \:\__\ /:/\:\  /\__\ /:/\:\ \:\__\ /:/\:\ \:\__\     /:/\:\__\
 *  \/_|:|~~|~    \:\  \    /\/:/  /    \/__|:|/:/  / \:\~\:\ \/__/ \:\  \  \/__/ \/__\:\/:/  / \/__\:\/:/  / \/_|::\/:/  /    /:/  \/__/
 *     |:|  |      \:\  \   \::/__/         |:/:/  /   \:\ \:\__\    \:\  \            \::/  /       \::/  /     |:|::/  /    /:/  /
 *     |:|  |       \:\  \   \:\__\         |::/  /     \:\ \/__/     \:\  \           /:/  /        /:/  /      |:|\/__/     \/__/
 *     |:|  |        \:\__\   \/__/         /:/  /       \:\__\        \:\__\         /:/  /        /:/  /       |:|  |
 *      \|__|         \/__/                 \/__/         \/__/         \/__/         \/__/         \/__/         \|__|
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var instances = new Map();
var chartBaseId = 1;
/**
 * Chart version
 * @return {string}
 */
function version() {
    return '9.8.12';
}
/**
 * Init chart instance
 * @param ds
 * @param options
 * @returns {Chart}
 */
function init(ds, options) {
    logTag();
    var dom;
    if (isString(ds)) {
        dom = document.getElementById(ds);
    }
    else {
        dom = ds;
    }
    if (dom === null) {
        logError('', '', 'The chart cannot be initialized correctly. Please check the parameters. The chart container cannot be null and child elements need to be added!!!');
        return null;
    }
    var chart = instances.get(dom.id);
    if (isValid(chart)) {
        logWarn('', '', 'The chart has been initialized on the dom！！！');
        return chart;
    }
    var id = "k_line_chart_".concat(chartBaseId++);
    chart = new ChartImp(dom, options);
    chart.id = id;
    dom.setAttribute('k-line-chart-id', id);
    instances.set(id, chart);
    return chart;
}
/**
 * Destroy chart instance
 * @param dcs
 */
function dispose(dcs) {
    var _a, _b;
    var id;
    if (dcs instanceof ChartImp) {
        id = dcs.id;
    }
    else {
        var dom = void 0;
        if (isString(dcs)) {
            dom = document.getElementById(dcs);
        }
        else {
            dom = dcs;
        }
        id = (_a = dom === null || dom === void 0 ? void 0 : dom.getAttribute('k-line-chart-id')) !== null && _a !== void 0 ? _a : null;
    }
    if (id !== null) {
        (_b = instances.get(id)) === null || _b === void 0 ? void 0 : _b.destroy();
        instances.delete(id);
    }
}
var utils = {
    clone: clone,
    merge: merge,
    isString: isString,
    isNumber: isNumber,
    isValid: isValid,
    isObject: isObject,
    isArray: isArray,
    isFunction: isFunction,
    isBoolean: isBoolean,
    formatValue: formatValue,
    formatPrecision: formatPrecision,
    formatBigNumber: formatBigNumber,
    formatDate: formatDate,
    formatThousands: formatThousands,
    formatFoldDecimal: formatFoldDecimal,
    calcTextWidth: calcTextWidth,
    getLinearSlopeIntercept: getLinearSlopeIntercept,
    getLinearYFromSlopeIntercept: getLinearYFromSlopeIntercept,
    getLinearYFromCoordinates: getLinearYFromCoordinates,
    checkCoordinateOnArc: checkCoordinateOnArc,
    checkCoordinateOnCircle: checkCoordinateOnCircle,
    checkCoordinateOnLine: checkCoordinateOnLine,
    checkCoordinateOnPolygon: checkCoordinateOnPolygon,
    checkCoordinateOnRect: checkCoordinateOnRect,
    checkCoordinateOnText: checkCoordinateOnText,
    drawArc: drawArc,
    drawCircle: drawCircle,
    drawLine: drawLine,
    drawPolygon: drawPolygon,
    drawRect: drawRect,
    drawText: drawText,
    drawRectText: drawRectText
};

exports.dispose = dispose;
exports.getFigureClass = getFigureClass;
exports.getOverlayClass = getOverlayClass;
exports.getSupportedFigures = getSupportedFigures;
exports.getSupportedIndicators = getSupportedIndicators;
exports.getSupportedLocales = getSupportedLocales;
exports.getSupportedOverlays = getSupportedOverlays;
exports.init = init;
exports.registerFigure = registerFigure;
exports.registerIndicator = registerIndicator;
exports.registerLocale = registerLocale;
exports.registerOverlay = registerOverlay;
exports.registerStyles = registerStyles;
exports.registerXAxis = registerXAxis;
exports.registerYAxis = registerYAxis;
exports.utils = utils;
exports.version = version;

}));
//# sourceMappingURL=klinecharts.js.map

/* ===== When Lambo Giao dịch demo v2: dashboard mô phỏng (tiền ảo, lưu trình duyệt) ===== */
(function () {
if(typeof document==='undefined')return;
const style=document.createElement("style"); style.textContent="/* ===== S\u00e0n \u1ea3o v2 dashboard ===== */\n.dz-shell { margin-top: 1rem; }\n.dz-msg { display: none; margin: 0.5rem 0; padding: 0.6rem 0.9rem; border-radius: 8px; background: rgba(201,162,39,0.15); border: 1px solid #c9a227; font-size: 0.9rem; }\n.dz-msg.show { display: block; }\n.dz-pairhead { display: flex; align-items: center; gap: 1.4rem; flex-wrap: wrap; padding: 0.7rem 1rem; border: 1px solid var(--hairline, #262626); border-radius: 10px; background: var(--paper-2, #161616); }\n.dz-pairname { display: flex; flex-direction: column; }\n.dz-pairname strong { font-size: 1.15rem; color: var(--accent, #c9a227); }\n.dz-pairname small { color: var(--muted, #888); }\n.dz-lastprice { font-size: 1.5rem; font-weight: 700; font-variant-numeric: tabular-nums; }\n.dz-lastprice.up, .up { color: #26a69a; }\n.dz-lastprice.dn, .dn { color: #ef5350; }\n.dz-stat { display: flex; flex-direction: column; font-size: 0.82rem; }\n.dz-stat b { color: var(--muted, #888); font-weight: 500; }\n.dz-stat span { font-variant-numeric: tabular-nums; }\n.dz-grid { display: grid; grid-template-columns: 220px 1fr 250px; gap: 0.8rem; margin-top: 0.8rem; }\n.dz-col h3 { font-size: 0.85rem; margin: 0 0 0.4rem; color: var(--muted, #888); }\n.dz-col h3 small { font-weight: 400; opacity: 0.8; }\n.dz-toolbar { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; }\n.dz-toolbar > div { display: flex; gap: 0.25rem; }\n.dz-tf, .dz-ind, .dz-tool, #dz-clear-draw, .dz-ftab, .dz-tab { background: transparent; border: 1px solid var(--hairline, #2c2c2c); color: var(--ink, #ddd); border-radius: 6px; padding: 0.22rem 0.55rem; font-size: 0.78rem; cursor: pointer; }\n.dz-tf.on, .dz-ind.on, .dz-tool.on, .dz-ftab.on, .dz-tab.on { border-color: var(--accent, #c9a227); color: var(--accent, #c9a227); }\n.dz-chart-wrap { border: 1px solid var(--hairline, #262626); border-radius: 10px; overflow: hidden; background: var(--paper-2, #161616); }\n#dz-chart { position: relative; }\n.dz-pane { border-top: 1px solid var(--hairline, #262626); }\n.dz-dim { color: var(--muted, #888); font-size: 0.82rem; }\n.dz-ob-head, .dz-ob-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.3rem; font-size: 0.78rem; padding: 0.14rem 0.4rem; font-variant-numeric: tabular-nums; }\n.dz-ob-head { color: var(--muted, #888); border-bottom: 1px solid var(--hairline, #262626); margin-bottom: 2px; }\n.dz-ob-row.ask span:first-child { color: #ef5350; }\n.dz-ob-row.bid span:first-child { color: #26a69a; }\n.dz-ob-mid { text-align: center; font-weight: 700; padding: 0.3rem 0; border-block: 1px solid var(--hairline, #262626); margin-block: 2px; }\n.dz-mkrow { width: 100%; background: transparent; border: 0; cursor: pointer; text-align: left; color: inherit; border-radius: 4px; }\n.dz-mkrow:hover { background: rgba(201,162,39,0.08); }\n.dz-mkrow.cur { background: rgba(201,162,39,0.14); outline: 1px solid var(--accent, #c9a227); }\n.dz-mksearch input { width: 100%; margin-bottom: 0.4rem; }\n.dz-form { border: 1px solid var(--hairline, #262626); border-radius: 10px; padding: 0.8rem; margin-top: 0.7rem; background: var(--paper-2, #161616); }\n.dz-side { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; }\n.dz-buy, .dz-sell { border-radius: 6px; padding: 0.5rem; font-weight: 700; cursor: pointer; border: 1px solid var(--hairline, #2c2c2c); background: transparent; color: var(--ink, #ddd); }\n.dz-buy.on { background: #26a69a; border-color: #26a69a; color: #fff; }\n.dz-sell.on { background: #ef5350; border-color: #ef5350; color: #fff; }\n.dz-ftabs { display: flex; gap: 0.3rem; margin: 0.55rem 0; }\n.dz-ffields { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.55rem; align-items: end; }\n.dz-ffields label { display: flex; flex-direction: column; font-size: 0.76rem; color: var(--muted, #888); gap: 0.2rem; }\n.dz-ffields input, .dz-ffields select, .dz-mksearch input { background: var(--paper, #101010); border: 1px solid var(--hairline, #2c2c2c); color: var(--ink, #ddd); border-radius: 6px; padding: 0.4rem 0.5rem; font-size: 0.85rem; }\n.dz-slider { grid-column: 1 / -1; display: flex; align-items: center; gap: 0.6rem; }\n.dz-slider input { flex: 1; accent-color: var(--accent, #c9a227); }\n.dz-slider span { font-size: 0.8rem; min-width: 3ch; }\n.dz-tpsl { grid-column: 1 / -1; display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; }\n.dz-tpsl input[type=\"number\"] { width: 130px; }\n.dz-chk { flex-direction: row !important; align-items: center; gap: 0.3rem !important; }\n#dz-submit { grid-column: 1 / -1; padding: 0.6rem; font-size: 0.95rem; }\n.dz-bottom { margin-top: 0.9rem; border: 1px solid var(--hairline, #262626); border-radius: 10px; background: var(--paper-2, #161616); }\n.dz-tabs { display: flex; gap: 0.3rem; padding: 0.5rem 0.6rem 0; flex-wrap: wrap; }\n.dz-twrap { overflow-x: auto; }\n.dz-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }\n.dz-table th, .dz-table td { padding: 0.45rem 0.6rem; text-align: left; border-bottom: 1px solid var(--hairline, #262626); font-variant-numeric: tabular-nums; white-space: nowrap; }\n.dz-table th { color: var(--muted, #888); font-weight: 500; }\n.dz-close { background: transparent; border: 1px solid var(--hairline, #2c2c2c); color: var(--ink, #ddd); border-radius: 5px; padding: 0.15rem 0.5rem; cursor: pointer; font-size: 0.76rem; }\n.dz-close:hover { border-color: var(--accent, #c9a227); color: var(--accent, #c9a227); }\n.dz-summary { display: flex; gap: 1.4rem; flex-wrap: wrap; margin-top: 0.8rem; padding: 0.7rem 1rem; border: 1px solid var(--hairline, #262626); border-radius: 10px; font-size: 0.9rem; background: var(--paper-2, #161616); align-items: center; }\n.dz-draw-canvas { position: absolute; inset: 0; pointer-events: none; }\n@media (max-width: 980px) {\n  .dz-grid { grid-template-columns: 1fr; }\n  .dz-col-ob, .dz-col-mk { order: 2; }\n  .dz-col-mid { order: 1; }\n}\n"; style.textContent += "body[data-page=demo] #app{max-width:1800px;margin:auto;padding:0 18px 32px}body[data-page=demo] .hero{display:block;padding:18px 0 0;margin:0}.dz-col-mid{min-width:0}.dz-chart-wrap{width:100%}.dz-shell{font-weight:400}.dz-col-mk h3{margin-top:18px}.dz-pairhead{min-height:68px}.dz-inds{flex-wrap:wrap}"; style.textContent+="#dz-f-notional{grid-column:1/-1}.demo-reset{background:transparent;border:1px solid var(--hairline);border-radius:6px;padding:6px 10px;color:var(--ink);cursor:pointer;margin-left:auto}.dz-pane{position:relative}.dz-pane:after{position:absolute;left:10px;top:4px;content:attr(aria-label);font-size:10px;color:var(--muted);pointer-events:none;z-index:2}";document.head.appendChild(style);
const D2_KEY = "wlv_demo_v2";
function d2StoreKey(){return D2_KEY+":"+(window.wlvAuth?.user?.uid||"guest");}
window.addEventListener("wlv-auth-changed",()=>{S=null;if(d2Mounted){d2Load();d2RefreshPanels();d2RenderForm();}});
const D2_START = 10000;
const D2_QUOTES = {};
function d2Available() { return Math.max(0,d2Load().cash-d2Load().orders.reduce((a,o)=>a+o.margin,0)); }
let S = null;

function d2Default() { return { cash: D2_START, positions: [], orders: [], history: [], trades: [], drawings: {}, seq: 1 }; }
function d2Load() {
  if (S) return S;
  try {
    const raw = localStorage.getItem(d2StoreKey());
    if (raw) { const o = JSON.parse(raw); if (o && typeof o.cash === "number") { S = Object.assign(d2Default(), o); return S; } }
  } catch (e) {}
  S = d2Default();
  try { // migrate v1
    const old = window.wlvAuth?.user ? null : JSON.parse(localStorage.getItem("wlv_demo_v1") || "null");
    if (old && typeof old.cash === "number") {
      S.cash = old.cash;
      (old.positions || []).forEach((p) => S.positions.push({ id: S.seq++, key: p.key, pair: p.pair, side: p.side, qty: p.qty, entry: p.entry, notional: p.notional, leverage: 1, margin: p.notional, tp: null, sl: null, at: p.at }));
      (old.history || []).forEach((h) => S.history.push({ pair: h.pair, side: h.side, entry: h.entry, exit: h.exit, pnl: h.pnl, closedAt: h.closedAt, reason: "Đóng tay" }));
    }
  } catch (e) {}
  d2Save();
  return S;
}
function d2Save() { try { localStorage.setItem(d2StoreKey(), JSON.stringify(S)); if(window.wlvAuth?.user&&window.wlvAuth?.synced)window.dispatchEvent(new CustomEvent("wlv-demo-save",{detail:JSON.stringify(S)})); } catch (e) {} }
window.addEventListener("wlv-demo-loaded",e=>{S=e.detail||null;if(d2Mounted){d2Load();d2RefreshPanels();d2RenderForm();}});

/* Tài sản: map sang cặp Kraken để lấy nến; null = không có nến miễn phí */
const D2_INSTR = [
  { key: "XAU", pair: "XAU/USD", name: "Vàng (proxy PAXG)", kraken: "PAXGUSD" },
  { key: "bitcoin", pair: "BTC/USD", name: "Bitcoin", kraken: "XBTUSD" },
  { key: "ethereum", pair: "ETH/USD", name: "Ethereum", kraken: "ETHUSD" },
  { key: "solana", pair: "SOL/USD", name: "Solana", kraken: "SOLUSD" },
  { key: "ripple", pair: "XRP/USD", name: "XRP", kraken: "XRPUSD" },
  { key: "binancecoin", pair: "BNB/USD", name: "BNB", kraken: null },
  { key: "dogecoin", pair: "DOGE/USD", name: "Dogecoin", kraken: "DOGEUSD" },
  { key: "cardano", pair: "ADA/USD", name: "Cardano", kraken: "ADAUSD" },
  { key: "avalanche-2", pair: "AVAX/USD", name: "Avalanche", kraken: "AVAXUSD" },
  { key: "chainlink", pair: "LINK/USD", name: "Chainlink", kraken: "LINKUSD" },
  { key: "polkadot", pair: "DOT/USD", name: "Polkadot", kraken: "DOTUSD" },
  { key: "toncoin", pair: "TON/USD", name: "Toncoin", kraken: "TONUSD" },
  { key: "XAG", pair: "XAG/USD", name: "Bạc", kraken: null },
];
function d2Instr(key) { return D2_INSTR.find((i) => i.key === key); }
function d2Price(key) {
  if (D2_QUOTES[key] && Date.now()-D2_QUOTES[key].at<120000) return D2_QUOTES[key].price;
  if (key === "XAU") return goldSpot && Date.now()-goldSpot.at<180000 ? goldSpot.price : null;
  if (typeof lastUpdate !== "undefined" && lastUpdate && Date.now()-new Date(lastUpdate).getTime()>180000) return null;
  if (key === "XAG") return goldXag || null;
  const t = (tickers || []).find((x) => x.id === key);
  return t ? t.price : null;
}
function d2Chg(key) {
  const t = (tickers || []).find((x) => x.id === key);
  return t ? t.changePct : null;
}
const d2Fmt = (n, d = 2) => Number(n).toLocaleString("vi-VN", { minimumFractionDigits: d, maximumFractionDigits: d });
const d2PFmt = (p) => d2Fmt(p, p < 1 ? 4 : p < 10 ? 3 : 2);
function d2Esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
/* --- Engine: vị thế, lệnh chờ, khớp lệnh, TP/SL, thanh lý --- */
function d2PosValue(p, cur) { return p.side === "long" ? p.qty * cur : Math.max(0, p.qty * (2 * p.entry - cur)); }
function d2PosPnl(p, cur) { return p.side === "long" ? p.qty * (cur - p.entry) : p.qty * (p.entry - cur); }
function d2Equity() {
  const s = d2Load(); let eq = s.cash;
  s.positions.forEach((p) => { const c = d2Price(p.key); eq += p.margin + (c ? d2PosPnl(p, c) : 0); });
  return eq;
}
function d2UsedMargin() { return d2Load().positions.reduce((a, p) => a + p.margin, 0); }
function d2OpenPnl() {
  let v = 0; d2Load().positions.forEach((p) => { const c = d2Price(p.key); if (c) v += d2PosPnl(p, c); });
  return v;
}
function d2OpenPosition(key, side, margin, leverage, price, tp, sl) {
  const s = d2Load();
  const notional = margin * leverage;
  s.cash -= margin;
  s.positions.push({ id: s.seq++, key, pair: d2Instr(key).pair, side, qty: notional / price, entry: price, notional, leverage, margin, tp: tp || null, sl: sl || null, at: Date.now() });
  d2Save();
}
function d2ClosePosition(id, reason) {
  const s = d2Load();
  const i = s.positions.findIndex((p) => p.id === id);
  if (i < 0) return null;
  const p = s.positions[i];
  const c = d2Price(p.key);
  if (!c) return null;
  let pnl = d2PosPnl(p, c);
  if (pnl < -p.margin) pnl = -p.margin;
  s.cash += p.margin + pnl;
  s.positions.splice(i, 1);
  const h = { pair: p.pair, side: p.side, entry: p.entry, exit: c, pnl, closedAt: Date.now(), reason: reason || "Đóng tay", leverage: p.leverage, margin: p.margin };
  s.history.unshift(h);
  s.trades.unshift({ pair: p.pair, side: p.side === "long" ? "Bán đóng" : "Mua đóng", price: c, qty: p.qty, at: Date.now() });
  d2Save();
  return h;
}
function d2PlaceOrder(o) { const s = d2Load(); o.id = s.seq++; o.at = Date.now(); s.orders.push(o); d2Save(); return o.id; }
function d2CancelOrder(id) {
  const s = d2Load();
  const i = s.orders.findIndex((o) => o.id === id);
  if (i < 0) return;
  const o = s.orders[i];
  s.orders.splice(i, 1);
  s.history.unshift({ pair: o.pair, side: o.side, entry: o.price || o.price2 || 0, exit: 0, pnl: 0, closedAt: Date.now(), reason: "Hủy lệnh " + o.type, leverage: o.leverage, margin: 0, canceled: true });
  d2Save();
}
function d2TriggerHit(o, cur) {
  if (o.type === "limit") return o.side === "long" ? cur <= o.price : cur >= o.price;
  if (o.type === "stop") {
    if (!o.triggered && (o.side === "long" ? cur >= o.price : cur <= o.price)) { o.triggered=true; d2Save(); }
    return o.triggered && (o.side === "long" ? cur <= o.limitPrice : cur >= o.limitPrice);
  }
  if (o.type === "oco") {
    if (!o.triggered && (o.side === "short" ? cur >= o.price : cur <= o.price)) return "limit";
    if (!o.triggered && (o.side === "short" ? cur <= o.price2 : cur >= o.price2)) { o.triggered=true; d2Save(); }
    return o.triggered && (o.side === "short" ? cur >= o.limitPrice : cur <= o.limitPrice) ? "stop-limit" : null;
  }
  return null;
}
function d2Tick() {
  const s = d2Load();
  let changed = false;
  for (let i = s.orders.length - 1; i >= 0; i--) {
    const o = s.orders[i];
    const cur = d2Price(o.key);
    if (!cur || !Number.isFinite(cur)) continue;
    const hit = d2TriggerHit(o, cur);
    if (hit) {
      if (o.margin>s.cash) continue;
      s.orders.splice(i, 1);
      d2OpenPosition(o.key, o.side, o.margin, o.leverage, cur, o.tp, o.sl);
      s.trades.unshift({ pair: o.pair, side: o.side === "long" ? "Mua" : "Bán", price: cur, qty: (o.margin * o.leverage) / cur, at: Date.now() });
      d2Msg("Lệnh " + o.type.toUpperCase() + " " + o.pair + " đã khớp tại " + d2PFmt(cur) + " $.");
      changed = true;
    }
  }
  for (let i = s.positions.length - 1; i >= 0; i--) {
    const p = s.positions[i];
    const cur = d2Price(p.key);
    if (!cur || !Number.isFinite(cur)) continue;
    const pnl = d2PosPnl(p, cur);
    if (pnl <= -p.margin * 0.95) { d2ClosePosition(p.id, "Thanh lý (chạm giới hạn ký quỹ)"); d2Msg("Vị thế " + p.pair + " bị thanh lý."); changed = true; continue; }
    if (p.tp && ((p.side === "long" && cur >= p.tp) || (p.side === "short" && cur <= p.tp))) { d2ClosePosition(p.id, "Chốt lời TP"); d2Msg("Vị thế " + p.pair + " chạm TP."); changed = true; continue; }
    if (p.sl && ((p.side === "long" && cur <= p.sl) || (p.side === "short" && cur >= p.sl))) { d2ClosePosition(p.id, "Cắt lỗ SL"); d2Msg("Vị thế " + p.pair + " chạm SL."); changed = true; }
  }
  if (changed) d2Save();
  return changed;
}
/* --- Nến & chỉ báo: Kraken OHLC miễn phí (không cần khóa), tính chỉ báo phía client --- */
const D2_TF = [{l:"5m",m:5}, { l: "15m", m: 15 }, { l: "1h", m: 60 }, { l: "4h", m: 240 }, { l: "1D", m: 1440 }];
let D2C = { chart: null, cs: null, vol: null, key: null, tf: 60, candles: [], indSeries: [], indPanes: [], indicators: { MA: true, VOL: true, RSI: true }, libPromise: null, feedTimer: null, livePriceLine: null, ohlc: null, tool: null, pending: [], drawn: [] };

function d2Lib() {
  if (window.LightweightCharts) return Promise.resolve();
  if (D2C.libPromise) return D2C.libPromise;
  D2C.libPromise = new Promise((res, rej) => {
    const cdns = ["https://unpkg.com/lightweight-charts@4.2.0/dist/lightweight-charts.standalone.production.js", "https://cdn.jsdelivr.net/npm/lightweight-charts@4.2.0/dist/lightweight-charts.standalone.production.js"];
    let i = 0;
    const tryNext = () => {
      if (i >= cdns.length) return rej(new Error("cdn"));
      const s = document.createElement("script");
      s.src = cdns[i++];
      s.onload = () => res();
      s.onerror = tryNext;
      document.head.appendChild(s);
    };
    tryNext();
  });
  return D2C.libPromise;
}
async function d2FetchKlines(krakenPair, minutes) {
  const cacheKey = "wlv_kl_" + krakenPair + "_" + minutes;
  const hit = cacheGet(cacheKey, 55000);
  if (hit) return hit;
  const r = await fetch("https://api.kraken.com/0/public/OHLC?pair=" + encodeURIComponent(krakenPair) + "&interval=" + minutes, { signal: AbortSignal.timeout(12000) });
  if (!r.ok) throw new Error("kraken " + r.status);
  const j = await r.json();
  const k = Object.keys(j.result || {}).find((x) => x !== "last");
  if (!k) throw new Error("empty");
  const data = j.result[k].map((row) => ({ time: row[0], open: +row[1], high: +row[2], low: +row[3], close: +row[4], volume: +row[6] }));
  cacheSet(cacheKey, data, 55000);
  return data;
}
/* Tính toán chỉ báo */
function d2SMA(c, n) { const out = []; let sum = 0; for (let i = 0; i < c.length; i++) { sum += c[i]; if (i >= n) sum -= c[i - n]; out.push(i >= n - 1 ? sum / n : null); } return out; }
function d2EMA(c,n) { const out=[]; let e=0; const k=2/(n+1); for(let i=0;i<c.length;i++){if(i<n){e+=c[i]/n;out.push(i===n-1?e:null);}else{e=c[i]*k+e*(1-k);out.push(e);}}return out; }
function d2BB(c, n, mult) {
  const mid = d2SMA(c, n), up = [], lo = [];
  for (let i = 0; i < c.length; i++) {
    if (mid[i] === null) { up.push(null); lo.push(null); continue; }
    let v = 0; for (let j = i - n + 1; j <= i; j++) v += (c[j] - mid[i]) ** 2;
    const sd = Math.sqrt(v / n); up.push(mid[i] + mult * sd); lo.push(mid[i] - mult * sd);
  }
  return { mid, up, lo };
}
function d2RSI(c, n) {
  const out = new Array(c.length).fill(null); let g = 0, l = 0;
  for (let i = 1; i < c.length; i++) {
    const d = c[i] - c[i - 1], up = Math.max(d, 0), dn = Math.max(-d, 0);
    if (i <= n) { g += up / n; l += dn / n; if (i === n) out[i] = (g===0&&l===0 ? 50 : 100 - 100 / (1 + (l === 0 ? Infinity : g / l))); }
    else { g = (g * (n - 1) + up) / n; l = (l * (n - 1) + dn) / n; out[i] = (g===0&&l===0 ? 50 : 100 - 100 / (1 + (l === 0 ? Infinity : g / l))); }
  }
  return out;
}
function d2MACD(c) {
  const f = d2EMA(c, 12), s = d2EMA(c, 26);
  const macd = c.map((_, i) => (f[i] !== null && s[i] !== null ? f[i] - s[i] : null));
  const valid = macd.filter((x) => x !== null);
  const sigValid = d2EMA(valid, 9);
  const sig = [], hist = [];
  let vi = 0;
  for (let i = 0; i < c.length; i++) {
    if (macd[i] === null) { sig.push(null); hist.push(null); } else { const sv = vi >= 8 ? sigValid[vi] : null; sig.push(sv); hist.push(sv !== null ? macd[i] - sv : null); vi++; }
  }
  return { macd, sig, hist };
}
function d2SuperTrend(candles, n, mult) {
  const out = new Array(candles.length).fill(null);
  let prevUp = null, prevDn = null, prevAtr = null, prevSt = null, prevDir = 1, sumTr=0;
  for (let i = 0; i < candles.length; i++) {
    const c = candles[i];
    const tr = i === 0 ? c.high - c.low : Math.max(c.high - c.low, Math.abs(c.high - candles[i - 1].close), Math.abs(c.low - candles[i - 1].close));
    if(i<n) {sumTr+=tr;if(i<n-1)continue;prevAtr=sumTr/n;} else prevAtr=(prevAtr*(n-1)+tr)/n;
    const mid = (c.high + c.low) / 2;
    let up = mid - mult * prevAtr, dn = mid + mult * prevAtr;
    const pc = candles[i - 1]?.close ?? c.close;
    if (prevUp !== null) { up = pc > prevUp ? Math.max(up, prevUp) : up; dn = pc < prevDn ? Math.min(dn, prevDn) : dn; }
    let dir = prevDir;
    if (prevSt !== null) { if (prevDir === 1 && c.close < prevSt) dir = -1; else if (prevDir === -1 && c.close > prevSt) dir = 1; }
    const st = dir === 1 ? up : dn;
    out[i] = { v: st, dir };
    prevUp = up; prevDn = dn; prevSt = st; prevDir = dir;
  }
  return out;
}
/* --- Dựng chart: trục chính + pane RSI/MACD đồng bộ --- */
function d2Theme() {
  const dark = document.documentElement.dataset.theme !== "light";
  return dark
    ? { bg: "#121212", text: "#9a9a9a", grid: "#1f1f1f", border: "#262626", up: "#26a69a", dn: "#ef5350" }
    : { bg: "#ffffff", text: "#777777", grid: "#f0ece2", border: "#e5e0d6", up: "#1b8a70", dn: "#d13434" };
}
function d2ChartOpts(h) {
  const t = d2Theme();
  return {
    height: h,
    layout: { background: { color: t.bg }, textColor: t.text, fontSize: 11, fontFamily: "Be Vietnam Pro, system-ui, sans-serif" },
    grid: { vertLines: { color: t.grid }, horzLines: { color: t.grid } },
    rightPriceScale: { borderColor: t.border },
    timeScale: { borderColor: t.border, timeVisible: true, secondsVisible: false },
    crosshair: { mode: 0 },
    localization: { locale: "vi-VN" },
  };
}
function d2DestroyCharts() {
  (D2C.panes || []).forEach((p) => { try { p.chart.remove(); } catch (e) {} if(p.el)p.el.remove(); });
  if (D2C.chart) { try { D2C.chart.remove(); } catch (e) {} }
  if(D2C.ro) D2C.ro.disconnect();
  D2C.chart = null; D2C.cs = null; D2C.vol = null; D2C.panes = []; D2C.indSeries = []; D2C.drawn = []; D2C.livePriceLine = null;
}
function d2BuildCharts() {
  d2DestroyCharts();
  const t = d2Theme();
  const main = document.getElementById("dz-chart");
  if (!main) return false;
  D2C.chart = LightweightCharts.createChart(main, d2ChartOpts(430));
  D2C.ro=new ResizeObserver(()=>{if(!D2C.chart)return;D2C.chart.applyOptions({width:main.clientWidth});D2C.panes.forEach(p=>p.chart.applyOptions({width:main.clientWidth}));d2RepaintOverlays();});D2C.ro.observe(main);
  D2C.cs = D2C.chart.addCandlestickSeries({ upColor: t.up, downColor: t.dn, wickUpColor: t.up, wickDownColor: t.dn, borderVisible: false, priceScaleId: "right" });
  D2C.chart.priceScale("right").applyOptions({ scaleMargins: { top: 0.06, bottom: 0.22 } });
  D2C.vol = D2C.chart.addHistogramSeries({ visible:!!D2C.indicators.VOL, priceFormat: { type: "volume" }, priceScaleId: "vol" });
  D2C.chart.priceScale("vol").applyOptions({ scaleMargins: { top: 0.82, bottom: 0 } });
  const syncTo = [];
  const addPane = (id, h) => {
    const host = document.getElementById("dz-panes");
    const el = document.createElement("div");
    el.className = "dz-pane"; el.id = "dz-pane-" + id;el.setAttribute("aria-label",id.toUpperCase());
    host.appendChild(el);
    const ch = LightweightCharts.createChart(el, Object.assign(d2ChartOpts(h), { rightPriceScale: { borderColor: t.border } }));
    D2C.panes.push({ id, chart: ch, el });
    return ch;
  };
  D2C._addPane = addPane;
  return true;
}
function d2Relink() {
  (D2C._subs || []).forEach(({ ch, h }) => { try { ch.timeScale().unsubscribeVisibleLogicalRangeChange(h); } catch (e) {} });
  D2C._subs = [];
  const all = [D2C.chart, ...D2C.panes.map((p) => p.chart)].filter(Boolean);
  let guard = false;
  all.forEach((a) => {
    const h = (r) => { if (guard || !r) return; guard = true; all.forEach((b) => { if (b !== a) { try { b.timeScale().setVisibleLogicalRange(r); } catch (e) {} } }); guard = false; };
    a.timeScale().subscribeVisibleLogicalRangeChange(h);
    D2C._subs.push({ ch: a, h });
  });
}
function d2LineSeries(chart, color, paneScaleMargins, dashed) {
  const s = chart.addLineSeries({ color, lineWidth: 1, priceLineVisible: false, lastValueVisible: false, crosshairMarkerVisible: false, lineStyle: dashed ? LightweightCharts.LineStyle.Dashed : LightweightCharts.LineStyle.Solid });
  return s;
}
function d2ToPoints(times, vals) {
  const out = [];
  for (let i = 0; i < times.length; i++) if (vals[i] !== null && vals[i] !== undefined) out.push({ time: times[i], value: typeof vals[i] === "object" ? vals[i].v : vals[i] });
  return out;
}
function d2ApplyIndicators() {
  D2C.indSeries.forEach((s) => { try { s._ch.removeSeries(s._s); } catch (e) {} });
  D2C.indSeries = [];
  D2C.panes.forEach((p) => { try { p.chart.remove(); } catch (e) {} p.el.remove(); });
  D2C.panes = [];
  if (!D2C.chart || !D2C.candles.length) return;
  const c = D2C.candles;
  const times = c.map((x) => x.time);
  const closes = c.map((x) => x.close);
  const on = D2C.indicators;
  const t = d2Theme();
  const add = (ch, color, pts, dashed) => { const s = d2LineSeries(ch, color, null, dashed); s.setData(pts); D2C.indSeries.push({ _ch: ch, _s: s }); return s; };
  if (on.MA) {
    add(D2C.chart, "#d4a017", d2ToPoints(times, d2SMA(closes, 20)));
    add(D2C.chart, "#8a8a8a", d2ToPoints(times, d2SMA(closes, 50)));
    add(D2C.chart, "#a04040", d2ToPoints(times, d2SMA(closes, 200)));
  }
  if (on.EMA) {
    add(D2C.chart, "#2e8b57", d2ToPoints(times, d2EMA(closes, 21)));
    add(D2C.chart, "#b8860b", d2ToPoints(times, d2EMA(closes, 89)));
  }
  if (on.BOLL) {
    const bb = d2BB(closes, 21, 2);
    add(D2C.chart, "#7a6a3a", d2ToPoints(times, bb.up));
    add(D2C.chart, "#7a6a3a", d2ToPoints(times, bb.mid));
    add(D2C.chart, "#7a6a3a", d2ToPoints(times, bb.lo));
  }
  if (on.ST) {
    const st = d2SuperTrend(c, 10, 3);
    const upPts = [], dnPts = [];
    for (let i = 0; i < c.length; i++) {
      const v = st[i];
      if (!v) continue;
      (v.dir === 1 ? upPts : dnPts).push({ time: times[i], value: v.v });
      if (i > 0 && st[i - 1] && st[i - 1].dir !== v.dir) (v.dir === 1 ? dnPts : upPts).push({ time: times[i], value: v.v });
    }
    add(D2C.chart, "#26a69a", upPts);
    add(D2C.chart, "#ef5350", dnPts);
  }
  if (on.RSI) {
    const ch = D2C._addPane("rsi", 110);
    const rs = add(ch, "#c9a227", d2ToPoints(times, d2RSI(closes, 14)));
    rs.createPriceLine({ price: 70, color: "#ef5350", lineStyle: 2, lineWidth: 1, title: "70" });
    rs.createPriceLine({ price: 30, color: "#26a69a", lineStyle: 2, lineWidth: 1, title: "30" });
    ch.timeScale().setVisibleLogicalRange(D2C.chart.timeScale().getVisibleLogicalRange());
  }
  if (on.MACD) {
    const ch = D2C._addPane("macd", 120);
    const m = d2MACD(closes);
    const hist = ch.addHistogramSeries({ priceLineVisible: false, lastValueVisible: false });
    hist.setData(c.map((x, i) => (m.hist[i] === null ? null : { time: x.time, value: m.hist[i], color: m.hist[i] >= 0 ? t.up : t.dn })).filter(Boolean));
    add(ch, "#d4a017", d2ToPoints(times, m.macd));
    add(ch, "#8a8a8a", d2ToPoints(times, m.sig));
    ch.timeScale().setVisibleLogicalRange(D2C.chart.timeScale().getVisibleLogicalRange());
  }
  d2Relink();
}
/* --- Tải nến, đường giá trực tiếp, công cụ vẽ --- */
async function d2LoadCandles() {
  const st = document.getElementById("dz-chart-status");
  const instr = d2Instr(D2C.key);
  if (!instr.kraken) {
    if(D2C.cs) D2C.cs.setData([]);
    if(D2C.vol) D2C.vol.setData([]);
    if (st) st.textContent = "Chưa có nguồn nến miễn phí cho " + instr.pair + " (chưa tích hợp nguồn nến). Vẫn đặt lệnh theo giá trực tiếp bình thường.";
    D2C.candles = []; d2ApplyIndicators(); d2RedrawDrawings();
    return;
  }
  if (st) st.textContent = "Đang tải nến " + instr.pair + "…";
  const reqKey=D2C.key,reqTf=D2C.tf;
  if(D2C.loadedKey!==reqKey+":"+reqTf){D2C.candles=[];D2C.cs.setData([]);D2C.vol.setData([]);d2ApplyIndicators();}
  try {
    const data = await d2FetchKlines(instr.kraken, reqTf);
    if(reqKey!==D2C.key || reqTf!==D2C.tf) return;
    D2C.loadedKey=reqKey+":"+reqTf;
    D2C.candles = data;
    D2C.cs.setData(data);
    if (D2C.vol) {
      const t = d2Theme();
      D2C.vol.setData(data.map((c) => ({ time: c.time, value: c.volume, color: c.close >= c.open ? t.up : t.dn })));
    }
    D2C.chart.timeScale().setVisibleLogicalRange({from:Math.max(0,data.length-120),to:data.length+4});
    d2ApplyIndicators();
    d2RedrawDrawings();
    if (st) st.textContent = D2C.key === "XAU" ? "Nến PAXG/USD của Kraken chỉ làm tham khảo, không phải nến XAU/USD. Giá đặt lệnh vàng từ Gold API." : "Nến: Kraken. Giá Kraken cập nhật khoảng 60 giây; dữ liệu nến không phải tick-by-tick. Khớp lệnh mô phỏng, không tính phí/trượt giá; chỉ xử lý khi mở trang.";
  } catch (e) {
    if (st) st.textContent = "Không tải được nến (Kraken API). Thử khung giờ khác hoặc tải lại trang.";
  }
}
function d2LiveTick() {
  if (!D2C.cs || !D2C.candles.length || D2C.key === "XAU") return;
  const p = d2Price(D2C.key);
  if (!p) return;
  if (D2C.livePriceLine) { try { D2C.cs.removePriceLine(D2C.livePriceLine); } catch (e) {} }
  D2C.livePriceLine = D2C.cs.createPriceLine({ price: p, color: "#c9a227", lineStyle: 2, lineWidth: 1, title: "" });
}
/* Công cụ vẽ: đường ngang, fib (priceLine), trendline/hộp (canvas phủ) */
function d2DrawingKey() { return D2C.key + ":" + D2C.tf; }
function d2RedrawDrawings() {
  D2C.drawn.forEach((d) => { try { d.kind === "pline" ? D2C.cs.removePriceLine(d.ref) : d.ref.remove(); } catch (e) {} });
  D2C.drawn = [];
  const list = (d2Load().drawings || {})[d2DrawingKey()] || [];
  list.forEach((d) => {
    if (d.type === "hline") {
      D2C.drawn.push({ kind: "pline", ref: D2C.cs.createPriceLine({ price: d.p1.price, color: "#c9a227", lineWidth: 1, lineStyle: 0, title: "HL" }) });
    } else if (d.type === "fib") {
      const lo = Math.min(d.p1.price, d.p2.price), hi = Math.max(d.p1.price, d.p2.price);
      [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1].forEach((f) => {
        D2C.drawn.push({ kind: "pline", ref: D2C.cs.createPriceLine({ price: lo + (hi - lo) * f, color: "rgba(201,162,39,0.55)", lineWidth: 1, lineStyle: 2, title: (f * 100).toFixed(1) + "%" }) });
      });
    } else {
      const cv = document.createElement("canvas");
      cv.className = "dz-draw-canvas";
      document.getElementById("dz-chart").appendChild(cv);
      D2C.drawn.push({ kind: "overlay", ref: cv, d });
      requestAnimationFrame(() => d2PaintOverlay(cv, d));
    }
  });
}
function d2PaintOverlay(cv, d) {
  const host = document.getElementById("dz-chart");
  if (!host || !D2C.chart) return;
  const r = host.getBoundingClientRect();
  cv.width = r.width; cv.height = r.height;
  cv.style.cssText = "position:absolute;inset:0;pointer-events:none;width:" + r.width + "px;height:" + r.height + "px";
  const xy = (p) => {
    const x = D2C.chart.timeScale().timeToCoordinate(p.time);
    const y = D2C.cs.priceToCoordinate(p.price);
    return x === null || y === null ? null : { x, y };
  };
  const a = xy(d.p1), b = xy(d.p2);
  if (!a || !b) return;
  const ctx = cv.getContext("2d");
  ctx.strokeStyle = "#c9a227"; ctx.fillStyle = "rgba(201,162,39,0.12)"; ctx.lineWidth = 1.5;
  if (d.type === "trend") { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
  else if (d.type === "box") {
    const x = Math.min(a.x, b.x), y = Math.min(a.y, b.y), w = Math.abs(b.x - a.x), h = Math.abs(b.y - a.y);
    ctx.fillRect(x, y, w, h); ctx.strokeRect(x, y, w, h);
  }
}
function d2RepaintOverlays() { D2C.drawn.forEach((d) => { if (d.kind === "overlay") d2PaintOverlay(d.ref, d.d); }); }
function d2AddDrawing(d) {
  const s = d2Load();
  s.drawings[d2DrawingKey()] = (s.drawings[d2DrawingKey()] || []).concat([d]);
  d2Save();
  d2RedrawDrawings();
}
function d2ClearDrawings() {
  const s = d2Load();
  s.drawings[d2DrawingKey()] = [];
  d2Save();
  d2RedrawDrawings();
}
/* Click chart khi đang bật công cụ vẽ */
function d2BindDrawing() {
  const host = document.getElementById("dz-chart");
  if (!host) return;
  host.addEventListener("click", (ev) => {
    if (!D2C.tool || !D2C.cs) return;
    const rect = host.getBoundingClientRect();
    const x = ev.clientX - rect.left, y = ev.clientY - rect.top;
    const time = D2C.chart.timeScale().coordinateToTime(x);
    const price = D2C.cs.coordinateToPrice(y);
    if (time === null || price === null) return;
    const p = { time, price };
    if (D2C.tool === "hline") { d2AddDrawing({ type: "hline", p1: p }); D2C.pending = []; d2SetTool(null); }
    else {
      D2C.pending.push(p);
      if (D2C.pending.length === 2) {
        d2AddDrawing({ type: D2C.tool, p1: D2C.pending[0], p2: D2C.pending[1] });
        D2C.pending = [];
        d2SetTool(null);
      } else d2Msg("Chạm điểm thứ hai để hoàn tất hình vẽ.");
    }
  });
}
function d2SetTool(tool) {
  D2C.tool = tool;
  D2C.pending = [];
  document.querySelectorAll(".dz-tool").forEach((b) => b.classList.toggle("on", b.dataset.tool === tool));
  const host = document.getElementById("dz-chart");
  if (host) host.style.cursor = tool ? "crosshair" : "";
}
/* --- Sổ lệnh & khớp lệnh thị trường: MÔ PHỎNG quanh giá thật --- */
function d2SeedRand(seed) { let h = seed >>> 0; return () => { h = (h * 1103515245 + 12345) % 2147483648; return h / 2147483648; }; }
function d2OrderbookHTML(price) {
  if (!price) return '<p class="dz-dim">Chưa có giá.</p>';
  const bucket = Math.floor(Date.now() / 10000);
  const rnd = d2SeedRand(bucket * 2654435761 + D2C.key.length);
  const step = Math.max(price * 0.0004, 1e-6);
  const rows = 12;
  let asks = "", bids = "", cumA = 0, cumB = 0;
  const aRows = [], bRows = [];
  for (let i = rows; i >= 1; i--) { const qty = 0.2 + rnd() * 3.2; cumA += qty; aRows.push({ p: price + step * i, q: qty, cum: cumA }); }
  for (let i = 1; i <= rows; i++) { const qty = 0.2 + rnd() * 3.2; cumB += qty; bRows.push({ p: price - step * i, q: qty, cum: cumB }); }
  asks = aRows.map((r) => '<div class="dz-ob-row ask"><span>' + d2PFmt(r.p) + '</span><span>' + r.q.toFixed(3) + "</span><span>" + r.cum.toFixed(2) + "</span></div>").join("");
  bids = bRows.map((r) => '<div class="dz-ob-row bid"><span>' + d2PFmt(r.p) + '</span><span>' + r.q.toFixed(3) + "</span><span>" + r.cum.toFixed(2) + "</span></div>").join("");
  return '<div class="dz-ob-head"><span>Giá</span><span>SL</span><span>Cộng dồn</span></div>' + asks +
    '<div class="dz-ob-mid">' + d2PFmt(price) + " $</div>" + bids;
}
function d2TradesHTML(price) {
  if (!price) return '<p class="dz-dim">Chưa có giá.</p>';
  const bucket = Math.floor(Date.now() / 3000);
  const rnd = d2SeedRand(bucket * 40503 + D2C.tf);
  const rows = [];
  for (let i = 0; i < 16; i++) {
    const t = new Date(Date.now() - i * (1000 + rnd() * 4000));
    const side = rnd() > 0.5;
    const p = price * (1 + (rnd() - 0.5) * 0.0008);
    rows.push('<div class="dz-ob-row ' + (side ? "bid" : "ask") + '"><span>' + d2PFmt(p) + "</span><span>" + (0.01 + rnd() * 1.4).toFixed(3) + "</span><span>" + t.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) + "</span></div>");
  }
  return '<div class="dz-ob-head"><span>Giá</span><span>SL</span><span>Giờ</span></div>' + rows.join("");
}
/* --- Header cặp giao dịch: giá + thống kê 24h (Kraken Ticker khi có) --- */
async function d2FetchTicker(krakenPair) {
  const cacheKey = "wlv_tk_" + krakenPair;
  const hit = cacheGet(cacheKey, 55000);
  if (hit) return hit;
  const r = await fetch("https://api.kraken.com/0/public/Ticker?pair=" + encodeURIComponent(krakenPair), { signal: AbortSignal.timeout(10000) });
  if (!r.ok) throw new Error("ticker");
  const j = await r.json();
  const k = Object.keys(j.result || {})[0];
  const d = j.result[k];
  const out = { last: +d.c[0], open24: +d.o, high: +d.h[1], low: +d.l[1], vol: +d.v[1] };
  cacheSet(cacheKey, out, 30000);
  return out;
}
async function d2RefreshOrderQuotes() {
  const s=d2Load();const keys=[...new Set([...s.positions,...s.orders].map(x=>x.key))].filter(k=>k!==D2C.key);
  for(const key of keys){try{
    const ins=d2Instr(key);if(!ins)continue;
    if(key==="XAU"||key==="XAG"){
      const r=await fetch("https://api.gold-api.com/price/"+key,{signal:AbortSignal.timeout(10000)});if(!r.ok)continue;const j=await r.json();if(j.price>0)D2_QUOTES[key]={price:j.price,at:Date.now()};
    }else if(ins.kraken){const q=await d2FetchTicker(ins.kraken);if(q.last>0)D2_QUOTES[key]={price:q.last,at:Date.now()};}
  }catch(e){}}
  if(d2Mounted){d2Tick();d2RefreshPanels();}
}
async function d2RenderHeader() {
  const el = document.getElementById("dz-pairhead");
  if (!el) return;
  const headerKey = D2C.key;
  const instr = d2Instr(headerKey);
  if(el.dataset.key!==headerKey){el.dataset.key=headerKey;el.innerHTML='<div class="dz-pairname"><strong>'+d2Esc(instr.pair)+'</strong><small>'+d2Esc(instr.name)+'</small></div><span class="dz-dim">Đang cập nhật giá…</span>';}
  let p = d2Price(D2C.key);
  let chg = d2Chg(D2C.key), hi = null, lo = null, vol = null;
  if(headerKey==="XAU"||headerKey==="XAG") {
    try {
      const cached=D2_QUOTES[headerKey];
      if(!cached||Date.now()-cached.at>55000){
        const r=await fetch("https://api.gold-api.com/price/"+headerKey,{signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error("metal");const j=await r.json();
        if(j.price>0) D2_QUOTES[headerKey]={price:j.price,at:Date.now()};
      }
      if(headerKey!==D2C.key)return;
      p=d2Price(headerKey);
    }catch(e){}
  }
  if (instr.kraken) {
    try {
      const tk = await d2FetchTicker(instr.kraken);
      if(headerKey!==D2C.key)return;
      hi = tk.high; lo = tk.low; vol = tk.vol;
      if(headerKey!=="XAU") { D2_QUOTES[headerKey]={price:tk.last,at:Date.now()}; p=tk.last; }
    } catch (e) {}
  }
  if(headerKey!==D2C.key)return;
  const cls = chg === null || chg === undefined ? "" : chg >= 0 ? "up" : "dn";
  const stat = (l, v) => '<div class="dz-stat"><b>' + l + "</b><span>" + v + "</span></div>";
  el.innerHTML =
    '<div class="dz-pairname"><strong>' + d2Esc(instr.pair) + "</strong><small>" + d2Esc(instr.name) + "</small></div>" +
    '<div class="dz-lastprice ' + cls + '">' + (p ? d2PFmt(p) : "—") + "</div>" +
    stat("24h %", chg === null || chg === undefined ? "—" : '<span class="' + cls + '">' + (chg >= 0 ? "+" : "") + chg.toFixed(2) + "%</span>") +
    stat(D2C.key === "XAU" ? "PAXG cao 24h" : "Cao 24h", hi ? d2PFmt(hi) : "—") +
    stat(D2C.key === "XAU" ? "PAXG thấp 24h" : "Thấp 24h", lo ? d2PFmt(lo) : "—") +
    stat(D2C.key === "XAU" ? "PAXG KL 24h" : "KL 24h", vol ? d2Fmt(vol, vol > 1000 ? 0 : 2) : "—");
}
/* --- Giao diện dashboard --- */
function d2Msg(text) {
  const el = document.getElementById("dz-msg");
  if (!el) return;
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(d2Msg._t);
  d2Msg._t = setTimeout(() => el.classList.remove("show"), 4200);
}
function d2ShellHTML() {
  return (
    '<div class="dz-shell">' +
    '<div id="dz-msg" class="dz-msg"></div>' +
    '<div id="dz-pairhead" class="dz-pairhead"></div>' +
    '<div class="dz-grid">' +
    '<aside class="dz-col dz-col-ob"><h3>Sổ lệnh <small>(mô phỏng quanh giá thật)</small></h3><div id="dz-orderbook"></div></aside>' +
    '<div class="dz-col dz-col-mid">' +
    '<div class="dz-toolbar">' +
    '<div class="dz-tfs">' + D2_TF.map((t) => '<button class="dz-tf' + (t.m === D2C.tf ? " on" : "") + '" data-tf="' + t.m + '">' + t.l + "</button>").join("") + "</div>" +
    '<div class="dz-inds">' + ["MA", "EMA", "BOLL", "ST", "VOL", "RSI", "MACD"].map((n) => '<button class="dz-ind' + (D2C.indicators[n] ? " on" : "") + '" data-ind="' + n + '">' + (n === "ST" ? "SuperTrend" : n) + "</button>").join("") + "</div>" +
    '<div class="dz-tools">' +
    '<button class="dz-tool" data-tool="hline" title="Đường ngang">—</button>' +
    '<button class="dz-tool" data-tool="trend" title="Đường xu hướng">╱</button>' +
    '<button class="dz-tool" data-tool="box" title="Hộp">▭</button>' +
    '<button class="dz-tool" data-tool="fib" title="Fibonacci">𝑓</button>' +
    '<button id="dz-clear-draw" title="Xóa hình vẽ">✕</button>' +
    "</div>" +
    "</div>" +
    '<div class="dz-chart-wrap"><div id="dz-chart"></div><div id="dz-panes"></div></div>' +
    '<p id="dz-chart-status" class="dz-dim"></p>' +
    '<div id="dz-orderform"></div>' +
    "</div>" +
    '<aside class="dz-col dz-col-mk">' +
    '<div class="dz-mksearch"><input id="dz-search" type="search" placeholder="Tìm cặp…" autocomplete="off"></div>' +
    '<div id="dz-markets"></div>' +
    '<h3>Giao dịch thị trường <small>(mô phỏng)</small></h3><div id="dz-trades"></div>' +
    "</aside>" +
    "</div>" +
    '<div class="dz-bottom">' +
    '<div class="dz-tabs" id="dz-tabs">' +
    ["pos:Vị thế mở", "ord:Lệnh chờ", "hist:Lịch sử lệnh", "fills:Lịch sử khớp", "assets:Tài sản"].map((t, i) => {
      const [k, l] = t.split(":");
      return '<button class="dz-tab' + (i === 0 ? " on" : "") + '" data-tab="' + k + '">' + l + "</button>";
    }).join("") +
    "</div>" +
    '<div id="dz-panel"></div>' +
    "</div>" +
    '<div class="dz-summary" id="dz-summary"></div>' +
    "</div>"
  );
}
function d2RenderSummary() {
  const el = document.getElementById("dz-summary");
  if (!el) return;
  const s = d2Load();
  const eq = d2Equity();
  const pnl = d2OpenPnl();
  const cls = pnl >= 0 ? "up" : "dn";
  el.innerHTML =
    "<span>Số dư khả dụng: <b>" + d2Fmt(d2Available()) + " $</b></span>" +
    "<span>Ký quỹ đang dùng: <b>" + d2Fmt(d2UsedMargin()) + " $</b></span>" +
    '<span>PNL vị thế mở: <b class="' + cls + '">' + (pnl >= 0 ? "+" : "") + d2Fmt(pnl) + " $</b></span>" +
    "<span>Giữ cho lệnh chờ: <b>" + d2Fmt(s.orders.reduce((a,o)=>a+o.margin,0)) + " $</b></span>" +
    "<span>Tổng tài sản ảo: <b>" + d2Fmt(eq) + " $</b></span>" +
    '<button id="dz-reset" class="demo-reset">↺ Reset 10.000 $</button>';
}
function d2RenderMarkets() {
  const el = document.getElementById("dz-markets");
  if (!el) return;
  const q = ((document.getElementById("dz-search") || {}).value || "").toLowerCase();
  el.innerHTML = '<div class="dz-ob-head"><span>Cặp</span><span>Giá</span><span>24h%</span></div>' + D2_INSTR
    .filter((i) => !q || i.pair.toLowerCase().includes(q) || i.name.toLowerCase().includes(q))
    .map((i) => {
      const p = d2Price(i.key);
      const chg = d2Chg(i.key);
      const cls = chg === null || chg === undefined ? "" : chg >= 0 ? "bid" : "ask";
      return '<button class="dz-ob-row dz-mkrow ' + (i.key === D2C.key ? "cur " : "") + cls + '" data-key="' + i.key + '"><span>' + d2Esc(i.pair) + "</span><span>" + (p ? d2PFmt(p) : "—") + "</span><span>" + (chg === null || chg === undefined ? "—" : (chg >= 0 ? "+" : "") + chg.toFixed(2) + "%") + "</span></button>";
    }).join("");
}
function d2RenderObTrades() {
  const ob = document.getElementById("dz-orderbook");
  const tr = document.getElementById("dz-trades");
  const p = d2Price(D2C.key);
  if (ob) ob.innerHTML = d2OrderbookHTML(p);
  if (tr) tr.innerHTML = d2TradesHTML(p);
}
/* --- Form đặt lệnh --- */
const D2F = { side: "long", type: "market", pct: 0, tab: "pos" };
function d2FormHTML() {
  const instr = d2Instr(D2C.key);
  const p = d2Price(D2C.key) || 0;
  const s = d2Load();
  const typeTabs = [["market", "Market"], ["limit", "Limit"], ["stop", "Stop Limit"], ["oco", "OCO"]]
    .map(([k, l]) => '<button class="dz-ftab' + (D2F.type === k ? " on" : "") + '" data-ftype="' + k + '">' + l + "</button>").join("");
  const priceFields =
    (D2F.type === "limit" ? '<label>Giá limit<input id="dz-f-price" type="number" step="any" value="' + p + '"></label>' : "") +
    (D2F.type === "stop" ? '<label>Giá kích hoạt<input id="dz-f-price" type="number" step="any" placeholder="Giá stop"></label><label>Giá limit sau kích hoạt<input id="dz-f-limit" type="number" step="any"></label>' : "") +
    (D2F.type === "oco" ? '<label>Giá limit<input id="dz-f-price" type="number" step="any"></label><label>Giá kích hoạt stop<input id="dz-f-price2" type="number" step="any"></label><label>Giá limit nhánh stop<input id="dz-f-limit" type="number" step="any"></label>' : "");
  return (
    '<div class="dz-form">' +
    '<div class="dz-side">' +
    '<button class="dz-buy' + (D2F.side === "long" ? " on" : "") + '" data-side="long">Mua / Long</button>' +
    '<button class="dz-sell' + (D2F.side === "short" ? " on" : "") + '" data-side="short">Bán / Short</button>' +
    "</div>" +
    '<div class="dz-ftabs">' + typeTabs + "</div>" +
    '<div class="dz-ffields">' +
    '<label>Cặp<input value="' + d2Esc(instr.pair) + '" disabled></label>' +
    priceFields +
    '<label>Ký quỹ ($)<input id="dz-f-margin" type="number" min="10" step="10" value="100"></label>' +
    '<div class="dz-slider"><input id="dz-f-pct" type="range" min="0" max="100" value="0"><span id="dz-f-pct-lab">0%</span></div>' +
    '<label>Đòn bẩy<select id="dz-f-lev">' + [1, 2, 3, 5, 10].map((l) => "<option" + (l === 1 ? " selected" : "") + ">" + l + "x</option>").join("") + "</select></label>" +
    '<div class="dz-tpsl"><label class="dz-chk"><input type="checkbox" id="dz-f-tp-on">TP</label><input id="dz-f-tp" type="number" step="any" placeholder="Giá TP" disabled>' +
    '<label class="dz-chk"><input type="checkbox" id="dz-f-sl-on">SL</label><input id="dz-f-sl" type="number" step="any" placeholder="Giá SL" disabled></div>' +
    '<p class="dz-dim" id="dz-f-notional"></p>' +
    '<button id="dz-submit" class="' + (D2F.side === "long" ? "dz-buy on" : "dz-sell on") + '">' + (D2F.side === "long" ? "Mua " : "Bán ") + d2Esc(instr.pair) + "</button>" +
    "</div></div>"
  );
}
function d2FormNotional() {
  const m = +((document.getElementById("dz-f-margin") || {}).value || 0);
  const lev = parseFloat((document.getElementById("dz-f-lev") || {}).value) || 1;
  const el = document.getElementById("dz-f-notional");
  if (el) el.textContent = m > 0 ? "Volume vào lệnh: " + d2Fmt(m * lev) + " $ (" + lev + "x) · Khả dụng: " + d2Fmt(d2Available()) + " $" : "";
}
function d2Submit() {
  if(!window.wlvAuth?.user||!window.wlvAuth?.synced){document.getElementById("wlv-auth-panel")?.scrollIntoView({behavior:"smooth",block:"center"});return d2Msg("Đăng nhập Google và đồng ý lưu thông tin tài khoản trước khi đặt lệnh demo.");}
  const instr = d2Instr(D2C.key);
  const cur = d2Price(D2C.key);
  if (!cur) return d2Msg("Chưa có giá trực tiếp cho " + instr.pair + ".");
  const num = (id) => { const el = document.getElementById(id); const v = el ? parseFloat(el.value) : NaN; return isNaN(v) ? null : v; };
  const margin = num("dz-f-margin");
  const lev = num("dz-f-lev") || 1;
  if (!margin || margin < 10) return d2Msg("Ký quỹ tối thiểu 10 $.");
  if (margin > d2Available()) return d2Msg("Không đủ số dư khả dụng.");
  const tpOn = (document.getElementById("dz-f-tp-on") || {}).checked;
  const slOn = (document.getElementById("dz-f-sl-on") || {}).checked;
  const tp = tpOn ? num("dz-f-tp") : null;
  const sl = slOn ? num("dz-f-sl") : null;
  if (tpOn && !(tp>0)) return d2Msg("Nhập giá TP hoặc bỏ chọn TP.");
  if (slOn && !(sl>0)) return d2Msg("Nhập giá SL hoặc bỏ chọn SL.");
  const badDir = (x, isTp) => (D2F.side === "long" ? (isTp ? x <= cur : x >= cur) : (isTp ? x >= cur : x <= cur));
  if (tp && badDir(tp, true)) return d2Msg("Giá TP sai hướng so với vị thế " + (D2F.side === "long" ? "Long" : "Short") + ".");
  if (sl && badDir(sl, false)) return d2Msg("Giá SL sai hướng so với vị thế " + (D2F.side === "long" ? "Long" : "Short") + ".");
  const base = { key: D2C.key, pair: instr.pair, side: D2F.side, margin, leverage: lev, tp, sl };
  if (D2F.type === "market") {
    d2OpenPosition(D2C.key, D2F.side, margin, lev, cur, tp, sl);
    const s = d2Load();
    s.trades.unshift({ pair: instr.pair, side: D2F.side === "long" ? "Mua" : "Bán", price: cur, qty: (margin * lev) / cur, at: Date.now() });
    d2Save();
    d2Msg("Đã mở vị thế " + (D2F.side === "long" ? "Long" : "Short") + " " + instr.pair + " tại " + d2PFmt(cur) + " $.");
  } else {
    const p1 = num("dz-f-price");
    const p2 = num("dz-f-price2");
    const limitPrice = num("dz-f-limit");
    if ((D2F.type==="stop"||D2F.type==="oco") && !(limitPrice>0)) return d2Msg("Nhập giá limit sau kích hoạt stop.");
    if (D2F.type === "oco") {
      if (!(p1>0) || !(p2>0)) return d2Msg("OCO cần cả giá limit và giá stop.");
      if (p1 === p2) return d2Msg("Giá limit và stop phải khác nhau.");
      if (D2F.side === "short" && !(p1 > cur && p2 < cur)) return d2Msg("OCO bán: giá limit phải trên giá hiện tại, giá stop dưới giá hiện tại.");
      if (D2F.side === "long" && !(p1 < cur && p2 > cur)) return d2Msg("OCO mua: giá limit phải dưới giá hiện tại, giá stop trên giá hiện tại.");
      d2PlaceOrder(Object.assign(base, { type: "oco", price: p1, price2: p2, limitPrice }));
    } else {
      if (!(p1>0)) return d2Msg("Nhập giá đặt lệnh.");
      if (D2F.type === "limit") {
        if (D2F.side === "long" && p1 >= cur) return d2Msg("Limit mua phải dưới giá hiện tại (hoặc dùng Market).");
        if (D2F.side === "short" && p1 <= cur) return d2Msg("Limit bán phải trên giá hiện tại (hoặc dùng Market).");
        d2PlaceOrder(Object.assign(base, { type: "limit", price: p1 }));
      } else {
        if (D2F.side === "long" && p1 <= cur) return d2Msg("Stop mua phải trên giá hiện tại.");
        if (D2F.side === "short" && p1 >= cur) return d2Msg("Stop bán phải dưới giá hiện tại.");
        d2PlaceOrder(Object.assign(base, { type: "stop", price: p1, limitPrice }));
      }
    }
    d2Msg("Đã đặt lệnh " + (D2F.type === "stop" ? "STOP LIMIT" : D2F.type.toUpperCase()) + " " + instr.pair + ". Sẽ khớp khi giá chạm mức đặt.");
  }
  d2RefreshPanels();
}
/* --- Bảng dưới: vị thế, lệnh chờ, lịch sử, tài sản --- */
function d2Table(head, rows) {
  return '<div class="dz-twrap"><table class="dz-table"><thead><tr>' + head.map((h) => "<th>" + h + "</th>").join("") + "</tr></thead><tbody>" +
    (rows.length ? rows.join("") : '<tr><td colspan="' + head.length + '" class="dz-dim">Chưa có dữ liệu.</td></tr>') + "</tbody></table></div>";
}
function d2RenderPanel() {
  const el = document.getElementById("dz-panel");
  if (!el) return;
  const s = d2Load();
  const fmtT = (t) => new Date(t).toLocaleString("vi-VN", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" });
  if (D2F.tab === "pos") {
    el.innerHTML = d2Table(["Cặp", "Phía", "Volume vào lệnh", "Giá vào", "Giá hiện tại", "Ký quỹ", "ĐB", "TP/SL", "PNL", ""], s.positions.map((p) => {
      const cur = d2Price(p.key);
      const pnl = cur ? d2PosPnl(p, cur) : null;
      return "<tr><td>" + d2Esc(p.pair) + "</td><td>" + (p.side === "long" ? '<b class="up">Long</b>' : '<b class="dn">Short</b>') + "</td><td>" + d2Fmt(p.notional) + " $</td><td>" + d2PFmt(p.entry) + "</td><td>" + (cur ? d2PFmt(cur) : "—") + "</td><td>" + d2Fmt(p.margin) + "</td><td>" + p.leverage + "x</td><td>" + (p.tp ? d2PFmt(p.tp) : "—") + " / " + (p.sl ? d2PFmt(p.sl) : "—") + '</td><td class="' + (pnl >= 0 ? "up" : "dn") + '">' + (pnl === null ? 'Chưa có giá' : (pnl >= 0 ? '+' : '') + d2Fmt(pnl) + ' $') + '</td><td><button class="dz-close" data-close="' + p.id + '">Đóng</button></td></tr>';
    }));
  } else if (D2F.tab === "ord") {
    el.innerHTML = d2Table(["Cặp", "Loại", "Phía", "Giá đặt", "Giá stop", "Ký quỹ", "ĐB", "TP/SL", "Đặt lúc", ""], s.orders.map((o) =>
      "<tr><td>" + d2Esc(o.pair) + "</td><td>" + (o.type === "stop" ? "STOP LIMIT" : o.type.toUpperCase()) + (o.triggered ? " (đã kích hoạt)" : "") + (o.limitPrice ? " · limit " + d2PFmt(o.limitPrice) : "") + "</td><td>" + (o.side === "long" ? "Long" : "Short") + "</td><td>" + d2PFmt(o.price) + "</td><td>" + (o.price2 ? d2PFmt(o.price2) : "—") + "</td><td>" + d2Fmt(o.margin) + "</td><td>" + o.leverage + "x</td><td>" + (o.tp ? d2PFmt(o.tp) : "—") + " / " + (o.sl ? d2PFmt(o.sl) : "—") + "</td><td>" + fmtT(o.at) + '</td><td><button class="dz-close" data-cancel="' + o.id + '">Hủy</button></td></tr>'));
  } else if (D2F.tab === "hist") {
    el.innerHTML = d2Table(["Cặp", "Phía", "Giá vào", "Giá ra", "PNL", "Lý do", "Đóng lúc"], s.history.map((h) =>
      "<tr><td>" + d2Esc(h.pair) + "</td><td>" + (h.side === "long" ? "Long" : "Short") + "</td><td>" + (h.canceled ? "—" : d2PFmt(h.entry)) + "</td><td>" + (h.canceled ? "—" : d2PFmt(h.exit)) + '</td><td class="' + (h.pnl >= 0 ? "up" : "dn") + '">' + (h.canceled ? "—" : (h.pnl >= 0 ? "+" : "") + d2Fmt(h.pnl) + " $") + "</td><td>" + d2Esc(h.reason) + "</td><td>" + fmtT(h.closedAt) + "</td></tr>"));
  } else if (D2F.tab === "fills") {
    el.innerHTML = d2Table(["Cặp", "Lệnh", "Giá", "Khối lượng", "Thời gian"], s.trades.slice(0, 60).map((t) =>
      "<tr><td>" + d2Esc(t.pair) + "</td><td>" + d2Esc(t.side) + "</td><td>" + d2PFmt(t.price) + "</td><td>" + d2Fmt(t.qty, t.qty < 1 ? 4 : 2) + "</td><td>" + fmtT(t.at) + "</td></tr>"));
  } else {
    const rows = [...new Map([...D2_INSTR,...s.positions.map(p=>d2Instr(p.key)).filter(Boolean)].map(i=>[i.key,i])).values()].map((i) => {
      const pos = s.positions.filter((p) => p.key === i.key);
      if (!pos.length) return null;
      const net = pos.reduce((a, p) => a + (p.side === "long" ? p.qty : -p.qty), 0);
      const cur = d2Price(i.key);
      const val = cur ? net * cur : 0;
      return "<tr><td>" + d2Esc(i.pair) + "</td><td>" + d2Fmt(net, Math.abs(net) < 1 ? 4 : 2) + "</td><td>" + (cur ? d2Fmt(val) + " $" : "—") + "</td><td>" + pos.length + "</td></tr>";
    }).filter(Boolean);
    rows.unshift("<tr><td>USD (khả dụng)</td><td>—</td><td>" + d2Fmt(d2Available()) + " $</td><td>—</td></tr>");
    el.innerHTML = d2Table(["Tài sản", "Số lượng ròng", "Giá trị", "Vị thế"], rows);
  }
}
function d2RefreshPanels() {
  d2RenderSummary();
  const missing=d2Load().positions.filter(p=>!d2Price(p.key));
  if(missing.length){const el=document.getElementById('dz-summary');if(el){el.querySelectorAll('b').forEach(x=>{if(x.parentElement.textContent.includes('PNL')||x.parentElement.textContent.includes('Tổng tài sản'))x.textContent='Chưa đủ giá'});el.insertAdjacentHTML('beforeend','<p class="dz-dim">'+missing.length+' vị thế thiếu giá hiện tại. Không tính được PNL và tổng tài sản đầy đủ; lệnh tự động cho các mã đó đang chờ dữ liệu.</p>')}}
  d2RenderPanel();
  d2FormNotional();
}
/* --- Mount: dựng shell, chart, vòng lặp cập nhật --- */
let d2Mounted = false;
let d2Binding=null,d2MountEpoch=0;
function d2Listen(root,type,callback){root.addEventListener(type,callback,{signal:d2Binding.signal})}
let d2Timers = [];
function d2Unmount() {
  d2MountEpoch++; d2Binding?.abort();
  d2Timers.forEach(clearInterval);
  d2Timers = [];
  d2Mounted = false;
  d2DestroyCharts();
}
function d2Bind() {
  const root = document.getElementById("dz-shell-root");
  if (!root) return;
  d2Listen(root,"click", (ev) => {
    const b = ev.target.closest("button");
    if (!b) return;
    if (b.dataset.tf) { D2C.tf = b.dataset.tf; document.querySelectorAll(".dz-tf").forEach((x) => x.classList.toggle("on", x.dataset.tf === D2C.tf)); d2LoadCandles(); }
    else if (b.dataset.ind) {
      const n = b.dataset.ind;
      D2C.indicators[n] = !D2C.indicators[n];
      b.classList.toggle("on", D2C.indicators[n]);
      if (n === "VOL") { D2C.vol.applyOptions({ visible: D2C.indicators.VOL }); } else d2ApplyIndicators();
    }
    else if (b.dataset.tool !== undefined && b.classList.contains("dz-tool")) d2SetTool(b.dataset.tool === D2C.tool ? null : b.dataset.tool);
    else if (b.id === "dz-clear-draw") d2ClearDrawings();
    else if (b.dataset.side) { D2F.side = b.dataset.side; d2RenderForm(); }
    else if (b.dataset.ftype) { D2F.type = b.dataset.ftype; d2RenderForm(); }
    else if (b.id === "dz-submit") d2Submit();
    else if (b.dataset.close) { d2ClosePosition(+b.dataset.close, "Đóng tay"); d2RefreshPanels(); }
    else if (b.dataset.cancel) { d2CancelOrder(+b.dataset.cancel); d2RefreshPanels(); }
    else if (b.dataset.key) { D2C.key = b.dataset.key; d2SwitchPair(); }
    else if (b.dataset.tab) { D2F.tab = b.dataset.tab; document.querySelectorAll(".dz-tab").forEach((x) => x.classList.toggle("on", x.dataset.tab === D2F.tab)); d2RenderPanel(); }
    else if (b.id === "dz-reset") {
      if(!confirm("Xóa toàn bộ lệnh, lịch sử và hình vẽ để đặt lại 10.000 USD ảo?")) return;
      S = d2Default();
      d2Save();
      d2RedrawDrawings();
      d2RefreshPanels();
      d2Msg("Đã reset về 10.000 $ ảo.");
    }
  });
  d2Listen(root,"input", (ev) => {
    if (ev.target.id === "dz-search") d2RenderMarkets();
    if (ev.target.id === "dz-f-margin") d2FormNotional();
    if (ev.target.id === "dz-f-pct") {
      const pct = +ev.target.value;
      const lab = document.getElementById("dz-f-pct-lab");
      if (lab) lab.textContent = pct + "%";
      const m = document.getElementById("dz-f-margin");
      if (m) { m.value = Math.max(0, Math.floor(d2Available() * pct / 100)); d2FormNotional(); }
    }
  });
  d2Listen(root,"change", (ev) => {
    if (ev.target.id === "dz-f-lev") d2FormNotional();
    if (ev.target.id === "dz-f-tp-on") { const i = document.getElementById("dz-f-tp"); if (i) i.disabled = !ev.target.checked; }
    if (ev.target.id === "dz-f-sl-on") { const i = document.getElementById("dz-f-sl"); if (i) i.disabled = !ev.target.checked; }
  });
}
function d2RenderForm() {
  const el = document.getElementById("dz-orderform");
  if (el) el.innerHTML = d2FormHTML();
  d2FormNotional();
}
async function d2SwitchPair() {
  d2RenderHeader();
  d2RenderForm();
  d2RenderMarkets();
  d2RenderObTrades();
  await d2LoadCandles();
}
async function d2Mount() {
  const root = document.getElementById("dz-shell-root");
  if (!root) return;
  if (!d2Mounted) {
    d2Mounted = true;
    const epoch=++d2MountEpoch;d2Binding?.abort();d2Binding=new AbortController();
    d2Load();
    D2C.key = D2C.key || "BTCUSDT";
    root.innerHTML = d2ShellHTML();
    d2Bind();
    d2RenderHeader();
    d2RenderForm();
    d2RenderMarkets();
    d2RenderObTrades();
    d2RefreshPanels();
    try {
      await d2Lib();
      if(epoch!==d2MountEpoch||!d2Mounted)return;
      d2BuildCharts();
      /* overlays handled by KLineCharts */
      await d2LoadCandles();

    } catch (e) {
      const st = document.getElementById("dz-chart-status");
      if (st) st.textContent = "Không tải được thư viện đồ thị. Kiểm tra mạng rồi tải lại trang.";
    }
    if(epoch!==d2MountEpoch||!d2Mounted)return;
    d2Timers.push(setInterval(() => { d2Tick(); d2RenderObTrades(); d2RefreshPanels(); d2LiveTick(); }, 5000));
    d2Timers.push(setInterval(d2RenderHeader, 60000));
    d2RefreshOrderQuotes();
    d2Timers.push(setInterval(d2RefreshOrderQuotes, 60000));
    d2Timers.push(setInterval(d2LoadCandles, 60000));
    d2Timers.push(setInterval(d2RenderMarkets, 15000));
  }
}
new MutationObserver(()=>{if(d2Mounted && globalThis.klinecharts){d2BuildCharts();d2LoadCandles();}}).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme"]});
/* Own When Lambo interface. Chart engine: KLineCharts, Apache-2.0. */
const D3={chart:null, market:'crypto', tab:'chart', selected:null, overlays:[], hidden:false, locked:false, magnet:false, panes:[], request:0, source:'', book:null,trades:[], ticker:null};
const D3_OLD=D2_INSTR.slice();
const D3_CRYPTO=[['bitcoin','BTC','Bitcoin'],['ethereum','ETH','Ethereum'],['solana','SOL','Solana'],['sui','SUI','Sui'],['zcash','ZEC','Zcash'],['near','NEAR','NEAR Protocol'],['uniswap','UNI','Uniswap'],['ripple','XRP','XRP'],['binancecoin','BNB','BNB'],['dogecoin','DOGE','Dogecoin']].map(([id,symbol,name])=>({key:symbol+'USDT',symbol,pair:symbol+'/USDT',name,cg:id,market:'crypto'}));
D2_INSTR.splice(0,D2_INSTR.length,...D3_CRYPTO,...['FPT','HPG','VCB','VNM','SSI','VIC','VNINDEX'].map(symbol=>({key:'VN:'+symbol,symbol,pair:symbol,name:symbol,market:'vn'})),...['AAPL','MSFT','NVDA','TSLA','SPY','QQQ'].map(symbol=>({key:'US:'+symbol,symbol,pair:symbol,name:symbol,market:'world'})),...['XAU','XAG','WTI','BRENT'].map(symbol=>({key:symbol,symbol,pair:symbol+'/USD',name:({XAU:'Vàng',XAG:'Bạc',WTI:'Dầu WTI',BRENT:'Dầu Brent'})[symbol],market:'commodity'})));
d2Instr=function(key){return D2_INSTR.find(i=>i.key===key)||D3_OLD.find(i=>i.key===key)};
const D3_TFS=[['6M','1M',6],['3M','1M',3],['2M','1M',2],['1M','1M',1],['1w','1w',1],['5d','1d',5],['3d','3d',1],['1d','1d',1],['12h','12h',1],['8h','8h',1],['6h','6h',1],['4h','4h',1],['2h','2h',1],['1h','1h',1],['30m','30m',1],['15m','15m',1],['5m','5m',1],['3m','3m',1],['1m','1m',1]];
D2C.tf='4h';
const D3_DEFAULT={MA:[20,50,65,200],EMA:[21,34,89,200],WMA:[20],BOLL:[21,2],VWAP:[1],AVL:[1],TRIX:[12,20],SAR:[2,2,20],SUPER:[10,3],ICHIMOKU:[9,26,52],SMC:[3],VOL:[7,14],MACD:[12,26,9],RSI:[14],MFI:[14],KDJ:[9,3,3],OBV:[30],CCI:[20],StochRSI:[14,14,3,3],WR:[14],DMI:[14,6],MTM:[12,6],EMV:[14,9],ATR:[14]};
const D3_MAIN=['MA','EMA','WMA','BOLL','VWAP','AVL','TRIX','SAR','SUPER','ICHIMOKU','SMC'];
const D3_SUB=['VOL','MACD','RSI','MFI','KDJ','OBV','CCI','StochRSI','WR','DMI','MTM','EMV','ATR'];
let D3_SETTINGS={};try{D3_SETTINGS=JSON.parse(localStorage.getItem('wlv_chart_v3')||'{}')}catch(e){}
D3_SETTINGS=Object.assign({active:{MA:true,VOL:true,RSI:true},params:JSON.parse(JSON.stringify(D3_DEFAULT)),colors:['#d5ac43','#b578cf','#5baf9d','#d3d8df'],lineStyle:'solid',source:'close'},D3_SETTINGS);
D3_SETTINGS.params=Object.assign({},D3_DEFAULT,D3_SETTINGS.params);D3_SETTINGS.byIndicator=D3_SETTINGS.byIndicator||{};
function d3Cfg(name){return D3_SETTINGS.byIndicator[name]||{source:D3_SETTINGS.source,colors:D3_SETTINGS.colors,lineStyle:D3_SETTINGS.lineStyle}}
function d3SaveSettings(){try{localStorage.setItem('wlv_chart_v3',JSON.stringify(D3_SETTINGS))}catch(e){}}
function d3Button(text,attr='',cls=''){return '<button type="button" class="d3-btn '+cls+'" '+attr+'>'+text+'</button>'}
function d3Shell(){return `<div class="dz-shell d3-shell"><div id="dz-msg" class="dz-msg"></div><div class="d3-title"><div><span class="d3-eyebrow">WHEN LAMBO TERMINAL</span><h2>Giao dịch demo</h2></div><span class="d3-pill">10.000 USD ảo · Không kết nối tài khoản sàn</span></div><div class="d3-market-tabs">${[['crypto','Crypto'],['vn','Chứng khoán Việt Nam'],['world','Chứng khoán thế giới'],['commodity','Hàng hóa']].map(([k,v])=>d3Button(v,`data-market="${k}"`,k===D3.market?'on':'')).join('')}</div><p class="d3-risk">Quản trị vốn là chén thánh duy nhất. Mọi lệnh ở đây dùng tiền ảo, không phải khuyến nghị đầu tư.</p><div id="dz-pairhead" class="dz-pairhead"></div><div class="dz-grid"><aside class="dz-col dz-col-ob"><div class="d3-section-head"><h3>Sổ lệnh</h3><span id="d3-book-source" class="d3-tag">Đang tải</span></div><div id="dz-orderbook"></div><p class="dz-dim" id="d3-book-time"></p></aside><main class="dz-col dz-col-mid"><nav class="d3-content-tabs">${[['chart','Biểu đồ'],['info','Thông tin'],['data','Dữ liệu'],['square','Cộng đồng']].map(([k,v])=>d3Button(v,`data-view="${k}"`,k==='chart'?'on':'')).join('')}</nav><section id="d3-chart-section"><div class="dz-toolbar d3-toolbar"><div class="dz-tfs">${D3_TFS.map(([l])=>d3Button(l,`data-tf="${l}"`,l===D2C.tf?'dz-tf on':'dz-tf')).join('')}</div><div class="d3-chart-actions">${d3Button('ƒx Chỉ báo','id="d3-indicators"')}${d3Button('Nến ▾','id="d3-chart-type"')}${d3Button('⚙ Giao diện','id="d3-style"')}${d3Button('⛶','id="d3-fullscreen" aria-label="Toàn màn hình"')}</div></div><div class="d3-chart-layout"><aside class="d3-drawing-rail" aria-label="Công cụ vẽ"><button data-draw="cursor" title="Con trỏ">↖</button><button data-draw-menu="lines" title="Đường và kênh giá">╱<small>›</small></button><button data-draw-menu="arrows" title="Mũi tên">➜<small>›</small></button><button data-draw="fibonacciLine" title="Fibonacci">≋</button><button data-draw="rectangle" title="Hình chữ nhật">▭</button><button data-draw="measurement" title="Đo lường">↔</button><button data-draw="text" title="Văn bản">T</button><hr><button id="d3-magnet" title="Nam châm bám nến">∩</button><button id="d3-lock" title="Khóa mọi hình vẽ">♙</button><button id="d3-hide" title="Ẩn mọi hình vẽ">◉</button><button id="d3-objects" title="Danh sách hình vẽ">☷</button><button id="d3-delete" title="Xóa hình được chọn">⌫</button></aside><div class="dz-chart-wrap"><div id="dz-chart" style="height:640px"></div><div id="dz-panes" hidden></div></div><div id="d3-draw-menu" class="d3-draw-menu" hidden></div></div><p id="dz-chart-status" class="dz-dim"></p><div id="d3-active" class="d3-active"></div><label>Ghi chú khi vẽ chữ <input id="d3-text-input" value="Ghi chú"></label></section><section id="d3-info-section" class="d3-tab-content" hidden></section><section id="d3-data-section" class="d3-tab-content" hidden></section><section id="d3-square-section" class="d3-tab-content" hidden></section><div id="dz-orderform"></div><p class="dz-dim">Mô hình vị thế Long/Short ký quỹ ảo. Không phải Spot Binance. Chưa tính phí, funding hay trượt giá; chỉ xử lý khi trang đang mở.</p></main><aside class="dz-col dz-col-mk"><div class="dz-mksearch"><input id="dz-search" placeholder="Tìm mã hoặc tên…" type="search"></div><div id="dz-markets"></div><h3>Giao dịch thị trường <small id="d3-trade-source"></small></h3><div id="dz-trades"></div></aside></div><div class="dz-bottom"><div class="dz-tabs" id="dz-tabs">${['pos:Vị thế mở','ord:Lệnh chờ','hist:Lịch sử lệnh','fills:Lịch sử khớp','assets:Tài sản'].map((s,i)=>{const[k,v]=s.split(':');return d3Button(v,`data-tab="${k}"`,'dz-tab'+(!i?' on':''))}).join('')}</div><div id="dz-panel"></div></div><div class="dz-summary" id="dz-summary"></div><div id="d3-modal-host"></div></div>`}
d2ShellHTML=d3Shell;
d2Price=function(key){const q=D2_QUOTES[key];return q&&Date.now()-q.at<120000?q.price:null};
d2Chg=function(key){return D2_QUOTES[key]?.change??null};
d2Lib=function(){if(globalThis.klinecharts){d3Register();return Promise.resolve();}return new Promise((res,rej)=>{const s=document.createElement('script');s.src='vendor/klinecharts.js';s.onload=()=>{d3Register();res()};s.onerror=rej;document.head.append(s)})};
d2DestroyCharts=function(){if(D3.chart){try{globalThis.klinecharts.dispose('dz-chart')}catch(e){}D3.chart=null;D3.loaded=null;D3.panes=[]}if(D2C.ro)D2C.ro.disconnect();D2C.chart=null};
d2BuildCharts=function(){d2DestroyCharts();if(!document.getElementById('dz-chart'))return;D3.chart=globalThis.klinecharts.init('dz-chart',{timezone:'Asia/Ho_Chi_Minh',styles:'dark'});D2C.chart=D3.chart;D2C.cs={};d3Theme();D2C.ro=new ResizeObserver(()=>D3.chart?.resize());D2C.ro.observe(document.getElementById('dz-chart'));d3Apply();return true};
function d3Theme(){if(!D3.chart)return;const light=document.documentElement.dataset.theme==='light';D3.chart.setStyles(light?'light':'dark');D3.chart.setStyles({grid:{horizontal:{color:light?'#e8e5dd':'#25272b'},vertical:{color:light?'#e8e5dd':'#25272b'}},candle:{bar:{upColor:'#2eaf86',downColor:'#e65e6f',upWickColor:'#2eaf86',downWickColor:'#e65e6f'},tooltip:{showRule:'follow_cross',text:{size:12}}},indicator:{tooltip:{showRule:'follow_cross'},lines:D3_SETTINGS.colors.map(color=>({color,size:1.5,style:D3_SETTINGS.lineStyle,dashedValue:[3,3],smooth:false}))},xAxis:{tickText:{size:12}},yAxis:{tickText:{size:12}}})}
function d3Apply(){if(!D3.chart)return;for(const[p,n]of D3.panes)D3.chart.removeIndicator(p,n);D3.panes=[];for(const n of [...D3_MAIN,...D3_SUB])if(D3_SETTINGS.active[n]){const p=D3.chart.createIndicator({name:n,calcParams:D3_SETTINGS.params[n],extendData:{source:d3Cfg(n).source,lines:d3Cfg(n).lines||[]},styles:{lines:d3Cfg(n).colors.map((color,i)=>({color:document.documentElement.dataset.theme==='light'&&color==='#d3d8df'?'#545e70':color,size:d3Cfg(n).lines?.[i]?.width||1.5,style:d3Cfg(n).lines?.[i]?.style||d3Cfg(n).lineStyle,dashedValue:[3,3],smooth:false}))}},true,D3_MAIN.includes(n)?{id:'candle_pane'}:{height:n==='VOL'?110:125});if(p){D3.panes.push([p,n]);const levels=d3Cfg(n).levels||[];if(D3_SUB.includes(n)&&levels.length){D3.chart.createIndicator({name:'WLV_LEVELS',calcParams:levels,styles:{lines:[{color:'#898174',size:1,style:'dashed',dashedValue:[4,4]}]}},true,{id:p});D3.panes.push([p,'WLV_LEVELS'])}}}const el=document.getElementById('d3-active');if(el)el.innerHTML=Object.keys(D3_SETTINGS.active).filter(n=>D3_SETTINGS.active[n]).map(n=>d3Button(n+' ('+D3_SETTINGS.params[n].join(', ')+') ⚙',`data-edit-ind="${n}"`)).join('')}
d2ApplyIndicators=d3Apply;d2BindDrawing=function(){};d2RedrawDrawings=function(){};d2RepaintOverlays=function(){};d2LiveTick=function(){};
function d3Register(){const k=globalThis.klinecharts;const custom=(name,params,fn,price=false)=>k.registerIndicator({name,shortName:name,series:price?'price':'normal',calcParams:params,precision:3,figures:[{key:'v0',title:name+': ',type:'line'}],regenerateFigures:ps=>(['MA','EMA','WMA','RSI','MFI','WR'].includes(name)?ps:[1]).map((p,i)=>({key:'v'+i,title:name+(['MA','EMA','WMA','RSI','MFI','WR'].includes(name)?'('+p+')':'')+': ',type:'line'})),calc:(data,ind)=>{const src=ind.extendData?.source||'close';return fn(data,ind.calcParams,src,ind)}});
for(const name of ['MA','EMA','WMA','RSI'])custom(name,D3_DEFAULT[name],(d,ps,src,ind)=>{const out=d.map(()=>({}));ps.forEach((p,j)=>{const cfg=ind.extendData?.lines?.[j]||{};if(cfg.enabled===false)return;const v=d.map(c=>c[cfg.source||src]);let a;if(name==='MA')a=d2SMA(v,p);if(name==='EMA')a=d2EMA(v,p);if(name==='RSI')a=d2RSI(v,p);if(name==='WMA')a=v.map((_,i)=>i<p-1?null:v.slice(i-p+1,i+1).reduce((s,x,k)=>s+x*(k+1),0)/(p*(p+1)/2));a.forEach((x,i)=>{if(x!==null&&Number.isFinite(x))out[i]['v'+j]=x})});return out},['MA','EMA','WMA'].includes(name));
for(const name of ['VWAP','AVL'])custom(name,[1],(d)=>{let pv=0,v=0,lastDay='';return d.map(c=>{const day=new Date(c.timestamp).toISOString().slice(0,10);if(name==='VWAP'&&day!==lastDay){pv=0;v=0;lastDay=day}pv+=(name==='VWAP'?(c.high+c.low+c.close)/3:c.close)*c.volume;v+=c.volume;return {v0:v?pv/v:c.close}})},true);
k.registerIndicator({name:'ICHIMOKU',shortName:'Ichimoku',series:'price',calcParams:[9,26,52],figures:['tenkan','kijun','spanA','spanB','chikou'].map(key=>({key,title:key+': ',type:'line'})),calc:(d,ind)=>{const [t,k,b]=ind.calcParams,mid=(i,n)=>{if(i<n-1)return null;const a=d.slice(i-n+1,i+1);return (Math.max(...a.map(x=>x.high))+Math.min(...a.map(x=>x.low)))/2},out=d.map(()=>({}));d.forEach((c,i)=>{const a=mid(i,t),v=mid(i,k),w=mid(i,b);if(a!==null)out[i].tenkan=a;if(v!==null)out[i].kijun=v;if(i+k<d.length){if(a!==null&&v!==null)out[i+k].spanA=(a+v)/2;if(w!==null)out[i+k].spanB=w;}if(i>=k)out[i-k].chikou=c.close;});return out;}});
k.registerIndicator({name:'SMC',shortName:'SMC cơ bản · pivot xác nhận',series:'price',calcParams:[3],figures:[{key:'swingHigh',title:'Đỉnh swing: ',type:'line'},{key:'swingLow',title:'Đáy swing: ',type:'line'}],calc:(d,ind)=>{const n=Math.round(ind.calcParams[0]);let hi,lo;return d.map((c,i)=>{if(i>=2*n){const p=i-n,a=d.slice(p-n,p+n+1);if(a.every(x=>x.high<=d[p].high))hi=d[p].high;if(a.every(x=>x.low>=d[p].low))lo=d[p].low;}return {swingHigh:hi,swingLow:lo};});}});
custom('SUPER',[10,3],(d,p)=>d2SuperTrend(d,p[0],p[1]).map(x=>x?{v0:x.v}:{}),true);
custom('ATR',[14],(d,p)=>{let a=0;return d.map((c,i)=>{const tr=i?Math.max(c.high-c.low,Math.abs(c.high-d[i-1].close),Math.abs(c.low-d[i-1].close)):c.high-c.low;if(i<p[0]){a+=tr/p[0];return i===p[0]-1?{v0:a}:{}}a=(a*(p[0]-1)+tr)/p[0];return {v0:a}})});
custom('MFI',[14],(d,ps,src,ind)=>{const out=d.map(()=>({}));ps.forEach((n,j)=>d.forEach((c,i)=>{if(ind.extendData?.lines?.[j]?.enabled===false||i<n)return;let up=0,dn=0;for(let a=i-n+1;a<=i;a++){const t=(d[a].high+d[a].low+d[a].close)/3,pt=(d[a-1].high+d[a-1].low+d[a-1].close)/3;if(t>pt)up+=t*d[a].volume;else if(t<pt)dn+=t*d[a].volume}out[i]['v'+j]=!up&&!dn?50:!dn?100:100-100/(1+up/dn)}));return out});
k.registerIndicator({name:'StochRSI',shortName:'StochRSI',calcParams:[14,14,3,3],precision:2,figures:[{key:'k',title:'K: ',type:'line'},{key:'d',title:'D: ',type:'line'}],calc:(data,ind)=>{const[r,n,kp,dp]=ind.calcParams,rs=d2RSI(data.map(c=>c.close),r),raw=rs.map((v,i)=>{const a=rs.slice(Math.max(0,i-n+1),i+1);if(a.length<n||a.some(x=>x===null))return null;const lo=Math.min(...a),hi=Math.max(...a);return hi===lo?50:100*(v-lo)/(hi-lo)});const valid=raw.filter(x=>x!==null),ks=d2SMA(valid,kp),ds=d2SMA(ks.filter(x=>x!==null),dp);let a=0,b=0;return raw.map(v=>{if(v===null)return {};const k=ks[a++];if(k===null)return {};const d=ds[b++];return {k,...(d===null?{}:{d})}})}});
k.registerIndicator({name:'WLV_LEVELS',shortName:'Mức',calcParams:[],precision:2,figures:[],regenerateFigures:ps=>ps.map((v,i)=>({key:'level'+i,title:'Mức '+v+': ',type:'line'})),calc:(data,ind)=>data.map(()=>Object.fromEntries(ind.calcParams.map((v,i)=>['level'+i,v])))});
custom('WR',[14],(data,ps,src,ind)=>data.map((c,i)=>{const out={};ps.forEach((n,j)=>{if(ind.extendData?.lines?.[j]?.enabled===false||i<n-1)return;const a=data.slice(i-n+1,i+1),hi=Math.max(...a.map(v=>v.high)),lo=Math.min(...a.map(v=>v.low));out['v'+j]=hi===lo?0:100*(c.close-hi)/(hi-lo)});return out}));
const shape=(name,steps,fn)=>k.registerOverlay({name,totalStep:steps,needDefaultPointFigure:true,needDefaultXAxisFigure:true,needDefaultYAxisFigure:true,createPointFigures:fn});
shape('rectangle',3,({coordinates:c})=>c.length<2?[]:[{type:'rect',attrs:{x:Math.min(c[0].x,c[1].x),y:Math.min(c[0].y,c[1].y),width:Math.abs(c[1].x-c[0].x),height:Math.abs(c[1].y-c[0].y)},styles:{style:'stroke_fill',color:'rgba(213,172,67,.12)',borderColor:'#d5ac43',borderSize:1.5}}]);
shape('crossLine',2,({coordinates:c,bounding:b})=>c.length?[{type:'line',attrs:{coordinates:[{x:0,y:c[0].y},{x:b.width,y:c[0].y}]}},{type:'line',attrs:{coordinates:[{x:c[0].x,y:0},{x:c[0].x,y:b.height}]}}]:[]);
for(const name of ['arrowLine','infoLine','measurement'])shape(name,3,({coordinates:c,overlay:o})=>{if(c.length<2)return [];const a=c[0],b=c[1],theta=Math.atan2(b.y-a.y,b.x-a.x),out=[{type:'line',attrs:{coordinates:[a,b]}}];if(name==='arrowLine')out.push({type:'polygon',attrs:{coordinates:[b,{x:b.x-12*Math.cos(theta-.4),y:b.y-12*Math.sin(theta-.4)},{x:b.x-12*Math.cos(theta+.4),y:b.y-12*Math.sin(theta+.4)}]}});else {const p=o.points,delta=p[1].value-p[0].value,pct=100*delta/p[0].value;out.push({type:'text',attrs:{x:b.x,y:b.y-15,text:(delta>0?'+':'')+delta.toFixed(2)+' ('+pct.toFixed(2)+'%) · '+Math.abs((p[1].dataIndex||0)-(p[0].dataIndex||0))+' nến'},styles:{color:'#d5ac43',size:13}})}return out});
shape('text',2,({coordinates:c,overlay:o})=>c.length?[{type:'text',attrs:{x:c[0].x,y:c[0].y,text:o.extendData||'Ghi chú'},styles:{color:'#d5ac43',size:15}}]:[]);
for(const dir of ['up','down','left','right'])shape('arrow_'+dir,2,({coordinates:c})=>c.length?[{type:'text',attrs:{x:c[0].x,y:c[0].y,text:({up:'↑',down:'↓',left:'←',right:'→'})[dir]},styles:{color:'#d5ac43',size:30}}]:[]);
}
const D3_LINES=[['segment','Đường xu hướng'],['straightLine','Đường xu hướng mở rộng'],['horizontalSegment','Đường ngang'],['horizontalStraightLine','Đường ngang mở rộng'],['verticalStraightLine','Đường dọc'],['crossLine','Đường chữ thập'],['priceChannelLine','Kênh song song'],['rayLine','Tia'],['priceLine','Đường giá'],['arrowLine','Đường mũi tên'],['infoLine','Đường thông tin']];
function d3OverlayStore(){return 'd3:'+D2C.key+':'+D2C.tf}
function d3SaveDrawings(){const s=d2Load();s.drawings[d3OverlayStore()]=D3.overlays.map(id=>D3.chart.getOverlayById(id)).filter(Boolean).map(o=>({name:o.name,id:o.id,points:o.points,extendData:o.extendData,lock:o.lock,visible:o.visible,styles:o.styles}));d2Save()}
function d3LoadDrawings(){D3.chart.removeOverlay();D3.overlays=[];for(const o of d2Load().drawings[d3OverlayStore()]||[])d3Draw(o.name,o)}
function d3Draw(name,saved){document.getElementById('d3-draw-menu').hidden=true;if(name==='cursor'){D3.selected=null;const o=D3.chart.getOverlayById(D3.drawing);if(o&&o.currentStep!==-1)D3.chart.removeOverlay({id:D3.drawing});return}const cfg={name,mode:D3.magnet?'weak_magnet':'normal',lock:D3.locked,visible:!D3.hidden,styles:{line:{color:'#d5ac43',size:1.5}},...saved,onDrawEnd:({overlay})=>{setTimeout(d3SaveDrawings,0);d2Msg('Đã lưu hình vẽ. Kéo điểm để chỉnh, chọn hình rồi bấm ⌫ để xóa.');return false},onPressedMoveEnd:()=>{d3SaveDrawings();return false},onSelected:({overlay})=>{D3.selected=overlay.id;return false}};if(name==='text'&&!saved){const text=document.getElementById('d3-text-input')?.value||'Ghi chú';cfg.extendData=text}const id=D3.chart.createOverlay(cfg);if(id){D3.overlays.push(id);D3.drawing=id}}
function d3Modal(title,html){const host=document.getElementById('d3-modal-host');host.innerHTML='<dialog class="d3-modal"><header><h3>'+title+'</h3><button type="button" id="d3-close-modal" aria-label="Đóng">×</button></header>'+html+'</dialog>';const d=host.firstElementChild;d.showModal();host.querySelector('#d3-close-modal').onclick=()=>d.close();return d}
function d3IndicatorModal(selected='MA',sub=false){let draft=JSON.parse(JSON.stringify(D3_SETTINGS));const dialog=d3Modal('Chỉ báo kỹ thuật',`<div class="d3-modal-tabs">${d3Button('Chỉ báo chính','data-indtab="main"',!sub?'on':'')}${d3Button('Chỉ báo phụ','data-indtab="sub"',sub?'on':'')}</div><div class="d3-ind-layout"><nav id="d3-ind-list"></nav><div id="d3-ind-editor"></div></div><footer>${d3Button('Mặc định','id="d3-ind-reset"')}${d3Button('Lưu thay đổi','id="d3-ind-save"','d3-gold')}</footer>`);const list=dialog.querySelector('#d3-ind-list'),editor=dialog.querySelector('#d3-ind-editor');
function drawList(){list.innerHTML=(sub?D3_SUB:D3_MAIN).map(n=>`<div class="d3-ind-row ${n===selected?'selected':''}"><input type="checkbox" data-active="${n}" ${draft.active[n]?'checked':''} aria-label="Bật ${n}"><button data-indselect="${n}">${n}<span>›</span></button></div>`).join('')}
function drawEditor(){const cfg=draft.byIndicator[selected]||(draft.byIndicator[selected]={source:draft.source,colors:[...draft.colors],lineStyle:draft.lineStyle});cfg.lines=cfg.lines||[];draft.params[selected].forEach((v,i)=>{cfg.lines[i]=cfg.lines[i]||{enabled:true,source:cfg.source,width:1.5};if(i>=cfg.colors.length)cfg.colors.push(['#d5ac43','#b578cf','#5baf9d','#d3d8df','#d67d45','#628bd1'][i%6])});editor.innerHTML='<h4>'+selected+'</h4>'+(selected==='ICHIMOKU'?'<p class="dz-dim">5 đường 9/26/52, chưa tô mây hay chiếu ra ngoài dữ liệu.</p>':selected==='SMC'?'<p class="dz-dim">SMC cơ bản: đỉnh/đáy swing xác nhận sau N nến, không phải bộ SMC đầy đủ. Không có OB/FVG hay tín hiệu mua bán.</p>':'')+((selected==='VWAP'||selected==='AVL')?'<p class="dz-dim">'+(selected==='VWAP'?'VWAP phiên ngày theo UTC, đặt lại đầu mỗi ngày.':'Bản AVL thử nghiệm: giá đóng cửa bình quân theo volume từ đầu dữ liệu đã tải. Chưa xác minh tương đương AVL Binance.')+'</p>':'')+'<p class="dz-dim">Chu kỳ tính theo số nến. Nguồn giá, nét và màu được lưu riêng cho từng chỉ báo. Chưa xác minh mọi công thức trùng Binance.</p>'+(selected==='VWAP'||selected==='AVL'?[]:draft.params[selected]).map((p,i)=>`<label class="d3-param">${['MA','EMA','WMA','RSI','MFI','WR'].includes(selected)?'Đường '+(i+1):'Tham số '+(i+1)}<input data-param="${i}" type="number" min="0.01" max="10000" step="any" value="${p}"></label>${['MA','EMA','WMA','RSI','MFI','WR'].includes(selected)?`<div class="d3-line-controls"><label><input type="checkbox" data-line-enable="${i}" ${cfg.lines[i].enabled!==false?'checked':''}>Hiện đường ${i+1}</label>${['MA','EMA','WMA','RSI'].includes(selected)?`<select aria-label="Nguồn đường ${i+1}" data-line-source="${i}">${['close','open','high','low'].map(x=>`<option ${cfg.lines[i].source===x?'selected':''}>${x}</option>`).join('')}</select>`:''}<select aria-label="Độ dày đường ${i+1}" data-line-width="${i}">${[1,1.5,2,3,4].map(x=>`<option ${cfg.lines[i].width===x?'selected':''}>${x}</option>`).join('')}</select><select aria-label="Nét đường ${i+1}" data-line-style="${i}"><option value="solid" ${(cfg.lines[i].style||cfg.lineStyle)==='solid'?'selected':''}>Liền</option><option value="dashed" ${(cfg.lines[i].style||cfg.lineStyle)==='dashed'?'selected':''}>Đứt</option></select>${d3Button('Xóa',`data-line-delete="${i}"`)}</div>`:''}`).join('')+(['MA','EMA','WMA','RSI','MFI','WR'].includes(selected)?d3Button('+ Thêm đường','id="d3-add-param"'):'')+`<label class="d3-param">Nguồn mọi đường<select id="d3-source">${['close','open','high','low'].map(x=>'<option '+(cfg.source===x?'selected':'')+'>'+x+'</option>').join('')}</select></label><p class="dz-dim">Nguồn giá áp dụng MA, EMA, WMA, RSI; các chỉ báo khác dùng công thức riêng.</p><label class="d3-param">Nét vẽ<select id="d3-line-style"><option value="solid">Liền</option><option value="dashed" ${cfg.lineStyle==='dashed'?'selected':''}>Đứt</option></select></label>${D3_SUB.includes(selected)?`<label class="d3-param">Mức tham chiếu<input id="d3-levels" placeholder="Ví dụ: 30, 70" value="${(cfg.levels||[]).join(', ')}"></label><p class="dz-dim">Tối đa 6 mức, cách nhau bằng dấu phẩy. Để trống để xóa. Đây là đường tham chiếu, không phải tín hiệu mua/bán.</p>`:''}<div class="d3-colors">${cfg.colors.map((c,i)=>`<label>Màu ${i+1}<input type="color" data-color="${i}" value="${c}"></label>`).join('')}</div>`;if(editor.querySelector('#d3-levels')&&cfg.levelsText!==undefined)editor.querySelector('#d3-levels').value=cfg.levelsText}
dialog.addEventListener('input',e=>{const t=e.target;if(t.dataset.lineEnable!==undefined)draft.byIndicator[selected].lines[+t.dataset.lineEnable].enabled=t.checked;if(t.dataset.lineSource!==undefined)draft.byIndicator[selected].lines[+t.dataset.lineSource].source=t.value;if(t.dataset.lineStyle!==undefined)draft.byIndicator[selected].lines[+t.dataset.lineStyle].style=t.value;if(t.dataset.lineWidth!==undefined)draft.byIndicator[selected].lines[+t.dataset.lineWidth].width=+t.value;if(t.dataset.param!==undefined)draft.params[selected][+t.dataset.param]=+t.value;if(t.dataset.active)draft.active[t.dataset.active]=t.checked;if(t.dataset.color!==undefined)draft.byIndicator[selected].colors[+t.dataset.color]=t.value;if(t.id==='d3-source'){draft.byIndicator[selected].source=t.value;draft.byIndicator[selected].lines?.forEach(x=>x.source=t.value);editor.querySelectorAll('[data-line-source]').forEach(x=>x.value=t.value)};if(t.id==='d3-line-style'){draft.byIndicator[selected].lineStyle=t.value;draft.byIndicator[selected].lines?.forEach(x=>x.style=t.value);editor.querySelectorAll('[data-line-style]').forEach(x=>x.value=t.value)};if(t.id==='d3-levels')draft.byIndicator[selected].levelsText=t.value});dialog.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.lineDelete!==undefined){if(draft.params[selected].length>1){const i=+b.dataset.lineDelete;draft.params[selected].splice(i,1);draft.byIndicator[selected].lines.splice(i,1);draft.byIndicator[selected].colors.splice(i,1);drawEditor()}return}if(b.dataset.indtab){sub=b.dataset.indtab==='sub';selected=(sub?D3_SUB:D3_MAIN)[0];dialog.querySelectorAll('[data-indtab]').forEach(x=>x.classList.toggle('on',x===b));drawList();drawEditor()}if(b.dataset.indselect){selected=b.dataset.indselect;drawList();drawEditor()}if(b.id==='d3-add-param'){if(draft.params[selected].length<6){draft.params[selected].push(10);drawEditor()}}if(b.id==='d3-ind-reset'){draft.params=JSON.parse(JSON.stringify(D3_DEFAULT));draft.active={MA:true,VOL:true,RSI:true};draft.byIndicator={};drawList();drawEditor()}if(b.id==='d3-ind-save'){if(Object.values(draft.params).flat().some(n=>!Number.isFinite(n)||n<=0||n>10000))return d2Msg('Tham số phải lớn hơn 0 và không quá 10.000.');for(const [name,ps] of Object.entries(draft.params)){if(ps.some((v,i)=>!((name==='BOLL'||name==='SUPER')&&i===1)&&!Number.isInteger(v)))return d2Msg('Chu kỳ phải là số nguyên; hệ số BOLL/SUPER có thể dùng số thập phân.')}for(const cfg of Object.values(draft.byIndicator)){if(cfg.levelsText!==undefined){const txt=cfg.levelsText.trim(),vals=txt?txt.split(',').map(x=>x.trim()===''?NaN:Number(x)):[];if(vals.length>6||vals.some(x=>!Number.isFinite(x)||Math.abs(x)>1e9))return d2Msg('Nhập tối đa 6 mức số hợp lệ, cách nhau bằng dấu phẩy.');cfg.levels=vals;delete cfg.levelsText}}D3_SETTINGS=draft;d3SaveSettings();d3Apply();dialog.close()}});drawList();drawEditor()}
async function d3JSON(url){const r=await fetch(url,{signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error('HTTP '+r.status);return r.json()}
function d3Aggregate(d,tf){const[l,base,n]=tf;if(n===1)return d;const map=new Map();for(const c of d){const dt=new Date(c.timestamp);let key;if(base==='1M')key=dt.getUTCFullYear()*12+Math.floor(dt.getUTCMonth()/n)*n;else key=Math.floor(c.timestamp/(n*86400000));const a=map.get(key);if(!a)map.set(key,{...c});else{a.high=Math.max(a.high,c.high);a.low=Math.min(a.low,c.low);a.close=c.close;a.volume+=c.volume}}return [...map.values()]}
d2LoadCandles=async function(){if(!D3.chart)return;const token=++D3.request,ins=d2Instr(D2C.key),tf=D3_TFS.find(x=>x[0]===D2C.tf),status=document.getElementById('dz-chart-status');if(!tf)return;status.textContent='Đang tải nến '+ins.pair+'…';const changed=D3.loaded!==ins.key+':'+D2C.tf;D3.loaded=ins.key+':'+D2C.tf;if(changed){D3.chart.applyNewData([]);D2C.candles=[];D3.book=null;D3.trades=[];D3.ticker=null;D3.source='';d2RenderHeader();d2RenderObTrades();}
if(ins.market!=='crypto'){status.textContent='Chưa kết nối được nguồn nến miễn phí, hợp lệ cho '+ins.pair+'. Không dựng nến hoặc giá giả. Các công cụ vẽ/chỉ báo cần dữ liệu nến.';if(ins.key==='XAU'||ins.key==='XAG'){try{const j=await d3JSON('https://api.gold-api.com/price/'+ins.key);if(token!==D3.request)return;if(j.price>0){D2_QUOTES[ins.key]={price:j.price,at:Date.now()};D3.source='Gold API'}d2RenderHeader()}catch(e){}}d2RenderObTrades();d2RenderForm();return}
let data,source,lastError;const pars=j=>j.map(k=>({timestamp:+k[0],time:+k[0]/1000,open:+k[1],high:+k[2],low:+k[3],close:+k[4],volume:+k[5]}));for(const origin of ['https://data-api.binance.vision','https://api.binance.com']){try{data=pars(await d3JSON(origin+'/api/v3/klines?symbol='+ins.key+'&interval='+tf[1]+'&limit=1000'));source='Binance';break}catch(e){lastError=e}}
if(!data){try{const iv={'1M':'1M','1w':'1W','1d':'1D','3d':'3D','12h':'12H','8h':'8H','6h':'6H','4h':'4H','2h':'2H','1h':'1H'}[tf[1]]||tf[1];const j=await d3JSON('https://www.okx.com/api/v5/market/history-candles?instId='+ins.symbol+'-USDT&bar='+iv+'&limit=100');data=pars(j.data).reverse();source='OKX dự phòng, không phải dữ liệu Binance'}catch(e){lastError=e}}
if(token!==D3.request)return;if(!data?.length){status.textContent='Không tải được nến từ Binance và nguồn dự phòng. Không dùng số mô phỏng thay thế.';return}data=d3Aggregate(data,tf);D2C.candles=data;D3.source=source;D3.chart.applyNewData(data);D3.chart.setPriceVolumePrecision(data.at(-1).close<1?6:2,4);if(changed){d3Apply();d3LoadDrawings();}status.textContent='Nến: '+source+' · Cập nhật mỗi phút khi mở trang. '+(tf[2]>1?'Khung '+tf[0]+' tổng hợp từ nến '+tf[1]+'. ':'')+'Chỉ báo tính trên dữ liệu đã tải, MA dài cần đủ lịch sử. Ichimoku hiển thị 5 đường, chưa tô mây và không vẽ phần chiếu ngoài dữ liệu. SMC cơ bản chỉ là đỉnh/đáy swing xác nhận sau N nến, không gồm order block/FVG hay tín hiệu giao dịch.';if(source==='Binance'){await d3FetchMarket(ins,token)}else{D2_QUOTES[ins.key]={price:data.at(-1).close,at:Date.now()};d2RenderHeader();d2RenderForm()}};
async function d3FetchMarket(ins,token){const origin='https://data-api.binance.vision';const result=await Promise.allSettled([d3JSON(origin+'/api/v3/ticker/24hr?symbol='+ins.key),d3JSON(origin+'/api/v3/depth?symbol='+ins.key+'&limit=100'),d3JSON(origin+'/api/v3/trades?symbol='+ins.key+'&limit=50')]);if(token!==D3.request)return;const[t,b,tr]=result.map(r=>r.status==='fulfilled'?r.value:null);if(t){D3.ticker=t;D2_QUOTES[ins.key]={price:+t.lastPrice,change:+t.priceChangePercent,at:Date.now()}}D3.book=b;D3.trades=tr||[];D3.marketAt=Date.now();d2RenderHeader();d2RenderObTrades();d2RenderMarkets()}
d2RenderHeader=function(){const el=document.getElementById('dz-pairhead');if(!el)return;const i=d2Instr(D2C.key),t=D3.ticker,p=d2Price(i.key);el.innerHTML=`<div class="dz-pairname"><strong>${d2Esc(i.pair)}</strong><small>${d2Esc(i.name)}</small></div><div class="dz-lastprice ${t&&+t.priceChangePercent>=0?'up':'dn'}">${p?d2PFmt(p):'—'}</div>${[['24h %',t?Number(t.priceChangePercent).toFixed(2)+'%':'—'],['Cao 24h',t?d2PFmt(t.highPrice):'—'],['Thấp 24h',t?d2PFmt(t.lowPrice):'—'],['KL 24h',t?d2Fmt(t.volume,2):'—'],['Nguồn',t?'Binance':p?(D3.source||'Gold API'):i.market==='vn'?'Simplize · giá trong chart':'Chưa có']].map(([l,v])=>`<div class="dz-stat"><b>${l}</b><span>${v}</span></div>`).join('')}`};
d2RenderMarkets=function(){const el=document.getElementById('dz-markets');if(!el)return;const q=(document.getElementById('dz-search').value||'').toLowerCase();el.innerHTML='<div class="dz-ob-head"><span>Mã</span><span>Giá</span><span>24h%</span></div>'+D2_INSTR.filter(i=>i.market===D3.market&&(!q||[i.name,i.pair].join(' ').toLowerCase().includes(q))).map(i=>{const p=d2Price(i.key),c=d2Chg(i.key);return `<button class="dz-ob-row dz-mkrow ${i.key===D2C.key?'cur':''}" data-key="${i.key}"><span>${i.pair}</span><span>${p?d2PFmt(p):'—'}</span><span class="${c>=0?'up':'dn'}">${c===null?'—':c.toFixed(2)+'%'}</span></button>`}).join('')};
d2RenderObTrades=function(){const ob=document.getElementById('dz-orderbook'),tr=document.getElementById('dz-trades');if(!ob)return;const b=D3.book,head='<div class="dz-ob-head"><span>Giá</span><span>Khối lượng</span><span>Tổng</span></div>';const rows=(a,cls)=>a.slice(0,14).map(([p,q])=>`<button class="dz-ob-row d3-book-row ${cls}" data-book-price="${p}"><span>${d2PFmt(p)}</span><span>${d2Fmt(q,4)}</span><span>${d2Fmt(p*q,2)}</span></button>`).join('');ob.innerHTML=b?head+rows(b.asks.slice(0,14).reverse(),'ask')+`<div class="dz-ob-mid">${d2PFmt(d2Price(D2C.key))}</div>`+rows(b.bids,'bid'):'<p class="dz-dim">Chưa có dữ liệu sổ lệnh thật cho thị trường này.</p>';tr.innerHTML=D3.trades.length?'<div class="dz-ob-head"><span>Giá</span><span>Volume</span><span>Thời gian</span></div>'+D3.trades.slice(-16).reverse().map(t=>`<div class="dz-ob-row ${t.isBuyerMaker?'ask':'bid'}"><span>${d2PFmt(t.price)}</span><span>${d2Fmt(t.qty,4)}</span><span>${new Date(t.time).toLocaleTimeString('vi-VN')}</span></div>`).join(''):'<p class="dz-dim">Chưa có dữ liệu giao dịch thật.</p>';document.getElementById('d3-book-source').textContent=b?'Binance · dữ liệu thật':'Chưa có nguồn';document.getElementById('d3-trade-source').textContent=D3.trades.length?'Binance · dữ liệu thật':'';document.getElementById('d3-book-time').textContent=b?'Ảnh chụp sổ lệnh lúc '+new Date(D3.marketAt).toLocaleTimeString('vi-VN')+'. Cập nhật mỗi phút, không phải luồng realtime.':''};
d2RefreshOrderQuotes=async function(){try{const symbols=JSON.stringify(D3_CRYPTO.map(i=>i.key));const js=await d3JSON('https://data-api.binance.vision/api/v3/ticker/24hr?symbols='+encodeURIComponent(symbols));for(const j of js)D2_QUOTES[j.symbol]={price:+j.lastPrice,change:+j.priceChangePercent,at:Date.now()};d2RenderMarkets()}catch(e){}for(const key of [...new Set([...d2Load().positions,...d2Load().orders].map(p=>p.key))]){const ins=d2Instr(key);if(ins?.market==='crypto'){try{const j=await d3JSON('https://data-api.binance.vision/api/v3/ticker/price?symbol='+key);if(j.price>0)D2_QUOTES[key]={price:+j.price,at:Date.now()}}catch(e){}}else if(ins?.kraken){try{const q=await d2FetchTicker(ins.kraken);if(q.last>0)D2_QUOTES[key]={price:q.last,at:Date.now()}}catch(e){}}else if(key==='XAU'||key==='XAG'){try{const j=await d3JSON('https://api.gold-api.com/price/'+key);if(j.price>0)D2_QUOTES[key]={price:+j.price,at:Date.now()}}catch(e){}}}d2Tick();d2RefreshPanels()};
const d3OldBind=d2Bind;d2Bind=function(){d3OldBind();d2Listen(document.getElementById('dz-shell-root'),'click',async e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.market){D3.market=b.dataset.market;D2C.key=D2_INSTR.find(i=>i.market===D3.market).key;document.querySelectorAll('[data-market]').forEach(x=>x.classList.toggle('on',x===b));d2SwitchPair();if(D3.tab!=='chart')d3View(D3.tab)}if(b.dataset.key&&D3.tab!=='chart')d3View(D3.tab);if(b.dataset.view)d3View(b.dataset.view);if(b.id==='d3-indicators')d3IndicatorModal();if(b.dataset.editInd)d3IndicatorModal(b.dataset.editInd,D3_SUB.includes(b.dataset.editInd));if(b.dataset.draw)d3Draw(b.dataset.draw);if(b.dataset.drawMenu){const menu=document.getElementById('d3-draw-menu');menu.hidden=!menu.hidden;menu.innerHTML=(b.dataset.drawMenu==='lines'?D3_LINES:[['arrow_up','Mũi tên lên'],['arrow_down','Mũi tên xuống'],['arrow_left','Mũi tên trái'],['arrow_right','Mũi tên phải']]).map(([k,l])=>d3Button(l,`data-draw="${k}"`)).join('')}if(b.id==='d3-magnet'){D3.magnet=!D3.magnet;b.classList.toggle('on',D3.magnet);D3.chart.overrideOverlay({mode:D3.magnet?'weak_magnet':'normal'})}if(b.id==='d3-lock'){D3.locked=!D3.locked;b.classList.toggle('on',D3.locked);D3.chart.overrideOverlay({lock:D3.locked});d3SaveDrawings()}if(b.id==='d3-hide'){D3.hidden=!D3.hidden;b.classList.toggle('on',D3.hidden);D3.chart.overrideOverlay({visible:!D3.hidden});d3SaveDrawings()}if(b.id==='d3-delete'){if(!D3.selected)return d2Msg('Chọn hình cần xóa trên biểu đồ hoặc trong danh sách hình vẽ.');D3.chart.removeOverlay({id:D3.selected});D3.overlays=D3.overlays.filter(id=>id!==D3.selected);D3.selected=null;d3SaveDrawings()}if(b.id==='d3-objects')d3Objects();if(b.dataset.bookPrice){D2F.type='limit';d2RenderForm();document.getElementById('dz-f-price').value=b.dataset.bookPrice}if(b.id==='d3-fullscreen'){const target=document.querySelector('.dz-col-mid');if(!document.fullscreenElement)target.requestFullscreen?.();else document.exitFullscreen?.()}if(b.id==='d3-chart-type'){const m=d3Modal('Kiểu biểu đồ',['candle_solid:Nến','ohlc:Thanh OHLC','area:Đường / vùng'].map(v=>{const[k,l]=v.split(':');return d3Button(l,`data-ctype="${k}"`)}).join(''));m.onclick=ev=>{const x=ev.target.closest('[data-ctype]');if(x){D3.chart.setStyles({candle:{type:x.dataset.ctype}});m.close()}}}if(b.id==='d3-style')d3Style()})};
function d3Objects(){const m=d3Modal('Danh sách hình vẽ',D3.overlays.length?D3.overlays.map(id=>{const o=D3.chart.getOverlayById(id);return `<div class="d3-object">${d2Esc(o?.name||id)}${d3Button('Chọn',`data-select-object="${id}"`)}${d3Button('Xóa',`data-remove-object="${id}"`)}</div>`}).join(''):'<p>Chưa có hình vẽ trên cặp và khung này.</p>');m.onclick=e=>{const b=e.target.closest('button');if(b?.dataset.selectObject){D3.selected=b.dataset.selectObject;m.close();d2Msg('Đã chọn hình. Bấm ⌫ để xóa hoặc kéo điểm trên biểu đồ để chỉnh.')}if(b?.dataset.removeObject){D3.chart.removeOverlay({id:b.dataset.removeObject});D3.overlays=D3.overlays.filter(id=>id!==b.dataset.removeObject);d3SaveDrawings();m.close();d3Objects()}}}
function d3Style(){const m=d3Modal('Giao diện biểu đồ',`<label class="d3-param">Nền biểu đồ<input id="d3-bg" type="color" value="#17191d"></label><label class="d3-param">Nến tăng<input id="d3-up" type="color" value="#2eaf86"></label><label class="d3-param">Nến giảm<input id="d3-down" type="color" value="#e65e6f"></label><label><input type="checkbox" id="d3-grid" checked> Hiện lưới</label><footer>${d3Button('Mặc định','id="d3-style-reset"')}${d3Button('Lưu','id="d3-style-save"','d3-gold')}</footer>`);m.querySelector('#d3-style-reset').onclick=()=>{d3Theme();m.close()};m.querySelector('#d3-style-save').onclick=()=>{const up=m.querySelector('#d3-up').value,dn=m.querySelector('#d3-down').value;document.getElementById('dz-chart').style.background=m.querySelector('#d3-bg').value;D3.chart.setStyles({grid:{show:m.querySelector('#d3-grid').checked},candle:{bar:{upColor:up,downColor:dn,upWickColor:up,downWickColor:dn}}});m.close()}}
async function d3View(tab){D3.tab=tab;document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('on',b.dataset.view===tab));for(const t of ['chart','info','data','square'])document.getElementById('d3-'+t+'-section').hidden=t!==tab;if(tab==='chart'){D3.chart?.resize();return}const el=document.getElementById('d3-'+tab+'-section'),ins=d2Instr(D2C.key);if(tab==='square'){el.innerHTML='<h3>Cộng đồng When Lambo</h3><p>Chưa triển khai tài khoản cộng đồng, đăng bài, bình luận hoặc bảng tin Binance Square. Không sao chép bài viết và không tạo bài đăng giả.</p><p>Các bài phân tích của When Lambo được đọc tại mục Tin tức trên web. Tính năng tương tác cộng đồng cần backend và cơ chế kiểm duyệt riêng.</p>';return}if(tab==='data'){const b=D3.book;let bid=0,ask=0;(b?.bids||[]).forEach(([p,q])=>bid+=p*q);(b?.asks||[]).forEach(([p,q])=>ask+=p*q);el.innerHTML='<h3>Dữ liệu '+ins.pair+'</h3>'+ (b?`<p>Độ sâu 100 mức giá · Binance · ${new Date(D3.marketAt).toLocaleString('vi-VN')}</p><div class="d3-data-cards"><div><small>Tổng giá trị đặt mua</small><strong class="up">${d2Fmt(bid)} USDT</strong></div><div><small>Tổng giá trị đặt bán</small><strong class="dn">${d2Fmt(ask)} USDT</strong></div></div><div class="d3-depth-bar"><span style="width:${100*bid/(bid+ask)}%"></span></div><p>Đây là lệnh chờ tại thời điểm lấy dữ liệu, không phải dòng tiền đã khớp và không đại diện toàn thị trường.</p>`:'<p>Chưa có dữ liệu độ sâu miễn phí đã kết nối cho mã này.</p>')+'<h4>Phân tích dòng tiền và mức tập trung</h4><p>Chưa có nguồn tương đương dữ liệu Money Flow Analysis, 5 ngày dòng tiền lớn và Platform Concentration của Binance. Không tính thay bằng chỉ số khác rồi gắn cùng tên.</p>';return}
el.innerHTML='<h3>Thông tin '+ins.pair+'</h3><p>Đang tải dữ liệu…</p>';if(ins.market!=='crypto'){el.innerHTML='<h3>'+ins.name+'</h3><p>Chưa kết nối hồ sơ doanh nghiệp/hợp đồng, cung lưu hành và thống kê lịch sử cho mã này. Không dùng thông tin crypto cho các thị trường khác.</p>';return}try{const j=await d3JSON('https://api.coingecko.com/api/v3/coins/'+ins.cg+'?localization=false&tickers=false&community_data=false&developer_data=false');if(D3.tab!=='info'||D2C.key!==ins.key)return;const d=j.market_data,fmt=n=>n===null||n===undefined?'Chưa có':d2Fmt(n,0);el.innerHTML='<h3>'+d2Esc(j.name)+' ('+ins.symbol+')</h3><div class="d3-info-grid"><dl>'+[['Xếp hạng',j.market_cap_rank],['Vốn hóa (USD)',d?.market_cap?.usd],['Vốn hóa pha loãng (USD)',d?.fully_diluted_valuation?.usd],['Khối lượng 24h (USD)',d?.total_volume?.usd],['Cung lưu hành',d?.circulating_supply],['Cung tối đa',d?.max_supply],['Tổng cung',d?.total_supply],['Đỉnh lịch sử (USD)',d?.ath?.usd],['Đáy lịch sử (USD)',d?.atl?.usd]].map(([l,v])=>'<div><dt>'+l+'</dt><dd>'+fmt(v)+'</dd></div>').join('')+'</dl><div><h4>Liên kết và giới thiệu</h4><p>Nguồn hồ sơ: CoinGecko, không phải CoinMarketCap/Binance. Dữ liệu có thể khác do phạm vi nguồn.</p><p>Website, whitepaper và giới thiệu dự án chưa tích hợp trong bản này.</p><h4>Thông số giao dịch</h4><p>Mô phỏng: ký quỹ tối thiểu 10 USD; đòn bẩy 1x–10x. Đây là quy tắc demo When Lambo, không phải bộ lọc đặt lệnh Binance.</p></div></div><p class="dz-dim">Cập nhật nguồn: '+d2Esc(j.last_updated||'Không có mốc thời gian')+'</p>'}catch(e){el.innerHTML='<h3>Thông tin '+ins.pair+'</h3><p>Không tải được hồ sơ CoinGecko miễn phí ở lượt này. Chưa có vốn hóa, cung và đỉnh/đáy lịch sử đã xác minh; không hiển thị số mẫu.</p>'}}
/* Legacy order handler expects number timeframes. Replace its conversion for the new ladder. */


const d3RawLoadCandles=d2LoadCandles;
D3.customCrypto=false;
document.addEventListener('click',e=>{if(e.target.closest('[data-chart-mode]')){D3.customCrypto=e.target.closest('[data-chart-mode]').dataset.chartMode==='custom';D3.widgetKey=null;d2LoadCandles();}});
D2_INSTR.push(...['EURUSD','GBPUSD','USDJPY','AUDUSD','USDCAD','USDCHF','NZDUSD'].map(symbol=>({key:symbol,symbol,pair:symbol.slice(0,3)+'/'+symbol.slice(3),name:symbol,market:'forex'})));
const d3BeforeWidgetShell=d2ShellHTML;d2ShellHTML=function(){return d3BeforeWidgetShell().replace('</div><p class="d3-risk">',d3Button('Forex','data-market="forex"')+'</div><p class="d3-risk">')};
function d3CommodityWidget(ins){
 const section=document.getElementById('d3-chart-section');if(!section)return;
 let host=document.getElementById('d3-commodity-widget');const commodity=!(ins.market==='crypto'&&D3.customCrypto);
 for(const el of section.children){if(el.id!=='d3-commodity-widget'&&el.id!=='dz-chart-status')el.hidden=commodity;}
 if(!commodity){host?.remove();D3.widgetKey=null;D3.chart?.resize();let mode=document.getElementById('d3-custom-mode');if(!mode){mode=document.createElement('p');mode.id='d3-custom-mode';mode.innerHTML='<button type="button" class="d3-btn" data-chart-mode="tv">Xem TradingView</button> · Chart tùy chỉnh, chỉ báo tính từ nến Binance đã tải.';section.prepend(mode);}return;}document.getElementById('d3-custom-mode')?.remove();
 const symbol=ins.market==='crypto'?'BINANCE:'+ins.key:ins.market==='world'?({'AAPL':'NASDAQ:AAPL','MSFT':'NASDAQ:MSFT','NVDA':'NASDAQ:NVDA','TSLA':'NASDAQ:TSLA','SPY':'AMEX:SPY','QQQ':'NASDAQ:QQQ'}[ins.symbol]):ins.market==='vn'?'HOSE:'+ins.symbol:ins.market==='forex'?'OANDA:'+ins.key:({XAU:'OANDA:XAUUSD',XAG:'OANDA:XAGUSD',WTI:'TVC:USOIL',BRENT:'TVC:UKOIL'}[ins.key]);
 if(ins.market==='vn'){d3VnWidget(ins,section,host);return;}if(!symbol)return;const theme=document.documentElement.dataset.theme==='light'?'light':'dark',key=symbol+theme;
 if(host&&D3.widgetKey===key)return;D3.widgetKey=key;
 if(!host){host=document.createElement('div');host.id='d3-commodity-widget';section.prepend(host);}
 host.innerHTML=(ins.market==='crypto'?'<p><button type="button" class="d3-btn" data-chart-mode="custom">Chart tùy chỉnh · bật/tắt chỉ báo</button></p>':'')+'<p style="font-size:12px;line-height:1.7;margin:12px 0">Biểu đồ nến '+symbol+' · '+(ins.market==='crypto'?'Dữ liệu sàn Binance.':ins.market==='world'?'Cổ phiếu Mỹ, dữ liệu có thể chậm hoặc từ Cboe One.':ins.market==='vn'?'Mã Việt Nam có thể không được nhà cung cấp cấp quyền hiển thị widget, không thay bằng mã khác.':ins.market==='forex'?'Báo giá Forex OTC của OANDA.':ins.key==='XAU'||ins.key==='XAG'?'Báo giá kim loại OTC của OANDA.':'Giá dầu CFD tham chiếu, không phải hợp đồng tương lai.')+' Giá trên chart có thể khác giá tham khảo phía trên. Chọn khung thời gian và chỉ báo ngay trong chart. Widget chỉ để xem, không cấp giá khớp lệnh demo.</p><div class="tradingview-widget-container" style="height:600px;width:100%;min-width:0"><div class="tradingview-widget-container__widget" style="height:100%;width:100%"></div></div><p style="font-size:12px"><a href="https://www.tradingview.com/" target="_blank" rel="noopener nofollow">Charts by TradingView</a>. Nếu mạng chặn widget, chart có thể không tải. Không thay bằng nến giả.</p>';
 const script=document.createElement('script');script.src='https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';script.async=true;script.textContent=JSON.stringify({width:'100%',height:600,autosize:false,symbol,interval:'240',timezone:'Asia/Bangkok',theme,style:'1',locale:'vi_VN',allow_symbol_change:false,calendar:false,support_host:'https://www.tradingview.com'});host.querySelector('.tradingview-widget-container').append(script);
}
d2LoadCandles=async function(){const ins=d2Instr(D2C.key);d3CommodityWidget(ins);await d3RawLoadCandles();if(D2C.key===ins.key&&!(ins.market==='crypto'&&D3.customCrypto)){const status=document.getElementById('dz-chart-status');if(status)status.textContent=(ins.market==='vn'?'Chart nhúng Simplize':'Chart nhúng TradingView')+' độc lập. Không lấy dữ liệu widget để tính chỉ báo riêng hoặc khớp lệnh.';}};

new MutationObserver(()=>{if(document.getElementById("d3-chart-section"))d3CommodityWidget(d2Instr(D2C.key));}).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme"]});


function d3VnWidget(ins,section,host){
const light=document.documentElement.dataset.theme==='light';const key='simplize:'+ins.symbol+light;
if(host&&D3.widgetKey===key)return;D3.widgetKey=key;
if(!host){host=document.createElement('div');host.id='d3-commodity-widget';section.prepend(host);}
host.innerHTML='<p style="font-size:12px;line-height:1.8">Biểu đồ nến '+ins.symbol+' · Widget chính thức Simplize. Chọn khoảng lịch sử ngay trong chart. Dữ liệu tham khảo, có thể chậm; không dùng để khớp lệnh demo.</p><div class="simplize-widget-chart-overview" style="min-height:610px;width:100%"></div><p style="font-size:12px"><a href="https://simplize.vn/widget-embed" target="_blank" rel="noopener">Biểu đồ từ Simplize</a>. Nếu nhà cung cấp không có dữ liệu cho mã, không thay bằng nến giả.</p>';
const script=document.createElement('script');script.src='https://static.simplize.vn/static/widget/simplize-widget-v0.0.3.min.js';script.async=true;
script.textContent=JSON.stringify({tickers:[{ticker:ins.symbol,type:ins.symbol==='VNINDEX'?'index':'stock'}],default_time_frame:'1Y',time_frames:['1D','1M','3M','1Y'],theme:light?'light':'dark',size:{width:'',height:''},auto_size:true,font:'Inter',text_color:light?'#22313F':'#E9E5DC',text_color_chart:light?'#22313F':'#E9E5DC',background_color:light?'#FFFFFF':'#101214',tab_colors:{active:'#94723C',default:light?'#F2F2F2':'#202327'},chart_height:480,show_price_chart:true,show_fi:false,chart_type:'candle',chart_line_color:'#C7A15B',chart_candle_color:['#25B770','#E14040'],fi:[]});
const frame=document.createElement('iframe');frame.title='Biểu đồ nến '+ins.symbol+' từ Simplize';frame.style.cssText='width:100%;height:650px;border:0;display:block';const cfg=script.textContent;frame.srcdoc='<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0"><div class="simplize-widget-chart-overview"><script async src="https://static.simplize.vn/static/widget/simplize-widget-v0.0.3.min.js">'+cfg+'</'+'script></div></body></html>';host.querySelector('.simplize-widget-chart-overview').replaceWith(frame);
}

window.demoDashMount = d2Mount;
window.demoDashUnmount = d2Unmount;
window.demoDashRefresh = () => {if(d2Mounted){d2RenderHeader();d2RenderMarkets();}};
})();

(()=>{const s=document.createElement("style");s.textContent=".d3-shell{font:14px 'Be Vietnam Pro',system-ui,sans-serif;color:var(--ink);--d3-line:var(--hairline,#303238)}.d3-title{display:flex;justify-content:space-between;align-items:center;margin:26px 0 18px;gap:16px}.d3-title h2{font:500 30px 'Be Vietnam Pro',sans-serif;margin:6px 0}.d3-eyebrow{font-size:11px;letter-spacing:2px;color:#ba9b56}.d3-pill,.d3-tag{border:1px solid #746138;border-radius:30px;padding:7px 12px;color:#b69b64;font-size:11px}.d3-tag{padding:3px 7px;white-space:nowrap}.d3-market-tabs{display:flex;gap:8px;flex-wrap:wrap}.d3-btn{border:1px solid var(--d3-line);border-radius:5px;color:inherit;background:transparent;padding:7px 12px;cursor:pointer;font:inherit;font-size:12px;white-space:nowrap}.d3-btn:hover{background:rgba(190,157,73,.12)}.d3-btn.on{color:#d5ac43;border-color:#8c733f;background:rgba(190,157,73,.09)}.d3-risk{font-size:12px;color:var(--muted);margin:12px 0 20px}.d3-shell .dz-grid{grid-template-columns:225px minmax(0,1fr) 245px;gap:1px;background:var(--d3-line);border:1px solid var(--d3-line);border-radius:10px;overflow:hidden}.d3-shell .dz-col{padding:14px;background:var(--paper-2,#15171b);min-width:0}.d3-shell .dz-col-mid{padding:0 12px 14px}.d3-section-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:5px}.d3-section-head h3{margin:0}.d3-shell .dz-ob-row{font-size:11px;padding:5px 3px;grid-template-columns:1fr .8fr 1fr;gap:6px}.d3-shell .dz-ob-head{font-size:10px;padding:8px 3px;gap:5px}.d3-book-row{border:0;background:transparent;width:100%;text-align:right;color:inherit;cursor:pointer}.d3-book-row.ask{background:linear-gradient(to left,rgba(230,94,111,.08),transparent)}.d3-book-row.bid{background:linear-gradient(to left,rgba(46,175,134,.08),transparent)}.d3-content-tabs{display:flex;gap:18px;border-bottom:1px solid var(--d3-line);margin-bottom:12px}.d3-content-tabs button{border:0;border-bottom:2px solid transparent;border-radius:0;padding:14px 3px;font-size:13px}.d3-content-tabs button.on{border-bottom-color:#d5ac43;background:none}.d3-toolbar{gap:8px;align-items:center}.d3-toolbar .dz-tfs{display:flex;gap:2px;flex-wrap:wrap}.d3-toolbar .dz-tf{padding:5px 7px;font-size:11px;border-color:transparent}.d3-chart-actions{display:flex;gap:5px;flex-wrap:wrap}.d3-chart-actions button{font-size:11px;padding:6px 9px}.d3-chart-layout{display:grid;grid-template-columns:38px minmax(0,1fr);position:relative;min-width:0;border-block:1px solid var(--d3-line)}.d3-drawing-rail{border-right:1px solid var(--d3-line);display:flex;flex-direction:column;align-items:center;padding:5px 0;gap:2px}.d3-drawing-rail button{height:35px;width:34px;position:relative;background:none;border:0;color:var(--muted,#aaa);font-size:22px;cursor:pointer;border-radius:4px}.d3-drawing-rail button:hover,.d3-drawing-rail button.on{background:rgba(190,157,73,.15);color:#d5ac43}.d3-drawing-rail small{position:absolute;font-size:11px;right:0;bottom:6px}.d3-drawing-rail hr{width:24px;border:0;border-top:1px solid var(--d3-line);margin:5px 0}.d3-shell .dz-chart-wrap{border:0;border-radius:0;min-width:0;background:var(--paper-2)}.d3-draw-menu{position:absolute;z-index:10;left:38px;top:30px;min-width:245px;padding:8px;background:var(--paper-2,#1d2026);box-shadow:0 8px 35px #0008;border:1px solid var(--d3-line);border-radius:7px}.d3-draw-menu button{display:block;width:100%;text-align:left;border:0;padding:10px 12px}.d3-active{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:12px}.d3-active button{font-size:10px;padding:5px 8px;color:var(--muted)}.d3-shell .dz-dim{font-size:11px;line-height:1.7}.d3-shell .dz-form{border-radius:6px}.d3-modal{width:min(720px,92vw);max-height:85vh;padding:0;border:1px solid #50462e;background:var(--paper-2,#1c1e23);color:var(--ink,#ddd);border-radius:12px;box-shadow:0 25px 90px #0009;font:14px 'Be Vietnam Pro',sans-serif}.d3-modal::backdrop{background:#0009}.d3-modal header{display:flex;justify-content:space-between;align-items:center;padding:15px 22px;border-bottom:1px solid var(--d3-line)}.d3-modal header h3{font-size:16px;margin:0}.d3-modal header button{background:none;border:0;font-size:25px;color:inherit;cursor:pointer}.d3-modal-tabs{display:flex;gap:12px;padding:15px 20px}.d3-ind-layout{display:grid;grid-template-columns:150px minmax(0,1fr);min-height:370px;max-height:52vh;overflow:auto}.d3-ind-layout nav{border-right:1px solid var(--d3-line);overflow:auto}.d3-ind-row{display:flex;align-items:center;padding:5px 12px;gap:4px}.d3-ind-row.selected{background:rgba(213,172,67,.13)}.d3-ind-row input{accent-color:#d5ac43}.d3-ind-row button{display:flex;justify-content:space-between;flex:1;background:none;color:inherit;padding:9px 5px;border:0;cursor:pointer;text-align:left;font:inherit;font-size:12px}#d3-ind-editor{padding:5px 24px 24px}#d3-ind-editor h4{font-size:18px;margin:8px 0 4px}.d3-param{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:7px 0;font-size:12px}.d3-param input,.d3-param select{width:120px;padding:8px;border:1px solid #45464b;background:var(--paper,#17191e);border-radius:5px;color:inherit}.d3-param input[type=color]{height:36px;padding:3px}.d3-modal footer{padding:18px 22px;display:flex;justify-content:flex-end;gap:10px;border-top:1px solid var(--d3-line)}.d3-gold{background:#d5ac43;color:#111;border-color:#d5ac43}.d3-colors{display:flex;gap:12px;font-size:11px;margin-top:15px}.d3-colors label{display:flex;flex-direction:column;gap:8px}.d3-colors input{width:40px;height:30px;border:0;background:none}.d3-object{padding:12px 20px;display:flex;gap:10px;align-items:center;justify-content:space-between}.d3-tab-content{padding:15px 12px;min-height:600px;line-height:1.9;font-size:13px}.d3-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:30px}.d3-info-grid dl>div{display:flex;justify-content:space-between;gap:20px;padding:10px 0;border-bottom:1px solid var(--d3-line)}.d3-info-grid dt{color:var(--muted)}.d3-info-grid dd{margin:0}.d3-data-cards{display:flex;gap:20px}.d3-data-cards div{flex:1;padding:20px;border:1px solid var(--d3-line);border-radius:8px}.d3-data-cards strong,.d3-data-cards small{display:block}.d3-depth-bar{background:#e65e6f;height:8px;margin:20px 0}.d3-depth-bar span{display:block;height:8px;background:#2eaf86}.dz-col-mid:fullscreen{overflow:auto;padding:25px;background:#15171b}.d3-shell [hidden]{display:none!important}.d3-shell .dz-col-mk h3{font-size:12px}.d3-shell .dz-pairhead{border-radius:8px;margin-bottom:8px}.d3-shell .dz-ffields label{font-size:12px}.d3-shell .dz-table{font-size:12px}.d3-shell .dz-summary{font-size:12px}\n@media(max-width:1150px){.d3-shell .dz-grid{grid-template-columns:175px minmax(0,1fr)}.d3-shell .dz-col-mk{grid-column:1/-1;order:3}.d3-shell .dz-col-mk #dz-markets{display:grid;grid-template-columns:repeat(3,1fr)}.d3-shell .dz-col-mk .dz-ob-head{display:none}}\n@media(max-width:760px){body[data-page=demo] #app{padding:0 8px 25px}.d3-title{align-items:flex-start;flex-direction:column}.d3-title h2{font-size:25px}.d3-pill{font-size:10px}.d3-market-tabs{gap:5px}.d3-market-tabs button{font-size:11px;padding:7px}.d3-shell .dz-grid{display:flex;flex-direction:column}.d3-shell .dz-col-mid{order:0;padding:0 6px 12px}.d3-shell .dz-col-ob{order:2}.d3-shell .dz-col-mk{order:1}.d3-shell .dz-col-mk #dz-markets{grid-template-columns:1fr 1fr}.d3-shell .dz-pairhead{gap:14px;padding:12px}.d3-shell .dz-stat{font-size:10px}.d3-shell .dz-lastprice{font-size:21px}.d3-content-tabs{gap:15px}.d3-content-tabs button{font-size:12px}.d3-chart-layout{grid-template-columns:32px minmax(0,1fr)}.d3-drawing-rail button{width:30px;font-size:19px}.d3-shell #dz-chart{height:560px!important}.d3-ind-layout{grid-template-columns:100px minmax(0,1fr)}#d3-ind-editor{padding:4px 12px 20px}.d3-ind-row{padding:4px 5px}.d3-param{gap:8px}.d3-param input,.d3-param select{width:80px}.d3-colors{gap:3px}.d3-colors input{width:33px}.d3-modal footer{padding:12px 8px;gap:5px}.d3-modal footer button{font-size:11px;padding:8px}.d3-info-grid{grid-template-columns:1fr}.d3-draw-menu{left:30px;min-width:220px}.d3-data-cards{flex-direction:column}.d3-tab-content{padding:10px}.d3-shell .dz-summary{gap:12px}.d3-title h2{margin:3px 0}}\n.d3-modal{position:fixed;inset:0;margin:auto}.d3-modal>p{padding:20px}.d3-shell .dz-col-mid .d3-btn{font-size:12px}body[data-page=demo] .hero{display:none!important}.d3-shell .dz-col-mid{background:var(--paper,#141619)}\n@media(max-width:760px){.d3-modal{max-height:90vh}.d3-modal header{padding:12px}.d3-shell .d3-btn{font-size:11px}}\n\n.d3-content-tabs{overflow-x:auto;gap:14px}.d3-content-tabs button{flex-shrink:0}.d3-shell .dz-bottom{overflow-x:auto}.d3-shell .dz-mkrow{width:100%;text-align:left;border:0;background:none;color:inherit;display:grid;grid-template-columns:1.2fr 1fr .7fr}.d3-shell .dz-mkrow.cur{background:#d5ac431c;color:#d5ac43}.d3-shell .dz-col-mk #dz-markets{display:block}.d3-shell #d3-text-note{padding:7px;background:var(--paper);color:var(--ink);border:1px solid var(--d3-line);border-radius:5px;max-width:100%}.d3-shell .dz-table th:nth-child(3){white-space:nowrap}\n\n.d3-line-controls{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:0 0 14px;font-size:11px}.d3-line-controls select{padding:5px;background:var(--paper,#17191e);color:inherit;border:1px solid #45464b;border-radius:4px}.d3-line-controls input{accent-color:#d5ac43}.d3-colors{flex-wrap:wrap}\n";document.head.appendChild(s)})();
