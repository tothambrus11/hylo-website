import {type StarlightUserConfig} from "@astrojs/starlight/types";
import {guidesSidebar} from "./docs/guides/.sidebar.ts";

type Sidebar = StarlightUserConfig['sidebar'];

const outdatedBade = { badge: { text: 'outdated', variant: 'caution' } } as const;

export const sidebar: Sidebar = [
    guidesSidebar,
    {
        label: 'Reference',
        // autogenerate: {directory: 'docs/reference'},
        items: [
            { label: 'IR', link: 'https://docs.hylo-lang.org/hylo-ir', ...outdatedBade },
            { label: 'Language Specification', slug: 'docs/reference/specification', ...outdatedBade },
        ]
    },
]


