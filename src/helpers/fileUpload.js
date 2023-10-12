export const fileUpload = async (file) => {
    if(!file) throw new Error('No se ha seleccionado un archivo a subir');


    const cloudURL = 'https://api.cloudinary.com/v1_1/cursos-hc/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);


    try {
        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        });
        if (!resp.ok) throw new Error('Error al subir el archivo'); 
        
        const cloudResp = await resp.json();      
        return cloudResp.secure_url;
        
    }
    catch (error) {
        console.log(error)
        throw new Error( error);
    }
}