const style = {
    sliderMainComponent: {
        width: '90%',
        height: '90%',
        margin: 0,
        maxWidth: '3000px !important',
        overflowX: 'auto',
        overflowY: 'hidden !important',
        whiteSpace: 'nowrap',
        "&::-webkit-scrollbar": {
          display: 'none',
        },
        scrollbarWidth: 'none',
    },
    appMainContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'wheat'
    }
}

export default style;