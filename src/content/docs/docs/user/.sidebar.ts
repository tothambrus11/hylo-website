import {type StarlightUserConfig} from "@astrojs/starlight/types";

type Sidebar = StarlightUserConfig['sidebar'];
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

export const userGuideSidebar: ArrayElement<Sidebar> = {
    label: 'User Guide',
    items: [
        {label: 'Getting Started', slug: 'docs/user/compiling-hylo'},
        {label: 'Beginner\'s Introduction to Hylo', slug: 'docs/user/beginners-introduction'},
    ]
};