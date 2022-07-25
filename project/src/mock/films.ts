import { Films } from '../types/film';

export const films: Films = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    genre: ['Crime', 'Documentary'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse sint eaque fugit, ratione numquam voluptate facere error consectetur sapiente, quidem ad nobis',
    director: 'David Lynch',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Jeff Goldblum'],
    runTime: 157,
    releaseDate: new Date(),
    rating: 9.5,
    promo: false,
    reviews: [1, 2, 3],
  }, {
    id: 2,
    title: 'Bohemian Rhapsody',
    poster: 'img/bohemian-rhapsody.jpg',
    video: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    genre: ['Romance'],
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam magnam sapiente sit vitae! Laudantium, voluptates sint!',
    director: 'Martin Scorsese',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Jeff Goldblum'],
    runTime: 145,
    releaseDate: new Date(),
    rating: 4.5,
    promo: true,
    reviews: [4, 5],
  }, {
    id: 3,
    title: 'Macbeth',
    poster: 'img/macbeth.jpg',
    video: 'https://vod-progressive.akamaized.net/exp=1658737956~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1894%2F27%2F684472013%2F3157002732.mp4~hmac=7204e65e85096d07b0d680f1ecbbf49ebc216cf033e8b5b4a12a46a4b0b7b704/vimeo-prod-skyfire-std-us/01/1894/27/684472013/3157002732.mp4',
    genre: ['Sci-Fi'],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ad nemo provident? Repellat nemo dolorum doloremque sequi vel atque necessitatibus repudiandae adipisci, beatae odit ut rerum voluptates error autem laudantium',
    director: 'Joel and Ethan Coen',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tilda Swinton', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes'],
    runTime: 133,
    releaseDate: new Date(),
    rating: 2.3,
    promo: false,
    reviews: [6, 7, 8, 9],
  }, {
    id: 4,
    title: 'Aviator',
    poster: 'img/aviator.jpg',
    video: 'https://vod-progressive.akamaized.net/exp=1658738488~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F399%2F29%2F726996990%2F3371083255.mp4~hmac=09cfce934d72f580b434cff9b51b17ca1ab4411f32663b29621fe654e6c80416/vimeo-prod-skyfire-std-us/01/399/29/726996990/3371083255.mp4?filename=file.mp4',
    genre: ['Comedies', 'Horror'],
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nihil amet ad! Libero, pariatur, unde soluta minima provident, temporibus dolore cum excepturi dolores dolor officiis ducimus',
    director: 'Steven Soderbergh',
    starring: ['Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
    runTime: 127,
    releaseDate: new Date(),
    rating: 6.8,
    promo: false,
    reviews: [10, 11],
  }, {
    id: 5,
    title: 'We need to talk about Kevin',
    poster: 'img/we-need-to-talk-about-kevin.jpg',
    video: 'https://player.vimeo.com/progressive_redirect/playback/716706676/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=b9b1fc5b6e678e6bc37de5db67536760c1719fd6685df75c7f0ecb3f10f8b9cd',
    genre: ['Dramas', 'Thrillers'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sint cum corporis!',
    director: 'Terrence Malick',
    starring: ['Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson', 'Adrien Brody', 'Ralph Fiennes', 'Jeff Goldblum'],
    runTime: 120,
    releaseDate: new Date(),
    rating: 7,
    promo: false,
    reviews: [12, 13, 14],
  }, {
    id: 6,
    title: 'What We Do in the Shadows',
    poster: 'img/what-we-do-in-the-shadows.jpg',
    video: 'https://vod-progressive.akamaized.net/exp=1658738528~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F70%2F26%2F650353455%2F2984183843.mp4~hmac=172f258b6b89ee73d314d9ab14a9f0fda9e7ee608e8d536ecbd7635d52360e65/vimeo-prod-skyfire-std-us/01/70/26/650353455/2984183843.mp4',
    genre: ['Mystery'],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima et recusandae distinctio corporis quam quae veritatis. Autem culpa rem, quia pariatur optio rerum ipsam dolor ullam, totam amet assumenda aspernatur nisi, inventore fugiat doloribus.',
    director: 'Abbas Kiarostami',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Owen Wilkinson'],
    runTime: 98,
    releaseDate: new Date(),
    rating: 8,
    promo: false,
    reviews: [15, 16],
  }, {
    id: 7,
    title: 'Revenant',
    poster: 'img/revenant.jpg',
    video: 'https://vod-progressive.akamaized.net/exp=1658738604~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2983%2F28%2F714915842%2F3314672617.mp4~hmac=34f4ec16ad5d34bbcbcbaa037d2c5f5454d006674fd2e311160eee9e5e6eefc3/vimeo-prod-skyfire-std-us/01/2983/28/714915842/3314672617.mp4?filename=file.mp4',
    genre: ['Sci-Fi'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis id dignissimos, provident commodi ea expedita non quibusdam accusamus. Autem exercitationem, asperiores repellendus sed laboriosam numquam veritatis?',
    director: 'Errol Morris',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Adrien Brody', 'Ralph Fiennes'],
    runTime: 111,
    releaseDate: new Date(),
    rating: 10,
    promo: false,
    reviews: [17, 18],
  }, {
    id: 8,
    title: 'Johnny English',
    poster: 'img/johnny-english.jpg',
    video: 'https://player.vimeo.com/progressive_redirect/playback/694124248/rendition/360p?loc=external&oauth2_token_id=57447761&signature=1563b3933cb900218850d211ea9f8a88eb0ccd40c50ee18e5b512db65f91aee7',
    genre: ['Crime', 'Comedies', 'Romance'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque minus nulla officia corporis, delectus inventore quidem, facilis totam unde aliquid, impedit fuga labore? Dignissimos, aliquam iure velit sunt voluptate culpa!',
    director: 'Hayao Miyazaki',
    starring: ['Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson', 'Adrien Brody', 'Ralph Fiennes'],
    runTime: 104,
    releaseDate: new Date(),
    rating: 6.4,
    promo: false,
    reviews: [19, 20, 21],
  },
];
