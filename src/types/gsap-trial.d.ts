declare module 'gsap-trial/SplitText' {
    type SplitTextTarget = string | string[] | Element | Element[]

    export class SplitText {
        constructor(target: SplitTextTarget, vars?: any)
        chars: Element[]
        words: Element[]
        lines: Element[]
        revert(): void
    }

    export default SplitText
}