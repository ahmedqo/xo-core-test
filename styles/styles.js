import { XOStyle } from 'xo-core';

export default XOStyle({
    _404: {
        width: '100%',
        height: '100vh',
        position: 'fixed',
        inset: 0,
        fontSize: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
    },
    colContainer: {
        flexDirection: 'column',
        maxWidth: '1200px',
        display: 'flex',
        margin: 'auto',
        gap: '1rem',
    },
    container: {
        maxWidth: '1200px',
        flexWrap: 'wrap',
        display: 'flex',
        margin: 'auto',
        gap: '1rem',
    },
    items: {
        "&>*:not(xo-button)": {
            width: '100%',
        },
        alignItems: 'flex-end',
    },
    pad: {
        padding: '1rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 10%)',
        gap: '0',
        rowGap: '1rem'
    },
    icon: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        alignItems: 'center',
        div: {
            fontSize: '1rem',
            fontWeight: 'bolder',
            overflow: 'hidden',
            width: '100%',
            textAlign: 'center',
        }
    },
    m0: {
        margin: 0,
    },
    block: {
        display: 'block',
    }
});