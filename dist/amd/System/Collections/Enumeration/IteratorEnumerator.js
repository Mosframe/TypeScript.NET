/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","./SimpleEnumerableBase","../../../extends"],function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n["default"],s=function(e){function t(t,r){var n=e.call(this)||this;return n._iterator=t,n._isEndless=r,n}return o(t,e),t.prototype._canMoveNext=function(){return null!=this._iterator},t.prototype.moveNext=function(e){var t=this,r=t._iterator;if(r){var n=arguments.length?r.next(e):r.next();if(t._current=n.value,!n.done)return!0;t.dispose()}return!1},t.prototype.dispose=function(){e.prototype.dispose.call(this),this._iterator=null},t.prototype.getIsEndless=function(){return Boolean(this._isEndless)&&e.prototype.getIsEndless.call(this)},t}(r.SimpleEnumerableBase);t.IteratorEnumerator=s,t["default"]=s});
//# sourceMappingURL=IteratorEnumerator.js.map