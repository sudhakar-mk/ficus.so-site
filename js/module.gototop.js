// Auto-generated wrapper: module.gototop.js
import * as fn from './fn.gototop.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.gototop) -eq 'function')) { impl = fn.gototop; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).gototop -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).gototop; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.gototop');
    return;
  }
  return impl.apply(this, args);
}
