/// <reference path="../../../../source/System/Disposable/IDisposable.d.ts" />
/// <reference path="../../../../source/System/Collections/Array/IArray.d.ts" />
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
export declare function dispose(...disposables: IDisposable[]): void;
export declare module dispose {
    function deferred(...disposables: IDisposable[]): void;
    function withoutException(...disposables: IDisposable[]): any[];
    function these(disposables: IDisposable[], trapExceptions?: boolean): any[];
    module these {
        function deferred(disposables: IDisposable[], delay?: number): void;
    }
}
export declare function using<TDisposable extends IDisposable, TReturn>(disposable: TDisposable, closure: (disposable: TDisposable) => TReturn): TReturn;
export default dispose;
