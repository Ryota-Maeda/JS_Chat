// 送信者が自分かどうか保存する変数
var isMyself = true;


// 送信ボタンの取得
var sendBtn = document.getElementById('sendBtn');

// 送信ボタンがクリックされた時の処理
sendBtn.addEventListener('click', function() {

  // 入力欄を取得
  var inputMessage = document.getElementById('inputMessage');

  // 入力値を取得
  var messageText = inputMessage.value;



  // 入力値が空かチェックする
  if (messageText == '' ) {
    // 入力値が空の場合、処理を中断する
    return;
  }

  // メッセージ用のdivを作成する
  var messagebox = createMessageBox();

  // メッセージ用のpを作成する
  var message = createMessage(messageText);

  // divにpタグを追加する
  messagebox.appendChild(message);

  // チャット画面であるdivタグを取得する
  var room = document.getElementById('room');

  // チャット画面のdivに新規メッセージのdivを追加する
  room.appendChild(messagebox);

  // 入力欄の入力値をリセットする
  inputMessage.value = '';

  // 送信者を変更する
  if (isMyself) {
    // 自分が送信者の場合
    // 次の送信者を相手にする
    isMyself = false;
  } else {
    // 相手が送信者の場合
    // 次の送信者を自分にする
    isMyself = true;
  }
})

// メッセージ用のdivを作成する
function createMessageBox() {
  // divを作成
  var messagebox = document.createElement('div');

  // 誰が送信者かチェック
  if (isMyself) {
    // 自分が送信者の場合
    // 「box-right]というクラスをdivに追加
    messagebox.classList.add('box-right');
  } else {
    // 相手が送信者の場合
    // 「box-left]というクラスをdivに追加
    messagebox.classList.add('box-left');
  }

  return messagebox;
}

function createMessage(messageText) {
  // pタグを作成
  var message = document.createElement('p');

  // pタグのテキストに、画面の入力値を設定
  message.textContent = messageText;

  // pタグに「massege-box」というクラスを追加
  message.classList.add('message-box');


  if (isMyself) {
    // 自分が送信者の場合
    // 「green」というクラスをpに追加
    message.classList.add('green');
  } else {
    // 相手が送信者の場合
    // 「white」というクラスをpに追加
    message.classList.add('white');
  }

  return message;
}