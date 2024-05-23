export default {
    content: [
        "./index.html",
        "./components/*/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'heading': ['Nunito-San', 'sans-serif'],
            'content': ['Inter', 'sans-serif'],
        },
        container: {
            sm: '540px',
            md: '768px',
            lg: '1024px',
            xl: '1290px',
        },
        screens: {
            sm: '540px',
            md: '768px',
            lg: '1024px',
            xl: '1290px',
        },
        extend: {
            fontSize: {
                'content': '15px',
                'form': '13px'
            },
            gridTemplateColumns: {

                // Complex site-specific column configuration
                'table': '366px 444px minmax(479px, 1fr) ',
            },
            translate: {
                '1/24': '4.1666666%',
                '1/12': '8.333333%',
                '1/6': '16.6666667%',
            },
            margin: {
                '1/24': '4.1666666%',
                '1/12': '8.333333%',
                '1/6': '16.6666667%',
            },
            colors: {
                'primary': '#3AB67B',
                'secondary': '#4D4F62',
                'gray': '#979CA5',
                'light': {
                    'blue': '#F7F9FF',
                    'gray': '#E9E9EA',
                    'red': '#FFDCDF',
                },
                'dark': {
                    'blue': '#1F2F38',
                    'primary': '#2C8E5F'
                },
                'form': {
                    'red': '#E94040',
                    'black': '#151917',
                    'gray': '#F4F6F8'
                },
                'red': '#F5222D'
            },
        },
    },
    plugins: [],
}
