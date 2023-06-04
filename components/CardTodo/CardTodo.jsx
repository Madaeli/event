import { TouchableOpacity } from "react-native";
import { Text, Image} from "react-native";
import checkImg from "../../assets/check.png";
export function CardTodo({ todo}){
  return(
    <TouchableOpacity>
       <Text> {todo.title}</Text>
        <Image   source= {checkImg}  />
    </TouchableOpacity>
  ) ;
}