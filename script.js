function generateText() {
    // 各要素の値を取得
    const type = document.getElementById('type').value;
    const charCount = document.getElementById('charCount').value;
    const illusCount = document.getElementById('illusCount').value;
    const usage = document.getElementById('usage').value;
    const budget = document.getElementById('budget').value;
    const deadline = document.getElementById('deadline').value;
    const clientName = document.getElementById('clientName').value;
    const email = document.getElementById('email').value;
    const charRef = document.getElementById('charRef').value || 'なし';
    const imageRef = document.getElementById('imageRef').value || 'なし';
    const other = document.getElementById('other').value || '特になし';

    // 必須項目の簡易チェック
    if(!type || !charCount || !illusCount || !usage || !budget || !deadline || !clientName || !email) {
        alert('必須項目をすべて入力してください。');
        return;
    }

    // テキストの生成
    const generatedText = `【イラスト制作ご依頼】
--------------------------------------------------
■ご依頼内容：${type}
■キャラクター人数：${charCount}人
■枚数：${illusCount}枚
■使用用途：${usage}
■ご予算：${Number(budget).toLocaleString()}円
■希望納期：${deadline}

■お名前：${clientName}
■連絡先：${email}

■キャラクター資料URL：
${charRef}

■仕上がりイメージURL：
${imageRef}

■その他・詳細：
${other}
--------------------------------------------------`;

    // 結果を表示
    const outputArea = document.getElementById('output-area');
    const resultText = document.getElementById('resultText');
    
    resultText.value = generatedText;
    outputArea.style.display = 'block';
    
    // スムーズにスクロール
    outputArea.scrollIntoView({ behavior: 'smooth' });
}

function copyToClipboard() {
    const resultText = document.getElementById('resultText');
    resultText.select();
    document.execCommand('copy');
    
    alert('クリップボードにコピーしました！');
}