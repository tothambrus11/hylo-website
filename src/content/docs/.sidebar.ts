import {type StarlightUserConfig} from "@astrojs/starlight/types";
import {guidesSidebar} from "./docs/guides/.sidebar.ts";

type Sidebar = StarlightUserConfig['sidebar'];

export const sidebar: Sidebar = [
    guidesSidebar,
    {
        label: 'Reference',
        autogenerate: {directory: 'docs/reference'},
    },
]