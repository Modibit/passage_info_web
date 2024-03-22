'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a4ff93fccad9665fe1828b2e116c6fd4",
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
"assets/NOTICES": "2145fd4fa49334d24036c789c1ba9131",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "88eebca6dd97c6f9e8723e197a6aaa02",
"/": "88eebca6dd97c6f9e8723e197a6aaa02",
"main.dart.js": "78af8a1d7e30c1ba32c137faf82c2bce",
"manifest.json": "03b835ccffda13d283645ae5103bbba1",
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
