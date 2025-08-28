export const getImageUrl = (material: any): string | null => {
    const imgPrefix = 'https://cdn-m.sport24.ru/m/';

    if (material && material.previewImage && material.previewImage.image) {
        return createImageUrl(material.previewImage.image);
    }

    if (material && material.socialNetworkImages) {
        if (material.socialNetworkImages.image) {
            return createImageUrl(material.socialNetworkImages.image);
        }
        if (material.socialNetworkImages.vkImage) {
            return createImageUrl(material.socialNetworkImages.vkImage);
        }
    }

    return null;
};

export const createImageUrl = (url) => {
    const imgPrefix = 'https://cdn-m.sport24.ru/m/';
    if (url) {
        return imgPrefix + url;
    }
    return null;
};
