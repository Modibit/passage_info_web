'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8a45abbbad735c90e635c0e5d74e966",
".git/config": "b68488aa9fedee95e062b809ddb2d84a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "50c3deb00126671845587604c86e41cd",
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
".git/index": "d51821e45a968bacb72e838527e8214c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8aff5ee8db526fa6d794dfc908530002",
".git/logs/refs/heads/main": "8aff5ee8db526fa6d794dfc908530002",
".git/logs/refs/remotes/origin/HEAD": "7a0abbcf6af17c8b61ba2a2dfee37c2b",
".git/logs/refs/remotes/origin/main": "a469f506e4e1d5fc4c1c8fff285e499b",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "6e52dd0d00b1b7a37d90e50848791b2f",
".git/objects/0a/80840cc56ac15b1592382da5f97e5e57937bd2": "a6e8f8dfc54a82b5c6c46c8cee2f1599",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/34/0dd35dc6829f586bcf8ad3b4c00159e071d137": "a25450eb3e472fca7f54dbd234d92f7b",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "2279148619b8bc809e3d0f6a35f5bd9b",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "9e3ad8201b0768d8bc2e19bc04300b72",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/6f/f7e1da67b88b1e5954efe3c3f07a9326a7f58e": "839fe66d4396af1acb6eacdbf1bcf831",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1827e6368a44e58ddf7d219a2e6838fc",
".git/objects/78/775faa8b479988fe32c88cd5dc3795de0d7c18": "c171908229af436910c2832bbeacab58",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "8003b3408ffe6fc347eaa3ce30414536",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "4371b921dbabdd46c5fcada550316a34",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "fbb186b47a9be852320b2d12cdc47a86",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "413f1e0b83d41d6b916fc02df2bbc19e",
".git/objects/b7/d981b3f00e54825d3c6bd5ae8471ef111c02bf": "6cca774478870c3f095d9bd9750d7e12",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "e8841c09ddb16bb6ad9ae8ca4792eafe",
".git/objects/d6/a38dfa17b7a85ba0eb121298f495f1fb1ae60b": "f93a202f7421a787fba13ad8b8efb23f",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/f5/a0190763db4c0ad781d10abb08a6587fa030b6": "b3367c1ab4e4519494f2d0ebb700b23d",
".git/objects/f6/9f09d363e146454bd35d9c4ed7d0bdd5ce9eca": "89de8cbed45d35c4f2afbb7ce4844e3d",
".git/objects/pack/pack-07b6d5a80cae7747ada948c0a4bbf842be246160.idx": "c874719102de388f549066ba16c23f1a",
".git/objects/pack/pack-07b6d5a80cae7747ada948c0a4bbf842be246160.pack": "6b4ad3f6e062ed72b22d6b9c26251881",
".git/ORIG_HEAD": "b7dc76cd5e3435c84512025b6f84cade",
".git/packed-refs": "69b0ccce492dcd7d383f2a34b5768e69",
".git/refs/heads/main": "b7dc76cd5e3435c84512025b6f84cade",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b7dc76cd5e3435c84512025b6f84cade",
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
"assets/fonts/MaterialIcons-Regular.otf": "12064de5d3c9de8cd67ef72940d2610e",
"assets/NOTICES": "61bc0c801239e6cfce0d6d2dca76129e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "6ed3f0e6adcd5c20b71587031139165d",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b74cfa02971b86c40857713aeb371c08",
"icons/Icon-192.png": "64cc434ca47af2fc432bd6cdefefbef2",
"icons/Icon-512.png": "4110a818c81993e3f9e34d8f050e7050",
"icons/Icon-maskable-192.png": "64cc434ca47af2fc432bd6cdefefbef2",
"icons/Icon-maskable-512.png": "4110a818c81993e3f9e34d8f050e7050",
"index.html": "f7618c714dd0b6ddcb5cfe5930834c46",
"/": "f7618c714dd0b6ddcb5cfe5930834c46",
"main.dart.js": "8a21c2b5c00f01f0e2082acdf2055e0c",
"manifest.json": "f92017d5f4de4daf5ca3eafab9713fb6",
"version.json": "3493ec2d8dfa015297ad510c054e707a"};
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
