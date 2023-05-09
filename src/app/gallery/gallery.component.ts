import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
ngOnInit(): void { // get blog posts from local storage if any
  let storedBlogPosts = localStorage.getItem('blogPosts');
  if (storedBlogPosts) {
    this.blogPosts = JSON.parse(storedBlogPosts);
  }
  interval(2000).subscribe(() => {
    this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    const imageElement = document.getElementById('natureImage') as HTMLImageElement;
    
    imageElement.src = this.imageUrls[this.currentIndex];
  });
 
}
imageUrls = [
  'https://source.unsplash.com/720x600/?hotels,imagination',
  'https://source.unsplash.com/720x600/?mountains,places,beaches',
  'https://source.unsplash.com/720x600/?holiday,nature',
  'https://source.unsplash.com/720x600/?nature,holiday,nature',
  'https://source.unsplash.com/720x600/?monuments,,',
  'https://source.unsplash.com/720x600/?hotels,nature',
  'https://source.unsplash.com/720x600/?beaches,holiday,nature',
  'https://source.unsplash.com/720x600/?people,places,beaches',
  'https://source.unsplash.com/720x600/?packing,nature',
  'https://source.unsplash.com/720x600/?luxory,holiday,nature',
  'https://source.unsplash.com/720x600/?tent,places,beaches',
  'https://source.unsplash.com/720x600/?,nature',
];
currentIndex = 0;

avatarUrls: {[key: string]: string} = { 
  'Tushar Sharma': 'https://source.unsplash.com/720x600/?avtars,people',
  'Paras Sharma': 'https://source.unsplash.com/720x600/?avtars,face',
  'Riya': 'https://source.unsplash.com/720x600/?girl,face',
  'Ankit Pandey':'https://source.unsplash.com/720x600/?avtars,face',
  'Amin Shiekh': 'https://source.unsplash.com/720x600/?boy,face',
  'Ayush':'https://source.unsplash.com/720x600/?avtars,face',
  // add more mappings for other letters
};

getAvatarUrl(name: string): string {
  const firstLetter = name.charAt(0).toLowerCase();
  return this.avatarUrls[firstLetter];
}




openPopup() {
  this.showPopup = true;
}

closePopup() {
  this.showPopup = false;
}

addBlogPost() {
  // add new blog post to array and local storage
  this.blogPosts.push(this.newBlogPost);
  localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));

  // reset new blog post object and close popup
  this.newBlogPost = {};
  this.showPopup = false;
}

deleteBlogPost(index: number) {
  // remove blog post from array and local storage
  this.blogPosts.splice(index, 1);
  localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
}

showPopup: boolean = false;
  newBlogPost: any = {};
  blogPosts: any[] = [];


constructor(private router: Router) {}
toggleHome() {
  this.router.navigate(['home']);
}
}
