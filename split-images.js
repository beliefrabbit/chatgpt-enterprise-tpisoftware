const sharp = require('sharp');
const path = require('path');

async function splitImages() {
  const openaiPath = path.join(__dirname, 'public', 'images', 'OpenAI.png');
  const tpiPath = path.join(__dirname, 'public', 'images', 'TPIsoftware.png');
  
  // 處理 OpenAI 圖片
  try {
    const openaiImage = sharp(openaiPath);
    const openaiMetadata = await openaiImage.metadata();
    const halfHeight = Math.floor(openaiMetadata.height / 2);
    
    console.log(`OpenAI 圖片尺寸: ${openaiMetadata.width}x${openaiMetadata.height}`);
    console.log(`準備切分為上下兩部分...`);
    
    // 切出上半部分（ChatGPT）
    await openaiImage
      .clone()
      .extract({ 
        left: 0, 
        top: 0, 
        width: openaiMetadata.width, 
        height: halfHeight 
      })
      .toFile(path.join(__dirname, 'public', 'images', 'ChatGPT.png'));
    
    console.log('✓ ChatGPT.png 已生成');
    
    // 切出下半部分（TPI SOFTWARE）
    await openaiImage
      .extract({ 
        left: 0, 
        top: halfHeight, 
        width: openaiMetadata.width, 
        height: openaiMetadata.height - halfHeight 
      })
      .toFile(path.join(__dirname, 'public', 'images', 'TPISoftware2.png'));
    
    console.log('✓ TPISoftware2.png 已生成');
    
  } catch (error) {
    console.error('處理圖片時發生錯誤:', error.message);
  }
  
  // 如果 TPIsoftware.png 也是同樣的情況，也處理它
  try {
    const tpiImage = sharp(tpiPath);
    const tpiMetadata = await tpiImage.metadata();
    
    if (tpiMetadata.height > 100) {
      const halfHeight = Math.floor(tpiMetadata.height / 2);
      console.log(`\nTPIsoftware 圖片尺寸: ${tpiMetadata.width}x${tpiMetadata.height}`);
      
      // 如果圖片很高，可能也需要切分
      await tpiImage
        .clone()
        .extract({ 
          left: 0, 
          top: 0, 
          width: tpiMetadata.width, 
          height: halfHeight 
        })
        .toFile(path.join(__dirname, 'public', 'images', 'TPISoftware-top.png'));
      
      await tpiImage
        .extract({ 
          left: 0, 
          top: halfHeight, 
          width: tpiMetadata.width, 
          height: tpiMetadata.height - halfHeight 
        })
        .toFile(path.join(__dirname, 'public', 'images', 'TPISoftware-bottom.png'));
      
      console.log('✓ TPISoftware 圖片也已切分');
    }
  } catch (error) {
    // 可能這個檔案沒問題，跳過
  }
}

splitImages().then(() => {
  console.log('\n完成！');
}).catch(err => {
  console.error('錯誤:', err);
});
