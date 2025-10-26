import {type StarlightUserConfig} from "@astrojs/starlight/types";

type Sidebar = StarlightUserConfig['sidebar'];
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

export const contributingGuideSidebar: ArrayElement<Sidebar> = {
    label: 'Contributing Guide',
    items: [
        {label: 'Introduction', slug: 'docs/contributing'},
        {label: 'Picking a Topic', slug: 'docs/contributing/picking-a-topic'},
        {label: 'Building the Compiler', slug: 'docs/contributing/building-the-compiler'},
        {label: 'Editing this Documentation', slug: 'docs/contributing/documentation'},
        {label: 'University Collaboration', slug: 'docs/contributing/university-collab'},
        {label: 'Diversity and Inclusion', slug: 'docs/contributing/diversity-and-inclusion'},
        {label: 'Code of Conduct', slug: 'docs/contributing/code-of-conduct'},
    ],
};