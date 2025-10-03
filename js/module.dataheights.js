// Auto-generated wrapper: module.dataheights.js
import * as fn from './fn.dataheights.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.dataheights) -eq 'function')) { impl = fn.dataheights; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).dataheights -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).dataheights; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.dataheights');
    return;
  }
  return impl.apply(this, args);
}
