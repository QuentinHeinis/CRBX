import { createClient } from "@supabase/supabase-js";
import { ref } from "vue";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)





export const user = ref()
supabase.auth.onAuthStateChange(async () => {
    const { data, error } = await supabase.auth.getSession()
    user.value = data.session?.user
    console.log(user.value);
})

export const signout = async () => {
    const { error } = await supabase.auth.signOut()
}