import * as React from 'react';
import {Text, View, StyleSheet, Dimensions, Animated, Easing} from 'react-native';
import BgOne from '../img/background/bg1.svg';
import BgTwo from '../img/background/bg2.svg';
import BgThree from '../img/background/bg3.svg';
import BgFour from '../img/background/bg4.svg';
import BgFive from '../img/background/bg5.svg';
import BgSix from '../img/background/bg6.svg';
import BgSeven from '../img/background/bg7.svg';
import BgEight from '../img/background/bg8.svg';
import BgNine from '../img/background/bg9.svg';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const IndexScreen = () => {
    const animatedValue = React.useRef(new Animated.Value(0)).current;


    const yVal1 = animatedValue.interpolate({
        inputRange: [.1, .2],
        outputRange: [0, 350],
    });

    const yVal2 = animatedValue.interpolate({
        inputRange: [.1, .2],
        outputRange: [100, 350],
    });

    const yVal3 = animatedValue.interpolate({
        inputRange: [.2, .3],
        outputRange: [0, 350],
    });

    const yVal4 = animatedValue.interpolate({
        inputRange: [.3, .4],
        outputRange: [0, 350],
    });

    const yVal5 = animatedValue.interpolate({
        inputRange: [.4, .5],
        outputRange: [0, 350],
    });

    const yVal6 = animatedValue.interpolate({
        inputRange: [.5, .7],
        outputRange: [0, 350],
    });

    const yVal7 = animatedValue.interpolate({
        inputRange: [.5, .7],
        outputRange: [0, 350],
    });

    const yVal8 = animatedValue.interpolate({
        inputRange: [.7, .8],
        outputRange: [0, 350],
    });

    const yVal9 = animatedValue.interpolate({
        inputRange: [.8, .9],
        outputRange: [0, 350],
    });

    const animStyle1 = {
        transform: [
            {
                translateY: yVal1,
                translateX: 0,
            },
        ],
    };
    const animStyle2 = {
        transform: [
            {
                translateY: yVal2,
                translateX: 0,
            },
        ],
    };

    const animStyle3= {
        transform: [
            {
                translateY: yVal3,
                translateX: 0,
            },
        ],
    };

    const animStyle4= {
        transform: [
            {
                translateY: yVal4,
                translateX: 0,
            },
        ],
    };

    const animStyle5= {
        transform: [
            {
                translateY: yVal5,
                translateX: 0,
            },
        ],
    };

    const animStyle6= {
        transform: [
            {
                translateY: yVal6,
                translateX: 0,
            },
        ],
    };

    const animStyle7= {
        transform: [
            {
                translateY: yVal7,
                translateX: 0,
            },
        ],
    };

    const animStyle8= {
        transform: [
            {
                translateY: yVal8,
                translateX: 0,
            },
        ],
    };

    const animStyle9= {
        transform: [
            {
                translateY: yVal9,
                translateX: 0,
            },
        ],
    };

    Animated.sequence([
        Animated.loop(Animated.timing(animatedValue , {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        })),
        Animated.loop(Animated.timing(animatedValue , {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }))
    ]).start();


    return(
        <View style={styles.bgImageCover}>
            <Animated.View style={[styles.bgImage1, animStyle1]}><BgOne style={styles.bgImage1}/></Animated.View>
            <Animated.View style={[styles.bgImage2, animStyle2]}><BgTwo style={styles.bgImage2}/></Animated.View>
            <Animated.View style={[styles.bgImage3, animStyle3]}><BgThree style={styles.bgImage3}/></Animated.View>
            <Animated.View style={[styles.bgImage4, animStyle4]}><BgFour style={styles.bgImage4}/></Animated.View>
            <Animated.View style={[styles.bgImage5, animStyle5]}><BgFive style={styles.bgImage5}/></Animated.View>
            <Animated.View style={[styles.bgImage6, animStyle6]}><BgSix style={styles.bgImage6}/></Animated.View>
            <Animated.View style={[styles.bgImage7, animStyle7]}><BgSeven style={styles.bgImage7}/></Animated.View>
            <Animated.View style={[styles.bgImage8, animStyle8]}><BgEight style={styles.bgImage8}/></Animated.View>
            <Animated.View style={[styles.bgImage9, animStyle9]}><BgNine style={styles.bgImage9}/></Animated.View>
        </View>
    )
};

const styles = StyleSheet.create({
    bgImageCover: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 1/2,
        flex: 1,
        flexDirection: 'column',
    },
    bgImage1 : {
        flex: 1,
        marginVertical: Dimensions.get('window').height*2/100,
        marginHorizontal: Dimensions.get('window').width * getRandomInt(25)/100
    },
    bgImage2: {
        flex: 1,
        marginVertical: Dimensions.get('window').height*2/100,
        marginHorizontal: Dimensions.get('window').width * getRandomInt(10)/100
    },
    bgImage3: {
        flex: 1,
        marginVertical: Dimensions.get('window').height*2/100,
        marginHorizontal: Dimensions.get('window').width * getRandomInt(35)/100
    },
    bgImage4: {
        flex: 1,
        marginVertical: Dimensions.get('window').height*2/100,
        marginHorizontal: Dimensions.get('window').width * getRandomInt(15)/100
    },
    bgImage5: {
        flex: 1,
        marginVertical: Dimensions.get('window').height*2/100,
        marginHorizontal: Dimensions.get('window').width * getRandomInt(50)/100
    },
    bgImage6: {
        flex: 1,
        marginVertical: Dimensions.get('window').height*2/100,
        marginHorizontal: Dimensions.get('window').width * getRandomInt(45)/100
    },
    bgImage7: {
        flex: 1,
        marginVertical: Dimensions.get('window').height*2/100,
        marginHorizontal: Dimensions.get('window').width * getRandomInt(25)/100
    },
    bgImage8: {
        flex: 1,
        marginVertical: Dimensions.get('window').height*2/100,
        marginHorizontal: Dimensions.get('window').width * getRandomInt(25)/100
    },
    bgImage9: {
        flex: 1,
        marginVertical: Dimensions.get('window').height*2/100,
        marginHorizontal: Dimensions.get('window').width * getRandomInt(35)/100
    }
})
export default IndexScreen;
