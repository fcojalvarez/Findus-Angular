module.exports = {
    purge: [],
    theme: {
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem'
            }
        },
        minWidth: {
            '0': '0',
            '3/4': '75%',
            '1/4': '25%',
            '1/2': '50%',
            'full': '100%',
        },
        maxWidth: {
            'fixed1': '500px'
        },
        minHeight: {
            'screen-90': '90vh',
            'screen-80': '80vh',
        },
        backgroundSize: {
            '40%': '40%',
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
    },
    plugins: [],
}