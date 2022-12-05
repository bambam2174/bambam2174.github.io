/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
class e {
    addEventListener(e, t) {
        void 0 === this._listeners && (this._listeners = {});
        const n = this._listeners;
        void 0 === n[e] && (n[e] = []),
        -1 === n[e].indexOf(t) && n[e].push(t)
    }
    hasEventListener(e, t) {
        if (void 0 === this._listeners)
            return !1;
        const n = this._listeners;
        return void 0 !== n[e] && -1 !== n[e].indexOf(t)
    }
    removeEventListener(e, t) {
        if (void 0 === this._listeners)
            return;
        const n = this._listeners[e];
        if (void 0 !== n) {
            const e = n.indexOf(t);
            -1 !== e && n.splice(e, 1)
        }
    }
    dispatchEvent(e) {
        if (void 0 === this._listeners)
            return;
        const t = this._listeners[e.type];
        if (void 0 !== t) {
            e.target = this;
            const n = t.slice(0);
            for (let t = 0, i = n.length; t < i; t++)
                n[t].call(this, e);
            e.target = null
        }
    }
}
const t = [];
for (let Rr = 0; Rr < 256; Rr++)
    t[Rr] = (Rr < 16 ? "0" : "") + Rr.toString(16);
let n = 1234567;
const i = Math.PI / 180
  , r = 180 / Math.PI;
function a() {
    const e = 4294967295 * Math.random() | 0
      , n = 4294967295 * Math.random() | 0
      , i = 4294967295 * Math.random() | 0
      , r = 4294967295 * Math.random() | 0;
    return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & n] + t[n >> 8 & 255] + "-" + t[n >> 16 & 15 | 64] + t[n >> 24 & 255] + "-" + t[63 & i | 128] + t[i >> 8 & 255] + "-" + t[i >> 16 & 255] + t[i >> 24 & 255] + t[255 & r] + t[r >> 8 & 255] + t[r >> 16 & 255] + t[r >> 24 & 255]).toUpperCase()
}
function s(e, t, n) {
    return Math.max(t, Math.min(n, e))
}
function o(e, t) {
    return (e % t + t) % t
}
function l(e, t, n) {
    return (1 - n) * e + n * t
}
function c(e) {
    return 0 == (e & e - 1) && 0 !== e
}
function h(e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
}
function u(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
}
var d = Object.freeze({
    __proto__: null,
    DEG2RAD: i,
    RAD2DEG: r,
    generateUUID: a,
    clamp: s,
    euclideanModulo: o,
    mapLinear: function(e, t, n, i, r) {
        return i + (e - t) * (r - i) / (n - t)
    },
    inverseLerp: function(e, t, n) {
        return e !== t ? (n - e) / (t - e) : 0
    },
    lerp: l,
    damp: function(e, t, n, i) {
        return l(e, t, 1 - Math.exp(-n * i))
    },
    pingpong: function(e, t=1) {
        return t - Math.abs(o(e, 2 * t) - t)
    },
    smoothstep: function(e, t, n) {
        return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e)
    },
    smootherstep: function(e, t, n) {
        return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10)
    },
    randInt: function(e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
    },
    randFloat: function(e, t) {
        return e + Math.random() * (t - e)
    },
    randFloatSpread: function(e) {
        return e * (.5 - Math.random())
    },
    seededRandom: function(e) {
        return void 0 !== e && (n = e % 2147483647),
        n = 16807 * n % 2147483647,
        (n - 1) / 2147483646
    },
    degToRad: function(e) {
        return e * i
    },
    radToDeg: function(e) {
        return e * r
    },
    isPowerOfTwo: c,
    ceilPowerOfTwo: h,
    floorPowerOfTwo: u,
    setQuaternionFromProperEuler: function(e, t, n, i, r) {
        const a = Math.cos
          , s = Math.sin
          , o = a(n / 2)
          , l = s(n / 2)
          , c = a((t + i) / 2)
          , h = s((t + i) / 2)
          , u = a((t - i) / 2)
          , d = s((t - i) / 2)
          , p = a((i - t) / 2)
          , m = s((i - t) / 2);
        switch (r) {
        case "XYX":
            e.set(o * h, l * u, l * d, o * c);
            break;
        case "YZY":
            e.set(l * d, o * h, l * u, o * c);
            break;
        case "ZXZ":
            e.set(l * u, l * d, o * h, o * c);
            break;
        case "XZX":
            e.set(o * h, l * m, l * p, o * c);
            break;
        case "YXY":
            e.set(l * p, o * h, l * m, o * c);
            break;
        case "ZYZ":
            e.set(l * m, l * p, o * h, o * c);
            break;
        default:
            console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
        }
    }
});
class p {
    constructor(e=0, t=0) {
        this.x = e,
        this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e,
        this.y = t,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    }
    add(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this)
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    }
    sub(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this)
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6],
        this.y = i[1] * t + i[4] * n + i[7],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e
    }
    fromBufferAttribute(e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
        this.x = e.getX(t),
        this.y = e.getY(t),
        this
    }
    rotateAround(e, t) {
        const n = Math.cos(t)
          , i = Math.sin(t)
          , r = this.x - e.x
          , a = this.y - e.y;
        return this.x = r * n - a * i + e.x,
        this.y = r * i + a * n + e.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
}
p.prototype.isVector2 = !0;
class m {
    constructor() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    set(e, t, n, i, r, a, s, o, l) {
        const c = this.elements;
        return c[0] = e,
        c[1] = i,
        c[2] = s,
        c[3] = t,
        c[4] = r,
        c[5] = o,
        c[6] = n,
        c[7] = a,
        c[8] = l,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , i = t.elements
          , r = this.elements
          , a = n[0]
          , s = n[3]
          , o = n[6]
          , l = n[1]
          , c = n[4]
          , h = n[7]
          , u = n[2]
          , d = n[5]
          , p = n[8]
          , m = i[0]
          , f = i[3]
          , g = i[6]
          , v = i[1]
          , x = i[4]
          , _ = i[7]
          , y = i[2]
          , M = i[5]
          , w = i[8];
        return r[0] = a * m + s * v + o * y,
        r[3] = a * f + s * x + o * M,
        r[6] = a * g + s * _ + o * w,
        r[1] = l * m + c * v + h * y,
        r[4] = l * f + c * x + h * M,
        r[7] = l * g + c * _ + h * w,
        r[2] = u * m + d * v + p * y,
        r[5] = u * f + d * x + p * M,
        r[8] = u * g + d * _ + p * w,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , i = e[2]
          , r = e[3]
          , a = e[4]
          , s = e[5]
          , o = e[6]
          , l = e[7]
          , c = e[8];
        return t * a * c - t * s * l - n * r * c + n * s * o + i * r * l - i * a * o
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , i = e[2]
          , r = e[3]
          , a = e[4]
          , s = e[5]
          , o = e[6]
          , l = e[7]
          , c = e[8]
          , h = c * a - s * l
          , u = s * o - c * r
          , d = l * r - a * o
          , p = t * h + n * u + i * d;
        if (0 === p)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const m = 1 / p;
        return e[0] = h * m,
        e[1] = (i * l - c * n) * m,
        e[2] = (s * n - i * a) * m,
        e[3] = u * m,
        e[4] = (c * t - i * o) * m,
        e[5] = (i * r - s * t) * m,
        e[6] = d * m,
        e[7] = (n * o - l * t) * m,
        e[8] = (a * t - n * r) * m,
        this
    }
    transpose() {
        let e;
        const t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    }
    setUvTransform(e, t, n, i, r, a, s) {
        const o = Math.cos(r)
          , l = Math.sin(r);
        return this.set(n * o, n * l, -n * (o * a + l * s) + a + e, -i * l, i * o, -i * (-l * a + o * s) + s + t, 0, 0, 1),
        this
    }
    scale(e, t) {
        const n = this.elements;
        return n[0] *= e,
        n[3] *= e,
        n[6] *= e,
        n[1] *= t,
        n[4] *= t,
        n[7] *= t,
        this
    }
    rotate(e) {
        const t = Math.cos(e)
          , n = Math.sin(e)
          , i = this.elements
          , r = i[0]
          , a = i[3]
          , s = i[6]
          , o = i[1]
          , l = i[4]
          , c = i[7];
        return i[0] = t * r + n * o,
        i[3] = t * a + n * l,
        i[6] = t * s + n * c,
        i[1] = -n * r + t * o,
        i[4] = -n * a + t * l,
        i[7] = -n * s + t * c,
        this
    }
    translate(e, t) {
        const n = this.elements;
        return n[0] += e * n[2],
        n[3] += e * n[5],
        n[6] += e * n[8],
        n[1] += t * n[2],
        n[4] += t * n[5],
        n[7] += t * n[8],
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let i = 0; i < 9; i++)
            if (t[i] !== n[i])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 9; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e
    }
    clone() {
        return (new this.constructor).fromArray(this.elements)
    }
}
let f;
m.prototype.isMatrix3 = !0;
class g {
    static getDataURL(e) {
        if (/^data:/i.test(e.src))
            return e.src;
        if ("undefined" == typeof HTMLCanvasElement)
            return e.src;
        let t;
        if (e instanceof HTMLCanvasElement)
            t = e;
        else {
            void 0 === f && (f = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")),
            f.width = e.width,
            f.height = e.height;
            const n = f.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height),
            t = f
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
        t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
    }
}
let v = 0;
class x extends e {
    constructor(e=x.DEFAULT_IMAGE, t=x.DEFAULT_MAPPING, n=1001, i=1001, r=1006, s=1008, o=1023, l=1009, c=1, h=3e3) {
        super(),
        Object.defineProperty(this, "id", {
            value: v++
        }),
        this.uuid = a(),
        this.name = "",
        this.image = e,
        this.mipmaps = [],
        this.mapping = t,
        this.wrapS = n,
        this.wrapT = i,
        this.magFilter = r,
        this.minFilter = s,
        this.anisotropy = c,
        this.format = o,
        this.internalFormat = null,
        this.type = l,
        this.offset = new p(0,0),
        this.repeat = new p(1,1),
        this.center = new p(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new m,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.encoding = h,
        this.version = 0,
        this.onUpdate = null
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.name = e.name,
        this.image = e.image,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.internalFormat = e.internalFormat,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        this.rotation = e.rotation,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrix.copy(e.matrix),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.encoding = e.encoding,
        this
    }
    toJSON(e) {
        const t = void 0 === e || "string" == typeof e;
        if (!t && void 0 !== e.textures[this.uuid])
            return e.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        if (void 0 !== this.image) {
            const i = this.image;
            if (void 0 === i.uuid && (i.uuid = a()),
            !t && void 0 === e.images[i.uuid]) {
                let t;
                if (Array.isArray(i)) {
                    t = [];
                    for (let e = 0, n = i.length; e < n; e++)
                        i[e].isDataTexture ? t.push(_(i[e].image)) : t.push(_(i[e]))
                } else
                    t = _(i);
                e.images[i.uuid] = {
                    uuid: i.uuid,
                    url: t
                }
            }
            n.image = i.uuid
        }
        return t || (e.textures[this.uuid] = n),
        n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(e) {
        if (300 !== this.mapping)
            return e;
        if (e.applyMatrix3(this.matrix),
        e.x < 0 || e.x > 1)
            switch (this.wrapS) {
            case 1e3:
                e.x = e.x - Math.floor(e.x);
                break;
            case 1001:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case 1002:
                1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
            }
        if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
            case 1e3:
                e.y = e.y - Math.floor(e.y);
                break;
            case 1001:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case 1002:
                1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
            }
        return this.flipY && (e.y = 1 - e.y),
        e
    }
    set needsUpdate(e) {
        !0 === e && this.version++
    }
}
function _(e) {
    return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap ? g.getDataURL(e) : e.data ? {
        data: Array.prototype.slice.call(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."),
    {})
}
x.DEFAULT_IMAGE = void 0,
x.DEFAULT_MAPPING = 300,
x.prototype.isTexture = !0;
class y {
    constructor(e=0, t=0, n=0, i=1) {
        this.x = e,
        this.y = t,
        this.z = n,
        this.w = i
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, i) {
        return this.x = e,
        this.y = t,
        this.z = n,
        this.w = i,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setW(e) {
        return this.w = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = void 0 !== e.w ? e.w : 1,
        this
    }
    add(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this)
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    }
    sub(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this)
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this.w *= e.w,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e,
        this
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , r = this.w
          , a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r,
        this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r,
        this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r,
        this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, i, r;
        const a = .01
          , s = .1
          , o = e.elements
          , l = o[0]
          , c = o[4]
          , h = o[8]
          , u = o[1]
          , d = o[5]
          , p = o[9]
          , m = o[2]
          , f = o[6]
          , g = o[10];
        if (Math.abs(c - u) < a && Math.abs(h - m) < a && Math.abs(p - f) < a) {
            if (Math.abs(c + u) < s && Math.abs(h + m) < s && Math.abs(p + f) < s && Math.abs(l + d + g - 3) < s)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            const e = (l + 1) / 2
              , o = (d + 1) / 2
              , v = (g + 1) / 2
              , x = (c + u) / 4
              , _ = (h + m) / 4
              , y = (p + f) / 4;
            return e > o && e > v ? e < a ? (n = 0,
            i = .707106781,
            r = .707106781) : (n = Math.sqrt(e),
            i = x / n,
            r = _ / n) : o > v ? o < a ? (n = .707106781,
            i = 0,
            r = .707106781) : (i = Math.sqrt(o),
            n = x / i,
            r = y / i) : v < a ? (n = .707106781,
            i = .707106781,
            r = 0) : (r = Math.sqrt(v),
            n = _ / r,
            i = y / r),
            this.set(n, i, r, t),
            this
        }
        let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
        return Math.abs(v) < .001 && (v = 1),
        this.x = (f - p) / v,
        this.y = (h - m) / v,
        this.z = (u - c) / v,
        this.w = Math.acos((l + d + g - 1) / 2),
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this.w = Math.max(e.w, Math.min(t.w, this.w)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this.w = Math.max(e, Math.min(t, this.w)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
        this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this.w = e.w + (t.w - e.w) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    }
    fromBufferAttribute(e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
        this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this.w = e.getW(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
}
y.prototype.isVector4 = !0;
class M extends e {
    constructor(e, t, n) {
        super(),
        this.width = e,
        this.height = t,
        this.depth = 1,
        this.scissor = new y(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new y(0,0,e,t),
        n = n || {},
        this.texture = new x(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
        this.texture.image = {},
        this.texture.image.width = e,
        this.texture.image.height = t,
        this.texture.image.depth = 1,
        this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps,
        this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006,
        this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
        this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer,
        this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
    }
    setTexture(e) {
        e.image = {
            width: this.width,
            height: this.height,
            depth: this.depth
        },
        this.texture = e
    }
    setSize(e, t, n=1) {
        this.width === e && this.height === t && this.depth === n || (this.width = e,
        this.height = t,
        this.depth = n,
        this.texture.image.width = e,
        this.texture.image.height = t,
        this.texture.image.depth = n,
        this.dispose()),
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.width = e.width,
        this.height = e.height,
        this.depth = e.depth,
        this.viewport.copy(e.viewport),
        this.texture = e.texture.clone(),
        this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        this.depthTexture = e.depthTexture,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
M.prototype.isWebGLRenderTarget = !0;
class w {
    constructor(e=0, t=0, n=0, i=1) {
        this._x = e,
        this._y = t,
        this._z = n,
        this._w = i
    }
    static slerp(e, t, n, i) {
        return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),
        n.slerpQuaternions(e, t, i)
    }
    static slerpFlat(e, t, n, i, r, a, s) {
        let o = n[i + 0]
          , l = n[i + 1]
          , c = n[i + 2]
          , h = n[i + 3];
        const u = r[a + 0]
          , d = r[a + 1]
          , p = r[a + 2]
          , m = r[a + 3];
        if (0 === s)
            return e[t + 0] = o,
            e[t + 1] = l,
            e[t + 2] = c,
            void (e[t + 3] = h);
        if (1 === s)
            return e[t + 0] = u,
            e[t + 1] = d,
            e[t + 2] = p,
            void (e[t + 3] = m);
        if (h !== m || o !== u || l !== d || c !== p) {
            let e = 1 - s;
            const t = o * u + l * d + c * p + h * m
              , n = t >= 0 ? 1 : -1
              , i = 1 - t * t;
            if (i > Number.EPSILON) {
                const r = Math.sqrt(i)
                  , a = Math.atan2(r, t * n);
                e = Math.sin(e * a) / r,
                s = Math.sin(s * a) / r
            }
            const r = s * n;
            if (o = o * e + u * r,
            l = l * e + d * r,
            c = c * e + p * r,
            h = h * e + m * r,
            e === 1 - s) {
                const e = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                o *= e,
                l *= e,
                c *= e,
                h *= e
            }
        }
        e[t] = o,
        e[t + 1] = l,
        e[t + 2] = c,
        e[t + 3] = h
    }
    static multiplyQuaternionsFlat(e, t, n, i, r, a) {
        const s = n[i]
          , o = n[i + 1]
          , l = n[i + 2]
          , c = n[i + 3]
          , h = r[a]
          , u = r[a + 1]
          , d = r[a + 2]
          , p = r[a + 3];
        return e[t] = s * p + c * h + o * d - l * u,
        e[t + 1] = o * p + c * u + l * h - s * d,
        e[t + 2] = l * p + c * d + s * u - o * h,
        e[t + 3] = c * p - s * h - o * u - l * d,
        e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e,
        this._onChangeCallback()
    }
    set(e, t, n, i) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._w = i,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(e, t) {
        if (!e || !e.isEuler)
            throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        const n = e._x
          , i = e._y
          , r = e._z
          , a = e._order
          , s = Math.cos
          , o = Math.sin
          , l = s(n / 2)
          , c = s(i / 2)
          , h = s(r / 2)
          , u = o(n / 2)
          , d = o(i / 2)
          , p = o(r / 2);
        switch (a) {
        case "XYZ":
            this._x = u * c * h + l * d * p,
            this._y = l * d * h - u * c * p,
            this._z = l * c * p + u * d * h,
            this._w = l * c * h - u * d * p;
            break;
        case "YXZ":
            this._x = u * c * h + l * d * p,
            this._y = l * d * h - u * c * p,
            this._z = l * c * p - u * d * h,
            this._w = l * c * h + u * d * p;
            break;
        case "ZXY":
            this._x = u * c * h - l * d * p,
            this._y = l * d * h + u * c * p,
            this._z = l * c * p + u * d * h,
            this._w = l * c * h - u * d * p;
            break;
        case "ZYX":
            this._x = u * c * h - l * d * p,
            this._y = l * d * h + u * c * p,
            this._z = l * c * p - u * d * h,
            this._w = l * c * h + u * d * p;
            break;
        case "YZX":
            this._x = u * c * h + l * d * p,
            this._y = l * d * h + u * c * p,
            this._z = l * c * p - u * d * h,
            this._w = l * c * h - u * d * p;
            break;
        case "XZY":
            this._x = u * c * h - l * d * p,
            this._y = l * d * h - u * c * p,
            this._z = l * c * p + u * d * h,
            this._w = l * c * h + u * d * p;
            break;
        default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
        }
        return !1 !== t && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(e, t) {
        const n = t / 2
          , i = Math.sin(n);
        return this._x = e.x * i,
        this._y = e.y * i,
        this._z = e.z * i,
        this._w = Math.cos(n),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e) {
        const t = e.elements
          , n = t[0]
          , i = t[4]
          , r = t[8]
          , a = t[1]
          , s = t[5]
          , o = t[9]
          , l = t[2]
          , c = t[6]
          , h = t[10]
          , u = n + s + h;
        if (u > 0) {
            const e = .5 / Math.sqrt(u + 1);
            this._w = .25 / e,
            this._x = (c - o) * e,
            this._y = (r - l) * e,
            this._z = (a - i) * e
        } else if (n > s && n > h) {
            const e = 2 * Math.sqrt(1 + n - s - h);
            this._w = (c - o) / e,
            this._x = .25 * e,
            this._y = (i + a) / e,
            this._z = (r + l) / e
        } else if (s > h) {
            const e = 2 * Math.sqrt(1 + s - n - h);
            this._w = (r - l) / e,
            this._x = (i + a) / e,
            this._y = .25 * e,
            this._z = (o + c) / e
        } else {
            const e = 2 * Math.sqrt(1 + h - n - s);
            this._w = (a - i) / e,
            this._x = (r + l) / e,
            this._y = (o + c) / e,
            this._z = .25 * e
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < Number.EPSILON ? (n = 0,
        Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
        this._y = e.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -e.z,
        this._z = e.y,
        this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
        this._y = e.z * t.x - e.x * t.z,
        this._z = e.x * t.y - e.y * t.x,
        this._w = n),
        this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(s(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        const n = this.angleTo(e);
        if (0 === n)
            return this;
        const i = Math.min(1, t / n);
        return this.slerp(e, i),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return 0 === e ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x = this._x * e,
        this._y = this._y * e,
        this._z = this._z * e,
        this._w = this._w * e),
        this._onChangeCallback(),
        this
    }
    multiply(e, t) {
        return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
        this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        const n = e._x
          , i = e._y
          , r = e._z
          , a = e._w
          , s = t._x
          , o = t._y
          , l = t._z
          , c = t._w;
        return this._x = n * c + a * s + i * l - r * o,
        this._y = i * c + a * o + r * s - n * l,
        this._z = r * c + a * l + n * o - i * s,
        this._w = a * c - n * s - i * o - r * l,
        this._onChangeCallback(),
        this
    }
    slerp(e, t) {
        if (0 === t)
            return this;
        if (1 === t)
            return this.copy(e);
        const n = this._x
          , i = this._y
          , r = this._z
          , a = this._w;
        let s = a * e._w + n * e._x + i * e._y + r * e._z;
        if (s < 0 ? (this._w = -e._w,
        this._x = -e._x,
        this._y = -e._y,
        this._z = -e._z,
        s = -s) : this.copy(e),
        s >= 1)
            return this._w = a,
            this._x = n,
            this._y = i,
            this._z = r,
            this;
        const o = 1 - s * s;
        if (o <= Number.EPSILON) {
            const e = 1 - t;
            return this._w = e * a + t * this._w,
            this._x = e * n + t * this._x,
            this._y = e * i + t * this._y,
            this._z = e * r + t * this._z,
            this.normalize(),
            this._onChangeCallback(),
            this
        }
        const l = Math.sqrt(o)
          , c = Math.atan2(l, s)
          , h = Math.sin((1 - t) * c) / l
          , u = Math.sin(t * c) / l;
        return this._w = a * h + this._w * u,
        this._x = n * h + this._x * u,
        this._y = i * h + this._y * u,
        this._z = r * h + this._z * u,
        this._onChangeCallback(),
        this
    }
    slerpQuaternions(e, t, n) {
        this.copy(e).slerp(t, n)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t=0) {
        return this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t),
        this._y = e.getY(t),
        this._z = e.getZ(t),
        this._w = e.getW(t),
        this
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
}
w.prototype.isQuaternion = !0;
class b {
    constructor(e=0, t=0, n=0) {
        this.x = e,
        this.y = t,
        this.z = n
    }
    set(e, t, n) {
        return void 0 === n && (n = this.z),
        this.x = e,
        this.y = t,
        this.z = n,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    }
    add(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this)
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    }
    sub(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this)
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    }
    multiply(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
        this.multiplyVectors(e, t)) : (this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this)
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    }
    applyEuler(e) {
        return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
        this.applyQuaternion(E.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(E.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6] * i,
        this.y = r[1] * t + r[4] * n + r[7] * i,
        this.z = r[2] * t + r[5] * n + r[8] * i,
        this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , r = e.elements
          , a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
        return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a,
        this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a,
        this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a,
        this
    }
    applyQuaternion(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , r = e.x
          , a = e.y
          , s = e.z
          , o = e.w
          , l = o * t + a * i - s * n
          , c = o * n + s * t - r * i
          , h = o * i + r * n - a * t
          , u = -r * t - a * n - s * i;
        return this.x = l * o + u * -r + c * -s - h * -a,
        this.y = c * o + u * -a + h * -r - l * -s,
        this.z = h * o + u * -s + l * -a - c * -r,
        this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , r = e.elements;
        return this.x = r[0] * t + r[4] * n + r[8] * i,
        this.y = r[1] * t + r[5] * n + r[9] * i,
        this.z = r[2] * t + r[6] * n + r[10] * i,
        this.normalize()
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this
    }
    cross(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
        this.crossVectors(e, t)) : this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        const n = e.x
          , i = e.y
          , r = e.z
          , a = t.x
          , s = t.y
          , o = t.z;
        return this.x = i * o - r * s,
        this.y = r * a - n * o,
        this.z = n * s - i * a,
        this
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (0 === t)
            return this.set(0, 0, 0);
        const n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return S.copy(this).projectOnVector(e),
        this.sub(S)
    }
    reflect(e) {
        return this.sub(S.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (0 === t)
            return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(s(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y
          , i = this.z - e.z;
        return t * t + n * n + i * i
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        const i = Math.sin(t) * e;
        return this.x = i * Math.sin(n),
        this.y = Math.cos(t) * e,
        this.z = i * Math.cos(n),
        this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t),
        this.y = n,
        this.z = e * Math.cos(t),
        this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length()
          , n = this.setFromMatrixColumn(e, 1).length()
          , i = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = n,
        this.z = i,
        this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, 4 * t)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, 3 * t)
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    }
    fromBufferAttribute(e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
        this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
}
b.prototype.isVector3 = !0;
const S = new b
  , E = new w;
class T {
    constructor(e=new b(1 / 0,1 / 0,1 / 0), t=new b(-1 / 0,-1 / 0,-1 / 0)) {
        this.min = e,
        this.max = t
    }
    set(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    }
    setFromArray(e) {
        let t = 1 / 0
          , n = 1 / 0
          , i = 1 / 0
          , r = -1 / 0
          , a = -1 / 0
          , s = -1 / 0;
        for (let o = 0, l = e.length; o < l; o += 3) {
            const l = e[o]
              , c = e[o + 1]
              , h = e[o + 2];
            l < t && (t = l),
            c < n && (n = c),
            h < i && (i = h),
            l > r && (r = l),
            c > a && (a = c),
            h > s && (s = h)
        }
        return this.min.set(t, n, i),
        this.max.set(r, a, s),
        this
    }
    setFromBufferAttribute(e) {
        let t = 1 / 0
          , n = 1 / 0
          , i = 1 / 0
          , r = -1 / 0
          , a = -1 / 0
          , s = -1 / 0;
        for (let o = 0, l = e.count; o < l; o++) {
            const l = e.getX(o)
              , c = e.getY(o)
              , h = e.getZ(o);
            l < t && (t = l),
            c < n && (n = c),
            h < i && (i = h),
            l > r && (r = l),
            c > a && (a = c),
            h > s && (s = h)
        }
        return this.min.set(t, n, i),
        this.max.set(r, a, s),
        this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++)
            this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        const n = A.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n),
        this.max.copy(e).add(n),
        this
    }
    setFromObject(e) {
        return this.makeEmpty(),
        this.expandByObject(e)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return void 0 === e && (console.warn("THREE.Box3: .getCenter() target is now required"),
        e = new b),
        this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return void 0 === e && (console.warn("THREE.Box3: .getSize() target is now required"),
        e = new b),
        this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    }
    expandByVector(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    }
    expandByObject(e) {
        e.updateWorldMatrix(!1, !1);
        const t = e.geometry;
        void 0 !== t && (null === t.boundingBox && t.computeBoundingBox(),
        R.copy(t.boundingBox),
        R.applyMatrix4(e.matrixWorld),
        this.union(R));
        const n = e.children;
        for (let i = 0, r = n.length; i < r; i++)
            this.expandByObject(n[i]);
        return this
    }
    containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return void 0 === t && (console.warn("THREE.Box3: .getParameter() target is now required"),
        t = new b),
        t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, A),
        A.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        n = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        n += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        n += e.normal.z * this.min.z),
        t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty())
            return !1;
        this.getCenter(F),
        H.subVectors(this.max, F),
        C.subVectors(e.a, F),
        P.subVectors(e.b, F),
        D.subVectors(e.c, F),
        N.subVectors(P, C),
        I.subVectors(D, P),
        z.subVectors(C, D);
        let t = [0, -N.z, N.y, 0, -I.z, I.y, 0, -z.z, z.y, N.z, 0, -N.x, I.z, 0, -I.x, z.z, 0, -z.x, -N.y, N.x, 0, -I.y, I.x, 0, -z.y, z.x, 0];
        return !!G(t, C, P, D, H) && (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !!G(t, C, P, D, H) && (O.crossVectors(N, I),
        t = [O.x, O.y, O.z],
        G(t, C, P, D, H)))
    }
    clampPoint(e, t) {
        return void 0 === t && (console.warn("THREE.Box3: .clampPoint() target is now required"),
        t = new b),
        t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return A.copy(e).clamp(this.min, this.max).sub(e).length()
    }
    getBoundingSphere(e) {
        return void 0 === e && console.error("THREE.Box3: .getBoundingSphere() target is now required"),
        this.getCenter(e.center),
        e.radius = .5 * this.getSize(A).length(),
        e
    }
    intersect(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    }
    applyMatrix4(e) {
        return this.isEmpty() || (L[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        L[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        L[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        L[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        L[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        L[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        L[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        L[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(L)),
        this
    }
    translate(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
}
T.prototype.isBox3 = !0;
const L = [new b, new b, new b, new b, new b, new b, new b, new b]
  , A = new b
  , R = new T
  , C = new b
  , P = new b
  , D = new b
  , N = new b
  , I = new b
  , z = new b
  , F = new b
  , H = new b
  , O = new b
  , U = new b;
function G(e, t, n, i, r) {
    for (let a = 0, s = e.length - 3; a <= s; a += 3) {
        U.fromArray(e, a);
        const s = r.x * Math.abs(U.x) + r.y * Math.abs(U.y) + r.z * Math.abs(U.z)
          , o = t.dot(U)
          , l = n.dot(U)
          , c = i.dot(U);
        if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s)
            return !1
    }
    return !0
}
const B = new T
  , V = new b
  , W = new b
  , k = new b;
class j {
    constructor(e=new b, t=-1) {
        this.center = e,
        this.radius = t
    }
    set(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    }
    setFromPoints(e, t) {
        const n = this.center;
        void 0 !== t ? n.copy(t) : B.setFromPoints(e).getCenter(n);
        let i = 0;
        for (let r = 0, a = e.length; r < a; r++)
            i = Math.max(i, n.distanceToSquared(e[r]));
        return this.radius = Math.sqrt(i),
        this
    }
    copy(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        const n = this.center.distanceToSquared(e);
        return void 0 === t && (console.warn("THREE.Sphere: .clampPoint() target is now required"),
        t = new b),
        t.copy(e),
        n > this.radius * this.radius && (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
        t
    }
    getBoundingBox(e) {
        return void 0 === e && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
        e = new T),
        this.isEmpty() ? (e.makeEmpty(),
        e) : (e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this
    }
    translate(e) {
        return this.center.add(e),
        this
    }
    expandByPoint(e) {
        k.subVectors(e, this.center);
        const t = k.lengthSq();
        if (t > this.radius * this.radius) {
            const e = Math.sqrt(t)
              , n = .5 * (e - this.radius);
            this.center.add(k.multiplyScalar(n / e)),
            this.radius += n
        }
        return this
    }
    union(e) {
        return W.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius),
        this.expandByPoint(V.copy(e.center).add(W)),
        this.expandByPoint(V.copy(e.center).sub(W)),
        this
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
const q = new b
  , X = new b
  , Y = new b
  , Z = new b
  , J = new b
  , Q = new b
  , K = new b;
class $ {
    constructor(e=new b, t=new b(0,0,-1)) {
        this.origin = e,
        this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    }
    copy(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    }
    at(e, t) {
        return void 0 === t && (console.warn("THREE.Ray: .at() target is now required"),
        t = new b),
        t.copy(this.direction).multiplyScalar(e).add(this.origin)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    }
    recast(e) {
        return this.origin.copy(this.at(e, q)),
        this
    }
    closestPointToPoint(e, t) {
        void 0 === t && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
        t = new b),
        t.subVectors(e, this.origin);
        const n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        const t = q.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (q.copy(this.direction).multiplyScalar(t).add(this.origin),
        q.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, i) {
        X.copy(e).add(t).multiplyScalar(.5),
        Y.copy(t).sub(e).normalize(),
        Z.copy(this.origin).sub(X);
        const r = .5 * e.distanceTo(t)
          , a = -this.direction.dot(Y)
          , s = Z.dot(this.direction)
          , o = -Z.dot(Y)
          , l = Z.lengthSq()
          , c = Math.abs(1 - a * a);
        let h, u, d, p;
        if (c > 0)
            if (h = a * o - s,
            u = a * s - o,
            p = r * c,
            h >= 0)
                if (u >= -p)
                    if (u <= p) {
                        const e = 1 / c;
                        h *= e,
                        u *= e,
                        d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l
                    } else
                        u = r,
                        h = Math.max(0, -(a * u + s)),
                        d = -h * h + u * (u + 2 * o) + l;
                else
                    u = -r,
                    h = Math.max(0, -(a * u + s)),
                    d = -h * h + u * (u + 2 * o) + l;
            else
                u <= -p ? (h = Math.max(0, -(-a * r + s)),
                u = h > 0 ? -r : Math.min(Math.max(-r, -o), r),
                d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0,
                u = Math.min(Math.max(-r, -o), r),
                d = u * (u + 2 * o) + l) : (h = Math.max(0, -(a * r + s)),
                u = h > 0 ? r : Math.min(Math.max(-r, -o), r),
                d = -h * h + u * (u + 2 * o) + l);
        else
            u = a > 0 ? -r : r,
            h = Math.max(0, -(a * u + s)),
            d = -h * h + u * (u + 2 * o) + l;
        return n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
        i && i.copy(Y).multiplyScalar(u).add(X),
        d
    }
    intersectSphere(e, t) {
        q.subVectors(e.center, this.origin);
        const n = q.dot(this.direction)
          , i = q.dot(q) - n * n
          , r = e.radius * e.radius;
        if (i > r)
            return null;
        const a = Math.sqrt(r - i)
          , s = n - a
          , o = n + a;
        return s < 0 && o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t)
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (0 === t)
            return 0 === e.distanceToPoint(this.origin) ? 0 : null;
        const n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        const n = this.distanceToPlane(e);
        return null === n ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        if (0 === t)
            return !0;
        return e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n, i, r, a, s, o;
        const l = 1 / this.direction.x
          , c = 1 / this.direction.y
          , h = 1 / this.direction.z
          , u = this.origin;
        return l >= 0 ? (n = (e.min.x - u.x) * l,
        i = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l,
        i = (e.min.x - u.x) * l),
        c >= 0 ? (r = (e.min.y - u.y) * c,
        a = (e.max.y - u.y) * c) : (r = (e.max.y - u.y) * c,
        a = (e.min.y - u.y) * c),
        n > a || r > i ? null : ((r > n || n != n) && (n = r),
        (a < i || i != i) && (i = a),
        h >= 0 ? (s = (e.min.z - u.z) * h,
        o = (e.max.z - u.z) * h) : (s = (e.max.z - u.z) * h,
        o = (e.min.z - u.z) * h),
        n > o || s > i ? null : ((s > n || n != n) && (n = s),
        (o < i || i != i) && (i = o),
        i < 0 ? null : this.at(n >= 0 ? n : i, t)))
    }
    intersectsBox(e) {
        return null !== this.intersectBox(e, q)
    }
    intersectTriangle(e, t, n, i, r) {
        J.subVectors(t, e),
        Q.subVectors(n, e),
        K.crossVectors(J, Q);
        let a, s = this.direction.dot(K);
        if (s > 0) {
            if (i)
                return null;
            a = 1
        } else {
            if (!(s < 0))
                return null;
            a = -1,
            s = -s
        }
        Z.subVectors(this.origin, e);
        const o = a * this.direction.dot(Q.crossVectors(Z, Q));
        if (o < 0)
            return null;
        const l = a * this.direction.dot(J.cross(Z));
        if (l < 0)
            return null;
        if (o + l > s)
            return null;
        const c = -a * Z.dot(K);
        return c < 0 ? null : this.at(c / s, r)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
class ee {
    constructor() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    set(e, t, n, i, r, a, s, o, l, c, h, u, d, p, m, f) {
        const g = this.elements;
        return g[0] = e,
        g[4] = t,
        g[8] = n,
        g[12] = i,
        g[1] = r,
        g[5] = a,
        g[9] = s,
        g[13] = o,
        g[2] = l,
        g[6] = c,
        g[10] = h,
        g[14] = u,
        g[3] = d,
        g[7] = p,
        g[11] = m,
        g[15] = f,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return (new ee).fromArray(this.elements)
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        t[9] = n[9],
        t[10] = n[10],
        t[11] = n[11],
        t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        t[15] = n[15],
        this
    }
    copyPosition(e) {
        const t = this.elements
          , n = e.elements;
        return t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        this
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(e) {
        const t = this.elements
          , n = e.elements
          , i = 1 / te.setFromMatrixColumn(e, 0).length()
          , r = 1 / te.setFromMatrixColumn(e, 1).length()
          , a = 1 / te.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * i,
        t[1] = n[1] * i,
        t[2] = n[2] * i,
        t[3] = 0,
        t[4] = n[4] * r,
        t[5] = n[5] * r,
        t[6] = n[6] * r,
        t[7] = 0,
        t[8] = n[8] * a,
        t[9] = n[9] * a,
        t[10] = n[10] * a,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromEuler(e) {
        e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        const t = this.elements
          , n = e.x
          , i = e.y
          , r = e.z
          , a = Math.cos(n)
          , s = Math.sin(n)
          , o = Math.cos(i)
          , l = Math.sin(i)
          , c = Math.cos(r)
          , h = Math.sin(r);
        if ("XYZ" === e.order) {
            const e = a * c
              , n = a * h
              , i = s * c
              , r = s * h;
            t[0] = o * c,
            t[4] = -o * h,
            t[8] = l,
            t[1] = n + i * l,
            t[5] = e - r * l,
            t[9] = -s * o,
            t[2] = r - e * l,
            t[6] = i + n * l,
            t[10] = a * o
        } else if ("YXZ" === e.order) {
            const e = o * c
              , n = o * h
              , i = l * c
              , r = l * h;
            t[0] = e + r * s,
            t[4] = i * s - n,
            t[8] = a * l,
            t[1] = a * h,
            t[5] = a * c,
            t[9] = -s,
            t[2] = n * s - i,
            t[6] = r + e * s,
            t[10] = a * o
        } else if ("ZXY" === e.order) {
            const e = o * c
              , n = o * h
              , i = l * c
              , r = l * h;
            t[0] = e - r * s,
            t[4] = -a * h,
            t[8] = i + n * s,
            t[1] = n + i * s,
            t[5] = a * c,
            t[9] = r - e * s,
            t[2] = -a * l,
            t[6] = s,
            t[10] = a * o
        } else if ("ZYX" === e.order) {
            const e = a * c
              , n = a * h
              , i = s * c
              , r = s * h;
            t[0] = o * c,
            t[4] = i * l - n,
            t[8] = e * l + r,
            t[1] = o * h,
            t[5] = r * l + e,
            t[9] = n * l - i,
            t[2] = -l,
            t[6] = s * o,
            t[10] = a * o
        } else if ("YZX" === e.order) {
            const e = a * o
              , n = a * l
              , i = s * o
              , r = s * l;
            t[0] = o * c,
            t[4] = r - e * h,
            t[8] = i * h + n,
            t[1] = h,
            t[5] = a * c,
            t[9] = -s * c,
            t[2] = -l * c,
            t[6] = n * h + i,
            t[10] = e - r * h
        } else if ("XZY" === e.order) {
            const e = a * o
              , n = a * l
              , i = s * o
              , r = s * l;
            t[0] = o * c,
            t[4] = -h,
            t[8] = l * c,
            t[1] = e * h + r,
            t[5] = a * c,
            t[9] = n * h - i,
            t[2] = i * h - n,
            t[6] = s * c,
            t[10] = r * h + e
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(ie, e, re)
    }
    lookAt(e, t, n) {
        const i = this.elements;
        return oe.subVectors(e, t),
        0 === oe.lengthSq() && (oe.z = 1),
        oe.normalize(),
        ae.crossVectors(n, oe),
        0 === ae.lengthSq() && (1 === Math.abs(n.z) ? oe.x += 1e-4 : oe.z += 1e-4,
        oe.normalize(),
        ae.crossVectors(n, oe)),
        ae.normalize(),
        se.crossVectors(oe, ae),
        i[0] = ae.x,
        i[4] = se.x,
        i[8] = oe.x,
        i[1] = ae.y,
        i[5] = se.y,
        i[9] = oe.y,
        i[2] = ae.z,
        i[6] = se.z,
        i[10] = oe.z,
        this
    }
    multiply(e, t) {
        return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
        this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , i = t.elements
          , r = this.elements
          , a = n[0]
          , s = n[4]
          , o = n[8]
          , l = n[12]
          , c = n[1]
          , h = n[5]
          , u = n[9]
          , d = n[13]
          , p = n[2]
          , m = n[6]
          , f = n[10]
          , g = n[14]
          , v = n[3]
          , x = n[7]
          , _ = n[11]
          , y = n[15]
          , M = i[0]
          , w = i[4]
          , b = i[8]
          , S = i[12]
          , E = i[1]
          , T = i[5]
          , L = i[9]
          , A = i[13]
          , R = i[2]
          , C = i[6]
          , P = i[10]
          , D = i[14]
          , N = i[3]
          , I = i[7]
          , z = i[11]
          , F = i[15];
        return r[0] = a * M + s * E + o * R + l * N,
        r[4] = a * w + s * T + o * C + l * I,
        r[8] = a * b + s * L + o * P + l * z,
        r[12] = a * S + s * A + o * D + l * F,
        r[1] = c * M + h * E + u * R + d * N,
        r[5] = c * w + h * T + u * C + d * I,
        r[9] = c * b + h * L + u * P + d * z,
        r[13] = c * S + h * A + u * D + d * F,
        r[2] = p * M + m * E + f * R + g * N,
        r[6] = p * w + m * T + f * C + g * I,
        r[10] = p * b + m * L + f * P + g * z,
        r[14] = p * S + m * A + f * D + g * F,
        r[3] = v * M + x * E + _ * R + y * N,
        r[7] = v * w + x * T + _ * C + y * I,
        r[11] = v * b + x * L + _ * P + y * z,
        r[15] = v * S + x * A + _ * D + y * F,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[4]
          , i = e[8]
          , r = e[12]
          , a = e[1]
          , s = e[5]
          , o = e[9]
          , l = e[13]
          , c = e[2]
          , h = e[6]
          , u = e[10]
          , d = e[14];
        return e[3] * (+r * o * h - i * l * h - r * s * u + n * l * u + i * s * d - n * o * d) + e[7] * (+t * o * d - t * l * u + r * a * u - i * a * d + i * l * c - r * o * c) + e[11] * (+t * l * h - t * s * d - r * a * h + n * a * d + r * s * c - n * l * c) + e[15] * (-i * s * c - t * o * h + t * s * u + i * a * h - n * a * u + n * o * c)
    }
    transpose() {
        const e = this.elements;
        let t;
        return t = e[1],
        e[1] = e[4],
        e[4] = t,
        t = e[2],
        e[2] = e[8],
        e[8] = t,
        t = e[6],
        e[6] = e[9],
        e[9] = t,
        t = e[3],
        e[3] = e[12],
        e[12] = t,
        t = e[7],
        e[7] = e[13],
        e[13] = t,
        t = e[11],
        e[11] = e[14],
        e[14] = t,
        this
    }
    setPosition(e, t, n) {
        const i = this.elements;
        return e.isVector3 ? (i[12] = e.x,
        i[13] = e.y,
        i[14] = e.z) : (i[12] = e,
        i[13] = t,
        i[14] = n),
        this
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , i = e[2]
          , r = e[3]
          , a = e[4]
          , s = e[5]
          , o = e[6]
          , l = e[7]
          , c = e[8]
          , h = e[9]
          , u = e[10]
          , d = e[11]
          , p = e[12]
          , m = e[13]
          , f = e[14]
          , g = e[15]
          , v = h * f * l - m * u * l + m * o * d - s * f * d - h * o * g + s * u * g
          , x = p * u * l - c * f * l - p * o * d + a * f * d + c * o * g - a * u * g
          , _ = c * m * l - p * h * l + p * s * d - a * m * d - c * s * g + a * h * g
          , y = p * h * o - c * m * o - p * s * u + a * m * u + c * s * f - a * h * f
          , M = t * v + n * x + i * _ + r * y;
        if (0 === M)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const w = 1 / M;
        return e[0] = v * w,
        e[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * w,
        e[2] = (s * f * r - m * o * r + m * i * l - n * f * l - s * i * g + n * o * g) * w,
        e[3] = (h * o * r - s * u * r - h * i * l + n * u * l + s * i * d - n * o * d) * w,
        e[4] = x * w,
        e[5] = (c * f * r - p * u * r + p * i * d - t * f * d - c * i * g + t * u * g) * w,
        e[6] = (p * o * r - a * f * r - p * i * l + t * f * l + a * i * g - t * o * g) * w,
        e[7] = (a * u * r - c * o * r + c * i * l - t * u * l - a * i * d + t * o * d) * w,
        e[8] = _ * w,
        e[9] = (p * h * r - c * m * r - p * n * d + t * m * d + c * n * g - t * h * g) * w,
        e[10] = (a * m * r - p * s * r + p * n * l - t * m * l - a * n * g + t * s * g) * w,
        e[11] = (c * s * r - a * h * r - c * n * l + t * h * l + a * n * d - t * s * d) * w,
        e[12] = y * w,
        e[13] = (c * m * i - p * h * i + p * n * u - t * m * u - c * n * f + t * h * f) * w,
        e[14] = (p * s * i - a * m * i - p * n * o + t * m * o + a * n * f - t * s * f) * w,
        e[15] = (a * h * i - c * s * i + c * n * o - t * h * o - a * n * u + t * s * u) * w,
        this
    }
    scale(e) {
        const t = this.elements
          , n = e.x
          , i = e.y
          , r = e.z;
        return t[0] *= n,
        t[4] *= i,
        t[8] *= r,
        t[1] *= n,
        t[5] *= i,
        t[9] *= r,
        t[2] *= n,
        t[6] *= i,
        t[10] *= r,
        t[3] *= n,
        t[7] *= i,
        t[11] *= r,
        this
    }
    getMaxScaleOnAxis() {
        const e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, i))
    }
    makeTranslation(e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
    }
    makeRotationX(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(e, t) {
        const n = Math.cos(t)
          , i = Math.sin(t)
          , r = 1 - n
          , a = e.x
          , s = e.y
          , o = e.z
          , l = r * a
          , c = r * s;
        return this.set(l * a + n, l * s - i * o, l * o + i * s, 0, l * s + i * o, c * s + n, c * o - i * a, 0, l * o - i * s, c * o + i * a, r * o * o + n, 0, 0, 0, 0, 1),
        this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    }
    makeShear(e, t, n) {
        return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(e, t, n) {
        const i = this.elements
          , r = t._x
          , a = t._y
          , s = t._z
          , o = t._w
          , l = r + r
          , c = a + a
          , h = s + s
          , u = r * l
          , d = r * c
          , p = r * h
          , m = a * c
          , f = a * h
          , g = s * h
          , v = o * l
          , x = o * c
          , _ = o * h
          , y = n.x
          , M = n.y
          , w = n.z;
        return i[0] = (1 - (m + g)) * y,
        i[1] = (d + _) * y,
        i[2] = (p - x) * y,
        i[3] = 0,
        i[4] = (d - _) * M,
        i[5] = (1 - (u + g)) * M,
        i[6] = (f + v) * M,
        i[7] = 0,
        i[8] = (p + x) * w,
        i[9] = (f - v) * w,
        i[10] = (1 - (u + m)) * w,
        i[11] = 0,
        i[12] = e.x,
        i[13] = e.y,
        i[14] = e.z,
        i[15] = 1,
        this
    }
    decompose(e, t, n) {
        const i = this.elements;
        let r = te.set(i[0], i[1], i[2]).length();
        const a = te.set(i[4], i[5], i[6]).length()
          , s = te.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r),
        e.x = i[12],
        e.y = i[13],
        e.z = i[14],
        ne.copy(this);
        const o = 1 / r
          , l = 1 / a
          , c = 1 / s;
        return ne.elements[0] *= o,
        ne.elements[1] *= o,
        ne.elements[2] *= o,
        ne.elements[4] *= l,
        ne.elements[5] *= l,
        ne.elements[6] *= l,
        ne.elements[8] *= c,
        ne.elements[9] *= c,
        ne.elements[10] *= c,
        t.setFromRotationMatrix(ne),
        n.x = r,
        n.y = a,
        n.z = s,
        this
    }
    makePerspective(e, t, n, i, r, a) {
        void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        const s = this.elements
          , o = 2 * r / (t - e)
          , l = 2 * r / (n - i)
          , c = (t + e) / (t - e)
          , h = (n + i) / (n - i)
          , u = -(a + r) / (a - r)
          , d = -2 * a * r / (a - r);
        return s[0] = o,
        s[4] = 0,
        s[8] = c,
        s[12] = 0,
        s[1] = 0,
        s[5] = l,
        s[9] = h,
        s[13] = 0,
        s[2] = 0,
        s[6] = 0,
        s[10] = u,
        s[14] = d,
        s[3] = 0,
        s[7] = 0,
        s[11] = -1,
        s[15] = 0,
        this
    }
    makeOrthographic(e, t, n, i, r, a) {
        const s = this.elements
          , o = 1 / (t - e)
          , l = 1 / (n - i)
          , c = 1 / (a - r)
          , h = (t + e) * o
          , u = (n + i) * l
          , d = (a + r) * c;
        return s[0] = 2 * o,
        s[4] = 0,
        s[8] = 0,
        s[12] = -h,
        s[1] = 0,
        s[5] = 2 * l,
        s[9] = 0,
        s[13] = -u,
        s[2] = 0,
        s[6] = 0,
        s[10] = -2 * c,
        s[14] = -d,
        s[3] = 0,
        s[7] = 0,
        s[11] = 0,
        s[15] = 1,
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let i = 0; i < 16; i++)
            if (t[i] !== n[i])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 16; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e[t + 9] = n[9],
        e[t + 10] = n[10],
        e[t + 11] = n[11],
        e[t + 12] = n[12],
        e[t + 13] = n[13],
        e[t + 14] = n[14],
        e[t + 15] = n[15],
        e
    }
}
ee.prototype.isMatrix4 = !0;
const te = new b
  , ne = new ee
  , ie = new b(0,0,0)
  , re = new b(1,1,1)
  , ae = new b
  , se = new b
  , oe = new b
  , le = new ee
  , ce = new w;
class he {
    constructor(e=0, t=0, n=0, i=he.DefaultOrder) {
        this._x = e,
        this._y = t,
        this._z = n,
        this._order = i
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e,
        this._onChangeCallback()
    }
    set(e, t, n, i) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._order = i || this._order,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e, t, n) {
        const i = e.elements
          , r = i[0]
          , a = i[4]
          , o = i[8]
          , l = i[1]
          , c = i[5]
          , h = i[9]
          , u = i[2]
          , d = i[6]
          , p = i[10];
        switch (t = t || this._order) {
        case "XYZ":
            this._y = Math.asin(s(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, p),
            this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, c),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-s(h, -1, 1)),
            Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, p),
            this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(s(d, -1, 1)),
            Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, p),
            this._z = Math.atan2(-a, c)) : (this._y = 0,
            this._z = Math.atan2(l, r));
            break;
        case "ZYX":
            this._y = Math.asin(-s(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, p),
            this._z = Math.atan2(l, r)) : (this._x = 0,
            this._z = Math.atan2(-a, c));
            break;
        case "YZX":
            this._z = Math.asin(s(l, -1, 1)),
            Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c),
            this._y = Math.atan2(-u, r)) : (this._x = 0,
            this._y = Math.atan2(o, p));
            break;
        case "XZY":
            this._z = Math.asin(-s(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c),
            this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, p),
            this._y = 0);
            break;
        default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
        }
        return this._order = t,
        !1 !== n && this._onChangeCallback(),
        this
    }
    setFromQuaternion(e, t, n) {
        return le.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(le, t, n)
    }
    setFromVector3(e, t) {
        return this.set(e.x, e.y, e.z, t || this._order)
    }
    reorder(e) {
        return ce.setFromEuler(this),
        this.setFromQuaternion(ce, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        void 0 !== e[3] && (this._order = e[3]),
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    }
    toVector3(e) {
        return e ? e.set(this._x, this._y, this._z) : new b(this._x,this._y,this._z)
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
}
he.prototype.isEuler = !0,
he.DefaultOrder = "XYZ",
he.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class ue {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = 1 << e | 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return 0 != (this.mask & e.mask)
    }
}
let de = 0;
const pe = new b
  , me = new w
  , fe = new ee
  , ge = new b
  , ve = new b
  , xe = new b
  , _e = new w
  , ye = new b(1,0,0)
  , Me = new b(0,1,0)
  , we = new b(0,0,1)
  , be = {
    type: "added"
}
  , Se = {
    type: "removed"
};
class Ee extends e {
    constructor() {
        super(),
        Object.defineProperty(this, "id", {
            value: de++
        }),
        this.uuid = a(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = Ee.DefaultUp.clone();
        const e = new b
          , t = new he
          , n = new w
          , i = new b(1,1,1);
        t._onChange((function() {
            n.setFromEuler(t, !1)
        }
        )),
        n._onChange((function() {
            t.setFromQuaternion(n, void 0, !1)
        }
        )),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new ee
            },
            normalMatrix: {
                value: new m
            }
        }),
        this.matrix = new ee,
        this.matrixWorld = new ee,
        this.matrixAutoUpdate = Ee.DefaultMatrixAutoUpdate,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new ue,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.userData = {}
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e),
        this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return me.setFromAxisAngle(e, t),
        this.quaternion.multiply(me),
        this
    }
    rotateOnWorldAxis(e, t) {
        return me.setFromAxisAngle(e, t),
        this.quaternion.premultiply(me),
        this
    }
    rotateX(e) {
        return this.rotateOnAxis(ye, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(Me, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(we, e)
    }
    translateOnAxis(e, t) {
        return pe.copy(e).applyQuaternion(this.quaternion),
        this.position.add(pe.multiplyScalar(t)),
        this
    }
    translateX(e) {
        return this.translateOnAxis(ye, e)
    }
    translateY(e) {
        return this.translateOnAxis(Me, e)
    }
    translateZ(e) {
        return this.translateOnAxis(we, e)
    }
    localToWorld(e) {
        return e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return e.applyMatrix4(fe.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? ge.copy(e) : ge.set(e, t, n);
        const i = this.parent;
        this.updateWorldMatrix(!0, !1),
        ve.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? fe.lookAt(ve, ge, this.up) : fe.lookAt(ge, ve, this.up),
        this.quaternion.setFromRotationMatrix(fe),
        i && (fe.extractRotation(i.matrixWorld),
        me.setFromRotationMatrix(fe),
        this.quaternion.premultiply(me.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++)
                this.add(arguments[e]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
        this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e),
        e.parent = this,
        this.children.push(e),
        e.dispatchEvent(be)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
        this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++)
                this.remove(arguments[e]);
            return this
        }
        const t = this.children.indexOf(e);
        return -1 !== t && (e.parent = null,
        this.children.splice(t, 1),
        e.dispatchEvent(Se)),
        this
    }
    clear() {
        for (let e = 0; e < this.children.length; e++) {
            const t = this.children[e];
            t.parent = null,
            t.dispatchEvent(Se)
        }
        return this.children.length = 0,
        this
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1),
        fe.copy(this.matrixWorld).invert(),
        null !== e.parent && (e.parent.updateWorldMatrix(!0, !1),
        fe.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(fe),
        this.add(e),
        e.updateWorldMatrix(!1, !0),
        this
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t)
            return this;
        for (let n = 0, i = this.children.length; n < i; n++) {
            const i = this.children[n].getObjectByProperty(e, t);
            if (void 0 !== i)
                return i
        }
    }
    getWorldPosition(e) {
        return void 0 === e && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"),
        e = new b),
        this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return void 0 === e && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),
        e = new w),
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(ve, e, xe),
        e
    }
    getWorldScale(e) {
        return void 0 === e && (console.warn("THREE.Object3D: .getWorldScale() target is now required"),
        e = new b),
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(ve, _e, e),
        e
    }
    getWorldDirection(e) {
        void 0 === e && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"),
        e = new b),
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++)
            t[n].traverse(e)
    }
    traverseVisible(e) {
        if (!1 === this.visible)
            return;
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++)
            t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        const t = this.parent;
        null !== t && (e(t),
        t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++)
            t[n].updateMatrixWorld(e)
    }
    updateWorldMatrix(e, t) {
        const n = this.parent;
        if (!0 === e && null !== n && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        !0 === t) {
            const e = this.children;
            for (let t = 0, n = e.length; t < n; t++)
                e[t].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(e) {
        const t = void 0 === e || "string" == typeof e
          , n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {}
        },
        n.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const i = {};
        function r(t, n) {
            return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)),
            n.uuid
        }
        if (i.uuid = this.uuid,
        i.type = this.type,
        "" !== this.name && (i.name = this.name),
        !0 === this.castShadow && (i.castShadow = !0),
        !0 === this.receiveShadow && (i.receiveShadow = !0),
        !1 === this.visible && (i.visible = !1),
        !1 === this.frustumCulled && (i.frustumCulled = !1),
        0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
        "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
        i.layers = this.layers.mask,
        i.matrix = this.matrix.toArray(),
        !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh && (i.type = "InstancedMesh",
        i.count = this.count,
        i.instanceMatrix = this.instanceMatrix.toJSON(),
        null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())),
        this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(e.geometries, this.geometry);
            const t = this.geometry.parameters;
            if (void 0 !== t && void 0 !== t.shapes) {
                const n = t.shapes;
                if (Array.isArray(n))
                    for (let t = 0, i = n.length; t < i; t++) {
                        const i = n[t];
                        r(e.shapes, i)
                    }
                else
                    r(e.shapes, n)
            }
        }
        if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
        i.bindMatrix = this.bindMatrix.toArray(),
        void 0 !== this.skeleton && (r(e.skeletons, this.skeleton),
        i.skeleton = this.skeleton.uuid)),
        void 0 !== this.material)
            if (Array.isArray(this.material)) {
                const t = [];
                for (let n = 0, i = this.material.length; n < i; n++)
                    t.push(r(e.materials, this.material[n]));
                i.material = t
            } else
                i.material = r(e.materials, this.material);
        if (this.children.length > 0) {
            i.children = [];
            for (let t = 0; t < this.children.length; t++)
                i.children.push(this.children[t].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            i.animations = [];
            for (let t = 0; t < this.animations.length; t++) {
                const n = this.animations[t];
                i.animations.push(r(e.animations, n))
            }
        }
        if (t) {
            const t = a(e.geometries)
              , i = a(e.materials)
              , r = a(e.textures)
              , s = a(e.images)
              , o = a(e.shapes)
              , l = a(e.skeletons)
              , c = a(e.animations);
            t.length > 0 && (n.geometries = t),
            i.length > 0 && (n.materials = i),
            r.length > 0 && (n.textures = r),
            s.length > 0 && (n.images = s),
            o.length > 0 && (n.shapes = o),
            l.length > 0 && (n.skeletons = l),
            c.length > 0 && (n.animations = c)
        }
        return n.object = i,
        n;
        function a(e) {
            const t = [];
            for (const n in e) {
                const i = e[n];
                delete i.metadata,
                t.push(i)
            }
            return t
        }
    }
    clone(e) {
        return (new this.constructor).copy(this, e)
    }
    copy(e, t=!0) {
        if (this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.rotation.order = e.rotation.order,
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.layers.mask = e.layers.mask,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        !0 === t)
            for (let n = 0; n < e.children.length; n++) {
                const t = e.children[n];
                this.add(t.clone())
            }
        return this
    }
}
Ee.DefaultUp = new b(0,1,0),
Ee.DefaultMatrixAutoUpdate = !0,
Ee.prototype.isObject3D = !0;
const Te = new b
  , Le = new b
  , Ae = new m;
