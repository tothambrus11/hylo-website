// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';
import {sidebar} from "./src/content/docs/.sidebar.ts";
import * as fs from "node:fs";
import {pluginErrorPreview} from "./src/components/error-preview-plugin.ts";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Hylo',
            favicon: './src/assets/hylo-favicon.png',
            logo: {
                replacesTitle: true,
                // dark: './src/assets/hylo-blue.png',
                dark: './src/assets/hylo-green.png',
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
                'Header': './src/layouts/Header.astro',
            },

            sidebar: sidebar,
            customCss: ['./src/styles/global.css'],
            plugins: [starlightThemeRapide()],
            expressiveCode: {
                shiki: {
                    langs: [
                        JSON.parse(fs.readFileSync('./hylo.tmLanguage.json', 'utf-8'))
                    ]
                },
                plugins: [
                    pluginErrorPreview()
                ]
            }
        }),

    ],

    adapter: cloudflare(),
    vite: {
        plugins: [tailwindcss()],
    },
})
;