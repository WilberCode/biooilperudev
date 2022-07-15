module.exports = {
    mode: 'jit', 
    purge:{
        enabled: true,
        //content: ['*.php','./**/*.php'],
        content: ['*.php','./*.php','./**/*.php','./front-page.php'],
        //preserveHtmlElements: false,
        options: {
                whitelist: ['current-menu-item','menu-item','mobile-nav','current-menu-parent','sub-menu','menu-item-has-children','search-'],
                safelist: [/^sub-menu/,/^search-/],
                whitelistPatternsChildren: [/^menu-item/,/^search-/,'/^mobile-nav/','/^sub-menu/']

        }  
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            padding: '10px',
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1220px",
                xl: "1220px"
            }
        },
        extend: {
            spacing: {
                px: '1px',
                '0': '0',
                '1': '0.25rem',
                '2': '0.5rem',
                '2-1': '0.6rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem', 
                '12': '3rem',
                '13': '3.4rem',
                '14': '3.6rem',
                '15': '3.8rem',
                '16': '4rem',
                '17': '4.4rem',
                '20': '5rem',
                '22': '5.5rem',
                '24': '6rem',
                '26': '7rem',
                '27': '7.8rem',
                '32': '8rem',
                '33': '9.4rem',
                '34': '9.6rem',
                '35': '9.8rem',
                '40': '10rem',
                '41': '11rem',
                '42': '11.2rem', 
                '44': '11.4rem',
                '45': '11.5rem',
                '46': '11.563rem',
                '48': '12rem',
                '50': '13rem',
                '52': '13.2rem',
                '53': '13.4rem',
                '54': '13.6rem',
                '55': '13.8rem',
                '56': '14rem',
                '57': '15rem',
                '58': '16rem',
                '59': '17rem',
                '60': '18rem',
                '61': '19rem',
                '62': '20rem',
                '63': '21rem', 
                '63-1': '346.623px', 
                '64': '22rem',
                '64': '23rem',
            },
            colors: {
                link: {
                    'default': '#152268',
                    'hover': '#152268',
                },
                transparent: 'transparent',
                black: '#000',
                dark: '#211915',
                title:'#595A5C',
                white: '#fff',
                url:'#152268',
                line: "#b3b2b2", 
                line2: "#ababac", 
                success:"#0f834d",
                info:"#3d9cd2",
                error:"#e2401c",
                body: "#fce7df",
                layout:'#f4af93',
                heading:'#414042',
                paragraph:'#58595B',  

                primary: { 
                    100: '#F9D6C7', 
                    200: '#F6BAA2', 
                    300: '#F29E7D',  
                    500: '#ea5f28',
                },
                secondary: { 
                    500: '#FF4300',  
                }
            }, 
           fontSize: {
                xxs: '13px',
                xs: '14px', 
                sm: '15px',
                base: '16px',
                lg: '17px',
                xl: '18.36px',
                xl1: '18.62px',
                xl2: '19px',
                '1xl': '23.69px',
                '2xl': '1.5rem',
                '3xl': '27.08px',
                '4xl': '33.85px',
                '5xl': '3rem',
                '6xl': '4rem', 
            },
           
            maxWidth: {
                xs: '20rem',
                sm: '24rem',
                md: '28rem',
                lg: '32rem',
                xl: '36rem',
                '2xl': '42rem',
                '3xl': '48rem',
                '4xl': '56rem',
                '5xl': '64rem',
                '6xl': '1302px',
                'modal': '66rem',
                'container': '84.25rem',
                'front': '1366px',
                full: '100%',
            },
           
        },
        fontFamily: { 
            helvetica: 'helvetica'
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            maxsm: {'max': '640px'},
            maxmd: { 'max': '768px'},
            maxlg: {'max': '1023px'},
            maxl: {'max': '1280px'},
            maxxl: {'max': '1340px'}
        }
        
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
    },
    plugins: [
        ({addUtilities}) => {
            const utils = {
                '.translate-x-half': {
                    transform: 'translateX(50%)',
                },
            };
            addUtilities(utils, ['responsive'])
        }
    ]
};
