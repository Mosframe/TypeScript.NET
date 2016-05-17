/// <reference path="../../../source/System/Collections/Dictionaries/IDictionary.d.ts" />
/// <reference path="../../../source/System/Disposable/IDisposable.d.ts" />
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
export default class Exception implements Error, IDisposable {
    message: string;
    name: string;
    constructor(message?: string, innerException?: Error, beforeSealing?: (ex: any) => void);
    stack: string;
    data: IMap<any>;
    protected getName(): string;
    toString(): string;
    protected toStringWithoutBrackets(): string;
    dispose(): void;
}
