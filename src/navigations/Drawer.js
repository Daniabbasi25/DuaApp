import { createDrawerNavigator } from '@react-navigation/drawer';
import WhenWakeUp from '../screens/when-waking-up/index'

const Drawer = createDrawerNavigator();

const  MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="WhenWakeUp" component={WhenWakeUp} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;