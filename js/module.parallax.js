// Auto-generated wrapper: module.parallax.js
import * as fn from './fn.parallax.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.parallax) -eq 'function')) { impl = fn.parallax; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).parallax -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).parallax; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.parallax');
    return;
  }
  return impl.apply(this, args);
}
