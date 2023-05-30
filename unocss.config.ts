import presetWeapp from 'unocss-preset-weapp'
import { defineConfig, presetIcons } from 'unocss'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      prefix: 'k-',
    }),
    presetIcons(),
  ],
  shortcuts: [
    {
      'k-border-base': 'k-border k-border-gray-500_10',
      'k-center': 'k-flex k-justify-center k-items-center',
      'k-col-center': 'k-flex k-flex-col k-justify-center k-items-center',
      'k-full': 'k-w-full k-h-full',
      'k-bg-base': 'k-bg-#f6f7fb',
      'k-text-c1': 'k-color-#000/85',
      'k-text-c2': 'k-color-#000/65',
      'k-text-c3': 'k-color-#000/45',
      'k-text-c4': 'k-color-#000/25',
    },
  ],
  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify({
      classPrefix: 'k-',
      prefix: 'k-',
      prefixedOnly: true,
    }),
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
})
