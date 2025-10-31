import { supabase } from "../utilis/supabase";


export const AddBox = async (nom: string, type: string, id_parent?: number) => {
    const { data, error } = await supabase.from('box').insert({
        nom_box: nom,
        type_box: type,
        id_box_parent: id_parent, 

    });
 
 
 if(error){
    console.log("🙅‍♂️ Pas Bon", error.message);
    return{success:false, error};
    
 }   // ...

 return{success: true, data};
}