/// <reference path="../../../../source/System/Disposable/IDisposable.d.ts" />
/*!
 * @author electricessence / https://github.com/electricessence/
 * .NET Reference: http://referencesource.microsoft.com/#mscorlib/system/text/StringBuilder.cs
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
export default class StringBuilder implements IDisposable {
    private _partArray;
    private _latest;
    constructor(...initial: any[]);
    private appendSingle(item);
    appendThese(items: any[]): StringBuilder;
    append(...items: any[]): StringBuilder;
    appendLine(...items: any[]): StringBuilder;
    appendLines(items: any[]): StringBuilder;
    isEmpty: boolean;
    toString(): string;
    join(delimiter: string): string;
    clear(): void;
    dispose(): void;
}
