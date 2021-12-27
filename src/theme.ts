import { extendTheme } from 'native-base';

const config = {
    useSystemColorMode: false,
    initialColor: 'light'
}

const colors = {
    yellow: '#fbe114',
    green: '#4ceed0',
    blue: '#51d3ee',
    bg: '#ffffff',
    pink: '#b7acff',
    red: '#fb1567',
    black: '#181818',
   
}

export default extendTheme({config, colors})