import { createGlobalStyle } from 'styled-components';

export const globalStyles = {
    palette: {
        mainText: '#1E2A32',
        secondaryText: '#708797',
        accentText: '#0079FF',
        accent: '#1B31A8',
    },
    fonts: {
        default: `font-family: 'WorkSans', sans-serif`,
        accent: `font-family: 'Rubik', sans-serif`,
    }
};

const fontsConfig = [
    {
        name: 'Rubik',
        src: 'Rubik/Rubik',
    },
    {
        name: 'WorkSans',
        src: 'WorkSans/WorkSans',
    },
];

function fontFace(name: string, src: string) {
    return `
        @font-face{
            font-family: '${name}';
            font-style: normal;
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
        const { name, src } = item;
        return fontFace(name, src);
    });
};

export const GlobalStyle = createGlobalStyle`
  body {
    ${withFonts()};
    background-color: #F4F8FA;
    color: ${globalStyles.palette.mainText};
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
`;
