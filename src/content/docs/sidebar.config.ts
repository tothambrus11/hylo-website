import {type StarlightUserConfig} from "@astrojs/starlight/types";

type SideBarConfig = StarlightUserConfig['sidebar'];

export const sidebar: SideBarConfig = [
    {
        label: 'Guides',
        items: [
            // Each item here is one entry in the navigation menu.
            {label: 'Example Guide', slug: 'docs/guides/example'},
        ],
    },
    {
        label: 'Reference',
        autogenerate: {directory: 'docs/reference'},
    },
]