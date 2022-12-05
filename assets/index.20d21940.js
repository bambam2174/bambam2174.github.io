import {S as n, P as o, W as t, T as e, M as i, a as s, b as a, A as r, c as d, B as c, d as w, e as l, f as p} from "./vendor.37082f73.js";
const g = new n
  , m = new o(75,window.innerWidth / window.innerHeight,.1,1e3)
  , u = new t({
    canvas: document.querySelector("#bg")
});
u.setPixelRatio(window.devicePixelRatio),
u.setSize(window.innerWidth, window.innerHeight),
m.position.setZ(30),
m.position.setX(-3),
u.render(g, m);
const f = new e(10,3,16,100)
  , y = new i({
    color: 16737095
})
  , h = new s(f,y);
g.add(h);
const z = new a(16777215);
z.position.set(5, 5, 5);
const S = new r(16777215);
g.add(z, S),
Array(200).fill().forEach((function() {
    const n = new l(.25,24,24)
      , o = new i({
        color: 16777215
    })
      , t = new s(n,o)
      , [e,a,r] = Array(3).fill().map((()=>p.randFloatSpread(100)));
    t.position.set(e, a, r),
    g.add(t)
}
));
const b = (new d).load("space.jpg");
g.background = b;
let v = location.hash ? location.hash.substr(1) : "bozkurt.png";
const x = (new d).load(v)
  , j = new s(new c(3,3,3),new w({
    map: x
}));
g.add(j),
g.addEventListener("click", (function(n) {
    let o = JSON.stringify(n);
    console.log("szvEventObject", o);
    let t = JSON.parse(sessionStorage.getItem("arrEvents")) || [];
    t.push(o),
    sessionStorage.setItem("arrEvents", JSON.stringify(t))
}
));
const E = (new d).load("moon.jpg")
  , A = (new d).load("normal.jpg")
  , O = new s(new l(3,32,32),new i({
    map: E,
    normalMap: A
}));
function k() {
    const n = document.body.getBoundingClientRect().top;
    O.rotation.x += .05,
    O.rotation.y += .075,
    O.rotation.z += .05,
    j.rotation.y += .01,
    j.rotation.z += .01,
    m.position.z = -.01 * n,
    m.position.x = -2e-4 * n,
    m.rotation.y = -2e-4 * n
}
g.add(O),
O.position.z = 30,
O.position.setX(-10),
j.position.z = -5,
j.position.x = 2,
document.body.onscroll = k,
k(),
function n() {
    requestAnimationFrame(n),
    h.rotation.x += .01,
    h.rotation.y += .005,
    h.rotation.z += .01,
    O.rotation.x += .005,
    u.render(g, m)
}();

