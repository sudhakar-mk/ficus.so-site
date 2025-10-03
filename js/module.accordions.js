// Auto-generated wrapper: module.accordions.js
import * as fn from './fn.accordions.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.accordions) -eq 'function')) { impl = fn.accordions; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).accordions -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).accordions; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.accordions');
    return;
  }
  return impl.apply(this, args);
}
