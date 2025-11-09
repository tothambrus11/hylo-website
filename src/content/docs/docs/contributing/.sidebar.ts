import {type StarlightUserConfig} from "@astrojs/starlight/types";

type Sidebar = StarlightUserConfig['sidebar'];
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

export const contributingGuideSidebar: ArrayElement<Sidebar> = {
    label: 'Contributing Guide',
    items: [
        {label: 'Introduction', slug: 'docs/contributing'},
        {label: 'How can you help?', slug: 'docs/contributing/open-topics'},
        {label: 'Building the Compiler', slug: 'docs/contributing/building-the-compiler'},
        {label: 'Editing this Documentation', slug: 'docs/contributing/documentation'},
        {label: 'Research Collaboration', slug: 'docs/contributing/research-collab'},
        {label: 'Diversity and Inclusion', slug: 'docs/contributing/diversity-and-inclusion'},
        {label: 'Code of Conduct', slug: 'docs/contributing/code-of-conduct'},
    ],
};

let a = 1 + 3;
a = a + a * (a * a);


