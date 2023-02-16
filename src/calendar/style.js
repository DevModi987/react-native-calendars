import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';
export default function getStyle(theme = {}) {
    const appStyle = { ...defaultStyle, ...theme };
    return StyleSheet.create({
        container: {
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: appStyle.calendarBackground,                   
        },
        dayContainer: {
            flex: 1,
            alignItems: 'center',
            borderWidth:0
        },
        emptyDayContainer: {
            flex: 1
        },
        monthView: {
            backgroundColor: appStyle.calendarBackground,  
            borderWidth:0          
        },
        week: {            
            marginVertical: appStyle.weekVerticalMargin,
            flexDirection: 'row',
            justifyContent: 'space-around',                      
        },
        // @ts-expect-error
        ...(theme['stylesheet.calendar.main'] || {})
    });
}
