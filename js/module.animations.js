// Auto-generated wrapper: module.animations.js
import * as fn from './fn.animations.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.animations) -eq 'function')) { impl = fn.animations; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).animations -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).animations; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.animations');
    return;
  }
  return impl.apply(this, args);
}
