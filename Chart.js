// チャート通し番号
var count = 0;
// ボタン連打対策
var ready = false;
var quesElm =document.getElementById("question");
var randImg = 'img01.png';
var hwindow = screen.availHeight*(-1);
// 幹部の写真(背景)
var images = [
    'img01.png',//長
    'img02.png',//副長
    'img03.png',//幹部
    'img04.png',
    'img05.png',
    'img06.png',//BAR
    'img07.png'//運動会
  ];

  window.onload = function() {
    setTimeout(function(){
        show();
    },2000);
    }
function show() {
    document.getElementById("gg0").style.display = 'none';
    document.getElementById("gg").style.display = 'block';
    $(".shutter").addClass('opening');
    $('span').hide();
    setTimeout(function(){
        randImg = Math.floor(Math.random() * 7);
        // alert(randImg);
        for(var i=1;i<8;i++){
            if(i-1==randImg){
                $(".random0"+i).removeClass('off');
            }else{
                $(".random0"+i).addClass('off');
            }
        }
        quesElm.innerText= "目立ちたい";
        $('span').show();
    },1500);
    setTimeout(function(){
        $(".shutter").removeClass('opening');
        ready = true;
    },3000);
}
  //$(function(){
    // $(".shutter").addClass('opening');
    // $('span').hide();
    // setTimeout(function(){
    //     randImg = Math.floor(Math.random() * 7);
    //     // alert(randImg);
    //     for(var i=1;i<8;i++){
    //         if(i-1==randImg){
    //             $(".random0"+i).removeClass('off');
    //         }else{
    //             $(".random0"+i).addClass('off');
    //         }
    //     }
    //     quesElm.innerText= "目立ちたい";
    //     $('span').show();
    // },1500);
    // setTimeout(function(){
    //     $(".shutter").removeClass('opening');
    //     ready = true;
    // },3000);
  //});
 //質問を変える
