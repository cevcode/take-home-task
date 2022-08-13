import { createGlobalStyle } from 'styled-components';

export const globalStyles = {
    palette: {
        mainText: '#1E2A32',
        secondaryText: '#708797',
        accentText: '#0079FF',
        accent: '#1B31A8',
        borderColor: '#E9EEF2',
    },
    fonts: {
        default: `'WorkSans', sans-serif`,
        accent: `'Rubik', sans-serif`,
    },
    breakpoints: {
        mobile: '560px',
    }
};

const fontsConfig = [
    {
        name: 'Rubik',
        src: 'Rubik/Rubik-Light',
        fontWeight: 300,
    },
    {
        name: 'Rubik',
        src: 'Rubik/Rubik-Regular',
        fontWeight: 400,
    },
    {
        name: 'Rubik',
        src: 'Rubik/Rubik-Medium',
        fontWeight: 500,
    },
    {
        name: 'Rubik',
        src: 'Rubik/Rubik-SemiBold',
        fontWeight: 600,
    },
    {
        name: 'Rubik',
        src: 'Rubik/Rubik-Bold',
        fontWeight: 700,
    },
    {
        name: 'Rubik',
        src: 'Rubik/Rubik-Black',
        fontWeight: 800,
    },

    {
        name: 'WorkSans',
        src: 'WorkSans/WorkSans-Light',
        fontWeight: 300,
    },
    {
        name: 'WorkSans',
        src: 'WorkSans/WorkSans-Regular',
        fontWeight: 400,
    },
    {
        name: 'WorkSans',
        src: 'WorkSans/WorkSans-Medium',
        fontWeight: 500,
    },
    {
        name: 'WorkSans',
        src: 'WorkSans/WorkSans-SemiBold',
        fontWeight: 600,
    },
    {
        name: 'WorkSans',
        src: 'WorkSans/WorkSans-Bold',
        fontWeight: 700,
    },
    {
        name: 'WorkSans',
        src: 'WorkSans/WorkSans-Black',
        fontWeight: 800,
    },
];

function fontFace(name: string, src: string, fontWeight: number) {
    return `
        @font-face{
            font-family: '${name}';
            font-style: normal;
            font-weight: ${fontWeight};
            src: url(${'/fonts/' + src + '.eot'});
            src: url(${'/fonts/' + src + '.eot'}?#iefix) format('embedded-opentype'),
                 url(${'/fonts/' + src + '.woff'}) format('woff'),
                 url(${'/fonts/' + src + '.ttf'}) format('truetype'),
                 url(${'/fonts/' + src + '.svg'}#${name}) format('svg');
        }
    `;
}

export const withFonts = () => {
    return fontsConfig.map((item) => {
        const { name, src, fontWeight } = item;
        return fontFace(name, src, fontWeight);
    });
};

export const media = {
    lessThanMobile: `(max-width: ${globalStyles.breakpoints.mobile})`,
};

export const GlobalStyle = createGlobalStyle`
  body {
    ${withFonts()};
    background-color: #F4F8FA;
    color: ${globalStyles.palette.mainText};
    font-family: ${globalStyles.fonts.default};
    margin: 0;
    width: 100%;  
    padding: 0;
  }
  h1,h2,h3,h4,h5,h6,p,ol,ul {
    padding: 0;
    margin: 0;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  p {
    font-size: 1rem;
  }
  h1 {
    font-size: 4.5rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
  h4 {   
    font-size: 2.25rem;
  }
  h5 {
    font-size: 1.75rem;
  }
  h6 {
    font-size: 1.5rem;
  }
`;
