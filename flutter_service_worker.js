'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5daaf68bd8f294c7b054e5af24830776",
".git/config": "92633167913e61582ea4d12eec7de860",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "92f87386320b203fa5e24a30a64719e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2368f55160bd365c2a74d83432aec614",
".git/logs/refs/heads/main": "2ff95f277c351e87188cd409c579b5c5",
".git/logs/refs/remotes/origin/main": "4baccf665e3e271846e9bfbc6824105b",
".git/objects/04/5d18586d74cbf73917697ed0054a5048d3db29": "b1b6dc89ebe90df2b557f21f05197be1",
".git/objects/07/81288cecdd662c041ad8261d6d231a3eb3434b": "eb087008f7711a5f2ede1fd5d309c35c",
".git/objects/0b/390b68a0704330dacde17f9ec2655e48dc001a": "098aa419111a121cd202e66e7ca175d1",
".git/objects/0b/88bc35a9af2754380da128f992539cceb910f7": "f9044efe2cebea650250e9fe750d8ac8",
".git/objects/10/846dbbd9378227788ace85efc95d8a697d71d5": "a326a7e61cefdc1f6622c110f014be76",
".git/objects/10/c78b7d905fa095bf76e137521f47342d08314b": "919327522c43ea0f600452c5ae9ebe19",
".git/objects/14/7261e211664d77025b4a070bbf8825a80cf3d4": "c61f4d46626cee490b6224e07135e3c8",
".git/objects/17/6a95eed5b5e88af468bd59e0eca2c221654ffb": "af809fe238f9e4b712862545e0762e04",
".git/objects/1a/4dbd28c0c1b85887236b972229fc55c7921c6d": "92bfb2a47871ce6fa928441fcce621eb",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/0e331a5bb69571b54d82ab274fba718a3efbd9": "9c7744ce89563719e0ec5a58550c9384",
".git/objects/1f/866972e7e2e18867b9f127c68140087deed173": "9ec7a264a0891d4181c8da677d769d01",
".git/objects/21/f99c60a7e94a7c72fe4ff88ec5e11c409b9598": "d82b8c9ba8cf267e69122e02450e5868",
".git/objects/31/029363439a05c0ded7e80dda278b27b9f2236a": "4e8addc1511d7d125637a70d840a50db",
".git/objects/31/7da9b2c0c938892676a7ae8813dd111f6a8a29": "21f3bbe716de015dfe052f46eebf60a2",
".git/objects/37/29094bbe9ca7768c9ac96cd64103f8910d80af": "b3b256b9320d5101a541a2cb40c65f16",
".git/objects/39/21f4ba1e03f52fe0a66e5206175563fd3893dc": "c2229e2360a75a031b781ec9e523e30b",
".git/objects/39/facefa0b91886d03fa76325cd4455bf7bbfe0d": "69efbc1524bc387bbbcafb58610da0da",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/868fd5a2a7e41e3b4bce80796c42a7f14df460": "54afb43daaf762938724cb2ec386abec",
".git/objects/40/af4fc1e4fe9249493f709da8b340debb341984": "a5449def121c351a52082bef1717f6fe",
".git/objects/43/00f1135ce891e26a32ca7e1cc9dfd91cb5a658": "a9f68a5697214bd6608dc8643a78c614",
".git/objects/48/cdd8b58835207a96969040071c7ebeec1fd222": "230c8011df73ef247fcec6d017378d0c",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/50/a1f7feb001a25a162d9316e9d5e0eee1fd468e": "6195a15b8790bd4d8c72f933967645c1",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/862fc7a907370905333ad2b6ef66a9aa7c333e": "415ed85d08b6aeb8149eced42cb4b0c4",
".git/objects/55/e00c31edea7857e92ef8eae2eec5918d7db000": "ddf11a710055a44dd423554c55539805",
".git/objects/56/1a014dc36a9fb02797fcbd9a7aea28b58067a1": "8632ccdcf8f17f663689a38e61659185",
".git/objects/5d/3b41a9d8cd4d45123b4d4f8a786cb50a8e0c8c": "d2e14b4c50f2b57288f301c414243b7a",
".git/objects/5d/d4918eecf74fcb5b7200341cbf4f075c345276": "b57e2fca36807227990af705ef67d9da",
".git/objects/5f/c741d46ab384b235c2a36d13fc55cd37b72cdb": "41b06d7933749062d170b7fcd1564427",
".git/objects/63/3d87354de24edd849ce82cd48260d6209cb2e8": "08539de9ac9cf02f6002d498342c4109",
".git/objects/6b/a17aaf5104279b3983f13ffbf05c04a037678f": "6f3e221bd585b1618752946ebd58742d",
".git/objects/6e/494aa0aff817096a751a0779cbc73c517325f6": "25b8972e82943eb04e2ef53296b7528f",
".git/objects/6f/6ed7b5bbb6c244ad43e882edef296163154875": "6bbe3e0d6b4af6223336257f002781d8",
".git/objects/70/1e1e64df41a8ff781925c9642275c6c320ff8f": "7cf12fca9806399307da4dc689dd47fa",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/3e2b39f11a17a1fe3ad4477cfac13a0974b2cd": "ad62132ea4b3a9e0706056e51213fdbe",
".git/objects/7c/c507ffa4592b077f88f5a1c53cfd43376ffbe1": "02f12014fe66abb4b70b095e98f8fb61",
".git/objects/7d/f46af412dece2934224e9e14790a81fedbd0a0": "6910f0e0b846f7db002348cf76938d84",
".git/objects/83/12e4d03f0d3f8fae65321b4ddb18327296e140": "d771b3ad49503bcbaa3c984f2ba9bc27",
".git/objects/83/77a6b8c74aeff8e52e118a6896986b50768c35": "c22c59cc026f635f94c0edaa33b3f641",
".git/objects/84/79dd68d70060e4780b79c3e381e7811736aa53": "0297e449c09e06a0b18f79043f78982b",
".git/objects/85/9115b3b77d6811e3644000627bd3c969a4e532": "11772c16b2167569a6583e7376fa14fe",
".git/objects/86/39ab102d9fccf9e76576554679530c420d8e8d": "b66277b6a20edf3fa97aff78b7f70c4c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/37d3dd878470ece56ad9eda8fd9de9b0983b58": "d1661c0820db316d832b031c31041ee7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/760388ccca3ccd8c198c6bfdbe90d5a656332e": "4ca7f7fc17207fcee16a8d68996020e2",
".git/objects/91/b8289fae02e9ebba1c2a99442db999430cee18": "1a1fbc6dd4b415748deb12b9d4f65d4e",
".git/objects/92/b544999d4ce56ba71ee2da823559afce463412": "5410e02e301b27f2d9671221f5aa211d",
".git/objects/98/3821fc6afe2063455e4c82b074c8c736ab3064": "e1dba7c567d295ea6f45648fe595ae60",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a3/83d382337f43041012528590dbb958f8d8debc": "2c7d5656e123dd61654c6c19c7ed5a3c",
".git/objects/a4/4be27a344c32cdf7485c064d110bfa34efdd77": "c0b106c111e917c669eb2068d7b65fca",
".git/objects/a4/d495602e8ea91441f7829a27219669aac0a152": "c52bb81a6236602705d6bbdf02289fa8",
".git/objects/a8/507420842d4b82efe347eee43bd658c24da84d": "1fa5b702cb9040f7870aecbb4ab87276",
".git/objects/aa/ffc8df2976321987cd3e970add00b02e58cbb8": "5ac0a570f646dc97a0046d76462843e5",
".git/objects/ab/2b384e4d4c21bf9ad2ee29ad73e51454f160a7": "e5516259713f8c594e93c4649f76db19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/1221b207f22b0a93a93673d1f8b857ac416515": "a9ad0f566e446e7a9d25238219de3b56",
".git/objects/c1/62c777901e95fcad9c4baa31b948a26eeafa76": "513670c7588a059d3a0f94c2a105985e",
".git/objects/c4/f15165875f480b63c95b74a7b2736388b1f934": "f68a219dcd17d8e17d1c1a1331632245",
".git/objects/c5/639c2862d524fa1cdbd4edc767542b23b5993d": "21846492f7da9b916d10cf481c5ebb3e",
".git/objects/c6/891a3905e92118f4db9b31a22ec4360a67162f": "78495e30f1dfecb868d82f60ee1e67c5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/94a28d44823e94752b6f621e60793214a686cd": "7494fcff72fc7c1fbc446db4b111a3be",
".git/objects/ce/b16f0ed0953ee77584e7de511d64d26e697f28": "935b499b74f692be36ed184293f7b481",
".git/objects/cf/e2b2bf2daa5620d36c0762410bc68d9a98d3d2": "161f4b9139c65ecd8de9207b4a4925c2",
".git/objects/d0/43acfdad7a2ffefdadfafb0256e7416bcab5d2": "f4392e7b8bba01a2a8c27f2da5eb71fc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/47eed5c2f8b655e8a13f9bb3c47fddaf0531b8": "09a38b35606d6e4b7c9549bd1a75070c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/bcd0adba6611ca4b091e73ed8e0b73206d3988": "c2ea95631243de7a628c803f8711c7e0",
".git/objects/e5/058003ab0da5f0ccdef1360047120f50b79f60": "d6b3e1722c511e2db83e8721f20fafc5",
".git/objects/e8/60669390e77a6b464461706a94f78d1a436ccc": "7550a4d8dec49ca2f927a62eba3bb3e1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0b4b1989d49428b4f8ac2bc3dd0b6670f1eb50": "b7a233226aef9624e16ce93dd6e903e3",
".git/objects/ed/900c36eff0a53679302d87e2f711cd9b1ba2e2": "5f97909e1e57d125864dc70f0b5d44ab",
".git/objects/f1/9b1d0f8c3cefcf578eea5a4419dec61ae61a73": "44b25e229464e6c91bb7f800cb044b5b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/5e9e811dc9619b5f985600fea1d041cb199b19": "a4754350687d215fba0f7e1698c4d9be",
".git/objects/f8/d44f98ad5eba5535a493136b98c7d2233cb2dd": "33b3ab55ec9bff36cbd95b589dba2339",
".git/objects/fa/cb2b0915c05e043a7bd23d563e1576c6b39a73": "2f2cc9d5c2610d408d55ed19c548a711",
".git/objects/fe/34a338b39d56bfea9c4971fbdf3638f25978f4": "5f5aef597da6c77cefb79f25ce1fa826",
".git/refs/heads/main": "f87f2f0bece2916e517a54100d6a5c8f",
".git/refs/remotes/origin/main": "f87f2f0bece2916e517a54100d6a5c8f",
"assets/AssetManifest.bin": "7d897afce59b75222c272564b0757657",
"assets/AssetManifest.bin.json": "0dc6a5ad8f0596f044a21ca37e0a5795",
"assets/AssetManifest.json": "dde6f8b4c386cd32eddee2ae13d469ab",
"assets/assets/carousel_1.jpeg": "a847d1125a0ee489a7f96387f758bd7c",
"assets/assets/carousel_2.jpeg": "80b0dca65ebaec7247448e8b23dd0b7f",
"assets/assets/carousel_3.jpeg": "38f8b77dfe7e3f8d722bd713ae23df4e",
"assets/assets/carousel_4.jpeg": "e32c7bdee8a3d8abbcf64860e864a162",
"assets/assets/carousel_5.jpeg": "ed4ff9a966d309a95fc875dc31e7f779",
"assets/assets/carousel_6.jpeg": "7b2f2164a547df9a0ae681e51cf0f428",
"assets/assets/carousel_7.jpeg": "79f9f59e1140a35159151b1382198ff8",
"assets/assets/carousel_8.jpeg": "728eca36f313193a017ff36a80b23b6b",
"assets/assets/furcare_logo.png": "0b9112e83556ca5176e02fbdbb8a9433",
"assets/assets/gcash.jpg": "a581b97b7dc202d5953007cd0d81c849",
"assets/assets/image_1.jpg": "fb15ae002390509b3733f657bb025653",
"assets/assets/image_2.jpg": "6f386a92baf9607d15ca46ceee12dac5",
"assets/assets/image_3.jpg": "61e6d986aa643a398dab3782a61e3e32",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c98c081034276f91c6ad42f4ad34b70e",
"assets/NOTICES": "83ec34b5143c08e086bed267c34bad25",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/copilot.svg": "b412a5f02e8cef01cdb684b03834cc03",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/flitsmeister.svg": "44ba265e6077dd5bf98668dc2b8baec1",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/kakao.svg": "1c7c75914d64033825ffc0ff2bdbbb58",
"assets/packages/map_launcher/assets/icons/mappls.svg": "1a75722e15a1700115955325fe34502b",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/mapyCz.svg": "f5a198b01f222b1201e826495661008c",
"assets/packages/map_launcher/assets/icons/moovit.svg": "83794341b340ebfe4134002768c82617",
"assets/packages/map_launcher/assets/icons/naver.svg": "ef3ef5881d4a2beb187dfc87e23b6133",
"assets/packages/map_launcher/assets/icons/neshan.svg": "bb7b8e20bd7796e77038848652e70e1b",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/sygicTruck.svg": "242728853b652fa765de8fba7ecd250f",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tmap.svg": "50c98b143eb16f802a756294ed04b200",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/tomtomgofleet.svg": "5b12dcb09ec0a67934e6586da67a0149",
"assets/packages/map_launcher/assets/icons/truckmeister.svg": "416d2d7d2be53cd772bc59b910082a5b",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "31b2474a8c2f68a67cb07a5dc7621731",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "34ab19a8195fb8a3c6fc05aaf43353f6",
"/": "34ab19a8195fb8a3c6fc05aaf43353f6",
"main.dart.js": "193ffce2652cdcf94394e5316f17e71b",
"manifest.json": "fbe1f50088cb10614a7506d7dfb40a48",
"version.json": "5734c8cedf29e5de220a7fa526d41cbd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
