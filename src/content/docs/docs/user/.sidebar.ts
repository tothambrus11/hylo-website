import {type StarlightUserConfig} from "@astrojs/starlight/types";

type Sidebar = StarlightUserConfig['sidebar'];
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

export const userGuideSidebar: ArrayElement<Sidebar> = {
    label: 'User Guide',
    items: [
        {label: 'Getting Started', slug: 'docs/user/compiling-hylo'},
        {
            label: 'Language Tour', items: [
                {label: 'Introduction', slug: 'docs/user/language-tour'},
                {label: 'Hello, World!', slug: 'docs/user/language-tour/hello-world'},
                {label: 'Modules', slug: 'docs/user/language-tour/modules'},
                {label: 'Bindings', slug: 'docs/user/language-tour/bindings'},
                {label: 'Basic types', slug: 'docs/user/language-tour/basic-types'},
                {label: 'Functions and methods', slug: 'docs/user/language-tour/functions-and-methods'},
                {label: 'Subscripts', slug: 'docs/user/language-tour/subscripts'},
                {label: 'Concurrency', slug: 'docs/user/language-tour/concurrency'}
            ]
        },
    ]
};