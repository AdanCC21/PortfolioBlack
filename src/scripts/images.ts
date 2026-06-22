/**
 * Obtener array de rutas 
 * @param folderName 
 * @returns [ruta,ruta,ruta]
 */
export function GetImages(folderName: string) {
    folderName = folderName.replaceAll(' ', '-')

    const allImages = import.meta.glob(
        '/public/projects/**/*.{png,jpg,jpeg,webp}',
        { eager: true, import: 'default' }
    );

    const entries = Object.entries(allImages);

    const images = entries
        .filter(([path]) => path.includes(`/projects/${folderName}/`))
        .map(([, value]) => value as string);
    return images;
};