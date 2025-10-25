import {type StarlightUserConfig} from "@astrojs/starlight/types";
import {guidesSidebar} from "./docs/guides/.sidebar.ts";
import {referencesSidebar} from "./docs/reference/.sidebar.ts";

type Sidebar = StarlightUserConfig['sidebar'];


export const sidebar: Sidebar = [
    guidesSidebar,
    referencesSidebar,
]


