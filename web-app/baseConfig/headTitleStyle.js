const headerTitleStyle = {
    fontSize: 18,
    color: '#333',
    fontWeight: '700',
    backgroundColor: '#fff',
    // alignSelf: Platform.OS === "ios" ? 'center' : 'flex-start',
    alignSelf: 'center',
    letterSpacing: 2
};

const headerChildrenTitleStyle = {
    fontSize: 18,
    color: '#333',
    fontWeight: '700',
    backgroundColor: '#fff',
    alignSelf: Platform.OS === "ios" ? 'center' : 'flex-start',
    letterSpacing: 2
};

const headerStyle = {
    backgroundColor: '#fff',
};



export {
    headerTitleStyle,
    headerChildrenTitleStyle,
    headerStyle
}
