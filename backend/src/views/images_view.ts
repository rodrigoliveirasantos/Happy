import image from '../models/Image'
// Vai ser aqui onde será decidido quais dados serão enviados
export default {
    render(image: image){
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`
        };
    },

    renderMany(images: image[]){
        return images.map(image => this.render(image))
    }
};