export const NAV_MODEL: Nav[] = [
  {
    url: 'why-home-fitt',
    name: 'Why Occupi'
  },
  {
    url: 'how-it-works',
    name: 'How it works'
  },
  {
    url: 'testimonial',
    name: 'Testimonials'
  },
  {
    url: 'contact-us',
    name: 'Contact us',
  },

]

//rent-ready-section

  // {
  //   url: '',
  //   name: 'Case Studies'
  // },

export interface Nav {
url: string;
name: string;
dropdown?: Dropdown[];
}

export interface Dropdown {
url: string;
name: string;
}
