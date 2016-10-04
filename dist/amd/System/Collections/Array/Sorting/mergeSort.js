/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * https://en.wikipedia.org/wiki/Merge_sort
 */
define(["require","exports","../../../Exceptions/ArgumentNullException","../Utility"],function(t,r,e,n){"use strict";function i(t){if(!t)throw new e.ArgumentNullException("target");var r=t.length;return r<2?t:o(t,0,r,n.initialize(r))}function o(t,r,e,n){if(e-r>1){var i=Math.floor((r+e)/2);o(t,r,i,n),o(t,i,e,n);for(var u=0,f=t.length;u<f;u++)n[u]=t[u];for(var l=r,a=r,c=i;a<i&&c<e;)t[l++]=n[a]>n[c]?n[c++]:n[a++];for(;a<i;)t[l++]=n[a++]}return t}r.mergeSort=i});
//# sourceMappingURL=mergeSort.js.map