const screenshotDialog = document.getElementById('screenshot-dialog');
document.getElementById('open-screenshot').addEventListener('click', () => screenshotDialog.showModal());
screenshotDialog.addEventListener('click', event => {
  if (event.target !== screenshotDialog) return;
  const rect = screenshotDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) screenshotDialog.close();
});
document.getElementById('copy-hash').addEventListener('click', async () => {
  const hash = '80b3bb9b9a15fc55d931b4d03e7326e74aea6c3d4c25616916330a0a63687d6c';
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(hash);
    status.textContent = 'SHA-256 校验值已复制';
    document.getElementById('copy-hash').textContent = '校验值已复制 ✓';
  } catch {
    status.textContent = '请手动复制校验值';
    window.prompt('SHA-256 校验值', hash);
  }
});
