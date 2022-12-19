<template>
    <div class="app-foot">
      <span>
          {{footerMsgCopyright}}
            <br>
        </span>
      <span class="source">{{footerMsgName}}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Foot',
    data() {
      return {
        // 版权说明的文字
        footerMsgCopyright: '本平台仅供课程展示用 - Powered By ',
        // 单位
        footerMsgName: 'chuanmx miaohs zhangjy xiaht'
      }
    }
  }
  </script>
  
  <style scoped>
  .app-foot {
    /* footer 固定在页面底部 */
    min-height: 35px;
    background-color: #eeeeee;
    width: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blanchedalmond;
  }
  .source{
    font-weight: 600;
  }
  </style>
  