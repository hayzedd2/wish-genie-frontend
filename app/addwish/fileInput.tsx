
import supabase ,{ supabaseUrlConfig } from "@/lib/supabaseClient";

export const handleImageUpload = async (file: File) => {  
  console.log(file)
  try {
    const fileName = `${Date.now()}-${file.name}`;
    const storageBucket = "wishgenie"; // Or your preferred bucket
    const { data, error } = await supabase.storage
      .from(storageBucket)
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) throw error;
    // Get the public URL
    const publicUrl = `${supabaseUrlConfig}/storage/v1/object/public/${storageBucket}/${data.path}`;
    console.log(publicUrl)
    return publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
