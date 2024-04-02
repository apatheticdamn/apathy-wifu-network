const wifuImages = [
  'assets/images/ai_hayasaka.jpg',
  'assets/images/ai_hoshino.jpg',
  'assets/images/akeno_himejima.jpg',
  'assets/images/asuna_yuuki.jpg',
  'assets/images/chizuru.jpg',
  'assets/images/daki.jpg',
  'assets/images/fami.jpg',
  'assets/images/fubuki.jpg',
  'assets/images/himeno.jpg',
  'assets/images/hina.jpg',
  'assets/images/kaguya_shinomiya.jpg',
  'assets/images/kobeni.jpg',
  'assets/images/komi_shouko.jpg',
  'assets/images/kosaki_onodera.jpg',
  'assets/images/lucy.jpeg',
  'assets/images/mai_sakurajima.jpg',
  'assets/images/makima.jpg',
  'assets/images/marin_kitagawa.png',
  'assets/images/mikasa.jpg',
  'assets/images/miku_nakano.jpg',
  'assets/images/miyako_saito.jpg',
  'assets/images/nezuko.jpg',
  'assets/images/nico_robin.jpg',
  'assets/images/nino_nakano.webp',
  'assets/images/nobara_kugisaki.png',
  'assets/images/shinobu_kocho.jpg',
  'assets/images/tsunade.jpg',
  'assets/images/yor.jpg',
  'assets/images/yumeko_jabami.jpg',
  'assets/images/zero_two.webp',
];

const wifu1Img = document.querySelector('.wifu1-img');
const wifu2Img = document.querySelector('.wifu2-img');

wifu1Img.addEventListener('click', changeWifus);
wifu2Img.addEventListener('click', changeWifus);

function changeWifus() {
  let randomIndex1, randomIndex2;

  do {
    randomIndex1 = Math.floor(Math.random() * wifuImages.length);
    randomIndex2 = Math.floor(Math.random() * wifuImages.length);
  } while (randomIndex1 === randomIndex2);

  const randomImage1 = wifuImages[randomIndex1];
  const randomImage2 = wifuImages[randomIndex2];

  if (randomImage1 && randomImage2) {
    wifu1Img.src = randomImage1;
    wifu2Img.src = randomImage2;
  } else {
    console.error("One or both random image URLs are undefined.");
  }
}
