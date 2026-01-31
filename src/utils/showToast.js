export default function showToast(payload) {
  window.dispatchEvent(
    new CustomEvent('global-toast', {
      detail: payload,
    }),
  );
}
