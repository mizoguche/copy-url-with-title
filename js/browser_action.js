const copy = generateText => {
  chrome.tabs.query({active: true, currentWindow: true}, async tabs => {
    const activeTab = tabs[0];
    const text = generateText(activeTab);
    await navigator.clipboard.writeText(text);
    M.toast({html: `Copy to clipboard:${text}`});
  });
};

document.querySelector('#markdown').onclick = () => {
  copy(tab => `[${tab.title}](${tab.url})`);
};

document.querySelector('#scrapbox').onclick = () => {
  copy(tab => `[${tab.title} ${tab.url}]`);
};

document.querySelector('#plain').onclick = () => {
  copy(tab => `${tab.title}\n${tab.url}`);
};
