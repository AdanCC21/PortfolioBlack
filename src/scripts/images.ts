/**
 * Obtener array de rutas 
 * @param folderName 
 * @returns [ruta,ruta,ruta]
 */
export function GetImages(folderName: string, source: 'projects' | 'achivements' | 'experience' = 'projects') {
    folderName = folderName.replaceAll(' ', '-')

    let allImages;
    switch(source){
      case 'projects':
        allImages = import.meta.glob('/public/projects/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
        break;
      case 'achivements':
        allImages = import.meta.glob('/public/achivements/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
        break;
      case 'experience':
        allImages = import.meta.glob('/public/experience/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
        break;   
    }

    const entries = Object.entries(allImages);

    const images = entries
        .filter(([path]) => path.includes(`/${source}/${folderName}/`))
        .map(([, value]) => value as string);
    return images;
};