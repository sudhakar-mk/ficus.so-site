// Auto-generated wrapper: module.bootstrap.js
import * as fn from './fn.bootstrap.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.bootstrap) -eq 'function')) { impl = fn.bootstrap; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).bootstrap -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).bootstrap; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.bootstrap');
    return;
  }
  return impl.apply(this, args);
}
