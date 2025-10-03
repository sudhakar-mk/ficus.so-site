// Auto-generated wrapper: module.stickfooteronsmall.js
import * as fn from './fn.stickfooteronsmall.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.stickfooteronsmall) -eq 'function')) { impl = fn.stickfooteronsmall; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).stickfooteronsmall -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).stickfooteronsmall; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.stickfooteronsmall');
    return;
  }
  return impl.apply(this, args);
}
