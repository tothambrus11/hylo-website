// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'hylo',
            logo: {
                replacesTitle: true,
                dark: './src/assets/hylo-blue.png',
                light: './src/assets/hylo-black.png',
            },
            social: [
                {icon: 'github', label: 'GitHub', href: 'https://github.com/hylo-lang/hylo'},
                {
                    icon: 'slack',
                    label: 'Slack',
                    href: 'https://join.slack.com/t/val-qs97696/shared_invite/zt-1z3dsblrq-y4qXfEE6wr6uMEJSN9uFyg'
                },
            ],
            components: {
                'Header': './src/components/Header.astro',
            },
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {label: 'Example Guide', slug: 'guides/example'},
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: {directory: 'reference'},
                },
            ],
            plugins: [starlightThemeRapide()],
        })
        ,
    ],

    adapter: cloudflare(),
})
;