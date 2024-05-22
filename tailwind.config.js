export default {
    content: [
        "./index.html",
        "./components/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'heading': ['Nunito-San', 'sans-serif'],

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
            xl: '1300px',
        },
        extend: {
            translate: {
                '1/12': '8.333333%',
            },
            margin: {
                '1/12': '8.333333%',
            },
            colors: {
                'primary': '#3AB67B',
                'secondary': '#4D4F62',
            },
        },
    },
    plugins: [],
}
