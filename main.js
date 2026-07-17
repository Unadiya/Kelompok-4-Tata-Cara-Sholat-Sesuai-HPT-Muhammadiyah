// Data ANggota
var ANGGOTA = [
  { nama:"Unadiya Rahma Tiara",    nim:"241220055", peran:"Ketua Tim / Project Manager",   foto:"assets/img/anggota/unadiya.jpg" },
  { nama:"Wirananda Dwi Saputra",  nim:"241220023", peran:"QA, Dokumentasi & Deployment", foto:"assets/img/anggota/wirananda.jpg" },
  { nama:"Natasya Artika Melagis", nim:"241220054", peran:"Front-end Developer",           foto:"assets/img/anggota/natasya.jpg" },
  { nama:"Suci Fitri Andini",      nim:"241220056", peran:"Database & Content Engineer",   foto:"assets/img/anggota/suci.jpg" },
  { nama:"Adrian Fernanda",        nim:"241220059", peran:"Back-end Developer",            foto:"assets/img/anggota/adrian.jpg" }
];

//  DATA BACAAN (dari tabel `bacaan`
// var BACAAN = {};

// DATA GERAKAN (dari tabel `gerakan`)
var GERAKAN_DEWASA = [];

var GERAKAN_ANAK = [];

var dataLoaded = false;
var dataError = false;
var isDataFetchStarted = false;
var DB_ERROR_MESSAGE = '';

function initServerData() {
  if (window.SERVER_DATA) {
    if (window.SERVER_DATA.error) {
      DB_ERROR_MESSAGE = window.SERVER_DATA.message || window.SERVER_DATA.error;
    } else {
      applyApiData(window.SERVER_DATA);
    }
    dataLoaded = true;
    renderAnimSlide();
    return;
  }
  loadDataFromApi();
}

function loadDataFromApi() {
  if (isDataFetchStarted) return;
  isDataFetchStarted = true;
  showDataLoadingMessage();

  fetch('data.php')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP ' + response.status + ' ' + response.statusText);
      }
      return response.json();
    })
    .then(function(data) {
      if (data.error) {
        DB_ERROR_MESSAGE = data.message || data.error;
      } else {
        applyApiData(data);
      }
      dataLoaded = true;
      renderAnimSlide();
    })
    .catch(function(err) {
      console.error('Fetch API data failed:', err);
      DB_ERROR_MESSAGE = 'Tidak dapat mengambil data dari server. Pastikan aplikasi dijalankan melalui server PHP.';
      dataError = true;
      renderAnimSlide();
    });
}

function applyApiData(data) {
  if (Array.isArray(data.gerakan)) {
    var dewasa = [];
    var anak = [];

    data.gerakan.forEach(function(item) {
      var entry = {
        id: item.id,
        nama: item.nama,
        urutan: item.urutan,
        desk: item.deskripsi || '',
        gambar: item.gambar_url || '',
        video: item.video_url || '',
        durasi: item.durasi_autoplay || 5
      };

      if (item.id_kategori === 2) {
        anak.push(entry);
      } else {
        dewasa.push(entry);
      }
    });

    dewasa.sort(function(a, b) { return a.urutan - b.urutan; });
    anak.sort(function(a, b) { return a.urutan - b.urutan; });

    GERAKAN_DEWASA = dewasa;
    GERAKAN_ANAK = anak;
  }

  if (Array.isArray(data.bacaan)) {
    BACAAN = {};
    data.bacaan.forEach(function(item) {
      if (!BACAAN[item.id_gerakan]) {
        BACAAN[item.id_gerakan] = {
          arab: item.teks_arab || '',
          latin: item.teks_latin || '',
          panjang: item.terjemahan || '',
          ringkas: item.terjemahan_ringkas || item.terjemahan || '',
          audio: item.audio_url || '',
          sumber: item.sumber || ''
        };
      }
    });
  }
}

// State Global
var fanIdx       = 0;       // index slider anggota
var animIdx      = 0;       // index slide gerakan
var animMode     = 'dewasa';// mode animasi
var isPlaying    = true;    // autoplay on/off
var autoTimer    = null;
var countdown    = 0;
var countdownInt = null;
var videoOpen    = false;
var anggotaGridDone = false;

// Navigasi Halaman

function showPage(name) {
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) pages[i].classList.remove('active');

  var links = document.querySelectorAll('.nav-links a');
  for (var i = 0; i < links.length; i++) links[i].classList.remove('active');

  var pg = document.getElementById('page-' + name);
  var lk = document.getElementById('nav-' + name);
  if (pg) pg.classList.add('active');
  if (lk) lk.classList.add('active');

  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({ top:0, behavior:'smooth' });

  if (name === 'gerakan') renderAnimSlide();
  if (name === 'tentang') renderAnggotaGrid();
}

