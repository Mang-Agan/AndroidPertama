import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TabsItem from "../TabsItem/TabsItem";

export default class BottomTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { state, descriptors, navigation } = this.props;
        const styles = StyleSheet.create({
            container: {
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#FFFFFF',
                justifyContent: 'space-between',
                paddingHorizontal: 55,
                paddingVertical: 14,
            }
        });
        return (

            <View style={styles.container}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TabsItem key={index} index={index} isFocused={isFocused} onLongPress={onLongPress} onPress={onPress} label={label} />
                    );
                })}
            </View>
        );

    }
}