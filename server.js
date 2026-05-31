const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 託管 public 資料夾中的靜態資源
app.use(express.static(path.join(__dirname, 'public')));

// 處理所有其他路由，預設導向 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`[系統訊息] 伺服器已成功啟動！`);
  console.log(`[系統訊息] 本地存取網址：http://localhost:${PORT}`);
});
