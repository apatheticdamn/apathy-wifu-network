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

let higherCategory = [...wifuImages];
let matchCounter = 1;

function toTitleCase(str) {
  return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function changeWifus() {
  if (higherCategory.length === 1) {
    const trueWifu = toTitleCase(higherCategory[0].split('/').pop().split('.')[0]);
    document.body.innerHTML = '';
    const trueWifuImage = document.createElement('img');
    trueWifuImage.src = higherCategory[0];
    trueWifuImage.alt = trueWifu;
    trueWifuImage.className = 'true-wifu-img';
    trueWifuImage.style.width = '300px';
    trueWifuImage.style.height = 'auto';
    document.body.appendChild(trueWifuImage);
    const trueWifuMessage = document.createElement('h2');
    trueWifuMessage.textContent = `${trueWifu} is your true waifu!`;
    document.body.appendChild(trueWifuMessage);
    return;
  }

  let randomIndex1, randomIndex2;

  do {
    randomIndex1 = Math.floor(Math.random() * higherCategory.length);
    randomIndex2 = Math.floor(Math.random() * higherCategory.length);
  } while (randomIndex1 === randomIndex2);

  const randomImage1 = higherCategory[randomIndex1];
  const randomImage2 = higherCategory[randomIndex2];

  const wifuName1 = toTitleCase(randomImage1.split('/').pop().split('.')[0]);
  const wifuName2 = toTitleCase(randomImage2.split('/').pop().split('.')[0]);

  document.querySelector('.wifu1-img').src = randomImage1;
  document.querySelector('.wifu2-img').src = randomImage2;
  document.querySelector('.wifu1-name').textContent = wifuName1;
  document.querySelector('.wifu2-name').textContent = wifuName2;

  document.querySelector('.wifu1-img').onclick = () => handleClick(wifuName1, randomImage1, randomImage2);
  document.querySelector('.wifu2-img').onclick = () => handleClick(wifuName2, randomImage2, randomImage1);
}

function handleClick(winnerName, winnerImage, loserImage) {
  higherCategory = higherCategory.filter(img => img !== loserImage);
  changeWifus();
}

changeWifus();
