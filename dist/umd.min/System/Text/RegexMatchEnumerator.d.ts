/// <reference path="../../../../source/System/Collections/Enumeration/IEnumerator.d.ts" />
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
import { Regex, Match } from "./RegularExpressions";
export declare class RegexMatchEnumerator {
    private _pattern;
    constructor(pattern: string | RegExp | Regex);
    matches(input: string): IEnumerator<Match>;
    static matches(input: string, pattern: string | RegExp | Regex): IEnumerator<Match>;
}
declare var _default: typeof RegexMatchEnumerator.matches;
export default _default;
