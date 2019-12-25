const requireAll = requireContext => requireContext.keys().map(requireContext);
try {
  const req = require.context('./svg', false, /\.svg$/);
  requireAll(req);
} catch {
  (() => { })();
}
