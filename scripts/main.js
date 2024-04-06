const wifuImages = [
  'assets/images/2B.webp',
  'assets/images/ai_hayasaka.jpg',
  'assets/images/ai_hoshino.jpg',
  'assets/images/akeno_himejima.jpg',
  'assets/images/annie.jpg',
  'assets/images/anya_forger (FBI Open Up).jpg',
  'assets/images/asuna_yuuki.jpg',
  'assets/images/chika_fujiwara.jpeg',
  'assets/images/chizuru.jpg',
  'assets/images/daki.jpg',
  'assets/images/emilia.webp',
  'assets/images/esdeath.webp',
  'assets/images/fami.jpg',
  'assets/images/fubuki.jpg',
  'assets/images/himeno.webp',
  'assets/images/hina.png',
  'assets/images/hinata.png',
  'assets/images/kaguya_shinomiya.jpg',
  'assets/images/kaori.jpg',
  'assets/images/kobeni.jpg',
  'assets/images/koko.webp',
  'assets/images/komi_shouko.jpg',
  'assets/images/kosaki_onodera.png',
  'assets/images/lucy.jpeg',
  'assets/images/mai_sakurajima.jpg',
  'assets/images/makima.jpg',
  'assets/images/marin_kitagawa.png',
  'assets/images/megumin.jpg',
  'assets/images/mikasa.jpg',
  'assets/images/mikoto_mikasa.jpg',
  'assets/images/miku_nakano.jpg',
  'assets/images/miyako_saito.jpg',
  'assets/images/nezuko (Go to Jail).jpg',
  'assets/images/nico_robin.jpg',
  'assets/images/nino_nakano.webp',
  'assets/images/nobara_kugisaki.png',
  'assets/images/raphtalia.jpg',
  'assets/images/rem.jpg',
  'assets/images/rias.jpeg',
  'assets/images/sakura_yamauchi.jpg',
  'assets/images/shikimori.webp',
  'assets/images/shinobu_kocho.jpg',
  'assets/images/tsukasa_yuzaki.jpg',
  'assets/images/tsunade.jpg',
  'assets/images/yor.jpg',
  'assets/images/yukino.webp',
  'assets/images/yumeko_jabami.jpg',
  'assets/images/zero_two.webp',
  'assets/images/zoro (Lost again lmao).png',
];

const wifu1Img = document.querySelector('.wifu1-img');
const wifu2Img = document.querySelector('.wifu2-img');

function toTitleCase(str) {
  return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function changeWifus() {
  let randomIndex1, randomIndex2;

  do {
    randomIndex1 = Math.floor(Math.random() * wifuImages.length);
    randomIndex2 = Math.floor(Math.random() * wifuImages.length);
  } while (randomIndex1 === randomIndex2);

  const randomImage1 = wifuImages[randomIndex1];
  const randomImage2 = wifuImages[randomIndex2];

  const wifuName1 = toTitleCase(randomImage1.split('/').pop().split('.')[0]);
  const wifuName2 = toTitleCase(randomImage2.split('/').pop().split('.')[0]);

  const wifu1Img = document.querySelector('.wifu1-img');
  const wifu2Img = document.querySelector('.wifu2-img');

  wifu1Img.removeEventListener('click', handleClick);
  wifu2Img.removeEventListener('click', handleClick);

  wifu1Img.style.opacity = 0;
  wifu2Img.style.opacity = 0;

  setTimeout(() => {
    wifu1Img.src = randomImage1;
    wifu2Img.src = randomImage2;

    document.querySelector('.wifu1-name').textContent = wifuName1;
    document.querySelector('.wifu2-name').textContent = wifuName2;

    setTimeout(() => {
      wifu1Img.style.opacity = 1;
      wifu2Img.style.opacity = 1;
    }, 200);

    wifu1Img.addEventListener('click', handleClick);
    wifu2Img.addEventListener('click', handleClick);
  }, 50);

  function handleClick() {
    const wifuName = this === wifu1Img ? wifuName1 : wifuName2;
    wifuNameAssigner(toTitleCase(wifuName));
    wifu1Img.removeEventListener('click', handleClick);
    wifu2Img.removeEventListener('click', handleClick);
    changeWifus();
  }
}

function wifuNameAssigner(name) {
  const wifuLabel = document.querySelector('.wifu-list-names');
  if (wifuLabel.textContent !== '') {
    wifuLabel.innerHTML += '<br>';
  }
  wifuLabel.innerHTML += name;
}

changeWifus();