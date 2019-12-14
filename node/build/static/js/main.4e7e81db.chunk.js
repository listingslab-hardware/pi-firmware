(this["webpackJsonppi-firmware"]=this["webpackJsonppi-firmware"]||[]).push([[0],{102:function(e,t,a){e.exports=a(133)},133:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(0),c=a.n(r),o=a(19),i=a.n(o),l=a(10),s=a(11),u=a(13),m=a(12),p=a(14),C=a(16),d=a(95),h=a(8),b=a(6),f=a(159),g=a(99),E={palette:{type:"light",primary:{main:"#333333"},secondary:{main:"#F1DD3F"},background:{default:"#F1DD3F",paper:"#F1DD3F",appBar:"#F1DD3F",contentFrame:"#F1DD3F"},text:{primary:"#333333",secondary:"#333333",disabled:"#333333",hint:"#333333",icon:"#333333",divider:"#333333",lightDivider:"#333333"},input:{helperText:"#333333",labelText:"#333333",inputText:"#333333",disabled:"#333333"},action:{active:"#333333",disabled:"#333333"}}},O=function(e){return{view:{margin:"auto",maxWidth:1200},gridItem:{padding:e.spacing(.5)},map:{height:350},media:{height:350},pad:{},cardMinHeight:{minHeight:175},grow:{flexGrow:1},avatar:{background:"rgba(255,255,255, 0.125)"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},padTop:{marginTop:e.spacing()},centered:{textAlign:"center"}}},j=a(5),v=a.n(j),y=a(34);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var k=function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},O(e))},x=a(153),M=a(20),D=a(69),T=a.n(D),N=Object(M.b)("WEATHER/SAVE"),S=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){!function(){var e=vt(),t="".concat("https://api.openweathermap.org/data/2.5/weather","?lat=").concat(-27.19,"&lon=").concat(153.11,"&APPID=").concat("ef02850e1860cd0819ca4a546c0b4d7f");T.a.get(t).then((function(t){e.dispatch({type:"WEATHER/SAVE",data:t.data})})).catch((function(t){e.dispatch({type:"WEATHER/ERROR",error:t})}))}()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.cloud,n=e.humidity,r=e.map,o=e.pressure,i=e.temperature,l=e.webcam;return c.a.createElement("div",{className:v()(t.view)},c.a.createElement(x.a,{container:!0},l.open?c.a.createElement(x.a,{item:!0,xs:12,sm:8,md:8,lg:8,xl:8,className:v()(t.gridItem)},c.a.createElement(et,null)):null,r.open?c.a.createElement(x.a,{item:!0,xs:12,sm:4,md:4,lg:4,xl:4,className:v()(t.gridItem)},c.a.createElement(qe,null)):null,a.open?c.a.createElement(x.a,{item:!0,xs:12,sm:6,md:3,lg:3,xl:2,className:v()(t.gridItem)},c.a.createElement(He,null)):null,i.open?c.a.createElement(x.a,{item:!0,xs:12,sm:6,md:3,lg:3,xl:2,className:v()(t.gridItem)},c.a.createElement(Xe,null)):null,n.open?c.a.createElement(x.a,{item:!0,xs:12,sm:6,md:3,lg:3,xl:2,className:v()(t.gridItem)},c.a.createElement(Be,null)):null,o.open?c.a.createElement(x.a,{item:!0,xs:12,sm:6,md:3,lg:3,xl:2,className:v()(t.gridItem)},c.a.createElement(_e,null)):null))}}]),t}(r.Component),W=Object(C.b)((function(e){return{weather:e.weather,webcam:e.system.webcam,temperature:e.system.temperature,humidity:e.system.humidity,map:e.system.map,pressure:e.system.pressure,cloud:e.system.cloud}}),null)(Object(b.a)(k,{withTheme:!0})(Object(h.f)(S))),P=a(92),F=a.n(P),A=a(85),I=a.n(A),R=a(44),L=a.n(R),z=a(89),H=a.n(z),Z=a(53),B=a.n(Z),G=a(88),U=a.n(G),J=a(93),q=a.n(J),Y=a(90),_=a.n(Y),V=a(87),X=a.n(V),$=a(91),K=a.n($),Q=a(86),ee=a.n(Q),te=a(84),ae=a.n(te),ne=a(82),re=a.n(ne),ce=a(83),oe=a.n(ce),ie=a(81),le=a.n(ie),se=a(80),ue=a.n(se),me=a(79),pe=a.n(me),Ce=a(78),de=a.n(Ce),he=a(77),be=a.n(he),fe=a(76),ge=a.n(fe),Ee=a(75),Oe=a.n(Ee),je=a(74),ve=a.n(je),ye=a(73),we=a.n(ye),ke=function(e){return c.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 496 484"}),c.a.createElement("g",{id:"githubIcon",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},c.a.createElement("g",{fill:"#212121"},c.a.createElement("g",{id:"github"},c.a.createElement("path",{d:"M165.9,389.4 C165.9,391.4 163.6,393 160.7,393 C157.4,393.3 155.1,391.7 155.1,389.4 C155.1,387.4 157.4,385.8 160.3,385.8 C163.3,385.5 165.9,387.1 165.9,389.4 Z M134.8,384.9 C134.1,386.9 136.1,389.2 139.1,389.8 C141.7,390.8 144.7,389.8 145.3,387.8 C145.9,385.8 144,383.5 141,382.6 C138.4,381.9 135.5,382.9 134.8,384.9 Z M179,383.2 C176.1,383.9 174.1,385.8 174.4,388.1 C174.7,390.1 177.3,391.4 180.3,390.7 C183.2,390 185.2,388.1 184.9,386.1 C184.6,384.2 181.9,382.9 179,383.2 Z M244.8,0 C106.1,0 0,105.3 0,244 C0,354.9 69.8,449.8 169.5,483.2 C182.3,485.5 186.8,477.6 186.8,471.1 C186.8,464.9 186.5,430.7 186.5,409.7 C186.5,409.7 116.5,424.7 101.8,379.9 C101.8,379.9 90.4,350.8 74,343.3 C74,343.3 51.1,327.6 75.6,327.9 C75.6,327.9 100.5,329.9 114.2,353.7 C136.1,392.3 172.8,381.2 187.1,374.6 C189.4,358.6 195.9,347.5 203.1,340.9 C147.2,334.7 90.8,326.6 90.8,230.4 C90.8,202.9 98.4,189.1 114.4,171.5 C111.8,165 103.3,138.2 117,103.6 C137.9,97.1 186,130.6 186,130.6 C206,125 227.5,122.1 248.8,122.1 C270.1,122.1 291.6,125 311.6,130.6 C311.6,130.6 359.7,97 380.6,103.6 C394.3,138.3 385.8,165 383.2,171.5 C399.2,189.2 409,203 409,230.4 C409,326.9 350.1,334.6 294.2,340.9 C303.4,348.8 311.2,363.8 311.2,387.3 C311.2,421 310.9,462.7 310.9,470.9 C310.9,477.4 315.5,485.3 328.2,483 C428.2,449.8 496,354.9 496,244 C496,105.3 383.5,0 244.8,0 Z M97.2,344.9 C95.9,345.9 96.2,348.2 97.9,350.1 C99.5,351.7 101.8,352.4 103.1,351.1 C104.4,350.1 104.1,347.8 102.4,345.9 C100.8,344.3 98.5,343.6 97.2,344.9 Z M86.4,336.8 C85.7,338.1 86.7,339.7 88.7,340.7 C90.3,341.7 92.3,341.4 93,340 C93.7,338.7 92.7,337.1 90.7,336.1 C88.7,335.5 87.1,335.8 86.4,336.8 Z M118.8,372.4 C117.2,373.7 117.8,376.7 120.1,378.6 C122.4,380.9 125.3,381.2 126.6,379.6 C127.9,378.3 127.3,375.3 125.3,373.4 C123.1,371.1 120.1,370.8 118.8,372.4 Z M107.4,357.7 C105.8,358.7 105.8,361.3 107.4,363.6 C109,365.9 111.7,366.9 113,365.9 C114.6,364.6 114.6,362 113,359.7 C111.6,357.4 109,356.4 107.4,357.7 Z",id:"Shape",fillRule:"nonzero"})))))},xe=function(e){return c.a.createElement("svg",Object.assign({},e,{viewBox:"0 0 239 304"}),c.a.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},c.a.createElement("g",{transform:"translate(-10.000000, 0.000000)",fillRule:"nonzero"},c.a.createElement("g",null,c.a.createElement("path",{d:"M74.8512742,0.004647875 C73.3103995,0.0520562 71.6511395,0.620026525 69.7681588,2.10083949 C65.1585852,0.328139975 60.6860401,-0.288168251 56.687969,3.32137147 C50.5142165,2.52286655 48.5081896,4.17100302 46.9878226,6.09522327 C45.6324494,6.06733602 36.8467605,4.70550865 32.8169956,10.6994083 C22.6917802,9.50490438 19.4916454,16.6384629 23.1177813,23.2914312 C21.0492991,26.4835918 18.9062436,29.6376398 23.7423342,35.7244968 C22.0318048,39.1137273 23.0926128,42.791126 27.1223775,47.2410015 C26.0597054,52.0069326 28.1496274,55.3682758 31.8997417,57.9887476 C31.1978186,64.5097162 37.8963822,68.3014527 39.895884,69.6521252 C40.6639909,73.4512981 42.2645242,77.0375986 49.914832,79.0194525 C51.1769883,84.6824233 55.7744438,85.6603362 60.2274132,86.8483332 C45.5112675,95.3790428 32.8915691,106.601802 32.9773286,134.140461 L30.8212226,137.974958 C13.9471066,148.20772 -1.23419123,181.097943 22.5062787,207.830659 C24.0564751,216.198694 26.6572255,222.209327 28.9727323,228.861365 C32.4357386,255.66659 55.0380307,268.218641 61.000181,269.703172 C69.735533,276.338478 79.0395077,282.634489 91.6312412,287.045323 C103.49868,299.251573 116.357013,303.904096 129.28526,303.896677 C129.475422,303.896677 155.644191,299.252502 167.513494,287.045323 C180.103363,282.634489 189.407337,276.338478 198.144554,269.703172 C204.10484,268.218641 226.707132,255.66659 230.170139,228.861365 C232.485646,222.209327 235.086396,216.198694 236.637524,207.830659 C260.37613,181.095154 245.195765,148.204001 228.32258,137.97124 L226.162746,134.136743 C226.248505,106.600872 213.628807,95.3771838 198.912661,86.8446148 C203.364699,85.656618 207.964019,84.6787051 209.22431,79.0157341 C216.874617,77.0329507 218.476084,73.4475799 219.243259,69.6484068 C221.243693,68.2977345 227.941324,64.505998 227.241265,57.9850293 C230.989514,55.3645574 233.080369,52.0022847 232.016765,47.2372832 C236.047461,42.7874078 237.107337,39.1100089 235.396809,35.7198489 C240.234763,29.6367101 238.087979,26.4826621 236.022294,23.2905015 C239.646564,16.6375333 236.448295,9.50304522 226.31935,10.6984787 C222.292381,4.70457907 213.507624,6.06547687 212.148523,6.09336413 C210.629088,4.17007345 208.623061,2.52193698 202.44931,3.32044189 C198.451237,-0.289097825 193.980556,0.326280825 189.369118,2.09990993 C183.893561,-2.2086702 180.271153,1.24470093 176.132326,2.5507538 C169.502742,0.3904215 167.986103,3.34925873 164.729106,4.55491749 C157.499207,3.03134407 155.302085,6.34806767 151.837215,9.84884713 L147.804653,9.76890367 C136.900145,16.1773937 131.482381,29.2267675 129.562114,35.9355104 C127.641846,29.225838 122.236201,16.1764641 111.333557,9.76890367 L107.301928,9.84884713 C103.831464,6.34806767 101.635275,3.03134407 94.405375,4.55491749 C91.1474456,3.34925873 89.6373326,0.3904215 83.0021564,2.5507538 C80.2858172,1.69368565 77.7876053,-0.08738005 74.8466134,0.0037183 L0,131.070075",fill:"#000000"}),c.a.createElement("path",{d:"M53.1410676,28.197728 C82.0718522,43.0718575 98.8909702,55.1042765 108.105457,65.3519113 C103.386819,84.2120585 78.770111,85.0728448 69.7690911,84.5439167 C71.6119884,83.6887078 73.1500665,82.6633865 73.6953853,81.089616 C71.4367407,79.4888879 63.4284803,80.9204333 57.837333,77.7886952 C59.9850495,77.3443582 60.9899272,76.9121059 61.9938728,75.3318285 C56.7122054,73.6520865 51.0222483,72.2038086 47.6757631,69.4206611 C49.4813736,69.4429708 51.1676666,69.8240966 53.5260532,68.1926925 C48.7952975,65.6503048 43.7466723,63.6349861 39.8241068,59.7484332 C42.2701173,59.6889402 44.9072223,59.7242641 45.6743971,58.8272242 C41.344474,56.1519074 37.690373,53.1772674 34.6664181,49.9228254 C38.0893412,50.3346272 39.5351346,49.9804591 40.3629004,49.3855311 C37.0891242,46.0418498 32.9465671,43.2187305 30.9713017,39.0988541 C33.5123934,39.9726546 35.838154,40.3073015 37.5141932,39.0226289 C36.402116,36.5202131 31.6368701,35.0440479 28.8925657,29.1960915 C31.5688218,29.4554431 34.4063431,29.7780055 34.9740337,29.1960915 C33.7323851,24.1503585 31.6014476,21.3132955 29.5115257,18.3739794 C35.2378375,18.2893881 43.9144627,18.3962893 43.5220197,17.9138399 L39.9807113,14.3061593 C45.5746551,12.8039661 51.2981703,14.5469192 55.4537778,15.8408876 C57.3190472,14.3730887 55.4202197,12.5167274 53.143864,10.6213239 C57.8979239,11.2543645 62.1933569,12.3438264 66.0767713,13.8450901 C68.1508464,11.9775739 64.7297877,10.1091281 63.0742562,8.24161195 C70.4188125,9.630397 73.5303913,11.5834341 76.6223947,13.5383303 C78.8661244,11.3938008 76.7510339,9.5709042 75.237192,7.7043176 C80.7752058,9.7493826 83.6276416,12.3903052 86.6301567,14.9968335 C87.6480848,13.6266399 89.2169246,12.6217693 87.3227579,9.31620065 C91.2546451,11.5759975 94.2161448,14.2392299 96.4067409,17.2231656 C98.839701,15.6782119 97.8562632,13.5662175 97.8693136,11.6187579 C101.955941,14.9336224 104.549234,18.4613595 107.723268,21.9054348 C108.362735,21.4406474 108.922037,19.8668768 109.417018,17.3765455 C119.164705,26.8070839 132.939361,50.5623729 112.957394,59.9808268 C95.9518427,45.9944414 75.6417533,35.8276796 53.1345423,28.2014464 L53.1410676,28.197728 M206.648728,28.197728 C177.721673,43.0737167 160.902554,55.1024173 151.689,65.3519113 C156.407637,84.2120585 181.023413,85.0728448 190.024434,84.5439167 C188.181536,83.6887078 186.643459,82.6633865 186.099072,81.089616 C188.357716,79.4888879 196.365976,80.9204333 201.956191,77.7886952 C199.808475,77.3443582 198.804529,76.9121059 197.799652,75.3318285 C203.082251,73.6520865 208.772208,72.2038086 212.117762,69.4206611 C210.31215,69.4429708 208.625858,69.8240966 206.267472,68.1926925 C210.999158,65.6503048 216.047784,63.6349861 219.970349,59.7484332 C217.523408,59.6889402 214.886303,59.7242641 214.120059,58.8272242 C218.449983,56.1519074 222.104084,53.1772674 225.128038,49.9228254 C221.704183,50.3346272 220.259323,49.9804591 219.431556,49.3855311 C222.704401,46.0418498 226.847889,43.2187305 228.823154,39.0988541 C226.281131,39.9726546 223.955371,40.3073015 222.279331,39.0226289 C223.391409,36.5202131 228.157587,35.0440479 230.900959,29.1960915 C228.225635,29.4554431 225.387181,29.7780055 224.819491,29.1960915 C226.063936,24.1484993 228.194873,21.3114365 230.284795,18.3721202 C224.558483,18.2875289 215.881859,18.3944301 216.274301,17.9119807 L219.815609,14.3033705 C214.221666,12.8021069 208.49815,14.54506 204.342544,15.8390284 C202.477274,14.3712295 204.375168,12.5148682 206.651525,10.6194648 C201.898398,11.2515758 197.602033,12.3419673 193.71955,13.8432309 C191.644543,11.9757147 195.066533,10.107269 196.722065,8.2397528 C189.377508,9.62853785 186.26593,11.5815749 183.172994,13.5364711 C180.929265,11.3919416 183.045287,9.56904505 184.559128,7.70245845 C179.021116,9.74752345 176.16868,12.388446 173.166164,14.9949743 C172.147304,13.6247808 170.579397,12.6199102 172.472631,9.31434149 C168.541676,11.5741383 165.580176,14.2373707 163.38958,17.2213065 C160.95662,15.6763528 161.940058,13.5634288 161.927008,11.6168988 C157.84038,14.9317632 155.247087,18.4585707 152.073053,21.9035758 C151.433586,21.4387882 150.874284,19.8650178 150.379303,17.3737567 C140.631616,26.8052247 126.85696,50.5605139 146.838926,59.9789678 C163.835157,45.988864 184.144313,35.8239613 206.652458,28.197728 L206.648728,28.197728",fill:"#75A928"}),c.a.createElement("path",{d:"M130.459792,252.281532 C111.320506,252.374035 95.7234614,238.182214 95.6227871,220.58257 C95.6217781,220.470713 95.6217781,220.35885 95.6227871,220.246993 C95.522113,202.648279 110.955096,188.305867 130.094382,188.212455 C149.233668,188.119953 164.829781,202.311774 164.931877,219.911416 L164.931877,220.246993 C165.032061,237.846637 149.598146,252.189049 130.459792,252.281532 Z M110.225208,129.214643 C124.584333,138.596844 127.172966,159.861801 116.006518,176.711277 C104.84007,193.561684 84.1477917,199.616935 69.7886666,190.235665 C55.4295414,180.853465 52.8418414,159.588506 64.0073568,142.73903 C75.1738045,125.888624 95.8660831,119.833372 110.225208,129.214643 M148.98105,127.51631 C134.622857,136.897581 132.034225,158.163468 143.19974,175.012944 C154.366188,191.86335 175.058467,197.918601 189.417592,188.536401 C203.776717,179.155131 206.365349,157.890173 195.198902,141.039767 C184.033385,124.19029 163.341107,118.135039 148.98105,127.51631 M38.4594121,144.552631 C53.9623081,140.408585 43.6935388,208.51018 31.0794334,202.922504 C17.2041037,191.793632 12.7352874,159.201803 38.4594121,144.552631 M217.617555,143.703929 C202.112796,139.560813 212.38343,207.665197 224.997534,202.077521 C238.872864,190.947718 243.34168,158.352172 217.617555,143.703929 M164.943505,92.9891055 C191.697676,88.4843852 213.959726,104.335498 213.061115,133.265731 C212.18115,144.35742 155.086754,94.6409602 164.943505,92.9891055 M91.0225351,92.1404035 C64.2664998,87.6347535 42.0063137,103.489585 42.9049241,132.417959 C43.7848914,143.508718 100.880218,93.7922584 91.0225351,92.1404035 M129.453982,85.3935482 C113.485934,84.9789578 98.1610822,97.2112352 98.1235695,104.306681 C98.0799835,112.92756 110.749087,121.754804 129.563046,121.978831 C148.775041,122.115479 161.034922,114.913132 161.096872,106.01617 C161.16729,95.9358582 143.622945,85.2373795 129.453982,85.3926187 L129.453982,85.3935482 M130.42903,262.180121 C144.350969,261.574038 163.031627,266.651378 163.068914,273.388007 C163.300092,279.928497 146.12675,294.706881 129.506184,294.421501 C112.292758,295.162372 95.4139815,280.36075 95.6349054,275.230426 C95.3766947,267.708305 116.593784,261.835249 130.42903,262.180121 M79.0068819,222.259524 C88.9186307,234.167379 93.437784,255.088395 85.1657199,261.256124 C77.3401644,265.964422 58.3360431,264.025327 44.8289201,244.674365 C35.7188365,228.43655 36.8924367,211.913353 43.2889777,207.059112 C52.8539595,201.24927 67.6325607,209.097671 79.007814,222.259524 L79.0068819,222.259524 M179.867524,218.48452 C169.142925,231.010542 163.171453,253.857638 170.994212,261.216152 C178.474864,266.933038 198.55564,266.133604 213.388308,245.609517 C224.158583,231.824851 220.550159,208.803925 214.397847,202.69104 C205.258865,195.642074 192.138592,204.663598 179.867524,218.4808 L179.867524,218.48452",fill:"#EC3167"})))))},Me=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes;switch(e.icon){case"close":return c.a.createElement(we.a,{color:"primary"});case"fullscreen":return c.a.createElement(ve.a,{color:"primary"});case"zoomout":return c.a.createElement(Oe.a,{color:"primary"});case"zoomin":return c.a.createElement(ge.a,{color:"primary"});case"humidity":return c.a.createElement(be.a,{color:"primary"});case"pressure":return c.a.createElement(de.a,{color:"primary"});case"airquality":return c.a.createElement(pe.a,{color:"primary"});case"temperature":return c.a.createElement(ue.a,{color:"primary"});case"webcam":return c.a.createElement(le.a,{color:"primary"});case"location":return c.a.createElement(re.a,{color:"primary"});case"link":return c.a.createElement(oe.a,{color:"primary"});case"help":return c.a.createElement(ae.a,{color:"primary"});case"github":return c.a.createElement(ke,{className:t.navIcon});case"pi":return c.a.createElement(xe,{className:t.navIcon});case"home":return c.a.createElement(I.a,{color:"primary"});case"share":return c.a.createElement(ee.a,{color:"primary"});case"contact":return c.a.createElement(X.a,{color:"primary"});case"docs":return c.a.createElement(U.a,{color:"primary"});case"reset":case"refresh":return c.a.createElement(B.a,{color:"primary"});case"go":return c.a.createElement(L.a,{color:"primary"});case"settings":return c.a.createElement(H.a,{color:"primary"});case"social":return c.a.createElement(L.a,{color:"primary"});case"back":return c.a.createElement(_.a,{color:"primary"});case"menu":return c.a.createElement(K.a,{color:"primary"});case"privacy":return c.a.createElement(F.a,{color:"primary"});case"api":return c.a.createElement(q.a,{color:"primary"});default:return null}}}]),t}(r.Component),De=Object(b.a)((function(e){return{navIcon:{width:24,height:24},homeIcon:{marginRight:e.spacing()},white:{color:"white"}}}),{withTheme:!0})(Me),Te=a(162),Ne=a(155),Se=a(156),We=a(157),Pe=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement("div",{className:e.view},c.a.createElement("div",{className:v()(e.pad)},c.a.createElement(Te.a,{className:e.card},c.a.createElement(Ne.a,{title:"Not Found",subheader:"No content, innit.",avatar:c.a.createElement(Se.a,{src:"/logo192.png"})}),c.a.createElement(We.a,{className:e.media,image:"/png/graphics/404.png",title:"Not Found"}))))}}]),t}(r.Component),Fe=Object(b.a)(k,{withTheme:!0})(Pe),Ae=a(160),Ie=a(161),Re=a(158),Le=a(47),ze=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.weather;if(!a.data)return null;var n=a.data.weather[0],r=n.description,o=n.icon,i="".concat(r),l="http://openweathermap.org/img/w/".concat(o,".png");return c.a.createElement(Te.a,{className:v()(t.cardMinHeight)},c.a.createElement(Ne.a,{title:"Outlook",action:c.a.createElement(Ae.a,{title:"Full screen"},c.a.createElement(Ie.a,{size:"small",onClick:function(e){e.preventDefault(),console.log("redux action -> PaneCloud/fullscreen")}},c.a.createElement(De,{icon:"fullscreen"})))}),c.a.createElement(Re.a,null,c.a.createElement("img",{align:"left",valign:"middle",src:l,alt:"weather icon"}),c.a.createElement(Le.a,{variant:"body1",className:v()(t.centered)},i)))}}]),t}(r.Component),He=Object(C.b)((function(e){return{weather:e.weather}}),null)(Object(b.a)(k,{withTheme:!0})(Object(h.f)(ze))),Ze=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.weather;if(!a.data)return null;var n=a.data.main.humidity,r="".concat(n," %");return c.a.createElement(Te.a,{className:v()(t.cardMinHeight)},c.a.createElement(Ne.a,{title:"Humidity",action:c.a.createElement(Ae.a,{title:"Full screen"},c.a.createElement(Ie.a,{size:"small",onClick:function(e){e.preventDefault(),console.log("redux action -> PaneHumidity/fullscreen")}},c.a.createElement(De,{icon:"fullscreen"})))}),c.a.createElement(Re.a,null,c.a.createElement(Le.a,{variant:"h3",className:v()(t.centered)},r)))}}]),t}(r.Component),Be=Object(C.b)((function(e){return{weather:e.weather}}),null)(Object(b.a)(k,{withTheme:!0})(Object(h.f)(Ze))),Ge=a(54),Ue=a.n(Ge);Ue.a.accessToken="pk.eyJ1IjoibGlzdGluZ3NsYWIiLCJhIjoiY2szcnJreGM1MGZrMTNkbWpya2RyaW91cSJ9.CG3sDsYHk0rbsLkS5ql6rw";var Je=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.mapbox,a=t.lng,n=t.lat,r=t.zoom,c=new Ue.a.Map({container:this.mapContainer,style:"mapbox://styles/listingslab/ck453ks7712qe1cpj00eseqn5",center:[a,n],zoom:r});c.on("move",(function(){var t=c.getCenter(),a=t.lng,n=t.lat;e.setState({lng:a.toFixed(4),lat:n.toFixed(4),zoom:c.getZoom().toFixed(2)})}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return c.a.createElement(Te.a,{className:v()(t.location)},c.a.createElement(Ne.a,{title:"Map",action:c.a.createElement(Ae.a,{title:"Full screen"},c.a.createElement(Ie.a,{size:"small",onClick:function(e){e.preventDefault(),console.log("redux action -> PaneMap/fullscreen")}},c.a.createElement(De,{icon:"fullscreen"})))}),c.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:v()(t.map)}))}}]),t}(r.Component),qe=Object(C.b)((function(e){return{mapbox:e.mapbox}}),null)(Object(b.a)(k,{withTheme:!0})(Object(h.f)(Je))),Ye=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.weather;if(!a.data)return null;var n=a.data.main.pressure,r="".concat(n," hpa");return c.a.createElement(Te.a,{className:v()(t.cardMinHeight)},c.a.createElement(Ne.a,{title:"Pressure",action:c.a.createElement(Ae.a,{title:"Full screen"},c.a.createElement(Ie.a,{size:"small",onClick:function(e){e.preventDefault(),console.log("redux action -> PanePressure/fullscreen")}},c.a.createElement(De,{icon:"fullscreen"})))}),c.a.createElement(Re.a,null,c.a.createElement(Le.a,{variant:"h3",className:v()(t.centered)},r)))}}]),t}(r.Component),_e=Object(C.b)((function(e){return{weather:e.weather}}),null)(Object(b.a)(k,{withTheme:!0})(Object(h.f)(Ye))),Ve=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.weather;if(!a.data)return null;var n=a.data.main.temp,r="".concat(Math.round(10*(n-273.15))/10," \xb0C");return c.a.createElement(Te.a,{className:v()(t.cardMinHeight)},c.a.createElement(Ne.a,{title:"Temperature",action:c.a.createElement(Ae.a,{title:"Full screen"},c.a.createElement(Ie.a,{size:"small",onClick:function(e){e.preventDefault(),console.log("redux action -> map/fullscreen")}},c.a.createElement(De,{icon:"fullscreen"})))}),c.a.createElement(Re.a,null,c.a.createElement(Le.a,{variant:"h3",className:v()(t.centered)},r)))}}]),t}(r.Component),Xe=Object(C.b)((function(e){return{weather:e.weather}}),null)(Object(b.a)(k,{withTheme:!0})(Object(h.f)(Ve))),$e=Object(M.b)("SYSTEM/WEBCAM/UPDATE"),Ke=function(){vt().dispatch({type:"SYSTEM/WEBCAM/UPDATE"})},Qe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={timer:null},a.startTimer=function(){var e=a.props.webcam.timerDelay;a.state.timer||a.setState({timer:setInterval(a.updateTimer,1e3*e)})},a.stopTimer=function(){console.log("stopTimer");var e=a.state.timer;e&&(clearInterval(e),a.setState({timer:null}))},a.updateTimer=function(){Ke()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.startTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"shouldComponentUpdate",value:function(e){return!0}},{key:"render",value:function(){var e=this.props.classes,t="https://pi.listingslab.io/jpg/current-photo.jpg?cb=".concat(Date.now());return c.a.createElement(Te.a,{className:v()(e.webcam)},c.a.createElement(Ne.a,{title:"Webcam",action:c.a.createElement(Ae.a,{title:"Close Webcam"},c.a.createElement(Ie.a,{size:"small",onClick:function(e){e.preventDefault(),console.log("dispatch -> SYSTEM/WEBCAM/CLOSE")}},c.a.createElement(De,{icon:"close"})))}),c.a.createElement(We.a,{className:e.media,image:t,alt:"Webcam"}))}}]),t}(r.Component),et=Object(C.b)((function(e){return{store:e,webcam:e.system.webcam}}),null)(Object(b.a)(k,{withTheme:!0})(Object(h.f)(Qe))),tt=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ae.a,{title:"GitHub"},c.a.createElement(Ie.a,{className:v()(e.none),color:"primary","aria-label":"Refresh",onClick:function(e){e.preventDefault(),window.open("https://github.com/listingslab-hardware/pi-firmware","_blank")}},c.a.createElement(De,{icon:"github"}))))}}]),t}(r.Component),at=(Object(b.a)(k,{withTheme:!0})(Object(h.f)(tt)),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,{theme:Object(g.a)(E)},c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null,c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(W,null)}}),c.a.createElement(h.a,{component:Fe})))))}}]),t}(r.Component)),nt=Object(C.b)((function(e){return{store:e}}),null)(Object(b.a)(O,{withTheme:!0})(at)),rt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ct(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(!0===confirm("Update available. Do it now?")&&(window.localStorage.clear(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),window.location.assign("/?upgrade-from="+n.version)),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Progressive Web App Enabled"),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ot=a(100),it=a(96),lt=a.n(it),st=a(18),ut=a(55),mt=a(97),pt={webcam:{updated:Date.now(),open:!0,running:!0,timerDelay:10},map:{mapboxStyle:"mapbox://styles/listingslab/ck453ks7712qe1cpj00eseqn5",open:!0},temperature:{open:!0},humidity:{open:!0},pressure:{open:!0},cloud:{open:!0}},Ct=Object(M.c)(pt,Object(y.a)({},$e,(function(e){return e.webcam.updated=Date.now(),e}))),dt={updated:Date.now(),data:null},ht=Object(M.c)(dt,Object(y.a)({},N,(function(e,t){return e.updated=Date.now(),e.data=t.data,e}))),bt=Object(M.b)("MAPBOX/DO_SOMETHING"),ft={updated:Date.now(),lat:-27.211579,lng:153.107658,zoom:12},gt=Object(M.c)(ft,Object(y.a)({},bt,(function(e,t){return console.log("mapbox action",t),e}))),Et=function(){var e={key:"pi-firmware",storage:lt.a},t=Object(st.combineReducers)({mapbox:gt,weather:ht,system:Ct}),a=Object(ut.a)(e,t),n=Object(ot.a)(Object(M.d)({serializableCheck:!1})),r={system:pt,weather:dt,mapbox:ft},c=Object(M.a)({reducer:a,middleware:n,devTools:!1,preloadedState:r,enhancers:[mt.reduxBatch]});return{store:c,persistor:Object(ut.b)(c)}},Ot=a(98);a.d(t,"getStore",(function(){return vt})),console.log("".concat(n.name," ").concat(n.version," (").concat("PROD",")"));var jt=Et(),vt=function(){return jt.store};i.a.render(c.a.createElement(C.a,{store:jt.store},c.a.createElement(Ot.a,{loading:null,persistor:jt.persistor},c.a.createElement(nt,null))),document.getElementById("pi")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");rt?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ct(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ct(t,e)}))}}()},38:function(e){e.exports=JSON.parse('{"name":"pi-firmware","version":"0.3.4","description":"A React PWA and Secure SSL Node/Express server running on a Raspberry Pi 4","dependencies":{"@manaflair/redux-batch":"^1.0.0","@material-ui/core":"^4.6.1","@material-ui/icons":"^4.5.1","@reduxjs/toolkit":"^1.1.0","axios":"^0.19.0","classnames":"^2.2.6","mapbox-gl":"^1.5.1","moment":"^2.24.0","react":"^16.11.0","react-dom":"^16.11.0","react-redux":"^7.1.3","react-router-dom":"^5.1.2","react-scripts":"3.2.0","redux":"^4.0.4","redux-logger":"^3.0.6","redux-persist":"^6.0.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build"},"author":{"name":"listingslab","email":"listingslab@gmail.com"},"license":"MIT","eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')}},[[102,1,2]]]);
//# sourceMappingURL=main.4e7e81db.chunk.js.map