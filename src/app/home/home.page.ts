import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public places = [];
  public search = '';

  constructor() {

    // consulta remota

    this.places.push({
      image:'https://i.pinimg.com/originals/44/f7/55/44f7553eb83a7751aa73cfbceccb00b6.jpg',
      title: 'Lugar junto al río donde crece el frijol enredado en la caña de carrizo',
      subtitle: 'Acaponeta',
      descrition: 'Y que me dices de Acaponeta',
      active: true
    });

    this.places.push({
      image:'https://i.ytimg.com/vi/hLNgLnTT0ac/maxresdefault.jpg',
      title: 'Lugar de Aguacates',
      subtitle: 'Ahuacatlan',
      descrition: 'No aparece en el corrido de Nayarit',
      active: false
    });

    this.places.push({
      image:'https://blog.seccionamarilla.com.mx/wp-content/uploads/2017/12/Amatl%C3%A1n-de-Ca%C3%B1as2.jpg',
      title: 'Lugar donde abunda el amate y papel',
      subtitle: 'Amatlan de Cañas',
      descrition: 'Aguas termales',
      active: true
    });

    this.places.push({
      image:'https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2019-06/what%20to%20do%20Bahia%20de%20Banderas.jpg',
      title: 'Así se llama la Bahía',
      subtitle: 'Bahía de Banderas',
      descrition: 'Sin olvidar a Valle de Banderas',
      active: true
    });

    this.places.push({
      image:'https://static2.abc.es/media/viajar/2020/09/10/compostela-mexico1-kGJE--1200x630@abc.jpg',
      title: 'Lugar donde hay serpientes',
      subtitle: 'Compostela',
      descrition: 'Que linda es su hermosa Compostela',
      active: true
    });

    this.places.push({
      image:'https://elsouvenir.com/wp-content/uploads/2014/08/Portada.-Sierra-del-Nayar.-Nayarit.-Foto-Daniel-Stoychev-3.jpg',
      title: 'Por el rey Nayar',
      subtitle: 'El Nayar',
      descrition: 'No aparece en el corrido tampoco',
      active: true
    });

    this.places.push({
      image:'https://upload.wikimedia.org/wikipedia/commons/f/f6/Iglesia_de_Huajicori.jpg',
      title: 'Sin toponimia disponible',
      subtitle: 'Huajicori',
      descrition: 'Mucha área verde',
      active: true
    });

    this.places.push({
      image:'https://www.mexicoescultura.com/galerias/espacios/principal/ixtlapp.jpg',
      title: 'Hay un rio',
      subtitle: 'Ixtlan del Rio',
      descrition: 'Que me dices de Ixtlan',
      active: true
    });

    this.places.push({
      image:'https://ml4ww5sfywqg.i.optimole.com/UCJ2sQ-27cWHGob/w:1030/h:1280/q:auto/http://viajaxmexico.com.mx/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-19-at-5.37.11-PM.jpeg',
      title: 'Médico brujo',
      subtitle: 'Jala',
      descrition: 'No corrido',
      active: true
    });

    this.places.push({
      image:'https://upload.wikimedia.org/wikipedia/commons/2/2a/La_Yesca%2C_Nayarit%2C_M%C3%A9xico.jpg',
      title: 'Mucho cerro',
      subtitle: 'La Yesca',
      descrition: '¿Qué es una Yesca?',
      active: true
    });

    this.places.push({
      image:'https://i.ytimg.com/vi/YUKA-Jd_d3k/maxresdefault.jpg',
      title: 'Una Rosa Morada',
      subtitle: 'Rosamorada',
      descrition: 'Ahí crecí',
      active: true
    });

    this.places.push({
      image:'https://i.ytimg.com/vi/QhB5UFk9YZ0/maxresdefault.jpg',
      title: 'Por el General Mariano Ruiz Montañés ',
      subtitle: 'Ruiz',
      descrition: 'Y Ruiz',
      active: true
    });

    this.places.push({
      image:'https://i.ytimg.com/vi/SXamvRgvGe0/maxresdefault.jpg',
      title: 'El  muelle',
      subtitle: 'San Blas',
      descrition: 'Que lindo es el puerto de San Blas',
      active: true
    });

    this.places.push({
      image:'https://i.ytimg.com/vi/hhjBry0r_Q4/maxresdefault.jpg',
      title: 'Lagunitas',
      subtitle: 'San Pedro Lagunillas',
      descrition: 'Pequeñitas',
      active: true
    });

    this.places.push({
      image:'https://elsouvenir.com/wp-content/uploads/2017/09/santa-maria-del-oro-nayarit-2.jpg',
      title: 'Mitica laguna',
      subtitle: 'Santa Maria del Oro',
      descrition: 'Y una cascada',
      active: true
    });

    this.places.push({
      image:'https://gentenayarit.com/wp-content/uploads/2019/09/sannnnntt.jpg',
      title: 'Lugar de perros',
      subtitle: 'Santiago Ixcuintla',
      descrition: 'Eque lindo es mi Santiago, lugar donde nací',
      active: true
    });

    this.places.push({
      image:'https://tecuala.gob.mx/images/2017/10/06/turismo5-3.jpg',
      title: 'Lugar de muchas fieras',
      subtitle: 'Tecuala',
      descrition: 'La orgullosa, donde vivi feliz',
      active: true
    });

    this.places.push({
      image:'https://nayaritenamora.mx/wp-content/uploads/2020/06/Catedral-1024x576.jpg',
      title: 'lugar de piedras macizas',
      subtitle: 'Tepic',
      descrition: 'Que lindo es Tepic',
      active: true
    });

    this.places.push({
      image:'https://i.pinimg.com/originals/50/2a/d4/502ad4ca82e1b46f00c1b4f8f255e635.jpg',
      title: 'Tierra de conejos',
      subtitle: 'Tuxpan',
      descrition: 'Ahí me embriago de felicidad',
      active: true
    });

    this.places.push({
      image:'https://www.meganoticias.mx/uploads/noticias/posponen-nombramiento-de-xalisco-como-ciudad-37387.jpg',
      title: 'Lugar sobre el arenal',
      subtitle: 'Xalisco',
      descrition: 'Xalisquillo',
      active: true
    });

  }

  filter(): void{
    console.log('Buscando...' + this.search);

    this.places = this.places.filter((place) => {
      return(place.title.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
    });
  }

  deletePlace(pos: number): void{
    this.places.splice(pos, 1);
  }

  changeStatus(pos: number): void{
    this.places[pos].active = !this.places[pos].active;
  }

}
