import {merge} from "theme-ui"
import theme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index'
import "@fontsource/architects-daughter"
import "@fontsource/changa"
import { tailwind } from "@theme-ui/presets"

export default {
    ...theme,
    initialColorModeName: `dark`,
    colors: {
        text: tailwind.colors.gray[4],
        primary: `#42a5f5`,
        secondary: tailwind.colors.gray[4],
        background: `#1b1b1b`,
        toggleIcon: tailwind.colors.gray[4],
        heading: tailwind.colors.white,
        divide: `#f1f1f1`,
        muted: `#f1f1f1`,
        modes: {
            light: {
                text: `#424242`,
                primary: `#0077c2`,
                secondary: `#6d6d6d`,
                toggleIcon: tailwind.colors.gray[8],
                heading: tailwind.colors.black,
                divide: tailwind.colors.gray[4],
                background: `#efefef`,
                muted: `#1b1b1b`,
            },
        },
    },
}

