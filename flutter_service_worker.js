'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "38afea5f103f10e3a05dfeadb3636851",
"version.json": "2d9edf7cc5f89451a8de8934f13ebc0a",
"index.html": "6e731a2ce2f662aa6e09166ad0ac0207",
"/": "6e731a2ce2f662aa6e09166ad0ac0207",
"main.dart.js": "08a6febda459fc0fda2ffd2fe4159dc0",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/acum_logo2.png": "e747dd364dfac2819022febae4e14846",
"icons/acum_logo.png": "508f215ab470b5a7f7de09c606d807ce",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "642e97adaf4873b7334dbf838441c463",
"assets/AssetManifest.json": "e3b485b93cd259025c21fe396add5120",
"assets/NOTICES": "ced467fe8fdaeb300cdab512c50bf8f5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "18247cec3435df285bf00c7b19ea220f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "47dbc2af96640aceba8f3c491dfd2f8e",
"assets/fonts/MaterialIcons-Regular.otf": "d8cd4afb60f40c1a696cf6c6cd094cd9",
"assets/assets/googleplay.png": "d3e003e89d2a1d62b66893b067601eb0",
"assets/assets/terms.pdf": "fb7331226f962cab3c4bd330e09da337",
"assets/assets/instagram.png": "594e5316bc7cfe51746bca6a2c4b8696",
"assets/assets/Privacy.doc": "6a6935cb2dc25b6ee13f1230bc45d7c1",
"assets/assets/images/electric-meter1.png": "b270d77ddf502a2760a9845ac4dc7432",
"assets/assets/images/farmmachine.png": "91a5ac7f70536326b8e3edb1fa358f7f",
"assets/assets/images/maintenance.png": "f1a65a694209d2634306cd3983abc580",
"assets/assets/images/slide3.png": "bcddc8e86ffbe3f943d9b3437b672ccb",
"assets/assets/images/slide2.png": "3c495120f1389b6625dc3e14a30b897d",
"assets/assets/images/Auto.png": "4723f33cb3de8249224fef2e0ccc64da",
"assets/assets/images/curatenie.png": "1f2449e749a42acda3d178b7e9175e12",
"assets/assets/images/event.png": "0311d29de9b02087029479f76beaab77",
"assets/assets/images/window-cleaning.png": "ea9761870676b939c0532466efada655",
"assets/assets/images/instalatii.png": "8f0463cb364abc2c7ce3949b495f8bc5",
"assets/assets/images/social-media": "b04e96bb86ac67aed59528eda28348a6",
"assets/assets/images/slide1.png": "224bd861859b214ac13bc143072a57fe",
"assets/assets/images/computer-worker.png": "a4b8a6848a6c567397d9452dedb1a582",
"assets/assets/images/iconapp.jpg": "5f02b1e0f7f42b73a14533c1e342d1ed",
"assets/assets/images/vreiacum.png": "a4c868cb10f0c6db21730ff7a10b4720",
"assets/assets/images/slide5.png": "02c844175dbb99b7ec3633f0fe2d7b83",
"assets/assets/images/restaurants.png": "e62a30b67b7efe8f65bf22fef1deccf3",
"assets/assets/images/slide4.png": "d371b41d174505fd1533a80847e882a7",
"assets/assets/images/account-maintenance.png": "131fd406ec38406e8dab37a81e1e753b",
"assets/assets/images/settings.png": "0e0027fb81fed1ffd363a68e1dbc20bb",
"assets/assets/images/OFF.png": "62cfde2bfb65731701fe2487827dc36c",
"assets/assets/images/slide6.png": "977908c1f197128d75402796c9668e17",
"assets/assets/images/law.png": "97eb144e5b512dbe279ab8cf8fe3ad72",
"assets/assets/images/instagram.png": "1d3bf019927dbe6af973dd3d32db862f",
"assets/assets/images/applogo.png": "1276126c8a5643fc9d82e82ab930573a",
"assets/assets/images/gardening.png": "318998f726d74d9d58bfba2fcd160f92",
"assets/assets/images/tailor.png": "7d6266ff5cd302b6852fffc5f7641e7d",
"assets/assets/images/island.png": "ff1c092311cd203ba47d5035a44b5ad9",
"assets/assets/images/banner2.png": "b76b50ea054d2547344f79a1cd2033f6",
"assets/assets/images/red-envelope.png": "aa4ec87c714430e00cb55474ae40a9d2",
"assets/assets/images/trolley.png": "4e3aed7379dd96e3bf50b3aec5189b4d",
"assets/assets/images/banner1.png": "72d755853fdbb61c9246b6cbfac9e6d7",
"assets/assets/images/blue.jpg": "6364cc5839b5fbe5cc3c1be8c7cba439",
"assets/assets/images/Agricultura.png": "fb6de3cd4e955d7aabd790c996ce46d3",
"assets/assets/images/electrical.png": "484b9399d52e2c23ffab893ddb048a53",
"assets/assets/images/doctor.png": "b268c11de794974da4a43607bb5ed350",
"assets/assets/images/profilepic.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/assets/images/photography.png": "544f3188d94b080b3049239643df03bf",
"assets/assets/images/backgroundcategory.png": "65e3c11181453f5b2c937fa05abfc700",
"assets/assets/images/world-day.png": "33793d9cec70ce7862a452c6220bfb3f",
"assets/assets/images/OFF-2.png": "349eda2d5147bd1d0a918b772adb4804",
"assets/assets/images/work-in-progress.png": "780fea5b9f134b3a39398bca61db42df",
"assets/assets/images/searchbar_animation.gif": "10c7d357cc6b550652ec982717b1c174",
"assets/assets/images/cleaning.png": "016a7bcc56dd0c9c351bc5f28080e5c7",
"assets/assets/images/googlemap.png": "06c8becd6b8a6048c419b793ebc1c04b",
"assets/assets/images/waiter.png": "6197351eac55c0bd967895bcf6a9e161",
"assets/assets/images/tiktok.png": "153380297ea0fa0408e6e474768a98c1",
"assets/assets/images/money-bag.png": "92900315a9176d95671f557393b2cf8d",
"assets/assets/images/newlogo.gif": "f03b3153948235e5f18204013b53e338",
"assets/assets/images/red-flag.png": "96fef6bcf397c880f79e047e192a6178",
"assets/assets/images/transport.png": "9e721be72b669139da03ca697d7e465e",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/electric-meter.png": "1c57b2fa5a925addcdf06221713ee9d8",
"assets/assets/images/acumlogo.gif": "f6ac0935cc2b5d3c44c44fb5ec8a2a09",
"assets/assets/images/Artistic.png": "75e48bee73b2c51c2d86f36bfe6c3b98",
"assets/assets/images/business.png": "75e9fc95b3287dd09cf28dd78f2e0bd6",
"assets/assets/images/paint-palette.png": "bda7c80627b0ae6a95be9a83dd079517",
"assets/assets/images/gradinarit.jpg": "8d20a7f0bb22e3fe8f381b1c28a5ad7a",
"assets/assets/images/profile.jpg": "e5a479081384a5055528cd4044240299",
"assets/assets/images/salon.jpg": "2992f606ba2c24294b9d96f666e21bec",
"assets/assets/images/Setari.png": "2fe117cc921fb14c2b49e8bdd6eabcf7",
"assets/assets/images/maintenance-2.png": "e4856fba1a59bad4b829418b410019f1",
"assets/assets/images/It.jpg": "0b272eca44cfc227bcd89ad4af696cbc",
"assets/assets/images/farmer.png": "35303e0bf17cf2d4f6b4a5a4f8cead0d",
"assets/assets/images/Fitness.png": "9aad188389244512e66fa39abb83bbfb",
"assets/assets/images/animal-care.png": "0c6bd376486a558e0ef0c7306bf27027",
"assets/assets/images/planting.png": "b562c1dc8f87cf0426d7bada18b849a6",
"assets/assets/images/hair-dye-brush.png": "c976d65058d5933fcf69ba8814f02359",
"assets/assets/images/dad.png": "528909ddf7c8bb2b07246b0bb6d7f991",
"assets/assets/images/construction.png": "9fc666921c48d5015276f74d612d1d58",
"assets/assets/images/graduation-cap.png": "267edd44eefbfc2486b63d318c6f1601",
"assets/assets/images/image4.png": "48a75318621e5044dd36ce002e3407dd",
"assets/assets/images/OFF1.gif": "545ebb6699425012745a108142fd4590",
"assets/assets/images/social-media.png": "b04e96bb86ac67aed59528eda28348a6",
"assets/assets/images/acum_logo.png": "508f215ab470b5a7f7de09c606d807ce",
"assets/assets/images/image5.png": "504a8a6d501fdc7f2e0148ff9f619fdd",
"assets/assets/images/addimage.png": "1b8600596c9144caa0932434f1f3ef81",
"assets/assets/images/consultant-service.png": "ec98389e99d3821f6241186f4d33c6fd",
"assets/assets/images/10869.png": "ff68c82ab4ca9d30380405227a948035",
"assets/assets/images/Juridic.png": "d1f79ffff92fa103382954df241783af",
"assets/assets/images/facebook.png": "14e929efb131315acb66702901df872e",
"assets/assets/images/image1.png": "0032361f05539d9a1ff13deb124ca65a",
"assets/assets/images/hair-color.png": "68abfad6cbeac6a56e48494e4ed6e87f",
"assets/assets/images/barbell.png": "068fb4f1233413ff224775698a86bf92",
"assets/assets/images/tea.png": "d978de8e1b3172196a7cfe222f3ea5ba",
"assets/assets/images/image2.png": "0abcad7d08ce17d11f99c3cbea0c4445",
"assets/assets/images/save.png": "94caf261c02a46a7e3a65b9742d00073",
"assets/assets/images/writing.png": "71adc95fb42a3137061d60710f49f316",
"assets/assets/images/reparatii.jpg": "7c93693868a6ca65c3574f8073c30b61",
"assets/assets/images/dressmaker.png": "791ac5a36b7a51a2b92256a2bb06b58d",
"assets/assets/images/image3.png": "ff2ece7e5354a7f092e891a723069e9e",
"assets/assets/aplicatieui.png": "0412a264663ca502a0b3bf026ae2e224",
"assets/assets/mac-os.png": "822d3f6d711effc23ef4d43a1e376071",
"assets/assets/reclamaui.png": "2c30ac308db06d9f35d604df95b44799",
"assets/assets/giphy.gif": "462a3c2e3b7a80a327294d323862bb2e",
"assets/assets/newlogo.gif": "f03b3153948235e5f18204013b53e338",
"assets/assets/privacy.pdf": "b28856e986b800ea48ccfbe29ea6b889",
"assets/assets/acumlogo.gif": "f6ac0935cc2b5d3c44c44fb5ec8a2a09",
"assets/assets/termsnc.pdf": "35f448716402051bd474a2d6e5a36172",
"assets/assets/image4.png": "48a75318621e5044dd36ce002e3407dd",
"assets/assets/manuta.gif": "b05123cdccb5b6646341b81144799fe3",
"assets/assets/acum_logo.png": "508f215ab470b5a7f7de09c606d807ce",
"assets/assets/image5.png": "504a8a6d501fdc7f2e0148ff9f619fdd",
"assets/assets/facebook.png": "af8f623aeed9b13b7a303cc731ac8cd0",
"assets/assets/image1.png": "0032361f05539d9a1ff13deb124ca65a",
"assets/assets/privacync.pdf": "7d239ba1a99b1fcd963181129c0a70ee",
"assets/assets/image2.png": "0abcad7d08ce17d11f99c3cbea0c4445",
"assets/assets/businessplan.png": "929ef4571d9f74b4ecc18d9c4352fe70",
"assets/assets/image3.png": "ff2ece7e5354a7f092e891a723069e9e",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
