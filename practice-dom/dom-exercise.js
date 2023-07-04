//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42'); 
let p = document.createElement('p'); 
p.textContent = '写真表と都市の緯度経度のページです'; 
h2.insertAdjacentElement('afterend',p);
let p1 = document.querySelector('p#ex42'); 
p.style.textEmphasis='sesame green';  

// 練習4-3 写真表作成プログラム
let a1 = document.querySelector('div#phototable'); 
let img1 = document.createElement('img'); 
img1.setAttribute('src','taro.png'); 
let div3 = document.createElement('p'); 
div3.insertAdjacentElement('beforeend',img1); 
a1.insertAdjacentElement('beforeend',div3);  

let img2 = document.createElement('img'); 
img2.setAttribute('src','jiro.png'); 
let div4 = document.createElement('p'); 
div4.insertAdjacentElement('beforeend',img2); 
a1.insertAdjacentElement('beforeend',div4); 

let img3 = document.createElement('img'); 
img3.setAttribute('src','hanako.png');
let div5 = document.createElement('p'); 
div5.insertAdjacentElement('beforeend',img3); 
a1.insertAdjacentElement('beforeend',div5); 
// 練習4-4 箇条書き削除プログラム
let w2 = document.querySelectorAll('li'); 
for(let w1 of w2){ 
    w1.remove(); 
  } 

// 練習4-5 箇条書き追加プログラム
let l1 = document.querySelector('ul#location');  
for(let m1 of data){
    let l2 = document.createElement('li');
    l2.textContent = (m1.name+'...緯度:'+m1.lat+'経度:'+m1.lng); 
    l1.insertAdjacentElement('beforeend',l2); 
}  