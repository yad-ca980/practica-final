import AppNavigation from "./AppNavigation";
import AuthScreen from "../../screen/Auth/AuthScreen";
//Importa un hook personalizado llamado useAuth desde un archivo relativo. 
//Este hook está relacionado con la autenticación en la aplicación.
import { useAuth } from "../../hooks/useAuth";


export default function RootNavigation() {
  const { user } = useAuth();
  return user ? <AppNavigation /> : <AuthScreen />;
}