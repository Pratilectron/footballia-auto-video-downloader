let autoDownloadEnabled = false;  // Default is off

// Listen for toggle messages from the popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'enable') {
    autoDownloadEnabled = true;
    console.log('Auto downloader enabled');
  } else if (message.action === 'disable') {
    autoDownloadEnabled = false;
    console.log('Auto downloader disabled');
  }
});

let activeDownloads = new Set();

chrome
  .webRequest
  .onBeforeRequest
  .addListener((details) => {
    const url = details.url;
    const videoFileExtensions = ['.mp4', '.webm', '.m3u8', '.ts'];

    const filename = url
      .split('/')
      .pop();

    if (activeDownloads.has(filename)) {
      console.log("Download blocked: File already exists:", filename);
      return {cancel: true};
    }

    if (autoDownloadEnabled && videoFileExtensions.some(ext => url.includes(ext))) {
      console.log("Detected video file:", url);

      activeDownloads.add(filename);

      chrome
        .downloads
        .download({
          url: url,
          filename: filename
        }, (downloadId) => {
          if (chrome.runtime.lastError) {
            console.error("Download failed:", chrome.runtime.lastError.message);
          } else {
            console.log("Download started with ID:", downloadId);
          }

          chrome
            .downloads
            .onChanged
            .addListener((delta) => {
              if (delta.id === downloadId && delta.state && delta.state.current === "complete") {
                activeDownloads.delete(filename);
                console.log("Download complete:", filename);
              }
            });
        });
    }
  }, {urls: ["<all_urls>"]});