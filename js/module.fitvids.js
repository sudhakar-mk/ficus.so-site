// Auto-generated wrapper: module.fitvids.js
import * as fn from './fn.fitvids.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.fitvids) -eq 'function')) { impl = fn.fitvids; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).fitvids -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).fitvids; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.fitvids');
    return;
  }
  return impl.apply(this, args);
}