function changeQ(num,ques){
    count = num;
    quesElm.innerText=ques;
    switch(count){
        case 100:
            quesElm.innerText ="fullush...";
            ending(ques);
            $('span').hide();
            break;
        default:
            randImg = Math.floor(Math.random() * 7);
            // alert(randImg);
            for(var i=1;i<8;i++){
                if(i-1==randImg){
                    $(".random0"+i).removeClass('off');
                }else{
                    $(".random0"+i).addClass('off');
                }
            }
    }
}
function ending(busyo){
    for(var i=1;i<8;i++){
        if(i==1){
            $(".random01").removeClass('off');
        }else{
            $(".random0"+i).addClass('off');
        }
    }

    switch(busyo){
        case 'Web':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/web");
            $(".random01").attr("src", "images/end01.jpg");
            $(".photo").attr("src", "images/photo01.jpg");
            break;
        case '映像':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/video");
            $(".random01").attr("src", "images/end02.jpg");
            $(".photo").attr("src", "images/photo02.jpg");
            break;
        case 'グラフィック':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/graphic");
            $(".random01").attr("src", "images/end03.jpg");
            $(".photo").attr("src", "images/photo03.jpg");
            break;
        case 'PA':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/pa");
            $(".random01").attr("src", "images/end04.jpg");
            $(".photo").attr("src", "images/photo04.jpg");
            break;
        case 'ワークショップ':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/workshop");
            $(".random01").attr("src", "images/end05.jpg");
            $(".photo").attr("src", "images/photo05.jpg");
            break;
        case 'インテリア':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/interior");
            $(".random01").attr("src", "images/end06.jpg");
            $(".photo").attr("src", "images/photo06.jpg");
            break;
        case 'エクステリア':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/exterior");
            $(".random01").attr("src", "images/end07.jpg");
            $(".photo").attr("src", "images/photo07.jpg");
            break;
        case 'カフェ':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/cafe");
            $(".random01").attr("src", "images/end08.jpg");
            $(".photo").attr("src", "images/photo08.jpg");
            break;
        case 'ステージ':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/stage");
            $(".random01").attr("src", "images/end09.jpg");
            $(".photo").attr("src", "images/photo09.jpg");
            break;
        case 'ディレクション':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/direction");
            $(".random01").attr("src", "images/end10.jpg");
            $(".photo").attr("src", "images/photo10.jpg");
            break;
        case 'ブース':
            $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/booth");
            $(".random01").attr("src", "images/end11.jpg");
            $(".photo").attr("src", "images/photo11.jpg");
            break;

        // case 'BAR':
        //     $(".busyolink").attr("href", "https://geikousai-ncu.com/departments/bar");
        //     $(".random01").attr("src", "1x/end10.png");
        //     $(".photo").attr("src", "1x/photo01.png");
        //     break;
        // case '運動会':
        //     $(".busyolink").attr("href", "http://geikousai-ncu.com/departments/sports");
        //     $(".random01").attr("src", "1x/end11.png");
        //     $(".photo").attr("src", "1x/photo01.png");
        //     break;

    }
    $(".photo_base").addClass('photo_base_anim');
    $(".photo").addClass('photo_anim');
    $(".shutterA").addClass('end');
    $(".photo_anim").on('animationend', function() {
        $(".sign").addClass('sign_anim');
        $(".sign_retry").addClass('sign_anim');
    });

}
//「はい」を選んだ時
$('span.btn_yes').on('click', function(){
    if(ready){
    $(".shutter").addClass('img_rotate');
    ready =false;
    //シャッターが閉じた時
    setTimeout(function(){
        switch(count){
            case 0:
            changeQ(1,'めちゃくちゃ\n目立ちたい？');
            break;
            case 1:
            changeQ(100,'ステージ');
            break;
            case 2:
            changeQ(4,'音楽が好き');
            break;
            // case 3:
            // changeQ(100,'運動会');
            // break;
            case 4:
            changeQ(100,'PA');
            break;
            // case 5:
            // changeQ(100,'BAR');
            // break;
            case 6:
            changeQ(100,'カフェ');
            break;
            case 7:
            changeQ(9,'ノートのすみに\n落書きしちゃう');
            break;
            case 8:
            changeQ(100,'インテリア');
            break;
            case 9:
            changeQ(15,'ゲームが好き');
            break;
            case 10:
            changeQ(100,'エクステリア');
            break;
            case 12:
            changeQ(100,'ワークショップ');
            break;
            case 13:
            changeQ(100,'ディレクション');
            break;
            case 14:
            changeQ(13,'予定は進んで\nたてる方');
            break;
            case 15:
            changeQ(100,'Web');
            break;
            case 16:
            changeQ(100,'映像');
            break;
            case 17:
            changeQ(100,'ブース');
            break;
        }
        // randImg = Math.floor(Math.random() * 5);
        // // alert(randImg);
        // for(var i=1;i<6;i++){
        //     if(i-1==randImg){
        //         $(".random0"+i).removeClass('off');
        //     }else{
        //         $(".random0"+i).addClass('off');
        //     }
        // }

    },400)
    $(".img_rotate").on('animationend', function() {
        $(".img_rotate").removeClass('img_rotate');
        ready = true;
    });
    }
});

//「いいえ」を選んだ時
$('span.btn_no').on('click', function(){
    if(ready){
    ready =false;
    $(".shutter").addClass('img_rotate');
    //シャッターが閉じた時
    setTimeout(function(){
        switch(count){
            case 0:
            changeQ(7,'細かい作業が\n好き');
            break;
            case 1:
            changeQ(2,'お酒が好き');
            break;
            case 2:
            changeQ(6,'料理が好き');
            break;
            // case 3:
            // changeQ(4,'音楽が好き');
            // break;
            case 4:
            changeQ(16,'映画をよく見る');
            break;
            // case 5:
            // changeQ(16,'映画をよく見る');
            // break;
            case 6:
            changeQ(9,'ノートのすみに\n落書きしちゃう');
            break;
            case 7:
            changeQ(8,'家具選びが好き');
            break;
            case 8:
            changeQ(10,'部屋を飾る\nのが好き');
            break;
            case 9:
            changeQ(14,'手作業で物を\n作るのが好き');
            break;
            case 10:
            changeQ(12,'人に何か教える\nのが好き');
            break;
            case 12:
            changeQ(4,'音楽が好き');
            break;
            case 13:
            changeQ(12,'人に何か教える\nのが好き');
            break;
            case 14:
            changeQ(16,'映画をよく見る');
            break;
            case 15:
            changeQ(17,'祝われるより\n祝いたい派');
            break;
            case 16:
            changeQ(15,'ゲームが好き');
            break;
            case 17:
            changeQ(100,'グラフィック');
            break;
        }

    },400)
    $(".img_rotate").on('animationend', function() {
        $(".img_rotate").removeClass('img_rotate');
        ready = true;
    });
}
});

$(document).on('click', '.sign_retry', function(){
    location.reload();
});
