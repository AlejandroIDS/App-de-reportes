// CardData.ts
const nameArray = ['John Doe', 'Jane Smith'];
const locationArray = ['Algún estudio por ahí', 'Quién sabe dónde'];
const contentTextArray = ['Un montón de fotografías', 'Un retrato de una mujer.'];
const userIconUrlArray = [require('../assets/usericon1.png'), require('../assets/usericon2.png')];
const contentImageUrlArray = [require('../assets/image1.png'), require('../assets/image3.png')];
const timePassedArray = ['2 horas', '4 horas'];

export const getCardData = () => {
    return nameArray.map((_, i) => ({
        name: nameArray[i],
        location: locationArray[i],
        contentText: contentTextArray[i],
        userIconUrl: userIconUrlArray[i],
        contentImageUrl: contentImageUrlArray[i],
        timePassed: timePassedArray[i],
    }));
};


export const addCard = (data: {
    name: string;
    location: string;
    text: string;
    userIcon: any;
    image: any;
    time: string;
}) => {
    nameArray.push(data.name);
    locationArray.push(data.location);
    contentTextArray.push(data.text);
    userIconUrlArray.push(data.userIcon);
    contentImageUrlArray.push(data.image);
    timePassedArray.push(data.time);


    console.log('Nuevo reporte agregado:', data);
};
