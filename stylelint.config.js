module.exports = {
    processors: ['stylelint-processor-styled-components'],
    extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
    rules: {
        'selector-pseudo-element-colon-notation': null,
        'value-keyword-case': null,
        'no-descending-specificity': null,
        'declaration-colon-newline-after': null,
        'declaration-empty-line-before': null,
    },
};