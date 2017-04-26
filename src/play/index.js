// Following
// https://gist.github.com/dweldon/b6ab44b4f53ffdfad3a77b3157f0833c

import '../css';

// Add scenarios
const load = requireContext => requireContext.keys().map(requireContext);
load(require.context('./scenarios', true, /.js$/));
