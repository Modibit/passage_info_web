'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a04409750bcffa6a4abb72f34bec4dba",
".git/config": "f6a6c6c350318fbf1442bb701672109d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0c1a4f465b2538aa3ba2f623236cb8ed",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d1f3d1251aaf8a342aa323a7d890dabc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e2271eecad01e39745c1caa37a332dd4",
".git/logs/refs/heads/main": "e2271eecad01e39745c1caa37a332dd4",
".git/logs/refs/remotes/origin/main": "63c21f23f12c83f0b56e407f6ccfdaf2",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0b/be6cec3b4a26f90f34c0325e99c9ed82bdeee3": "aecd2ba44cd463a30da586cb017eb014",
".git/objects/0e/ed9e39e57e528c6fc0002f4c82c8f555d9bf2f": "84f5a1da5cb7adb17ec449c0b01b85e6",
".git/objects/0f/657229370c7f697f804e3d7b791816520ec464": "9e9cd379c9dc8cb00452c33023ce2d6c",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1d/a363c0024d32e1955bdfd02908d8bcd1bb81b8": "01ef8801260fe66a8cd0b0e6ef2fb4a1",
".git/objects/1f/c22329f4b879f583bf614007c77601028bad87": "24e32be8a154b1e31dcc9be057419aea",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/38/ff184bbe835c1c5975ed825b73553148720b72": "14678ba2ea7bc96d7704dc88b29a39b3",
".git/objects/44/31c6f02629a2e6a66b9ea3a7b499fbaad7f1d9": "f88fc2e0055c33dab9137516f8eb4995",
".git/objects/49/0ec727d268f178e8481f0bb7bc752ff841f7e3": "fe90924714d739eb93eaa12edfa45050",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/aed323ab9adc1851eea4fc39a1492615a87321": "c972c235c1737da7edda529da68a2a9f",
".git/objects/4b/1fcfc0236f090d8303ce769c554fa6f3bb0dc9": "97fcd4be8d2f6353502997096a47d104",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/2452acea59fc4cb8812588475d8955d67e630f": "1ff54a10006308d66645c506d6cc2d3b",
".git/objects/5c/9d9db65018ee96d0f73d6bd16c2e73fb1b6bd7": "b7769b51a370cc5f3d8a2033a7c5b836",
".git/objects/5d/6758c9f981d8418a86416ff39877cfa22b6bb9": "0396eca38ee92510eba303c56d68a390",
".git/objects/5d/fe60bba4346ed87032e392e1a633fce7941092": "5108ce9a4d048039b8ecc44cb4f8b1ad",
".git/objects/5f/2209cc903c03b7afd02210f50a00d713678718": "d7813177c68554385c1ae60a6ff09fb8",
".git/objects/65/db7558100dfd75fe606bdedcaec3f9f6b27fdd": "82ba74f4206f47fc8b6458379e5d1782",
".git/objects/6b/1d635d406c009be5d403d9613528211279dbbb": "25a43f68a648d34ac3f253399b94b510",
".git/objects/6d/69e10d4caa06a92eecbf730bc6f320ed08b103": "d8669991db81285008e63add546e080a",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/e2014c4140143124b1b696e17d727eb6d95e9e": "b9ecb8f0568cdfb990356d2d4dec6248",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/74c795ba868853e2282a2b0c56520a872e6adb": "fa4511c4c231bcd2ab175b22c9920899",
".git/objects/72/fda495a820ded1ce5487e9bdba01d00c59dcb2": "a7a402d02d8ece5d93ec507e17bc31d5",
".git/objects/76/728d5285816507904e4b4ce20c4783eb3b355b": "00c2e872be326fe7d6b6745b9a44850f",
".git/objects/77/dec5f5c3b78ef9d6638a83da54b536ef5e5083": "78e6af34b60b10cd4ea3f85cdc1cc6ad",
".git/objects/7a/c69f1f167b46643fd920fa5fb1b7c734580491": "055546bca66d25b02b10be01041e5fe0",
".git/objects/7c/7d37ca2efd3d6180f2a6f1e614db142fc8d778": "062bb8b7c87417acef1bb1ffce3ecabf",
".git/objects/7d/582b85bf91ab47a1604f7c58b0fed5bf6f144b": "be93f42db70a6f9e0cb44eb3ef19522a",
".git/objects/80/4b6f297d181d8a43b494853b8491fe3762cd1a": "0b99126c4bdefbdc7079755fc4616d01",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/4bc25f46dca5e073471dbe4ff908181926a97f": "18d58858e2dabaa2a3f2022ff31df86c",
".git/objects/93/4be8b302ba10ec973c29ffb69a2973ea5f2ab9": "9274eea2e6c1c1d1194989fcbf09ca60",
".git/objects/93/90b684dd0cb2775a8215c424feeffbffa1ff6c": "06c30a1601422965915551e147d66f8f",
".git/objects/93/96ca9e20c6bff16fb916c99c9d0f14484ca0b8": "aeaa10cf8af237d28537e7f216f61c46",
".git/objects/93/e190df73f2e3bdc7bb9f6bb08b8830ddb10af8": "bcbe96059d8785d7334155dd1846a593",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a9/6ef8fb6d29fdd3f8973ad182ee9f3d4f7f7b8d": "c4c059a57d5df5b77e283ea8912660d0",
".git/objects/ac/118eb12a6aea2095c7d09e28f06dc5dcf164b5": "709245492b16214b1c54f2e8e05aee97",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/f1cf268f4088a9d8e40e035f4bfe94d9d79769": "15048e65e87327e319250ff03a918b06",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/c98357c6fe4be36712e63e299327c20c355123": "de22df45be6fb1e873edcda8506b243f",
".git/objects/c3/0326d482fd6118a8c54e4aa41e8776953517b0": "934fe4fef4908e4e52303829c7effbdf",
".git/objects/c3/93d24c6fac986a0ad778cd3394beb5a260d094": "77a5b1837e5a4447570fceec3d02d1f1",
".git/objects/c5/416e6d06d5d21f48022d30c50c1bef117b05c2": "2b5d67fe47e27543305b34051cbcbc19",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/34e7704cfb4f79abaff6de324c0265eb75e7ed": "9073ecbe4508104e53d2b6d3eb5faf76",
".git/objects/cb/1ba510e485e9aaf408d9fa631a3cf95fe377fd": "ddd3ee6e5ca0ac05971ed511514f3331",
".git/objects/cb/748b636300e55046589151e26b1505d87eb551": "5f9aa37c55f293bfd59d9f3de779882d",
".git/objects/cd/7411d6ba849b5be67e59b364ec89ad72d9ed4b": "cdce07cabd8040583bfd92aa83697872",
".git/objects/ce/5bfc4ac60d7af1d67fabbcad2ed1504213072c": "9c61981e3b446d5ba65d5f1de7b36aa1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b414e0870e42e5c8b1c8648e8882ddaaa38598": "bc421d52cf5b2f731d74dc9137862183",
".git/objects/d8/7efa60c7c6b83c8620fbb7856a304b05734aac": "e4444dafc8b2781f56fd47038f4a4968",
".git/objects/d8/81da7bce95bc6af5749dffb80d31c434737465": "234037aefa57aea3a5afe1083efa8f66",
".git/objects/da/9c81885e96d15f5d5bf753d5d7309d6f0b27fe": "cd289524692156f648a636d4995c7248",
".git/objects/dc/5e94b9763815194186d453dd3c73f58f39c140": "ce243eb92d0e30cf395888aea9596cda",
".git/objects/dc/c97b86c31a894b824d4dedb4735290ff455f97": "d72814107b21c96df40f1575fa86254e",
".git/objects/e0/943157af0ea645ee54f0c317f92d4d6104abd2": "18a1f6d81e9fee8588c97fb3574754e8",
".git/objects/e1/2651fc7b032029e2b66f21d9aef940710b725f": "1f27be3e2ad21ce098dfe77c07833903",
".git/objects/e4/215b3335f39dd9b731adcee81536e7df56a423": "d4e2256a412f5be20d4810ad1d3becdb",
".git/objects/e5/fa014fd9dce7e4060329ff1f2dc36f6fe66ea5": "b92dc36114c586bd2f8a95f65a273365",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/17bca1812d9c3e633cb50aad50d4de5a797f26": "de3a047eb638f211af72fc902fc96735",
".git/objects/e9/d8774436b6e06ea2390ca7ca0d79722eb65445": "c633c0e11323e0c8a64b8ba8e91a2c34",
".git/objects/e9/e76095b08ca840a5177e2d456dc9998aa3bf73": "e55cf059b1d87ab196cce8fd9b1b3f12",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/169404365986b56da6ab7aec2c7dc9279c2cec": "a0c1d4b8308e0525c279f11526bf1bb2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/f95dc1e606af06fb07ed10c0733835ee914fa7": "f27e3c942ae6979fea18187a3b855ed7",
".git/objects/fc/49f3f53005f0d572d44f6c435cc85bfe745a64": "3fee54679c4990fb4aa9eafb39455cf7",
".git/objects/fc/909bab3a1cf9d0ca4fbecb6aa16a38ee8b0092": "176a59eb46a7359c6da80988395dfbc7",
".git/objects/fd/07ab8e3f7691b28011db15735c1fbef4cad11b": "07302aba158650ef3d9d1968c8d8cca2",
".git/ORIG_HEAD": "42a49c39a5fc52aa6ea61d52575ba957",
".git/refs/heads/main": "42a49c39a5fc52aa6ea61d52575ba957",
".git/refs/remotes/origin/main": "42a49c39a5fc52aa6ea61d52575ba957",
"assets/AssetManifest.bin": "a4ff93fccad9665fe1828b2e116c6fd4",
"assets/AssetManifest.bin.json": "5d7604b10e437bc412b48bb86a3c8bd2",
"assets/AssetManifest.json": "017f3c4e6cd259d141dd4231bc405880",
"assets/assets/logo.png": "86c782803103c25e676ab170e54734b8",
"assets/FontManifest.json": "344562780f19334ec0363ff28923fd94",
"assets/fonts/estedad/Estedad-Black.ttf": "dca3f1b4d46ef618678e2f8e1ade345a",
"assets/fonts/estedad/Estedad-Bold.ttf": "73f179dc36128fa8d3360ff1b5792795",
"assets/fonts/estedad/Estedad-ExtraBold.ttf": "3992165233a3fa9f4854c44236575ca1",
"assets/fonts/estedad/Estedad-ExtraLight.ttf": "00cd93523c1a4ba4f6622e41fd536ac3",
"assets/fonts/estedad/Estedad-Light.ttf": "26df9d134b9bfa3d67dacda1b34c3aa9",
"assets/fonts/estedad/Estedad-Medium.ttf": "969aabb0a8c4242554c0e694eedd11c6",
"assets/fonts/estedad/Estedad-Regular.ttf": "381bf1cf1f550c6e19a074ad80261717",
"assets/fonts/estedad/Estedad-SemiBold.ttf": "63492544fa9b1e29f2b43f0fd9d51da2",
"assets/fonts/estedad/Estedad-Thin.ttf": "997a0680ffcc0c2b8bd9c6a6d4bb2542",
"assets/fonts/iranyekan/IRANYekanBlack.ttf": "4eb982a0a4d7b13bb76a8612c5a5266f",
"assets/fonts/iranyekan/IRANYekanBold.ttf": "32122790bf8632ba09a620d8f3cc2ed4",
"assets/fonts/iranyekan/IRANYekanExtraBlack.ttf": "42c80d421a06206fa60612782d8c4501",
"assets/fonts/iranyekan/IRANYekanExtraBold.ttf": "6848ecb8fc8ee8dd61569bcacf96a440",
"assets/fonts/iranyekan/IRANYekanLight.ttf": "54f4afb6b53b06c1db8092a70293cd90",
"assets/fonts/iranyekan/IRANYekanMedium.ttf": "f4afe6ad7a3e91864416f5c8a2bdbca5",
"assets/fonts/iranyekan/IRANYekanRegular.ttf": "ffac8e68c30515e384f6d1866119a383",
"assets/fonts/iranyekan/IRANYekanThin.ttf": "a16b0b55cbfa6a02ff54d537ad5328ef",
"assets/fonts/MaterialIcons-Regular.otf": "d3d0aec74b8a43c9f20128a4a732ef45",
"assets/NOTICES": "85b39b8e71f045eb5ce861448222a6ae",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6ed3f0e6adcd5c20b71587031139165d",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "64cc434ca47af2fc432bd6cdefefbef2",
"icons/Icon-512.png": "4110a818c81993e3f9e34d8f050e7050",
"icons/Icon-maskable-192.png": "64cc434ca47af2fc432bd6cdefefbef2",
"icons/Icon-maskable-512.png": "4110a818c81993e3f9e34d8f050e7050",
"index.html": "f5348dad2263bf938465b01eef827ac1",
"/": "f5348dad2263bf938465b01eef827ac1",
"main.dart.js": "521dbdfd485147fd8e14fd83105d1778",
"manifest.json": "f92017d5f4de4daf5ca3eafab9713fb6",
"version.json": "3493ec2d8dfa015297ad510c054e707a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
