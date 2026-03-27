declare module 'gsap/SplitText' {
    type SplitTextTarget = string | string[] | Element | Element[]

    export default class SplitText {
        constructor(target: SplitTextTarget, vars?: any)
        chars: Element[]
        words: Element[]
        lines: Element[]
        revert(): void
    }
}

declare module 'gsap/ScrollSmoother' {
    export default class ScrollSmoother {
        static create(vars: any): ScrollSmoother
        static refresh(soft?: boolean): void
        scrollTop(value?: number): number
        scrollTo(target: any, smooth?: boolean, position?: string): void
        paused(value?: boolean): boolean
    }
}