class Re {
    constructor(e=new b(1,0,0), t=0) {
        this.normal = e,
        this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    }
    setComponents(e, t, n, i) {
        return this.normal.set(e, t, n),
        this.constant = i,
        this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    }
    setFromCoplanarPoints(e, t, n) {
        const i = Te.subVectors(n, t).cross(Le.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, e),
        this
    }
    copy(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return void 0 === t && (console.warn("THREE.Plane: .projectPoint() target is now required"),
        t = new b),
        t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
    }
    intersectLine(e, t) {
        void 0 === t && (console.warn("THREE.Plane: .intersectLine() target is now required"),
        t = new b);
        const n = e.delta(Te)
          , i = this.normal.dot(n);
        if (0 === i)
            return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
        const r = -(e.start.dot(this.normal) + this.constant) / i;
        return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start)
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start)
          , n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return void 0 === e && (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
        e = new b),
        e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        const n = t || Ae.getNormalMatrix(e)
          , i = this.coplanarPoint(Te).applyMatrix4(e)
          , r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(r),
        this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal),
        this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
Re.prototype.isPlane = !0;
const Ce = new b
  , Pe = new b
  , De = new b
  , Ne = new b
  , Ie = new b
  , ze = new b
  , Fe = new b
  , He = new b
  , Oe = new b
  , Ue = new b;
class Ge {
    constructor(e=new b, t=new b, n=new b) {
        this.a = e,
        this.b = t,
        this.c = n
    }
    static getNormal(e, t, n, i) {
        void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"),
        i = new b),
        i.subVectors(n, t),
        Ce.subVectors(e, t),
        i.cross(Ce);
        const r = i.lengthSq();
        return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, i, r) {
        Ce.subVectors(i, t),
        Pe.subVectors(n, t),
        De.subVectors(e, t);
        const a = Ce.dot(Ce)
          , s = Ce.dot(Pe)
          , o = Ce.dot(De)
          , l = Pe.dot(Pe)
          , c = Pe.dot(De)
          , h = a * l - s * s;
        if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
        r = new b),
        0 === h)
            return r.set(-2, -1, -1);
        const u = 1 / h
          , d = (l * o - s * c) * u
          , p = (a * c - s * o) * u;
        return r.set(1 - d - p, p, d)
    }
    static containsPoint(e, t, n, i) {
        return this.getBarycoord(e, t, n, i, Ne),
        Ne.x >= 0 && Ne.y >= 0 && Ne.x + Ne.y <= 1
    }
    static getUV(e, t, n, i, r, a, s, o) {
        return this.getBarycoord(e, t, n, i, Ne),
        o.set(0, 0),
        o.addScaledVector(r, Ne.x),
        o.addScaledVector(a, Ne.y),
        o.addScaledVector(s, Ne.z),
        o
    }
    static isFrontFacing(e, t, n, i) {
        return Ce.subVectors(n, t),
        Pe.subVectors(e, t),
        Ce.cross(Pe).dot(i) < 0
    }
    set(e, t, n) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(e, t, n, i) {
        return this.a.copy(e[t]),
        this.b.copy(e[n]),
        this.c.copy(e[i]),
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    }
    getArea() {
        return Ce.subVectors(this.c, this.b),
        Pe.subVectors(this.a, this.b),
        .5 * Ce.cross(Pe).length()
    }
    getMidpoint(e) {
        return void 0 === e && (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
        e = new b),
        e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return Ge.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return void 0 === e && (console.warn("THREE.Triangle: .getPlane() target is now required"),
        e = new Re),
        e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return Ge.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getUV(e, t, n, i, r) {
        return Ge.getUV(e, this.a, this.b, this.c, t, n, i, r)
    }
    containsPoint(e) {
        return Ge.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return Ge.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        void 0 === t && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),
        t = new b);
        const n = this.a
          , i = this.b
          , r = this.c;
        let a, s;
        Ie.subVectors(i, n),
        ze.subVectors(r, n),
        He.subVectors(e, n);
        const o = Ie.dot(He)
          , l = ze.dot(He);
        if (o <= 0 && l <= 0)
            return t.copy(n);
        Oe.subVectors(e, i);
        const c = Ie.dot(Oe)
          , h = ze.dot(Oe);
        if (c >= 0 && h <= c)
            return t.copy(i);
        const u = o * h - c * l;
        if (u <= 0 && o >= 0 && c <= 0)
            return a = o / (o - c),
            t.copy(n).addScaledVector(Ie, a);
        Ue.subVectors(e, r);
        const d = Ie.dot(Ue)
          , p = ze.dot(Ue);
        if (p >= 0 && d <= p)
            return t.copy(r);
        const m = d * l - o * p;
        if (m <= 0 && l >= 0 && p <= 0)
            return s = l / (l - p),
            t.copy(n).addScaledVector(ze, s);
        const f = c * p - d * h;
        if (f <= 0 && h - c >= 0 && d - p >= 0)
            return Fe.subVectors(r, i),
            s = (h - c) / (h - c + (d - p)),
            t.copy(i).addScaledVector(Fe, s);
        const g = 1 / (f + m + u);
        return a = m * g,
        s = u * g,
        t.copy(n).addScaledVector(Ie, a).addScaledVector(ze, s)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
let Be = 0;
function Ve() {
    Object.defineProperty(this, "id", {
        value: Be++
    }),
    this.uuid = a(),
    this.name = "",
    this.type = "Material",
    this.fog = !0,
    this.blending = 1,
    this.side = 0,
    this.vertexColors = !1,
    this.opacity = 1,
    this.transparent = !1,
    this.blendSrc = 204,
    this.blendDst = 205,
    this.blendEquation = 100,
    this.blendSrcAlpha = null,
    this.blendDstAlpha = null,
    this.blendEquationAlpha = null,
    this.depthFunc = 3,
    this.depthTest = !0,
    this.depthWrite = !0,
    this.stencilWriteMask = 255,
    this.stencilFunc = 519,
    this.stencilRef = 0,
    this.stencilFuncMask = 255,
    this.stencilFail = 7680,
    this.stencilZFail = 7680,
    this.stencilZPass = 7680,
    this.stencilWrite = !1,
    this.clippingPlanes = null,
    this.clipIntersection = !1,
    this.clipShadows = !1,
    this.shadowSide = null,
    this.colorWrite = !0,
    this.precision = null,
    this.polygonOffset = !1,
    this.polygonOffsetFactor = 0,
    this.polygonOffsetUnits = 0,
    this.dithering = !1,
    this.alphaTest = 0,
    this.alphaToCoverage = !1,
    this.premultipliedAlpha = !1,
    this.visible = !0,
    this.toneMapped = !0,
    this.userData = {},
    this.version = 0
}
Ve.prototype = Object.assign(Object.create(e.prototype), {
    constructor: Ve,
    isMaterial: !0,
    onBuild: function() {},
    onBeforeCompile: function() {},
    customProgramCacheKey: function() {
        return this.onBeforeCompile.toString()
    },
    setValues: function(e) {
        if (void 0 !== e)
            for (const t in e) {
                const n = e[t];
                if (void 0 === n) {
                    console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                    continue
                }
                if ("shading" === t) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                    this.flatShading = 1 === n;
                    continue
                }
                const i = this[t];
                void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
            }
    },
    toJSON: function(e) {
        const t = void 0 === e || "string" == typeof e;
        t && (e = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        function i(e) {
            const t = [];
            for (const n in e) {
                const i = e[n];
                delete i.metadata,
                t.push(i)
            }
            return t
        }
        if (n.uuid = this.uuid,
        n.type = this.type,
        "" !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
        void 0 !== this.combine && (n.combine = this.combine)),
        void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity),
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
        void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        void 0 !== this.size && (n.size = this.size),
        null !== this.shadowSide && (n.shadowSide = this.shadowSide),
        void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
        1 !== this.blending && (n.blending = this.blending),
        0 !== this.side && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = this.transparent),
        n.depthFunc = this.depthFunc,
        n.depthTest = this.depthTest,
        n.depthWrite = this.depthWrite,
        n.colorWrite = this.colorWrite,
        n.stencilWrite = this.stencilWrite,
        n.stencilWriteMask = this.stencilWriteMask,
        n.stencilFunc = this.stencilFunc,
        n.stencilRef = this.stencilRef,
        n.stencilFuncMask = this.stencilFuncMask,
        n.stencilFail = this.stencilFail,
        n.stencilZFail = this.stencilZFail,
        n.stencilZPass = this.stencilZPass,
        this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage),
        !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.wireframe && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
        "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.morphTargets && (n.morphTargets = !0),
        !0 === this.morphNormals && (n.morphNormals = !0),
        !0 === this.skinning && (n.skinning = !0),
        !0 === this.flatShading && (n.flatShading = this.flatShading),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        t) {
            const t = i(e.textures)
              , r = i(e.images);
            t.length > 0 && (n.textures = t),
            r.length > 0 && (n.images = r)
        }
        return n
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        this.name = e.name,
        this.fog = e.fog,
        this.blending = e.blending,
        this.side = e.side,
        this.vertexColors = e.vertexColors,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.stencilWriteMask = e.stencilWriteMask,
        this.stencilFunc = e.stencilFunc,
        this.stencilRef = e.stencilRef,
        this.stencilFuncMask = e.stencilFuncMask,
        this.stencilFail = e.stencilFail,
        this.stencilZFail = e.stencilZFail,
        this.stencilZPass = e.stencilZPass,
        this.stencilWrite = e.stencilWrite;
        const t = e.clippingPlanes;
        let n = null;
        if (null !== t) {
            const e = t.length;
            n = new Array(e);
            for (let i = 0; i !== e; ++i)
                n[i] = t[i].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = e.clipIntersection,
        this.clipShadows = e.clipShadows,
        this.shadowSide = e.shadowSide,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.dithering = e.dithering,
        this.alphaTest = e.alphaTest,
        this.alphaToCoverage = e.alphaToCoverage,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.visible = e.visible,
        this.toneMapped = e.toneMapped,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}),
