// Auto-generated wrapper: module.isotope.js
import * as fn from './fn.isotope.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.isotope) -eq 'function')) { impl = fn.isotope; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).isotope -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).isotope; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.isotope');
    return;
  }
  return impl.apply(this, args);
}
