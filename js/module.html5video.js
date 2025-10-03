// Auto-generated wrapper: module.html5video.js
import * as fn from './fn.html5video.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.html5video) -eq 'function')) { impl = fn.html5video; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).html5video -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).html5video; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.html5video');
    return;
  }
  return impl.apply(this, args);
}
