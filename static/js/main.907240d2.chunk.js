(this["webpackJsonpthe-gallery"]=this["webpackJsonpthe-gallery"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var s=a(7),r=a(3),n=a(1),o=a(28),c=a.n(o),i=(a(95),a(0)),l=a(6),j=a(110),u=a(45),b=function(e){var t=e.position,a=Object(n.useMemo)((function(){return(new i.TextureLoader).load("assets/Textures/Moon/Moon.jpg")}),[]);return Object(r.jsxs)("mesh",{position:t,children:[Object(r.jsx)("sphereBufferGeometry",{attach:"geometry",args:[7,20,20]}),Object(r.jsx)("meshPhysicalMaterial",{attach:"material",color:"white",fog:!1,children:Object(r.jsx)("primitive",{attach:"map",object:a})})]})},p=a(22),m=a(27),d=function(e){e.scale;var t,a,o=e.position,c=(e.rotation,e.modelUrl),u=e.mapUrl,b=e.normalMapUrl,d=Object(l.g)(p.a,c,Object(m.a)("https://www.gstatic.com/draco/versioned/decoders/1.4.0/")).scene,O=Object(j.c)((function(){return{type:"static",args:[70,50,1],position:[0,0,-17]}})),h=Object(s.a)(O,1)[0],f=Object(j.c)((function(){return{type:"static",args:[70,50,1],position:[0,0,44]}})),g=Object(s.a)(f,1)[0],x=Object(j.c)((function(){return{type:"static",args:[1,50,80],position:[-39.5,0,0]}})),w=Object(s.a)(x,1)[0],y=Object(j.c)((function(){return{type:"static",args:[1,50,80],position:[39.5,0,0]}})),v=Object(s.a)(y,1)[0],M=Object(j.c)((function(){return{type:"static",args:[150,1,150],position:[0,30,0]}})),S=Object(s.a)(M,1)[0];return(t=Object(n.useMemo)((function(){return(new i.TextureLoader).load(u)}),[u])).wrapS=i.RepeatWrapping,t.wrapT=i.RepeatWrapping,t.repeat.set(20,20),(a=Object(n.useMemo)((function(){return(new i.TextureLoader).load(b)}),[b])).wrapS=i.RepeatWrapping,a.wrapT=i.RepeatWrapping,a.repeat.set(20,20),d.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.side=i.DoubleSide,e.material.normalMap=a,e.material.map=t,e.material.metalness=0,e.material.roughness=1)})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("mesh",{ref:h}),Object(r.jsx)("mesh",{ref:w}),Object(r.jsx)("mesh",{ref:v}),Object(r.jsx)("mesh",{ref:g}),Object(r.jsx)("mesh",{ref:S}),Object(r.jsx)("primitive",{position:o,object:d,dispose:null})]})},O=function(e){var t,a,s=e.scale,o=e.position,c=e.rotation,j=e.modelUrl,u=e.mapUrl,b=(e.normalMapUrl,Object(l.g)(p.a,j,Object(m.a)("https://www.gstatic.com/draco/versioned/decoders/1.4.0/")).scene);return t=new i.MeshPhysicalMaterial,(a=Object(n.useMemo)((function(){return(new i.TextureLoader).load(u)}),[u])).flipY=!1,b.traverse((function(e){e.isMesh&&(e.material=t,e.castShadow=!0,e.receiveShadow=!0,e.material.metalness=.9,e.material.clearcoat=1,e.material.clearcoatRoughness=.6,e.material.roughness=.9,e.material.map=a)})),Object(r.jsx)("primitive",{scale:s,position:o,rotation:c,object:b,dispose:null})},h=function(e){var t=e.scale,a=e.position,s=e.rotation,n=e.url,o=Object(l.g)(p.a,n,Object(m.a)("https://www.gstatic.com/draco/versioned/decoders/1.4.0/")).scene,c=new i.MeshPhysicalMaterial({color:"skyblue"});return o.traverse((function(e){e.isMesh&&(e.material=c,e.material.transparent=!0,e.material.opacity=.2,e.material.clearcoat=1,e.material.roughness=0,e.material.metalness=1)})),Object(r.jsx)("primitive",{renderOrder:1,scale:t,position:a,rotation:s,object:o,dispose:null})},f=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{position:[0,0,-13.5],modelUrl:"assets/3D/Wall/scene.gltf",mapUrl:"assets/3D/Wall/Textures/White_Wall.jpg",normalMapUrl:"assets/3D/Wall/Textures/White_Wall_NORMAL.jpg"}),Object(r.jsx)(O,{scale:[.008,.008,.008],position:[6.5,8.5,-15],rotation:[0,Math.PI,0],modelUrl:"assets/3D/WindowNoGlassL/scene.gltf",mapUrl:"assets/3D/WindowNoGlassL/Textures/Material_49_baseColor.png"}),Object(r.jsx)(O,{scale:[.008,.008,.008],position:[-6.5,8.5,-15],rotation:[0,Math.PI,0],modelUrl:"assets/3D/WindowNoGlassR/scene.gltf",mapUrl:"assets/3D/WindowNoGlassR/Textures/Material_49_baseColor.png"}),Object(r.jsx)(h,{scale:[.008,.008,.008],position:[6.5,8.5,-15],rotation:[0,0,0],url:"assets/3D/WindowGlassL/scene.gltf"}),Object(r.jsx)(h,{scale:[.008,.008,.008],position:[-6.5,8.5,-15],rotation:[0,0,0],url:"assets/3D/WindowGlassR/scene.gltf"}),Object(r.jsx)(O,{scale:[2.7,2.7,2.7],position:[0,27,13.2],rotation:[0,0,0],modelUrl:"assets/3D/RoofNoGlass/scene.gltf",mapUrl:"assets/3D/RoofNoGlass/Textures/Material_49_baseColor.png"}),Object(r.jsx)(h,{scale:[2.7,2.7,2.7],position:[0,27,13.2],rotation:[0,0,0],url:"assets/3D/RoofGlass/scene.gltf"})]})},g=function(){var e,t,a,o,c=4.6,l=Object(j.f)((function(){return{rotation:[-Math.PI/2,0,0],position:[0,.1,22]}})),b=Object(s.a)(l,1)[0];return(t=Object(n.useMemo)((function(){return(new i.TextureLoader).load("assets/Textures/BazaltMarble/BAZALT-diffuse.jpg")}),[])).wrapS=i.MirroredRepeatWrapping,t.wrapT=i.MirroredRepeatWrapping,t.repeat.set(c,c),(e=Object(n.useMemo)((function(){return(new i.TextureLoader).load("assets/Textures/BazaltMarble/BAZALT-ao.jpg")}),[])).wrapS=i.MirroredRepeatWrapping,e.wrapT=i.MirroredRepeatWrapping,e.repeat.set(c,c),(a=Object(n.useMemo)((function(){return(new i.TextureLoader).load("assets/Textures/BazaltMarble/BAZALT-normal.jpg")}),[])).wrapS=i.MirroredRepeatWrapping,a.wrapT=i.MirroredRepeatWrapping,a.repeat.set(c,c),(o=Object(n.useMemo)((function(){return(new i.TextureLoader).load("assets/Textures/Grass/GrassGreenTexture0002.jpg")}),[])).wrapS=i.RepeatWrapping,o.wrapT=i.RepeatWrapping,o.repeat.set(70,70),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.3,22],children:[Object(r.jsx)("planeBufferGeometry",{attach:"geometry",args:[1e3,1e3]}),Object(r.jsx)("meshLambertMaterial",{attach:"material",children:Object(r.jsx)("primitive",{attach:"map",object:o})})]}),Object(r.jsx)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.1,22],children:Object(r.jsx)(u.a,{children:Object(r.jsx)("planeBufferGeometry",{attach:"geometry",args:[70,75]})})}),Object(r.jsxs)("mesh",{ref:b,receiveShadow:!0,children:[Object(r.jsx)("planeBufferGeometry",{attach:"geometry",args:[70,75]}),Object(r.jsxs)("meshPhysicalMaterial",{attach:"material",reflectivity:0,clearcoat:1,transparent:!0,roughness:.5,metalness:.3,children:[Object(r.jsx)("primitive",{attach:"map",object:t}),Object(r.jsx)("primitive",{attach:"alphaMap",object:e}),Object(r.jsx)("primitive",{attach:"normalMap",object:a})]})]})]})},x=function(e){var t=e.url,a=e.scale,s=e.position,n=e.rotation,o=e.metalness,c=e.roughness,i=Object(l.g)(p.a,t,Object(m.a)("https://www.gstatic.com/draco/versioned/decoders/1.4.0/")).scene;return i.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.toneMapped=!1,e.material.metalness=o,e.material.roughness=c)})),Object(r.jsx)("primitive",{scale:a,position:s,rotation:n,object:i,dispose:null})},w=function(e){var t,a,o,c=e.position,l=e.size,u=Object(j.c)((function(){return{type:"static",args:[.1,16.5,2],position:c}})),b=Object(s.a)(u,1)[0];return t=Object(n.useMemo)((function(){return(new i.TextureLoader).load("assets/Textures/BiancoMarble/BIANCO-ao.jpg")}),[]),a=Object(n.useMemo)((function(){return(new i.TextureLoader).load("assets/Textures/BiancoMarble/BIANCO-diffuse.jpg")}),[]),o=Object(n.useMemo)((function(){return(new i.TextureLoader).load("assets/Textures/BiancoMarble/BIANCO-normal.jpg")}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("mesh",{ref:b,receiveShadow:!0,castShadow:!0,children:[Object(r.jsx)("boxBufferGeometry",{attach:"geometry",args:l}),Object(r.jsxs)("meshPhysicalMaterial",{attach:"material",clearcoat:1,roughness:.5,children:[Object(r.jsx)("primitive",{attach:"alphaMap",object:t}),Object(r.jsx)("primitive",{attach:"map",object:a}),Object(r.jsx)("primitive",{attach:"normalMap",object:o})]})]})})},y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{url:"assets/3D/Portrait/scene.gltf",scale:[4,4,4],position:[19.3,7,0],rotation:[0,-Math.PI,0],metalness:.9,roughness:.9}),Object(r.jsx)(w,{position:[20,5,0],size:[1,18,11]}),Object(r.jsx)(x,{url:"assets/3D/Hands/scene.gltf",scale:[.1,.1,.1],position:[34.7,12,12],rotation:[0,-Math.PI/2,Math.PI],metalness:0,roughness:.9}),Object(r.jsx)(x,{url:"assets/3D/Wedding/scene.gltf",scale:[2.5,2.5,2.5],position:[19.3,7,25],rotation:[Math.PI/2,Math.PI,0],metalness:0,roughness:.3}),Object(r.jsx)(w,{position:[20,5,25],size:[1,18,11]}),Object(r.jsx)(x,{url:"assets/3D/Wilson/scene.gltf",scale:[2.5,2.5,2.5],position:[-19.3,7,0],rotation:[-Math.PI/2,0,0],metalness:0,roughness:.3}),Object(r.jsx)(w,{position:[-20,5,0],size:[1,18,11]}),Object(r.jsx)(x,{url:"assets/3D/OldMan/scene.gltf",scale:[4,4,4],position:[-19.4,7,25],rotation:[0,0,0],metalness:.9,roughness:.9}),Object(r.jsx)(w,{position:[-20,5,25],size:[1,18,11]}),Object(r.jsx)(x,{url:"assets/3D/Girl/scene.gltf",scale:[6.5,6.5,6.5],position:[-34.6,10,12],rotation:[-Math.PI/2,0,0],metalness:.7,roughness:.8})]})},v=function(e){var t=e.url,a=e.scale,n=e.position,o=e.rotation,c=e.physicsSize,i=e.physicsPosition,u=Object(j.c)((function(){return{type:"static",args:c,position:i}})),b=Object(s.a)(u,1)[0],d=Object(l.g)(p.a,t,Object(m.a)("https://www.gstatic.com/draco/versioned/decoders/1.4.0/")).scene;return d.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.toneMapped=!1,e.material.metalness=.1,e.material.roughness=1,e.material.clearcoat=.9,e.material.clearcoatRoughness=.1)})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("mesh",{ref:b}),Object(r.jsx)("primitive",{scale:a,position:n,rotation:o,object:d,dispose:null})]})},M=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v,{url:"assets/3D/Bench/scene.gltf",scale:[.11,.11,.11],position:[0,0,3],rotation:[0,0,0],physicsSize:[10,3,1],physicsPosition:[0,0,3]}),Object(r.jsx)(v,{url:"assets/3D/SmallBench/scene.gltf",scale:[.09,.09,.09],position:[0,1.5,21.5],rotation:[0,0,0],physicsSize:[8,3,1],physicsPosition:[0,0,21.5]})]})},S=a(13),L=function(e){var t=Object(n.useRef)(),a=Object(l.h)().setDefaultCamera;return Object(n.useEffect)((function(){a(t.current)}),[a]),Object(r.jsx)("perspectiveCamera",Object(S.a)({ref:t},e))},T=a(40);Object(l.e)({PointerLockControlsExt:T.a});var P=function(e){var t=Object(l.h)(),a=t.camera,s=t.gl,o=Object(n.useRef)();return Object(n.useEffect)((function(){document.addEventListener("click",(function(){o.current.lock()}))}),[]),Object(r.jsx)("pointerLockControlsExt",Object(S.a)({ref:o,args:[a,s.domElement]},e))},B=a(12),N=function(e){return{KeyW:"forward",KeyS:"backward",KeyA:"left",KeyD:"right",Space:"jump",ShiftLeft:"speed"}[e]},D=function(){var e=Object(n.useState)({forward:!1,backward:!1,left:!1,right:!1,jump:!1,speed:15}),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(e){switch(e.code){case"KeyW":case"KeyA":case"KeyS":case"KeyD":case"Space":return void r((function(t){return Object(S.a)(Object(S.a)({},t),{},Object(B.a)({},N(e.code),!0))}));case"ShiftLeft":return void r((function(t){return Object(S.a)(Object(S.a)({},t),{},Object(B.a)({},N(e.code),30))}));default:return}},t=function(e){switch(e.code){case"KeyW":case"KeyA":case"KeyS":case"KeyD":case"Space":return void r((function(t){return Object(S.a)(Object(S.a)({},t),{},Object(B.a)({},N(e.code),!1))}));case"ShiftLeft":return void r((function(t){return Object(S.a)(Object(S.a)({},t),{},Object(B.a)({},N(e.code),15))}));default:return}};return document.addEventListener("keydown",e),document.addEventListener("keyup",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}}),[]),a},R=function(e){var t=Object(l.h)().camera,a=D(),o=a.forward,c=a.backward,u=a.left,b=a.right,p=a.jump,m=a.speed,d=Object(j.e)((function(){return Object(S.a)({mass:1,type:"Dynamic",position:[-11,5,33],rotation:[0,0,Math.PI/2],args:5},e)})),O=Object(s.a)(d,2),h=O[0],f=O[1],g=Object(n.useRef)([0,0,0]);return Object(n.useEffect)((function(){f.velocity.subscribe((function(e){return g.current=e}))}),[f.velocity]),Object(l.f)((function(){t.position.copy(h.current.position);var e=new i.Vector3(0,0,Number(c)-Number(o)),a=new i.Vector3(Number(u)-Number(b),0,0),s=new i.Vector3;s.subVectors(e,a).normalize().multiplyScalar(m).applyEuler(t.rotation),f.velocity.set(s.x,g.current[1],s.z),p&&Math.abs(g.current[1].toFixed(2))<100&&f.velocity.set(g.current[0],10,g.current[2])})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(P,{}),Object(r.jsx)("mesh",{ref:h})]})},W=function(e){var t=e.position,a=e.target,s=e.intensity,o=e.penumbra,c=e.sNormalBias,l=e.sBias,j=e.angle,u=e.decay,b=Object(n.useMemo)((function(){return new i.SpotLight(16777215)}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("primitive",{object:b,castShadow:!0,position:t,intensity:s,penumbra:o,"shadow-bias":l,"shadow-normalBias":c,angle:j,decay:u}),Object(r.jsx)("primitive",{object:b.target,position:a})]})},C=function(e){var t=e.position,a=e.intensity,s=Object(n.useMemo)((function(){return new i.PointLight(16777215)}),[]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("primitive",{object:s,position:t,intensity:a})})},I=function(e){var t=e.position,a=e.target,s=e.intensity,o=e.color,c=e.shadowCamBot,l=e.shadowCamTop,j=e.shadowCamL,u=e.shadowCamR,b=Object(n.useMemo)((function(){return new i.DirectionalLight}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("primitive",{color:o,object:b,castShadow:!0,position:t,intensity:s,"shadow-camera-bottom":c,"shadow-camera-top":l,"shadow-camera-left":j,"shadow-camera-right":u,decay:2}),Object(r.jsx)("primitive",{object:b.target,position:a})]})},E=function(e){var t=e.night,a=e.performance;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("ambientLight",{intensity:t?.07:.2}),Object(r.jsx)(I,{position:[29,50,-60],target:[-5,-3,50],intensity:t?.2:.3,color:t?"skyblue":"lightgoldenrodyellow",shadowCamBot:-30,shadowCamTop:30,shadowCamL:53,shadowCamR:-53}),Object(r.jsx)(C,{intensity:a?.25:.6,position:[0,19,13]}),a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(W,{position:[12,19.5,0],target:[21,4,0],intensity:1.5,penumbra:.5,sNormalBias:.05,sBias:0,angle:Math.PI/10,decay:2}),Object(r.jsx)(W,{position:[12,19.5,25],target:[21,4,25],intensity:1.5,penumbra:.5,sNormalBias:.05,sBias:0,angle:Math.PI/10,decay:2}),Object(r.jsx)(W,{position:[-12,19.5,0],target:[-21,4,0],intensity:1.5,penumbra:.5,sNormalBias:.05,sBias:0,angle:Math.PI/10,decay:2}),Object(r.jsx)(W,{position:[-12,19.5,25],target:[-21,4,25],intensity:1.5,penumbra:.5,sNormalBias:.05,sBias:0,angle:Math.PI/10,decay:2}),Object(r.jsx)(W,{position:[28,18,12],target:[34.5,13,12],intensity:1,penumbra:.5,sNormalBias:0,sBias:-.001,angle:Math.PI/4,decay:2}),Object(r.jsx)(W,{position:[-28,18,12],target:[-34.5,13,12],intensity:1,penumbra:.5,sNormalBias:0,sBias:-.001,angle:Math.PI/4,decay:2})]}):null]})},k=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),p=Object(s.a)(c,2),m=p[0],d=p[1];return Object(n.useEffect)((function(){var e=function(e){switch(e.code){case"KeyN":return void o(!a);case"KeyP":return void d(!m);default:return}};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[a,m]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{onCreated:function(e){var t=e.gl;t.shadowMap.enabled=!0,t.shadowMap.type=i.PCFSoftShadowMap},children:[Object(r.jsx)(L,{fov:60}),a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u.c,{}),Object(r.jsx)(b,{position:[110,170,-250]}),Object(r.jsx)("fog",{attach:"fog",args:["#272730",30,250]})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u.b,{sunPosition:[110,170,-250]}),Object(r.jsx)("fog",{attach:"fog",args:["#f0f4f5",30,250]})]}),Object(r.jsx)(E,{night:a,performance:m}),Object(r.jsxs)(j.a,{gravity:[0,-30,0],children:[Object(r.jsxs)(n.Suspense,{fallback:null,children:[Object(r.jsx)(g,{}),Object(r.jsx)(f,{}),Object(r.jsx)(y,{}),Object(r.jsx)(M,{})]}),Object(r.jsx)(R,{})]})]})})},F=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,112)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),s(e),r(e),n(e),o(e)}))},G=a(76),U=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(0),l=Object(s.a)(c,2),j=l[0],u=l[1];return Object(n.useEffect)((function(){i.DefaultLoadingManager.onLoad=function(){return o(!0)},i.DefaultLoadingManager.onProgress=function(e,t,a){return u(t/a*200)}}),[]),Object(G.b)(a,null,{from:{opacity:1,width:0},leave:{opacity:0},update:{width:j}}).map((function(e){var t=e.item,a=e.key,s=e.props,n=s.opacity,o=s.width;return!t&&Object(r.jsxs)(G.a.div,{className:"loading",style:{opacity:n},children:[Object(r.jsx)("h1",{className:"welcome",children:"The Gallery"}),Object(r.jsx)("div",{className:"loading-bar-container",children:Object(r.jsx)(G.a.div,{className:"loading-bar",style:{width:o}})})]},a)}))},A=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){var e=function(e){null===document.pointerLockElement?o(!1):o(!0)};return document.addEventListener("pointerlockchange",e),function(){document.removeEventListener("pointerlockchange",e)}})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{}),Object(r.jsxs)("div",{className:a?"":"overlay",children:[Object(r.jsx)("div",{className:"start",children:"Click to Explore"}),Object(r.jsx)("img",{className:a?"":"controlsL",src:"./assets/Images/ControlsL.png",alt:"Move: WASD\tJump: SPACE Run: SHIFT"}),Object(r.jsx)("img",{className:a?"":"controlsR",src:"./assets/Images/ControlsR.png",alt:"Look: MOUSE"}),Object(r.jsx)("img",{className:a?"":"controlsTR",src:"./assets/Images/ControlsTR.png",alt:"Toggle Performance: P Toggle Night Mode: N"})]}),Object(r.jsx)("div",{className:"dot",style:{pointerEvents:a?"none":"all"}}),Object(r.jsx)(U,{})]})};c.a.render(Object(r.jsx)(A,{}),document.getElementById("root")),F()},95:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.907240d2.chunk.js.map