function showDataLoadingMessage() {
  var title = document.getElementById('animTitle');
  var desc  = document.getElementById('animDesc');
  var arab  = document.getElementById('bacaanArab');
  var latin = document.getElementById('bacaanLatin');
  var panj  = document.getElementById('bacaanArtiPanjang');
  var noBac = document.getElementById('noBacaan');
  var sumber= document.getElementById('sumberBadge');

  if (title) title.textContent = 'Memuat data dari database...';
  if (desc) desc.textContent = 'Tunggu sebentar, aplikasi sedang mengambil data dari API.';
  if (arab) arab.textContent = '';
  if (latin) latin.innerHTML = '';
  if (panj) panj.textContent = '';
  if (noBac) noBac.style.display = 'none';
  if (sumber) sumber.style.display = 'none';
}

// FAN SLIDER — ANGGOTA KELOMPOK
function renderFan() {
  var track = document.getElementById('fanTrack');
  var info  = document.getElementById('fanInfo');
  var dots  = document.getElementById('fanDots');
  if (!track) return;

  var total = ANGGOTA.length;
  var positions = [-2,-1,0,1,2];
  track.innerHTML = '';

  for (var p = 0; p < positions.length; p++) {
    var pos = positions[p];
    var idx = ((fanIdx + pos) % total + total) % total;
    var a   = ANGGOTA[idx];

    var card = document.createElement('div');
    card.className = 'fan-card';
    card.setAttribute('data-pos', pos);

    if (pos !== 0) {
      (function(offset) {
        card.onclick = function() {
          fanIdx = ((fanIdx + offset) % total + total) % total;
          renderFan();
        };
      })(pos);
    }

    card.innerHTML =
      '<img class="circle-img" src="' + a.foto + '" alt="' + a.nama + '" ' +
      'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
      '<div class="circle-placeholder" style="display:none;">&#128100;</div>';

    track.appendChild(card);
  }

  var aktif = ANGGOTA[fanIdx];
  if (info) {
    info.innerHTML =
      '<div class="anggota-nama">' + aktif.nama + '</div>' +
      '<div class="anggota-nim">'  + aktif.nim  + '</div>' +
      '<span class="anggota-peran">' + aktif.peran + '</span>';
  }

  if (dots) {
    var html = '';
    for (var i = 0; i < total; i++) {
      html += '<div class="fan-dot' + (i===fanIdx?' active':'') + '" onclick="fanGoTo(' + i + ')"></div>';
    }
    dots.innerHTML = html;
  }
}

function prevSlide() { fanIdx = (fanIdx - 1 + ANGGOTA.length) % ANGGOTA.length; renderFan(); }
function nextSlide() { fanIdx = (fanIdx + 1)                  % ANGGOTA.length; renderFan(); }
function fanGoTo(i)  { fanIdx = i; renderFan(); }

// ANGGOTA GRID — HALAMAN TENTANG
function renderAnggotaGrid() {
  if (anggotaGridDone) return;
  anggotaGridDone = true;
  var wrap = document.getElementById('anggotaGrid');
  if (!wrap) return;

  var html = '';
  for (var i = 0; i < ANGGOTA.length; i++) {
    var a = ANGGOTA[i];
    html +=
      '<div class="anggota-card">' +
        '<div class="anggota-card-avatar">' +
          '<img src="' + a.foto + '" alt="' + a.nama + '" onerror="this.parentElement.innerHTML=\'&#128100;\'">' +
        '</div>' +
        '<div class="anggota-card-nama">'  + a.nama  + '</div>' +
        '<div class="anggota-card-nim">'   + a.nim   + '</div>' +
        '<span class="anggota-card-peran">' + a.peran + '</span>' +
      '</div>';
  }
  wrap.innerHTML = html;
}

// Animasi Gerakan Sholat
function getGerakanList() {
  return animMode === 'dewasa' ? GERAKAN_DEWASA : GERAKAN_ANAK;
}