Object.defineProperty(Ve.prototype, "needsUpdate", {
    set: function(e) {
        !0 === e && this.version++
    }
});
const We = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , ke = {
    h: 0,
    s: 0,
    l: 0
}
  , je = {
    h: 0,
    s: 0,
    l: 0
};
function qe(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
}
function Xe(e) {
    return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
}
function Ye(e) {
    return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
}
class Ze {
    constructor(e, t, n) {
        return void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n)
    }
    set(e) {
        return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e),
        this
    }
    setScalar(e) {
        return this.r = e,
        this.g = e,
        this.b = e,
        this
    }
    setHex(e) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (255 & e) / 255,
        this
    }
    setRGB(e, t, n) {
        return this.r = e,
        this.g = t,
        this.b = n,
        this
    }
    setHSL(e, t, n) {
        if (e = o(e, 1),
        t = s(t, 0, 1),
        n = s(n, 0, 1),
        0 === t)
            this.r = this.g = this.b = n;
        else {
            const i = n <= .5 ? n * (1 + t) : n + t - n * t
              , r = 2 * n - i;
            this.r = qe(r, i, e + 1 / 3),
            this.g = qe(r, i, e),
            this.b = qe(r, i, e - 1 / 3)
        }
        return this
    }
    setStyle(e) {
        function t(t) {
            void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        let n;
        if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
            let e;
            const i = n[1]
              , r = n[2];
            switch (i) {
            case "rgb":
            case "rgba":
                if (e = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                    return this.r = Math.min(255, parseInt(e[1], 10)) / 255,
                    this.g = Math.min(255, parseInt(e[2], 10)) / 255,
                    this.b = Math.min(255, parseInt(e[3], 10)) / 255,
                    t(e[4]),
                    this;
                if (e = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                    return this.r = Math.min(100, parseInt(e[1], 10)) / 100,
                    this.g = Math.min(100, parseInt(e[2], 10)) / 100,
                    this.b = Math.min(100, parseInt(e[3], 10)) / 100,
                    t(e[4]),
                    this;
                break;
            case "hsl":
            case "hsla":
                if (e = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                    const n = parseFloat(e[1]) / 360
                      , i = parseInt(e[2], 10) / 100
                      , r = parseInt(e[3], 10) / 100;
                    return t(e[4]),
                    this.setHSL(n, i, r)
                }
            }
        } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            const e = n[1]
              , t = e.length;
            if (3 === t)
                return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255,
                this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255,
                this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255,
                this;
            if (6 === t)
                return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255,
                this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255,
                this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255,
                this
        }
        return e && e.length > 0 ? this.setColorName(e) : this
    }
    setColorName(e) {
        const t = We[e.toLowerCase()];
        return void 0 !== t ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    }
    copyGammaToLinear(e, t=2) {
        return this.r = Math.pow(e.r, t),
        this.g = Math.pow(e.g, t),
        this.b = Math.pow(e.b, t),
        this
    }
    copyLinearToGamma(e, t=2) {
        const n = t > 0 ? 1 / t : 1;
        return this.r = Math.pow(e.r, n),
        this.g = Math.pow(e.g, n),
        this.b = Math.pow(e.b, n),
        this
    }
    convertGammaToLinear(e) {
        return this.copyGammaToLinear(this, e),
        this
    }
    convertLinearToGamma(e) {
        return this.copyLinearToGamma(this, e),
        this
    }
    copySRGBToLinear(e) {
        return this.r = Xe(e.r),
        this.g = Xe(e.g),
        this.b = Xe(e.b),
        this
    }
    copyLinearToSRGB(e) {
        return this.r = Ye(e.r),
        this.g = Ye(e.g),
        this.b = Ye(e.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    }
    getHexString() {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    }
    getHSL(e) {
        void 0 === e && (console.warn("THREE.Color: .getHSL() target is now required"),
        e = {
            h: 0,
            s: 0,
            l: 0
        });
        const t = this.r
          , n = this.g
          , i = this.b
          , r = Math.max(t, n, i)
          , a = Math.min(t, n, i);
        let s, o;
        const l = (a + r) / 2;
        if (a === r)
            s = 0,
            o = 0;
        else {
            const e = r - a;
            switch (o = l <= .5 ? e / (r + a) : e / (2 - r - a),
            r) {
            case t:
                s = (n - i) / e + (n < i ? 6 : 0);
                break;
            case n:
                s = (i - t) / e + 2;
                break;
            case i:
                s = (t - n) / e + 4
            }
            s /= 6
        }
        return e.h = s,
        e.s = o,
        e.l = l,
        e
    }
    getStyle() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    }
    offsetHSL(e, t, n) {
        return this.getHSL(ke),
        ke.h += e,
        ke.s += t,
        ke.l += n,
        this.setHSL(ke.h, ke.s, ke.l),
        this
    }
    add(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    }
    addColors(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    }
    addScalar(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r),
        this.g = Math.max(0, this.g - e.g),
        this.b = Math.max(0, this.b - e.b),
        this
    }
    multiply(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    }
    multiplyScalar(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n,
        this.g = e.g + (t.g - e.g) * n,
        this.b = e.b + (t.b - e.b) * n,
        this
    }
    lerpHSL(e, t) {
        this.getHSL(ke),
        e.getHSL(je);
        const n = l(ke.h, je.h, t)
          , i = l(ke.s, je.s, t)
          , r = l(ke.l, je.l, t);
        return this.setHSL(n, i, r),
        this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t=0) {
        return this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t),
        this.g = e.getY(t),
        this.b = e.getZ(t),
        !0 === e.normalized && (this.r /= 255,
        this.g /= 255,
        this.b /= 255),
        this
    }
    toJSON() {
        return this.getHex()
    }
}
Ze.NAMES = We,
Ze.prototype.isColor = !0,
Ze.prototype.r = 1,
Ze.prototype.g = 1,
Ze.prototype.b = 1;
class Je extends Ve {
    constructor(e) {
        super(),
        this.type = "MeshBasicMaterial",
        this.color = new Ze(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = 0,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this
    }
}
Je.prototype.isMeshBasicMaterial = !0;
const Qe = new b
  , Ke = new p;
class $e {
    constructor(e, t, n) {
        if (Array.isArray(e))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "",
        this.array = e,
        this.itemSize = t,
        this.count = void 0 !== e ? e.length / t : 0,
        this.normalized = !0 === n,
        this.usage = 35044,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0,
        this.onUploadCallback = function() {}
    }
    set needsUpdate(e) {
        !0 === e && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    copy(e) {
        return this.name = e.name,
        this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.count = e.count,
        this.normalized = e.normalized,
        this.usage = e.usage,
        this
    }
    copyAt(e, t, n) {
        e *= this.itemSize,
        n *= t.itemSize;
        for (let i = 0, r = this.itemSize; i < r; i++)
            this.array[e + i] = t.array[n + i];
        return this
    }
    copyArray(e) {
        return this.array.set(e),
        this
    }
    copyColorsArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, r = e.length; i < r; i++) {
            let r = e[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
            r = new Ze),
            t[n++] = r.r,
            t[n++] = r.g,
            t[n++] = r.b
        }
        return this
    }
    copyVector2sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, r = e.length; i < r; i++) {
            let r = e[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
            r = new p),
            t[n++] = r.x,
            t[n++] = r.y
        }
        return this
    }
    copyVector3sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, r = e.length; i < r; i++) {
            let r = e[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
            r = new b),
            t[n++] = r.x,
            t[n++] = r.y,
            t[n++] = r.z
        }
        return this
    }
    copyVector4sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, r = e.length; i < r; i++) {
            let r = e[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
            r = new y),
            t[n++] = r.x,
            t[n++] = r.y,
            t[n++] = r.z,
            t[n++] = r.w
        }
        return this
    }
    applyMatrix3(e) {
        if (2 === this.itemSize)
            for (let t = 0, n = this.count; t < n; t++)
                Ke.fromBufferAttribute(this, t),
                Ke.applyMatrix3(e),
                this.setXY(t, Ke.x, Ke.y);
        else if (3 === this.itemSize)
            for (let t = 0, n = this.count; t < n; t++)
                Qe.fromBufferAttribute(this, t),
                Qe.applyMatrix3(e),
                this.setXYZ(t, Qe.x, Qe.y, Qe.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Qe.x = this.getX(t),
            Qe.y = this.getY(t),
            Qe.z = this.getZ(t),
            Qe.applyMatrix4(e),
            this.setXYZ(t, Qe.x, Qe.y, Qe.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Qe.x = this.getX(t),
            Qe.y = this.getY(t),
            Qe.z = this.getZ(t),
            Qe.applyNormalMatrix(e),
            this.setXYZ(t, Qe.x, Qe.y, Qe.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Qe.x = this.getX(t),
            Qe.y = this.getY(t),
            Qe.z = this.getZ(t),
            Qe.transformDirection(e),
            this.setXYZ(t, Qe.x, Qe.y, Qe.z);
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    getX(e) {
        return this.array[e * this.itemSize]
    }
    setX(e, t) {
        return this.array[e * this.itemSize] = t,
        this
    }
    getY(e) {
        return this.array[e * this.itemSize + 1]
    }
    setY(e, t) {
        return this.array[e * this.itemSize + 1] = t,
        this
    }
    getZ(e) {
        return this.array[e * this.itemSize + 2]
    }
    setZ(e, t) {
        return this.array[e * this.itemSize + 2] = t,
        this
    }
    getW(e) {
        return this.array[e * this.itemSize + 3]
    }
    setW(e, t) {
        return this.array[e * this.itemSize + 3] = t,
        this
    }
    setXY(e, t, n) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, i) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = i,
        this
    }
    setXYZW(e, t, n, i, r) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = i,
        this.array[e + 3] = r,
        this
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized
        };
        return "" !== this.name && (e.name = this.name),
        35044 !== this.usage && (e.usage = this.usage),
        0 === this.updateRange.offset && -1 === this.updateRange.count || (e.updateRange = this.updateRange),
        e
    }
}
$e.prototype.isBufferAttribute = !0;
class et extends $e {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
class tt extends $e {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n)
    }
}
class nt extends $e {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n)
    }
}
function it(e) {
    if (0 === e.length)
        return -1 / 0;
    let t = e[0];
    for (let n = 1, i = e.length; n < i; ++n)
        e[n] > t && (t = e[n]);
    return t
}
let rt = 0;
const at = new ee
  , st = new Ee
  , ot = new b
  , lt = new T
  , ct = new T
  , ht = new b;
