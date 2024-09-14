'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "83b7308574110b0c8f66a085695e342c",
".git/config": "f6a6c6c350318fbf1442bb701672109d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9ef354277cf5deb1a95d3176351a23d4",
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
".git/index": "02f5ab404f62b886d814a8e71ac7e46c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce644986ae411e8090377d959c48bc41",
".git/logs/refs/heads/main": "ce644986ae411e8090377d959c48bc41",
".git/logs/refs/remotes/origin/main": "a96942b4039d02f96ab5556a4df48236",
".git/objects/00/3ee83721f97d18294cfcff7bb340e708f0273b": "c507656b3abec5b41766a35ba9e856a9",
".git/objects/04/55ef8ee48caf0fb2c14b360c9a4f211deacc03": "ff7614c71d65f299abceadb2a5d76295",
".git/objects/06/24704db5d52bd4aa7a1b13dd1270d58d179af3": "5d41b84b14f1de0f7816e0a5c3971a00",
".git/objects/06/6e9c20da41df954e5ce03b0aad0fb1c791dd22": "544736bbd3812ce2490164850f016dcf",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/be6cec3b4a26f90f34c0325e99c9ed82bdeee3": "aecd2ba44cd463a30da586cb017eb014",
".git/objects/0e/ed9e39e57e528c6fc0002f4c82c8f555d9bf2f": "84f5a1da5cb7adb17ec449c0b01b85e6",
".git/objects/0f/657229370c7f697f804e3d7b791816520ec464": "9e9cd379c9dc8cb00452c33023ce2d6c",
".git/objects/0f/81eb2251c798abd4012c21b2ecbd695457c039": "c57e343e7d3aee10c88ccb6404abc401",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/8febbf7a6890e3d11392351abe89010a2ebb79": "8bcca446e731bd54ddbc4a3abbc5c1bc",
".git/objects/1d/a363c0024d32e1955bdfd02908d8bcd1bb81b8": "01ef8801260fe66a8cd0b0e6ef2fb4a1",
".git/objects/1f/c22329f4b879f583bf614007c77601028bad87": "24e32be8a154b1e31dcc9be057419aea",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/26/0ef9d51c1430475721c334be91d3aa44776b90": "6466d595f383bf237ad15ef7412f901c",
".git/objects/2a/17e25a63997073b05b7a3a19e0098b739787c6": "898feeb9ce78e290605830938fa0fc82",
".git/objects/2a/873d49a073825a459cd4fade13189737ffe268": "096acd8c5cc01025aca339dc8b18fe95",
".git/objects/2b/8b4141a995373cb395660f40e5739d072c3e45": "c16ef64190ef1ed70c668dbbea827c1d",
".git/objects/2b/f5a88b334654a5413276a8ba146883a78b9680": "cde5ca552df2d07684ec312d0ceedb5c",
".git/objects/38/ff184bbe835c1c5975ed825b73553148720b72": "14678ba2ea7bc96d7704dc88b29a39b3",
".git/objects/3c/f3b7bd6aca445f5852d91801610a97b9f9ddef": "07528dd1e359c97b5e007f82b6db4c99",
".git/objects/3f/c664e68c0a32f3c661371e45b7ce0a1aa3e573": "1c19dcf4ba43534c2194a6143e7b5a42",
".git/objects/41/d83aac4832ea38d47b48f52c27e1a9007ac7a9": "a6bee5337897d1bad8b861715de2d316",
".git/objects/44/31c6f02629a2e6a66b9ea3a7b499fbaad7f1d9": "f88fc2e0055c33dab9137516f8eb4995",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/9803470e0e8a390853f3177e70f0e90eb04241": "a80a6342cb2821b79bf2d550a63d98ec",
".git/objects/49/0ec727d268f178e8481f0bb7bc752ff841f7e3": "fe90924714d739eb93eaa12edfa45050",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/aed323ab9adc1851eea4fc39a1492615a87321": "c972c235c1737da7edda529da68a2a9f",
".git/objects/4b/1fcfc0236f090d8303ce769c554fa6f3bb0dc9": "97fcd4be8d2f6353502997096a47d104",
".git/objects/4e/1830c1cde35859da80aa2dac44981af5c3acf9": "a88922a2787033d9f366526e5f025ad3",
".git/objects/50/64d9c00c0230b9db098f6804cbe65a59ba3f16": "b5d7d5f133b84111b67058d9aaa9248d",
".git/objects/54/190cf59b101384ee0e634a4f0096c470d10fcc": "b99cecf9e3dc64aceb818c2bf8b376fc",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "84952f0b32156fc57ec4fab01243ea17",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/2452acea59fc4cb8812588475d8955d67e630f": "1ff54a10006308d66645c506d6cc2d3b",
".git/objects/5c/35e881051cdb11491b6d8643afffc91fe7ccf8": "880d2cdf83beb34c1dcb70f464b74a52",
".git/objects/5c/9d9db65018ee96d0f73d6bd16c2e73fb1b6bd7": "b7769b51a370cc5f3d8a2033a7c5b836",
".git/objects/5d/6758c9f981d8418a86416ff39877cfa22b6bb9": "0396eca38ee92510eba303c56d68a390",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "77f94a0c5a85b8f9539afea3910084d7",
".git/objects/5d/fe60bba4346ed87032e392e1a633fce7941092": "5108ce9a4d048039b8ecc44cb4f8b1ad",
".git/objects/5e/c0c75b9b310acfa751ea6be001d732146c7289": "3fe85bc63a6415d7c15e6d225109bfc7",
".git/objects/5f/2209cc903c03b7afd02210f50a00d713678718": "d7813177c68554385c1ae60a6ff09fb8",
".git/objects/5f/309d132db5dc35b218fde473a4691b1f51e4e7": "aa678309d687ec06bcadf834005be4d1",
".git/objects/60/b04c4ce0726eef4f31b2a9cbfeffa4286a17af": "780fe1e8e9ad05a7b78f29d5648680e5",
".git/objects/65/352a57db568783ee492edf8fda4f8998281087": "f625941e84d06d149fc63dbf183df78c",
".git/objects/65/db7558100dfd75fe606bdedcaec3f9f6b27fdd": "82ba74f4206f47fc8b6458379e5d1782",
".git/objects/65/f7a6cb0d15f1d641257cded908c1d8951d09ba": "a78f4b41b600e87665365ce3670d0200",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "4cc2558c9e12addcb402656321450f48",
".git/objects/6b/1d635d406c009be5d403d9613528211279dbbb": "25a43f68a648d34ac3f253399b94b510",
".git/objects/6d/69e10d4caa06a92eecbf730bc6f320ed08b103": "d8669991db81285008e63add546e080a",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/e2014c4140143124b1b696e17d727eb6d95e9e": "b9ecb8f0568cdfb990356d2d4dec6248",
".git/objects/70/6d506c718548582907074733e8f5cd2969f8dd": "e855e65b9ffa5073aaa15b646f914eb1",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/74c795ba868853e2282a2b0c56520a872e6adb": "fa4511c4c231bcd2ab175b22c9920899",
".git/objects/72/fda495a820ded1ce5487e9bdba01d00c59dcb2": "a7a402d02d8ece5d93ec507e17bc31d5",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "17b115a3efca1deac9198fa7f5805925",
".git/objects/76/728d5285816507904e4b4ce20c4783eb3b355b": "00c2e872be326fe7d6b6745b9a44850f",
".git/objects/77/dec5f5c3b78ef9d6638a83da54b536ef5e5083": "78e6af34b60b10cd4ea3f85cdc1cc6ad",
".git/objects/7a/c69f1f167b46643fd920fa5fb1b7c734580491": "055546bca66d25b02b10be01041e5fe0",
".git/objects/7c/7d37ca2efd3d6180f2a6f1e614db142fc8d778": "062bb8b7c87417acef1bb1ffce3ecabf",
".git/objects/7d/582b85bf91ab47a1604f7c58b0fed5bf6f144b": "be93f42db70a6f9e0cb44eb3ef19522a",
".git/objects/80/4b6f297d181d8a43b494853b8491fe3762cd1a": "0b99126c4bdefbdc7079755fc4616d01",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "5078a0be35852253005f6e4cc71802d1",
".git/objects/86/b40b9ddbb731aca1ea66807dab97ec6900ec5d": "1aea9b7e2d508163eee10586f94a210b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/a5927c377bc9ba35239df154fdf59b7f96b8d0": "89ac9d2ad7c0f6afcbfb09e127289894",
".git/objects/93/4bc25f46dca5e073471dbe4ff908181926a97f": "18d58858e2dabaa2a3f2022ff31df86c",
".git/objects/93/4be8b302ba10ec973c29ffb69a2973ea5f2ab9": "9274eea2e6c1c1d1194989fcbf09ca60",
".git/objects/93/90b684dd0cb2775a8215c424feeffbffa1ff6c": "06c30a1601422965915551e147d66f8f",
".git/objects/93/96ca9e20c6bff16fb916c99c9d0f14484ca0b8": "aeaa10cf8af237d28537e7f216f61c46",
".git/objects/93/e190df73f2e3bdc7bb9f6bb08b8830ddb10af8": "bcbe96059d8785d7334155dd1846a593",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a3/351d7ee7575837ada0a5808ba5c78f9e73fe0b": "b6d200d78db4908e8c7d333b0babc313",
".git/objects/a6/33823ba09b58146416c7f4ed175c4da83cb2b7": "a40e19b0f2b44439635a746a902c6d7b",
".git/objects/a9/6ef8fb6d29fdd3f8973ad182ee9f3d4f7f7b8d": "c4c059a57d5df5b77e283ea8912660d0",
".git/objects/ac/118eb12a6aea2095c7d09e28f06dc5dcf164b5": "709245492b16214b1c54f2e8e05aee97",
".git/objects/ad/55f735fbb2aa6e27e952adbe4f57cb2ec21536": "968f6f82953a0ae5a3412b1f81773e84",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/f1cf268f4088a9d8e40e035f4bfe94d9d79769": "15048e65e87327e319250ff03a918b06",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/226ca95613d809a2b08377a1d05fab61939748": "8cf10b59db056f4b092529288eab88fc",
".git/objects/b6/5a433ee4b30aaaa8b9c001528c647e2ad46840": "48153e5f0df4df1434b3459067960343",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/aecafafb6811c20d5ad802915e8358ed4d6676": "2767fc30108ee8140b3e9c2272569e85",
".git/objects/bc/c98357c6fe4be36712e63e299327c20c355123": "de22df45be6fb1e873edcda8506b243f",
".git/objects/c1/2b63fdb7b8840d0faca81b54d6358687ff5b29": "26d97f49c0e867d90cc1de03056cb1e3",
".git/objects/c3/0326d482fd6118a8c54e4aa41e8776953517b0": "934fe4fef4908e4e52303829c7effbdf",
".git/objects/c3/93d24c6fac986a0ad778cd3394beb5a260d094": "77a5b1837e5a4447570fceec3d02d1f1",
".git/objects/c4/0cee6fe5d8dba36acdec38ac96a41d2b22abcf": "eeea8406a2808d8119059b477b9a1b60",
".git/objects/c5/416e6d06d5d21f48022d30c50c1bef117b05c2": "2b5d67fe47e27543305b34051cbcbc19",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/34e7704cfb4f79abaff6de324c0265eb75e7ed": "9073ecbe4508104e53d2b6d3eb5faf76",
".git/objects/c8/d84a1ee0a6386a6b9419802dd3dd878623d5c4": "9741c5780d3011f4d37ca63f8aedc8ea",
".git/objects/cb/1ba510e485e9aaf408d9fa631a3cf95fe377fd": "ddd3ee6e5ca0ac05971ed511514f3331",
".git/objects/cb/748b636300e55046589151e26b1505d87eb551": "5f9aa37c55f293bfd59d9f3de779882d",
".git/objects/cd/0d05b9a7a1f98638627a348889256461b5d7f2": "c0fc5ef5799b3678a03a0fd8de93fb03",
".git/objects/cd/7411d6ba849b5be67e59b364ec89ad72d9ed4b": "cdce07cabd8040583bfd92aa83697872",
".git/objects/ce/5bfc4ac60d7af1d67fabbcad2ed1504213072c": "9c61981e3b446d5ba65d5f1de7b36aa1",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/d5d03c8cd14f9038c4523521c2d7851b49ce08": "1077125f935828fe8b33a6e7076a8ec5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0b31eae63154f025c9fce0d0a2cbbcb354f12a": "afb614d0bbc96e0e6420f180a7140d6c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b414e0870e42e5c8b1c8648e8882ddaaa38598": "bc421d52cf5b2f731d74dc9137862183",
".git/objects/d8/7efa60c7c6b83c8620fbb7856a304b05734aac": "e4444dafc8b2781f56fd47038f4a4968",
".git/objects/d8/81da7bce95bc6af5749dffb80d31c434737465": "234037aefa57aea3a5afe1083efa8f66",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "ed310b1af04f0c79482b60c448199e6c",
".git/objects/da/327b28bcccac54a806228a9b7c1857810a5bd2": "843777b6e06e03fb489f230185e7113b",
".git/objects/da/9c81885e96d15f5d5bf753d5d7309d6f0b27fe": "cd289524692156f648a636d4995c7248",
".git/objects/dc/5e94b9763815194186d453dd3c73f58f39c140": "ce243eb92d0e30cf395888aea9596cda",
".git/objects/dc/c97b86c31a894b824d4dedb4735290ff455f97": "d72814107b21c96df40f1575fa86254e",
".git/objects/dd/28a5e528f27bf9675eb728d16e9357091cae0e": "b3b51b5d758c6cca40af13397ad5f134",
".git/objects/df/c0e13e0d3210e6474926d38a97803ef303b5b7": "eb060d831c58088cae252471a85ef118",
".git/objects/e0/943157af0ea645ee54f0c317f92d4d6104abd2": "18a1f6d81e9fee8588c97fb3574754e8",
".git/objects/e1/2651fc7b032029e2b66f21d9aef940710b725f": "1f27be3e2ad21ce098dfe77c07833903",
".git/objects/e1/4b1c89c8d6e5aefcdd6791dd49e20efea30439": "ad4f9f7f960c2b04de731f720ec9e56f",
".git/objects/e4/215b3335f39dd9b731adcee81536e7df56a423": "d4e2256a412f5be20d4810ad1d3becdb",
".git/objects/e5/fa014fd9dce7e4060329ff1f2dc36f6fe66ea5": "b92dc36114c586bd2f8a95f65a273365",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/17bca1812d9c3e633cb50aad50d4de5a797f26": "de3a047eb638f211af72fc902fc96735",
".git/objects/e9/d8774436b6e06ea2390ca7ca0d79722eb65445": "c633c0e11323e0c8a64b8ba8e91a2c34",
".git/objects/e9/e76095b08ca840a5177e2d456dc9998aa3bf73": "e55cf059b1d87ab196cce8fd9b1b3f12",
".git/objects/ea/7752df350a70239943027105a88036cab6cee1": "d495fd73e2f56277e09c749d5b3dcfbe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/169404365986b56da6ab7aec2c7dc9279c2cec": "a0c1d4b8308e0525c279f11526bf1bb2",
".git/objects/ef/120b2bbca1fedcf07107a3e0f6fdccce7b0b42": "cb092b6f1f76a687d27b67ba405859a2",
".git/objects/f0/78540be7972bc4ca7e0291a9b08fc81b7d37d7": "b5e188eece85ca6dd2c303bd7719bdc6",
".git/objects/f1/5a8bf417493ceb44b3dfc8ac994b494bc1a385": "bbb8d2f626d56153d8f8ff8182989c38",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/f95dc1e606af06fb07ed10c0733835ee914fa7": "f27e3c942ae6979fea18187a3b855ed7",
".git/objects/f8/c8989e14d8cef34c2d958d11b0002701fbb14d": "9bb860bbed54ba67097ed4895d120bbf",
".git/objects/fc/49f3f53005f0d572d44f6c435cc85bfe745a64": "3fee54679c4990fb4aa9eafb39455cf7",
".git/objects/fc/909bab3a1cf9d0ca4fbecb6aa16a38ee8b0092": "176a59eb46a7359c6da80988395dfbc7",
".git/objects/fd/07ab8e3f7691b28011db15735c1fbef4cad11b": "07302aba158650ef3d9d1968c8d8cca2",
".git/ORIG_HEAD": "4152f599ed273acb45d03fa895741bff",
".git/refs/heads/main": "4152f599ed273acb45d03fa895741bff",
".git/refs/remotes/origin/main": "4152f599ed273acb45d03fa895741bff",
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
"assets/NOTICES": "3d4d4f44d80d193e2a6329a257f8cce1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "9a39ab8aa3d828142935da9efe99b3a2",
"canvaskit/canvaskit.wasm": "afdcccf150b5cba228e27c813548b842",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "43ec75ce562f82c5dc5be1a738d87e37",
"canvaskit/chromium/canvaskit.wasm": "3909da2fbccad1a2e4a1f42750d24977",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "0b8baeff2b4484d2d6be67a7e082f9db",
"canvaskit/skwasm.wasm": "ee4afa1790abb925360fd9519c5194f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "6ed3f0e6adcd5c20b71587031139165d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a549837f7af55985b5df0983e3d0a45d",
"icons/Icon-192.png": "64cc434ca47af2fc432bd6cdefefbef2",
"icons/Icon-512.png": "4110a818c81993e3f9e34d8f050e7050",
"icons/Icon-maskable-192.png": "64cc434ca47af2fc432bd6cdefefbef2",
"icons/Icon-maskable-512.png": "4110a818c81993e3f9e34d8f050e7050",
"index.html": "08f85f2742e4727645048bf3ef3ed785",
"/": "08f85f2742e4727645048bf3ef3ed785",
"main.dart.js": "db28133d8163bf77091cebacfb2cb3db",
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
