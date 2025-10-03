// Auto-generated wrapper: module.headers.js
import * as fn from './fn.headers.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.headers) -eq 'function')) { impl = fn.headers; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).headers -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).headers; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.headers');
    return;
  }
  return impl.apply(this, args);
}