function renderAnimSlide() {
  if (DB_ERROR_MESSAGE) {
    var title = document.getElementById('animTitle');
    var desc  = document.getElementById('animDesc');
    var arab  = document.getElementById('bacaanArab');
    var latin = document.getElementById('bacaanLatin');
    var panj  = document.getElementById('bacaanArtiPanjang');
    var noBac = document.getElementById('noBacaan');
    var sumber= document.getElementById('sumberBadge');

    if (title) title.textContent = 'Gagal koneksi database';
    if (desc) desc.textContent = DB_ERROR_MESSAGE;
    if (arab) arab.textContent = '';
    if (latin) latin.innerHTML = '';
    if (panj) panj.textContent = '';
    if (noBac) noBac.style.display = 'none';
    if (sumber) sumber.style.display = 'none';
    return;
  }

  var list  = getGerakanList();
  var g     = list[animIdx];
  var b = BACAAN[g.id] || null;
  var total = list.length;

  /* counter & progress */
  document.getElementById('animCounter').textContent = (animIdx+1) + ' / ' + total;
  document.getElementById('animProgressBar').style.width = ((animIdx+1)/total*100) + '%';

  /* judul & desc */
  document.getElementById('animTitle').textContent = g.urutan + '. ' + g.nama;
  document.getElementById('animDesc').textContent  = g.desk;

  /* gambar */
  var img = document.getElementById('animGambar');
  var plh = document.getElementById('animPlaceholder');
  img.style.display = 'block';
  plh.style.display = 'none';
  img.src = g.gambar;
  img.alt = g.nama;

  /* video reset */
  videoOpen = false;
  document.getElementById('videoWrap').classList.remove('show');
  document.getElementById('videoFrame').src = '';
  var btnVideo = document.getElementById('btnVideo');
  if (g.video) {
    btnVideo.style.display = 'inline-block';
    btnVideo.textContent = '▶ Lihat Video Demonstrasi';
  } else {
    btnVideo.style.display = 'none';
  }

  /* audio */
  var audio = document.getElementById('animAudio');
  if (b && b.audio) { audio.src = b.audio; audio.style.display = 'block'; }
  else { audio.src = ''; audio.style.display = 'none'; }

  /* bacaan */
  var arabEl   = document.getElementById('bacaanArab');
  var latinEl  = document.getElementById('bacaanLatin');
  var panjEl   = document.getElementById('bacaanArtiPanjang');
  var ringkEl  = document.getElementById('bacaanArtiRingkas');
  var noBacEl  = document.getElementById('noBacaan');
  var sumberEl = document.getElementById('sumberBadge');

  if (b) {
    arabEl.innerHTML   = b.arab.replace(/\n/g,'<br>');
    latinEl.innerHTML  = '<i>' + b.latin.replace(/\n/g,'<br>') + '</i>';
    panjEl.textContent = b.panjang;
    ringkEl.textContent= b.ringkas;
    arabEl.style.display  = 'block';
    latinEl.style.display = 'block';
    panjEl.style.display  = 'block';
    ringkEl.style.display = 'none';
    noBacEl.style.display = 'none';
    sumberEl.textContent  = 'Sumber: ' + b.sumber;
    sumberEl.style.display = 'inline-block';
  } else {
    arabEl.style.display  = 'none';
    latinEl.style.display = 'none';
    panjEl.style.display  = 'none';
    ringkEl.style.display = 'none';
    noBacEl.style.display = 'block';
    sumberEl.style.display= 'none';
  }

  /* steps */
  var stepsEl = document.getElementById('animSteps');
  var html = '';
  for (var i = 0; i < list.length; i++) {
    html += '<div class="anim-step' + (i===animIdx?' active':'') + '" onclick="animGoTo(' + i + ')">' +
              list[i].urutan + '. ' + list[i].nama +
            '</div>';
  }
  stepsEl.innerHTML = html;

  /* autoplay */
  startAutoplay(g.durasi);
}

function animPrev() { var list=getGerakanList(); animIdx=(animIdx-1+list.length)%list.length; renderAnimSlide(); }
function animNext() { var list=getGerakanList(); animIdx=(animIdx+1)%list.length; renderAnimSlide(); }
function animGoTo(i){ animIdx=i; renderAnimSlide(); }

function setAnimMode(mode) {
  animMode = mode;
  animIdx  = 0;
  videoOpen= false;
  document.getElementById('videoFrame').src = '';
  document.getElementById('videoWrap').classList.remove('show');

  if (mode==='anak') document.body.classList.add('mode-anak');
  else               document.body.classList.remove('mode-anak');

  var btns = document.querySelectorAll('.mode-btn');
  for (var i=0; i<btns.length; i++) {
    btns[i].classList.toggle('active', btns[i].dataset.mode===mode);
  }
  renderAnimSlide();
}

// Autoplay
function startAutoplay(detik) {
  clearTimeout(autoTimer);
  clearInterval(countdownInt);
  if (!isPlaying) { document.getElementById('autoplayTimer').textContent='-'; return; }

  countdown = detik;
  updateCountdown();
  countdownInt = setInterval(function() {
    countdown--;
    updateCountdown();
    if (countdown<=0) clearInterval(countdownInt);
  }, 1000);

  autoTimer = setTimeout(function() { if (isPlaying) animNext(); }, detik*1000);
}

function updateCountdown() {
  document.getElementById('autoplayTimer').textContent = countdown + 's';
}

function toggleAutoplay() {
  isPlaying = !isPlaying;
  var btn = document.getElementById('btnAutoplay');
  if (isPlaying) {
    btn.textContent = '⏸ Jeda';
    startAutoplay(getGerakanList()[animIdx].durasi);
  } else {
    btn.textContent = '⏭ Lanjut';
    clearTimeout(autoTimer);
    clearInterval(countdownInt);
    document.getElementById('autoplayTimer').textContent = '-';
  }
}

// Video toggle
function toggleAnimVideo() {
  videoOpen = !videoOpen;
  var wrap  = document.getElementById('videoWrap');
  var frame = document.getElementById('videoFrame');
  var btn   = document.getElementById('btnVideo');
  var g     = getGerakanList()[animIdx];
  if (videoOpen) {
    frame.src = g.video;
    wrap.classList.add('show');
    btn.textContent = '✕ Tutup Video';
  } else {
    frame.src = '';
    wrap.classList.remove('show');
    btn.textContent = '▶ Lihat Video Demonstrasi';
  }
}
;

