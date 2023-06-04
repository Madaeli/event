import { Text, View} from "react-native";
import { SafeAreaProvider, SafeAreaView } from  "react-native-safe-area-context";
import { s } from "./app.style";
import { Header } from "./components/Header/Header.jsx";
import { CardTodo } from "./components/CardTodo/CardTodo.jsx"

const TODO_LIST = [
  {id: 1, title : "Sortir le chien", isCompleted: true },
  {id: 1, title : "Aller chez le garagiste", isCompleted: false },
  {id: 1, title : "Faire les courses", isCompleted: true },
  {id: 1, title : "Appeler le vétérinaire", isCompleted: true },
];
export default function App() {
      return(
          <>
            <SafeAreaProvider>
                  <SafeAreaView style = { s.app }>
                        <View style={s.header}>
                          <Header/> 
                        </View>
                        <View style={s.body}>
                             <CardTodo todo={TODO_LIST[0]} />
                        </View>                 
                  </SafeAreaView>  
            </SafeAreaProvider>
            <View style={s.footer}>
                              <Text>Footer</Text>
          </View>
          </>       
      );
}


