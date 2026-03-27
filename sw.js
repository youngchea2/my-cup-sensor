const CACHE_NAME = 'cup-sensor-v5';
// 오프라인에서 사용할 파일 목록
const ASSETS = [
  './',
  './index.html',
  './edge-impulse-standalone.js',
  './edge-impulse-standalone.wasm',
  './run-impulse.js'
];

// 설치 단계에서 파일을 핸드폰에 저장
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 인터넷이 없으면 저장된 파일을 반환
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
