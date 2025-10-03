// Auto-generated wrapper: module.menus.js
import * as fn from './fn.menus.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.menus) -eq 'function')) { impl = fn.menus; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).menus -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).menus; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.menus');
    return;
  }
  return impl.apply(this, args);
}