class ut extends e {
    constructor() {
        super(),
        Object.defineProperty(this, "id", {
            value: rt++
        }),
        this.uuid = a(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (it(e) > 65535 ? tt : et)(e,1) : this.index = e,
        this
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t,
        this
    }
    deleteAttribute(e) {
        return delete this.attributes[e],
        this
    }
    hasAttribute(e) {
        return void 0 !== this.attributes[e]
    }
    addGroup(e, t, n=0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        void 0 !== t && (t.applyMatrix4(e),
        t.needsUpdate = !0);
        const n = this.attributes.normal;
        if (void 0 !== n) {
            const t = (new m).getNormalMatrix(e);
            n.applyNormalMatrix(t),
            n.needsUpdate = !0
        }
        const i = this.attributes.tangent;
        return void 0 !== i && (i.transformDirection(e),
        i.needsUpdate = !0),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
    }
    rotateX(e) {
        return at.makeRotationX(e),
        this.applyMatrix4(at),
        this
    }
    rotateY(e) {
        return at.makeRotationY(e),
        this.applyMatrix4(at),
        this
    }
    rotateZ(e) {
        return at.makeRotationZ(e),
        this.applyMatrix4(at),
        this
    }
    translate(e, t, n) {
        return at.makeTranslation(e, t, n),
        this.applyMatrix4(at),
        this
    }
    scale(e, t, n) {
        return at.makeScale(e, t, n),
        this.applyMatrix4(at),
        this
    }
    lookAt(e) {
        return st.lookAt(e),
        st.updateMatrix(),
        this.applyMatrix4(st.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(ot).negate(),
        this.translate(ot.x, ot.y, ot.z),
        this
    }
    setFromPoints(e) {
        const t = [];
        for (let n = 0, i = e.length; n < i; n++) {
            const i = e[n];
            t.push(i.x, i.y, i.z || 0)
        }
        return this.setAttribute("position", new nt(t,3)),
        this
    }
    computeBoundingBox() {
        null === this.boundingBox && (this.boundingBox = new T);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute)
            return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
            void this.boundingBox.set(new b(-1 / 0,-1 / 0,-1 / 0), new b(1 / 0,1 / 0,1 / 0));
        if (void 0 !== e) {
            if (this.boundingBox.setFromBufferAttribute(e),
            t)
                for (let n = 0, i = t.length; n < i; n++) {
                    const e = t[n];
                    lt.setFromBufferAttribute(e),
                    this.morphTargetsRelative ? (ht.addVectors(this.boundingBox.min, lt.min),
                    this.boundingBox.expandByPoint(ht),
                    ht.addVectors(this.boundingBox.max, lt.max),
                    this.boundingBox.expandByPoint(ht)) : (this.boundingBox.expandByPoint(lt.min),
                    this.boundingBox.expandByPoint(lt.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        null === this.boundingSphere && (this.boundingSphere = new j);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute)
            return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
            void this.boundingSphere.set(new b, 1 / 0);
        if (e) {
            const n = this.boundingSphere.center;
            if (lt.setFromBufferAttribute(e),
            t)
                for (let e = 0, r = t.length; e < r; e++) {
                    const n = t[e];
                    ct.setFromBufferAttribute(n),
                    this.morphTargetsRelative ? (ht.addVectors(lt.min, ct.min),
                    lt.expandByPoint(ht),
                    ht.addVectors(lt.max, ct.max),
                    lt.expandByPoint(ht)) : (lt.expandByPoint(ct.min),
                    lt.expandByPoint(ct.max))
                }
            lt.getCenter(n);
            let i = 0;
            for (let t = 0, r = e.count; t < r; t++)
                ht.fromBufferAttribute(e, t),
                i = Math.max(i, n.distanceToSquared(ht));
            if (t)
                for (let r = 0, a = t.length; r < a; r++) {
                    const a = t[r]
                      , s = this.morphTargetsRelative;
                    for (let t = 0, r = a.count; t < r; t++)
                        ht.fromBufferAttribute(a, t),
                        s && (ot.fromBufferAttribute(e, t),
                        ht.add(ot)),
                        i = Math.max(i, n.distanceToSquared(ht))
                }
            this.boundingSphere.radius = Math.sqrt(i),
            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeFaceNormals() {}
    computeTangents() {
        const e = this.index
          , t = this.attributes;
        if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv)
            return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        const n = e.array
          , i = t.position.array
          , r = t.normal.array
          , a = t.uv.array
          , s = i.length / 3;
        void 0 === t.tangent && this.setAttribute("tangent", new $e(new Float32Array(4 * s),4));
        const o = t.tangent.array
          , l = []
          , c = [];
        for (let p = 0; p < s; p++)
            l[p] = new b,
            c[p] = new b;
        const h = new b
          , u = new b
          , d = new b
          , m = new p
          , f = new p
          , g = new p
          , v = new b
          , x = new b;
        function _(e, t, n) {
            h.fromArray(i, 3 * e),
            u.fromArray(i, 3 * t),
            d.fromArray(i, 3 * n),
            m.fromArray(a, 2 * e),
            f.fromArray(a, 2 * t),
            g.fromArray(a, 2 * n),
            u.sub(h),
            d.sub(h),
            f.sub(m),
            g.sub(m);
            const r = 1 / (f.x * g.y - g.x * f.y);
            isFinite(r) && (v.copy(u).multiplyScalar(g.y).addScaledVector(d, -f.y).multiplyScalar(r),
            x.copy(d).multiplyScalar(f.x).addScaledVector(u, -g.x).multiplyScalar(r),
            l[e].add(v),
            l[t].add(v),
            l[n].add(v),
            c[e].add(x),
            c[t].add(x),
            c[n].add(x))
        }
        let y = this.groups;
        0 === y.length && (y = [{
            start: 0,
            count: n.length
        }]);
        for (let p = 0, b = y.length; p < b; ++p) {
            const e = y[p]
              , t = e.start;
            for (let i = t, r = t + e.count; i < r; i += 3)
                _(n[i + 0], n[i + 1], n[i + 2])
        }
        const M = new b
          , w = new b
          , S = new b
          , E = new b;
        function T(e) {
            S.fromArray(r, 3 * e),
            E.copy(S);
            const t = l[e];
            M.copy(t),
            M.sub(S.multiplyScalar(S.dot(t))).normalize(),
            w.crossVectors(E, t);
            const n = w.dot(c[e]) < 0 ? -1 : 1;
            o[4 * e] = M.x,
            o[4 * e + 1] = M.y,
            o[4 * e + 2] = M.z,
            o[4 * e + 3] = n
        }
        for (let p = 0, b = y.length; p < b; ++p) {
            const e = y[p]
              , t = e.start;
            for (let i = t, r = t + e.count; i < r; i += 3)
                T(n[i + 0]),
                T(n[i + 1]),
                T(n[i + 2])
        }
    }
    computeVertexNormals() {
        const e = this.index
          , t = this.getAttribute("position");
        if (void 0 !== t) {
            let n = this.getAttribute("normal");
            if (void 0 === n)
                n = new $e(new Float32Array(3 * t.count),3),
                this.setAttribute("normal", n);
            else
                for (let e = 0, t = n.count; e < t; e++)
                    n.setXYZ(e, 0, 0, 0);
            const i = new b
              , r = new b
              , a = new b
              , s = new b
              , o = new b
              , l = new b
              , c = new b
              , h = new b;
            if (e)
                for (let u = 0, d = e.count; u < d; u += 3) {
                    const d = e.getX(u + 0)
                      , p = e.getX(u + 1)
                      , m = e.getX(u + 2);
                    i.fromBufferAttribute(t, d),
                    r.fromBufferAttribute(t, p),
                    a.fromBufferAttribute(t, m),
                    c.subVectors(a, r),
                    h.subVectors(i, r),
                    c.cross(h),
                    s.fromBufferAttribute(n, d),
                    o.fromBufferAttribute(n, p),
                    l.fromBufferAttribute(n, m),
                    s.add(c),
                    o.add(c),
                    l.add(c),
                    n.setXYZ(d, s.x, s.y, s.z),
                    n.setXYZ(p, o.x, o.y, o.z),
                    n.setXYZ(m, l.x, l.y, l.z)
                }
            else
                for (let e = 0, u = t.count; e < u; e += 3)
                    i.fromBufferAttribute(t, e + 0),
                    r.fromBufferAttribute(t, e + 1),
                    a.fromBufferAttribute(t, e + 2),
                    c.subVectors(a, r),
                    h.subVectors(i, r),
                    c.cross(h),
                    n.setXYZ(e + 0, c.x, c.y, c.z),
                    n.setXYZ(e + 1, c.x, c.y, c.z),
                    n.setXYZ(e + 2, c.x, c.y, c.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    merge(e, t) {
        if (!e || !e.isBufferGeometry)
            return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
        void 0 === t && (t = 0,
        console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        const n = this.attributes;
        for (const i in n) {
            if (void 0 === e.attributes[i])
                continue;
            const r = n[i].array
              , a = e.attributes[i]
              , s = a.array
              , o = a.itemSize * t
              , l = Math.min(s.length, r.length - o);
            for (let e = 0, t = o; e < l; e++,
            t++)
                r[t] = s[e]
        }
        return this
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++)
            ht.fromBufferAttribute(e, t),
            ht.normalize(),
            e.setXYZ(t, ht.x, ht.y, ht.z)
    }
    toNonIndexed() {
        function e(e, t) {
            const n = e.array
              , i = e.itemSize
              , r = e.normalized
              , a = new n.constructor(t.length * i);
            let s = 0
              , o = 0;
            for (let l = 0, c = t.length; l < c; l++) {
                s = t[l] * i;
                for (let e = 0; e < i; e++)
                    a[o++] = n[s++]
            }
            return new $e(a,i,r)
        }
        if (null === this.index)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const t = new ut
          , n = this.index.array
          , i = this.attributes;
        for (const s in i) {
            const r = e(i[s], n);
            t.setAttribute(s, r)
        }
        const r = this.morphAttributes;
        for (const s in r) {
            const i = []
              , a = r[s];
            for (let t = 0, r = a.length; t < r; t++) {
                const r = e(a[t], n);
                i.push(r)
            }
            t.morphAttributes[s] = i
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const a = this.groups;
        for (let s = 0, o = a.length; s < o; s++) {
            const e = a[s];
            t.addGroup(e.start, e.count, e.materialIndex)
        }
        return t
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        "" !== this.name && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        void 0 !== this.parameters) {
            const t = this.parameters;
            for (const n in t)
                void 0 !== t[n] && (e[n] = t[n]);
            return e
        }
        e.data = {
            attributes: {}
        };
        const t = this.index;
        null !== t && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        const n = this.attributes;
        for (const o in n) {
            const t = n[o];
            e.data.attributes[o] = t.toJSON(e.data)
        }
        const i = {};
        let r = !1;
        for (const o in this.morphAttributes) {
            const t = this.morphAttributes[o]
              , n = [];
            for (let i = 0, r = t.length; i < r; i++) {
                const r = t[i];
                n.push(r.toJSON(e.data))
            }
            n.length > 0 && (i[o] = n,
            r = !0)
        }
        r && (e.data.morphAttributes = i,
        e.data.morphTargetsRelative = this.morphTargetsRelative);
        const a = this.groups;
        a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
        const s = this.boundingSphere;
        return null !== s && (e.data.boundingSphere = {
            center: s.center.toArray(),
            radius: s.radius
        }),
        e
    }
    clone() {
        return (new ut).copy(this)
    }
    copy(e) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const t = {};
        this.name = e.name;
        const n = e.index;
        null !== n && this.setIndex(n.clone(t));
        const i = e.attributes;
        for (const l in i) {
            const e = i[l];
            this.setAttribute(l, e.clone(t))
        }
        const r = e.morphAttributes;
        for (const l in r) {
            const e = []
              , n = r[l];
            for (let i = 0, r = n.length; i < r; i++)
                e.push(n[i].clone(t));
            this.morphAttributes[l] = e
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const a = e.groups;
        for (let l = 0, c = a.length; l < c; l++) {
            const e = a[l];
            this.addGroup(e.start, e.count, e.materialIndex)
        }
        const s = e.boundingBox;
        null !== s && (this.boundingBox = s.clone());
        const o = e.boundingSphere;
        return null !== o && (this.boundingSphere = o.clone()),
        this.drawRange.start = e.drawRange.start,
        this.drawRange.count = e.drawRange.count,
        this.userData = e.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
ut.prototype.isBufferGeometry = !0;
const dt = new ee
  , pt = new $
  , mt = new j
  , ft = new b
  , gt = new b
  , vt = new b
  , xt = new b
  , _t = new b
  , yt = new b
  , Mt = new b
  , wt = new b
  , bt = new b
  , St = new p
  , Et = new p
  , Tt = new p
  , Lt = new b
  , At = new b;
class Rt extends Ee {
    constructor(e=new ut, t=new Je) {
        super(),
        this.type = "Mesh",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e) {
        return super.copy(e),
        void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
        this.material = e.material,
        this.geometry = e.geometry,
        this
    }
    updateMorphTargets() {
        const e = this.geometry;
        if (e.isBufferGeometry) {
            const t = e.morphAttributes
              , n = Object.keys(t);
            if (n.length > 0) {
                const e = t[n[0]];
                if (void 0 !== e) {
                    this.morphTargetInfluences = [],
                    this.morphTargetDictionary = {};
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t].name || String(t);
                        this.morphTargetInfluences.push(0),
                        this.morphTargetDictionary[n] = t
                    }
                }
            }
        } else {
            const t = e.morphTargets;
            void 0 !== t && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
    raycast(e, t) {
        const n = this.geometry
          , i = this.material
          , r = this.matrixWorld;
        if (void 0 === i)
            return;
        if (null === n.boundingSphere && n.computeBoundingSphere(),
        mt.copy(n.boundingSphere),
        mt.applyMatrix4(r),
        !1 === e.ray.intersectsSphere(mt))
            return;
        if (dt.copy(r).invert(),
        pt.copy(e.ray).applyMatrix4(dt),
        null !== n.boundingBox && !1 === pt.intersectsBox(n.boundingBox))
            return;
        let a;
        if (n.isBufferGeometry) {
            const r = n.index
              , s = n.attributes.position
              , o = n.morphAttributes.position
              , l = n.morphTargetsRelative
              , c = n.attributes.uv
              , h = n.attributes.uv2
              , u = n.groups
              , d = n.drawRange;
            if (null !== r)
                if (Array.isArray(i))
                    for (let n = 0, p = u.length; n < p; n++) {
                        const p = u[n]
                          , m = i[p.materialIndex];
                        for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
                            const i = r.getX(n)
                              , u = r.getX(n + 1)
                              , d = r.getX(n + 2);
                            a = Ct(this, m, e, pt, s, o, l, c, h, i, u, d),
                            a && (a.faceIndex = Math.floor(n / 3),
                            a.face.materialIndex = p.materialIndex,
                            t.push(a))
                        }
                    }
                else {
                    for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) {
                        const u = r.getX(n)
                          , d = r.getX(n + 1)
                          , p = r.getX(n + 2);
                        a = Ct(this, i, e, pt, s, o, l, c, h, u, d, p),
                        a && (a.faceIndex = Math.floor(n / 3),
                        t.push(a))
                    }
                }
            else if (void 0 !== s)
                if (Array.isArray(i))
                    for (let n = 0, p = u.length; n < p; n++) {
                        const r = u[n]
                          , p = i[r.materialIndex];
                        for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) {
                            a = Ct(this, p, e, pt, s, o, l, c, h, n, n + 1, n + 2),
                            a && (a.faceIndex = Math.floor(n / 3),
                            a.face.materialIndex = r.materialIndex,
                            t.push(a))
                        }
                    }
                else {
                    for (let n = Math.max(0, d.start), r = Math.min(s.count, d.start + d.count); n < r; n += 3) {
                        a = Ct(this, i, e, pt, s, o, l, c, h, n, n + 1, n + 2),
                        a && (a.faceIndex = Math.floor(n / 3),
                        t.push(a))
                    }
                }
        } else
            n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
    }
}
function Ct(e, t, n, i, r, a, s, o, l, c, h, u) {
    ft.fromBufferAttribute(r, c),
    gt.fromBufferAttribute(r, h),
    vt.fromBufferAttribute(r, u);
    const d = e.morphTargetInfluences;
    if (t.morphTargets && a && d) {
        Mt.set(0, 0, 0),
        wt.set(0, 0, 0),
        bt.set(0, 0, 0);
        for (let e = 0, t = a.length; e < t; e++) {
            const t = d[e]
              , n = a[e];
            0 !== t && (xt.fromBufferAttribute(n, c),
            _t.fromBufferAttribute(n, h),
            yt.fromBufferAttribute(n, u),
            s ? (Mt.addScaledVector(xt, t),
            wt.addScaledVector(_t, t),
            bt.addScaledVector(yt, t)) : (Mt.addScaledVector(xt.sub(ft), t),
            wt.addScaledVector(_t.sub(gt), t),
            bt.addScaledVector(yt.sub(vt), t)))
        }
        ft.add(Mt),
        gt.add(wt),
        vt.add(bt)
    }
    e.isSkinnedMesh && t.skinning && (e.boneTransform(c, ft),
    e.boneTransform(h, gt),
    e.boneTransform(u, vt));
    const m = function(e, t, n, i, r, a, s, o) {
        let l;
        if (l = 1 === t.side ? i.intersectTriangle(s, a, r, !0, o) : i.intersectTriangle(r, a, s, 2 !== t.side, o),
        null === l)
            return null;
        At.copy(o),
        At.applyMatrix4(e.matrixWorld);
        const c = n.ray.origin.distanceTo(At);
        return c < n.near || c > n.far ? null : {
            distance: c,
            point: At.clone(),
            object: e
        }
    }(e, t, n, i, ft, gt, vt, Lt);
    if (m) {
        o && (St.fromBufferAttribute(o, c),
        Et.fromBufferAttribute(o, h),
        Tt.fromBufferAttribute(o, u),
        m.uv = Ge.getUV(Lt, ft, gt, vt, St, Et, Tt, new p)),
        l && (St.fromBufferAttribute(l, c),
        Et.fromBufferAttribute(l, h),
        Tt.fromBufferAttribute(l, u),
        m.uv2 = Ge.getUV(Lt, ft, gt, vt, St, Et, Tt, new p));
        const e = {
            a: c,
            b: h,
            c: u,
            normal: new b,
            materialIndex: 0
        };
        Ge.getNormal(ft, gt, vt, e.normal),
        m.face = e
    }
    return m
}
Rt.prototype.isMesh = !0;
class Pt extends ut {
    constructor(e=1, t=1, n=1, i=1, r=1, a=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: a
        };
        const s = this;
        i = Math.floor(i),
        r = Math.floor(r),
        a = Math.floor(a);
        const o = []
          , l = []
          , c = []
          , h = [];
        let u = 0
          , d = 0;
        function p(e, t, n, i, r, a, p, m, f, g, v) {
            const x = a / f
              , _ = p / g
              , y = a / 2
              , M = p / 2
              , w = m / 2
              , S = f + 1
              , E = g + 1;
            let T = 0
              , L = 0;
            const A = new b;
            for (let s = 0; s < E; s++) {
                const a = s * _ - M;
                for (let o = 0; o < S; o++) {
                    const u = o * x - y;
                    A[e] = u * i,
                    A[t] = a * r,
                    A[n] = w,
                    l.push(A.x, A.y, A.z),
                    A[e] = 0,
                    A[t] = 0,
                    A[n] = m > 0 ? 1 : -1,
                    c.push(A.x, A.y, A.z),
                    h.push(o / f),
                    h.push(1 - s / g),
                    T += 1
                }
            }
            for (let s = 0; s < g; s++)
                for (let e = 0; e < f; e++) {
                    const t = u + e + S * s
                      , n = u + e + S * (s + 1)
                      , i = u + (e + 1) + S * (s + 1)
                      , r = u + (e + 1) + S * s;
                    o.push(t, n, r),
                    o.push(n, i, r),
                    L += 6
                }
            s.addGroup(d, L, v),
            d += L,
            u += T
        }
        p("z", "y", "x", -1, -1, n, t, e, a, r, 0),
        p("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
        p("x", "z", "y", 1, 1, e, n, t, i, a, 2),
        p("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
        p("x", "y", "z", 1, -1, e, t, n, i, r, 4),
        p("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
        this.setIndex(o),
        this.setAttribute("position", new nt(l,3)),
        this.setAttribute("normal", new nt(c,3)),
        this.setAttribute("uv", new nt(h,2))
    }
}
function Dt(e) {
    const t = {};
    for (const n in e) {
        t[n] = {};
        for (const i in e[n]) {
            const r = e[n][i];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? t[n][i] = r.clone() : Array.isArray(r) ? t[n][i] = r.slice() : t[n][i] = r
        }
    }
    return t
}
function Nt(e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const i = Dt(e[n]);
        for (const e in i)
            t[e] = i[e]
    }
    return t
}
const It = {
    clone: Dt,
    merge: Nt
};
class zt extends Ve {
    constructor(e) {
        super(),
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(e))
    }
    copy(e) {
        return super.copy(e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = Dt(e.uniforms),
        this.defines = Object.assign({}, e.defines),
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.morphNormals = e.morphNormals,
        this.extensions = Object.assign({}, e.extensions),
        this.glslVersion = e.glslVersion,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        t.glslVersion = this.glslVersion,
        t.uniforms = {};
        for (const i in this.uniforms) {
            const n = this.uniforms[i].value;
            n && n.isTexture ? t.uniforms[i] = {
                type: "t",
                value: n.toJSON(e).uuid
            } : n && n.isColor ? t.uniforms[i] = {
                type: "c",
                value: n.getHex()
            } : n && n.isVector2 ? t.uniforms[i] = {
                type: "v2",
                value: n.toArray()
            } : n && n.isVector3 ? t.uniforms[i] = {
                type: "v3",
                value: n.toArray()
            } : n && n.isVector4 ? t.uniforms[i] = {
                type: "v4",
                value: n.toArray()
            } : n && n.isMatrix3 ? t.uniforms[i] = {
                type: "m3",
                value: n.toArray()
            } : n && n.isMatrix4 ? t.uniforms[i] = {
                type: "m4",
                value: n.toArray()
            } : t.uniforms[i] = {
                value: n
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader;
        const n = {};
        for (const i in this.extensions)
            !0 === this.extensions[i] && (n[i] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n),
        t
    }
}
zt.prototype.isShaderMaterial = !0;
class Ft extends Ee {
    constructor() {
        super(),
        this.type = "Camera",
        this.matrixWorldInverse = new ee,
        this.projectionMatrix = new ee,
        this.projectionMatrixInverse = new ee
    }
    copy(e, t) {
        return super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this
    }
    getWorldDirection(e) {
        void 0 === e && (console.warn("THREE.Camera: .getWorldDirection() target is now required"),
        e = new b),
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(-t[8], -t[9], -t[10]).normalize()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
Ft.prototype.isCamera = !0;
class Ht extends Ft {
    constructor(e=50, t=1, n=.1, i=2e3) {
        super(),
        this.type = "PerspectiveCamera",
        this.fov = e,
        this.zoom = 1,
        this.near = n,
        this.far = i,
        this.focus = 10,
        this.aspect = t,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.fov = e.fov,
        this.zoom = e.zoom,
        this.near = e.near,
        this.far = e.far,
        this.focus = e.focus,
        this.aspect = e.aspect,
        this.view = null === e.view ? null : Object.assign({}, e.view),
        this.filmGauge = e.filmGauge,
        this.filmOffset = e.filmOffset,
        this
    }
    setFocalLength(e) {
        const t = .5 * this.getFilmHeight() / e;
        this.fov = 2 * r * Math.atan(t),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        const e = Math.tan(.5 * i * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return 2 * r * Math.atan(Math.tan(.5 * i * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    setViewOffset(e, t, n, i, r, a) {
        this.aspect = e / t,
        null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = i,
        this.view.width = r,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = e * Math.tan(.5 * i * this.fov) / this.zoom
          , n = 2 * t
          , r = this.aspect * n
          , a = -.5 * r;
        const s = this.view;
        if (null !== this.view && this.view.enabled) {
            const e = s.fullWidth
              , i = s.fullHeight;
            a += s.offsetX * r / e,
            t -= s.offsetY * n / i,
            r *= s.width / e,
            n *= s.height / i
        }
        const o = this.filmOffset;
        0 !== o && (a += e * o / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(a, a + r, t, t - n, e, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.fov = this.fov,
        t.object.zoom = this.zoom,
        t.object.near = this.near,
        t.object.far = this.far,
        t.object.focus = this.focus,
        t.object.aspect = this.aspect,
        null !== this.view && (t.object.view = Object.assign({}, this.view)),
        t.object.filmGauge = this.filmGauge,
        t.object.filmOffset = this.filmOffset,
        t
    }
}
Ht.prototype.isPerspectiveCamera = !0;
class Ot extends Ee {
    constructor(e, t, n) {
        if (super(),
        this.type = "CubeCamera",
        !0 !== n.isWebGLCubeRenderTarget)
            return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
        this.renderTarget = n;
        const i = new Ht(90,1,e,t);
        i.layers = this.layers,
        i.up.set(0, -1, 0),
        i.lookAt(new b(1,0,0)),
        this.add(i);
        const r = new Ht(90,1,e,t);
        r.layers = this.layers,
        r.up.set(0, -1, 0),
        r.lookAt(new b(-1,0,0)),
        this.add(r);
        const a = new Ht(90,1,e,t);
        a.layers = this.layers,
        a.up.set(0, 0, 1),
        a.lookAt(new b(0,1,0)),
        this.add(a);
        const s = new Ht(90,1,e,t);
        s.layers = this.layers,
        s.up.set(0, 0, -1),
        s.lookAt(new b(0,-1,0)),
        this.add(s);
        const o = new Ht(90,1,e,t);
        o.layers = this.layers,
        o.up.set(0, -1, 0),
        o.lookAt(new b(0,0,1)),
        this.add(o);
        const l = new Ht(90,1,e,t);
        l.layers = this.layers,
        l.up.set(0, -1, 0),
        l.lookAt(new b(0,0,-1)),
        this.add(l)
    }
    update(e, t) {
        null === this.parent && this.updateMatrixWorld();
        const n = this.renderTarget
          , [i,r,a,s,o,l] = this.children
          , c = e.xr.enabled
          , h = e.getRenderTarget();
        e.xr.enabled = !1;
        const u = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
        e.setRenderTarget(n, 0),
        e.render(t, i),
        e.setRenderTarget(n, 1),
        e.render(t, r),
        e.setRenderTarget(n, 2),
        e.render(t, a),
        e.setRenderTarget(n, 3),
        e.render(t, s),
        e.setRenderTarget(n, 4),
        e.render(t, o),
        n.texture.generateMipmaps = u,
        e.setRenderTarget(n, 5),
        e.render(t, l),
        e.setRenderTarget(h),
        e.xr.enabled = c
    }
}
class Ut extends x {
    constructor(e, t, n, i, r, a, s, o, l, c) {
        super(e = void 0 !== e ? e : [], t = void 0 !== t ? t : 301, n, i, r, a, s = void 0 !== s ? s : 1022, o, l, c),
        this._needsFlipEnvMap = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
Ut.prototype.isCubeTexture = !0;
class Gt extends M {
    constructor(e, t, n) {
        Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),
        t = n),
        super(e, e, t),
        t = t || {},
        this.texture = new Ut(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),
        this.texture.generateMipmaps = void 0 !== t.generateMipmaps && t.generateMipmaps,
        this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : 1006,
        this.texture._needsFlipEnvMap = !1
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type,
        this.texture.format = 1023,
        this.texture.encoding = t.encoding,
        this.texture.generateMipmaps = t.generateMipmaps,
        this.texture.minFilter = t.minFilter,
        this.texture.magFilter = t.magFilter;
        const n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
            fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
        }
          , i = new Pt(5,5,5)
          , r = new zt({
            name: "CubemapFromEquirect",
            uniforms: Dt(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: 1,
            blending: 0
        });
        r.uniforms.tEquirect.value = t;
        const a = new Rt(i,r)
          , s = t.minFilter;
        1008 === t.minFilter && (t.minFilter = 1006);
        return new Ot(1,10,this).update(e, a),
        t.minFilter = s,
        a.geometry.dispose(),
        a.material.dispose(),
        this
    }
    clear(e, t, n, i) {
        const r = e.getRenderTarget();
        for (let a = 0; a < 6; a++)
            e.setRenderTarget(this, a),
            e.clear(t, n, i);
        e.setRenderTarget(r)
    }
}
Gt.prototype.isWebGLCubeRenderTarget = !0;
class Bt extends x {
    constructor(e, t, n, i, r, a, s, o, l, c, h, u) {
        super(null, a, s, o, l, c, i, r, h, u),
        this.image = {
            data: e || null,
            width: t || 1,
            height: n || 1
        },
        this.magFilter = void 0 !== l ? l : 1003,
        this.minFilter = void 0 !== c ? c : 1003,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.needsUpdate = !0
    }
}
Bt.prototype.isDataTexture = !0;
const Vt = new j
  , Wt = new b;
class kt {
    constructor(e=new Re, t=new Re, n=new Re, i=new Re, r=new Re, a=new Re) {
        this.planes = [e, t, n, i, r, a]
    }
    set(e, t, n, i, r, a) {
        const s = this.planes;
        return s[0].copy(e),
        s[1].copy(t),
        s[2].copy(n),
        s[3].copy(i),
        s[4].copy(r),
        s[5].copy(a),
        this
    }
    copy(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e) {
        const t = this.planes
          , n = e.elements
          , i = n[0]
          , r = n[1]
          , a = n[2]
          , s = n[3]
          , o = n[4]
          , l = n[5]
          , c = n[6]
          , h = n[7]
          , u = n[8]
          , d = n[9]
          , p = n[10]
          , m = n[11]
          , f = n[12]
          , g = n[13]
          , v = n[14]
          , x = n[15];
        return t[0].setComponents(s - i, h - o, m - u, x - f).normalize(),
        t[1].setComponents(s + i, h + o, m + u, x + f).normalize(),
        t[2].setComponents(s + r, h + l, m + d, x + g).normalize(),
        t[3].setComponents(s - r, h - l, m - d, x - g).normalize(),
        t[4].setComponents(s - a, h - c, m - p, x - v).normalize(),
        t[5].setComponents(s + a, h + c, m + p, x + v).normalize(),
        this
    }
    intersectsObject(e) {
        const t = e.geometry;
        return null === t.boundingSphere && t.computeBoundingSphere(),
        Vt.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Vt)
    }
    intersectsSprite(e) {
        return Vt.center.set(0, 0, 0),
        Vt.radius = .7071067811865476,
        Vt.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Vt)
    }
    intersectsSphere(e) {
        const t = this.planes
          , n = e.center
          , i = -e.radius;
        for (let r = 0; r < 6; r++) {
            if (t[r].distanceToPoint(n) < i)
                return !1
        }
        return !0
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) {
            const i = t[n];
            if (Wt.x = i.normal.x > 0 ? e.max.x : e.min.x,
            Wt.y = i.normal.y > 0 ? e.max.y : e.min.y,
            Wt.z = i.normal.z > 0 ? e.max.z : e.min.z,
            i.distanceToPoint(Wt) < 0)
                return !1
        }
        return !0
    }
    containsPoint(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
function jt() {
    let e = null
      , t = !1
      , n = null
      , i = null;
    function r(t, a) {
        n(t, a),
        i = e.requestAnimationFrame(r)
    }
    return {
        start: function() {
            !0 !== t && null !== n && (i = e.requestAnimationFrame(r),
            t = !0)
        },
        stop: function() {
            e.cancelAnimationFrame(i),
            t = !1
        },
        setAnimationLoop: function(e) {
            n = e
        },
        setContext: function(t) {
            e = t
        }
    }
}
function qt(e, t) {
    const n = t.isWebGL2
      , i = new WeakMap;
    return {
        get: function(e) {
            return e.isInterleavedBufferAttribute && (e = e.data),
            i.get(e)
        },
        remove: function(t) {
            t.isInterleavedBufferAttribute && (t = t.data);
            const n = i.get(t);
            n && (e.deleteBuffer(n.buffer),
            i.delete(t))
        },
        update: function(t, r) {
            if (t.isGLBufferAttribute) {
                const e = i.get(t);
                return void ((!e || e.version < t.version) && i.set(t, {
                    buffer: t.buffer,
                    type: t.type,
                    bytesPerElement: t.elementSize,
                    version: t.version
                }))
            }
            t.isInterleavedBufferAttribute && (t = t.data);
            const a = i.get(t);
            void 0 === a ? i.set(t, function(t, i) {
                const r = t.array
                  , a = t.usage
                  , s = e.createBuffer();
                e.bindBuffer(i, s),
                e.bufferData(i, r, a),
                t.onUploadCallback();
                let o = 5126;
                return r instanceof Float32Array ? o = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? t.isFloat16BufferAttribute ? n ? o = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : o = 5123 : r instanceof Int16Array ? o = 5122 : r instanceof Uint32Array ? o = 5125 : r instanceof Int32Array ? o = 5124 : r instanceof Int8Array ? o = 5120 : r instanceof Uint8Array && (o = 5121),
                {
                    buffer: s,
                    type: o,
                    bytesPerElement: r.BYTES_PER_ELEMENT,
                    version: t.version
                }
            }(t, r)) : a.version < t.version && (!function(t, i, r) {
                const a = i.array
                  , s = i.updateRange;
                e.bindBuffer(r, t),
                -1 === s.count ? e.bufferSubData(r, 0, a) : (n ? e.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : e.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset + s.count)),
                s.count = -1)
            }(a.buffer, t, r),
            a.version = t.version)
        }
    }
}
class Xt extends ut {
    constructor(e=1, t=1, n=1, i=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: i
        };
        const r = e / 2
          , a = t / 2
          , s = Math.floor(n)
          , o = Math.floor(i)
          , l = s + 1
          , c = o + 1
          , h = e / s
          , u = t / o
          , d = []
          , p = []
          , m = []
          , f = [];
        for (let g = 0; g < c; g++) {
            const e = g * u - a;
            for (let t = 0; t < l; t++) {
                const n = t * h - r;
                p.push(n, -e, 0),
                m.push(0, 0, 1),
                f.push(t / s),
                f.push(1 - g / o)
            }
        }
        for (let g = 0; g < o; g++)
            for (let e = 0; e < s; e++) {
                const t = e + l * g
                  , n = e + l * (g + 1)
                  , i = e + 1 + l * (g + 1)
                  , r = e + 1 + l * g;
                d.push(t, n, r),
                d.push(n, i, r)
            }
        this.setIndex(d),
        this.setAttribute("position", new nt(p,3)),
        this.setAttribute("normal", new nt(m,3)),
        this.setAttribute("uv", new nt(f,2))
    }
}
const Yt = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
    normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
    transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
}
  , Zt = {
    common: {
        diffuse: {
            value: new Ze(15658734)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        uvTransform: {
            value: new m
        },
        uv2Transform: {
            value: new m
        },
        alphaMap: {
            value: null
        }
    },
    specularmap: {
        specularMap: {
            value: null
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        refractionRatio: {
            value: .98
        },
        maxMipLevel: {
            value: 0
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalScale: {
            value: new p(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new Ze(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotShadowMap: {
            value: []
        },
        spotShadowMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new Ze(15658734)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        uvTransform: {
            value: new m
        }
    },
    sprite: {
        diffuse: {
            value: new Ze(15658734)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new p(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        uvTransform: {
            value: new m
        }
    }
}
  , Jt = {
    basic: {
        uniforms: Nt([Zt.common, Zt.specularmap, Zt.envmap, Zt.aomap, Zt.lightmap, Zt.fog]),
        vertexShader: Yt.meshbasic_vert,
        fragmentShader: Yt.meshbasic_frag
    },
    lambert: {
        uniforms: Nt([Zt.common, Zt.specularmap, Zt.envmap, Zt.aomap, Zt.lightmap, Zt.emissivemap, Zt.fog, Zt.lights, {
            emissive: {
                value: new Ze(0)
            }
        }]),
        vertexShader: Yt.meshlambert_vert,
        fragmentShader: Yt.meshlambert_frag
    },
    phong: {
        uniforms: Nt([Zt.common, Zt.specularmap, Zt.envmap, Zt.aomap, Zt.lightmap, Zt.emissivemap, Zt.bumpmap, Zt.normalmap, Zt.displacementmap, Zt.fog, Zt.lights, {
            emissive: {
                value: new Ze(0)
            },
            specular: {
                value: new Ze(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: Yt.meshphong_vert,
        fragmentShader: Yt.meshphong_frag
    },
    standard: {
        uniforms: Nt([Zt.common, Zt.envmap, Zt.aomap, Zt.lightmap, Zt.emissivemap, Zt.bumpmap, Zt.normalmap, Zt.displacementmap, Zt.roughnessmap, Zt.metalnessmap, Zt.fog, Zt.lights, {
            emissive: {
                value: new Ze(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: Yt.meshphysical_vert,
        fragmentShader: Yt.meshphysical_frag
    },
    toon: {
        uniforms: Nt([Zt.common, Zt.aomap, Zt.lightmap, Zt.emissivemap, Zt.bumpmap, Zt.normalmap, Zt.displacementmap, Zt.gradientmap, Zt.fog, Zt.lights, {
            emissive: {
                value: new Ze(0)
            }
        }]),
        vertexShader: Yt.meshtoon_vert,
        fragmentShader: Yt.meshtoon_frag
    },
    matcap: {
        uniforms: Nt([Zt.common, Zt.bumpmap, Zt.normalmap, Zt.displacementmap, Zt.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: Yt.meshmatcap_vert,
        fragmentShader: Yt.meshmatcap_frag
    },
    points: {
        uniforms: Nt([Zt.points, Zt.fog]),
        vertexShader: Yt.points_vert,
        fragmentShader: Yt.points_frag
    },
    dashed: {
        uniforms: Nt([Zt.common, Zt.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: Yt.linedashed_vert,
        fragmentShader: Yt.linedashed_frag
    },
    depth: {
        uniforms: Nt([Zt.common, Zt.displacementmap]),
        vertexShader: Yt.depth_vert,
        fragmentShader: Yt.depth_frag
    },
    normal: {
        uniforms: Nt([Zt.common, Zt.bumpmap, Zt.normalmap, Zt.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Yt.normal_vert,
        fragmentShader: Yt.normal_frag
    },
    sprite: {
        uniforms: Nt([Zt.sprite, Zt.fog]),
        vertexShader: Yt.sprite_vert,
        fragmentShader: Yt.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new m
            },
            t2D: {
                value: null
            }
        },
        vertexShader: Yt.background_vert,
        fragmentShader: Yt.background_frag
    },
    cube: {
        uniforms: Nt([Zt.envmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Yt.cube_vert,
        fragmentShader: Yt.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: Yt.equirect_vert,
        fragmentShader: Yt.equirect_frag
    },
    distanceRGBA: {
        uniforms: Nt([Zt.common, Zt.displacementmap, {
            referencePosition: {
                value: new b
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: Yt.distanceRGBA_vert,
        fragmentShader: Yt.distanceRGBA_frag
    },
    shadow: {
        uniforms: Nt([Zt.lights, Zt.fog, {
            color: {
                value: new Ze(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Yt.shadow_vert,
        fragmentShader: Yt.shadow_frag
    }
};
function Qt(e, t, n, i, r) {
    const a = new Ze(0);
    let s, o, l = 0, c = null, h = 0, u = null;
    function d(e, t) {
        n.buffers.color.setClear(e.r, e.g, e.b, t, r)
    }
    return {
        getClearColor: function() {
            return a
        },
        setClearColor: function(e, t=1) {
            a.set(e),
            l = t,
            d(a, l)
        },
        getClearAlpha: function() {
            return l
        },
        setClearAlpha: function(e) {
            l = e,
            d(a, l)
        },
        render: function(n, r, p, m) {
            let f = !0 === r.isScene ? r.background : null;
            f && f.isTexture && (f = t.get(f));
            const g = e.xr
              , v = g.getSession && g.getSession();
            v && "additive" === v.environmentBlendMode && (f = null),
            null === f ? d(a, l) : f && f.isColor && (d(f, 1),
            m = !0),
            (e.autoClear || m) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            f && (f.isCubeTexture || 306 === f.mapping) ? (void 0 === o && (o = new Rt(new Pt(1,1,1),new zt({
                name: "BackgroundCubeMaterial",
                uniforms: Dt(Jt.cube.uniforms),
                vertexShader: Jt.cube.vertexShader,
                fragmentShader: Jt.cube.fragmentShader,
                side: 1,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })),
            o.geometry.deleteAttribute("normal"),
            o.geometry.deleteAttribute("uv"),
            o.onBeforeRender = function(e, t, n) {
                this.matrixWorld.copyPosition(n.matrixWorld)
            }
            ,
            Object.defineProperty(o.material, "envMap", {
                get: function() {
                    return this.uniforms.envMap.value
                }
            }),
            i.update(o)),
            o.material.uniforms.envMap.value = f,
            o.material.uniforms.flipEnvMap.value = f.isCubeTexture && f._needsFlipEnvMap ? -1 : 1,
            c === f && h === f.version && u === e.toneMapping || (o.material.needsUpdate = !0,
            c = f,
            h = f.version,
            u = e.toneMapping),
            n.unshift(o, o.geometry, o.material, 0, 0, null)) : f && f.isTexture && (void 0 === s && (s = new Rt(new Xt(2,2),new zt({
                name: "BackgroundMaterial",
                uniforms: Dt(Jt.background.uniforms),
                vertexShader: Jt.background.vertexShader,
                fragmentShader: Jt.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })),
            s.geometry.deleteAttribute("normal"),
            Object.defineProperty(s.material, "map", {
                get: function() {
                    return this.uniforms.t2D.value
                }
            }),
            i.update(s)),
            s.material.uniforms.t2D.value = f,
            !0 === f.matrixAutoUpdate && f.updateMatrix(),
            s.material.uniforms.uvTransform.value.copy(f.matrix),
            c === f && h === f.version && u === e.toneMapping || (s.material.needsUpdate = !0,
            c = f,
            h = f.version,
            u = e.toneMapping),
            n.unshift(s, s.geometry, s.material, 0, 0, null))
        }
    }
}
function Kt(e, t, n, i) {
    const r = e.getParameter(34921)
      , a = i.isWebGL2 ? null : t.get("OES_vertex_array_object")
      , s = i.isWebGL2 || null !== a
      , o = {}
      , l = d(null);
    let c = l;
    function h(t) {
        return i.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t)
    }
    function u(t) {
        return i.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t)
    }
    function d(e) {
        const t = []
          , n = []
          , i = [];
        for (let a = 0; a < r; a++)
            t[a] = 0,
            n[a] = 0,
            i[a] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: t,
            enabledAttributes: n,
            attributeDivisors: i,
            object: e,
            attributes: {},
            index: null
        }
    }
    function p() {
        const e = c.newAttributes;
        for (let t = 0, n = e.length; t < n; t++)
            e[t] = 0
    }
    function m(e) {
        f(e, 0)
    }
    function f(n, r) {
        const a = c.newAttributes
          , s = c.enabledAttributes
          , o = c.attributeDivisors;
        if (a[n] = 1,
        0 === s[n] && (e.enableVertexAttribArray(n),
        s[n] = 1),
        o[n] !== r) {
            (i.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r),
            o[n] = r
        }
    }
    function g() {
        const t = c.newAttributes
          , n = c.enabledAttributes;
        for (let i = 0, r = n.length; i < r; i++)
            n[i] !== t[i] && (e.disableVertexAttribArray(i),
            n[i] = 0)
    }
    function v(t, n, r, a, s, o) {
        !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? e.vertexAttribPointer(t, n, r, a, s, o) : e.vertexAttribIPointer(t, n, r, s, o)
    }
    function x() {
        _(),
        c !== l && (c = l,
        h(c.object))
    }
    function _() {
        l.geometry = null,
        l.program = null,
        l.wireframe = !1
    }
    return {
        setup: function(r, l, u, x, _) {
            let y = !1;
            if (s) {
                const t = function(t, n, r) {
                    const s = !0 === r.wireframe;
                    let l = o[t.id];
                    void 0 === l && (l = {},
                    o[t.id] = l);
                    let c = l[n.id];
                    void 0 === c && (c = {},
                    l[n.id] = c);
                    let h = c[s];
                    void 0 === h && (h = d(i.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()),
                    c[s] = h);
                    return h
                }(x, u, l);
                c !== t && (c = t,
                h(c.object)),
                y = function(e, t) {
                    const n = c.attributes
                      , i = e.attributes;
                    let r = 0;
                    for (const a in i) {
                        const e = n[a]
                          , t = i[a];
                        if (void 0 === e)
                            return !0;
                        if (e.attribute !== t)
                            return !0;
                        if (e.data !== t.data)
                            return !0;
                        r++
                    }
                    return c.attributesNum !== r || c.index !== t
                }(x, _),
                y && function(e, t) {
                    const n = {}
                      , i = e.attributes;
                    let r = 0;
                    for (const a in i) {
                        const e = i[a]
                          , t = {};
                        t.attribute = e,
                        e.data && (t.data = e.data),
                        n[a] = t,
                        r++
                    }
                    c.attributes = n,
                    c.attributesNum = r,
                    c.index = t
                }(x, _)
            } else {
                const e = !0 === l.wireframe;
                c.geometry === x.id && c.program === u.id && c.wireframe === e || (c.geometry = x.id,
                c.program = u.id,
                c.wireframe = e,
                y = !0)
            }
            !0 === r.isInstancedMesh && (y = !0),
            null !== _ && n.update(_, 34963),
            y && (!function(r, a, s, o) {
                if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === t.get("ANGLE_instanced_arrays"))
                    return;
                p();
                const l = o.attributes
                  , c = s.getAttributes()
                  , h = a.defaultAttributeValues;
                for (const t in c) {
                    const i = c[t];
                    if (i >= 0) {
                        const a = l[t];
                        if (void 0 !== a) {
                            const t = a.normalized
                              , r = a.itemSize
                              , s = n.get(a);
                            if (void 0 === s)
                                continue;
                            const l = s.buffer
                              , c = s.type
                              , h = s.bytesPerElement;
                            if (a.isInterleavedBufferAttribute) {
                                const n = a.data
                                  , s = n.stride
                                  , u = a.offset;
                                n && n.isInstancedInterleavedBuffer ? (f(i, n.meshPerAttribute),
                                void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)) : m(i),
                                e.bindBuffer(34962, l),
                                v(i, r, c, t, s * h, u * h)
                            } else
                                a.isInstancedBufferAttribute ? (f(i, a.meshPerAttribute),
                                void 0 === o._maxInstanceCount && (o._maxInstanceCount = a.meshPerAttribute * a.count)) : m(i),
                                e.bindBuffer(34962, l),
                                v(i, r, c, t, 0, 0)
                        } else if ("instanceMatrix" === t) {
                            const t = n.get(r.instanceMatrix);
                            if (void 0 === t)
                                continue;
                            const a = t.buffer
                              , s = t.type;
                            f(i + 0, 1),
                            f(i + 1, 1),
                            f(i + 2, 1),
                            f(i + 3, 1),
                            e.bindBuffer(34962, a),
                            e.vertexAttribPointer(i + 0, 4, s, !1, 64, 0),
                            e.vertexAttribPointer(i + 1, 4, s, !1, 64, 16),
                            e.vertexAttribPointer(i + 2, 4, s, !1, 64, 32),
                            e.vertexAttribPointer(i + 3, 4, s, !1, 64, 48)
                        } else if ("instanceColor" === t) {
                            const t = n.get(r.instanceColor);
                            if (void 0 === t)
                                continue;
                            const a = t.buffer
                              , s = t.type;
                            f(i, 1),
                            e.bindBuffer(34962, a),
                            e.vertexAttribPointer(i, 3, s, !1, 12, 0)
                        } else if (void 0 !== h) {
                            const n = h[t];
                            if (void 0 !== n)
                                switch (n.length) {
                                case 2:
                                    e.vertexAttrib2fv(i, n);
                                    break;
                                case 3:
                                    e.vertexAttrib3fv(i, n);
                                    break;
                                case 4:
                                    e.vertexAttrib4fv(i, n);
                                    break;
                                default:
                                    e.vertexAttrib1fv(i, n)
                                }
                        }
                    }
                }
                g()
            }(r, l, u, x),
            null !== _ && e.bindBuffer(34963, n.get(_).buffer))
        },
        reset: x,
        resetDefaultState: _,
        dispose: function() {
            x();
            for (const e in o) {
                const t = o[e];
                for (const e in t) {
                    const n = t[e];
                    for (const e in n)
                        u(n[e].object),
                        delete n[e];
                    delete t[e]
                }
                delete o[e]
            }
        },
        releaseStatesOfGeometry: function(e) {
            if (void 0 === o[e.id])
                return;
            const t = o[e.id];
            for (const n in t) {
                const e = t[n];
                for (const t in e)
                    u(e[t].object),
                    delete e[t];
                delete t[n]
            }
            delete o[e.id]
        },
        releaseStatesOfProgram: function(e) {
            for (const t in o) {
                const n = o[t];
                if (void 0 === n[e.id])
                    continue;
                const i = n[e.id];
                for (const e in i)
                    u(i[e].object),
                    delete i[e];
                delete n[e.id]
            }
        },
        initAttributes: p,
        enableAttribute: m,
        disableUnusedAttributes: g
    }
}
function $t(e, t, n, i) {
    const r = i.isWebGL2;
    let a;
    this.setMode = function(e) {
        a = e
    }
    ,
    this.render = function(t, i) {
        e.drawArrays(a, t, i),
        n.update(i, a, 1)
    }
    ,
    this.renderInstances = function(i, s, o) {
        if (0 === o)
            return;
        let l, c;
        if (r)
            l = e,
            c = "drawArraysInstanced";
        else if (l = t.get("ANGLE_instanced_arrays"),
        c = "drawArraysInstancedANGLE",
        null === l)
            return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        l[c](a, i, s, o),
        n.update(s, a, o)
    }
}
function en(e, t, n) {
    let i;
    function r(t) {
        if ("highp" === t) {
            if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0)
                return "highp";
            t = "mediump"
        }
        return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
    }
    const a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext;
    let s = void 0 !== n.precision ? n.precision : "highp";
    const o = r(s);
    o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."),
    s = o);
    const l = !0 === n.logarithmicDepthBuffer
      , c = e.getParameter(34930)
      , h = e.getParameter(35660)
      , u = e.getParameter(3379)
      , d = e.getParameter(34076)
      , p = e.getParameter(34921)
      , m = e.getParameter(36347)
      , f = e.getParameter(36348)
      , g = e.getParameter(36349)
      , v = h > 0
      , x = a || t.has("OES_texture_float");
    return {
        isWebGL2: a,
        getMaxAnisotropy: function() {
            if (void 0 !== i)
                return i;
            if (!0 === t.has("EXT_texture_filter_anisotropic")) {
                const n = t.get("EXT_texture_filter_anisotropic");
                i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            } else
                i = 0;
            return i
        },
        getMaxPrecision: r,
        precision: s,
        logarithmicDepthBuffer: l,
        maxTextures: c,
        maxVertexTextures: h,
        maxTextureSize: u,
        maxCubemapSize: d,
        maxAttributes: p,
        maxVertexUniforms: m,
        maxVaryings: f,
        maxFragmentUniforms: g,
        vertexTextures: v,
        floatFragmentTextures: x,
        floatVertexTextures: v && x,
        maxSamples: a ? e.getParameter(36183) : 0
    }
}
function tn(e) {
    const t = this;
    let n = null
      , i = 0
      , r = !1
      , a = !1;
    const s = new Re
      , o = new m
      , l = {
        value: null,
        needsUpdate: !1
    };
    function c() {
        l.value !== n && (l.value = n,
        l.needsUpdate = i > 0),
        t.numPlanes = i,
        t.numIntersection = 0
    }
    function h(e, n, i, r) {
        const a = null !== e ? e.length : 0;
        let c = null;
        if (0 !== a) {
            if (c = l.value,
            !0 !== r || null === c) {
                const t = i + 4 * a
                  , r = n.matrixWorldInverse;
                o.getNormalMatrix(r),
                (null === c || c.length < t) && (c = new Float32Array(t));
                for (let n = 0, l = i; n !== a; ++n,
                l += 4)
                    s.copy(e[n]).applyMatrix4(r, o),
                    s.normal.toArray(c, l),
                    c[l + 3] = s.constant
            }
            l.value = c,
            l.needsUpdate = !0
        }
        return t.numPlanes = a,
        t.numIntersection = 0,
        c
    }
    this.uniform = l,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(e, t, a) {
        const s = 0 !== e.length || t || 0 !== i || r;
        return r = t,
        n = h(e, a, 0),
        i = e.length,
        s
    }
    ,
    this.beginShadows = function() {
        a = !0,
        h(null)
    }
    ,
    this.endShadows = function() {
        a = !1,
        c()
    }
    ,
    this.setState = function(t, s, o) {
        const u = t.clippingPlanes
          , d = t.clipIntersection
          , p = t.clipShadows
          , m = e.get(t);
        if (!r || null === u || 0 === u.length || a && !p)
            a ? h(null) : c();
        else {
            const e = a ? 0 : i
              , t = 4 * e;
            let r = m.clippingState || null;
            l.value = r,
            r = h(u, s, t, o);
            for (let i = 0; i !== t; ++i)
                r[i] = n[i];
            m.clippingState = r,
            this.numIntersection = d ? this.numPlanes : 0,
            this.numPlanes += e
        }
    }
}
function nn(e) {
    let t = new WeakMap;
    function n(e, t) {
        return 303 === t ? e.mapping = 301 : 304 === t && (e.mapping = 302),
        e
    }
    function i(e) {
        const n = e.target;
        n.removeEventListener("dispose", i);
        const r = t.get(n);
        void 0 !== r && (t.delete(n),
        r.dispose())
    }
    return {
        get: function(r) {
            if (r && r.isTexture) {
                const a = r.mapping;
                if (303 === a || 304 === a) {
                    if (t.has(r)) {
                        return n(t.get(r).texture, r.mapping)
                    }
                    {
                        const a = r.image;
                        if (a && a.height > 0) {
                            const s = e.getRenderTarget()
                              , o = new Gt(a.height / 2);
                            return o.fromEquirectangularTexture(e, r),
                            t.set(r, o),
                            e.setRenderTarget(s),
                            r.addEventListener("dispose", i),
                            n(o.texture, r.mapping)
                        }
                        return null
                    }
                }
            }
            return r
        },
        dispose: function() {
            t = new WeakMap
        }
    }
}
function rn(e) {
    const t = {};
    function n(n) {
        if (void 0 !== t[n])
            return t[n];
        let i;
        switch (n) {
        case "WEBGL_depth_texture":
            i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default:
            i = e.getExtension(n)
        }
        return t[n] = i,
        i
    }
    return {
        has: function(e) {
            return null !== n(e)
        },
        init: function(e) {
            e.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"),
            n("OES_texture_float"),
            n("OES_texture_half_float"),
            n("OES_texture_half_float_linear"),
            n("OES_standard_derivatives"),
            n("OES_element_index_uint"),
            n("OES_vertex_array_object"),
            n("ANGLE_instanced_arrays")),
            n("OES_texture_float_linear"),
            n("EXT_color_buffer_half_float")
        },
        get: function(e) {
            const t = n(e);
            return null === t && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."),
            t
        }
    }
}
function an(e, t, n, i) {
    const r = {}
      , a = new WeakMap;
    function s(e) {
        const o = e.target;
        null !== o.index && t.remove(o.index);
        for (const n in o.attributes)
            t.remove(o.attributes[n]);
        o.removeEventListener("dispose", s),
        delete r[o.id];
        const l = a.get(o);
        l && (t.remove(l),
        a.delete(o)),
        i.releaseStatesOfGeometry(o),
        !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
        n.memory.geometries--
    }
    function o(e) {
        const n = []
          , i = e.index
          , r = e.attributes.position;
        let s = 0;
        if (null !== i) {
            const e = i.array;
            s = i.version;
            for (let t = 0, i = e.length; t < i; t += 3) {
                const i = e[t + 0]
                  , r = e[t + 1]
                  , a = e[t + 2];
                n.push(i, r, r, a, a, i)
            }
        } else {
            const e = r.array;
            s = r.version;
            for (let t = 0, i = e.length / 3 - 1; t < i; t += 3) {
                const e = t + 0
                  , i = t + 1
                  , r = t + 2;
                n.push(e, i, i, r, r, e)
            }
        }
        const o = new (it(n) > 65535 ? tt : et)(n,1);
        o.version = s;
        const l = a.get(e);
        l && t.remove(l),
        a.set(e, o)
    }
    return {
        get: function(e, t) {
            return !0 === r[t.id] || (t.addEventListener("dispose", s),
            r[t.id] = !0,
            n.memory.geometries++),
            t
        },
        update: function(e) {
            const n = e.attributes;
            for (const r in n)
                t.update(n[r], 34962);
            const i = e.morphAttributes;
            for (const r in i) {
                const e = i[r];
                for (let n = 0, i = e.length; n < i; n++)
                    t.update(e[n], 34962)
            }
        },
        getWireframeAttribute: function(e) {
            const t = a.get(e);
            if (t) {
                const n = e.index;
                null !== n && t.version < n.version && o(e)
            } else
                o(e);
            return a.get(e)
        }
    }
}
function sn(e, t, n, i) {
    const r = i.isWebGL2;
    let a, s, o;
    this.setMode = function(e) {
        a = e
    }
    ,
    this.setIndex = function(e) {
        s = e.type,
        o = e.bytesPerElement
    }
    ,
    this.render = function(t, i) {
        e.drawElements(a, i, s, t * o),
        n.update(i, a, 1)
    }
    ,
    this.renderInstances = function(i, l, c) {
        if (0 === c)
            return;
        let h, u;
        if (r)
            h = e,
            u = "drawElementsInstanced";
        else if (h = t.get("ANGLE_instanced_arrays"),
        u = "drawElementsInstancedANGLE",
        null === h)
            return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        h[u](a, l, s, i * o, c),
        n.update(l, a, c)
    }
}
function on(e) {
    const t = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    return {
        memory: {
            geometries: 0,
            textures: 0
        },
        render: t,
        programs: null,
        autoReset: !0,
        reset: function() {
            t.frame++,
            t.calls = 0,
            t.triangles = 0,
            t.points = 0,
            t.lines = 0
        },
        update: function(e, n, i) {
            switch (t.calls++,
            n) {
            case 4:
                t.triangles += i * (e / 3);
                break;
            case 1:
                t.lines += i * (e / 2);
                break;
            case 3:
                t.lines += i * (e - 1);
                break;
            case 2:
                t.lines += i * e;
                break;
            case 0:
                t.points += i * e;
                break;
            default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", n)
            }
        }
    }
}
function ln(e, t) {
    return e[0] - t[0]
}
function cn(e, t) {
    return Math.abs(t[1]) - Math.abs(e[1])
}
function hn(e) {
    const t = {}
      , n = new Float32Array(8)
      , i = [];
    for (let r = 0; r < 8; r++)
        i[r] = [r, 0];
    return {
        update: function(r, a, s, o) {
            const l = r.morphTargetInfluences
              , c = void 0 === l ? 0 : l.length;
            let h = t[a.id];
            if (void 0 === h) {
                h = [];
                for (let e = 0; e < c; e++)
                    h[e] = [e, 0];
                t[a.id] = h
            }
            for (let e = 0; e < c; e++) {
                const t = h[e];
                t[0] = e,
                t[1] = l[e]
            }
            h.sort(cn);
            for (let e = 0; e < 8; e++)
                e < c && h[e][1] ? (i[e][0] = h[e][0],
                i[e][1] = h[e][1]) : (i[e][0] = Number.MAX_SAFE_INTEGER,
                i[e][1] = 0);
            i.sort(ln);
            const u = s.morphTargets && a.morphAttributes.position
              , d = s.morphNormals && a.morphAttributes.normal;
            let p = 0;
            for (let e = 0; e < 8; e++) {
                const t = i[e]
                  , r = t[0]
                  , s = t[1];
                r !== Number.MAX_SAFE_INTEGER && s ? (u && a.getAttribute("morphTarget" + e) !== u[r] && a.setAttribute("morphTarget" + e, u[r]),
                d && a.getAttribute("morphNormal" + e) !== d[r] && a.setAttribute("morphNormal" + e, d[r]),
                n[e] = s,
                p += s) : (u && !0 === a.hasAttribute("morphTarget" + e) && a.deleteAttribute("morphTarget" + e),
                d && !0 === a.hasAttribute("morphNormal" + e) && a.deleteAttribute("morphNormal" + e),
                n[e] = 0)
            }
            const m = a.morphTargetsRelative ? 1 : 1 - p;
            o.getUniforms().setValue(e, "morphTargetBaseInfluence", m),
            o.getUniforms().setValue(e, "morphTargetInfluences", n)
        }
    }
}
function un(e, t, n, i) {
    let r = new WeakMap;
    function a(e) {
        const t = e.target;
        t.removeEventListener("dispose", a),
        n.remove(t.instanceMatrix),
        null !== t.instanceColor && n.remove(t.instanceColor)
    }
    return {
        update: function(e) {
            const s = i.render.frame
              , o = e.geometry
              , l = t.get(e, o);
            return r.get(l) !== s && (t.update(l),
            r.set(l, s)),
            e.isInstancedMesh && (!1 === e.hasEventListener("dispose", a) && e.addEventListener("dispose", a),
            n.update(e.instanceMatrix, 34962),
            null !== e.instanceColor && n.update(e.instanceColor, 34962)),
            l
        },
        dispose: function() {
            r = new WeakMap
        }
    }
}
Jt.physical = {
    uniforms: Nt([Jt.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatNormalScale: {
            value: new p(1,1)
        },
        clearcoatNormalMap: {
            value: null
        },
        sheen: {
            value: new Ze(0)
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        }
    }]),
    vertexShader: Yt.meshphysical_vert,
    fragmentShader: Yt.meshphysical_frag
};
class dn extends x {
    constructor(e=null, t=1, n=1, i=1) {
        super(null),
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        },
        this.magFilter = 1003,
        this.minFilter = 1003,
        this.wrapR = 1001,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.needsUpdate = !0
    }
}
dn.prototype.isDataTexture2DArray = !0;
class pn extends x {
    constructor(e=null, t=1, n=1, i=1) {
        super(null),
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        },
        this.magFilter = 1003,
        this.minFilter = 1003,
        this.wrapR = 1001,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.needsUpdate = !0
    }
}
pn.prototype.isDataTexture3D = !0;
const mn = new x
  , fn = new dn
  , gn = new pn
  , vn = new Ut
  , xn = []
  , _n = []
  , yn = new Float32Array(16)
  , Mn = new Float32Array(9)
  , wn = new Float32Array(4);
function bn(e, t, n) {
    const i = e[0];
    if (i <= 0 || i > 0)
        return e;
    const r = t * n;
    let a = xn[r];
    if (void 0 === a && (a = new Float32Array(r),
    xn[r] = a),
    0 !== t) {
        i.toArray(a, 0);
        for (let i = 1, r = 0; i !== t; ++i)
            r += n,
            e[i].toArray(a, r)
    }
    return a
}
function Sn(e, t) {
    if (e.length !== t.length)
        return !1;
    for (let n = 0, i = e.length; n < i; n++)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function En(e, t) {
    for (let n = 0, i = t.length; n < i; n++)
        e[n] = t[n]
}
function Tn(e, t) {
    let n = _n[t];
    void 0 === n && (n = new Int32Array(t),
    _n[t] = n);
    for (let i = 0; i !== t; ++i)
        n[i] = e.allocateTextureUnit();
    return n
}
function Ln(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1f(this.addr, t),
    n[0] = t)
}
function An(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
        n[0] === t.x && n[1] === t.y || (e.uniform2f(this.addr, t.x, t.y),
        n[0] = t.x,
        n[1] = t.y);
    else {
        if (Sn(n, t))
            return;
        e.uniform2fv(this.addr, t),
        En(n, t)
    }
}
function Rn(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
        n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z),
        n[0] = t.x,
        n[1] = t.y,
        n[2] = t.z);
    else if (void 0 !== t.r)
        n[0] === t.r && n[1] === t.g && n[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b),
        n[0] = t.r,
        n[1] = t.g,
        n[2] = t.b);
    else {
        if (Sn(n, t))
            return;
        e.uniform3fv(this.addr, t),
        En(n, t)
    }
}
function Cn(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
        n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
        n[0] = t.x,
        n[1] = t.y,
        n[2] = t.z,
        n[3] = t.w);
    else {
        if (Sn(n, t))
            return;
        e.uniform4fv(this.addr, t),
        En(n, t)
    }
}
function Pn(e, t) {
    const n = this.cache
      , i = t.elements;
    if (void 0 === i) {
        if (Sn(n, t))
            return;
        e.uniformMatrix2fv(this.addr, !1, t),
        En(n, t)
    } else {
        if (Sn(n, i))
            return;
        wn.set(i),
        e.uniformMatrix2fv(this.addr, !1, wn),
        En(n, i)
    }
}
function Dn(e, t) {
    const n = this.cache
      , i = t.elements;
    if (void 0 === i) {
        if (Sn(n, t))
            return;
        e.uniformMatrix3fv(this.addr, !1, t),
        En(n, t)
    } else {
        if (Sn(n, i))
            return;
        Mn.set(i),
        e.uniformMatrix3fv(this.addr, !1, Mn),
        En(n, i)
    }
}
function Nn(e, t) {
    const n = this.cache
      , i = t.elements;
    if (void 0 === i) {
        if (Sn(n, t))
            return;
        e.uniformMatrix4fv(this.addr, !1, t),
        En(n, t)
    } else {
        if (Sn(n, i))
            return;
        yn.set(i),
        e.uniformMatrix4fv(this.addr, !1, yn),
        En(n, i)
    }
}
function In(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1i(this.addr, t),
    n[0] = t)
}
function zn(e, t) {
    const n = this.cache;
    Sn(n, t) || (e.uniform2iv(this.addr, t),
    En(n, t))
}
function Fn(e, t) {
    const n = this.cache;
    Sn(n, t) || (e.uniform3iv(this.addr, t),
    En(n, t))
}
function Hn(e, t) {
    const n = this.cache;
    Sn(n, t) || (e.uniform4iv(this.addr, t),
    En(n, t))
}
function On(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1ui(this.addr, t),
    n[0] = t)
}
function Un(e, t) {
    const n = this.cache;
    Sn(n, t) || (e.uniform2uiv(this.addr, t),
    En(n, t))
}
function Gn(e, t) {
    const n = this.cache;
    Sn(n, t) || (e.uniform3uiv(this.addr, t),
    En(n, t))
}
function Bn(e, t) {
    const n = this.cache;
    Sn(n, t) || (e.uniform4uiv(this.addr, t),
    En(n, t))
}
function Vn(e, t, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r),
    i[0] = r),
    n.safeSetTexture2D(t || mn, r)
}
function Wn(e, t, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r),
    i[0] = r),
    n.setTexture3D(t || gn, r)
}
function kn(e, t, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r),
    i[0] = r),
    n.safeSetTextureCube(t || vn, r)
}
function jn(e, t, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r),
    i[0] = r),
    n.setTexture2DArray(t || fn, r)
}
function qn(e, t) {
    e.uniform1fv(this.addr, t)
}
function Xn(e, t) {
    const n = bn(t, this.size, 2);
    e.uniform2fv(this.addr, n)
}
function Yn(e, t) {
    const n = bn(t, this.size, 3);
    e.uniform3fv(this.addr, n)
}
function Zn(e, t) {
    const n = bn(t, this.size, 4);
    e.uniform4fv(this.addr, n)
}
function Jn(e, t) {
    const n = bn(t, this.size, 4);
    e.uniformMatrix2fv(this.addr, !1, n)
}
function Qn(e, t) {
    const n = bn(t, this.size, 9);
    e.uniformMatrix3fv(this.addr, !1, n)
}
function Kn(e, t) {
    const n = bn(t, this.size, 16);
    e.uniformMatrix4fv(this.addr, !1, n)
}
function $n(e, t) {
    e.uniform1iv(this.addr, t)
}
function ei(e, t) {
    e.uniform2iv(this.addr, t)
}
function ti(e, t) {
    e.uniform3iv(this.addr, t)
}
function ni(e, t) {
    e.uniform4iv(this.addr, t)
}
function ii(e, t) {
    e.uniform1uiv(this.addr, t)
}
function ri(e, t) {
    e.uniform2uiv(this.addr, t)
}
function ai(e, t) {
    e.uniform3uiv(this.addr, t)
}
function si(e, t) {
    e.uniform4uiv(this.addr, t)
}
function oi(e, t, n) {
    const i = t.length
      , r = Tn(n, i);
    e.uniform1iv(this.addr, r);
    for (let a = 0; a !== i; ++a)
        n.safeSetTexture2D(t[a] || mn, r[a])
}
function li(e, t, n) {
    const i = t.length
      , r = Tn(n, i);
    e.uniform1iv(this.addr, r);
    for (let a = 0; a !== i; ++a)
        n.safeSetTextureCube(t[a] || vn, r[a])
}
function ci(e, t, n) {
    this.id = e,
    this.addr = n,
    this.cache = [],
    this.setValue = function(e) {
        switch (e) {
        case 5126:
            return Ln;
        case 35664:
            return An;
        case 35665:
            return Rn;
        case 35666:
            return Cn;
        case 35674:
            return Pn;
        case 35675:
            return Dn;
        case 35676:
            return Nn;
        case 5124:
        case 35670:
            return In;
        case 35667:
        case 35671:
            return zn;
        case 35668:
        case 35672:
            return Fn;
        case 35669:
        case 35673:
            return Hn;
        case 5125:
            return On;
        case 36294:
            return Un;
        case 36295:
            return Gn;
        case 36296:
            return Bn;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return Vn;
        case 35679:
        case 36299:
        case 36307:
            return Wn;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return kn;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return jn
        }
    }(t.type)
}
function hi(e, t, n) {
    this.id = e,
    this.addr = n,
    this.cache = [],
    this.size = t.size,
    this.setValue = function(e) {
        switch (e) {
        case 5126:
            return qn;
        case 35664:
            return Xn;
        case 35665:
            return Yn;
        case 35666:
            return Zn;
        case 35674:
            return Jn;
        case 35675:
            return Qn;
        case 35676:
            return Kn;
        case 5124:
        case 35670:
            return $n;
        case 35667:
        case 35671:
            return ei;
        case 35668:
        case 35672:
            return ti;
        case 35669:
        case 35673:
            return ni;
        case 5125:
            return ii;
        case 36294:
            return ri;
        case 36295:
            return ai;
        case 36296:
            return si;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return oi;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return li
        }
    }(t.type)
}
function ui(e) {
    this.id = e,
    this.seq = [],
    this.map = {}
}
hi.prototype.updateCache = function(e) {
    const t = this.cache;
    e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)),
    En(t, e)
}
,
ui.prototype.setValue = function(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
        const a = i[r];
        a.setValue(e, t[a.id], n)
    }
}
;
const di = /(\w+)(\])?(\[|\.)?/g;
function pi(e, t) {
    e.seq.push(t),
    e.map[t.id] = t
}
function mi(e, t, n) {
    const i = e.name
      , r = i.length;
    for (di.lastIndex = 0; ; ) {
        const a = di.exec(i)
          , s = di.lastIndex;
        let o = a[1];
        const l = "]" === a[2]
          , c = a[3];
        if (l && (o |= 0),
        void 0 === c || "[" === c && s + 2 === r) {
            pi(n, void 0 === c ? new ci(o,e,t) : new hi(o,e,t));
            break
        }
        {
            let e = n.map[o];
            void 0 === e && (e = new ui(o),
            pi(n, e)),
            n = e
        }
    }
}
function fi(e, t) {
    this.seq = [],
    this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
        const n = e.getActiveUniform(t, i);
        mi(n, e.getUniformLocation(t, n.name), this)
    }
}
function gi(e, t, n) {
    const i = e.createShader(t);
    return e.shaderSource(i, n),
    e.compileShader(i),
    i
}
fi.prototype.setValue = function(e, t, n, i) {
    const r = this.map[t];
    void 0 !== r && r.setValue(e, n, i)
}
,
fi.prototype.setOptional = function(e, t, n) {
    const i = t[n];
    void 0 !== i && this.setValue(e, n, i)
}
,
fi.upload = function(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
        const a = t[r]
          , s = n[a.id];
        !1 !== s.needsUpdate && a.setValue(e, s.value, i)
    }
}
,
fi.seqWithValue = function(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
        const r = e[i];
        r.id in t && n.push(r)
    }
    return n
}
;
let vi = 0;
function xi(e) {
    switch (e) {
    case 3e3:
        return ["Linear", "( value )"];
    case 3001:
        return ["sRGB", "( value )"];
    case 3002:
        return ["RGBE", "( value )"];
    case 3004:
        return ["RGBM", "( value, 7.0 )"];
    case 3005:
        return ["RGBM", "( value, 16.0 )"];
    case 3006:
        return ["RGBD", "( value, 256.0 )"];
    case 3007:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case 3003:
        return ["LogLuv", "( value )"];
    default:
        return console.warn("THREE.WebGLProgram: Unsupported encoding:", e),
        ["Linear", "( value )"]
    }
}
function _i(e, t, n) {
    const i = e.getShaderParameter(t, 35713)
      , r = e.getShaderInfoLog(t).trim();
    if (i && "" === r)
        return "";
    return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(e) {
        const t = e.split("\n");
        for (let n = 0; n < t.length; n++)
            t[n] = n + 1 + ": " + t[n];
        return t.join("\n")
    }(e.getShaderSource(t))
}
function yi(e, t) {
    const n = xi(t);
    return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
}
function Mi(e, t) {
    const n = xi(t);
    return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
}
function wi(e, t) {
    let n;
    switch (t) {
    case 1:
        n = "Linear";
        break;
    case 2:
        n = "Reinhard";
        break;
    case 3:
        n = "OptimizedCineon";
        break;
    case 4:
        n = "ACESFilmic";
        break;
    case 5:
        n = "Custom";
        break;
    default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        n = "Linear"
    }
    return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
}
function bi(e) {
    return "" !== e
}
function Si(e, t) {
    return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
}
function Ei(e, t) {
    return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
}
const Ti = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Li(e) {
    return e.replace(Ti, Ai)
}
function Ai(e, t) {
    const n = Yt[t];
    if (void 0 === n)
        throw new Error("Can not resolve #include <" + t + ">");
    return Li(n)
}
const Ri = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g
  , Ci = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Pi(e) {
    return e.replace(Ci, Ni).replace(Ri, Di)
}
function Di(e, t, n, i) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),
    Ni(e, t, n, i)
}
function Ni(e, t, n, i) {
    let r = "";
    for (let a = parseInt(t); a < parseInt(n); a++)
        r += i.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
    return r
}
function Ii(e) {
    let t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
    return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
    t
}
function zi(e, t, n, i) {
    const r = e.getContext()
      , a = n.defines;
    let s = n.vertexShader
      , o = n.fragmentShader;
    const l = function(e) {
        let t = "SHADOWMAP_TYPE_BASIC";
        return 1 === e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF" : 2 === e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === e.shadowMapType && (t = "SHADOWMAP_TYPE_VSM"),
        t
    }(n)
      , c = function(e) {
        let t = "ENVMAP_TYPE_CUBE";
        if (e.envMap)
            switch (e.envMapMode) {
            case 301:
            case 302:
                t = "ENVMAP_TYPE_CUBE";
                break;
            case 306:
            case 307:
                t = "ENVMAP_TYPE_CUBE_UV"
            }
        return t
    }(n)
      , h = function(e) {
        let t = "ENVMAP_MODE_REFLECTION";
        if (e.envMap)
            switch (e.envMapMode) {
            case 302:
            case 307:
                t = "ENVMAP_MODE_REFRACTION"
            }
        return t
    }(n)
      , u = function(e) {
        let t = "ENVMAP_BLENDING_NONE";
        if (e.envMap)
            switch (e.combine) {
            case 0:
                t = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                t = "ENVMAP_BLENDING_MIX";
                break;
            case 2:
                t = "ENVMAP_BLENDING_ADD"
            }
        return t
    }(n)
      , d = e.gammaFactor > 0 ? e.gammaFactor : 1
      , p = n.isWebGL2 ? "" : function(e) {
        return [e.extensionDerivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" === e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(bi).join("\n")
    }(n)
      , m = function(e) {
        const t = [];
        for (const n in e) {
            const i = e[n];
            !1 !== i && t.push("#define " + n + " " + i)
        }
        return t.join("\n")
    }(a)
      , f = r.createProgram();
    let g, v, x = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (g = [m].filter(bi).join("\n"),
    g.length > 0 && (g += "\n"),
    v = [p, m].filter(bi).join("\n"),
    v.length > 0 && (v += "\n")) : (g = [Ii(n), "#define SHADER_NAME " + n.shaderName, m, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + d, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(bi).join("\n"),
    v = [p, Ii(n), "#define SHADER_NAME " + n.shaderName, m, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + d, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? Yt.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? wi("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", Yt.encodings_pars_fragment, n.map ? yi("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? yi("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? yi("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? yi("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? yi("lightMapTexelToLinear", n.lightMapEncoding) : "", Mi("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(bi).join("\n")),
    s = Li(s),
    s = Si(s, n),
    s = Ei(s, n),
    o = Li(o),
    o = Si(o, n),
    o = Ei(o, n),
    s = Pi(s),
    o = Pi(o),
    n.isWebGL2 && !0 !== n.isRawShaderMaterial && (x = "#version 300 es\n",
    g = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g,
    v = ["#define varying in", "300 es" === n.glslVersion ? "" : "out highp vec4 pc_fragColor;", "300 es" === n.glslVersion ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v);
    const _ = x + v + o
      , y = gi(r, 35633, x + g + s)
      , M = gi(r, 35632, _);
    if (r.attachShader(f, y),
    r.attachShader(f, M),
    void 0 !== n.index0AttributeName ? r.bindAttribLocation(f, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(f, 0, "position"),
    r.linkProgram(f),
    e.debug.checkShaderErrors) {
        const e = r.getProgramInfoLog(f).trim()
          , t = r.getShaderInfoLog(y).trim()
          , n = r.getShaderInfoLog(M).trim();
        let i = !0
          , a = !0;
        if (!1 === r.getProgramParameter(f, 35714)) {
            i = !1;
            const t = _i(r, y, "vertex")
              , n = _i(r, M, "fragment");
            console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(f, 35715), "gl.getProgramInfoLog", e, t, n)
        } else
            "" !== e ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", e) : "" !== t && "" !== n || (a = !1);
        a && (this.diagnostics = {
            runnable: i,
            programLog: e,
            vertexShader: {
                log: t,
                prefix: g
            },
            fragmentShader: {
                log: n,
                prefix: v
            }
        })
    }
    let w, b;
    return r.deleteShader(y),
    r.deleteShader(M),
    this.getUniforms = function() {
        return void 0 === w && (w = new fi(r,f)),
        w
    }
    ,
    this.getAttributes = function() {
        return void 0 === b && (b = function(e, t) {
            const n = {}
              , i = e.getProgramParameter(t, 35721);
            for (let r = 0; r < i; r++) {
                const i = e.getActiveAttrib(t, r).name;
                n[i] = e.getAttribLocation(t, i)
            }
            return n
        }(r, f)),
        b
    }
    ,
    this.destroy = function() {
        i.releaseStatesOfProgram(this),
        r.deleteProgram(f),
        this.program = void 0
    }
    ,
    this.name = n.shaderName,
    this.id = vi++,
    this.cacheKey = t,
    this.usedTimes = 1,
    this.program = f,
    this.vertexShader = y,
    this.fragmentShader = M,
    this
}
function Fi(e, t, n, i, r, a) {
    const s = []
      , o = i.isWebGL2
      , l = i.logarithmicDepthBuffer
      , c = i.floatVertexTextures
      , h = i.maxVertexUniforms
      , u = i.vertexTextures;
    let d = i.precision;
    const p = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    }
      , m = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];
    function f(e) {
        let t;
        return e && e.isTexture ? t = e.encoding : e && e.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
        t = e.texture.encoding) : t = 3e3,
        t
    }
    return {
        getParameters: function(r, s, m, g, v) {
            const x = g.fog
              , _ = r.isMeshStandardMaterial ? g.environment : null
              , y = t.get(r.envMap || _)
              , M = p[r.type]
              , w = v.isSkinnedMesh ? function(e) {
                const t = e.skeleton.bones;
                if (c)
                    return 1024;
                {
                    const e = h
                      , n = Math.floor((e - 20) / 4)
                      , i = Math.min(n, t.length);
                    return i < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + i + "."),
                    0) : i
                }
            }(v) : 0;
            let b, S;
            if (null !== r.precision && (d = i.getMaxPrecision(r.precision),
            d !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", d, "instead.")),
            M) {
                const e = Jt[M];
                b = e.vertexShader,
                S = e.fragmentShader
            } else
                b = r.vertexShader,
                S = r.fragmentShader;
            const E = e.getRenderTarget();
            return {
                isWebGL2: o,
                shaderID: M,
                shaderName: r.type,
                vertexShader: b,
                fragmentShader: S,
                defines: r.defines,
                isRawShaderMaterial: !0 === r.isRawShaderMaterial,
                glslVersion: r.glslVersion,
                precision: d,
                instancing: !0 === v.isInstancedMesh,
                instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
                supportsVertexTextures: u,
                outputEncoding: null !== E ? f(E.texture) : e.outputEncoding,
                map: !!r.map,
                mapEncoding: f(r.map),
                matcap: !!r.matcap,
                matcapEncoding: f(r.matcap),
                envMap: !!y,
                envMapMode: y && y.mapping,
                envMapEncoding: f(y),
                envMapCubeUV: !!y && (306 === y.mapping || 307 === y.mapping),
                lightMap: !!r.lightMap,
                lightMapEncoding: f(r.lightMap),
                aoMap: !!r.aoMap,
                emissiveMap: !!r.emissiveMap,
                emissiveMapEncoding: f(r.emissiveMap),
                bumpMap: !!r.bumpMap,
                normalMap: !!r.normalMap,
                objectSpaceNormalMap: 1 === r.normalMapType,
                tangentSpaceNormalMap: 0 === r.normalMapType,
                clearcoatMap: !!r.clearcoatMap,
                clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
                clearcoatNormalMap: !!r.clearcoatNormalMap,
                displacementMap: !!r.displacementMap,
                roughnessMap: !!r.roughnessMap,
                metalnessMap: !!r.metalnessMap,
                specularMap: !!r.specularMap,
                alphaMap: !!r.alphaMap,
                gradientMap: !!r.gradientMap,
                sheen: !!r.sheen,
                transmissionMap: !!r.transmissionMap,
                combine: r.combine,
                vertexTangents: r.normalMap && r.vertexTangents,
                vertexColors: r.vertexColors,
                vertexAlphas: !0 === r.vertexColors && v.geometry && v.geometry.attributes.color && 4 === v.geometry.attributes.color.itemSize,
                vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap),
                uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap),
                fog: !!x,
                useFog: r.fog,
                fogExp2: x && x.isFogExp2,
                flatShading: !!r.flatShading,
                sizeAttenuation: r.sizeAttenuation,
                logarithmicDepthBuffer: l,
                skinning: r.skinning && w > 0,
                maxBones: w,
                useVertexTexture: c,
                morphTargets: r.morphTargets,
                morphNormals: r.morphNormals,
                numDirLights: s.directional.length,
                numPointLights: s.point.length,
                numSpotLights: s.spot.length,
                numRectAreaLights: s.rectArea.length,
                numHemiLights: s.hemi.length,
                numDirLightShadows: s.directionalShadowMap.length,
                numPointLightShadows: s.pointShadowMap.length,
                numSpotLightShadows: s.spotShadowMap.length,
                numClippingPlanes: a.numPlanes,
                numClipIntersection: a.numIntersection,
                dithering: r.dithering,
                shadowMapEnabled: e.shadowMap.enabled && m.length > 0,
                shadowMapType: e.shadowMap.type,
                toneMapping: r.toneMapped ? e.toneMapping : 0,
                physicallyCorrectLights: e.physicallyCorrectLights,
                premultipliedAlpha: r.premultipliedAlpha,
                alphaTest: r.alphaTest,
                doubleSided: 2 === r.side,
                flipSided: 1 === r.side,
                depthPacking: void 0 !== r.depthPacking && r.depthPacking,
                index0AttributeName: r.index0AttributeName,
                extensionDerivatives: r.extensions && r.extensions.derivatives,
                extensionFragDepth: r.extensions && r.extensions.fragDepth,
                extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
                extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
                rendererExtensionFragDepth: o || n.has("EXT_frag_depth"),
                rendererExtensionDrawBuffers: o || n.has("WEBGL_draw_buffers"),
                rendererExtensionShaderTextureLod: o || n.has("EXT_shader_texture_lod"),
                customProgramCacheKey: r.customProgramCacheKey()
            }
        },
        getProgramCacheKey: function(t) {
            const n = [];
            if (t.shaderID ? n.push(t.shaderID) : (n.push(t.fragmentShader),
            n.push(t.vertexShader)),
            void 0 !== t.defines)
                for (const e in t.defines)
                    n.push(e),
                    n.push(t.defines[e]);
            if (!1 === t.isRawShaderMaterial) {
                for (let e = 0; e < m.length; e++)
                    n.push(t[m[e]]);
                n.push(e.outputEncoding),
                n.push(e.gammaFactor)
            }
            return n.push(t.customProgramCacheKey),
            n.join()
        },
        getUniforms: function(e) {
            const t = p[e.type];
            let n;
            if (t) {
                const e = Jt[t];
                n = It.clone(e.uniforms)
            } else
                n = e.uniforms;
            return n
        },
        acquireProgram: function(t, n) {
            let i;
            for (let e = 0, r = s.length; e < r; e++) {
                const t = s[e];
                if (t.cacheKey === n) {
                    i = t,
                    ++i.usedTimes;
                    break
                }
            }
            return void 0 === i && (i = new zi(e,n,t,r),
            s.push(i)),
            i
        },
        releaseProgram: function(e) {
            if (0 == --e.usedTimes) {
                const t = s.indexOf(e);
                s[t] = s[s.length - 1],
                s.pop(),
                e.destroy()
            }
        },
        programs: s
    }
}
function Hi() {
    let e = new WeakMap;
    return {
        get: function(t) {
            let n = e.get(t);
            return void 0 === n && (n = {},
            e.set(t, n)),
            n
        },
        remove: function(t) {
            e.delete(t)
        },
        update: function(t, n, i) {
            e.get(t)[n] = i
        },
        dispose: function() {
            e = new WeakMap
        }
    }
}
function Oi(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
}
function Ui(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
}
function Gi(e) {
    const t = [];
    let n = 0;
    const i = []
      , r = []
      , a = {
        id: -1
    };
    function s(i, r, s, o, l, c) {
        let h = t[n];
        const u = e.get(s);
        return void 0 === h ? (h = {
            id: i.id,
            object: i,
            geometry: r,
            material: s,
            program: u.program || a,
            groupOrder: o,
            renderOrder: i.renderOrder,
            z: l,
            group: c
        },
        t[n] = h) : (h.id = i.id,
        h.object = i,
        h.geometry = r,
        h.material = s,
        h.program = u.program || a,
        h.groupOrder = o,
        h.renderOrder = i.renderOrder,
        h.z = l,
        h.group = c),
        n++,
        h
    }
    return {
        opaque: i,
        transparent: r,
        init: function() {
            n = 0,
            i.length = 0,
            r.length = 0
        },
        push: function(e, t, n, a, o, l) {
            const c = s(e, t, n, a, o, l);
            (!0 === n.transparent ? r : i).push(c)
        },
        unshift: function(e, t, n, a, o, l) {
            const c = s(e, t, n, a, o, l);
            (!0 === n.transparent ? r : i).unshift(c)
        },
        finish: function() {
            for (let e = n, i = t.length; e < i; e++) {
                const n = t[e];
                if (null === n.id)
                    break;
                n.id = null,
                n.object = null,
                n.geometry = null,
                n.material = null,
                n.program = null,
                n.group = null
            }
        },
        sort: function(e, t) {
            i.length > 1 && i.sort(e || Oi),
            r.length > 1 && r.sort(t || Ui)
        }
    }
}
function Bi(e) {
    let t = new WeakMap;
    return {
        get: function(n, i) {
            let r;
            return !1 === t.has(n) ? (r = new Gi(e),
            t.set(n, [r])) : i >= t.get(n).length ? (r = new Gi(e),
            t.get(n).push(r)) : r = t.get(n)[i],
            r
        },
        dispose: function() {
            t = new WeakMap
        }
    }
}
function Vi() {
    const e = {};
    return {
        get: function(t) {
            if (void 0 !== e[t.id])
                return e[t.id];
            let n;
            switch (t.type) {
            case "DirectionalLight":
                n = {
                    direction: new b,
                    color: new Ze
                };
                break;
            case "SpotLight":
                n = {
                    position: new b,
                    direction: new b,
                    color: new Ze,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                n = {
                    position: new b,
                    color: new Ze,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                n = {
                    direction: new b,
                    skyColor: new Ze,
                    groundColor: new Ze
                };
                break;
            case "RectAreaLight":
                n = {
                    color: new Ze,
                    position: new b,
                    halfWidth: new b,
                    halfHeight: new b
                }
            }
            return e[t.id] = n,
            n
        }
    }
}
let Wi = 0;
function ki(e, t) {
    return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0)
}
function ji(e, t) {
    const n = new Vi
      , i = function() {
        const e = {};
        return {
            get: function(t) {
                if (void 0 !== e[t.id])
                    return e[t.id];
                let n;
                switch (t.type) {
                case "DirectionalLight":
                case "SpotLight":
                    n = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new p
                    };
                    break;
                case "PointLight":
                    n = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new p,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    }
                }
                return e[t.id] = n,
                n
            }
        }
    }()
      , r = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadow: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: []
    };
    for (let l = 0; l < 9; l++)
        r.probe.push(new b);
    const a = new b
      , s = new ee
      , o = new ee;
    return {
        setup: function(a) {
            let s = 0
              , o = 0
              , l = 0;
            for (let e = 0; e < 9; e++)
                r.probe[e].set(0, 0, 0);
            let c = 0
              , h = 0
              , u = 0
              , d = 0
              , p = 0
              , m = 0
              , f = 0
              , g = 0;
            a.sort(ki);
            for (let e = 0, t = a.length; e < t; e++) {
                const t = a[e]
                  , v = t.color
                  , x = t.intensity
                  , _ = t.distance
                  , y = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
                if (t.isAmbientLight)
                    s += v.r * x,
                    o += v.g * x,
                    l += v.b * x;
                else if (t.isLightProbe)
                    for (let e = 0; e < 9; e++)
                        r.probe[e].addScaledVector(t.sh.coefficients[e], x);
                else if (t.isDirectionalLight) {
                    const e = n.get(t);
                    if (e.color.copy(t.color).multiplyScalar(t.intensity),
                    t.castShadow) {
                        const e = t.shadow
                          , n = i.get(t);
                        n.shadowBias = e.bias,
                        n.shadowNormalBias = e.normalBias,
                        n.shadowRadius = e.radius,
                        n.shadowMapSize = e.mapSize,
                        r.directionalShadow[c] = n,
                        r.directionalShadowMap[c] = y,
                        r.directionalShadowMatrix[c] = t.shadow.matrix,
                        m++
                    }
                    r.directional[c] = e,
                    c++
                } else if (t.isSpotLight) {
                    const e = n.get(t);
                    if (e.position.setFromMatrixPosition(t.matrixWorld),
                    e.color.copy(v).multiplyScalar(x),
                    e.distance = _,
                    e.coneCos = Math.cos(t.angle),
                    e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)),
                    e.decay = t.decay,
                    t.castShadow) {
                        const e = t.shadow
                          , n = i.get(t);
                        n.shadowBias = e.bias,
                        n.shadowNormalBias = e.normalBias,
                        n.shadowRadius = e.radius,
                        n.shadowMapSize = e.mapSize,
                        r.spotShadow[u] = n,
                        r.spotShadowMap[u] = y,
                        r.spotShadowMatrix[u] = t.shadow.matrix,
                        g++
                    }
                    r.spot[u] = e,
                    u++
                } else if (t.isRectAreaLight) {
                    const e = n.get(t);
                    e.color.copy(v).multiplyScalar(x),
                    e.halfWidth.set(.5 * t.width, 0, 0),
                    e.halfHeight.set(0, .5 * t.height, 0),
                    r.rectArea[d] = e,
                    d++
                } else if (t.isPointLight) {
                    const e = n.get(t);
                    if (e.color.copy(t.color).multiplyScalar(t.intensity),
                    e.distance = t.distance,
                    e.decay = t.decay,
                    t.castShadow) {
                        const e = t.shadow
                          , n = i.get(t);
                        n.shadowBias = e.bias,
                        n.shadowNormalBias = e.normalBias,
                        n.shadowRadius = e.radius,
                        n.shadowMapSize = e.mapSize,
                        n.shadowCameraNear = e.camera.near,
                        n.shadowCameraFar = e.camera.far,
                        r.pointShadow[h] = n,
                        r.pointShadowMap[h] = y,
                        r.pointShadowMatrix[h] = t.shadow.matrix,
                        f++
                    }
                    r.point[h] = e,
                    h++
                } else if (t.isHemisphereLight) {
                    const e = n.get(t);
                    e.skyColor.copy(t.color).multiplyScalar(x),
                    e.groundColor.copy(t.groundColor).multiplyScalar(x),
                    r.hemi[p] = e,
                    p++
                }
            }
            d > 0 && (t.isWebGL2 || !0 === e.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Zt.LTC_FLOAT_1,
            r.rectAreaLTC2 = Zt.LTC_FLOAT_2) : !0 === e.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Zt.LTC_HALF_1,
            r.rectAreaLTC2 = Zt.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
            r.ambient[0] = s,
            r.ambient[1] = o,
            r.ambient[2] = l;
            const v = r.hash;
            v.directionalLength === c && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === m && v.numPointShadows === f && v.numSpotShadows === g || (r.directional.length = c,
            r.spot.length = u,
            r.rectArea.length = d,
            r.point.length = h,
            r.hemi.length = p,
            r.directionalShadow.length = m,
            r.directionalShadowMap.length = m,
            r.pointShadow.length = f,
            r.pointShadowMap.length = f,
            r.spotShadow.length = g,
            r.spotShadowMap.length = g,
            r.directionalShadowMatrix.length = m,
            r.pointShadowMatrix.length = f,
            r.spotShadowMatrix.length = g,
            v.directionalLength = c,
            v.pointLength = h,
            v.spotLength = u,
            v.rectAreaLength = d,
            v.hemiLength = p,
            v.numDirectionalShadows = m,
            v.numPointShadows = f,
            v.numSpotShadows = g,
            r.version = Wi++)
        },
        setupView: function(e, t) {
            let n = 0
              , i = 0
              , l = 0
              , c = 0
              , h = 0;
            const u = t.matrixWorldInverse;
            for (let d = 0, p = e.length; d < p; d++) {
                const t = e[d];
                if (t.isDirectionalLight) {
                    const e = r.directional[n];
                    e.direction.setFromMatrixPosition(t.matrixWorld),
                    a.setFromMatrixPosition(t.target.matrixWorld),
                    e.direction.sub(a),
                    e.direction.transformDirection(u),
                    n++
                } else if (t.isSpotLight) {
                    const e = r.spot[l];
                    e.position.setFromMatrixPosition(t.matrixWorld),
                    e.position.applyMatrix4(u),
                    e.direction.setFromMatrixPosition(t.matrixWorld),
                    a.setFromMatrixPosition(t.target.matrixWorld),
                    e.direction.sub(a),
                    e.direction.transformDirection(u),
                    l++
                } else if (t.isRectAreaLight) {
                    const e = r.rectArea[c];
                    e.position.setFromMatrixPosition(t.matrixWorld),
                    e.position.applyMatrix4(u),
                    o.identity(),
                    s.copy(t.matrixWorld),
                    s.premultiply(u),
                    o.extractRotation(s),
                    e.halfWidth.set(.5 * t.width, 0, 0),
                    e.halfHeight.set(0, .5 * t.height, 0),
                    e.halfWidth.applyMatrix4(o),
                    e.halfHeight.applyMatrix4(o),
                    c++
                } else if (t.isPointLight) {
                    const e = r.point[i];
                    e.position.setFromMatrixPosition(t.matrixWorld),
                    e.position.applyMatrix4(u),
                    i++
                } else if (t.isHemisphereLight) {
                    const e = r.hemi[h];
                    e.direction.setFromMatrixPosition(t.matrixWorld),
                    e.direction.transformDirection(u),
                    e.direction.normalize(),
                    h++
                }
            }
        },
        state: r
    }
}
function qi(e, t) {
    const n = new ji(e,t)
      , i = []
      , r = [];
    return {
        init: function() {
            i.length = 0,
            r.length = 0
        },
        state: {
            lightsArray: i,
            shadowsArray: r,
            lights: n
        },
        setupLights: function() {
            n.setup(i)
        },
        setupLightsView: function(e) {
            n.setupView(i, e)
        },
        pushLight: function(e) {
            i.push(e)
        },
        pushShadow: function(e) {
            r.push(e)
        }
    }
}
function Xi(e, t) {
    let n = new WeakMap;
    return {
        get: function(i, r=0) {
            let a;
            return !1 === n.has(i) ? (a = new qi(e,t),
            n.set(i, [a])) : r >= n.get(i).length ? (a = new qi(e,t),
            n.get(i).push(a)) : a = n.get(i)[r],
            a
        },
        dispose: function() {
            n = new WeakMap
        }
    }
}
class Yi extends Ve {
    constructor(e) {
        super(),
        this.type = "MeshDepthMaterial",
        this.depthPacking = 3200,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.depthPacking = e.depthPacking,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
}
Yi.prototype.isMeshDepthMaterial = !0;
class Zi extends Ve {
    constructor(e) {
        super(),
        this.type = "MeshDistanceMaterial",
        this.referencePosition = new b,
        this.nearDistance = 1,
        this.farDistance = 1e3,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.fog = !1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.referencePosition.copy(e.referencePosition),
        this.nearDistance = e.nearDistance,
        this.farDistance = e.farDistance,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this
    }
}
Zi.prototype.isMeshDistanceMaterial = !0;
function Ji(e, t, n) {
    let i = new kt;
    const r = new p
      , a = new p
      , s = new y
      , o = []
      , l = []
      , c = {}
      , h = n.maxTextureSize
      , u = {
        0: 1,
        1: 0,
        2: 2
    }
      , d = new zt({
        defines: {
            SAMPLE_RATE: 2 / 8,
            HALF_SAMPLE_RATE: 1 / 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new p
            },
            radius: {
                value: 4
            }
        },
        vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
    })
      , m = d.clone();
    m.defines.HORIZONTAL_PASS = 1;
    const f = new ut;
    f.setAttribute("position", new $e(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    const g = new Rt(f,d)
      , v = this;
    function x(n, i) {
        const r = t.update(g);
        d.uniforms.shadow_pass.value = n.map.texture,
        d.uniforms.resolution.value = n.mapSize,
        d.uniforms.radius.value = n.radius,
        e.setRenderTarget(n.mapPass),
        e.clear(),
        e.renderBufferDirect(i, null, r, d, g, null),
        m.uniforms.shadow_pass.value = n.mapPass.texture,
        m.uniforms.resolution.value = n.mapSize,
        m.uniforms.radius.value = n.radius,
        e.setRenderTarget(n.map),
        e.clear(),
        e.renderBufferDirect(i, null, r, m, g, null)
    }
    function _(e, t, n) {
        const i = e << 0 | t << 1 | n << 2;
        let r = o[i];
        return void 0 === r && (r = new Yi({
            depthPacking: 3201,
            morphTargets: e,
            skinning: t
        }),
        o[i] = r),
        r
    }
    function w(e, t, n) {
        const i = e << 0 | t << 1 | n << 2;
        let r = l[i];
        return void 0 === r && (r = new Zi({
            morphTargets: e,
            skinning: t
        }),
        l[i] = r),
        r
    }
    function b(t, n, i, r, a, s, o) {
        let l = null
          , h = _
          , d = t.customDepthMaterial;
        if (!0 === r.isPointLight && (h = w,
        d = t.customDistanceMaterial),
        void 0 === d) {
            let e = !1;
            !0 === i.morphTargets && (e = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);
            let r = !1;
            !0 === t.isSkinnedMesh && (!0 === i.skinning ? r = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t));
            l = h(e, r, !0 === t.isInstancedMesh)
        } else
            l = d;
        if (e.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
            const e = l.uuid
              , t = i.uuid;
            let n = c[e];
            void 0 === n && (n = {},
            c[e] = n);
            let r = n[t];
            void 0 === r && (r = l.clone(),
            n[t] = r),
            l = r
        }
        return l.visible = i.visible,
        l.wireframe = i.wireframe,
        l.side = 3 === o ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : u[i.side],
        l.clipShadows = i.clipShadows,
        l.clippingPlanes = i.clippingPlanes,
        l.clipIntersection = i.clipIntersection,
        l.wireframeLinewidth = i.wireframeLinewidth,
        l.linewidth = i.linewidth,
        !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld),
        l.nearDistance = a,
        l.farDistance = s),
        l
    }
    function S(n, r, a, s, o) {
        if (!1 === n.visible)
            return;
        if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
            n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
            const i = t.update(n)
              , r = n.material;
            if (Array.isArray(r)) {
                const t = i.groups;
                for (let l = 0, c = t.length; l < c; l++) {
                    const c = t[l]
                      , h = r[c.materialIndex];
                    if (h && h.visible) {
                        const t = b(n, i, h, s, a.near, a.far, o);
                        e.renderBufferDirect(a, null, i, t, n, c)
                    }
                }
            } else if (r.visible) {
                const t = b(n, i, r, s, a.near, a.far, o);
                e.renderBufferDirect(a, null, i, t, n, null)
            }
        }
        const l = n.children;
        for (let e = 0, t = l.length; e < t; e++)
            S(l[e], r, a, s, o)
    }
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = 1,
    this.render = function(t, n, o) {
        if (!1 === v.enabled)
            return;
        if (!1 === v.autoUpdate && !1 === v.needsUpdate)
            return;
        if (0 === t.length)
            return;
        const l = e.getRenderTarget()
          , c = e.getActiveCubeFace()
          , u = e.getActiveMipmapLevel()
          , d = e.state;
        d.setBlending(0),
        d.buffers.color.setClear(1, 1, 1, 1),
        d.buffers.depth.setTest(!0),
        d.setScissorTest(!1);
        for (let p = 0, m = t.length; p < m; p++) {
            const l = t[p]
              , c = l.shadow;
            if (void 0 === c) {
                console.warn("THREE.WebGLShadowMap:", l, "has no shadow.");
                continue
            }
            if (!1 === c.autoUpdate && !1 === c.needsUpdate)
                continue;
            r.copy(c.mapSize);
            const u = c.getFrameExtents();
            if (r.multiply(u),
            a.copy(c.mapSize),
            (r.x > h || r.y > h) && (r.x > h && (a.x = Math.floor(h / u.x),
            r.x = a.x * u.x,
            c.mapSize.x = a.x),
            r.y > h && (a.y = Math.floor(h / u.y),
            r.y = a.y * u.y,
            c.mapSize.y = a.y)),
            null === c.map && !c.isPointLightShadow && 3 === this.type) {
                const e = {
                    minFilter: 1006,
                    magFilter: 1006,
                    format: 1023
                };
                c.map = new M(r.x,r.y,e),
                c.map.texture.name = l.name + ".shadowMap",
                c.mapPass = new M(r.x,r.y,e),
                c.camera.updateProjectionMatrix()
            }
            if (null === c.map) {
                const e = {
                    minFilter: 1003,
                    magFilter: 1003,
                    format: 1023
                };
                c.map = new M(r.x,r.y,e),
                c.map.texture.name = l.name + ".shadowMap",
                c.camera.updateProjectionMatrix()
            }
            e.setRenderTarget(c.map),
            e.clear();
            const m = c.getViewportCount();
            for (let e = 0; e < m; e++) {
                const t = c.getViewport(e);
                s.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w),
                d.viewport(s),
                c.updateMatrices(l, e),
                i = c.getFrustum(),
                S(n, o, c.camera, l, this.type)
            }
            c.isPointLightShadow || 3 !== this.type || x(c, o),
            c.needsUpdate = !1
        }
        v.needsUpdate = !1,
        e.setRenderTarget(l, c, u)
    }
}
function Qi(e, t, n) {
    const i = n.isWebGL2;
    const r = new function() {
        let t = !1;
        const n = new y;
        let i = null;
        const r = new y(0,0,0,0);
        return {
            setMask: function(n) {
                i === n || t || (e.colorMask(n, n, n, n),
                i = n)
            },
            setLocked: function(e) {
                t = e
            },
            setClear: function(t, i, a, s, o) {
                !0 === o && (t *= s,
                i *= s,
                a *= s),
                n.set(t, i, a, s),
                !1 === r.equals(n) && (e.clearColor(t, i, a, s),
                r.copy(n))
            },
            reset: function() {
                t = !1,
                i = null,
                r.set(-1, 0, 0, 0)
            }
        }
    }
      , a = new function() {
        let t = !1
          , n = null
          , i = null
          , r = null;
        return {
            setTest: function(e) {
                e ? F(2929) : H(2929)
            },
            setMask: function(i) {
                n === i || t || (e.depthMask(i),
                n = i)
            },
            setFunc: function(t) {
                if (i !== t) {
                    if (t)
                        switch (t) {
                        case 0:
                            e.depthFunc(512);
                            break;
                        case 1:
                            e.depthFunc(519);
                            break;
                        case 2:
                            e.depthFunc(513);
                            break;
                        case 3:
                            e.depthFunc(515);
                            break;
                        case 4:
                            e.depthFunc(514);
                            break;
                        case 5:
                            e.depthFunc(518);
                            break;
                        case 6:
                            e.depthFunc(516);
                            break;
                        case 7:
                            e.depthFunc(517);
                            break;
                        default:
                            e.depthFunc(515)
                        }
                    else
                        e.depthFunc(515);
                    i = t
                }
            },
            setLocked: function(e) {
                t = e
            },
            setClear: function(t) {
                r !== t && (e.clearDepth(t),
                r = t)
            },
            reset: function() {
                t = !1,
                n = null,
                i = null,
                r = null
            }
        }
    }
      , s = new function() {
        let t = !1
          , n = null
          , i = null
          , r = null
          , a = null
          , s = null
          , o = null
          , l = null
          , c = null;
        return {
            setTest: function(e) {
                t || (e ? F(2960) : H(2960))
            },
            setMask: function(i) {
                n === i || t || (e.stencilMask(i),
                n = i)
            },
            setFunc: function(t, n, s) {
                i === t && r === n && a === s || (e.stencilFunc(t, n, s),
                i = t,
                r = n,
                a = s)
            },
            setOp: function(t, n, i) {
                s === t && o === n && l === i || (e.stencilOp(t, n, i),
                s = t,
                o = n,
                l = i)
            },
            setLocked: function(e) {
                t = e
            },
            setClear: function(t) {
                c !== t && (e.clearStencil(t),
                c = t)
            },
            reset: function() {
                t = !1,
                n = null,
                i = null,
                r = null,
                a = null,
                s = null,
                o = null,
                l = null,
                c = null
            }
        }
    }
    ;
    let o = {}
      , l = null
      , c = {}
      , h = null
      , u = !1
      , d = null
      , p = null
      , m = null
      , f = null
      , g = null
      , v = null
      , x = null
      , _ = !1
      , M = null
      , w = null
      , b = null
      , S = null
      , E = null;
    const T = e.getParameter(35661);
    let L = !1
      , A = 0;
    const R = e.getParameter(7938);
    -1 !== R.indexOf("WebGL") ? (A = parseFloat(/^WebGL (\d)/.exec(R)[1]),
    L = A >= 1) : -1 !== R.indexOf("OpenGL ES") && (A = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),
    L = A >= 2);
    let C = null
      , P = {};
    const D = new y(0,0,e.canvas.width,e.canvas.height)
      , N = new y(0,0,e.canvas.width,e.canvas.height);
    function I(t, n, i) {
        const r = new Uint8Array(4)
          , a = e.createTexture();
        e.bindTexture(t, a),
        e.texParameteri(t, 10241, 9728),
        e.texParameteri(t, 10240, 9728);
        for (let s = 0; s < i; s++)
            e.texImage2D(n + s, 0, 6408, 1, 1, 0, 6408, 5121, r);
        return a
    }
    const z = {};
    function F(t) {
        !0 !== o[t] && (e.enable(t),
        o[t] = !0)
    }
    function H(t) {
        !1 !== o[t] && (e.disable(t),
        o[t] = !1)
    }
    z[3553] = I(3553, 3553, 1),
    z[34067] = I(34067, 34069, 6),
    r.setClear(0, 0, 0, 1),
    a.setClear(1),
    s.setClear(0),
    F(2929),
    a.setFunc(3),
    B(!1),
    V(1),
    F(2884),
    G(0);
    const O = {
        100: 32774,
        101: 32778,
        102: 32779
    };
    if (i)
        O[103] = 32775,
        O[104] = 32776;
    else {
        const e = t.get("EXT_blend_minmax");
        null !== e && (O[103] = e.MIN_EXT,
        O[104] = e.MAX_EXT)
    }
    const U = {
        200: 0,
        201: 1,
        202: 768,
        204: 770,
        210: 776,
        208: 774,
        206: 772,
        203: 769,
        205: 771,
        209: 775,
        207: 773
    };
    function G(t, n, i, r, a, s, o, l) {
        if (0 !== t) {
            if (!1 === u && (F(3042),
            u = !0),
            5 === t)
                a = a || n,
                s = s || i,
                o = o || r,
                n === p && a === g || (e.blendEquationSeparate(O[n], O[a]),
                p = n,
                g = a),
                i === m && r === f && s === v && o === x || (e.blendFuncSeparate(U[i], U[r], U[s], U[o]),
                m = i,
                f = r,
                v = s,
                x = o),
                d = t,
                _ = null;
            else if (t !== d || l !== _) {
                if (100 === p && 100 === g || (e.blendEquation(32774),
                p = 100,
                g = 100),
                l)
                    switch (t) {
                    case 1:
                        e.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case 2:
                        e.blendFunc(1, 1);
                        break;
                    case 3:
                        e.blendFuncSeparate(0, 0, 769, 771);
                        break;
                    case 4:
                        e.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", t)
                    }
                else
                    switch (t) {
                    case 1:
                        e.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case 2:
                        e.blendFunc(770, 1);
                        break;
                    case 3:
                        e.blendFunc(0, 769);
                        break;
                    case 4:
                        e.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", t)
                    }
                m = null,
                f = null,
                v = null,
                x = null,
                d = t,
                _ = l
            }
        } else
            !0 === u && (H(3042),
            u = !1)
    }
    function B(t) {
        M !== t && (t ? e.frontFace(2304) : e.frontFace(2305),
        M = t)
    }
    function V(t) {
        0 !== t ? (F(2884),
        t !== w && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : H(2884),
        w = t
    }
    function W(t, n, i) {
        t ? (F(32823),
        S === n && E === i || (e.polygonOffset(n, i),
        S = n,
        E = i)) : H(32823)
    }
    function k(t) {
        void 0 === t && (t = 33984 + T - 1),
        C !== t && (e.activeTexture(t),
        C = t)
    }
    return {
        buffers: {
            color: r,
            depth: a,
            stencil: s
        },
        enable: F,
        disable: H,
        bindFramebuffer: function(t, n) {
            null === n && null !== l && (n = l),
            c[t] !== n && (e.bindFramebuffer(t, n),
            c[t] = n,
            i && (36009 === t && (c[36160] = n),
            36160 === t && (c[36009] = n)))
        },
        bindXRFramebuffer: function(t) {
            t !== l && (e.bindFramebuffer(36160, t),
            l = t)
        },
        useProgram: function(t) {
            return h !== t && (e.useProgram(t),
            h = t,
            !0)
        },
        setBlending: G,
        setMaterial: function(e, t) {
            2 === e.side ? H(2884) : F(2884);
            let n = 1 === e.side;
            t && (n = !n),
            B(n),
            1 === e.blending && !1 === e.transparent ? G(0) : G(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha),
            a.setFunc(e.depthFunc),
            a.setTest(e.depthTest),
            a.setMask(e.depthWrite),
            r.setMask(e.colorWrite);
            const i = e.stencilWrite;
            s.setTest(i),
            i && (s.setMask(e.stencilWriteMask),
            s.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
            s.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
            W(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
            !0 === e.alphaToCoverage ? F(32926) : H(32926)
        },
        setFlipSided: B,
        setCullFace: V,
        setLineWidth: function(t) {
            t !== b && (L && e.lineWidth(t),
            b = t)
        },
        setPolygonOffset: W,
        setScissorTest: function(e) {
            e ? F(3089) : H(3089)
        },
        activeTexture: k,
        bindTexture: function(t, n) {
            null === C && k();
            let i = P[C];
            void 0 === i && (i = {
                type: void 0,
                texture: void 0
            },
            P[C] = i),
            i.type === t && i.texture === n || (e.bindTexture(t, n || z[t]),
            i.type = t,
            i.texture = n)
        },
        unbindTexture: function() {
            const t = P[C];
            void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null),
            t.type = void 0,
            t.texture = void 0)
        },
        compressedTexImage2D: function() {
            try {
                e.compressedTexImage2D.apply(e, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        },
        texImage2D: function() {
            try {
                e.texImage2D.apply(e, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        },
        texImage3D: function() {
            try {
                e.texImage3D.apply(e, arguments)
            } catch (t) {
                console.error("THREE.WebGLState:", t)
            }
        },
        scissor: function(t) {
            !1 === D.equals(t) && (e.scissor(t.x, t.y, t.z, t.w),
            D.copy(t))
        },
        viewport: function(t) {
            !1 === N.equals(t) && (e.viewport(t.x, t.y, t.z, t.w),
            N.copy(t))
        },
        reset: function() {
            e.disable(3042),
            e.disable(2884),
            e.disable(2929),
            e.disable(32823),
            e.disable(3089),
            e.disable(2960),
            e.disable(32926),
            e.blendEquation(32774),
            e.blendFunc(1, 0),
            e.blendFuncSeparate(1, 0, 1, 0),
            e.colorMask(!0, !0, !0, !0),
            e.clearColor(0, 0, 0, 0),
            e.depthMask(!0),
            e.depthFunc(513),
            e.clearDepth(1),
            e.stencilMask(4294967295),
            e.stencilFunc(519, 0, 4294967295),
            e.stencilOp(7680, 7680, 7680),
            e.clearStencil(0),
            e.cullFace(1029),
            e.frontFace(2305),
            e.polygonOffset(0, 0),
            e.activeTexture(33984),
            e.bindFramebuffer(36160, null),
            !0 === i && (e.bindFramebuffer(36009, null),
            e.bindFramebuffer(36008, null)),
            e.useProgram(null),
            e.lineWidth(1),
            e.scissor(0, 0, e.canvas.width, e.canvas.height),
            e.viewport(0, 0, e.canvas.width, e.canvas.height),
            o = {},
            C = null,
            P = {},
            l = null,
            c = {},
            h = null,
            u = !1,
            d = null,
            p = null,
            m = null,
            f = null,
            g = null,
            v = null,
            x = null,
            _ = !1,
            M = null,
            w = null,
            b = null,
            S = null,
            E = null,
            D.set(0, 0, e.canvas.width, e.canvas.height),
            N.set(0, 0, e.canvas.width, e.canvas.height),
            r.reset(),
            a.reset(),
            s.reset()
        }
    }
}
function Ki(e, t, n, i, r, a, s) {
    const o = r.isWebGL2
      , l = r.maxTextures
      , h = r.maxCubemapSize
      , d = r.maxTextureSize
      , p = r.maxSamples
      , m = new WeakMap;
    let f, g = !1;
    try {
        g = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1,1).getContext("2d")
    } catch (G) {}
    function v(e, t) {
        return g ? new OffscreenCanvas(e,t) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
    }
    function x(e, t, n, i) {
        let r = 1;
        if ((e.width > i || e.height > i) && (r = i / Math.max(e.width, e.height)),
        r < 1 || !0 === t) {
            if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
                const i = t ? u : Math.floor
                  , a = i(r * e.width)
                  , s = i(r * e.height);
                void 0 === f && (f = v(a, s));
                const o = n ? v(a, s) : f;
                o.width = a,
                o.height = s;
                return o.getContext("2d").drawImage(e, 0, 0, a, s),
                console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + a + "x" + s + ")."),
                o
            }
            return "data"in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ")."),
            e
        }
        return e
    }
    function _(e) {
        return c(e.width) && c(e.height)
    }
    function y(e, t) {
        return e.generateMipmaps && t && 1003 !== e.minFilter && 1006 !== e.minFilter
    }
    function M(t, n, r, a) {
        e.generateMipmap(t);
        i.get(n).__maxMipLevel = Math.log2(Math.max(r, a))
    }
    function w(n, i, r) {
        if (!1 === o)
            return i;
        if (null !== n) {
            if (void 0 !== e[n])
                return e[n];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
        }
        let a = i;
        return 6403 === i && (5126 === r && (a = 33326),
        5131 === r && (a = 33325),
        5121 === r && (a = 33321)),
        6407 === i && (5126 === r && (a = 34837),
        5131 === r && (a = 34843),
        5121 === r && (a = 32849)),
        6408 === i && (5126 === r && (a = 34836),
        5131 === r && (a = 34842),
        5121 === r && (a = 32856)),
        33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a || t.get("EXT_color_buffer_float"),
        a
    }
    function b(e) {
        return 1003 === e || 1004 === e || 1005 === e ? 9728 : 9729
    }
    function S(t) {
        const n = t.target;
        n.removeEventListener("dispose", S),
        function(t) {
            const n = i.get(t);
            if (void 0 === n.__webglInit)
                return;
            e.deleteTexture(n.__webglTexture),
            i.remove(t)
        }(n),
        n.isVideoTexture && m.delete(n),
        s.memory.textures--
    }
    function E(t) {
        const n = t.target;
        n.removeEventListener("dispose", E),
        function(t) {
            const n = t.texture
              , r = i.get(t)
              , a = i.get(n);
            if (!t)
                return;
            void 0 !== a.__webglTexture && e.deleteTexture(a.__webglTexture);
            t.depthTexture && t.depthTexture.dispose();
            if (t.isWebGLCubeRenderTarget)
                for (let i = 0; i < 6; i++)
                    e.deleteFramebuffer(r.__webglFramebuffer[i]),
                    r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer[i]);
            else
                e.deleteFramebuffer(r.__webglFramebuffer),
                r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer),
                r.__webglMultisampledFramebuffer && e.deleteFramebuffer(r.__webglMultisampledFramebuffer),
                r.__webglColorRenderbuffer && e.deleteRenderbuffer(r.__webglColorRenderbuffer),
                r.__webglDepthRenderbuffer && e.deleteRenderbuffer(r.__webglDepthRenderbuffer);
            i.remove(n),
            i.remove(t)
        }(n),
        s.memory.textures--
    }
    let T = 0;
    function L(e, t) {
        const r = i.get(e);
        if (e.isVideoTexture && function(e) {
            const t = s.render.frame;
            m.get(e) !== t && (m.set(e, t),
            e.update())
        }(e),
        e.version > 0 && r.__version !== e.version) {
            const n = e.image;
            if (void 0 === n)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
            else {
                if (!1 !== n.complete)
                    return void N(r, e, t);
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
            }
        }
        n.activeTexture(33984 + t),
        n.bindTexture(3553, r.__webglTexture)
    }
    function A(t, r) {
        const s = i.get(t);
        t.version > 0 && s.__version !== t.version ? function(t, i, r) {
            if (6 !== i.image.length)
                return;
            D(t, i),
            n.activeTexture(33984 + r),
            n.bindTexture(34067, t.__webglTexture),
            e.pixelStorei(37440, i.flipY),
            e.pixelStorei(37441, i.premultiplyAlpha),
            e.pixelStorei(3317, i.unpackAlignment),
            e.pixelStorei(37443, 0);
            const s = i && (i.isCompressedTexture || i.image[0].isCompressedTexture)
              , l = i.image[0] && i.image[0].isDataTexture
              , c = [];
            for (let e = 0; e < 6; e++)
                c[e] = s || l ? l ? i.image[e].image : i.image[e] : x(i.image[e], !1, !0, h);
            const u = c[0]
              , d = _(u) || o
              , p = a.convert(i.format)
              , m = a.convert(i.type)
              , f = w(i.internalFormat, p, m);
            let g;
            if (P(34067, i, d),
            s) {
                for (let e = 0; e < 6; e++) {
                    g = c[e].mipmaps;
                    for (let t = 0; t < g.length; t++) {
                        const r = g[t];
                        1023 !== i.format && 1022 !== i.format ? null !== p ? n.compressedTexImage2D(34069 + e, t, f, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + e, t, f, r.width, r.height, 0, p, m, r.data)
                    }
                }
                t.__maxMipLevel = g.length - 1
            } else {
                g = i.mipmaps;
                for (let e = 0; e < 6; e++)
                    if (l) {
                        n.texImage2D(34069 + e, 0, f, c[e].width, c[e].height, 0, p, m, c[e].data);
                        for (let t = 0; t < g.length; t++) {
                            const i = g[t].image[e].image;
                            n.texImage2D(34069 + e, t + 1, f, i.width, i.height, 0, p, m, i.data)
                        }
                    } else {
                        n.texImage2D(34069 + e, 0, f, p, m, c[e]);
                        for (let t = 0; t < g.length; t++) {
                            const i = g[t];
                            n.texImage2D(34069 + e, t + 1, f, p, m, i.image[e])
                        }
                    }
                t.__maxMipLevel = g.length
            }
            y(i, d) && M(34067, i, u.width, u.height);
            t.__version = i.version,
            i.onUpdate && i.onUpdate(i)
        }(s, t, r) : (n.activeTexture(33984 + r),
        n.bindTexture(34067, s.__webglTexture))
    }
    const R = {
        1e3: 10497,
        1001: 33071,
        1002: 33648
    }
      , C = {
        1003: 9728,
        1004: 9984,
        1005: 9986,
        1006: 9729,
        1007: 9985,
        1008: 9987
    };
    function P(n, a, s) {
        if (s ? (e.texParameteri(n, 10242, R[a.wrapS]),
        e.texParameteri(n, 10243, R[a.wrapT]),
        32879 !== n && 35866 !== n || e.texParameteri(n, 32882, R[a.wrapR]),
        e.texParameteri(n, 10240, C[a.magFilter]),
        e.texParameteri(n, 10241, C[a.minFilter])) : (e.texParameteri(n, 10242, 33071),
        e.texParameteri(n, 10243, 33071),
        32879 !== n && 35866 !== n || e.texParameteri(n, 32882, 33071),
        1001 === a.wrapS && 1001 === a.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
        e.texParameteri(n, 10240, b(a.magFilter)),
        e.texParameteri(n, 10241, b(a.minFilter)),
        1003 !== a.minFilter && 1006 !== a.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
        !0 === t.has("EXT_texture_filter_anisotropic")) {
            const s = t.get("EXT_texture_filter_anisotropic");
            if (1015 === a.type && !1 === t.has("OES_texture_float_linear"))
                return;
            if (!1 === o && 1016 === a.type && !1 === t.has("OES_texture_half_float_linear"))
                return;
            (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (e.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())),
            i.get(a).__currentAnisotropy = a.anisotropy)
        }
    }
    function D(t, n) {
        void 0 === t.__webglInit && (t.__webglInit = !0,
        n.addEventListener("dispose", S),
        t.__webglTexture = e.createTexture(),
        s.memory.textures++)
    }
    function N(t, i, r) {
        let s = 3553;
        i.isDataTexture2DArray && (s = 35866),
        i.isDataTexture3D && (s = 32879),
        D(t, i),
        n.activeTexture(33984 + r),
        n.bindTexture(s, t.__webglTexture),
        e.pixelStorei(37440, i.flipY),
        e.pixelStorei(37441, i.premultiplyAlpha),
        e.pixelStorei(3317, i.unpackAlignment),
        e.pixelStorei(37443, 0);
        const l = function(e) {
            return !o && (1001 !== e.wrapS || 1001 !== e.wrapT || 1003 !== e.minFilter && 1006 !== e.minFilter)
        }(i) && !1 === _(i.image)
          , c = x(i.image, l, !1, d)
          , h = _(c) || o
          , u = a.convert(i.format);
        let p, m = a.convert(i.type), f = w(i.internalFormat, u, m);
        P(s, i, h);
        const g = i.mipmaps;
        if (i.isDepthTexture)
            f = 6402,
            o ? f = 1015 === i.type ? 36012 : 1014 === i.type ? 33190 : 1020 === i.type ? 35056 : 33189 : 1015 === i.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
            1026 === i.format && 6402 === f && 1012 !== i.type && 1014 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
            i.type = 1012,
            m = a.convert(i.type)),
            1027 === i.format && 6402 === f && (f = 34041,
            1020 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
            i.type = 1020,
            m = a.convert(i.type))),
            n.texImage2D(3553, 0, f, c.width, c.height, 0, u, m, null);
        else if (i.isDataTexture)
            if (g.length > 0 && h) {
                for (let e = 0, t = g.length; e < t; e++)
                    p = g[e],
                    n.texImage2D(3553, e, f, p.width, p.height, 0, u, m, p.data);
                i.generateMipmaps = !1,
                t.__maxMipLevel = g.length - 1
            } else
                n.texImage2D(3553, 0, f, c.width, c.height, 0, u, m, c.data),
                t.__maxMipLevel = 0;
        else if (i.isCompressedTexture) {
            for (let e = 0, t = g.length; e < t; e++)
                p = g[e],
                1023 !== i.format && 1022 !== i.format ? null !== u ? n.compressedTexImage2D(3553, e, f, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, e, f, p.width, p.height, 0, u, m, p.data);
            t.__maxMipLevel = g.length - 1
        } else if (i.isDataTexture2DArray)
            n.texImage3D(35866, 0, f, c.width, c.height, c.depth, 0, u, m, c.data),
            t.__maxMipLevel = 0;
        else if (i.isDataTexture3D)
            n.texImage3D(32879, 0, f, c.width, c.height, c.depth, 0, u, m, c.data),
            t.__maxMipLevel = 0;
        else if (g.length > 0 && h) {
            for (let e = 0, t = g.length; e < t; e++)
                p = g[e],
                n.texImage2D(3553, e, f, u, m, p);
            i.generateMipmaps = !1,
            t.__maxMipLevel = g.length - 1
        } else
            n.texImage2D(3553, 0, f, u, m, c),
            t.__maxMipLevel = 0;
        y(i, h) && M(s, i, c.width, c.height),
        t.__version = i.version,
        i.onUpdate && i.onUpdate(i)
    }
    function I(t, r, s, o) {
        const l = r.texture
          , c = a.convert(l.format)
          , h = a.convert(l.type)
          , u = w(l.internalFormat, c, h);
        32879 === o || 35866 === o ? n.texImage3D(o, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(o, 0, u, r.width, r.height, 0, c, h, null),
        n.bindFramebuffer(36160, t),
        e.framebufferTexture2D(36160, s, o, i.get(l).__webglTexture, 0),
        n.bindFramebuffer(36160, null)
    }
    function z(t, n, i) {
        if (e.bindRenderbuffer(36161, t),
        n.depthBuffer && !n.stencilBuffer) {
            let r = 33189;
            if (i) {
                const t = n.depthTexture;
                t && t.isDepthTexture && (1015 === t.type ? r = 36012 : 1014 === t.type && (r = 33190));
                const i = H(n);
                e.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
            } else
                e.renderbufferStorage(36161, r, n.width, n.height);
            e.framebufferRenderbuffer(36160, 36096, 36161, t)
        } else if (n.depthBuffer && n.stencilBuffer) {
            if (i) {
                const t = H(n);
                e.renderbufferStorageMultisample(36161, t, 35056, n.width, n.height)
            } else
                e.renderbufferStorage(36161, 34041, n.width, n.height);
            e.framebufferRenderbuffer(36160, 33306, 36161, t)
        } else {
            const t = n.texture
              , r = a.convert(t.format)
              , s = a.convert(t.type)
              , o = w(t.internalFormat, r, s);
            if (i) {
                const t = H(n);
                e.renderbufferStorageMultisample(36161, t, o, n.width, n.height)
            } else
                e.renderbufferStorage(36161, o, n.width, n.height)
        }
        e.bindRenderbuffer(36161, null)
    }
    function F(t) {
        const r = i.get(t)
          , a = !0 === t.isWebGLCubeRenderTarget;
        if (t.depthTexture) {
            if (a)
                throw new Error("target.depthTexture not supported in Cube render targets");
            !function(t, r) {
                if (r && r.isWebGLCubeRenderTarget)
                    throw new Error("Depth Texture with cube render targets is not supported");
                if (n.bindFramebuffer(36160, t),
                !r.depthTexture || !r.depthTexture.isDepthTexture)
                    throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width,
                r.depthTexture.image.height = r.height,
                r.depthTexture.needsUpdate = !0),
                L(r.depthTexture, 0);
                const a = i.get(r.depthTexture).__webglTexture;
                if (1026 === r.depthTexture.format)
                    e.framebufferTexture2D(36160, 36096, 3553, a, 0);
                else {
                    if (1027 !== r.depthTexture.format)
                        throw new Error("Unknown depthTexture format");
                    e.framebufferTexture2D(36160, 33306, 3553, a, 0)
                }
            }(r.__webglFramebuffer, t)
        } else if (a) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++)
                n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
                r.__webglDepthbuffer[i] = e.createRenderbuffer(),
                z(r.__webglDepthbuffer[i], t, !1)
        } else
            n.bindFramebuffer(36160, r.__webglFramebuffer),
            r.__webglDepthbuffer = e.createRenderbuffer(),
            z(r.__webglDepthbuffer, t, !1);
        n.bindFramebuffer(36160, null)
    }
    function H(e) {
        return o && e.isWebGLMultisampleRenderTarget ? Math.min(p, e.samples) : 0
    }
    let O = !1
      , U = !1;
    this.allocateTextureUnit = function() {
        const e = T;
        return e >= l && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + l),
        T += 1,
        e
    }
    ,
    this.resetTextureUnits = function() {
        T = 0
    }
    ,
    this.setTexture2D = L,
    this.setTexture2DArray = function(e, t) {
        const r = i.get(e);
        e.version > 0 && r.__version !== e.version ? N(r, e, t) : (n.activeTexture(33984 + t),
        n.bindTexture(35866, r.__webglTexture))
    }
    ,
    this.setTexture3D = function(e, t) {
        const r = i.get(e);
        e.version > 0 && r.__version !== e.version ? N(r, e, t) : (n.activeTexture(33984 + t),
        n.bindTexture(32879, r.__webglTexture))
    }
    ,
    this.setTextureCube = A,
    this.setupRenderTarget = function(t) {
        const r = t.texture
          , l = i.get(t)
          , c = i.get(r);
        t.addEventListener("dispose", E),
        c.__webglTexture = e.createTexture(),
        c.__version = r.version,
        s.memory.textures++;
        const h = !0 === t.isWebGLCubeRenderTarget
          , u = !0 === t.isWebGLMultisampleRenderTarget
          , d = r.isDataTexture3D || r.isDataTexture2DArray
          , p = _(t) || o;
        if (!o || 1022 !== r.format || 1015 !== r.type && 1016 !== r.type || (r.format = 1023,
        console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),
        h) {
            l.__webglFramebuffer = [];
            for (let t = 0; t < 6; t++)
                l.__webglFramebuffer[t] = e.createFramebuffer()
        } else if (l.__webglFramebuffer = e.createFramebuffer(),
        u)
            if (o) {
                l.__webglMultisampledFramebuffer = e.createFramebuffer(),
                l.__webglColorRenderbuffer = e.createRenderbuffer(),
                e.bindRenderbuffer(36161, l.__webglColorRenderbuffer);
                const i = a.convert(r.format)
                  , s = a.convert(r.type)
                  , o = w(r.internalFormat, i, s)
                  , c = H(t);
                e.renderbufferStorageMultisample(36161, c, o, t.width, t.height),
                n.bindFramebuffer(36160, l.__webglMultisampledFramebuffer),
                e.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer),
                e.bindRenderbuffer(36161, null),
                t.depthBuffer && (l.__webglDepthRenderbuffer = e.createRenderbuffer(),
                z(l.__webglDepthRenderbuffer, t, !0)),
                n.bindFramebuffer(36160, null)
            } else
                console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        if (h) {
            n.bindTexture(34067, c.__webglTexture),
            P(34067, r, p);
            for (let e = 0; e < 6; e++)
                I(l.__webglFramebuffer[e], t, 36064, 34069 + e);
            y(r, p) && M(34067, r, t.width, t.height),
            n.bindTexture(34067, null)
        } else {
            let e = 3553;
            if (d)
                if (o) {
                    e = r.isDataTexture3D ? 32879 : 35866
                } else
                    console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.");
            n.bindTexture(e, c.__webglTexture),
            P(e, r, p),
            I(l.__webglFramebuffer, t, 36064, e),
            y(r, p) && M(3553, r, t.width, t.height),
            n.bindTexture(3553, null)
        }
        t.depthBuffer && F(t)
    }
    ,
    this.updateRenderTargetMipmap = function(e) {
        const t = e.texture;
        if (y(t, _(e) || o)) {
            const r = e.isWebGLCubeRenderTarget ? 34067 : 3553
              , a = i.get(t).__webglTexture;
            n.bindTexture(r, a),
            M(r, t, e.width, e.height),
            n.bindTexture(r, null)
        }
    }
    ,
    this.updateMultisampleRenderTarget = function(t) {
        if (t.isWebGLMultisampleRenderTarget)
            if (o) {
                const r = t.width
                  , a = t.height;
                let s = 16384;
                t.depthBuffer && (s |= 256),
                t.stencilBuffer && (s |= 1024);
                const o = i.get(t);
                n.bindFramebuffer(36008, o.__webglMultisampledFramebuffer),
                n.bindFramebuffer(36009, o.__webglFramebuffer),
                e.blitFramebuffer(0, 0, r, a, 0, 0, r, a, s, 9728),
                n.bindFramebuffer(36008, null),
                n.bindFramebuffer(36009, o.__webglMultisampledFramebuffer)
            } else
                console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
    }
    ,
    this.safeSetTexture2D = function(e, t) {
        e && e.isWebGLRenderTarget && (!1 === O && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),
        O = !0),
        e = e.texture),
        L(e, t)
    }
    ,
    this.safeSetTextureCube = function(e, t) {
        e && e.isWebGLCubeRenderTarget && (!1 === U && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
        U = !0),
        e = e.texture),
        A(e, t)
    }
}
function $i(e, t, n) {
    const i = n.isWebGL2;
    return {
        convert: function(e) {
            let n;
            if (1009 === e)
                return 5121;
            if (1017 === e)
                return 32819;
            if (1018 === e)
                return 32820;
            if (1019 === e)
                return 33635;
            if (1010 === e)
                return 5120;
            if (1011 === e)
                return 5122;
            if (1012 === e)
                return 5123;
            if (1013 === e)
                return 5124;
            if (1014 === e)
                return 5125;
            if (1015 === e)
                return 5126;
            if (1016 === e)
                return i ? 5131 : (n = t.get("OES_texture_half_float"),
                null !== n ? n.HALF_FLOAT_OES : null);
            if (1021 === e)
                return 6406;
            if (1022 === e)
                return 6407;
            if (1023 === e)
                return 6408;
            if (1024 === e)
                return 6409;
            if (1025 === e)
                return 6410;
            if (1026 === e)
                return 6402;
            if (1027 === e)
                return 34041;
            if (1028 === e)
                return 6403;
            if (1029 === e)
                return 36244;
            if (1030 === e)
                return 33319;
            if (1031 === e)
                return 33320;
            if (1032 === e)
                return 36248;
            if (1033 === e)
                return 36249;
            if (33776 === e || 33777 === e || 33778 === e || 33779 === e) {
                if (n = t.get("WEBGL_compressed_texture_s3tc"),
                null === n)
                    return null;
                if (33776 === e)
                    return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (33777 === e)
                    return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (33778 === e)
                    return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (33779 === e)
                    return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (35840 === e || 35841 === e || 35842 === e || 35843 === e) {
                if (n = t.get("WEBGL_compressed_texture_pvrtc"),
                null === n)
                    return null;
                if (35840 === e)
                    return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (35841 === e)
                    return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (35842 === e)
                    return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (35843 === e)
                    return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (36196 === e)
                return n = t.get("WEBGL_compressed_texture_etc1"),
                null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
            if ((37492 === e || 37496 === e) && (n = t.get("WEBGL_compressed_texture_etc"),
            null !== n)) {
                if (37492 === e)
                    return n.COMPRESSED_RGB8_ETC2;
                if (37496 === e)
                    return n.COMPRESSED_RGBA8_ETC2_EAC
            }
            return 37808 === e || 37809 === e || 37810 === e || 37811 === e || 37812 === e || 37813 === e || 37814 === e || 37815 === e || 37816 === e || 37817 === e || 37818 === e || 37819 === e || 37820 === e || 37821 === e || 37840 === e || 37841 === e || 37842 === e || 37843 === e || 37844 === e || 37845 === e || 37846 === e || 37847 === e || 37848 === e || 37849 === e || 37850 === e || 37851 === e || 37852 === e || 37853 === e ? (n = t.get("WEBGL_compressed_texture_astc"),
            null !== n ? e : null) : 36492 === e ? (n = t.get("EXT_texture_compression_bptc"),
            null !== n ? e : null) : 1020 === e ? i ? 34042 : (n = t.get("WEBGL_depth_texture"),
            null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0
        }
    }
}
class er extends Ht {
    constructor(e=[]) {
        super(),
        this.cameras = e
    }
}
er.prototype.isArrayCamera = !0;
class tr extends Ee {
    constructor() {
        super(),
        this.type = "Group"
    }
}
tr.prototype.isGroup = !0;
const nr = {
    type: "move"
};
class ir {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return null === this._hand && (this._hand = new tr,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return null === this._targetRay && (this._targetRay = new tr,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new b,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new b),
        this._targetRay
    }
    getGripSpace() {
        return null === this._grip && (this._grip = new tr,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new b,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new b),
        this._grip
    }
    dispatchEvent(e) {
        return null !== this._targetRay && this._targetRay.dispatchEvent(e),
        null !== this._grip && this._grip.dispatchEvent(e),
        null !== this._hand && this._hand.dispatchEvent(e),
        this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e
        }),
        null !== this._targetRay && (this._targetRay.visible = !1),
        null !== this._grip && (this._grip.visible = !1),
        null !== this._hand && (this._hand.visible = !1),
        this
    }
    update(e, t, n) {
        let i = null
          , r = null
          , a = null;
        const s = this._targetRay
          , o = this._grip
          , l = this._hand;
        if (e && "visible-blurred" !== t.session.visibilityState)
            if (null !== s && (i = t.getPose(e.targetRaySpace, n),
            null !== i && (s.matrix.fromArray(i.transform.matrix),
            s.matrix.decompose(s.position, s.rotation, s.scale),
            i.linearVelocity ? (s.hasLinearVelocity = !0,
            s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1,
            i.angularVelocity ? (s.hasAngularVelocity = !0,
            s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1,
            this.dispatchEvent(nr))),
            l && e.hand) {
                a = !0;
                for (const a of e.hand.values()) {
                    const e = t.getJointPose(a, n);
                    if (void 0 === l.joints[a.jointName]) {
                        const e = new tr;
                        e.matrixAutoUpdate = !1,
                        e.visible = !1,
                        l.joints[a.jointName] = e,
                        l.add(e)
                    }
                    const i = l.joints[a.jointName];
                    null !== e && (i.matrix.fromArray(e.transform.matrix),
                    i.matrix.decompose(i.position, i.rotation, i.scale),
                    i.jointRadius = e.radius),
                    i.visible = null !== e
                }
                const i = l.joints["index-finger-tip"]
                  , r = l.joints["thumb-tip"]
                  , s = i.position.distanceTo(r.position)
                  , o = .02
                  , c = .005;
                l.inputState.pinching && s > o + c ? (l.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: e.handedness,
                    target: this
                })) : !l.inputState.pinching && s <= o - c && (l.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e.handedness,
                    target: this
                }))
            } else
                null !== o && e.gripSpace && (r = t.getPose(e.gripSpace, n),
                null !== r && (o.matrix.fromArray(r.transform.matrix),
                o.matrix.decompose(o.position, o.rotation, o.scale),
                r.linearVelocity ? (o.hasLinearVelocity = !0,
                o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1,
                r.angularVelocity ? (o.hasAngularVelocity = !0,
                o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
        return null !== s && (s.visible = null !== i),
        null !== o && (o.visible = null !== r),
        null !== l && (l.visible = null !== a),
        this
    }
}
class rr extends e {
    constructor(e, t) {
        super();
        const n = this
          , i = e.state;
        let r = null
          , a = 1
          , s = null
          , o = "local-floor"
          , l = null;
        const c = []
          , h = new Map
          , u = new Ht;
        u.layers.enable(1),
        u.viewport = new y;
        const d = new Ht;
        d.layers.enable(2),
        d.viewport = new y;
        const p = [u, d]
          , m = new er;
        m.layers.enable(1),
        m.layers.enable(2);
        let f = null
          , g = null;
        function v(e) {
            const t = h.get(e.inputSource);
            t && t.dispatchEvent({
                type: e.type,
                data: e.inputSource
            })
        }
        function x() {
            h.forEach((function(e, t) {
                e.disconnect(t)
            }
            )),
            h.clear(),
            f = null,
            g = null,
            i.bindXRFramebuffer(null),
            e.setRenderTarget(e.getRenderTarget()),
            T.stop(),
            n.isPresenting = !1,
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        function _(e) {
            const t = r.inputSources;
            for (let n = 0; n < c.length; n++)
                h.set(t[n], c[n]);
            for (let n = 0; n < e.removed.length; n++) {
                const t = e.removed[n]
                  , i = h.get(t);
                i && (i.dispatchEvent({
                    type: "disconnected",
                    data: t
                }),
                h.delete(t))
            }
            for (let n = 0; n < e.added.length; n++) {
                const t = e.added[n]
                  , i = h.get(t);
                i && i.dispatchEvent({
                    type: "connected",
                    data: t
                })
            }
        }
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(e) {
            let t = c[e];
            return void 0 === t && (t = new ir,
            c[e] = t),
            t.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(e) {
            let t = c[e];
            return void 0 === t && (t = new ir,
            c[e] = t),
            t.getGripSpace()
        }
        ,
        this.getHand = function(e) {
            let t = c[e];
            return void 0 === t && (t = new ir,
            c[e] = t),
            t.getHandSpace()
        }
        ,
        this.setFramebufferScaleFactor = function(e) {
            a = e,
            !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(e) {
            o = e,
            !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return s
        }
        ,
        this.getSession = function() {
            return r
        }
        ,
        this.setSession = async function(e) {
            if (r = e,
            null !== r) {
                r.addEventListener("select", v),
                r.addEventListener("selectstart", v),
                r.addEventListener("selectend", v),
                r.addEventListener("squeeze", v),
                r.addEventListener("squeezestart", v),
                r.addEventListener("squeezeend", v),
                r.addEventListener("end", x),
                r.addEventListener("inputsourceschange", _);
                const e = t.getContextAttributes();
                !0 !== e.xrCompatible && await t.makeXRCompatible();
                const i = {
                    antialias: e.antialias,
                    alpha: e.alpha,
                    depth: e.depth,
                    stencil: e.stencil,
                    framebufferScaleFactor: a
                }
                  , l = new XRWebGLLayer(r,t,i);
                r.updateRenderState({
                    baseLayer: l
                }),
                s = await r.requestReferenceSpace(o),
                T.setContext(r),
                T.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ;
        const M = new b
          , w = new b;
        function S(e, t) {
            null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
            e.matrixWorldInverse.copy(e.matrixWorld).invert()
        }
        this.getCamera = function(e) {
            m.near = d.near = u.near = e.near,
            m.far = d.far = u.far = e.far,
            f === m.near && g === m.far || (r.updateRenderState({
                depthNear: m.near,
                depthFar: m.far
            }),
            f = m.near,
            g = m.far);
            const t = e.parent
              , n = m.cameras;
            S(m, t);
            for (let r = 0; r < n.length; r++)
                S(n[r], t);
            e.matrixWorld.copy(m.matrixWorld),
            e.matrix.copy(m.matrix),
            e.matrix.decompose(e.position, e.quaternion, e.scale);
            const i = e.children;
            for (let r = 0, a = i.length; r < a; r++)
                i[r].updateMatrixWorld(!0);
            return 2 === n.length ? function(e, t, n) {
                M.setFromMatrixPosition(t.matrixWorld),
                w.setFromMatrixPosition(n.matrixWorld);
                const i = M.distanceTo(w)
                  , r = t.projectionMatrix.elements
                  , a = n.projectionMatrix.elements
                  , s = r[14] / (r[10] - 1)
                  , o = r[14] / (r[10] + 1)
                  , l = (r[9] + 1) / r[5]
                  , c = (r[9] - 1) / r[5]
                  , h = (r[8] - 1) / r[0]
                  , u = (a[8] + 1) / a[0]
                  , d = s * h
                  , p = s * u
                  , m = i / (-h + u)
                  , f = m * -h;
                t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
                e.translateX(f),
                e.translateZ(m),
                e.matrixWorld.compose(e.position, e.quaternion, e.scale),
                e.matrixWorldInverse.copy(e.matrixWorld).invert();
                const g = s + m
                  , v = o + m
                  , x = d - f
                  , _ = p + (i - f)
                  , y = l * o / v * g
                  , b = c * o / v * g;
                e.projectionMatrix.makePerspective(x, _, y, b, g, v)
            }(m, u, d) : m.projectionMatrix.copy(u.projectionMatrix),
            m
        }
        ;
        let E = null;
        const T = new jt;
        T.setAnimationLoop((function(e, t) {
            if (l = t.getViewerPose(s),
            null !== l) {
                const e = l.views
                  , t = r.renderState.baseLayer;
                i.bindXRFramebuffer(t.framebuffer);
                let n = !1;
                e.length !== m.cameras.length && (m.cameras.length = 0,
                n = !0);
                for (let i = 0; i < e.length; i++) {
                    const r = e[i]
                      , a = t.getViewport(r)
                      , s = p[i];
                    s.matrix.fromArray(r.transform.matrix),
                    s.projectionMatrix.fromArray(r.projectionMatrix),
                    s.viewport.set(a.x, a.y, a.width, a.height),
                    0 === i && m.matrix.copy(s.matrix),
                    !0 === n && m.cameras.push(s)
                }
            }
            const n = r.inputSources;
            for (let i = 0; i < c.length; i++) {
                const e = c[i]
                  , r = n[i];
                e.update(r, t, s)
            }
            E && E(e, t)
        }
        )),
        this.setAnimationLoop = function(e) {
            E = e
        }
        ,
        this.dispose = function() {}
    }
}
function ar(e) {
    function t(t, n) {
        t.opacity.value = n.opacity,
        n.color && t.diffuse.value.copy(n.color),
        n.emissive && t.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
        n.map && (t.map.value = n.map),
        n.alphaMap && (t.alphaMap.value = n.alphaMap),
        n.specularMap && (t.specularMap.value = n.specularMap);
        const i = e.get(n).envMap;
        if (i) {
            t.envMap.value = i,
            t.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1,
            t.reflectivity.value = n.reflectivity,
            t.refractionRatio.value = n.refractionRatio;
            const r = e.get(i).__maxMipLevel;
            void 0 !== r && (t.maxMipLevel.value = r)
        }
        let r, a;
        n.lightMap && (t.lightMap.value = n.lightMap,
        t.lightMapIntensity.value = n.lightMapIntensity),
        n.aoMap && (t.aoMap.value = n.aoMap,
        t.aoMapIntensity.value = n.aoMapIntensity),
        n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap),
        void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture),
        !0 === r.matrixAutoUpdate && r.updateMatrix(),
        t.uvTransform.value.copy(r.matrix)),
        n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap),
        void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture),
        !0 === a.matrixAutoUpdate && a.updateMatrix(),
        t.uv2Transform.value.copy(a.matrix))
    }
    function n(t, n) {
        t.roughness.value = n.roughness,
        t.metalness.value = n.metalness,
        n.roughnessMap && (t.roughnessMap.value = n.roughnessMap),
        n.metalnessMap && (t.metalnessMap.value = n.metalnessMap),
        n.emissiveMap && (t.emissiveMap.value = n.emissiveMap),
        n.bumpMap && (t.bumpMap.value = n.bumpMap,
        t.bumpScale.value = n.bumpScale,
        1 === n.side && (t.bumpScale.value *= -1)),
        n.normalMap && (t.normalMap.value = n.normalMap,
        t.normalScale.value.copy(n.normalScale),
        1 === n.side && t.normalScale.value.negate()),
        n.displacementMap && (t.displacementMap.value = n.displacementMap,
        t.displacementScale.value = n.displacementScale,
        t.displacementBias.value = n.displacementBias);
        e.get(n).envMap && (t.envMapIntensity.value = n.envMapIntensity)
    }
    return {
        refreshFogUniforms: function(e, t) {
            e.fogColor.value.copy(t.color),
            t.isFog ? (e.fogNear.value = t.near,
            e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
        },
        refreshMaterialUniforms: function(e, i, r, a) {
            i.isMeshBasicMaterial ? t(e, i) : i.isMeshLambertMaterial ? (t(e, i),
            function(e, t) {
                t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
            }(e, i)) : i.isMeshToonMaterial ? (t(e, i),
            function(e, t) {
                t.gradientMap && (e.gradientMap.value = t.gradientMap);
                t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
                t.bumpMap && (e.bumpMap.value = t.bumpMap,
                e.bumpScale.value = t.bumpScale,
                1 === t.side && (e.bumpScale.value *= -1));
                t.normalMap && (e.normalMap.value = t.normalMap,
                e.normalScale.value.copy(t.normalScale),
                1 === t.side && e.normalScale.value.negate());
                t.displacementMap && (e.displacementMap.value = t.displacementMap,
                e.displacementScale.value = t.displacementScale,
                e.displacementBias.value = t.displacementBias)
            }(e, i)) : i.isMeshPhongMaterial ? (t(e, i),
            function(e, t) {
                e.specular.value.copy(t.specular),
                e.shininess.value = Math.max(t.shininess, 1e-4),
                t.emissiveMap && (e.emissiveMap.value = t.emissiveMap);
                t.bumpMap && (e.bumpMap.value = t.bumpMap,
                e.bumpScale.value = t.bumpScale,
                1 === t.side && (e.bumpScale.value *= -1));
                t.normalMap && (e.normalMap.value = t.normalMap,
                e.normalScale.value.copy(t.normalScale),
                1 === t.side && e.normalScale.value.negate());
                t.displacementMap && (e.displacementMap.value = t.displacementMap,
                e.displacementScale.value = t.displacementScale,
                e.displacementBias.value = t.displacementBias)
            }(e, i)) : i.isMeshStandardMaterial ? (t(e, i),
            i.isMeshPhysicalMaterial ? function(e, t) {
                n(e, t),
                e.reflectivity.value = t.reflectivity,
                e.clearcoat.value = t.clearcoat,
                e.clearcoatRoughness.value = t.clearcoatRoughness,
                t.sheen && e.sheen.value.copy(t.sheen);
                t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap);
                t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap);
                t.clearcoatNormalMap && (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
                e.clearcoatNormalMap.value = t.clearcoatNormalMap,
                1 === t.side && e.clearcoatNormalScale.value.negate());
                e.transmission.value = t.transmission,
                t.transmissionMap && (e.transmissionMap.value = t.transmissionMap)
            }(e, i) : n(e, i)) : i.isMeshMatcapMaterial ? (t(e, i),
            function(e, t) {
                t.matcap && (e.matcap.value = t.matcap);
                t.bumpMap && (e.bumpMap.value = t.bumpMap,
                e.bumpScale.value = t.bumpScale,
                1 === t.side && (e.bumpScale.value *= -1));
                t.normalMap && (e.normalMap.value = t.normalMap,
                e.normalScale.value.copy(t.normalScale),
                1 === t.side && e.normalScale.value.negate());
                t.displacementMap && (e.displacementMap.value = t.displacementMap,
                e.displacementScale.value = t.displacementScale,
                e.displacementBias.value = t.displacementBias)
            }(e, i)) : i.isMeshDepthMaterial ? (t(e, i),
            function(e, t) {
                t.displacementMap && (e.displacementMap.value = t.displacementMap,
                e.displacementScale.value = t.displacementScale,
                e.displacementBias.value = t.displacementBias)
            }(e, i)) : i.isMeshDistanceMaterial ? (t(e, i),
            function(e, t) {
                t.displacementMap && (e.displacementMap.value = t.displacementMap,
                e.displacementScale.value = t.displacementScale,
                e.displacementBias.value = t.displacementBias);
                e.referencePosition.value.copy(t.referencePosition),
                e.nearDistance.value = t.nearDistance,
                e.farDistance.value = t.farDistance
            }(e, i)) : i.isMeshNormalMaterial ? (t(e, i),
            function(e, t) {
                t.bumpMap && (e.bumpMap.value = t.bumpMap,
                e.bumpScale.value = t.bumpScale,
                1 === t.side && (e.bumpScale.value *= -1));
                t.normalMap && (e.normalMap.value = t.normalMap,
                e.normalScale.value.copy(t.normalScale),
                1 === t.side && e.normalScale.value.negate());
                t.displacementMap && (e.displacementMap.value = t.displacementMap,
                e.displacementScale.value = t.displacementScale,
                e.displacementBias.value = t.displacementBias)
            }(e, i)) : i.isLineBasicMaterial ? (function(e, t) {
                e.diffuse.value.copy(t.color),
                e.opacity.value = t.opacity
            }(e, i),
            i.isLineDashedMaterial && function(e, t) {
                e.dashSize.value = t.dashSize,
                e.totalSize.value = t.dashSize + t.gapSize,
                e.scale.value = t.scale
            }(e, i)) : i.isPointsMaterial ? function(e, t, n, i) {
                e.diffuse.value.copy(t.color),
                e.opacity.value = t.opacity,
                e.size.value = t.size * n,
                e.scale.value = .5 * i,
                t.map && (e.map.value = t.map);
                t.alphaMap && (e.alphaMap.value = t.alphaMap);
                let r;
                t.map ? r = t.map : t.alphaMap && (r = t.alphaMap);
                void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                e.uvTransform.value.copy(r.matrix))
            }(e, i, r, a) : i.isSpriteMaterial ? function(e, t) {
                e.diffuse.value.copy(t.color),
                e.opacity.value = t.opacity,
                e.rotation.value = t.rotation,
                t.map && (e.map.value = t.map);
                t.alphaMap && (e.alphaMap.value = t.alphaMap);
                let n;
                t.map ? n = t.map : t.alphaMap && (n = t.alphaMap);
                void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                e.uvTransform.value.copy(n.matrix))
            }(e, i) : i.isShadowMaterial ? (e.color.value.copy(i.color),
            e.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
        }
    }
}
function sr(e) {
    const t = void 0 !== (e = e || {}).canvas ? e.canvas : function() {
        const e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        return e.style.display = "block",
        e
    }()
      , n = void 0 !== e.context ? e.context : null
      , i = void 0 !== e.alpha && e.alpha
      , r = void 0 === e.depth || e.depth
      , a = void 0 === e.stencil || e.stencil
      , s = void 0 !== e.antialias && e.antialias
      , o = void 0 === e.premultipliedAlpha || e.premultipliedAlpha
      , l = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer
      , c = void 0 !== e.powerPreference ? e.powerPreference : "default"
      , u = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat;
    let d = null
      , m = null;
    const f = []
      , g = [];
    this.domElement = t,
    this.debug = {
        checkShaderErrors: !0
    },
    this.autoClear = !0,
    this.autoClearColor = !0,
    this.autoClearDepth = !0,
    this.autoClearStencil = !0,
    this.sortObjects = !0,
    this.clippingPlanes = [],
    this.localClippingEnabled = !1,
    this.gammaFactor = 2,
    this.outputEncoding = 3e3,
    this.physicallyCorrectLights = !1,
    this.toneMapping = 0,
    this.toneMappingExposure = 1;
    const v = this;
    let x = !1
      , _ = 0
      , M = 0
      , w = null
      , S = -1
      , E = null;
    const T = new y
      , L = new y;
    let A = null
      , R = t.width
      , C = t.height
      , P = 1
      , D = null
      , N = null;
    const I = new y(0,0,R,C)
      , z = new y(0,0,R,C);
    let F = !1;
    const H = new kt;
    let O = !1
      , U = !1;
    const G = new ee
      , B = new b
      , V = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0
    };
    function W() {
        return null === w ? P : 1
    }
    let k, j, q, X, Y, Z, J, Q, K, $, te, ne, ie, re, ae, se, oe, le, ce, he, ue, de, pe = n;
    function me(e, n) {
        for (let i = 0; i < e.length; i++) {
            const r = e[i]
              , a = t.getContext(r, n);
            if (null !== a)
                return a
        }
        return null
    }
    try {
        const e = {
            alpha: i,
            depth: r,
            stencil: a,
            antialias: s,
            premultipliedAlpha: o,
            preserveDrawingBuffer: l,
            powerPreference: c,
            failIfMajorPerformanceCaveat: u
        };
        if (t.addEventListener("webglcontextlost", ve, !1),
        t.addEventListener("webglcontextrestored", xe, !1),
        null === pe) {
            const t = ["webgl2", "webgl", "experimental-webgl"];
            if (!0 === v.isWebGL1Renderer && t.shift(),
            pe = me(t, e),
            null === pe)
                throw me(t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
        }
        void 0 === pe.getShaderPrecisionFormat && (pe.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        }
        )
    } catch (Ce) {
        throw console.error("THREE.WebGLRenderer: " + Ce.message),
        Ce
    }
    function fe() {
        k = new rn(pe),
        j = new en(pe,k,e),
        k.init(j),
        ue = new $i(pe,k,j),
        q = new Qi(pe,k,j),
        X = new on(pe),
        Y = new Hi,
        Z = new Ki(pe,k,q,Y,j,ue,X),
        J = new nn(v),
        Q = new qt(pe,j),
        de = new Kt(pe,k,Q,j),
        K = new an(pe,Q,X,de),
        $ = new un(pe,K,Q,X),
        le = new hn(pe),
        ae = new tn(Y),
        te = new Fi(v,J,k,j,de,ae),
        ne = new ar(Y),
        ie = new Bi(Y),
        re = new Xi(k,j),
        oe = new Qt(v,J,q,$,o),
        se = new Ji(v,$,j),
        ce = new $t(pe,k,X,j),
        he = new sn(pe,k,X,j),
        X.programs = te.programs,
        v.capabilities = j,
        v.extensions = k,
        v.properties = Y,
        v.renderLists = ie,
        v.shadowMap = se,
        v.state = q,
        v.info = X
    }
    fe();
    const ge = new rr(v,pe);
    function ve(e) {
        e.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        x = !0
    }
    function xe() {
        console.log("THREE.WebGLRenderer: Context Restored."),
        x = !1;
        const e = X.autoReset
          , t = se.enabled
          , n = se.autoUpdate
          , i = se.needsUpdate
          , r = se.type;
        fe(),
        X.autoReset = e,
        se.enabled = t,
        se.autoUpdate = n,
        se.needsUpdate = i,
        se.type = r
    }
    function _e(e) {
        const t = e.target;
        t.removeEventListener("dispose", _e),
        function(e) {
            (function(e) {
                const t = Y.get(e).programs;
                void 0 !== t && t.forEach((function(e) {
                    te.releaseProgram(e)
                }
                ))
            }
            )(e),
            Y.remove(e)
        }(t)
    }
    this.xr = ge,
    this.getContext = function() {
        return pe
    }
    ,
    this.getContextAttributes = function() {
        return pe.getContextAttributes()
    }
    ,
    this.forceContextLoss = function() {
        const e = k.get("WEBGL_lose_context");
        e && e.loseContext()
    }
    ,
    this.forceContextRestore = function() {
        const e = k.get("WEBGL_lose_context");
        e && e.restoreContext()
    }
    ,
    this.getPixelRatio = function() {
        return P
    }
    ,
    this.setPixelRatio = function(e) {
        void 0 !== e && (P = e,
        this.setSize(R, C, !1))
    }
    ,
    this.getSize = function(e) {
        return void 0 === e && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),
        e = new p),
        e.set(R, C)
    }
    ,
    this.setSize = function(e, n, i) {
        ge.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (R = e,
        C = n,
        t.width = Math.floor(e * P),
        t.height = Math.floor(n * P),
        !1 !== i && (t.style.width = e + "px",
        t.style.height = n + "px"),
        this.setViewport(0, 0, e, n))
    }
    ,
    this.getDrawingBufferSize = function(e) {
        return void 0 === e && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),
        e = new p),
        e.set(R * P, C * P).floor()
    }
    ,
    this.setDrawingBufferSize = function(e, n, i) {
        R = e,
        C = n,
        P = i,
        t.width = Math.floor(e * i),
        t.height = Math.floor(n * i),
        this.setViewport(0, 0, e, n)
    }
    ,
    this.getCurrentViewport = function(e) {
        return void 0 === e && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),
        e = new y),
        e.copy(T)
    }
    ,
    this.getViewport = function(e) {
        return e.copy(I)
    }
    ,
    this.setViewport = function(e, t, n, i) {
        e.isVector4 ? I.set(e.x, e.y, e.z, e.w) : I.set(e, t, n, i),
        q.viewport(T.copy(I).multiplyScalar(P).floor())
    }
    ,
    this.getScissor = function(e) {
        return e.copy(z)
    }
    ,
    this.setScissor = function(e, t, n, i) {
        e.isVector4 ? z.set(e.x, e.y, e.z, e.w) : z.set(e, t, n, i),
        q.scissor(L.copy(z).multiplyScalar(P).floor())
    }
    ,
    this.getScissorTest = function() {
        return F
    }
    ,
    this.setScissorTest = function(e) {
        q.setScissorTest(F = e)
    }
    ,
    this.setOpaqueSort = function(e) {
        D = e
    }
    ,
    this.setTransparentSort = function(e) {
        N = e
    }
    ,
    this.getClearColor = function(e) {
        return void 0 === e && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),
        e = new Ze),
        e.copy(oe.getClearColor())
    }
    ,
    this.setClearColor = function() {
        oe.setClearColor.apply(oe, arguments)
    }
    ,
    this.getClearAlpha = function() {
        return oe.getClearAlpha()
    }
    ,
    this.setClearAlpha = function() {
        oe.setClearAlpha.apply(oe, arguments)
    }
    ,
    this.clear = function(e, t, n) {
        let i = 0;
        (void 0 === e || e) && (i |= 16384),
        (void 0 === t || t) && (i |= 256),
        (void 0 === n || n) && (i |= 1024),
        pe.clear(i)
    }
    ,
    this.clearColor = function() {
        this.clear(!0, !1, !1)
    }
    ,
    this.clearDepth = function() {
        this.clear(!1, !0, !1)
    }
    ,
    this.clearStencil = function() {
        this.clear(!1, !1, !0)
    }
    ,
    this.dispose = function() {
        t.removeEventListener("webglcontextlost", ve, !1),
        t.removeEventListener("webglcontextrestored", xe, !1),
        ie.dispose(),
        re.dispose(),
        Y.dispose(),
        J.dispose(),
        $.dispose(),
        de.dispose(),
        ge.dispose(),
        ge.removeEventListener("sessionstart", Me),
        ge.removeEventListener("sessionend", we),
        be.stop()
    }
    ,
    this.renderBufferImmediate = function(e, t) {
        de.initAttributes();
        const n = Y.get(e);
        e.hasPositions && !n.position && (n.position = pe.createBuffer()),
        e.hasNormals && !n.normal && (n.normal = pe.createBuffer()),
        e.hasUvs && !n.uv && (n.uv = pe.createBuffer()),
        e.hasColors && !n.color && (n.color = pe.createBuffer());
        const i = t.getAttributes();
        e.hasPositions && (pe.bindBuffer(34962, n.position),
        pe.bufferData(34962, e.positionArray, 35048),
        de.enableAttribute(i.position),
        pe.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)),
        e.hasNormals && (pe.bindBuffer(34962, n.normal),
        pe.bufferData(34962, e.normalArray, 35048),
        de.enableAttribute(i.normal),
        pe.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)),
        e.hasUvs && (pe.bindBuffer(34962, n.uv),
        pe.bufferData(34962, e.uvArray, 35048),
        de.enableAttribute(i.uv),
        pe.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)),
        e.hasColors && (pe.bindBuffer(34962, n.color),
        pe.bufferData(34962, e.colorArray, 35048),
        de.enableAttribute(i.color),
        pe.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)),
        de.disableUnusedAttributes(),
        pe.drawArrays(4, 0, e.count),
        e.count = 0
    }
    ,
    this.renderBufferDirect = function(e, t, n, i, r, a) {
        null === t && (t = V);
        const s = r.isMesh && r.matrixWorld.determinant() < 0
          , o = Re(e, t, i, r);
        q.setMaterial(i, s);
        let l = n.index;
        const c = n.attributes.position;
        if (null === l) {
            if (void 0 === c || 0 === c.count)
                return
        } else if (0 === l.count)
            return;
        let h, u = 1;
        !0 === i.wireframe && (l = K.getWireframeAttribute(n),
        u = 2),
        (i.morphTargets || i.morphNormals) && le.update(r, n, i, o),
        de.setup(r, i, o, n, l);
        let d = ce;
        null !== l && (h = Q.get(l),
        d = he,
        d.setIndex(h));
        const p = null !== l ? l.count : c.count
          , m = n.drawRange.start * u
          , f = n.drawRange.count * u
          , g = null !== a ? a.start * u : 0
          , v = null !== a ? a.count * u : 1 / 0
          , x = Math.max(m, g)
          , _ = Math.min(p, m + f, g + v) - 1
          , y = Math.max(0, _ - x + 1);
        if (0 !== y) {
            if (r.isMesh)
                !0 === i.wireframe ? (q.setLineWidth(i.wireframeLinewidth * W()),
                d.setMode(1)) : d.setMode(4);
            else if (r.isLine) {
                let e = i.linewidth;
                void 0 === e && (e = 1),
                q.setLineWidth(e * W()),
                r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
            } else
                r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
            if (r.isInstancedMesh)
                d.renderInstances(x, y, r.count);
            else if (n.isInstancedBufferGeometry) {
                const e = Math.min(n.instanceCount, n._maxInstanceCount);
                d.renderInstances(x, y, e)
            } else
                d.render(x, y)
        }
    }
    ,
    this.compile = function(e, t) {
        m = re.get(e),
        m.init(),
        e.traverseVisible((function(e) {
            e.isLight && e.layers.test(t.layers) && (m.pushLight(e),
            e.castShadow && m.pushShadow(e))
        }
        )),
        m.setupLights(),
        e.traverse((function(t) {
            const n = t.material;
            if (n)
                if (Array.isArray(n))
                    for (let i = 0; i < n.length; i++) {
                        Le(n[i], e, t)
                    }
                else
                    Le(n, e, t)
        }
        ))
    }
    ;
    let ye = null;
    function Me() {
        be.stop()
    }
    function we() {
        be.start()
    }
    const be = new jt;
    function Se(e, t, n, i) {
        if (!1 === e.visible)
            return;
        if (e.layers.test(t.layers))
            if (e.isGroup)
                n = e.renderOrder;
            else if (e.isLOD)
                !0 === e.autoUpdate && e.update(t);
            else if (e.isLight)
                m.pushLight(e),
                e.castShadow && m.pushShadow(e);
            else if (e.isSprite) {
                if (!e.frustumCulled || H.intersectsSprite(e)) {
                    i && B.setFromMatrixPosition(e.matrixWorld).applyMatrix4(G);
                    const t = $.update(e)
                      , r = e.material;
                    r.visible && d.push(e, t, r, n, B.z, null)
                }
            } else if (e.isImmediateRenderObject)
                i && B.setFromMatrixPosition(e.matrixWorld).applyMatrix4(G),
                d.push(e, null, e.material, n, B.z, null);
            else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.frame !== X.render.frame && (e.skeleton.update(),
            e.skeleton.frame = X.render.frame),
            !e.frustumCulled || H.intersectsObject(e))) {
                i && B.setFromMatrixPosition(e.matrixWorld).applyMatrix4(G);
                const t = $.update(e)
                  , r = e.material;
                if (Array.isArray(r)) {
                    const i = t.groups;
                    for (let a = 0, s = i.length; a < s; a++) {
                        const s = i[a]
                          , o = r[s.materialIndex];
                        o && o.visible && d.push(e, t, o, n, B.z, s)
                    }
                } else
                    r.visible && d.push(e, t, r, n, B.z, null)
            }
        const r = e.children;
        for (let a = 0, s = r.length; a < s; a++)
            Se(r[a], t, n, i)
    }
    function Ee(e, t, n) {
        const i = !0 === t.isScene ? t.overrideMaterial : null;
        for (let r = 0, a = e.length; r < a; r++) {
            const a = e[r]
              , s = a.object
              , o = a.geometry
              , l = null === i ? a.material : i
              , c = a.group;
            if (n.isArrayCamera) {
                const e = n.cameras;
                for (let n = 0, i = e.length; n < i; n++) {
                    const i = e[n];
                    s.layers.test(i.layers) && (q.viewport(T.copy(i.viewport)),
                    m.setupLightsView(i),
                    Te(s, t, i, o, l, c))
                }
            } else
                Te(s, t, n, o, l, c)
        }
    }
    function Te(e, t, n, i, r, a) {
        if (e.onBeforeRender(v, t, n, i, r, a),
        e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
        e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
        e.isImmediateRenderObject) {
            const i = Re(n, t, r, e);
            q.setMaterial(r),
            de.reset(),
            function(e, t) {
                e.render((function(e) {
                    v.renderBufferImmediate(e, t)
                }
                ))
            }(e, i)
        } else
            v.renderBufferDirect(n, t, i, r, e, a);
        e.onAfterRender(v, t, n, i, r, a)
    }
    function Le(e, t, n) {
        !0 !== t.isScene && (t = V);
        const i = Y.get(e)
          , r = m.state.lights
          , a = m.state.shadowsArray
          , s = r.state.version
          , o = te.getParameters(e, r.state, a, t, n)
          , l = te.getProgramCacheKey(o);
        let c = i.programs;
        i.environment = e.isMeshStandardMaterial ? t.environment : null,
        i.fog = t.fog,
        i.envMap = J.get(e.envMap || i.environment),
        void 0 === c && (e.addEventListener("dispose", _e),
        c = new Map,
        i.programs = c);
        let h = c.get(l);
        if (void 0 !== h) {
            if (i.currentProgram === h && i.lightsStateVersion === s)
                return Ae(e, o),
                h
        } else
            o.uniforms = te.getUniforms(e),
            e.onBuild(o, v),
            e.onBeforeCompile(o, v),
            h = te.acquireProgram(o, l),
            c.set(l, h),
            i.uniforms = o.uniforms;
        const u = i.uniforms;
        (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (u.clippingPlanes = ae.uniform),
        Ae(e, o),
        i.needsLights = function(e) {
            return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights
        }(e),
        i.lightsStateVersion = s,
        i.needsLights && (u.ambientLightColor.value = r.state.ambient,
        u.lightProbe.value = r.state.probe,
        u.directionalLights.value = r.state.directional,
        u.directionalLightShadows.value = r.state.directionalShadow,
        u.spotLights.value = r.state.spot,
        u.spotLightShadows.value = r.state.spotShadow,
        u.rectAreaLights.value = r.state.rectArea,
        u.ltc_1.value = r.state.rectAreaLTC1,
        u.ltc_2.value = r.state.rectAreaLTC2,
        u.pointLights.value = r.state.point,
        u.pointLightShadows.value = r.state.pointShadow,
        u.hemisphereLights.value = r.state.hemi,
        u.directionalShadowMap.value = r.state.directionalShadowMap,
        u.directionalShadowMatrix.value = r.state.directionalShadowMatrix,
        u.spotShadowMap.value = r.state.spotShadowMap,
        u.spotShadowMatrix.value = r.state.spotShadowMatrix,
        u.pointShadowMap.value = r.state.pointShadowMap,
        u.pointShadowMatrix.value = r.state.pointShadowMatrix);
        const d = h.getUniforms()
          , p = fi.seqWithValue(d.seq, u);
        return i.currentProgram = h,
        i.uniformsList = p,
        h
    }
    function Ae(e, t) {
        const n = Y.get(e);
        n.outputEncoding = t.outputEncoding,
        n.instancing = t.instancing,
        n.numClippingPlanes = t.numClippingPlanes,
        n.numIntersection = t.numClipIntersection,
        n.vertexAlphas = t.vertexAlphas
    }
    function Re(e, t, n, i) {
        !0 !== t.isScene && (t = V),
        Z.resetTextureUnits();
        const r = t.fog
          , a = n.isMeshStandardMaterial ? t.environment : null
          , s = null === w ? v.outputEncoding : w.texture.encoding
          , o = J.get(n.envMap || a)
          , l = !0 === n.vertexColors && i.geometry && i.geometry.attributes.color && 4 === i.geometry.attributes.color.itemSize
          , c = Y.get(n)
          , u = m.state.lights;
        if (!0 === O && (!0 === U || e !== E)) {
            const t = e === E && n.id === S;
            ae.setState(n, e, t)
        }
        let d = !1;
        n.version === c.__version ? c.needsLights && c.lightsStateVersion !== u.state.version || c.outputEncoding !== s || i.isInstancedMesh && !1 === c.instancing ? d = !0 : i.isInstancedMesh || !0 !== c.instancing ? c.envMap !== o || n.fog && c.fog !== r ? d = !0 : void 0 === c.numClippingPlanes || c.numClippingPlanes === ae.numPlanes && c.numIntersection === ae.numIntersection ? c.vertexAlphas !== l && (d = !0) : d = !0 : d = !0 : (d = !0,
        c.__version = n.version);
        let p = c.currentProgram;
        !0 === d && (p = Le(n, t, i));
        let f = !1
          , g = !1
          , x = !1;
        const _ = p.getUniforms()
          , y = c.uniforms;
        if (q.useProgram(p.program) && (f = !0,
        g = !0,
        x = !0),
        n.id !== S && (S = n.id,
        g = !0),
        f || E !== e) {
            if (_.setValue(pe, "projectionMatrix", e.projectionMatrix),
            j.logarithmicDepthBuffer && _.setValue(pe, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)),
            E !== e && (E = e,
            g = !0,
            x = !0),
            n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                const t = _.map.cameraPosition;
                void 0 !== t && t.setValue(pe, B.setFromMatrixPosition(e.matrixWorld))
            }
            (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && _.setValue(pe, "isOrthographic", !0 === e.isOrthographicCamera),
            (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && _.setValue(pe, "viewMatrix", e.matrixWorldInverse)
        }
        if (n.skinning) {
            _.setOptional(pe, i, "bindMatrix"),
            _.setOptional(pe, i, "bindMatrixInverse");
            const e = i.skeleton;
            if (e) {
                const t = e.bones;
                if (j.floatVertexTextures) {
                    if (null === e.boneTexture) {
                        let n = Math.sqrt(4 * t.length);
                        n = h(n),
                        n = Math.max(n, 4);
                        const i = new Float32Array(n * n * 4);
                        i.set(e.boneMatrices);
                        const r = new Bt(i,n,n,1023,1015);
                        e.boneMatrices = i,
                        e.boneTexture = r,
                        e.boneTextureSize = n
                    }
                    _.setValue(pe, "boneTexture", e.boneTexture, Z),
                    _.setValue(pe, "boneTextureSize", e.boneTextureSize)
                } else
                    _.setOptional(pe, e, "boneMatrices")
            }
        }
        var M, b;
        return (g || c.receiveShadow !== i.receiveShadow) && (c.receiveShadow = i.receiveShadow,
        _.setValue(pe, "receiveShadow", i.receiveShadow)),
        g && (_.setValue(pe, "toneMappingExposure", v.toneMappingExposure),
        c.needsLights && (b = x,
        (M = y).ambientLightColor.needsUpdate = b,
        M.lightProbe.needsUpdate = b,
        M.directionalLights.needsUpdate = b,
        M.directionalLightShadows.needsUpdate = b,
        M.pointLights.needsUpdate = b,
        M.pointLightShadows.needsUpdate = b,
        M.spotLights.needsUpdate = b,
        M.spotLightShadows.needsUpdate = b,
        M.rectAreaLights.needsUpdate = b,
        M.hemisphereLights.needsUpdate = b),
        r && n.fog && ne.refreshFogUniforms(y, r),
        ne.refreshMaterialUniforms(y, n, P, C),
        fi.upload(pe, c.uniformsList, y, Z)),
        n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (fi.upload(pe, c.uniformsList, y, Z),
        n.uniformsNeedUpdate = !1),
        n.isSpriteMaterial && _.setValue(pe, "center", i.center),
        _.setValue(pe, "modelViewMatrix", i.modelViewMatrix),
        _.setValue(pe, "normalMatrix", i.normalMatrix),
        _.setValue(pe, "modelMatrix", i.matrixWorld),
        p
    }
    be.setAnimationLoop((function(e) {
        ye && ye(e)
    }
    )),
    "undefined" != typeof window && be.setContext(window),
    this.setAnimationLoop = function(e) {
        ye = e,
        ge.setAnimationLoop(e),
        null === e ? be.stop() : be.start()
    }
    ,
    ge.addEventListener("sessionstart", Me),
    ge.addEventListener("sessionend", we),
    this.render = function(e, t) {
        let n, i;
        if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),
        n = arguments[2]),
        void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),
        i = arguments[3]),
        void 0 !== t && !0 !== t.isCamera)
            return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (!0 === x)
            return;
        !0 === e.autoUpdate && e.updateMatrixWorld(),
        null === t.parent && t.updateMatrixWorld(),
        !0 === ge.enabled && !0 === ge.isPresenting && (t = ge.getCamera(t)),
        !0 === e.isScene && e.onBeforeRender(v, e, t, n || w),
        m = re.get(e, g.length),
        m.init(),
        g.push(m),
        G.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        H.setFromProjectionMatrix(G),
        U = this.localClippingEnabled,
        O = ae.init(this.clippingPlanes, U, t),
        d = ie.get(e, f.length),
        d.init(),
        f.push(d),
        Se(e, t, 0, v.sortObjects),
        d.finish(),
        !0 === v.sortObjects && d.sort(D, N),
        !0 === O && ae.beginShadows();
        const r = m.state.shadowsArray;
        se.render(r, e, t),
        m.setupLights(),
        m.setupLightsView(t),
        !0 === O && ae.endShadows(),
        !0 === this.info.autoReset && this.info.reset(),
        void 0 !== n && this.setRenderTarget(n),
        oe.render(d, e, t, i);
        const a = d.opaque
          , s = d.transparent;
        a.length > 0 && Ee(a, e, t),
        s.length > 0 && Ee(s, e, t),
        null !== w && (Z.updateRenderTargetMipmap(w),
        Z.updateMultisampleRenderTarget(w)),
        !0 === e.isScene && e.onAfterRender(v, e, t),
        q.buffers.depth.setTest(!0),
        q.buffers.depth.setMask(!0),
        q.buffers.color.setMask(!0),
        q.setPolygonOffset(!1),
        de.resetDefaultState(),
        S = -1,
        E = null,
        g.pop(),
        m = g.length > 0 ? g[g.length - 1] : null,
        f.pop(),
        d = f.length > 0 ? f[f.length - 1] : null
    }
    ,
    this.getActiveCubeFace = function() {
        return _
    }
    ,
    this.getActiveMipmapLevel = function() {
        return M
    }
    ,
    this.getRenderTarget = function() {
        return w
    }
    ,
    this.setRenderTarget = function(e, t=0, n=0) {
        w = e,
        _ = t,
        M = n,
        e && void 0 === Y.get(e).__webglFramebuffer && Z.setupRenderTarget(e);
        let i = null
          , r = !1
          , a = !1;
        if (e) {
            const n = e.texture;
            (n.isDataTexture3D || n.isDataTexture2DArray) && (a = !0);
            const s = Y.get(e).__webglFramebuffer;
            e.isWebGLCubeRenderTarget ? (i = s[t],
            r = !0) : i = e.isWebGLMultisampleRenderTarget ? Y.get(e).__webglMultisampledFramebuffer : s,
            T.copy(e.viewport),
            L.copy(e.scissor),
            A = e.scissorTest
        } else
            T.copy(I).multiplyScalar(P).floor(),
            L.copy(z).multiplyScalar(P).floor(),
            A = F;
        if (q.bindFramebuffer(36160, i),
        q.viewport(T),
        q.scissor(L),
        q.setScissorTest(A),
        r) {
            const i = Y.get(e.texture);
            pe.framebufferTexture2D(36160, 36064, 34069 + t, i.__webglTexture, n)
        } else if (a) {
            const i = Y.get(e.texture)
              , r = t || 0;
            pe.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r)
        }
    }
    ,
    this.readRenderTargetPixels = function(e, t, n, i, r, a, s) {
        if (!e || !e.isWebGLRenderTarget)
            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let o = Y.get(e).__webglFramebuffer;
        if (e.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]),
        o) {
            q.bindFramebuffer(36160, o);
            try {
                const s = e.texture
                  , o = s.format
                  , l = s.type;
                if (1023 !== o && ue.convert(o) !== pe.getParameter(35739))
                    return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                const c = 1016 === l && (k.has("EXT_color_buffer_half_float") || j.isWebGL2 && k.has("EXT_color_buffer_float"));
                if (!(1009 === l || ue.convert(l) === pe.getParameter(35738) || 1015 === l && (j.isWebGL2 || k.has("OES_texture_float") || k.has("WEBGL_color_buffer_float")) || c))
                    return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                36053 === pe.checkFramebufferStatus(36160) ? t >= 0 && t <= e.width - i && n >= 0 && n <= e.height - r && pe.readPixels(t, n, i, r, ue.convert(o), ue.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
            } finally {
                const e = null !== w ? Y.get(w).__webglFramebuffer : null;
                q.bindFramebuffer(36160, e)
            }
        }
    }
    ,
    this.copyFramebufferToTexture = function(e, t, n=0) {
        const i = Math.pow(2, -n)
          , r = Math.floor(t.image.width * i)
          , a = Math.floor(t.image.height * i)
          , s = ue.convert(t.format);
        Z.setTexture2D(t, 0),
        pe.copyTexImage2D(3553, n, s, e.x, e.y, r, a, 0),
        q.unbindTexture()
    }
    ,
    this.copyTextureToTexture = function(e, t, n, i=0) {
        const r = t.image.width
          , a = t.image.height
          , s = ue.convert(n.format)
          , o = ue.convert(n.type);
        Z.setTexture2D(n, 0),
        pe.pixelStorei(37440, n.flipY),
        pe.pixelStorei(37441, n.premultiplyAlpha),
        pe.pixelStorei(3317, n.unpackAlignment),
        t.isDataTexture ? pe.texSubImage2D(3553, i, e.x, e.y, r, a, s, o, t.image.data) : t.isCompressedTexture ? pe.compressedTexSubImage2D(3553, i, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, s, t.mipmaps[0].data) : pe.texSubImage2D(3553, i, e.x, e.y, s, o, t.image),
        0 === i && n.generateMipmaps && pe.generateMipmap(3553),
        q.unbindTexture()
    }
    ,
    this.copyTextureToTexture3D = function(e, t, n, i, r=0) {
        if (v.isWebGL1Renderer)
            return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        const {width: a, height: s, data: o} = n.image
          , l = ue.convert(i.format)
          , c = ue.convert(i.type);
        let h;
        if (i.isDataTexture3D)
            Z.setTexture3D(i, 0),
            h = 32879;
        else {
            if (!i.isDataTexture2DArray)
                return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            Z.setTexture2DArray(i, 0),
            h = 35866
        }
        pe.pixelStorei(37440, i.flipY),
        pe.pixelStorei(37441, i.premultiplyAlpha),
        pe.pixelStorei(3317, i.unpackAlignment);
        const u = pe.getParameter(3314)
          , d = pe.getParameter(32878)
          , p = pe.getParameter(3316)
          , m = pe.getParameter(3315)
          , f = pe.getParameter(32877);
        pe.pixelStorei(3314, a),
        pe.pixelStorei(32878, s),
        pe.pixelStorei(3316, e.min.x),
        pe.pixelStorei(3315, e.min.y),
        pe.pixelStorei(32877, e.min.z),
        pe.texSubImage3D(h, r, t.x, t.y, t.z, e.max.x - e.min.x + 1, e.max.y - e.min.y + 1, e.max.z - e.min.z + 1, l, c, o),
        pe.pixelStorei(3314, u),
        pe.pixelStorei(32878, d),
        pe.pixelStorei(3316, p),
        pe.pixelStorei(3315, m),
        pe.pixelStorei(32877, f),
        0 === r && i.generateMipmaps && pe.generateMipmap(h),
        q.unbindTexture()
    }
    ,
    this.initTexture = function(e) {
        Z.setTexture2D(e, 0),
        q.unbindTexture()
    }
    ,
    this.resetState = function() {
        _ = 0,
        M = 0,
        w = null,
        q.reset(),
        de.reset()
    }
    ,
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
        detail: this
    }))
}
class or extends Ee {
    constructor() {
        super(),
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.overrideMaterial = null,
        this.autoUpdate = !0,
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t),
        null !== e.background && (this.background = e.background.clone()),
        null !== e.environment && (this.environment = e.environment.clone()),
        null !== e.fog && (this.fog = e.fog.clone()),
        null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()),
        this.autoUpdate = e.autoUpdate,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return null !== this.background && (t.object.background = this.background.toJSON(e)),
        null !== this.environment && (t.object.environment = this.environment.toJSON(e)),
        null !== this.fog && (t.object.fog = this.fog.toJSON()),
        t
    }
}
or.prototype.isScene = !0;
class lr extends ut {
    constructor(e=1, t=8, n=6, i=0, r=2 * Math.PI, a=0, s=Math.PI) {
        super(),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: a,
            thetaLength: s
        },
        t = Math.max(3, Math.floor(t)),
        n = Math.max(2, Math.floor(n));
        const o = Math.min(a + s, Math.PI);
        let l = 0;
        const c = []
          , h = new b
          , u = new b
          , d = []
          , p = []
          , m = []
          , f = [];
        for (let g = 0; g <= n; g++) {
            const d = []
              , v = g / n;
            let x = 0;
            0 == g && 0 == a ? x = .5 / t : g == n && o == Math.PI && (x = -.5 / t);
            for (let n = 0; n <= t; n++) {
                const o = n / t;
                h.x = -e * Math.cos(i + o * r) * Math.sin(a + v * s),
                h.y = e * Math.cos(a + v * s),
                h.z = e * Math.sin(i + o * r) * Math.sin(a + v * s),
                p.push(h.x, h.y, h.z),
                u.copy(h).normalize(),
                m.push(u.x, u.y, u.z),
                f.push(o + x, 1 - v),
                d.push(l++)
            }
            c.push(d)
        }
        for (let g = 0; g < n; g++)
            for (let e = 0; e < t; e++) {
                const t = c[g][e + 1]
                  , i = c[g][e]
                  , r = c[g + 1][e]
                  , s = c[g + 1][e + 1];
                (0 !== g || a > 0) && d.push(t, i, s),
                (g !== n - 1 || o < Math.PI) && d.push(i, r, s)
            }
        this.setIndex(d),
        this.setAttribute("position", new nt(p,3)),
        this.setAttribute("normal", new nt(m,3)),
        this.setAttribute("uv", new nt(f,2))
    }
}
class cr extends ut {
    constructor(e=1, t=.4, n=8, i=6, r=2 * Math.PI) {
        super(),
        this.type = "TorusGeometry",
        this.parameters = {
            radius: e,
            tube: t,
            radialSegments: n,
            tubularSegments: i,
            arc: r
        },
        n = Math.floor(n),
        i = Math.floor(i);
        const a = []
          , s = []
          , o = []
          , l = []
          , c = new b
          , h = new b
          , u = new b;
        for (let d = 0; d <= n; d++)
            for (let a = 0; a <= i; a++) {
                const p = a / i * r
                  , m = d / n * Math.PI * 2;
                h.x = (e + t * Math.cos(m)) * Math.cos(p),
                h.y = (e + t * Math.cos(m)) * Math.sin(p),
                h.z = t * Math.sin(m),
                s.push(h.x, h.y, h.z),
                c.x = e * Math.cos(p),
                c.y = e * Math.sin(p),
                u.subVectors(h, c).normalize(),
                o.push(u.x, u.y, u.z),
                l.push(a / i),
                l.push(d / n)
            }
        for (let d = 1; d <= n; d++)
            for (let e = 1; e <= i; e++) {
                const t = (i + 1) * d + e - 1
                  , n = (i + 1) * (d - 1) + e - 1
                  , r = (i + 1) * (d - 1) + e
                  , s = (i + 1) * d + e;
                a.push(t, n, s),
                a.push(n, r, s)
            }
        this.setIndex(a),
        this.setAttribute("position", new nt(s,3)),
        this.setAttribute("normal", new nt(o,3)),
        this.setAttribute("uv", new nt(l,2))
    }
}
class hr extends Ve {
    constructor(e) {
        super(),
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new Ze(16777215),
        this.roughness = 1,
        this.metalness = 0,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new Ze(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new p(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapIntensity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.flatShading = !1,
        this.vertexTangents = !1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(e.color),
        this.roughness = e.roughness,
        this.metalness = e.metalness,
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.roughnessMap = e.roughnessMap,
        this.metalnessMap = e.metalnessMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapIntensity = e.envMapIntensity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.morphNormals = e.morphNormals,
        this.flatShading = e.flatShading,
        this.vertexTangents = e.vertexTangents,
        this
    }
}
hr.prototype.isMeshStandardMaterial = !0;
const ur = {
    enabled: !1,
    files: {},
    add: function(e, t) {
        !1 !== this.enabled && (this.files[e] = t)
    },
    get: function(e) {
        if (!1 !== this.enabled)
            return this.files[e]
    },
    remove: function(e) {
        delete this.files[e]
    },
    clear: function() {
        this.files = {}
    }
};
const dr = new class {
    constructor(e, t, n) {
        const i = this;
        let r, a = !1, s = 0, o = 0;
        const l = [];
        this.onStart = void 0,
        this.onLoad = e,
        this.onProgress = t,
        this.onError = n,
        this.itemStart = function(e) {
            o++,
            !1 === a && void 0 !== i.onStart && i.onStart(e, s, o),
            a = !0
        }
        ,
        this.itemEnd = function(e) {
            s++,
            void 0 !== i.onProgress && i.onProgress(e, s, o),
            s === o && (a = !1,
            void 0 !== i.onLoad && i.onLoad())
        }
        ,
        this.itemError = function(e) {
            void 0 !== i.onError && i.onError(e)
        }
        ,
        this.resolveURL = function(e) {
            return r ? r(e) : e
        }
        ,
        this.setURLModifier = function(e) {
            return r = e,
            this
        }
        ,
        this.addHandler = function(e, t) {
            return l.push(e, t),
            this
        }
        ,
        this.removeHandler = function(e) {
            const t = l.indexOf(e);
            return -1 !== t && l.splice(t, 2),
            this
        }
        ,
        this.getHandler = function(e) {
            for (let t = 0, n = l.length; t < n; t += 2) {
                const n = l[t]
                  , i = l[t + 1];
                if (n.global && (n.lastIndex = 0),
                n.test(e))
                    return i
            }
            return null
        }
    }
}
;
class pr {
    constructor(e) {
        this.manager = void 0 !== e ? e : dr,
        this.crossOrigin = "anonymous",
        this.withCredentials = !1,
        this.path = "",
        this.resourcePath = "",
        this.requestHeader = {}
    }
    load() {}
    loadAsync(e, t) {
        const n = this;
        return new Promise((function(i, r) {
            n.load(e, i, t, r)
        }
        ))
    }
    parse() {}
    setCrossOrigin(e) {
        return this.crossOrigin = e,
        this
    }
    setWithCredentials(e) {
        return this.withCredentials = e,
        this
    }
    setPath(e) {
        return this.path = e,
        this
    }
    setResourcePath(e) {
        return this.resourcePath = e,
        this
    }
    setRequestHeader(e) {
        return this.requestHeader = e,
        this
    }
}
class mr extends pr {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        void 0 !== this.path && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const r = this
          , a = ur.get(e);
        if (void 0 !== a)
            return r.manager.itemStart(e),
            setTimeout((function() {
                t && t(a),
                r.manager.itemEnd(e)
            }
            ), 0),
            a;
        const s = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
        function o() {
            s.removeEventListener("load", o, !1),
            s.removeEventListener("error", l, !1),
            ur.add(e, this),
            t && t(this),
            r.manager.itemEnd(e)
        }
        function l(t) {
            s.removeEventListener("load", o, !1),
            s.removeEventListener("error", l, !1),
            i && i(t),
            r.manager.itemError(e),
            r.manager.itemEnd(e)
        }
        return s.addEventListener("load", o, !1),
        s.addEventListener("error", l, !1),
        "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin),
        r.manager.itemStart(e),
        s.src = e,
        s
    }
}
class fr extends pr {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const r = new Ut
          , a = new mr(this.manager);
        a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path);
        let s = 0;
        function o(n) {
            a.load(e[n], (function(e) {
                r.images[n] = e,
                s++,
                6 === s && (r.needsUpdate = !0,
                t && t(r))
            }
            ), void 0, i)
        }
        for (let l = 0; l < e.length; ++l)
            o(l);
        return r
    }
}
class gr extends pr {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const r = new x
          , a = new mr(this.manager);
        return a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(e, (function(n) {
            r.image = n;
            const i = e.search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/);
            r.format = i ? 1022 : 1023,
            r.needsUpdate = !0,
            void 0 !== t && t(r)
        }
        ), n, i),
        r
    }
}
class vr extends Ee {
    constructor(e, t=1) {
        super(),
        this.type = "Light",
        this.color = new Ze(e),
        this.intensity = t
    }
    dispose() {}
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.intensity = e.intensity,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.color = this.color.getHex(),
        t.object.intensity = this.intensity,
        void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (t.object.distance = this.distance),
        void 0 !== this.angle && (t.object.angle = this.angle),
        void 0 !== this.decay && (t.object.decay = this.decay),
        void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
        void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
        t
    }
}
vr.prototype.isLight = !0;
const xr = new ee
  , _r = new b
  , yr = new b;
