<script>
function activateVideos() {
  const iframes = document.querySelectorAll('.video__iframe[data-src*="youtube-nocookie.com"]');
  iframes.forEach((iframe) => {iframe.src = iframe.dataset.src + "?autoplay=1";});
}
</script>