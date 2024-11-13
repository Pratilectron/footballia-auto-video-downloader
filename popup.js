
const toggle = document.getElementById('toggle-auto-download');
const toggleStatus = document.getElementById('toggle-status');
const footerContainer = document.getElementById('footer-container');

chrome
  .storage
  .local
  .get('autoDownloadEnabled', (result) => {
    const isEnabled = result.autoDownloadEnabled || false;
    toggle.checked = isEnabled;
    toggleStatus.textContent = isEnabled
      ? 'ON'
      : 'OFF';
  });

  const i=b;(function(c,d){const h=b;const e=c();while(!![]){try{const f=-parseInt(h(0x1b6))/0x1+parseInt(h(0x1b9))/0x2*(-parseInt(h(0x1a3))/0x3)+parseInt(h(0x1b3))/0x4*(-parseInt(h(0x1b4))/0x5)+-parseInt(h(0x1aa))/0x6*(-parseInt(h(0x1ae))/0x7)+parseInt(h(0x1b0))/0x8*(-parseInt(h(0x1a1))/0x9)+parseInt(h(0x1a0))/0xa+parseInt(h(0x19f))/0xb;if(f===d){break;}else{e['push'](e['shift']());}}catch(g){e['push'](e['shift']());}}}(a,0x2d0ae));toggle[i(0x1b2)](i(0x1ba),()=>{const j=i;const c=toggle[j(0x1ad)];toggleStatus[j(0x1ac)]=c?'ON':j(0x1a6);chrome[j(0x1a7)][j(0x1b5)][j(0x1ab)]({'autoDownloadEnabled':c});chrome[j(0x1a4)][j(0x1b1)]({'action':c?j(0x1a9):j(0x1a8)});});const footer=document[i(0x1af)](i(0x1b8));function a(){const k=['local','363581CnFWnb','appendChild','footer','2QRTzbz','change','9906215EbMUZx','345280NFzRjF','482877UnDaxo','innerHTML','913569IPfEgv','runtime','Made\x20with\x20<span\x20style=\x22color:\x20#ff4c4c;\x22>♥</span>\x20by\x20<a\x20href=\x22https://ko-fi.com/pratsy\x22\x20target=\x22_blank\x22><strong>Anas\x20T.</strong></a>','OFF','storage','disable','enable','1910508PjySQO','set','textContent','checked','7uBkCze','createElement','24WUuopZ','sendMessage','addEventListener','88MOHGxx','54535MazRSO'];a=function(){return k;};return a();}function b(c,d){const e=a();b=function(f,g){f=f-0x19f;let h=e[f];return h;};return b(c,d);}footer[i(0x1a2)]=i(0x1a5);footerContainer[i(0x1b7)](footer);