const Mr = new ee
  , wr = new b
  , br = new b;
class Sr extends class {
    constructor(e) {
        this.camera = e,
        this.bias = 0,
        this.normalBias = 0,
        this.radius = 1,
        this.mapSize = new p(512,512),
        this.map = null,
        this.mapPass = null,
        this.matrix = new ee,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this._frustum = new kt,
        this._frameExtents = new p(1,1),
        this._viewportCount = 1,
        this._viewports = [new y(0,0,1,1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(e) {
        const t = this.camera
          , n = this.matrix;
        _r.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(_r),
        yr.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(yr),
        t.updateMatrixWorld(),
        xr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(xr),
        n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        n.multiply(t.projectionMatrix),
        n.multiply(t.matrixWorldInverse)
    }
    getViewport(e) {
        return this._viewports[e]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(),
        this.mapPass && this.mapPass.dispose()
    }
    copy(e) {
        return this.camera = e.camera.clone(),
        this.bias = e.bias,
        this.radius = e.radius,
        this.mapSize.copy(e.mapSize),
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    toJSON() {
        const e = {};
        return 0 !== this.bias && (e.bias = this.bias),
        0 !== this.normalBias && (e.normalBias = this.normalBias),
        1 !== this.radius && (e.radius = this.radius),
        512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()),
        e.camera = this.camera.toJSON(!1).object,
        delete e.camera.matrix,
        e
    }
}
{
    constructor() {
        super(new Ht(90,1,.5,500)),
        this._frameExtents = new p(4,2),
        this._viewportCount = 6,
        this._viewports = [new y(2,1,1,1), new y(0,1,1,1), new y(3,1,1,1), new y(1,1,1,1), new y(3,0,1,1), new y(1,0,1,1)],
        this._cubeDirections = [new b(1,0,0), new b(-1,0,0), new b(0,0,1), new b(0,0,-1), new b(0,1,0), new b(0,-1,0)],
        this._cubeUps = [new b(0,1,0), new b(0,1,0), new b(0,1,0), new b(0,1,0), new b(0,0,1), new b(0,0,-1)]
    }
    updateMatrices(e, t=0) {
        const n = this.camera
          , i = this.matrix
          , r = e.distance || n.far;
        r !== n.far && (n.far = r,
        n.updateProjectionMatrix()),
        wr.setFromMatrixPosition(e.matrixWorld),
        n.position.copy(wr),
        br.copy(n.position),
        br.add(this._cubeDirections[t]),
        n.up.copy(this._cubeUps[t]),
        n.lookAt(br),
        n.updateMatrixWorld(),
        i.makeTranslation(-wr.x, -wr.y, -wr.z),
        Mr.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Mr)
    }
}
Sr.prototype.isPointLightShadow = !0;
class Er extends vr {
    constructor(e, t, n=0, i=1) {
        super(e, t),
        this.type = "PointLight",
        this.distance = n,
        this.decay = i,
        this.shadow = new Sr
    }
    get power() {
        return 4 * this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI)
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e),
        this.distance = e.distance,
        this.decay = e.decay,
        this.shadow = e.shadow.clone(),
        this
    }
}
Er.prototype.isPointLight = !0;
class Tr extends vr {
    constructor(e, t) {
        super(e, t),
        this.type = "AmbientLight"
    }
}
Tr.prototype.isAmbientLight = !0;
const Lr = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]";
/((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
/(WCOD+)?/.source.replace("WCOD", Lr),
/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
/\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]");
const Ar = new Je({
    side: 1,
    depthWrite: !1,
    depthTest: !1
});
new Rt(new Pt,Ar),
pr.prototype.extractUrlBase = function(e) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),
    class {
        static decodeText(e) {
            if ("undefined" != typeof TextDecoder)
                return (new TextDecoder).decode(e);
            let t = "";
            for (let i = 0, r = e.length; i < r; i++)
                t += String.fromCharCode(e[i]);
            try {
                return decodeURIComponent(escape(t))
            } catch (n) {
                return t
            }
        }
        static extractUrlBase(e) {
            const t = e.lastIndexOf("/");
            return -1 === t ? "./" : e.substr(0, t + 1)
        }
    }
    .extractUrlBase(e)
}
,
pr.Handlers = {
    add: function() {
        console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
    },
    get: function() {
        console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
    }
},
T.prototype.center = function(e) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
    this.getCenter(e)
}
,
T.prototype.empty = function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
}
,
T.prototype.isIntersectionBox = function(e) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
    this.intersectsBox(e)
}
,
T.prototype.isIntersectionSphere = function(e) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
    this.intersectsSphere(e)
}
,
T.prototype.size = function(e) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
    this.getSize(e)
}
,
j.prototype.empty = function() {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),
    this.isEmpty()
}
,
kt.prototype.setFromMatrix = function(e) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),
    this.setFromProjectionMatrix(e)
}
,
m.prototype.flattenToArrayOffset = function(e, t) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
    this.toArray(e, t)
}
,
m.prototype.multiplyVector3 = function(e) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
    e.applyMatrix3(this)
}
,
m.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
}
,
m.prototype.applyToBufferAttribute = function(e) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),
    e.applyMatrix3(this)
}
,
m.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
}
,
m.prototype.getInverse = function(e) {
    return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),
    this.copy(e).invert()
}
,
ee.prototype.extractPosition = function(e) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
    this.copyPosition(e)
}
,
ee.prototype.flattenToArrayOffset = function(e, t) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
    this.toArray(e, t)
}
,
ee.prototype.getPosition = function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
    (new b).setFromMatrixColumn(this, 3)
}
,
ee.prototype.setRotationFromQuaternion = function(e) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
    this.makeRotationFromQuaternion(e)
}
,
ee.prototype.multiplyToArray = function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
}
,
ee.prototype.multiplyVector3 = function(e) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),
    e.applyMatrix4(this)
}
,
ee.prototype.multiplyVector4 = function(e) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
    e.applyMatrix4(this)
}
,
ee.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
}
,
ee.prototype.rotateAxis = function(e) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
    e.transformDirection(this)
}
,
ee.prototype.crossVector = function(e) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
    e.applyMatrix4(this)
}
,
ee.prototype.translate = function() {
    console.error("THREE.Matrix4: .translate() has been removed.")
}
,
ee.prototype.rotateX = function() {
    console.error("THREE.Matrix4: .rotateX() has been removed.")
}
,
ee.prototype.rotateY = function() {
    console.error("THREE.Matrix4: .rotateY() has been removed.")
}
,
ee.prototype.rotateZ = function() {
    console.error("THREE.Matrix4: .rotateZ() has been removed.")
}
,
ee.prototype.rotateByAxis = function() {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
}
,
ee.prototype.applyToBufferAttribute = function(e) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),
    e.applyMatrix4(this)
}
,
ee.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
}
,
ee.prototype.makeFrustum = function(e, t, n, i, r, a) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),
    this.makePerspective(e, t, i, n, r, a)
}
,
ee.prototype.getInverse = function(e) {
    return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),
    this.copy(e).invert()
}
,
Re.prototype.isIntersectionLine = function(e) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
    this.intersectsLine(e)
}
,
w.prototype.multiplyVector3 = function(e) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
    e.applyQuaternion(this)
}
,
w.prototype.inverse = function() {
    return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),
    this.invert()
}
,
$.prototype.isIntersectionBox = function(e) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
    this.intersectsBox(e)
}
,
$.prototype.isIntersectionPlane = function(e) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
    this.intersectsPlane(e)
}
,
$.prototype.isIntersectionSphere = function(e) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
    this.intersectsSphere(e)
}
,
Ge.prototype.area = function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),
    this.getArea()
}
,
Ge.prototype.barycoordFromPoint = function(e, t) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
    this.getBarycoord(e, t)
}
,
Ge.prototype.midpoint = function(e) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),
    this.getMidpoint(e)
}
,
Ge.prototypenormal = function(e) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    this.getNormal(e)
}
,
Ge.prototype.plane = function(e) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),
    this.getPlane(e)
}
,
Ge.barycoordFromPoint = function(e, t, n, i, r) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),
    Ge.getBarycoord(e, t, n, i, r)
}
,
Ge.normal = function(e, t, n, i) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),
    Ge.getNormal(e, t, n, i)
}
,
p.prototype.fromAttribute = function(e, t, n) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),
    this.fromBufferAttribute(e, t, n)
}
,
p.prototype.distanceToManhattan = function(e) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
    this.manhattanDistanceTo(e)
}
,
p.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),
    this.manhattanLength()
}
,
b.prototype.setEulerFromRotationMatrix = function() {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
}
,
b.prototype.setEulerFromQuaternion = function() {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
}
,
b.prototype.getPositionFromMatrix = function(e) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
    this.setFromMatrixPosition(e)
}
,
b.prototype.getScaleFromMatrix = function(e) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
    this.setFromMatrixScale(e)
}
,
b.prototype.getColumnFromMatrix = function(e, t) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
    this.setFromMatrixColumn(t, e)
}
,
b.prototype.applyProjection = function(e) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),
    this.applyMatrix4(e)
}
,
b.prototype.fromAttribute = function(e, t, n) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),
    this.fromBufferAttribute(e, t, n)
}
,
b.prototype.distanceToManhattan = function(e) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),
    this.manhattanDistanceTo(e)
}
,
b.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),
    this.manhattanLength()
}
,
y.prototype.fromAttribute = function(e, t, n) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),
    this.fromBufferAttribute(e, t, n)
}
,
y.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),
    this.manhattanLength()
}
,
Ee.prototype.getChildByName = function(e) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
    this.getObjectByName(e)
}
,
Ee.prototype.renderDepth = function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
}
,
Ee.prototype.translate = function(e, t) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
    this.translateOnAxis(t, e)
}
,
Ee.prototype.getWorldRotation = function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
}
,
Ee.prototype.applyMatrix = function(e) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),
    this.applyMatrix4(e)
}
,
Object.defineProperties(Ee.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order
        },
        set: function(e) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
            this.rotation.order = e
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
    }
}),
Rt.prototype.setDrawMode = function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
}
,
Object.defineProperties(Rt.prototype, {
    drawMode: {
        get: function() {
            return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),
            0
        },
        set: function() {
            console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
        }
    }
}),
Ht.prototype.setLens = function(e, t) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
    void 0 !== t && (this.filmGauge = t),
    this.setFocalLength(e)
}
,
Object.defineProperties(vr.prototype, {
    onlyShadow: {
        set: function() {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    },
    shadowCameraFov: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
            this.shadow.camera.fov = e
        }
    },
    shadowCameraLeft: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
            this.shadow.camera.left = e
        }
    },
    shadowCameraRight: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
            this.shadow.camera.right = e
        }
    },
    shadowCameraTop: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
            this.shadow.camera.top = e
        }
    },
    shadowCameraBottom: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
            this.shadow.camera.bottom = e
        }
    },
    shadowCameraNear: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
            this.shadow.camera.near = e
        }
    },
    shadowCameraFar: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
            this.shadow.camera.far = e
        }
    },
    shadowCameraVisible: {
        set: function() {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
    },
    shadowBias: {
        set: function(e) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
            this.shadow.bias = e
        }
    },
    shadowDarkness: {
        set: function() {
            console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
    },
    shadowMapWidth: {
        set: function(e) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
            this.shadow.mapSize.width = e
        }
    },
    shadowMapHeight: {
        set: function(e) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
            this.shadow.mapSize.height = e
        }
    }
}),
Object.defineProperties($e.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),
            this.array.length
        }
    },
    dynamic: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),
            35048 === this.usage
        },
        set: function() {
            console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),
            this.setUsage(35048)
        }
    }
}),
$e.prototype.setDynamic = function(e) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),
    this.setUsage(!0 === e ? 35048 : 35044),
    this
}
,
$e.prototype.copyIndicesArray = function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
}
,
$e.prototype.setArray = function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
}
,
ut.prototype.addIndex = function(e) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
    this.setIndex(e)
}
,
ut.prototype.addAttribute = function(e, t) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),
    t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute ? "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
    this.setIndex(t),
    this) : this.setAttribute(e, t) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
    this.setAttribute(e, new $e(arguments[1],arguments[2])))
}
,
ut.prototype.addDrawCall = function(e, t, n) {
    void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
    console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
    this.addGroup(e, t)
}
,
ut.prototype.clearDrawCalls = function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
    this.clearGroups()
}
,
ut.prototype.computeOffsets = function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
}
,
ut.prototype.removeAttribute = function(e) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),
    this.deleteAttribute(e)
}
,
ut.prototype.applyMatrix = function(e) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),
    this.applyMatrix4(e)
}
,
Object.defineProperties(ut.prototype, {
    drawcalls: {
        get: function() {
            return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
            this.groups
        }
    },
    offsets: {
        get: function() {
            return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
            this.groups
        }
    }
}),
or.prototype.dispose = function() {
    console.error("THREE.Scene: .dispose() has been removed.")
}
,
Object.defineProperties(Ve.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE.Material: .wrapAround has been removed.")
        },
        set: function() {
            console.warn("THREE.Material: .wrapAround has been removed.")
        }
    },
    overdraw: {
        get: function() {
            console.warn("THREE.Material: .overdraw has been removed.")
        },
        set: function() {
            console.warn("THREE.Material: .overdraw has been removed.")
        }
    },
    wrapRGB: {
        get: function() {
            return console.warn("THREE.Material: .wrapRGB has been removed."),
            new Ze
        }
    },
    shading: {
        get: function() {
            console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
        },
        set: function(e) {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
            this.flatShading = 1 === e
        }
    },
    stencilMask: {
        get: function() {
            return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."),
            this.stencilFuncMask
        },
        set: function(e) {
            console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."),
            this.stencilFuncMask = e
        }
    }
}),
Object.defineProperties(zt.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
            this.extensions.derivatives
        },
        set: function(e) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
            this.extensions.derivatives = e
        }
    }
}),
sr.prototype.clearTarget = function(e, t, n, i) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),
    this.setRenderTarget(e),
    this.clear(t, n, i)
}
,
sr.prototype.animate = function(e) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),
    this.setAnimationLoop(e)
}
,
sr.prototype.getCurrentRenderTarget = function() {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),
    this.getRenderTarget()
}
,
sr.prototype.getMaxAnisotropy = function() {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),
    this.capabilities.getMaxAnisotropy()
}
,
sr.prototype.getPrecision = function() {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),
    this.capabilities.precision
}
,
sr.prototype.resetGLState = function() {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),
    this.state.reset()
}
,
sr.prototype.supportsFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
    this.extensions.get("OES_texture_float")
}
,
sr.prototype.supportsHalfFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
    this.extensions.get("OES_texture_half_float")
}
,
sr.prototype.supportsStandardDerivatives = function() {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
    this.extensions.get("OES_standard_derivatives")
}
,
sr.prototype.supportsCompressedTextureS3TC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
    this.extensions.get("WEBGL_compressed_texture_s3tc")
}
,
sr.prototype.supportsCompressedTexturePVRTC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
    this.extensions.get("WEBGL_compressed_texture_pvrtc")
}
,
sr.prototype.supportsBlendMinMax = function() {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
    this.extensions.get("EXT_blend_minmax")
}
,
sr.prototype.supportsVertexTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
    this.capabilities.vertexTextures
}
,
sr.prototype.supportsInstancedArrays = function() {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
    this.extensions.get("ANGLE_instanced_arrays")
}
,
sr.prototype.enableScissorTest = function(e) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
    this.setScissorTest(e)
}
,
sr.prototype.initMaterial = function() {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
}
,
sr.prototype.addPrePlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
}
,
sr.prototype.addPostPlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
}
,
sr.prototype.updateShadowMap = function() {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
}
,
sr.prototype.setFaceCulling = function() {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
}
,
sr.prototype.allocTextureUnit = function() {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
}
,
sr.prototype.setTexture = function() {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
}
,
sr.prototype.setTexture2D = function() {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
}
,
sr.prototype.setTextureCube = function() {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
}
,
sr.prototype.getActiveMipMapLevel = function() {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),
    this.getActiveMipmapLevel()
}
,
Object.defineProperties(sr.prototype, {
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
            this.shadowMap.enabled = e
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
            this.shadowMap.type = e
        }
    },
    shadowMapCullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        }
    },
    context: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),
            this.getContext()
        }
    },
    vr: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),
            this.xr
        }
    },
    gammaInput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),
            !1
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
        }
    },
    gammaOutput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),
            !1
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),
            this.outputEncoding = !0 === e ? 3001 : 3e3
        }
    },
    toneMappingWhitePoint: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),
            1
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
        }
    }
}),
Object.defineProperties(Ji.prototype, {
    cullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        }
    },
    renderReverseSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        }
    },
    renderSingleSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        }
    }
}),
Object.defineProperties(M.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
            this.texture.wrapS
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
            this.texture.wrapS = e
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
            this.texture.wrapT
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
            this.texture.wrapT = e
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
            this.texture.magFilter
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
            this.texture.magFilter = e
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
            this.texture.minFilter
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
            this.texture.minFilter = e
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
            this.texture.anisotropy
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
            this.texture.anisotropy = e
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
            this.texture.offset
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
            this.texture.offset = e
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
            this.texture.repeat
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
            this.texture.repeat = e
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
            this.texture.format
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
            this.texture.format = e
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            this.texture.type
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
            this.texture.type = e
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
            this.texture.generateMipmaps
        },
        set: function(e) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
            this.texture.generateMipmaps = e
        }
    }
}),
Ot.prototype.updateCubeMap = function(e, t) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),
    this.update(e, t)
}
,
Ot.prototype.clear = function(e, t, n, i) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),
    this.renderTarget.clear(e, t, n, i)
}
,
g.crossOrigin = void 0,
g.loadTexture = function(e, t, n, i) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    const r = new gr;
    r.setCrossOrigin(this.crossOrigin);
    const a = r.load(e, n, void 0, i);
    return t && (a.mapping = t),
    a
}
,
g.loadTextureCube = function(e, t, n, i) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    const r = new fr;
    r.setCrossOrigin(this.crossOrigin);
    const a = r.load(e, n, void 0, i);
    return t && (a.mapping = t),
    a
}
,
g.loadCompressedTexture = function() {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
}
,
g.loadCompressedTextureCube = function() {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
}
,
"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: "128"
    }
})),
"undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "128");
export {Tr as A, Pt as B, hr as M, Ht as P, or as S, cr as T, sr as W, Rt as a, Er as b, gr as c, Je as d, lr as e, d as f};

