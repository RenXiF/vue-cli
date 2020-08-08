module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-order',
        'stylelint-scss'
    ],
    rules: {
        indentation: 4,
        // scss语法规范检查错误解决
        'at-rule-no-unknown': [true, {
            'ignoreAtRules': ['function', 'if', 'each', 'include', 'mixin', 'return'],
        }],
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'float',
            'clear',
            'display',
            'flex',
            'flex-grow',
            'flex-shrink',
            'flex-basis',
            'flex-flow',
            'flex-direction',
            'flex-wrap',
            'justify-content',
            'align-content',
            'align-items',
            'align-self',
            'order',
            'grid',
            'grid-template-rows',
            'grid-template-columns',
            'grid-template-areas',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-column-gap',
            'grid-row-gap',
            'grid-template',
            'grid-template-rows',
            'grid-template-columns',
            'grid-template-areas',
            'grid-gap',
            'grid-row-gap',
            'grid-column-gap',
            'grid-area',
            'grid-row-start',
            'grid-row-end',
            'grid-column-start',
            'grid-column-end',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
            'table-layout',
            'empty-cells',
            'caption-side',
            'border-collapse',
            'border-spacing',
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',
            'ruby-align',
            'ruby-merge',
            'ruby-position',
            'box-sizing',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'border',
            'border-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
            'border-style',
            'border-top-style',
            'border-right-style',
            'border-bottom-style',
            'border-left-style',
            'border-color',
            'border-top-color',
            'border-right-color',
            'border-bottom-color',
            'border-left-color',
            'border-image',
            'border-image-source',
            'border-image-slice',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
            'border-top',
            'border-top-width',
            'border-top-style',
            'border-top-color',
            'border-right',
            'border-right-width',
            'border-right-style',
            'border-right-color',
            'border-bottom',
            'border-bottom-width',
            'border-bottom-style',
            'border-bottom-color',
            'border-left',
            'border-left-width',
            'border-left-style',
            'border-left-color',
            'border-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-top-left-radius',
            'outline',
            'outline-width',
            'outline-color',
            'outline-style',
            'outline-offset',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'color',
            'background',
            'background-image',
            'background-position',
            'background-size',
            'background-repeat',
            'background-origin',
            'background-clip',
            'background-attachment',
            'background-color',
            'background-blend-mode',
            'isolation',
            'clip-path',
            'mask',
            'mask-image',
            'mask-mode',
            'mask-position',
            'mask-size',
            'mask-repeat',
            'mask-origin',
            'mask-clip',
            'mask-composite',
            'mask-type',
            'filter',
            'box-shadow',
            'opacity',
            'visibility',
            'overflow',
            'overflow-x',
            'overflow-y',
            'vertical-align',
            'columns',
            'column-width',
            'column-count',
            'column-rule',
            'column-rule-width',
            'column-rule-style',
            'column-rule-color',
            'column-fill',
            'column-span',
            'column-gap',
            'orphans',
            'writing-mode',
            'text-combine-upright',
            'unicode-bidi',
            'text-orientation',
            'direction',
            'text-rendering',
            'font-feature-settings',
            'font-language-override',
            'font',
            'font-style',
            'font-variant',
            'font-weight',
            'font-stretch',
            'font-size',
            'font-family',
            'line-height',
            'text-overflow',
            'white-space',
            'overflow-wrap',
            'word-wrap',
            'word-break',
            'line-break',
            'hyphens',
            'text-align',
            'text-align-last',
            'text-justify',
            'font-synthesis',
            'font-size-adjust',
            'letter-spacing',
            'font-kerning',
            'word-spacing',
            'text-transform',
            'quotes',
            'tab-size',
            'text-indent',
            'text-emphasis',
            'text-emphasis-style',
            'text-emphasis-color',
            'text-emphasis-position',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-style',
            'text-decoration-line',
            'text-underline-position',
            'text-shadow',
            'image-rendering',
            'image-orientation',
            'image-resolution',
            'shape-image-threshold',
            'shape-outside',
            'shape-margin',
            'transform-style',
            'transform',
            'transform-box',
            'transform-origin',
            'perspective',
            'perspective-origin',
            'backface-visibility',
            'transition',
            'transition-property',
            'transition-duration',
            'transition-timing-function',
            'transition-delay',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-fill-mode',
            'animation-play-state',
            'scroll-behavior',
            'scroll-snap-type',
            'scroll-snap-destination',
            'scroll-snap-coordinate',
            'resize',
            'cursor',
            'touch-action',
            'caret-color',
            'ime-mode',
            'object-fit',
            'object-position',
            'content',
            'counter-reset',
            'counter-increment',
            'will-change',
            'pointer-events',
            'z-index',
            'all',
            '--*',
            'page-break-before',
            'page-break-after',
            'page-break-inside',
            'widows',
        ]
    },
};
