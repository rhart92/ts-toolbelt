import {Equals} from '../Any/Equals'
import {Keys} from '../Union/Keys'

// Credit https://stackoverflow.com/a/52473108/3570903

/** Get the keys of **`O`** that are readonly
 * @param O
 * @returns [[Key]]
 * @example
 * ```ts
 * ```
 */
export type ReadonlyKeys<O extends object> = {
    [K in keyof O]-?: {
        1: never
        0: K
    }[Equals<{-readonly [Q in K]: O[K]}, {[Q in K]: O[K]}>]
    // for each key, pick only K and compare to see if it is
}[Keys<O>] & Keys<O>
