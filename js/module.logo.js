// Auto-generated wrapper: module.logo.js
import * as fn from './fn.logo.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.logo) -eq 'function')) { impl = fn.logo; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).logo -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).logo; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.logo');
    return;
  }
  return impl.apply(this, args);
}
