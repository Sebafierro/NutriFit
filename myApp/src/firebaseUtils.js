import { collection, doc, setDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase"; 

export async function crearUsuario(usuarioID, usuarioData) {
  try {
    const usuarioRef = doc(db, "usuarios", usuarioID);
    await setDoc(usuarioRef, usuarioData); 
    console.log("Usuario creado exitosamente");
  } catch (error) {
    console.error("Error al crear usuario: ", error);
  }
}

export async function obtenerUsuarios() {
  try {
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    const usuarios = [];
    querySnapshot.forEach((doc) => {
      usuarios.push({ id: doc.id, ...doc.data() });
    });
    return usuarios;
  } catch (error) {
    console.error("Error al obtener usuarios: ", error);
    return [];
  }
}

export async function obtenerUsuarioPorID(usuarioID) {
  try {
    const docRef = doc(db, "usuarios", usuarioID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No se encontró el usuario");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener usuario por ID: ", error);
    return null;
  }
}

export async function actualizarUsuario(usuarioID, usuarioData) {
  try {
    const usuarioRef = doc(db, "usuarios", usuarioID);
    await updateDoc(usuarioRef, usuarioData); 
    console.log("Usuario actualizado exitosamente");
  } catch (error) {
    console.error("Error al actualizar usuario: ", error);
  }
}

export async function eliminarUsuario(usuarioID) {
  try {
    const usuarioRef = doc(db, "usuarios", usuarioID);
    await deleteDoc(usuarioRef); 
    console.log("Usuario eliminado exitosamente");
  } catch (error) {
    console.error("Error al eliminar usuario: ", error);
  }
}
