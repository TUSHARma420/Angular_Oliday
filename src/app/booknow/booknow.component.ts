import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Hotel {
  // id: number;
  name: string;
  city: string;
  distance: string;
  price: string;
  description: string;
  image: string;
}
// interface Villa {
//   // id: number;
//   name: string;
//   city: string;
//   distance: string;
//   price: string;
//   amenities: string;
//   image: string;
// }
@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css'],
})
export class BooknowComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
      
  }
  cities: string[] = [ 'Mumbai', 'Delhi', 'Bangalore', 'Chennai'];
  selectedCities: string[] = [];
  hotels: Hotel[] = [
    {
      // id: 1,
      name: 'Taj Hotel',
      city: 'Mumbai',
      distance: '1013',
      price: '18,466',
      description: 'Luxury seaside property',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg',
    },
    {
      // id: 2,
      name: 'JW Marriott Mumbai Juhu',
      city: 'Mumbai',
      distance: '11345',
      price: '15,500',
      description: 'Beachfront luxury hotel',
      image: 'https://im.whatshot.in/img/2020/Mar/jw-marriott-mumbai-1-1584039111.jpg',
    },
    {
      // id: 11,
      name: 'The Oberoi Mumbai',
      city: 'Mumbai',
      distance: '112',
      price: '22,000',
      description: 'Luxurious and scenic sea view',
      image:
        'https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-mumbai/gallery/featured/mumbai-gallery-featured-1-exterior-724x407.jpg',
    },
    {
      // id: 12,
      name: 'The Lalit Mumbai',
      city: 'Mumbai',
      distance: '231',
      price: '16,500',
      description: 'Sophisticated and centrally located',
      image:
        'https://www.dreamzkraft.com/admin/venueThumbnailImage/5d9f1b22949a3__st-regis.jpg',
    },
    {
      // id: 3,
      name: 'The Leela Palace New Delhi',
      city: 'Delhi',
      distance: '',
      price: '17,250',
      description: 'Luxurious palace hotel',
      image:
        'https://delhitourism.gov.in/dttdc/stay_in_delhi/images/the_leela_palace.jpg',
    },
    {
      // id: 4,
      name: 'The Oberoi, New Delhi',
      city: 'Delhi',
      distance: '1123',
      price: '19,500',
      description: 'Opulent city-center hotel',
      image:
        'https://www.ampersandtravel.com/media/845269/the-oberoi-delhi-delhi-north-india-7.jpg?mode=crop',
    },
    {
      // id: 13,
      name: 'Taj Palace, New Delhi',
      city: 'Delhi',
      distance: '1100',
      price: '15,500',
      description: 'Iconic and elegant stay',
      image:
        'https://www.tajhotels.com/content/dam/luxury/hotels/taj-palace-delhi/images/at_a_glance/16x7/Facade3.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
    },
    {
      // id: 14,
      name: 'The Leela Palace New Delhi',
      city: 'Delhi',
      distance: '1121',
      price: '19,000',
      description: 'Grand and luxurious with traditional Indian hospitality',
      image:
        'https://q-xx.bstatic.com/xdata/images/hotel/840x460/338870952.jpg?k=aa2751450dbfb8bc26355a0306aff23b89f841bc7434795ac5d11a85d0e51ce8&o=',
    },
    {
      // id: 5,
      name: 'ITC Gardenia, Bengaluru',
      city: 'Bangalore',
      distance: '1242',
      price: '16,200',
      description: 'Luxury business hotel',
      image:
        'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH70163219753592/QS1042/QS1042-Q1/1660557292353.jpeg',
    },
    {
      // id: 6,
      name: 'The Ritz-Carlton, Bangalore',
      city: 'Bangalore',
      distance: '1472',
      price: '22,000',
      description: 'Luxury hotel with city views',
      image:
        'https://imgcld.yatra.com/ytimages/image/upload/t_hotel_mobileactualimage/v1550126802/Hotel/Bengaluru/00015461/15461_-_The_Ritz-Carlton_Bangalore_-_BANGALORE_An1Jzt.jpg',
    },{
      // id: 7,
      name: 'The LaLiT Ashok Bangalore',
      city: 'Bangalore',
      distance: '1332',
      price: '13,000',
      description: 'Luxury Family hotel',
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/67/34/57/night-shot-exterior-at.jpg?w=700&h=-1&s=1',
    },
    {
      // id: 7,
      name: 'ITC Grand Chola, Chennai',
      city: 'Chennai',
      distance: '1132',
      price: '12,000',
      description: 'Luxury hotel with fine dining',
      image:
        'https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/headmast-desktop/pool-long-dusk.png',
    },
    {
      // id: 8,
      name: 'The Park Chennai',
      city: 'Chennai',
      distance: '1992',
      price: '7,500',
      description: 'Contemporary design hotel',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/25/Tidel_park%2C_Chennai.jpg',
    },
    

    {
      // id: 15,
      name: 'The Park Chennai',
      city: 'Chennai',
      distance: '1562',
      price: '6,500',
      description: 'Contemporary and stylish with excellent amenities',
      image:
        'https://www.theparkhotels.com/images/site-specific/chennai/home/home-main-banner-min.jpg',
    },
  ];

  
  
  // removeCity(city: string) {
  //   this.selectedCities = this.selectedCities.filter(selectedCity => selectedCity !== city);
  // }

  get filteredHotels(): Hotel[] {
    if (this.selectedCities.length === 0) {
      return this.hotels;
    } else {
      return this.hotels.filter((hotel: Hotel) => {
        return this.selectedCities.includes(hotel.city);
      });
    }
  }


  // villas: Villa[] = []; // Declare the villas property

  // filteredVillas: Villa[] = [];

  // // selectedCities: string[] = [];

  // selectedAmenities: string[] = [];

  // filterVillas(): void {
  //   this.filteredVillas = this.villas.filter((villa: Villa) => { // Explicitly define the type of villa
  //     const cityMatch = this.selectedCities.length === 0 || this.selectedCities.includes(villa.city);

  //     const amenityMatch = this.selectedAmenities.every((amenity: string) => villa.amenities.includes(amenity)); // Explicitly define the type of amenity

  //     return cityMatch && amenityMatch;
  //   });
  // }



  menuExpanded = false;

  toggleNav() {
    this.menuExpanded = !this.menuExpanded;
  }

  toggleFaq() {
    this.router.navigate(['faq']);
  }

  toggleHotel() {
    this.router.navigate(['hotel']);
  }

  register() {
    this.router.navigate(['register']);
  }
  goBack() {
    this.router.navigate(['register']);
    alert('Signed Out Successfully');
  }
  goBooknow() {
    this.router.navigate(['booknow']);
  }
  toggleHome() {
    this.router.navigate(['home']);
  }
}
