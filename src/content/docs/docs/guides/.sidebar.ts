import {type StarlightUserConfig} from "@astrojs/starlight/types";

type Sidebar = StarlightUserConfig['sidebar'];
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

export const guidesSidebar: ArrayElement<Sidebar> = {
    label: 'Contributing Guide',
    items: [
        // Each item here is one entry in the navigation menu.
        {label: 'Example Guide', slug: 'docs/guides/example'},
        {label: 'Building the Compiler', slug: 'docs/guides/building-the-compiler'},
        {label: 'Editing this Documentation', slug: 'docs/guides/documentation'},
    ],
};