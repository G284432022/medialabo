let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう
let data_ = document.querySelector('today#tv_p');
//検索結果表示位置
let search_result_potision = document.querySelector('p#channel');

//イベントハンドラの登録
let search = document.querySelector('button#print');
search.addEventListener('click',result);//ここで登録


//結果
let cha,gen;
function result(){
  let a1 = document.querySelector('select#channnel');
  let a2 = document.querySelector('select#genre');
  //ちゃんねる、ジャンル代入 url用
  cha = a1.value;
  gen = a2.value;
  //空の場合「未選択」と表示
  if(cha === ''|| gen === ''){
    search_result_potision.textContent='未選択';
  }else{
    send_result();
  }
}
function send_result(){
  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+cha+'-'+gen+'-j.json';
  //通信開始
  axios.get(url)  
    .then(showResult)
    .chath(showError)
    .then(finish);
}
// 通信が成功した時の処理
let redata;
function showResult(resp){
  //サーバーから送られてきたデータを出力
  redata = resp.data;
  // data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		redata = JSON.parse(redata);
	}
  //結果の確認用
  console.log(redata);
  console.log(cha);
  console.log(gen);

  print_result(redata);
}
//エラー発生時
function showError(err){
  console.log(eer);
  search_result_potision.textContent="通信エラーが発生しました";
}
function finish() {
	console.log('Ajax 通信が終わりました');
}

function print_result(){
  i = 0;

  //元の検索結果を削除
  let tr_posi = document.querySelectorAll('tbody#tv_p > tr');

  for(let b_re of tr_posi){
    b_re.remove();
  }
  
  //検索結果がなかった場合
  //なるべく波風立てない文面でね...?
  if(redata.list === null){
    search_r_posi.textContent = "該当する検索結果はありません。";
  }
  else{
    //td要素を格納するtr要素
    let newtr_data = [];
    
    //データ項目が入ったtd要素 
    let newtd_data = [];
    let j;
    i = 0;

    if(ser == "g1"){
      for(let g of redata.list.g1){
        //td要素を格納するtr要素
        newtr_data[i] = document.createElement('tr');

        //tr1つにつき7項目
        newtd_data[i] = [];
        for(j = 0; j <= 6; j++){
          newtd_data[i][j] = document.createElement('td');
      
        }

        
        //項目の要素の中身を作成
        newtd_data[i][0].textContent = g.title;
        newtd_data[i][1].textContent = g.start_time;
        newtd_data[i][2].textContent = g.end_time;  
        newtd_data[i][3].textContent = g.service.name;
        newtd_data[i][4].textContent = g.subtitle;
        newtd_data[i][5].textContent = g.content;
        newtd_data[i][6].textContent = g.act;
      
        //上のデータをtrに格納
      
      
        for(j = 0; j <= 6; j++){
          newtr_data[i].insertAdjacentElement('beforeend', newtd_data[i][j]);
      
        }
      
        //ページ上(html)に追加
        data_posi.insertAdjacentElement('beforeend', newtr_data[i]);
      
        i++;
      
      }  
    }

    
    if(ser == "e1"){
      for(let g of redata.list.e1){        
        //td要素を格納するtr要素
        newtr_data[i] = document.createElement('tr');

        //tr1つにつき7項目
        newtd_data[i] = [];
        for(j = 0; j <= 6; j++){
          newtd_data[i][j] = document.createElement('td');
      
        }

        
        //項目の要素の中身を作成
        newtd_data[i][0].textContent = g.title;
        newtd_data[i][1].textContent = g.start_time;
        newtd_data[i][2].textContent = g.end_time;  
        newtd_data[i][3].textContent = g.service.name;
        newtd_data[i][4].textContent = g.subtitle;
        newtd_data[i][5].textContent = g.content;
        newtd_data[i][6].textContent = g.act;
      
        //上のデータをtrに格納
        
        for(j = 0; j <= 6; j++){
          newtr_data[i].insertAdjacentElement('beforeend', newtd_data[i][j]);
      
        }
      
        //ページ上(html)に追加
        data_posi.insertAdjacentElement('beforeend', newtr_data[i]);
      
        i++;
      
      }

    }

    //検索件数を表示
    search_r_posi.textContent = i + "件見つかりました。";
      
  }

}

