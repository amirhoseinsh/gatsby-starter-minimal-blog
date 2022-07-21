import { merge } from "theme-ui"
import theme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index'
import "@fontsource/architects-daughter"
import "@fontsource/changa";
import "@fontsource/blinker";
import "@fontsource/lato"; // Defaults to weight 400.

import { tailwind } from "@theme-ui/presets"

export default {
    ...theme,
    initialColorModeName: `dark`,
    sizes: {
        container: { maxWidth: '100%' },
    },
    fonts: {
        heading: 'Blinker',
        body: 'Lato'
    },
    colors: {
        text: tailwind.colors.gray[4],
        primary: `#895ecc`,
        secondary: tailwind.colors.gray[4],
        background: `#010101`,
        toggleIcon: tailwind.colors.gray[4],
        heading: tailwind.colors.white,
        divide: `#f1f1f1`,
        muted: `#f1f1f1`,
        modes: {
            light: {
                text: `#535353`,
                primary: `#af1879`,
                secondary: `#6d6d6d`,
                toggleIcon: tailwind.colors.gray[8],
                heading: `#1b1b1b`,
                divide: `#6d6d6d`,
                background: `#F6F5F1`,
                muted: `#424242`,
            },
        },
    },
}

