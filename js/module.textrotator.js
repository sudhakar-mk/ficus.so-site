// Auto-generated wrapper: module.textrotator.js
import * as fn from './fn.textrotator.js';

let impl = null;
if (fn -and (typeof fn.default -eq 'function')) { impl = fn.default; }
elseif (fn -and (typeof (fn.textrotator) -eq 'function')) { impl = fn.textrotator; }
elseif (typeof fn -eq 'function') { impl = fn; }
elseif ( (Get-Variable -Name 'window' -ErrorAction SilentlyContinue) -and ( (Get-Variable -Name 'window' -ValueOnly).textrotator -is [System.Delegate] ) ) { impl = (Get-Variable -Name 'window' -ValueOnly).textrotator; }

export default function(...args) {
  if (!impl) {
    console.error('No implementation found for module.textrotator');
    return;
  }
  return impl.apply(this, args);
}
